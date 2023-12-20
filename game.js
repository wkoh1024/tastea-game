let playerX = 50;
let playerY = 50;
let youtubePlayer;
let currentBackground = 'A';

function updatePlayerPosition() {
    const player = document.getElementById('player');
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}

function checkEdgeAndChangeBackground() {
    const gameContainer = document.getElementById('game-container');
    const player = document.getElementById('player');

    const maxX = gameContainer.clientWidth;
    const maxY = gameContainer.clientHeight;

    // change background if player passes top edge
    if (playerY < 0 && currentBackground === 'A') {
        changeBackground('B');
    }

    // left edge
    if (playerX < 0 && currentBackground === 'A') {
        changeBackground('C');
    }

    // right edge
    if (playerX > maxX - player.clientWidth && currentBackground === 'A') {
        changeBackground('D');
    }

    // bottom edge
    if (playerY > maxY - player.clientHeight && currentBackground === 'A') {
        changeBackground('E');
    }
}

function changeBackground(newBackground) {
    // Update the current background
    currentBackground = newBackground;

    // Dynamically change the background image
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.backgroundImage = `url('./assets/background${currentBackground}.png')`;
}

document.addEventListener('DOMContentLoaded', function () {

    // Handle player movement and background changes
    document.addEventListener('keydown', function (event) {
        const speed = 30;

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

        updatePlayerPosition();
        checkEdgeAndChangeBackground();
    });
});
