
import Scene0 from "./scene0.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  scene: Scene0,
  physics: {
    default: "arcade",
  }
};

const game = new Phaser.Game(config);
