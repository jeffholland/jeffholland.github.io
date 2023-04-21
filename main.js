const canvasWidth = 800;
const canvasHeight = 600;

const canvas = document.querySelector("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");

const btnClear = document.getElementById("btnClear");

function clear() {
    localStorage.clear();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}
btnClear.onclick = clear;

const rectSize = 20;
const rects = [];
let rectCounter = 0;

canvas.style.border = "1px solid black";
canvas.style.backgroundColor = "black";

function restoreColoredRects() {
    const numRects = localStorage.getItem("numRects");
    rectCounter = numRects;

    for (let i = 0; i < numRects; ++i) {
        const x = localStorage.getItem(`x${i}`);
        const y = localStorage.getItem(`y${i}`);
        const r = localStorage.getItem(`r${i}`);
        const g = localStorage.getItem(`g${i}`);
        const b = localStorage.getItem(`b${i}`);
        const color = [r, g, b]
        
        showColoredRect(x, y, color);
    }
}

if (localStorage.getItem("x0")) {
    restoreColoredRects();
}

function showColoredRect(x, y, color) {
    ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    ctx.fillRect(x - rectSize, y - rectSize, rectSize, rectSize);
}

function saveColoredRect(x, y, color) {
    localStorage.setItem(`x${rectCounter}`, x);
    localStorage.setItem(`y${rectCounter}`, y);
    localStorage.setItem(`r${rectCounter}`, color[0]);
    localStorage.setItem(`g${rectCounter}`, color[1]);
    localStorage.setItem(`b${rectCounter}`, color[2]);

    rectCounter++;
    localStorage.setItem("numRects", rectCounter);
}

function getRandomColor() {
    const color = [0, 0, 0];

    for (let i = 0; i < color.length; ++i) {
        color[i] = Math.floor(Math.random() * 256);
    }

    return color;
}

document.addEventListener("mousedown", (event) => {
    const color = getRandomColor();
    showColoredRect(event.clientX, event.clientY, color);
    saveColoredRect(event.clientX, event.clientY, color);
})

// function main() {
//     window.requestAnimationFrame(main);
// }

// main();