var x,y,dX,dY,s=5;
function setup() {
  createCanvas(600,600);
  x=300;
  y=300;
}

function draw() {
	background(240)
	fill(color(20));
	ellipse(x,y,30,30);
	if(x<mouseX){
		dX=1;
		if(y<mouseY){
			dY=1;
			if(x!=mouseX)
				x+=s;
			if(y!=mouseY)
				y+=s;
		}else{
			dY=-1;
			if(x!=mouseX)
				x+=s;
			if(y!=mouseY)
				y-=s;
		}
	}else{
		dX=-1;
		if(y<mouseY){
			dY=1;
			if(x!=mouseX)
				x-=s;
			if(y!=mouseY)
				y+=s;

		}else{
			dY=-1;
			if(x!=mouseX)
				x-=s;
			if(y!=mouseY)
				y-=s;

		}
	}
}