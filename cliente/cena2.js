import { cena1 } from './cena1.js';

var cena2 = new Phaser.Scene("Cena 2");

cena2.preload = function () {

    this.load.image('final', 'assets/cena2.png');
    this.load.image('retornar', 'assets/retornar.png')
};

cena2.create = function () {

    var button = this.add.image(400, 400, 0, 'retornar').setInteractive();

    button.on(
        'pointerdown',
        function () {
            this.scene.start(cena1);
        },
        this
    );
};

cena2.update = function () {};

export { cena2 };