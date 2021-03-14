class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
       // this.angle = angle;
        World.add(world, this.body);
        this.visibility=255;
        
      }
      display(){
        var angle = this.body.angle;

        this.position = this.body.position;

        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0, this.width, this.height);
          pop();
        }

        else{
          push();
          
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          rectMode(CENTER);
          rect(this.body.x,this.body.y,this.width,this.height);
          World.remove(world,this.body);
          pop();
        }
      }

      score(){
        if(this.visibility < 0 && this.visibility >- 105){
          Score++;
        }
      }

      }