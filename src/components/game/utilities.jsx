const sizes = {
    width: 480,
    height: 640,
  };
  
  export function flap() {
    if (!this.gameOver) {
      this.bird.setVelocityY(-300);
    }
  }
  
  export function hitBranch() {
    if (!this.gameOver) {
      this.gameOver = true;
      this.physics.pause();
      this.bird.setTint(0xff0000);
  
      this.add.text(sizes.width / 2, sizes.height / 2, "End of the Game", {
        fontSize: '32px',
        fill: '#ffffff'
      }).setOrigin(0.5);
  
      this.background.tilePositionX = 0;
      this.branches.setVelocityX(0);
      this.branches.setVelocityY(0);
    }
  }
  
  export function addRowOfBranches() {
    if (this.gameOver) return;
  
    const gapStart = Math.floor(Math.random() * 5) + 1; // Ajuster pour couvrir toute la hauteur
    const gapSize = 150; // Taille de l'écart
  
    // Ajouter des branches en haut jusqu'au gap
    for (let i = 0; i < gapStart; i++) {
      addBranch.call(this, sizes.width, i * 80, "branchBottom"); // Branches en bas
    }
  
    // Ajouter des branches en bas après le gap
    for (let i = gapStart + 2; i < Math.ceil(sizes.height / 80); i++) {
      addBranch.call(this, sizes.width, i * 80, "branchTop"); // Branches en haut
    }
  }
  
  export function addBranch(x, y, key) {
    const branch = this.physics.add.sprite(x, y, key);
    this.branches.add(branch);
    branch.body.allowGravity = false;
    branch.setVelocityX(-200);
  
    branch.checkWorldBounds = true;
    branch.outOfBoundsKill = true;
  }
  