class Box {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
  
  };
  score()
  {
     if(this.visibility< 0 && this.visibility>-105){
         score++
     }
    
    display()
  {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };