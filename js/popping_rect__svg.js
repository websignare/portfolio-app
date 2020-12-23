
/*$(document).ready(function(){
    main();
})

function main() {

    
    var screen_width  = window.innerWidth;
    var screen_height = window.innerHeight;

    $("body").append(`
        <div id="wrapper">
        </div>
    `);

    $("#wrapper").css({                    
        "background-color": '#fff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width
    }); 

    $(document).ready(function(){
        main();
    })
    
    function main() {
    
        
        var screen_width  = window.innerWidth;
        var screen_height = window.innerHeight;
    
        $("body").append(`
            <div id="wrapper">
            </div>
        `);
    
        $("#wrapper").css({                    
            "background-color": '#fff',
            "position":         "relative",
            "height":           screen_height,
            "width":            screen_width
        }); 
    
        var container       = SVG().addTo("#wrapper").size(screen_width, screen_height)
        var container_gr    = container.nested()   
    
        create_grid_of_popping_rects(container_gr, screen_height, screen_width)
    
        $( window ).resize(function() {
            $( "#wrapper" ).remove();
    
            var screen_width = window.innerWidth;
            var screen_height = window.innerHeight;
    
            create_grid_of_popping_rects(container_gr, screen_height, screen_width)
            create_full_screen_animations(container_gr, screen_width, screen_height)
        });
    }
    var container       = SVG().addTo("#wrapper").size(screen_width, screen_height)
    var container_gr    = container.nested()   

    create_grid_of_popping_rects(container_gr, screen_height, screen_width)

    $( window ).resize(function() {
        $( "#wrapper" ).remove();

        var screen_width = window.innerWidth;
        var screen_height = window.innerHeight;

        create_grid_of_popping_rects(container_gr, screen_height, screen_width)
        create_full_screen_animations(container_gr, screen_width, screen_height)
    });
}*/
  
//---------------------------------F - BACKGROUND - CREATE GRID OF POPPING RECTS----------------------------------------------------------------
function create_grid_of_popping_rects(parent_gr, screen_height, screen_width){
    var line_number = 50;

    //draw_grid(parent_gr, line_number, screen_height, screen_width);
    draw_random_squares(parent_gr, line_number, screen_height, screen_width)
}

//-------------------------------------------F - DRAW RANDOM SQUARES----------------------------------------------------------------
function draw_random_squares(parent_gr, line_number) {
    var popping_rects_gr = parent_gr.nested()   

    // grid_cell_count counts number of rects inside each grids cell
    var grid_cell_count = {}

    setInterval(function(){ 
        for (let rects_number = 0; rects_number < 15; rects_number += 1) {
            var i = Math.floor(Math.random()*line_number);
            var j = Math.floor(Math.random()*line_number); //Math.random() gives decimal number from 0.0 to 1.0 --> Math.module

            // grid_cell_key is a cell that puts rects coordinates(i, j) inside string
             var grid_cell_key = 'c'+i.toString()+j.toString()

            // if the number of rects inside the same cell is bigger or equal to three remove rects 
            // and reset counter. 
            if (grid_cell_key in grid_cell_count && grid_cell_count[grid_cell_key] >= 3){
                popping_rects_gr.find('.'+grid_cell_key).remove()
                grid_cell_count[grid_cell_key] = 0 // resets counter
                continue
            }

            var x = j * 50;
            var y = i * 50;
            var random_color = SVG.Color.random('vibrant').toHex();

            var popping_rects = popping_rects_gr.rect(50, 50).fill(random_color)
                .attr({x: x})
                .attr({y: y})
                .attr({opacity: 0.2})
                .attr({class: grid_cell_key})

            if (grid_cell_key in grid_cell_count){
                grid_cell_count[grid_cell_key] += 1
            } else {
                grid_cell_count[grid_cell_key] = 1
            }
        }
        console.log(grid_cell_count)

     }, 500);
}
