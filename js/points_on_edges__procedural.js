
function vibrating_turquoise_rects_init(canvas_id, canvasWidth, canvasHeight) {
	
	let scene = function(p) {

		//-------------------------------------------------------------------------------------
		p.setup = function (){
			p.createCanvas(canvasWidth, canvasHeight);
			p.angleMode(p.DEGREES);
			p.ellipse(0,0,10,10);
		}

		//-------------------------------------------------------------------------------------
        p.draw = function(){

			p.background(0);

			var main_rect_x = p.random(95,100);
			var main_rect_y = p.random(95,100);
		
			main_complex_rect(main_rect_x, main_rect_y, 1.0);
			main_complex_rect(main_rect_x, main_rect_y+185, 0.75);
			main_complex_rect(main_rect_x, main_rect_y+315, 0.5);
			main_complex_rect(main_rect_x+125, main_rect_y+105, 0.80);
			main_complex_rect(main_rect_x+125, main_rect_y+270, 0.75);
			main_complex_rect(main_rect_x+345, main_rect_y+185, 1.75);
		}

		//-------------------------------------------------------------------------------------
		function main_complex_rect(x,y,complex_rect_scale) {

			var c1 = p.color(p.random(10,100), p.random(100,200), 164);
			var c2 = p.color(p.random(10,100), p.random(100,200), 164);
			var c3 = p.color(p.random(10,100), p.random(100,200), 164);
			var c4 = p.color(p.random(10,100), p.random(100,200), 164);

			var rect1 = main_rect(x, y, p.random(44,46),1.0*complex_rect_scale,c1);

			var rect2 = main_rect(x, y, p.random(89,91),0.7*complex_rect_scale,c2);

			var rect3 = main_rect(x, y, p.random(134,136),0.5*complex_rect_scale,c3);

			var rectc3 = main_rect(x, y, p.random(179,181),0.35*complex_rect_scale,c4);
		}

		//-------------------------------------------------------------------------------------
		function main_rect(x, y, rotation_angle, rect_scale,rect_color) {

			var main = {

				x:x,
				y:y,
				width:150,
				height:150,
				circles:[]

			};

			p.fill(rect_color); 
			p.stroke(45, 255, 233);
			p.strokeWeight(3);

			p.push();
			p.translate(main.x+main.width/2,main.y+main.width/2); //changing cordinates on canvas
			p.scale(rect_scale,rect_scale);	
			p.rotate(rotation_angle);								// half_PI is used for rotation of 360 deegres, PI for 180 deegres				
			

			p.rect(0-main.width/2,0-main.width/2,main.width,main.height);
			

			draw_circles(main);
			
			draw_lines(main);


			//rect(0,0,20,20);
			p.pop();

			//rectMode(CENTER);

			return main;

		}

		//-------------------------------------------------------------------------------------
		function draw_circles(main) {

			var ellipses_cordinates = [
				[0-main.width/2,0-main.height/2], //0
				[0+main.width/2,0-main.height/2], //1
				[0+main.width/2,0+main.height/2], //2
				[0-main.width/2,0+main.height/2]  //3
			];

			for (var i = 0; i < 4; i++) {
				
				var circle_x = ellipses_cordinates[i][0]
				var circle_y = ellipses_cordinates[i][1]
				/*var ellipse_3 = ellipses_cordinates[i][2]
				var ellipse_4 = ellipses_cordinates[i][3]*/

				var circle = {

					x:circle_x,
					y:circle_y,
					width:15,
					height:15

				};

				p.noStroke();
				p.fill(239, 206, 40);
				p.ellipse(circle.x,circle.y,circle.width,circle.height);

			}

		}

		//-------------------------------------------------------------------------------------
		function draw_lines(main) {

			var lines_number = 16;

			for (var j = 1; j < lines_number; j++) {
				
				p.strokeWeight(2);
				p.stroke(239, 206, 40);
				
				p.line(0-main.width/2+j*main.width/lines_number,
					0-main.height/2,
					0-main.width/2+j*main.width/lines_number,
					0+main.height/2-1);

			}

			return;	
		
		}
		
		//-------------------------------------------------------------------------------------
		p.windowResized = function (){
            var div_turquoise_rects_height = $(".sketch_p5 .sketch_canvas canvas").height()
            var div_turquoise_rects_width = $(".sketch_p5 .sketch_canvas canvas").width()

            p.resizeCanvas(div_turquoise_rects_width, div_turquoise_rects_height);
        }
	}

	new p5(scene, canvas_id);
}