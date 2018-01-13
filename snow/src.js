let z;
class Flake{
    constructor(){
        let x = random(width),y = random(height);
        this.position = createVector(x,y);
        this.velocity = createVector();
        this.acceleration = createVector();
    }
    render(){
        stroke(255);
        strokeWeight(4);
        point(this.position.x,this.position.y);
    }
}
let snow=[];
function setup(){
    createCanvas(windowWidth,windowHeight);
    snow.push(new Flake());
}
function draw(){
    background(0);
    for(fl of snow){
        fl.render();
    }
}