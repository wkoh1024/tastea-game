let playerX = 50;
let playerY = 50;
let youtubePlayer;

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

    if (playerX < 0 || playerX > maxX - player.clientWidth || playerY < 0 || playerY > maxY - player.clientHeight) {
        // Change background and music when the player reaches the edges
        changeBackgroundAndMusic();
    }
}

function changeBackgroundAndMusic() {
    // Dynamically set the YouTube video ID
    const videoId = 'neV3EPgvZ3g';

    // Create a YouTube Embedded Player
    youtubePlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: videoId, // Specific video ID
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}


function onPlayerReady(event) {
    // Player is ready, start playing
    event.target.playVideo();
    event.target.setVolume(0);
}

function onPlayerStateChange(event) {
    event.target.playVideo();

    // Set the volume to 50 (adjust as needed, range: 0 to 100)
    event.target.setVolume(10);
}

document.addEventListener('DOMContentLoaded', function () {
    // Initialize the YouTube API
    window.onYouTubeIframeAPIReady = function () {
        changeBackgroundAndMusic();
    };

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
