const canvasWidth = 1200;
const canvasHeight = 800;

const body = document.querySelector("body");
const canvas = document.querySelector("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
body.style.background = "black"
const ctx = canvas.getContext("2d");

// document.addEventListener("keydown", (event) => {
//     switch (event.key) {
//         case "ArrowLeft":
//             break;
//         case "ArrowRight":
//             break;
//         case "ArrowUp":
//             break;
//         case "ArrowDown":
//             break;
//     }
// })

const img = new Image();
img.src = "./assets/player.png";
img.onload = ctx.drawImage(img, 100, 100);

// function main() {
//     window.requestAnimationFrame(main);
// }

// main();