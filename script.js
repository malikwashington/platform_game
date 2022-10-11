import Player from './player.js'
import InputHandler from './input.js'
import Enemy from './enemy.js'
// import {drawStatusText} from './utils.js'


window.addEventListener('load', function () {
  const loading = this.document.getElementById('loading')
  loading.style.display = 'none'
  const canvas = this.document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  let score = 0;
  
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
  
  function drawStatusText() {
    ctx.font = "40px Helvetica";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 20, 50);
    ctx.font = "40px Helvetica";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 22, 52);
  //   if ((gameOver = true)) {
  //     ctx.textAlign = "center";
  //     ctx.fillStyle = "black";
  //     ctx.fillText("GAME OVER", 20, 50);
  //     ctx.fillStyle = "white";
  //     ctx.fillText("GAME OVER", 22, 52);
  //   }
  }
  
  const layer1 = new Layer(this.document.getElementById("background1"), 0.2);
  const layer2 = new Layer(this.document.getElementById("background2"), 0.4);
  const layer3 = new Layer(this.document.getElementById("background3"), 0.6);
  const layer4 = new Layer(this.document.getElementById("background4"), 0.8);
  const layer5 = new Layer(this.document.getElementById("background5"), 1);
  
  const gameObjects = [layer1, layer2, layer3, layer4, layer5];
  
  let enemies = [];
  let counter = 0
  function handleEnemies() {
    if (Math.floor(Math.random(counter)*10000000 % 800) == 0) {
      enemies.push(new Enemy(canvas.width, canvas.height))
    }
    enemies.forEach(enemy => {
      enemy.draw(ctx)
      enemy.update(enemies)
    })
    enemies = enemies.filter(enemy => !enemy.delete)
  }
  const player = new Player(canvas.width, canvas.height)
  const input = new InputHandler()
  console.log(this.player.gameOver)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    gameFrame--;
    player.update(input.lastKey, enemies)
    player.draw(ctx)
    handleEnemies()
    drawStatusText()
    counter++
    requestAnimationFrame(animate);
  }
  animate()
  
})