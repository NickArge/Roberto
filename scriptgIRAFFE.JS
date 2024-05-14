let openEyes = document.getElementById('eyesOpen');
let closedEyes = document.getElementById('eyesClosed');
let pupille = document.getElementById('Pupille');
let blinking = true; // State to keep track of whether blinking is enabled
let blinkInterval;

function blink() {
    if (blinking) {
        closedEyes.style.display = 'block';
        openEyes.style.display = 'none';

        setTimeout(() => {
            closedEyes.style.display = 'none';
            openEyes.style.display = 'block';
        }, 150); // Time eyes are closed in milliseconds
    }
}

function startBlinking() {
    blinkInterval = setInterval(blink, 900); // Time between blinks in milliseconds
}

function stopBlinking() {
    clearInterval(blinkInterval);
}

document.addEventListener('click', function() {
    blinking = !blinking; // Toggle the blinking state
    if (blinking) {
        blink(); // Immediate blink to indicate resuming
        startBlinking();
    } else {
        stopBlinking();
        closedEyes.style.display = 'none';
        openEyes.style.display = 'block';
    }
});

// Handle mouse movement continuously
document.addEventListener('mousemove', function(event) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = (event.clientX - centerX) / 50; // Division to reduce the movement
    const deltaY = (event.clientY - centerY) / 50; // Division to reduce the movement

    pupille.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});

// Start blinking by default
startBlinking();
