export default class Enemy {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 160;
    this.height = 119;
    this.image = document.getElementById('enemy');
    this.x = 0;
    this.y = 0;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y)
  }
}