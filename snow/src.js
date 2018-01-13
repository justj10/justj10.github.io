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
        strokeWeight(40);
        point(this.position.x,this.position.y);
    }
}
let snow=[];
function setup(){
    createCanvas(windowWidth,windowHeight);
    
}
function draw(){
    snow.push(new Flake());
    background(0);
    for(z =0;z<snow.lenth;z++){
        snow[z].render();
    }
}