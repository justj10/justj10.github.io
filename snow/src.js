var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
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
    snow.push(new flake())
}
function draw(){
    background(0);
    for(fl of snow){
        fl.render();
    }
}