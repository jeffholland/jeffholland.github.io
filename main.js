

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
let deltaX;
let deltaY;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            deltaX = -1;
            deltaY = 0;
            localStorage.setItem("deltaX", deltaX);
            localStorage.setItem("deltaY", deltaY);
            break;
        case "ArrowRight":
            deltaX = 1;
            deltaY = 0;
            localStorage.setItem("deltaX", deltaX);
            localStorage.setItem("deltaY", deltaY);
            break;
        case "ArrowUp":
            deltaY = -1;
            deltaX = 0;
            localStorage.setItem("deltaX", deltaX);
            localStorage.setItem("deltaY", deltaY);
            break;
        case "ArrowDown":
            deltaY = 1;
            deltaX = 0;
            localStorage.setItem("deltaX", deltaX);
            localStorage.setItem("deltaY", deltaY);
            break;
    }
})

if (localStorage.getItem("xpos")) {
    rectX = parseInt(localStorage.getItem("xpos"));
    rectY = parseInt(localStorage.getItem("ypos"));
    deltaX = parseInt(localStorage.getItem("deltaX"));
    deltaY = parseInt(localStorage.getItem("deltaY"));
} else {
    rectX = 0;
    rectY = 0;
    deltaX = 1;
    deltaY = 0;
}

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

    if (rectX >= canvasWidth - rectWidth) {
        rectX = 0;
    }
    if (rectX < 0) {
        rectX = canvasWidth - rectWidth;
    }
    if (rectY >= canvasHeight - rectHeight) {
        rectY = 0;
    }
    if (rectY < 0) {
        rectY = canvasHeight - rectHeight;
    }

    window.requestAnimationFrame(main);
}

main();