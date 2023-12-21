let playerX = 400;
let playerY = 300;
let youtubePlayer;
let currentBackground = 'A';

function changeBackground(newBackground) {
    // updates background to newer background
    currentBackground = newBackground;
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.backgroundImage = `url('./assets/background${currentBackground}.png')`;
}

document.addEventListener('DOMContentLoaded', function () {

    // Handle player movement and background changes
    document.addEventListener('keydown', function (event) {
        const speed = 50;

        switch (event.key) {
            case 'ArrowUp':
                playerY -= speed;
                break;
            case 'ArrowDown':
                playerY += speed;
                break;
            case 'ArrowLeft':
                playerX -= speed;
                break;
            case 'ArrowRight':
                playerX += speed;
                break;
        }
        let backgroundB, backgroundC, backgroundD, backgroundE
        const backgroundA = new scene(backgroundC, backgroundD, backgroundB, backgroundE);
        backgroundB = new scene(backgroundA, null, null, null);
        backgroundC = new scene(null, backgroundA, null, null);
        backgroundD = new scene(null, null, backgroundA, null);
        backgroundE = new scene(null, null, null, backgroundA);
        updateBackgroundAndPosition();
    });
});
