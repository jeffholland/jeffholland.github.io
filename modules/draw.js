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

function drawSmiley(ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
}

export {drawRects, drawTriangle, drawSmiley};