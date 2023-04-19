function drawRects(ctx) {
    ctx.fillStyle = "rgb(0, 50, 255)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 255, 120, 0.5)";
    ctx.fillRect(30, 30, 50, 50);

    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

export {drawRects};