
function three_rects_connected_init(canvas_id, canvasWidth, canvasHeight){
    var x1=200;
    var y1=0;
    var x2=400;
    var y2=0;
    var x3=600;
    var y3=0;
    var squareWidth=40;
    
    let scene = function(p) {

        p.setup = function() {
            //canvasHeight=windowWidth/2;
            //x=canvasHeight/2-squareHeight/2;
            p.createCanvas(canvasWidth, canvasHeight);
            y1=canvasHeight/2;
            y2=canvasHeight/2;
            y3=canvasHeight/2;
        };

        p.draw = function(){

            p.background(124, 94, 220,  0.878);
            y1=drawSquare(x1,y1,p);
            y2=drawSquare(x2,y2,p);
            y3=drawSquare(x3,y3,p);
            var d=distanceBetweenSquares(x1,y1,x2,y2) //d=distance
            //console.log("d-"+d)
            var d2=distanceBetweenSquares(x2,y2,x3,y3)

            if (d<300){
                p.stroke(182);
                p.line(x1+squareWidth/2,
                    y1+squareWidth/2,
                    x2+squareWidth/2,
                    y2+squareWidth/2);

            }
            if (d2<300){
                p.stroke(222);
                p.line(x2+squareWidth/2,
                    y2+squareWidth/2,
                    x3+squareWidth/2,
                    y3+squareWidth/2);

            }
        };

        function drawSquare(x, y, p) {

            p.fill(193,p.random(220),0);
            //p.noStroke()                                             //gives drawing effect to animation, it remembers every previous move
            p.rect(x,y,squareWidth,squareWidth);

            //if(y<60){
                y = y + p.random(-5,5);
            //} 
            return y;
        };

        function distanceBetweenSquares(x1,y1,x2,y2){

            var dx=Math.pow((x2-x1),2);
            var dy=Math.pow((y2-y1),2);
            var cSquare=dx + dy;    //c=trinagle hypothenuse 
            var c=Math.sqrt(cSquare);
            return c;
        };

        p.windowResized = function (){
            var div_rect_height = $(".sketch_p5 .sketch_canvas canvas").height()
            var div_rect_width  = $(".sketch_p5 .sketch_canvas canvas").width()

            p.resizeCanvas(div_rect_width, div_rect_height);
        }
    }

    new p5(scene, canvas_id);
}