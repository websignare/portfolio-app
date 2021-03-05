/*$(document).ready(function(){
    main();
})*/

/*function main(){

    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;

    create_full_screen_animations(screen_width, screen_height)
    
    $( window ).resize(function() {
        $( "#wrapper" ).remove();

        var screen_width = window.innerWidth;
        var screen_height = window.innerHeight;

        create_full_screen_animations(screen_width, screen_height)
    });
}*/

function create_full_screen_animations(bar_gr, screen_width, screen_height) {

    $("body").append(`
        <div id="wrapper">
        </div>
    `);

    $("#wrapper").css({                    
        "background-color": "none",
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width
    }); 

    var container              = SVG().addTo("#wrapper").size(screen_width, screen_height) // draw svg canvas
    var container_gr           = container.nested()
    var transition_elements_gr = container_gr.nested()  

    swipe_to_right(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    swipe_to_left(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    swipe_down_and_up(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    swipe_half_width(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    swipe_half_height(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    scale_rect(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    swipe_all_directions(container_gr, transition_elements_gr, screen_width, screen_height)
    swipe_all_directions_delay(container_gr, transition_elements_gr, bar_gr, screen_width, screen_height)
    /*$("#wrapper").click(function() {
        close_all(swipe_to_right_info, swipe_to_left_info, swipe_down_and_up_info, swipe_half_width_info, swipe_half_height_info, scale_rect_info, screen_width, screen_height);
    });*/
}
//--------------------------------------------BUTTON_ONE------------------------------------------------------------------
function swipe_to_right(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {
    //create full_screen
    var full_screen_rect    = transition_elements_gr.rect(0, screen_height).fill('#442b3eff').attr({opacity: 1.0})
    var swipe_to_right_info = {
        "full_screen_rect": full_screen_rect
    }

    //create button
    var rect_width  = 100;
    var rect_height = 100;
    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2-rect_width*2, screen_height/3)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#356596').attr({opacity: 1.0})

    rect_clicked = false;

    rect_gr.click(function() {
        if(rect_clicked == false){
            animate_swipe_to_right__activate(swipe_to_right_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_swipe_to_right__deactivate(swipe_to_right_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    full_screen_rect.click(function() {
        animate_swipe_to_right__deactivate(swipe_to_right_info, screen_width, screen_height, bar_gr, function(){})
    })

    return swipe_to_right_info;
}

function animate_swipe_to_right__activate(swipe_to_right_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect  = swipe_to_right_info["full_screen_rect"];

    full_screen_rect.animate({
        duration: 200,
        ease: '>'
    })
    .attr({'width': screen_width})
    .after(function() {
        on_complete_fun();
    })
}

function animate_swipe_to_right__deactivate(swipe_to_right_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect  = swipe_to_right_info["full_screen_rect"];

    full_screen_rect.animate({
        duration: 200,
        delay:    400, 
        ease: '<'
    })
    .attr({'width': 0})
    .after(function() {
        on_complete_fun();
    })
}
    
//--------------------------------------------BUTTON_TWO--------------------------------------------
function swipe_to_left(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {
    var full_screen_rect = transition_elements_gr.rect(0, screen_height)
        .fill('#510c2c')
        .attr({
            x: screen_width,
            opacity: 1.0
        })
    var swipe_to_left_info = {
        "full_screen_rect": full_screen_rect
    }

    var rect_width  = 100;
    var rect_height = 100;
    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2-rect_width/2, screen_height/3)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#420420').attr({opacity: 1.0})

    rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_swipe_to_left__activate(swipe_to_left_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_swipe_to_left__deactivate(swipe_to_left_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    full_screen_rect.click(function() {
        animate_swipe_to_left__deactivate(swipe_to_left_info, screen_width, screen_height, bar_gr, function(){})
    })

    return swipe_to_left_info;
}

function animate_swipe_to_left__activate(swipe_to_left_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect  = swipe_to_left_info["full_screen_rect"];

    full_screen_rect.animate({
        duration: 200,
        ease: '>'
    }).attr({
        'width': screen_width,
        'x':     0
    })
    .after(function() {
        on_complete_fun();
    })
}

function animate_swipe_to_left__deactivate(swipe_to_left_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect  = swipe_to_left_info["full_screen_rect"];

    full_screen_rect.animate({
        duration: 200,
        delay:    400, 
        ease: '<'    
    }).attr({
        'width': 0,
        'x':     screen_width    
    })
    .after(function() {
        on_complete_fun();
    })
}

//--------------------------------------------BUTTON_THREE----------------------------------------------------------------
function swipe_down_and_up(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {
    var full_screen_rect_up    = transition_elements_gr.rect(screen_width, 0).fill('#8b0c57').attr({opacity: 1.0})
    var full_screen_rect_down  = transition_elements_gr.rect(screen_width, 0).fill('#8b0c57').attr({opacity: 1.0, y: screen_height})

    var swipe_down_and_up_info = {
        "full_screen_rect_up":   full_screen_rect_up,
        "full_screen_rect_down": full_screen_rect_down
    }

    var rect_width  = 100;
    var rect_height = 100;
    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2+rect_width, screen_height/3)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#ac166f').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_swipe_down_and_up__activate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_swipe_down_and_up__deactivate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    full_screen_rect_up.click(function() {
        animate_swipe_down_and_up__deactivate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, function(){})
    })
    full_screen_rect_down.click(function() {
        animate_swipe_down_and_up__deactivate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, function(){})
    })

    return swipe_down_and_up_info;
}

function animate_swipe_down_and_up__activate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect_up   = swipe_down_and_up_info["full_screen_rect_up"];
    var full_screen_rect_down = swipe_down_and_up_info["full_screen_rect_down"];


    full_screen_rect_up.animate({
        duration: 300,
        ease: '>'
    }).attr({
        'height': screen_height/2
    })
    .after(function() {
        full_screen_rect_down.animate({
                duration: 300,
                ease: '>'
            })
            .attr({
                'y':      screen_height/2 - 5, // - 5px added to eliminate white space between rects
                'height': screen_height/2
            })
            .after(function() {
                on_complete_fun();
            });
    });
}

function animate_swipe_down_and_up__deactivate(swipe_down_and_up_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect_up   = swipe_down_and_up_info["full_screen_rect_up"];
    var full_screen_rect_down = swipe_down_and_up_info["full_screen_rect_down"];


    full_screen_rect_up.animate({
        duration: 300,
        delay: 400,
        ease: '<'
    }).attr({
        'height': 0
    })
    .after(function() {

        full_screen_rect_down.animate({
            duration: 300,
            delay: 400,
            ease: '<'
        })
        .attr({
            'y':      screen_height,   
            'height': 0
        })
        .after(function() {
            on_complete_fun();
        });

    });
}

//--------------------------------------------BUTTON_FOUR----------------------------------------------------------------
function swipe_half_width(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {
    var full_screen_rect_up    = transition_elements_gr.rect(screen_width/2, 0).fill('#1c5e6d').attr({opacity: 1.0})
    var full_screen_rect_down  = transition_elements_gr.rect(screen_width/2, 0).fill('#1c5e6d').attr({opacity: 1.0, y: screen_height, x: screen_width/2})

    var swipe_half_width_info = {
        "full_screen_rect_up":   full_screen_rect_up,
        "full_screen_rect_down": full_screen_rect_down
    }

    var rect_width  = 100;
    var rect_height = 100;
    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2-rect_width*2, screen_height/2)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#3a727f').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_swipe_half_width__activate(swipe_half_width_info, screen_width, screen_height, function(){})

            rect_clicked = true;
        } else {
            animate_swipe_half_width__deactivate(swipe_half_width_info, screen_width, screen_height, function(){})

            rect_clicked = false;
        }
    })


    full_screen_rect_up.click(function() {
        animate_swipe_half_width__deactivate(swipe_half_width_info, screen_width, screen_height, function(){})
    })
    full_screen_rect_down.click(function() {
        animate_swipe_half_width__deactivate(swipe_half_width_info, screen_width, screen_height, function(){})
    })

    return swipe_half_width_info;
}

function animate_swipe_half_width__activate(transition_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var container_gr          = transition_info["transitions_container_gr"]
    var full_screen_rect_up   = transition_info["full_screen_rect_up"];
    var full_screen_rect_down = transition_info["full_screen_rect_down"];


    full_screen_rect_up.animate({
        duration: 400,
        ease: '>'
    })
    .attr({
        'height': screen_height
    })
    .after(function() {
        full_screen_rect_down.animate({
                duration: 400,
                ease: ">"
            })
            .attr({
                'y':      0, 
                'height': screen_height
            })
            .after(function() {

                on_complete_fun();

                /*function animate_square(on_complete_fun) {

                    var square_dim = Math.floor(Math.random()*200)
                    var y = Math.floor(Math.random()*screen_height) // screen_height/2 - square_dim/2;



                    var rect_gr = container_gr.nested();
                    rect_gr.rect(square_dim, square_dim)
                        .fill('blue')
                        .attr({opacity: 0.5, x: square_dim/2, y: y})
                        .animate({
                            duration: 3000,
                            
                        })
                        .rotate(360)

                    var max_y_offset     = 100;
                    var random_y         = Math.random()*max_y_offset;
                    var random_y_shifted = random_y - max_y_offset/2

                    rect_gr.animate({
                            duration: 1000 + Math.floor(Math.random()*2000) // 3000,
                        })
                        .dx(screen_width)
                        .dy(random_y_shifted)
                        .after(function() {


                            on_complete_fun();
                        })
                        
                }

                var j=0;
                for (var i=0;i<10;i++){
                    animate_square(function(){
                        j+=1
                        
                        if (j==10) {
                            on_complete_fun()
                        }
                    })
                }*/
                
                
            })
        });
}

function animate_swipe_half_width__deactivate(swipe_half_width_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect_up   = swipe_half_width_info["full_screen_rect_up"];
    var full_screen_rect_down = swipe_half_width_info["full_screen_rect_down"];


    full_screen_rect_up.animate({
        duration: 400,
        delay:    400, 
        ease: '<'
    }).attr({
        'height': 0
    })
    .after(function() {
        full_screen_rect_down.animate({
            duration: 400,
            ease: '<'
        })
        .attr({
            'y':      screen_height,   
            'height': 0
        })
        .after(function() {
            on_complete_fun();
        })
    });
}

//--------------------------------------------BUTTON_FIVE----------------------------------------------------------------
function swipe_half_height(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {
    var full_screen_rect_right = transition_elements_gr.rect(0, screen_height/2).fill('#00341A').attr({opacity: 1.0, x: 0})
    var full_screen_rect_left  = transition_elements_gr.rect(0, screen_height/2).fill('#00341A').attr({opacity: 1.0, x: screen_width, y: screen_height/2-5})

    var swipe_half_height_info = {
        "full_screen_rect_right": full_screen_rect_right,
        "full_screen_rect_left":  full_screen_rect_left
    }

    var rect_width  = 100;
    var rect_height = 100;
    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2-rect_width/2, screen_height/2)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#008040').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_swipe_half_height__activate(swipe_half_height_info, screen_height, screen_width, function(){})

            rect_clicked = true;
        } else {
            animate_swipe_half_height__deactivate(swipe_half_height_info, screen_height, screen_width, function(){})

            rect_clicked = false;
        }
    })

    full_screen_rect_right.click(function() {
        animate_swipe_half_height__deactivate(swipe_half_height_info, screen_height, screen_width, function(){})
    })
    full_screen_rect_left.click(function() {
        animate_swipe_half_height__deactivate(swipe_half_height_info, screen_height, screen_width, function(){})
    })

    return swipe_half_height_info;
}

function animate_swipe_half_height__activate(swipe_half_height_info, screen_height, screen_width, bar_gr, on_complete_fun){
    var full_screen_rect_right = swipe_half_height_info["full_screen_rect_right"];
    var full_screen_rect_left  = swipe_half_height_info["full_screen_rect_left"];


    full_screen_rect_right.animate({
        duration: 100
    }).attr({
        'x':     0,
        'width': screen_width
    })
    .after(function() {
        full_screen_rect_left.animate({
                duration: 100
            })
            .attr({
                'x':      0, 
                'width':  screen_width
            })
            .after(function() {
                on_complete_fun();
            })
    });
}

function animate_swipe_half_height__deactivate(swipe_half_height_info, screen_height, screen_width, bar_gr, on_complete_fun){
    var full_screen_rect_right = swipe_half_height_info["full_screen_rect_right"];
    var full_screen_rect_left  = swipe_half_height_info["full_screen_rect_left"];


    full_screen_rect_right .animate({
        duration: 100
    }).attr({
        'width': 0,
        'x':     0
    })
    .after(function() {

        full_screen_rect_left.animate({
            duration: 100
        })
        .attr({
            'width': 0,
            'x':     screen_width
        })
        .after(function() {
            on_complete_fun();
        })
        
    });
}

//--------------------------------------------BUTTON_SIX----------------------------------------------------------------
function scale_rect(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {

    var rect_width  = 100;
    var rect_height = 100;

    var full_screen_rect_scale = transition_elements_gr.rect(0, 0).fill('#f18b0fff').attr({opacity: 1.0, x: screen_width/2, y: screen_height/2})

    var scale_rect_info = {
        "full_screen_rect_scale": full_screen_rect_scale,
    }

    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2+rect_width, screen_height/2)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#f18b0fff').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_scale_rect__activate(scale_rect_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_scale_rect__deactivate(scale_rect_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    full_screen_rect_scale.click(function() {
        animate_scale_rect__deactivate(scale_rect_info, screen_width, screen_height, bar_gr, function(){})
    })

    return scale_rect_info;

}

