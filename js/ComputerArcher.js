class ComputerArcher {
    constructor(){
        this.body = Bodies.rectangle(10,10);
        this.image = loadImage("./assets/computerArcher.png");
        Matter.body.setAngle(this.body,-PI/2);
    }
    display(){
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
    }
}