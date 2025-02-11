document.getElementById('surpriseButton').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    const image = document.getElementById('surpriseImage');
    message.classList.remove('hidden');
    image.classList.remove('hidden');

    // Optional: Add confetti for extra fun!
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
