export default class Enemy {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 160;
    this.height = 119;
    this.image = document.getElementById("enemy");
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height-181;
    this.frameX = 0;
    this.delete = false;
    this.avoided = 0
  }
  draw(context) {
    context.strokeStyle = "white";
    context.beginPath();
    context.arc(
      this.x + this.width / 2,
      this.y + this.height / 2,
      this.width / 2,
      0,
      Math.PI * 2
    );
    context.stroke();
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.x--
    if (this.x < 0 - this.width) {
      this.delete = true;
      this.avoided++;
    }
  }
}