function animate_scale_rect__activate(scale_rect_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect_scale = scale_rect_info["full_screen_rect_scale"];


    full_screen_rect_scale.animate({
        duration: 300,
        ease: '>'
    }).attr({
        'width':  screen_width,
        'height': screen_height,
        'x':      0,
        'y':      0
    })
    .after(function() {
        on_complete_fun();
    })
}

function animate_scale_rect__deactivate(scale_rect_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var full_screen_rect_scale = scale_rect_info["full_screen_rect_scale"];

    full_screen_rect_scale.animate({
        duration: 400,
        delay:    600, 
        ease: '<'
    }).attr({
        'width':  0,
        'height': 0,
        'x':      screen_width/2,
        'y':      screen_height/2
    })
    .after(function() {
        on_complete_fun();
    })
}

//--------------------------------------------BUTTON_SEVEN----------------------------------------------------------------
function swipe_all_directions(parent_gr, transition_elements_gr, bar_gr, screen_width, screen_height) {

    var rect_width  = 100;
    var rect_height = 100;

    var swipe_right_rect = transition_elements_gr.rect(0, screen_height/2+5).fill('#1c5e6d').attr({opacity: 1.0, x: 0})
    var swipe_down_rect  = transition_elements_gr.rect(screen_width/2, 0).fill('#190033').attr({opacity: 1.0, x: screen_width/2, y:0})
    var swipe_left_rect  = transition_elements_gr.rect(0, screen_height/2).fill('#8b0c57').attr({opacity: 1.0, x: screen_width, y: screen_height/2})
    var swipe_up_rect    = transition_elements_gr.rect(screen_width/2, 0).fill('#164372').attr({opacity: 1.0, x: 0, y: screen_height})

    var all_direction_info = {
        "swipe_right_rect": swipe_right_rect,
        "swipe_down_rect":  swipe_down_rect,
        "swipe_up_rect":    swipe_up_rect,
        "swipe_left_rect":  swipe_left_rect,
    }

    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2-rect_width/2*2.4, screen_height/2+rect_height*1.5)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#0b0080').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_all_directions__activate(all_direction_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    swipe_right_rect.click(function() {
        animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_down_rect.click(function() {
        animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_left_rect.click(function() {
        animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_up_rect.click(function() {
        animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, function(){})
    })

     return all_direction_info;
}

function animate_all_directions__activate(all_direction_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var swipe_right_rect = all_direction_info["swipe_right_rect"];
    var swipe_down_rect  = all_direction_info["swipe_down_rect"];
    var swipe_up_rect    = all_direction_info["swipe_up_rect"];
    var swipe_left_rect  = all_direction_info["swipe_left_rect"];

    swipe_right_rect.animate({
        duration: 250
    }).attr({
        'x':     0,
        'width': screen_width/2
    })
    swipe_down_rect.animate({
        duration: 250
    }).attr({
        'width':  screen_width/2,
        'height': screen_height/2+5,
        'x':      screen_width/2,
        'y':      0
    })   
    swipe_left_rect.animate({
        duration: 250
    }).attr({
        'x':      screen_width/2, 
        'width':  screen_width/2
    })
    swipe_up_rect.animate({
        duration: 250
    })
    .attr({
        'width':  screen_width/2,
        'height': screen_height/2,
        'x':      0,
        'y':      screen_height/2
    })
    .after(function() {
        on_complete_fun();
    })

}
function animate_all_directions__deactivate(all_direction_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var swipe_right_rect = all_direction_info["swipe_right_rect"];
    var swipe_down_rect  = all_direction_info["swipe_down_rect"];
    var swipe_up_rect    = all_direction_info["swipe_up_rect"];
    var swipe_left_rect  = all_direction_info["swipe_left_rect"];

    swipe_right_rect.animate({
        duration: 250
    }).attr({
        'x':     0,
        'width': 0
    })
    swipe_down_rect.animate({
        duration: 250
    }).attr({
        'width':  screen_width/2,
        'height': 0,
        'x':      screen_width/2,
        'y':      0
    })
    swipe_left_rect.animate({
        duration: 250
    }).attr({
        'x':      screen_width, 
        'width':  0
    })  
    swipe_up_rect.animate({
        duration: 250
    }).attr({
        'width':  screen_width/2,
        'height': 0,
        'x':      0,
        'y':      screen_height
    })   
    .after(function() {
        on_complete_fun();
    })
}


//--------------------------------------------BUTTON_EIGHT----------------------------------------------------------------
function swipe_all_directions_delay(parent_gr, transition_elements_gr, screen_width, screen_height) {

    var rect_width  = 100;
    var rect_height = 100;

    var swipe_right_rect = transition_elements_gr.rect(0, screen_height/2+5).fill('#3d2540').attr({opacity: 1.0, x: 0})
    var swipe_down_rect  = transition_elements_gr.rect(screen_width/2, 0).fill('#29172b').attr({opacity: 1.0, x: screen_width/2, y:0})
    var swipe_left_rect  = transition_elements_gr.rect(0, screen_height/2).fill('#781a18').attr({opacity: 1.0, x: screen_width, y: screen_height/2})
    var swipe_up_rect    = transition_elements_gr.rect(screen_width/2, 0).fill('#70153c').attr({opacity: 1.0, x: 0, y: screen_height})

    var all_directions_delay_info = {
        "swipe_right_rect": swipe_right_rect,
        "swipe_down_rect":  swipe_down_rect,
        "swipe_up_rect":    swipe_up_rect,
        "swipe_left_rect":  swipe_left_rect,
        "rect_width":       rect_width
    }

    var rect_gr = parent_gr.nested().size(100, 100).move(screen_width/2+rect_width/2*0.5, screen_height/2+rect_height*1.5)
    var rect    = rect_gr.rect(rect_width,rect_height).fill('#b52926').attr({opacity: 1.0})

    var rect_clicked = false;

    rect_gr.click(function() {

        if(rect_clicked == false){
            animate_all_directions_delay__activate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = true;
        } else {
            animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})

            rect_clicked = false;
        }
    })

    swipe_right_rect.click(function() {
        animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_down_rect.click(function() {
        animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_left_rect.click(function() {
        animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})
    })
    swipe_up_rect.click(function() {
        animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, function(){})
    })

     return all_directions_delay_info;
}

function animate_all_directions_delay__activate(all_directions_delay_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var swipe_right_rect = all_directions_delay_info["swipe_right_rect"];
    var swipe_down_rect  = all_directions_delay_info["swipe_down_rect"];
    var swipe_up_rect    = all_directions_delay_info["swipe_up_rect"];
    var swipe_left_rect  = all_directions_delay_info["swipe_left_rect"];

    swipe_right_rect.animate({
        duration: 200,
        // delay:    150
        ease: '>'
    }).attr({
        'x':     0,
        'width': screen_width/2
    })
    .after(function() {
        swipe_down_rect.animate({
            duration: 200,
            // delay: 0
            ease: '>'
        }).attr({
            'width':  screen_width/2,
            'height': screen_height/2+5,
            'x':      screen_width/2,
            'y':      0
        })
        .after(function() {
            swipe_left_rect.animate({
                duration: 200,
                // delay: 250
                ease: '>'
            }).attr({
                'x':      screen_width/2, 
                'width':  screen_width/2
            })
            .after(function() {
                swipe_up_rect.animate({
                    duration: 200,
                    // delay: 550
                    ease: '>'
                }).attr({
                    'width':  screen_width/2,
                    'height': screen_height/2,
                    'x':      0,
                    'y':      screen_height/2
                })
                .after(function() {
                    on_complete_fun();
                })
            })
        })  
    })
}
function animate_all_directions_delay__deactivate(all_directions_delay_info, screen_width, screen_height, bar_gr, on_complete_fun){
    var swipe_right_rect = all_directions_delay_info["swipe_right_rect"];
    var swipe_down_rect  = all_directions_delay_info["swipe_down_rect"];
    var swipe_up_rect    = all_directions_delay_info["swipe_up_rect"];
    var swipe_left_rect  = all_directions_delay_info["swipe_left_rect"];

    swipe_up_rect.animate({
        duration: 200,
        // important delay, gives time to a new page to load in the background, to hide the flashing on the screen while the page get created.
        // only sthe first animation (this one) should have the delay
        delay:    500, 
        ease: '<'
    }).attr({
        'width':  screen_width/2,
        'height': 0,
        'x':      0,
        'y':      screen_height
    }) 
    .after(function() {
        swipe_left_rect.animate({
            duration: 200,
            // delay:    0
            ease: '<'
        }).attr({
            'x':      screen_width, 
            'width':  0
        })
        .after(function() {
            swipe_down_rect.animate({
                duration: 200,
                // delay:    550
                ease: '<'
            }).attr({
                'width':  screen_width/2,
                'height': 0,
                'x':      screen_width/2,
                'y':      0
            })
            .after(function() {
                swipe_right_rect.animate({
                    duration: 200,
                    // delay:    650
                    ease: '<'
                }).attr({
                    'x':     0,
                    'width': 0
                })
                .after(function() {
                    on_complete_fun();
                })
            })  
        })  
        
    })
      
}

/*function close_all(swipe_to_right_info, swipe_to_left_info, swipe_down_and_up_info, swipe_half_width_info, swipe_half_height_info, scale_rect_info, screen_width, screen_height) {

    animate_swipe_to_right__deactivate(swipe_to_right_info);
    animate_swipe_to_left__deactivate(swipe_to_left_info, screen_width);
    animate_swipe_down_and_up__deactivate(swipe_down_and_up_info, screen_height);
    animate_swipe_half_width__deactivate(swipe_half_width_info, screen_height);
    animate_swipe_half_height__deactivate(swipe_half_height_info, screen_width)
    animate_scale_rect__deactivate(scale_rect_info, screen_width, screen_height)

}*/