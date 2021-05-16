var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    display: 'white',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};


var game = new Phaser.Game(config);
// declare other global variables (for sprites, etc.)

// preload game assets - runs one time when webpage first loads
function preload() {
    this.load.image('player', 'assets/player.png');
}

// create game world - runs one time after preload finishes
function create() {
    player = this.add.sprite(400, 300, 'player');
}

// update game - runs repeatedly in loop after create finishes
function update() {
    if (mouse)
}

// add custom functions (for collisions, etc.) - only run when called
