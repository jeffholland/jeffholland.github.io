let deltaX = 1;
let deltaY = 0;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            deltaX = -1;
            deltaY = 0;
            break;
        case "ArrowRight":
            deltaX = 1;
            deltaY = 0;
            break;
        case "ArrowUp":
            deltaY = -1;
            deltaX = 0;
            break;
        case "ArrowDown":
            deltaY = 1;
            deltaX = 0;
            break;
    }
})

const canvasWidth = 600;
const canvasHeight = 600;

const canvas = document.querySelector("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
canvas.style.border = "1px solid black";
canvas.style.backgroundImage = "url(./bg1.png)";

const ctx = canvas.getContext("2d");

const rectWidth = 10;
const rectHeight = 10;
let rectX;
let rectY;

if (localStorage.getItem("xpos")) {
    console.log("Hi");
    rectX = parseInt(localStorage.getItem("xpos"));
    rectY = parseInt(localStorage.getItem("ypos"));
    console.log(`getting rectangle at (${rectX}, ${rectY})`);
} else {
    rectX = 0;
    rectY = 0;
}

let runCount = 0;
function drawRect(x, y) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillRect(x, y, rectWidth, rectHeight);
    localStorage.setItem("xpos", x);
    localStorage.setItem("ypos", y);
}

function main() {
    drawRect(rectX, rectY);
    rectX += deltaX;
    rectY += deltaY;
    if (runCount < 5) {
        console.log(`drew rectangle at (${rectX}, ${rectY})`);
        runCount++;
    }
    if (rectX >= canvasWidth - rectWidth) {
        console.log(`why's this called? rectX: ${rectX} canvasWidth: ${canvasWidth} `);
        rectX = 0;
    }
    if (rectX < 0) {
        rectX = canvasWidth - rectWidth;
    }
    if (rectY >= canvasHeight - rectHeight) {
        console.log(`why's this called? rectY: ${rectY} canvasHeight: ${canvasHeight} `);
        rectY = 0;
    }
    if (rectY < 0) {
        rectY = canvasHeight - rectHeight;
    }

    window.requestAnimationFrame(main);
}

main();