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

function drawArcs(ctx) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 25 + j * 50; // x coordinate
          const y = 25 + i * 50; // y coordinate
          const radius = 20; // Arc radius
          const startAngle = 0; // Starting point on circle
          const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
}

function drawSpeechBubble(ctx) {

    const ctx = canvas.getContext("2d");

    // Quadratic curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
}

export {drawRects, drawTriangle, drawSmiley, drawArcs, drawSpeechBubble};