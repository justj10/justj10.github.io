let z;
class Flake{
    constructor(sx,sy,img){
        let x = sx ||random(width);
        let y = sy ||random(-140,-10);
        this.img = img;
        this.position = createVector(x,y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.r = constrain((pow(random(),10)*16),2,16);
    }
    render(){
        imageMode(CENTER);
        image(this.img,this.position.x,this.position.y,this.r,this.r);
    }
    applyForce(force){
        let f = force.copy();
        f.mult(this.r);
        this.acceleration.add(force);
    }
    update(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.r*.2);
        if(this.velocity.mag() <1){
            this.velocity.normalize();
        }
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        if(this.position.y>height + this.r){
            this.randomize();
        }
    }
    offScreen(){
        return (this.position.y > height + this.r);
    }
    randomize(){
        let x = random(width);
        let y = random(-140,-10);
        this.position = createVector(x,y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.r = constrain((pow(random(),10)*16),2,16);
    }
}
let snow=[],gravity;
let spritesheet,textures = [];
function preload(){
    spritesheet = loadImage('snowflakes.png');
}
function setup(){
    gravity = createVector(0,0.03);
    createCanvas(windowWidth,windowHeight);
    for(let x = 0;x<spritesheet.width;x+=32){
        for(let y = 0;y<spritesheet.height;y+=y+32){
            let img = spritesheet.get(x,y,32,32);
            textures.push(img);
        }
    }
    for(let i = 0;i<300;i++){
        let x=random(width);
        let y=random(height);
        let design = random(textures);
        snow.push(new Flake(x,y,design));
    }
}
function draw(){
    background(0);
    // snow.push(new Flake());
    for(fl of snow){
        fl.applyForce(gravity);
        fl.update();
        fl.render();
    }
}