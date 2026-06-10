/* ==========================================================================
   MINIMALIST LIQUID GLASS LOGIC (juice.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const waveContainer = document.getElementById('juice-wave-container');
    const labCard = document.getElementById('lab-card');
    const sensorVal = document.getElementById('sensor-val');

    const sensorRequestCard = document.getElementById('sensor-request-card');
    const btnRequestSensor = document.getElementById('btn-request-sensor');

    // State Variables
    let isPurple = body.classList.contains('theme-purple');
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let rawSensorX = 0, rawSensorY = 0;
    let useMotionSensors = false;

    // Helper for safe localStorage read/write
    const safeStorage = {
        getItem(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.warn('Storage read blocked by environment:', e);
                return null;
            }
        },
        setItem(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                console.warn('Storage write blocked by environment:', e);
            }
        }
    };

    // Load theme from localStorage securely
    const savedTheme = safeStorage.getItem('juice-theme');
    if (savedTheme === 'purple') {
        body.classList.remove('theme-orange');
        body.classList.add('theme-purple');
        isPurple = true;
        updateToggleBtnUI(true);
    }

    // ==========================================================================
    // 3D STAGGERED BACKGROUND WAVE TRANSITION
    // ==========================================================================
    if (themeToggleBtn && waveContainer) {
        themeToggleBtn.addEventListener('click', (e) => {
            // Prevent spam clicking while waves are animating
            if (waveContainer.childElementCount > 0) return;

            const rect = themeToggleBtn.getBoundingClientRect();
            // Calculate coordinates of the click relative to viewport
            const clickX = e.clientX || (rect.left + rect.width / 2);
            const clickY = e.clientY || (rect.top + rect.height / 2);

            // Determine target theme status
            const nextThemePurple = !isPurple;
            const waveColor = nextThemePurple ? '#d600ff' : '#ff9100';

            // Spawn 3 concentric wave rings inside the background container
            for (let i = 0; i < 3; i++) {
                const ring = document.createElement('div');
                ring.classList.add('wave-ring');
                ring.style.left = `${clickX}px`;
                ring.style.top = `${clickY}px`;
                ring.style.setProperty('--wave-bg-color', waveColor);
                waveContainer.appendChild(ring);
            }

            // Swap actual classes halfway through (at 600ms, when ripples cover screen)
            setTimeout(() => {
                if (nextThemePurple) {
                    body.classList.remove('theme-orange');
                    body.classList.add('theme-purple');
                    safeStorage.setItem('juice-theme', 'purple');
                } else {
                    body.classList.remove('theme-purple');
                    body.classList.add('theme-orange');
                    safeStorage.setItem('juice-theme', 'orange');
                }
                isPurple = nextThemePurple;
                updateToggleBtnUI(isPurple);
            }, 600);

            // Remove wave elements when all ripple animations complete (at 1800ms)
            setTimeout(() => {
                waveContainer.innerHTML = '';
            }, 1800);
        });
    }

    function updateToggleBtnUI(purpleState) {
        if (!themeToggleBtn) return;
        if (purpleState) {
            themeToggleBtn.textContent = 'Switch Theme 🍇';
        } else {
            themeToggleBtn.textContent = 'Switch Theme 🍊';
        }
    }

    // ==========================================================================
    // TILT & 3D PERSPECTIVE PHYSICS (LERP LOOP)
    // ==========================================================================
    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    function updatePhysicsLoop() {
        // Smoothly interpolate current coordinates towards target values
        currentX = lerp(currentX, targetX, 0.07);
        currentY = lerp(currentY, targetY, 0.07);

        // Apply coordinates to global CSS properties for background blobs
        document.documentElement.style.setProperty('--tx', `${currentX}px`);
        document.documentElement.style.setProperty('--ty', `${currentY}px`);

        // Apply 3D rotation tilt to the main glass card
        if (labCard) {
            const rotX = -currentY * 0.12; // Tilting forward/backward rotates X
            const rotY = currentX * 0.12;  // Tilting left/right rotates Y
            labCard.style.setProperty('--rx', `${rotX}deg`);
            labCard.style.setProperty('--ry', `${rotY}deg`);
        }

        // Update coordinate printouts in card header
        if (sensorVal) {
            sensorVal.textContent = `Tilt: X: ${(rawSensorX).toFixed(1)}° | Y: ${(rawSensorY).toFixed(1)}°`;
        }

        requestAnimationFrame(updatePhysicsLoop);
    }
    requestAnimationFrame(updatePhysicsLoop);

    // ==========================================================================
    // MOBILE SENSOR (GYROSCOPE / ACCELEROMETER)
    // ==========================================================================
    function handleDeviceOrientation(event) {
        let beta = event.beta || 0;    // Range -180 to 180
        let gamma = event.gamma || 0;  // Range -90 to 90

        rawSensorX = gamma;
        rawSensorY = beta;

        // Clamp tilts to make interaction controllable
        const maxTilt = 30;
        beta = Math.max(-maxTilt, Math.min(maxTilt, beta));
        gamma = Math.max(-maxTilt, Math.min(maxTilt, gamma));

        // Map degree tilt to maximum translation offset range (e.g. -75px to 75px)
        const range = 75;
        targetX = (gamma / maxTilt) * range;
        targetY = (beta / maxTilt) * range;
    }

    function detectSensors() {
        const isMobile = /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            if (typeof DeviceOrientationEvent !== 'undefined') {
                // Check iOS 13+ permission flow
                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    if (sensorRequestCard) sensorRequestCard.classList.remove('hidden');
                    if (labCard) labCard.classList.add('hidden'); // Hide main card until permission granted
                } else {
                    window.addEventListener('deviceorientation', handleDeviceOrientation);
                    useMotionSensors = true;
                }
            }
        } else {
            // Desktop fallback: mouse cursor coordinates
            setupDesktopParallax();
        }
    }

    // iOS user-gesture click listener to unlock sensors
    if (btnRequestSensor) {
        btnRequestSensor.addEventListener('click', () => {
            if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(response => {
                        if (response === 'granted') {
                            window.addEventListener('deviceorientation', handleDeviceOrientation);
                            if (sensorRequestCard) sensorRequestCard.classList.add('hidden');
                            if (labCard) labCard.classList.remove('hidden');
                            useMotionSensors = true;
                        } else {
                            alert('Sensor permission denied. Reverting to touch controls.');
                            if (sensorRequestCard) sensorRequestCard.classList.add('hidden');
                            if (labCard) labCard.classList.remove('hidden');
                            setupDesktopParallax();
                        }
                    })
                    .catch(err => {
                        console.error('Sensor request error:', err);
                        if (sensorRequestCard) sensorRequestCard.classList.add('hidden');
                        if (labCard) labCard.classList.remove('hidden');
                        setupDesktopParallax();
                    });
            } else {
                if (sensorRequestCard) sensorRequestCard.classList.add('hidden');
                if (labCard) labCard.classList.remove('hidden');
                setupDesktopParallax();
            }
        });
    }

    // ==========================================================================
    // DESKTOP CURSOR INTERACTION FALLBACK
    // ==========================================================================
    function setupDesktopParallax() {
        window.addEventListener('mousemove', (e) => {
            if (useMotionSensors) return;

            // Map mouse coordinates relative to window center (-1 to 1)
            const normX = (e.clientX / window.innerWidth) * 2 - 1;
            const normY = (e.clientY / window.innerHeight) * 2 - 1;

            // Mock sensor readouts (tilt degrees) for desktop view
            rawSensorX = normX * 30;
            rawSensorY = normY * 30;

            const range = 75;
            targetX = normX * range;
            targetY = normY * range;
        });

        // Smoothly return to center when cursor leaves viewport
        window.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
            rawSensorX = 0;
            rawSensorY = 0;
        });
    }

    // Initialize detection
    detectSensors();
});
