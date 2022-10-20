export function drawStatusText(ctx, width, height, gameOver) {
  let score = 0;
  console.log(width, height)
  ctx.font = `${.03 * width}px Helvetica`;
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, width * .025, .06 * height);
  ctx.font = `${.03 * width}px Helvetica`;
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, (width * .025) + 2, (.06 * height) + 2);
  if (gameOver) {
    ctx.font = `${.06 * width}px Helvetica`;
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("GAME OVER", width / 2, height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER", width / 2 + 2, height / 3 + 2);
  }
}