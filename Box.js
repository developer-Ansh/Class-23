class Box{

//PROPERTIES
constructor(x,y,width,height)
{
  var body_options ={
        restitution: 1.0,friction: 0.3,density: 1.0 
    }

    this.body = Bodies.rectangle(x,y,width,height, body_options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    

}



//FUNCTIONS
display()
{
var pos=this.body.position; //namespacing
var ang=this.body.angle;

 push();
 translate(pos.x,pos.y);   
 rotate(ang);   
 rectMode(CENTER);
 fill(255);
//  rotate(this.body.angle);
 rect(0,0, this.width,this.height);
 pop();
}



}