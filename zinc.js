class Zinc{
constructor(r){
    this.zinc=Bodies.circle(40,100,r)
    this.r=r
    World.add(world,this.zinc)

}
display(){
    ellipseMode(RADIUS)
    ellipse(this.zinc.position.x,this.zinc.position.y,this.r,this.r)
}
}