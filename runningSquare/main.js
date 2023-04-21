const canvasWidth = 600;
const canvasHeight = 600;

const canvas = document.querySelector("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvas.style.border = "1px solid black";
canvas.style.backgroundImage = "url(./bg6.png)";
const ctx = canvas.getContext("2d");

const playerColor = "rgb(0, 245, 255)";
const playerSpeed = 2;
const playerWidth = 20;
const playerHeight = 20;
let playerX;
let playerY;
let playerDeltaX;
let playerDeltaY;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            playerDeltaX = -(playerSpeed);
            playerDeltaY = 0;
            localStorage.setItem("playerDeltaX", playerDeltaX);
            localStorage.setItem("playerDeltaY", playerDeltaY);
            break;
        case "ArrowRight":
            playerDeltaX = playerSpeed;
            playerDeltaY = 0;
            localStorage.setItem("playerDeltaX", playerDeltaX);
            localStorage.setItem("playerDeltaY", playerDeltaY);
            break;
        case "ArrowUp":
            playerDeltaY = -(playerSpeed);
            playerDeltaX = 0;
            localStorage.setItem("playerDeltaX", playerDeltaX);
            localStorage.setItem("playerDeltaY", playerDeltaY);
            break;
        case "ArrowDown":
            playerDeltaY = playerSpeed;
            playerDeltaX = 0;
            localStorage.setItem("playerDeltaX", playerDeltaX);
            localStorage.setItem("playerDeltaY", playerDeltaY);
            break;
    }
})

if (localStorage.getItem("playerX")
    && localStorage.getItem("playerY")
    && localStorage.getItem("playerDeltaX")
    && localStorage.getItem("playerY")) 
{
    playerX = parseInt(localStorage.getItem("playerX"));
    playerY = parseInt(localStorage.getItem("playerY"));
    playerDeltaX = parseInt(localStorage.getItem("playerDeltaX"));
    playerDeltaY = parseInt(localStorage.getItem("playerDeltaY"));
} 
else {
    playerX = 0;
    playerY = 0;
    playerDeltaX = playerSpeed;
    playerDeltaY = 0;
}

function drawPlayer(x, y) {
    ctx.fillStyle = playerColor;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillRect(x, y, playerWidth, playerHeight);
    localStorage.setItem("playerX", x);
    localStorage.setItem("playerY", y);
}

let runCount = 0;
function main() {
    drawPlayer(playerX, playerY);
    playerX += playerDeltaX;
    playerY += playerDeltaY;

    if (playerX >= canvasWidth - playerWidth) {
        playerX = 0;
    }
    if (playerX < 0) {
        playerX = canvasWidth - playerWidth;
    }
    if (playerY >= canvasHeight - playerHeight) {
        playerY = 0;
    }
    if (playerY < 0) {
        playerY = canvasHeight - playerHeight;
    }

    window.requestAnimationFrame(main);
}

main();