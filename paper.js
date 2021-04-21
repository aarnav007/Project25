class paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,
        }
        this.body = Bodies.rectangle(x, y, 38, 38, options);
        this.width = 60;
        this.height = 60;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
        
    }
    display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, 60,60);
        pop();
      }
}