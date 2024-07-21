import { addRowOfBranches, flap, hitBranch } from "./utilities";

export function create() {
  const sizes = {
    width: 480,
    height: 640,
  };

  this.background = this.add.tileSprite(0, 0, sizes.width, sizes.height, "background").setOrigin(0, 0);
  this.bird = this.physics.add.sprite(50, sizes.height / 2, "bird").setOrigin(0, 0);
  this.bird.setCollideWorldBounds(true);
  this.branches = this.physics.add.group();

  this.timer = this.time.addEvent({
    delay: 1500,
    callback: addRowOfBranches,
    callbackScope: this,
    loop: true,
  });

  this.input.on("pointerdown", flap, this);
  this.input.keyboard.on('keydown-SPACE', flap, this);
  this.input.keyboard.on('keydown-SPACE', function (event) {
    event.preventDefault();
  });

  this.gameOver = false;

  this.physics.add.collider(this.bird, this.branches, hitBranch, null, this);
}
