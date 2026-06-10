/* =====================================================================
   JUICE GLASS LOGIC (juice.js) v8 — with "No" minigames
   ===================================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ================================================================
       DOM
       ================================================================ */
    var body = document.body;
    var svg = document.getElementById('liquid-svg');
    var liquidBody = document.getElementById('liquid-body');
    var liquidGlow = document.getElementById('liquid-glow');
    var juiceGrad = document.getElementById('juice-grad');
    var gs1 = document.getElementById('gs1');
    var gs2 = document.getElementById('gs2');
    var gs3 = document.getElementById('gs3');
    var themeDot = document.getElementById('theme-dot');
    var labCard = document.getElementById('lab-card');
    var questionText = document.getElementById('question-text');
    var answerGroup = document.getElementById('answer-group');
    var btnYes = document.getElementById('btn-yes');
    var btnNo = document.getElementById('btn-no');
    var sensorCard = document.getElementById('sensor-request-card');
    var btnSensor = document.getElementById('btn-request-sensor');

    /* ================================================================
       EMOJI CONFIGURATION
       ================================================================ */
    var YES_EMOJIS = ['❤️', '🩷', '💗', '💓'];

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
    var isPurple = false;
    var useMotion = false;
    var time = 0;

    var curX = 0, curY = 0;
    var tgtX = 0, tgtY = 0;
    var velX = 0, velY = 0;
    var rawX = 0, rawY = 0;

    var SPRING = 0.022;
    var DAMPING = 0.88;

    var W = window.innerWidth;
    var H = window.innerHeight;

    /* ================================================================
       SAFE LOCALSTORAGE
       ================================================================ */
    var store = {
        get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
        set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
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
        return [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
    }

    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
    }

    function lerpHex(a, b, t) {
        var ca = hexToRgb(a), cb = hexToRgb(b);
        return rgbToHex(ca[0] + (cb[0] - ca[0]) * t, ca[1] + (cb[1] - ca[1]) * t, ca[2] + (cb[2] - ca[2]) * t);
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
       YES BUTTON
       ================================================================ */
    function triggerEmojiRain() {
        var count = 60;
        for (var i = 0; i < count; i++) {
            (function (index) {
                var delay = Math.random() * 2500;
                setTimeout(function () {
                    var el = document.createElement('div');
                    el.className = 'raining-emoji';
                    var emoji = YES_EMOJIS[Math.floor(Math.random() * YES_EMOJIS.length)];
                    el.textContent = emoji;
                    var size = 1.5 + Math.random() * 2;
                    el.style.fontSize = size + 'rem';
                    el.style.left = (Math.random() * 100) + 'vw';
                    var duration = 2.5 + Math.random() * 2;
                    el.style.animationDuration = duration + 's';
                    document.body.appendChild(el);
                    setTimeout(function () { el.remove(); }, duration * 1000 + 100);
                }, delay);
            })(i);
        }
    }

    if (btnYes) {
        btnYes.addEventListener('click', function () {
            if (questionText) questionText.textContent = '\uD83C\uDF89 Yay! See you at Reboot!';
            if (answerGroup) answerGroup.innerHTML =
                '<p style="color:rgba(0,0,0,0.35);font-size:0.85rem;margin-top:4px;">It\u2019s going to be amazing \u2728</p>';
            var stray = document.querySelector('.btn-no');
            if (stray && stray.style.position === 'fixed') stray.remove();
            // Dismiss any open modal
            var modal = document.querySelector('.modal-overlay');
            if (modal) modal.remove();

            // Rain emojis
            triggerEmojiRain();
        });
    }

    /* ================================================================
       MINIGAME SYSTEM — random per page load
       1 = Teleport   2 = Captcha   3 = Password   4 = Essay
       ================================================================ */
    var minigame = Math.ceil(Math.random() * 4);
    var noDodges = 0;

    if (btnNo) {
        if (minigame === 1) {
            btnNo.addEventListener('pointerenter', teleportGame);
            btnNo.addEventListener('touchstart', function (e) {
                e.preventDefault();
                teleportGame();
            });
        }

        btnNo.addEventListener('click', function () {
            switch (minigame) {
                case 1: teleportGame(); break;
                case 2: captchaGame(); break;
                case 3: passwordGame(); break;
                case 4: essayGame(); break;
            }
        });
    }

    /* ---- Helper: create modal overlay ---- */
    function createModal(html) {
        // Only one modal at a time
        if (document.querySelector('.modal-overlay')) return null;

        var overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        var box = document.createElement('div');
        box.className = 'modal-box';
        box.innerHTML = html;
        overlay.appendChild(box);

        // Click outside → dismiss
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) overlay.remove();
        });

        // Prevent scroll propagation on mobile
        box.addEventListener('touchmove', function (e) { e.stopPropagation(); });

        document.body.appendChild(overlay);
        return overlay;
    }

    /* ================================================================
       MINIGAME 1 — TELEPORT
       The "No" button flies to a random screen position each click/hover.
       ================================================================ */
    function teleportGame() {
        noDodges++;

        if (noDodges === 1) {
            btnNo.style.position = 'fixed';
            btnNo.style.zIndex = '200';
            btnNo.style.width = '80px';
            btnNo.style.height = '42px';
            btnNo.style.fontSize = '0.85rem';
            btnNo.style.transition = 'left 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), top 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)';
        }

        var btnWidth = 80;
        var btnHeight = 42;
        var pad = 24; // safety padding around card
        var cardRect = labCard.getBoundingClientRect();

        var x = 0, y = 0;
        var attempts = 0;
        var overlap = true;

        while (overlap && attempts < 150) {
            x = 12 + Math.random() * (W - btnWidth - 24);
            y = 65 + Math.random() * (H - btnHeight - 77); // avoid top bar (Facts / theme dot)

            // Check overlap with card
            var cardLeft = cardRect.left - pad;
            var cardRight = cardRect.right + pad;
            var cardTop = cardRect.top - pad;
            var cardBottom = cardRect.bottom + pad;

            if (x + btnWidth < cardLeft || x > cardRight || y + btnHeight < cardTop || y > cardBottom) {
                overlap = false;
            }
            attempts++;
        }

        btnNo.style.left = x.toFixed(1) + 'px';
        btnNo.style.top = y.toFixed(1) + 'px';
    }

    /* ================================================================
       MINIGAME 2 — FAKE CAPTCHA
       "I'm not a robot" checkbox → spinner that loads forever.
       ================================================================ */
    function captchaGame() {
        var modal = createModal(
            '<h2>\uD83E\uDD16 Verify you\u2019re human</h2>' +
            '<p class="modal-desc">Complete this verification before saying \u201CNo\u201D</p>' +

            '<div class="captcha-widget" id="mg-captcha-click">' +
            '<div class="captcha-check" id="mg-captcha-box"></div>' +
            '<span class="captcha-label">I\u2019m not a robot</span>' +
            '<span class="captcha-brand">reCAPTCHA<br>Privacy \u00B7 Terms</span>' +
            '</div>' +

            '<div class="captcha-status" id="mg-captcha-status"></div>' +
            '<p class="modal-hint">tap outside to go back</p>'
        );

        if (!modal) return;

        var widget = document.getElementById('mg-captcha-click');
        var check = document.getElementById('mg-captcha-box');
        var status = document.getElementById('mg-captcha-status');
        var clicked = false;

        widget.addEventListener('click', function () {
            if (clicked) return;
            clicked = true;

            // Replace checkbox with spinner
            check.innerHTML = '<div class="captcha-spinner"></div>';
            status.textContent = 'Verifying\u2026';

            setTimeout(function () {
                status.textContent = 'Connecting to verification server\u2026';
            }, 2500);

            setTimeout(function () {
                status.textContent = 'Almost there\u2026';
            }, 6000);

            setTimeout(function () {
                status.textContent = 'Server is busy. Still verifying\u2026';
            }, 10000);

            setTimeout(function () {
                status.textContent = 'Contacting backup server\u2026';
            }, 16000);

            setTimeout(function () {
                status.textContent = 'Reticulating splines\u2026';
            }, 22000);

            setTimeout(function () {
                status.textContent = 'Asking ChatGPT if you\u2019re a robot\u2026';
            }, 30000);

            setTimeout(function () {
                status.textContent = 'This might take a while\u2026';
            }, 40000);

            // It never completes.
        });
    }

    /* ================================================================
       MINIGAME 3 — IMPOSSIBLE PASSWORD
       Progressive requirements that eventually contradict each other.
       ================================================================ */
    function passwordGame() {
        var rules = [
            {
                text: 'Must be at least 8 characters',
                test: function (p) { return p.length >= 8; }
            },
            {
                text: 'Must contain an uppercase letter',
                test: function (p) { return /[A-Z]/.test(p); }
            },
            {
                text: 'Must contain a number',
                test: function (p) { return /\d/.test(p); }
            },
            {
                text: 'Must contain a special character (!@#$%&)',
                test: function (p) { return /[!@#$%^&*()_+\-=\[\]{}|;:'"<>?,./\\]/.test(p); }
            },
            {
                text: 'Must NOT contain the letter \u201Ce\u201D',
                test: function (p) { return !/[eE]/.test(p); }
            },
            {
                text: 'Must include an emoji \uD83D\uDE00',
                test: function (p) {
                    try { return /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(p); }
                    catch (e) { return false; }
                }
            },
            {
                text: 'The digits must add up to exactly 25',
                test: function (p) {
                    var s = 0;
                    p.replace(/\d/g, function (d) { s += parseInt(d, 10); });
                    return s === 25;
                }
            },
            {
                text: 'Must be exactly 50 characters long',
                test: function (p) { return p.length === 50; }
            },
            {
                text: 'Must contain the word \u201Cpassword\u201D',
                test: function (p) { return /password/i.test(p); }
            },
            {
                // Contradicts rule 5 ("no letter e") — IMPOSSIBLE
                text: 'Must contain the word \u201Cplease\u201D',
                test: function (p) { return /please/i.test(p); }
            },
            {
                text: 'Must include your mother\u2019s maiden name',
                test: function () { return false; }  // always fails
            }
        ];

        // Build initial HTML
        var html =
            '<h2>\uD83D\uDD12 Create a Password</h2>' +
            '<p class="modal-desc">You must set a secure password before clicking \u201CNo\u201D</p>' +
            '<input type="text" class="pw-input" id="mg-pw-input" placeholder="Enter password\u2026" autocomplete="off">' +
            '<ul class="pw-rules" id="mg-pw-rules"></ul>' +
            '<button class="pw-submit" id="mg-pw-submit" disabled>Submit Password</button>' +
            '<p class="modal-hint">tap outside to go back</p>';

        var modal = createModal(html);
        if (!modal) return;

        var input = document.getElementById('mg-pw-input');
        var ruleList = document.getElementById('mg-pw-rules');
        var submit = document.getElementById('mg-pw-submit');
        var revealed = 3; // Start with first 3 rules visible

        function renderRules(pw) {
            // Check if all revealed rules are met → reveal next
            var allMet = true;
            for (var i = 0; i < revealed && i < rules.length; i++) {
                if (!rules[i].test(pw)) { allMet = false; break; }
            }
            if (allMet && revealed < rules.length) {
                revealed++;
            }

            // Render
            var items = '';
            for (var j = 0; j < revealed && j < rules.length; j++) {
                var met = rules[j].test(pw);
                items +=
                    '<li class="' + (met ? 'met' : 'unmet') + '">' +
                    '<span class="icon">' + (met ? '\u2713' : '\u2717') + '</span>' +
                    '<span>' + rules[j].text + '</span>' +
                    '</li>';
            }
            ruleList.innerHTML = items;
        }

        renderRules('');

        input.addEventListener('input', function () {
            renderRules(input.value);
        });

        input.focus();
    }

    /* ================================================================
       MINIGAME 4 — 1,000-WORD ESSAY
       Word target escalates every time the user reaches it.
       ================================================================ */
    function essayGame() {
        var target = 1000;
        var escalations = [
            { at: 1000, next: 2000, msg: 'Hmm, not quite convincing. We need at least 2,000 words.' },
            { at: 2000, next: 5000, msg: 'Getting there! Our review board requires 5,000 words minimum.' },
            { at: 5000, next: 10000, msg: 'Impressive effort! Unfortunately the minimum is now 10,000 words.' },
            { at: 10000, next: 50000, msg: 'Our committee has updated the policy. 50,000 words required.' },
            { at: 50000, next: 100000, msg: 'New regulation: 100,000 words. Sorry, we don\u2019t make the rules.' }
        ];
        var escIndex = 0;

        var html =
            '<h2>\uD83D\uDCDD Wait, why not?</h2>' +
            '<p class="modal-desc">Please explain in a minimum of ' +
            '<strong id="mg-essay-target">1,000</strong> words why you can\u2019t come.</p>' +
            '<textarea class="essay-area" id="mg-essay-text" placeholder="Start typing your essay\u2026"></textarea>' +
            '<div class="essay-counter" id="mg-essay-counter">0 / 1,000 words</div>' +
            '<div class="essay-escalation" id="mg-essay-esc"></div>' +
            '<p class="modal-hint">tap outside to go back</p>';

        var modal = createModal(html);
        if (!modal) return;

        var textarea = document.getElementById('mg-essay-text');
        var counter = document.getElementById('mg-essay-counter');
        var targetEl = document.getElementById('mg-essay-target');
        var escEl = document.getElementById('mg-essay-esc');

        function fmt(n) {
            return n.toLocaleString();
        }

        textarea.addEventListener('input', function () {
            var text = textarea.value.trim();
            var words = text ? text.split(/\s+/).length : 0;

            // Escalate
            if (escIndex < escalations.length && words >= escalations[escIndex].at) {
                target = escalations[escIndex].next;
                escEl.textContent = escalations[escIndex].msg;
                targetEl.textContent = fmt(target);
                escIndex++;
            }

            counter.textContent = fmt(words) + ' / ' + fmt(target) + ' words';
        });

        textarea.focus();
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
                Math.sin(f * TAU * 1.2 + t * 1.5) * 14 * amp +
                Math.sin(f * TAU * 2.0 + t * 2.1 + 0.8) * 7 * amp +
                Math.cos(f * TAU * 1.5 + t * 1.3 + 2.0) * 9 +
                Math.sin(f * TAU * 3.0 + t * 2.7 + 1.2) * 4;
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
        beta = Math.max(-max, Math.min(max, beta));
        tgtX = (gamma / max) * 55;
        tgtY = (beta / max) * 55;
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
            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                if (sensorCard) sensorCard.classList.remove('hidden');
                if (labCard) labCard.classList.add('hidden');
            } else {
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
                        } else { setupMouse(); }
                        if (sensorCard) sensorCard.classList.add('hidden');
                        if (labCard) labCard.classList.remove('hidden');
                    })
                    .catch(function () {
                        if (sensorCard) sensorCard.classList.add('hidden');
                        if (labCard) labCard.classList.remove('hidden');
                        setupMouse();
                    });
            } else {
                if (sensorCard) sensorCard.classList.add('hidden');
                if (labCard) labCard.classList.remove('hidden');
                setupMouse();
            }
        });
    }

    /* ================================================================
       BUBBLES
       ================================================================ */
    function spawnBubble() {
        var el = document.createElement('div');
        el.className = 'bubble';
        var s = 5 + Math.random() * 13;
        el.style.width = s + 'px';
        el.style.height = s + 'px';
        el.style.left = Math.random() * W + 'px';
        el.style.bottom = Math.random() * 12 + '%';
        el.style.animationDuration = (3 + Math.random() * 4) + 's';
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 7000);
    }
    setInterval(spawnBubble, 850);

    /* ---- Init ---- */
    detect();
});
