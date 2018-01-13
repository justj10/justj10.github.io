class Flake{
    constructor(){
        this.position = createVector();
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
    snow.push(new Flake());
}
function draw(){
    background(0);
    for(let z =0;z<snow.lenth;z++){
        snow[z].render();
    }
}