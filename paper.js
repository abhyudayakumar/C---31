class Paper extends BaseClass
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:2,
			density:0.6

			
			}
		this.x=x;
		this.y=y;
		this.r=70
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
    display()
    {
			
        var pos=this.body.position;		

        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r);
        pop()
        
}
}