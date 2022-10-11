import Player from './player.js'
import InputHandler from './input.js'




window.addEventListener('load', function () {
  const loading = this.document.getElementById('loading')
  loading.style.display = 'none'
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const backgroundLayer1 = this.document.getElementById('background1')
  const backgroundLayer2 = this.document.getElementById('background2')
  const backgroundLayer3 = this.document.getElementById('background3')
  const backgroundLayer4 = this.document.getElementById('background4')
  const backgroundLayer5 = this.document.getElementById('background5')

  let gameSpeed = 2;
  let gameFrame = 0;

  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }

    update() {
      this.speed = gameSpeed * this.speedModifier;
      this.x = (gameFrame * this.speed) % this.width;
    }

    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }

  const layer1 = new Layer(backgroundLayer1, 0.2);
  const layer2 = new Layer(backgroundLayer2, 0.4);
  const layer3 = new Layer(backgroundLayer3, 0.6);
  const layer4 = new Layer(backgroundLayer4, 0.8);
  const layer5 = new Layer(backgroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];


  
  const player = new Player(canvas.width, canvas.height)
  const input = new InputHandler()

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    gameFrame--;
    player.update(input.lastKey)
    player.draw(ctx)
    requestAnimationFrame(animate)
  }
  animate()
})