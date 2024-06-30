import PropTypes from "prop-types";
import { useEffect } from "react";
import * as Phaser from "phaser";

const PhaserGame = ({ gameId }) => {
  useEffect(() => {
    // Check if the code is running in the browser
    if (typeof window === "undefined") {
      return;
    }

    const sizes = {
      width: 1366,
      height: 768,
    };

    const speedDown = 5000;

    const config = {
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

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("background", "/images/BattleBackground.png");
      this.load.image("bird", "/images/Bird.svg");
    }

    function create() {
      this.add.image(0, 0, "background").setOrigin(0, 0);
      this.player1 = this.physics.add.image(420, 620, "bird").setOrigin(0, 0);
      this.player1.setImmovable(true);
      this.player1.body.allowGravity = false;
      this.player1.setCollideWorldBounds(true);

      this.cursor = this.input.keyboard.createCursorKeys();

      this.player1Text = this.add.text(420, 620, "Player 1", { font: "16px Arial", fill: "#ffffff" });

      this.playerSpeed = 500;
    }

    function update() {
      const { left, right, up, down } = this.cursor;

      this.player1Text.x = this.player1.x;
      this.player1Text.y = this.player1.y - 20;

      if (left.isDown) {
        this.player1.setVelocityX(-this.playerSpeed).setFlipX(true);
      } else if (right.isDown) {
        this.player1.setVelocityX(this.playerSpeed).setFlipX(false);
      } else {
        this.player1.setVelocityX(0);
      }

      if (up.isDown) {
        this.player1.setVelocityY(-this.playerSpeed);
      } else if (down.isDown) {
        this.player1.setVelocityY(this.playerSpeed);
      } else {
        this.player1.setVelocityY(0);
      }
    }

    // Cleanup function
    return () => {
      game.destroy(true);
    };
  }, [gameId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: `${window.innerHeight}px` }}>
      <div id="game-container" style={{ width: "1366px", height: "768px" }} />
    </div>
  );
};

PhaserGame.propTypes = {
  gameId: PropTypes.string.isRequired,
};

export default PhaserGame;
