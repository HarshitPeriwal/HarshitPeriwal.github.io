/* =====================================================================
   TAARA FACTS LOGIC (facts.js)
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ================================================================
       DOM
       ================================================================ */
    var body       = document.body;
    var svg        = document.getElementById('liquid-svg');
    var liquidBody = document.getElementById('liquid-body');
    var liquidGlow = document.getElementById('liquid-glow');
    var juiceGrad  = document.getElementById('juice-grad');
    var gs1        = document.getElementById('gs1');
    var gs2        = document.getElementById('gs2');
    var gs3        = document.getElementById('gs3');
    var themeDot   = document.getElementById('theme-dot');
    var factsCard  = document.getElementById('facts-card');

    /* ================================================================
       THEME PALETTES
       ================================================================ */
    var THEMES = {
        orange: { top: '#FFD080', mid: '#FF8C00', bot: '#BF5000' },
        purple: { top: '#D8B4FF', mid: '#9B30FF', bot: '#5A1A8C' }
    };

    /* ================================================================
       STATE
       ================================================================ */
    var isPurple  = false;
    var useMotion = false;
    var time      = 0;

    var curX = 0, curY = 0;
    var tgtX = 0, tgtY = 0;
    var velX = 0, velY = 0;
    var rawX = 0, rawY = 0;

    var SPRING  = 0.022;
    var DAMPING = 0.88;

    var W = window.innerWidth;
    var H = window.innerHeight;

    /* ================================================================
       SAFE LOCALSTORAGE PERSISTENCE
       ================================================================ */
    var store = {
        get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
    };

    if (store.get('juice-theme') === 'purple') {
        body.classList.remove('theme-orange');
        body.classList.add('theme-purple');
        isPurple = true;
        applyGradient('purple');
    }
    updateDot(isPurple);

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
       GRADIENT HELPERS
       ================================================================ */
    function applyGradient(theme) {
        var c = THEMES[theme];
        gs1.setAttribute('stop-color', c.top);
        gs2.setAttribute('stop-color', c.mid);
        gs3.setAttribute('stop-color', c.bot);
    }

    function hexToRgb(hex) {
        return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)];
    }

    function rgbToHex(r, g, b) {
        return '#' + ((1<<24)+(Math.round(r)<<16)+(Math.round(g)<<8)+Math.round(b)).toString(16).slice(1);
    }

    function lerpHex(a, b, t) {
        var ca = hexToRgb(a), cb = hexToRgb(b);
        return rgbToHex(ca[0]+(cb[0]-ca[0])*t, ca[1]+(cb[1]-ca[1])*t, ca[2]+(cb[2]-ca[2])*t);
    }

    function animateTheme(from, to) {
        var fc = THEMES[from], tc = THEMES[to];
        var start = performance.now(), dur = 700;
        (function step(now) {
            var t = Math.min(1, (now - start) / dur);
            t = t * t * (3 - 2 * t);
            gs1.setAttribute('stop-color', lerpHex(fc.top, tc.top, t));
            gs2.setAttribute('stop-color', lerpHex(fc.mid, tc.mid, t));
            gs3.setAttribute('stop-color', lerpHex(fc.bot, tc.bot, t));
            if (t < 1) requestAnimationFrame(step);
        })(start);
    }

    /* ================================================================
       THEME DOT
       ================================================================ */
    function updateDot(purple) {
        if (themeDot) themeDot.style.backgroundColor = purple ? '#FF8C00' : '#9B30FF';
    }

    if (themeDot) {
        themeDot.addEventListener('click', function () {
            var from = isPurple ? 'purple' : 'orange';
            isPurple = !isPurple;
            var to = isPurple ? 'purple' : 'orange';
            body.classList.remove('theme-' + from);
            body.classList.add('theme-' + to);
            store.set('juice-theme', to);
            updateDot(isPurple);
            animateTheme(from, to);
        });
    }

    /* ================================================================
       CARDINAL SPLINE  →  SVG path
       ================================================================ */
    function spline(pts) {
        if (pts.length < 2) return '';
        var T = 0.35;
        var d = 'M' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
        for (var i = 0; i < pts.length - 1; i++) {
            var p0 = pts[Math.max(0, i - 1)];
            var p1 = pts[i];
            var p2 = pts[i + 1];
            var p3 = pts[Math.min(pts.length - 1, i + 2)];
            d += ' C' +
                (p1.x + (p2.x - p0.x) * T).toFixed(1) + ' ' +
                (p1.y + (p2.y - p0.y) * T).toFixed(1) + ',' +
                (p2.x - (p3.x - p1.x) * T).toFixed(1) + ' ' +
                (p2.y - (p3.y - p1.y) * T).toFixed(1) + ',' +
                p2.x.toFixed(1) + ' ' + p2.y.toFixed(1);
        }
        return d;
    }

    /* ================================================================
       WAVE SURFACE
       ================================================================ */
    function surface(tx, ty, t, yShift) {
        var base = H * 0.35 + ty * 0.35 + yShift;
        var tilt = tx * 1.6;
        var motion = Math.min(1.5, Math.sqrt(velX * velX + velY * velY) * 0.15);
        var amp = 1 + motion;
        var N = 28, pts = [], TAU = Math.PI * 2;

        for (var i = 0; i <= N; i++) {
            var f = i / N;
            var x = -20 + f * (W + 40);
            var tiltY = (0.5 - f) * 2 * tilt;
            var w =
                Math.sin(f * TAU * 1.2 + t * 1.5)       * 14 * amp +
                Math.sin(f * TAU * 2.0 + t * 2.1 + 0.8) *  7 * amp +
                Math.cos(f * TAU * 1.5 + t * 1.3 + 2.0) *  9 +
                Math.sin(f * TAU * 3.0 + t * 2.7 + 1.2) *  4;
            pts.push({ x: x, y: base + tiltY + w });
        }
        return pts;
    }

    /* ================================================================
       ANIMATION LOOP
       ================================================================ */
    function frame() {
        time += 0.016;

        var ax = (tgtX - curX) * SPRING;
        var ay = (tgtY - curY) * SPRING;
        velX = (velX + ax) * DAMPING;
        velY = (velY + ay) * DAMPING;
        curX += velX;
        curY += velY;

        var pts = surface(curX, curY, time, 0);
        var surfD = spline(pts);
        liquidBody.setAttribute('d',
            surfD + ' L' + (W + 20) + ' ' + (H + 10) + ' L-20 ' + (H + 10) + 'Z'
        );
        liquidGlow.setAttribute('d', surfD);

        var avgY = 0;
        for (var i = 0; i < pts.length; i++) avgY += pts[i].y;
        avgY /= pts.length;
        juiceGrad.setAttribute('y1', (avgY - 20).toFixed(0));
        juiceGrad.setAttribute('y2', H.toString());

        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    /* ================================================================
       DEVICE ORIENTATION
       ================================================================ */
    function onOrientation(e) {
        var beta = e.beta || 0, gamma = e.gamma || 0;
        rawX = gamma; rawY = beta;
        var max = 30;
        gamma = Math.max(-max, Math.min(max, gamma));
        beta  = Math.max(-max, Math.min(max, beta));
        tgtX = (gamma / max) * 55;
        tgtY = (beta  / max) * 55;
    }

    /* ================================================================
       MOUSE FALLBACK
       ================================================================ */
    function setupMouse() {
        window.addEventListener('mousemove', function (e) {
            if (useMotion) return;
            var nx = (e.clientX / W) * 2 - 1;
            var ny = (e.clientY / H) * 2 - 1;
            rawX = nx * 30; rawY = ny * 30;
            tgtX = nx * 55; tgtY = ny * 55;
        });
        window.addEventListener('mouseleave', function () {
            tgtX = tgtY = rawX = rawY = 0;
        });
    }

    /* ================================================================
       SENSOR DETECTION
       ================================================================ */
    function detect() {
        var mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (mobile && typeof DeviceOrientationEvent !== 'undefined') {
            if (typeof DeviceOrientationEvent.requestPermission !== 'function') {
                window.addEventListener('deviceorientation', onOrientation);
                useMotion = true;
            } else {
                // If it requires iOS permissions and they weren't prompted,
                // fallback to mouse/tilt or auto sloshing.
                // We bypass prompt card on the facts page to keep it clean.
                setupMouse();
            }
        } else {
            setupMouse();
        }
    }

    /* ================================================================
       BUBBLES
       ================================================================ */
    function spawnBubble() {
        var el = document.createElement('div');
        el.className = 'bubble';
        var s = 5 + Math.random() * 13;
        el.style.width  = s + 'px';
        el.style.height = s + 'px';
        el.style.left   = Math.random() * W + 'px';
        el.style.bottom = Math.random() * 12 + '%';
        el.style.animationDuration = (3 + Math.random() * 4) + 's';
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 7000);
    }
    setInterval(spawnBubble, 850);

    /* ---- Init ---- */
    detect();
});
