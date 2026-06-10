/* =====================================================================
   JUICE GLASS LOGIC (juice.js) v7
   Multi-point wave surface with cardinal-spline smoothing,
   spring physics for sloshing, and SVG gradient colour animation.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ================================================================
       DOM
       ================================================================ */
    var body        = document.body;
    var svg         = document.getElementById('liquid-svg');
    var liquidBody  = document.getElementById('liquid-body');
    var liquidGlow  = document.getElementById('liquid-glow');
    var juiceGrad   = document.getElementById('juice-grad');
    var gs1         = document.getElementById('gs1');
    var gs2         = document.getElementById('gs2');
    var gs3         = document.getElementById('gs3');
    var themeToggle = document.getElementById('theme-toggle');
    var labCard     = document.getElementById('lab-card');
    var sensorVal   = document.getElementById('sensor-val');
    var sensorCard  = document.getElementById('sensor-request-card');
    var btnSensor   = document.getElementById('btn-request-sensor');

    /* ================================================================
       THEME PALETTES  (gradient top → mid → bottom)
       ================================================================ */
    var THEMES = {
        orange: { top: '#FFD080', mid: '#FF8C00', bot: '#BF5000' },
        purple: { top: '#D8B4FF', mid: '#9B30FF', bot: '#5A1A8C' }
    };

    /* ================================================================
       STATE
       ================================================================ */
    var isPurple  = body.classList.contains('theme-purple');
    var useMotion = false;
    var time      = 0;

    // Spring-physics tilt state
    var curX = 0, curY = 0;   // rendered (smoothed)
    var tgtX = 0, tgtY = 0;   // target from sensor / mouse
    var velX = 0, velY = 0;   // velocity — drives sloshing overshoot
    var rawX = 0, rawY = 0;   // raw sensor readout (degrees)

    var SPRING  = 0.022;
    var DAMPING = 0.88;

    var W = window.innerWidth;
    var H = window.innerHeight;

    /* ================================================================
       SAFE LOCALSTORAGE
       ================================================================ */
    var store = {
        get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sandboxed */ } }
    };

    // Restore persisted theme
    if (store.get('juice-theme') === 'purple') {
        body.classList.remove('theme-orange');
        body.classList.add('theme-purple');
        isPurple = true;
        applyGradient('purple');
        setBtnLabel(true);
    }

    /* ================================================================
       VIEWPORT
       ================================================================ */
    function onResize() {
        W = window.innerWidth;
        H = window.innerHeight;
        svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    }
    onResize();
    window.addEventListener('resize', onResize);

    /* ================================================================
       GRADIENT COLOUR HELPERS
       ================================================================ */
    function applyGradient(theme) {
        var c = THEMES[theme];
        gs1.setAttribute('stop-color', c.top);
        gs2.setAttribute('stop-color', c.mid);
        gs3.setAttribute('stop-color', c.bot);
    }

    function hexToRgb(hex) {
        return [
            parseInt(hex.slice(1, 3), 16),
            parseInt(hex.slice(3, 5), 16),
            parseInt(hex.slice(5, 7), 16)
        ];
    }

    function rgbToHex(r, g, b) {
        return '#' + (
            (1 << 24) +
            (Math.round(r) << 16) +
            (Math.round(g) << 8) +
            Math.round(b)
        ).toString(16).slice(1);
    }

    function lerpHex(a, b, t) {
        var ca = hexToRgb(a), cb = hexToRgb(b);
        return rgbToHex(
            ca[0] + (cb[0] - ca[0]) * t,
            ca[1] + (cb[1] - ca[1]) * t,
            ca[2] + (cb[2] - ca[2]) * t
        );
    }

    /** Smooth colour transition between two gradient palettes. */
    function animateTheme(from, to) {
        var fc = THEMES[from], tc = THEMES[to];
        var start = performance.now();
        var dur = 700; // ms

        (function step(now) {
            var t = Math.min(1, (now - start) / dur);
            t = t * t * (3 - 2 * t); // smoothstep easing

            gs1.setAttribute('stop-color', lerpHex(fc.top, tc.top, t));
            gs2.setAttribute('stop-color', lerpHex(fc.mid, tc.mid, t));
            gs3.setAttribute('stop-color', lerpHex(fc.bot, tc.bot, t));

            if (t < 1) requestAnimationFrame(step);
        })(start);
    }

    /* ================================================================
       CARDINAL SPLINE  →  SVG cubic-bézier path
       Converts an array of {x,y} sample points into a smooth curve.
       ================================================================ */
    function spline(pts) {
        if (pts.length < 2) return '';
        var T = 0.35; // tension (0 = sharp, 0.5 = very smooth)
        var d = 'M' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);

        for (var i = 0; i < pts.length - 1; i++) {
            var p0 = pts[Math.max(0, i - 1)];
            var p1 = pts[i];
            var p2 = pts[i + 1];
            var p3 = pts[Math.min(pts.length - 1, i + 2)];

            var c1x = p1.x + (p2.x - p0.x) * T;
            var c1y = p1.y + (p2.y - p0.y) * T;
            var c2x = p2.x - (p3.x - p1.x) * T;
            var c2y = p2.y - (p3.y - p1.y) * T;

            d += ' C' +
                c1x.toFixed(1) + ' ' + c1y.toFixed(1) + ',' +
                c2x.toFixed(1) + ' ' + c2y.toFixed(1) + ',' +
                p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
        }
        return d;
    }

    /* ================================================================
       WAVE SURFACE GENERATOR
       Samples N points across the viewport width.  Each point's Y is
       the sum of a linear tilt + four sine-wave harmonics.
       Wave amplitude scales with current velocity for natural sloshing.
       ================================================================ */
    function surface(tx, ty, t, yShift) {
        // Base liquid level (from the top): 35 % down → ~65 % filled glass
        var base = H * 0.35 + ty * 0.35 + yShift;

        // Left-right tilt (rotates the surface like real gravity)
        var tilt = tx * 1.6;

        // Motion-responsive amplitude: faster sloshing → bigger waves
        var motion = Math.min(1.5, Math.sqrt(velX * velX + velY * velY) * 0.15);
        var amp    = 1 + motion;

        var N   = 28;            // sample count
        var pts = [];
        var TAU = Math.PI * 2;

        for (var i = 0; i <= N; i++) {
            var f = i / N;                       // 0 → 1 across width
            var x = -20 + f * (W + 40);          // extend past viewport edges

            // Linear tilt component
            var tiltY = (0.5 - f) * 2 * tilt;

            // Composite wave — four harmonics for an organic liquid look
            var w =
                Math.sin(f * TAU * 1.2 + t * 1.5)             * 14 * amp +
                Math.sin(f * TAU * 2.0 + t * 2.1 + 0.8)       *  7 * amp +
                Math.cos(f * TAU * 1.5 + t * 1.3 + 2.0)       *  9 +
                Math.sin(f * TAU * 3.0 + t * 2.7 + 1.2)       *  4;

            pts.push({ x: x, y: base + tiltY + w });
        }
        return pts;
    }

    /* ================================================================
       ANIMATION LOOP  (runs every frame via rAF)
       ================================================================ */
    function frame() {
        time += 0.016;  // ≈ 60 fps time-step

        /* --- Spring physics (produces natural overshoot / sloshing) --- */
        var ax = (tgtX - curX) * SPRING;
        var ay = (tgtY - curY) * SPRING;
        velX = (velX + ax) * DAMPING;
        velY = (velY + ay) * DAMPING;
        curX += velX;
        curY += velY;

        /* --- Build surface points --- */
        var pts = surface(curX, curY, time, 0);

        /* --- Main liquid body (closed path → viewport bottom) --- */
        var surfD = spline(pts);
        liquidBody.setAttribute('d',
            surfD +
            ' L' + (W + 20) + ' ' + (H + 10) +
            ' L-20 '              + (H + 10) + 'Z'
        );

        /* --- Surface glow highlight (same curve, stroke only) --- */
        liquidGlow.setAttribute('d', surfD);

        /* --- Move gradient origin to follow the wave level --- */
        var avgY = 0;
        for (var i = 0; i < pts.length; i++) avgY += pts[i].y;
        avgY /= pts.length;
        juiceGrad.setAttribute('y1', (avgY - 20).toFixed(0));
        juiceGrad.setAttribute('y2', H.toString());

        /* --- Sensor readout --- */
        if (sensorVal) {
            sensorVal.textContent =
                'Tilt: X: ' + rawX.toFixed(1) + '\u00B0 | Y: ' + rawY.toFixed(1) + '\u00B0';
        }

        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    /* ================================================================
       INPUT — Device Orientation  (mobile gyroscope)
       ================================================================ */
    function onOrientation(e) {
        var beta  = e.beta  || 0;   // -180 … 180 (front ↔ back)
        var gamma = e.gamma || 0;   // -90 … 90   (left ↔ right)

        rawX = gamma;
        rawY = beta;

        var max = 30;
        gamma = Math.max(-max, Math.min(max, gamma));
        beta  = Math.max(-max, Math.min(max, beta));

        var range = 55;
        tgtX = (gamma / max) * range;
        tgtY = (beta  / max) * range;
    }

    /* ================================================================
       INPUT — Desktop mouse fallback
       ================================================================ */
    function setupMouse() {
        window.addEventListener('mousemove', function (e) {
            if (useMotion) return;
            var nx = (e.clientX / W) * 2 - 1;
            var ny = (e.clientY / H) * 2 - 1;
            rawX = nx * 30;
            rawY = ny * 30;
            tgtX = nx * 55;
            tgtY = ny * 55;
        });

        window.addEventListener('mouseleave', function () {
            tgtX = tgtY = rawX = rawY = 0;
        });
    }

    /* ================================================================
       SENSOR DETECTION  &  iOS PERMISSION
       ================================================================ */
    function detect() {
        var mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (mobile && typeof DeviceOrientationEvent !== 'undefined') {
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                // iOS 13+ — must request user gesture
                if (sensorCard) sensorCard.classList.remove('hidden');
                if (labCard)    labCard.classList.add('hidden');
            } else {
                // Android / older iOS
                window.addEventListener('deviceorientation', onOrientation);
                useMotion = true;
            }
        } else {
            setupMouse();
        }
    }

    if (btnSensor) {
        btnSensor.addEventListener('click', function () {
            if (typeof DeviceOrientationEvent !== 'undefined' &&
                typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(function (r) {
                        if (r === 'granted') {
                            window.addEventListener('deviceorientation', onOrientation);
                            useMotion = true;
                        } else {
                            setupMouse();
                        }
                        if (sensorCard) sensorCard.classList.add('hidden');
                        if (labCard)    labCard.classList.remove('hidden');
                    })
                    .catch(function () {
                        if (sensorCard) sensorCard.classList.add('hidden');
                        if (labCard)    labCard.classList.remove('hidden');
                        setupMouse();
                    });
            } else {
                if (sensorCard) sensorCard.classList.add('hidden');
                if (labCard)    labCard.classList.remove('hidden');
                setupMouse();
            }
        });
    }

    /* ================================================================
       THEME TOGGLE
       ================================================================ */
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var from = isPurple ? 'purple' : 'orange';
            isPurple = !isPurple;
            var to = isPurple ? 'purple' : 'orange';

            body.classList.remove('theme-' + from);
            body.classList.add('theme-' + to);
            store.set('juice-theme', to);
            setBtnLabel(isPurple);
            animateTheme(from, to);
        });
    }

    function setBtnLabel(purple) {
        if (!themeToggle) return;
        themeToggle.textContent = purple
            ? 'Switch to Orange 🍊'
            : 'Switch to Grape 🍇';
    }

    /* ================================================================
       BUBBLES — small translucent spheres rising through the juice
       ================================================================ */
    function spawnBubble() {
        var el  = document.createElement('div');
        el.className = 'bubble';

        var size = 5 + Math.random() * 13;
        var x    = Math.random() * W;
        var dur  = 3 + Math.random() * 4;
        var bot  = Math.random() * 12;      // 0-12 % from viewport bottom

        el.style.width  = size + 'px';
        el.style.height = size + 'px';
        el.style.left   = x + 'px';
        el.style.bottom = bot + '%';
        el.style.animationDuration = dur + 's';

        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, dur * 1000);
    }

    setInterval(spawnBubble, 850);

    /* ---- Initialise ---- */
    detect();
});
