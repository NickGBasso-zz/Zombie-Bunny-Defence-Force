//Game loop
const FPS = 30;
const gameLoop = setInterval(() => {
  update();
  draw();
}, 1000/FPS);