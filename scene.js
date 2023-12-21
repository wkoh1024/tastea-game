class scene {
    constructor(left, right, top, bottom) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
    }
}

function changeBackground(newBackground) {
    // Update the current background
    currentBackground = newBackground;

    // Dynamically change the background image
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.backgroundImage = `url('./assets/background${currentBackground}.png')`;
}

function updateBackgroundAndPosition() {
    const player = document.getElementById('player');
    const gameContainer = document.getElementById('game-container');
    const maxX = gameContainer.clientWidth;
    const maxY = gameContainer.clientHeight;
    switch (currentBackground) {
        case 'A':
            // if player goes to the top   
            if (playerY < 0) {
                playerY = maxY - 50;
                changeBackground('B');
            }
            // if player goes bottom 
            if (playerY > maxY - 50) {
                playerY = 0;
                changeBackground('E');
            }
            // if player goes left
            if (playerX < 0) {
                playerX = maxX - 50;
                changeBackground('C');
            }
            // if player goes right
            if (playerX > maxX - 50) {
                playerX = 0;
                changeBackground('D')
            }
            break;
        // top room
        case 'B':
            // restricts player movement to downwards only
            if (playerY < 0) {
                playerY = 0;
            }
            if (playerX < 0) {
                playerX = 0;
            }
            if (playerX > maxX - 50) {
                playerX = maxX - 50;
            }
            if (playerY > maxY - 50) {
                playerY = 0;
                changeBackground('A');
            }
            break;
        // left room
        case 'C':
            if (playerX < 0) {
                playerX = 0;
            }

            if (playerY < 0) {
                playerY = 0;
            }
            if (playerY > maxY - 50) {
                playerY = maxY - 50;
            }
            if (playerX > maxX - 50) {
                playerX = 0;
                changeBackground('A')
            }
            break;
        // right room
        case 'D':
            if (playerY < 0) {
                playerY = 0;
            }
            if (playerY > maxY - 50) {
                playerY = maxY - 50;
            }
            if (playerX > maxX - 50) {
                playerX = maxX - 50;
            }
            if (playerX < 0) {
                playerX = maxX - 50;
                changeBackground('A');
            }
        // bottom room
        case 'E':
            if (playerX < 0) {
                playerX = 0;
            }
            if (playerX > maxX - 50) {
                playerX = maxX - 50;
            }
            if (playerY > maxY -50) {
                playerY = maxY - 50;
            }
            if (playerY < 0) {
                playerY = maxY - 50;
                changeBackground('A');
            }

    }
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}