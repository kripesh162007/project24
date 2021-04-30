class Iron{
    constructor(){
        this.iron=Matter.Bodies.rectangle(20,100,50,50)
        this.w=50
        this.h=50
        World.add(world,this.iron)
    
    }
    display(){
        fill("pink")
        rectMode(CENTER)
        rect(this.iron.position.x,this.iron.position.y,this.w,this.h)
    }

}
