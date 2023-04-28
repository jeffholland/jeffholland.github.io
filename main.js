const canvasWidth = 1200;
const canvasHeight = 800;

const body = document.querySelector("body");
const canvas = document.querySelector("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
body.style.background = "black"
const ctx = canvas.getContext("2d");

let imgX = 100;
let imgY = 100;

const img = new Image();
img.src = "./assets/player.png";
img.onload = ctx.drawImage(img, imgX, imgY);
console.log(img.width);
console.log(img.height);

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            break;
        case "ArrowRight":
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;
    }
})

function main() {
    imgX += 1;
    imgY += 1;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, imgX, imgY);
    window.requestAnimationFrame(main);
}

main();