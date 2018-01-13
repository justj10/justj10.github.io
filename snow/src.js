let z;
class Flake{
    constructor(){
        let x = random(width),y = random(-140,-10);
        this.position = createVector(x,y);
        this.velocity = createVector(0,10);
        this.acceleration = createVector();
    }
    render(){
        stroke(255);
        strokeWeight(4);
        point(this.position.x,this.position.y);
    }
    update(){
        this.position.add(this.vel);
    }
}
let snow=[];
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    background(0);
    snow.push(new Flake());
    for(fl of snow){
        fl.update();
        fl.render();
    }
}