function flying_rects_init (canvas_id, canvasWidth, canvasHeight) {
   
    
    var squaresNumber = 40;
    var squareWidth = 25;
    var squaresPositionsX = [];
    var squaresPositionsY = [];

    let scene = function(p) {

        p.setup = function (){
            
            p.createCanvas(canvasWidth, canvasHeight);

            for(var n = 0; n < squaresNumber; n++){
                //positions each square at a equal distance from each other in a horizontal line
                var x=canvasWidth/squaresNumber*n;
                var y=canvasHeight/2; 

                squaresPositionsX[n] = x;
                squaresPositionsY[n] = y;
            }

        }
    
        p.draw = function(){

            p.background(214, 167, 13, 0.808);

            for (var n = 0; n < squaresNumber; n++){
                var x = squaresPositionsX[n];
                var y = squaresPositionsY[n];

                yNew = drawSquare(x,y,p);
                //returns new value
                squaresPositionsY[n] = yNew;


                var d = distanceBetweenSquares(squaresPositionsX[n-1],squaresPositionsY[n-1],squaresPositionsX[n],squaresPositionsY[n]);

                if (d<150){
                    p.stroke(2);
                    p.line(squaresPositionsX[n-1] + squareWidth/2,
                        squaresPositionsY[n-1] + squareWidth/2,
                        squaresPositionsX[n] + squareWidth/2,
                        squaresPositionsY[n] + squareWidth/2);
            
                }
            }    
        }
        
        function drawSquare(x,y,p) {

            p.fill(0);
            p.rect(x,y,squareWidth,squareWidth);

            //if(y<60){
                y = y + p.random(-5,5);
            //} 
            return y;
        }

        function distanceBetweenSquares(x1,y1,x2,y2){

            var dx = Math.pow((x2-x1),2);
            var dy = Math.pow((y2-y1),2);
            var cSquare = dx + dy;    //c=trinagle hypothenuse 
            var c = Math.sqrt(cSquare);
            return c;
        }

        p.windowResized = function (){
            var div_height = $(".sketch_p5 .sketch_canvas canvas").height()
            var div_width = $(".sketch_p5 .sketch_canvas canvas").width()

            p.resizeCanvas(div_width, div_height);
        }

    };

    new p5(scene, canvas_id);

}   
