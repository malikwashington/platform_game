
export default class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.gameFrame = 0;
    this.gameSpeed = 2;
    // this.width = canvas.width;
    // this.height = canvas.height;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }

  update() {
    this.speed = gameSpeed * this.speedModifier;
    this.x = (gameFrame * this.speed) % this.width;
  }

  draw(ctx, width, height) {
    ctx.drawImage(this.image, this.x, this.y, width, height);
    ctx.drawImage(
      this.image,
      this.x + width,
      this.y,
      width,
      height
    );
  }
}
