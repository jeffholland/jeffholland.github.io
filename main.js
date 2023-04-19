import { drawRects, drawTriangle } from "./modules/draw.js";

const canvas = document.getElementById("myCanvas");
canvas.width = 150;
canvas.height = 150;

const ctx = canvas.getContext("2d");

const randomNumber = Math.floor(Math.random() * 2);

if (randomNumber == 0) {
    drawRects(ctx);
} else {
    drawTriangle(ctx);
}
console.log(`random number: ${randomNumber}`);