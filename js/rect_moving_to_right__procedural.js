function rect_moving_on_x(canvas_id, canvasWidth, canvasHeight) {

	
    x=50;
	var y=0;
	var squareHeight=40;
	var rightEdgeReached=false;

	let scene = function(p) {
	
		p.setup = function (){
			//canvasHeight = canvasHeight/2;
			y            = canvasHeight/2 - squareHeight/2;

			p.createCanvas(canvasWidth, canvasHeight);
		}

		p.draw = function(){
			p.background(14,20,21);

			p.stroke(255);
			p.strokeWeight(1);
			p.line(0,canvasHeight/2,x,y+squareHeight/2);

			p.noStroke();
			p.fill(0,p.random(150,255),0);
			p.rect(x,y,squareHeight,squareHeight);

			console.log(canvasWidth)
			console.log((x-squareHeight)<canvasWidth)

			if(x<(canvasWidth-squareHeight) && !rightEdgeReached){
				x = x + p.random(-5,10);
			} else {
				rightEdgeReached=true;
			}
			if(x<0){
				rightEdgeReached=false;
			}
			if(rightEdgeReached){
				x = x - p.random(10);
			}
		}

		p.windowResized = function (){
			var div_rect_right_height = $(".sketch_p5 .sketch_canvas canvas").height()
			var div_rect_right_width = $(".sketch_p5 .sketch_canvas canvas").width()

			p.resizeCanvas(div_rect_right_width, div_rect_right_height);
		}
	}

	new p5(scene, canvas_id);   

}