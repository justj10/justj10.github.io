let z;
class Flake{
    constructor(sx,sy,img){
        let x = sx ||random(width);
        let y = sy ||random(-140,-10);
        this.img = img;
        this.position = createVector(x,y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.angle = random(TWO_PI);
        this.dir = random()<.5?1:-1;
        this.xOffset = 0;
        this.r = constrain((pow(random(),3)*16),2,16);
    }
    render(){
        push();
        translate(this.position.x+this.xOffset,this.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img,0,0,this.r,this.r);
        pop();
    }
    applyForce(force){
        let f = force.copy();
        f.mult(this.r);
        this.acceleration.add(force);
    }
    update(){
        this.xOffset = sin(this.angle)*this.r*1.5;
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
        if(this.position.x<-this.r)
            this.position.x = width + this.r;
        if(this.position.x>width+this.r)
            this.position.x = this.width - this.r;
        this.angle += this.velocity.mag() / 150 * this.dir;
        
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
        this.img = random(textures);
        this.r = constrain((pow(random(),4)*32),2,32);
    }
}
let snow=[],gravity,zOff=0;
let spritesheet,textures = [];
function preload(){
    spritesheet = loadImage('snowflakes.png');
}
function setup(){
    gravity = createVector(0,0.05);
    createCanvas(windowWidth,windowHeight);
    for(let x = 0;x<spritesheet.width;x+=32){
        for(let y = 0;y<spritesheet.height;y+=y+32){
            let img = spritesheet.get(x,y,32,32);
            textures.push(img);
        }
    }
    for(let i = 0;i<600;i++){
        let x=random(width);
        let y=random(height);
        let design = random(textures);
        snow.push(new Flake(x,y,design));
    }
}
function draw(){
    background(0);
    
    zOff += .1;
    for(fl of snow){
        let xOff = fl.position.x/width;
        let yOff = fl.position.y/height;
        let wAngle = noise(xOff,yOff,zOff) * TWO_PI;
        let wind = createVector(cos(wAngle),sin(wAngle));
        wind.mult(0.01);
        fl.applyForce(gravity);
        fl.applyForce(wind);
        fl.update();
        fl.render();
    }
}