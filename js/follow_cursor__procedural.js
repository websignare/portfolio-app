function rect_follows_cursor_init(canvas_id, canvasWidth, canvasHeight){

	var angle_degrees = 45;

	let scene = function(p) {


		p.setup = function() {
			p.createCanvas(canvasWidth, canvasHeight);
			p.background(0);
			p.angleMode(p.DEGREES);

		}

		//-------------------------------------------------------------------------------------
		p.draw = function() {
			
			var random_color = p.random(255);
			
			p.stroke(2);
			p.fill(255, random_color, 71);
			p.translate(p.mouseX,p.mouseY);
			p.rotate(angle_degrees);
			p.rect(0,0,90,90);

			angle_degrees = angle_degrees + 1;
		}
		//-------------------------------------------------------------------------------------
		p.windowResized = function (){
            var animation_height = $(".sketch_p5 .sketch_canvas canvas").height()
            var animation_width  = $(".sketch_p5 .sketch_canvas canvas").width()

            p.resizeCanvas(animation_height, animation_width);
		}
		
		
	}

	new p5(scene, canvas_id);
}