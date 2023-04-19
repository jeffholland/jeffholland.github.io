function drawRects(ctx) {
    ctx.fillStyle = "rgb(0, 50, 255)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 255, 120, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
}

function drawTriangle(ctx) {
    ctx.fillStyle = "rgb(100, 0, 255)";

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
}

export {drawRects, drawTriangle};