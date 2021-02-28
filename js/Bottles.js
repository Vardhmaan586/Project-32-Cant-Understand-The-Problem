class Bottles{
    constructor(x,y){
        
        var options = {
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,10,40,options);
        
        this.width = 50;
        this.height = 50;

        this.image = loadImage("images/bottle.png");

        World.add(world,this.body);
    }

    display(){
       //if(this.body.speed>5){
         //if(this.visibility == 255){
          imageMode(CENTER);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        // }
        //}
        /*else{
         push();
         this.visibility = this.visibility-5;
         tint(255,this.visibility);
         image(this.image,this.body.position.x,this.body.position.y,50,50);
         World.remove(world,this.body);
         pop();
        }*/
    }
}