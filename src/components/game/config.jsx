import * as Phaser from "phaser";
import { preload } from "./preload";
import { create } from "./create";
import { update } from "./update";

const sizes = {
  width: 480,
  height: 640,
};

const speedDown = 1000;

export const config = {
  type: Phaser.AUTO,
  width: sizes.width,
  height: sizes.height,
  parent: "game-container",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: false,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};
