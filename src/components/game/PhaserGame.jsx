import PropTypes from "prop-types";
import { useEffect } from "react";
import * as Phaser from "phaser";
import { config } from "./config";

const PhaserGame = ({ gameId }) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, [gameId]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: `${window.innerHeight}px` }}>
      <div id="game-container" style={{ width: "320px", height: "480px" }} />
    </div>
  );
};

PhaserGame.propTypes = {
  gameId: PropTypes.string.isRequired,
};

export default PhaserGame;
