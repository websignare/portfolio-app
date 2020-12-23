//----------------------------------------------INTRO----------------------------------------------------------------
function intro(parent_gr, screen_width_in_px, screen_height){

    var layout_gr = parent_gr.nested()   
    //-----------------BACKGROUND------------------------
    var background_rect = layout_gr.rect(screen_width_in_px,screen_height)
        .fill('#D9D9D9')
        .attr({
            id:      "grey",
            opacity: 0.9,
        })

    var text_gr = layout_gr.nested().fill("#0000000")   
        .attr({
            id: "text_group",
            x:  0,
            y:  0
        })
//
    //-----------------PARENTHESES------------------------
    var parentheses_gr = text_gr.nested().fill("#0000000")   

    var parentheses = parentheses_gr.path("m -1206.7929,-432.87966 v 11.88147 l -12.3782,0.006 c -2.3393,9.9e-4 -4.2356,0.81525 -5.6889,2.44574 -1.4533,1.59499 -2.1799,3.68623 -2.1799,6.2737 v 28.81686 c 0,2.65834 -0.5494,4.80276 -1.6482,6.43325 -1.0987,1.63043 -2.4456,2.87098 -4.0406,3.72166 1.595,0.85068 2.9419,2.07355 4.0406,3.66861 1.0988,1.63049 1.6482,3.79263 1.6482,6.4864 v 28.81686 c 0,2.58747 0.7266,4.67871 2.1799,6.2737 1.4533,1.63049 3.3496,2.44574 5.6889,2.44574 l 12.3782,-4e-5 v 11.83932 l -17.3759,0.0171 c -3.4027,0.003 -6.2029,-0.58483 -8.4005,-1.75448 -2.1975,-1.13429 -3.9166,-2.65844 -5.1572,-4.57247 -1.2406,-1.8786 -2.109,-3.95212 -2.6052,-6.22055 -0.4963,-2.26851 -0.7445,-4.50154 -0.7445,-6.69911 v -29.40163 c 0,-2.33937 -0.6203,-4.00529 -1.8608,-4.99778 -1.2406,-0.99248 -2.9065,-1.48872 -4.9978,-1.48872 v -8.82574 c 2.0913,0 3.7572,-0.49624 4.9978,-1.48872 1.2405,-0.99249 1.8608,-2.65841 1.8608,-4.99778 v -29.40162 c 0,-2.19757 0.2482,-4.4306 0.7445,-6.69911 0.4963,-2.2685 1.3647,-4.34202 2.6052,-6.22055 1.2406,-1.91403 2.9597,-3.43818 5.1572,-4.57247 2.1976,-1.16965 4.9978,-1.75448 8.4005,-1.75448 z")

    parentheses.fill('#bdbdbdff').move(screen_width_in_px-parentheses.bbox().width-65,screen_height/2-parentheses.bbox().height/2)
    //parentheses.rotate(180)
    parentheses.scale(5)
    parentheses.attr({id: 'parentheses'})

    parentheses_gr.attr({
        id: "parentheses_gr"
    })
    /*text_gr.rect(parantheses.bbox().width, parantheses.bbox().height)
    .attr({
        x: parantheses.bbox().x, 
        y: parantheses.bbox().y
    })
    .stroke({
        color: "#fff",
        width: 5
    })
    .fill("none")*/
        //characters.rotate(10)

    //-----------------UI | UX------------------------
    var ui_and_ux = text_gr.text(function(text_element){
            text_element.tspan('UI | UX')
        })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#ed693aff',
            family:  'Quicksand',
            size:    46
        })

    ui_and_ux.attr({
        x: parentheses.bbox().x-ui_and_ux.bbox().width-100,
        y: (parentheses.bbox().y+parentheses.bbox().height/2)+ui_and_ux.bbox().height/2-15
    })

    /*text_gr.rect(ui_and_ux.bbox().width, ui_and_ux.bbox().height)
    .attr({
        x: ui_and_ux.bbox().x, 
        y: ui_and_ux.bbox().y
    })
    .stroke({
        color: "#fff",
        width: 5
    })
    .fill("none")*/

    //-----------------DOTS------------------------
    var dot_up = text_gr.text(function(text_element){
        text_element.tspan('.')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#bdbdbdff',
            family:  'Spartan',
            size:    170
        })    
    dot_up.attr({
        x: screen_width_in_px-dot_up.bbox().width-10,
        y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_up.bbox().y-dot_up.bbox().height/2-60
    })

    var dot_down = text_gr.text(function(text_element){
        text_element.tspan('.')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#bdbdbdff',
            family:  'Spartan',
            size:    170
        })    
    dot_down.attr({
        x: screen_width_in_px-dot_down.bbox().width-10,
        y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_down.bbox().y-dot_down.bbox().height/2
    })

    var intro_info = {
        "parentheses": parentheses,
        "ui_and_ux":   ui_and_ux,
        "dot_up":      dot_up,
        "dot_down":    dot_down
    }

    var initial_coords = {
        "parentheses": {x:screen_width_in_px,y:parentheses.y()},
        "ui_and_ux":   {x:-160+ui_and_ux.x(),y:ui_and_ux.y()},
        "dot_up":      {x:screen_width_in_px,y:dot_up.y()},
        "dot_down":    {x:screen_width_in_px,y:dot_down.y()}
    }

    var final_coords = {
        "parentheses": {x:parentheses.x(),y:parentheses.y()},
        "ui_and_ux":   {x:ui_and_ux.x(),y:ui_and_ux.y()},
        "dot_up":      {x:dot_up.x(),y:dot_up.y()},
        "dot_down":    {x:dot_down.x(),y:dot_down.y()}
    }

    animate_intro__activate(intro_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    animate_intro__deactivate(intro_info, initial_coords, final_coords, screen_width_in_px, screen_height)

}
//---------------------ANIMATE INTRO-------------------------------------------------
function animate_intro__activate(intro_info, initial_coords, final_coords, screen_width_in_px, screen_height) {

    var parentheses = intro_info["parentheses"];
    var ui_and_ux   = intro_info["ui_and_ux"];
    var dot_up      = intro_info["dot_up"];
    var dot_down    = intro_info["dot_down"];

    parentheses.attr({x: initial_coords["parentheses"]["x"] })
    parentheses.animate({
        duration: 500,
    }).attr({x: final_coords["parentheses"]["x"] })
    
    .after(function() {
        ui_and_ux.attr({x : initial_coords["ui_and_ux"]["x"] })
        dot_up.attr({x: initial_coords["dot_up"]["x"] })
        dot_down.attr({x: initial_coords["dot_down"]["x"] })
        
        ui_and_ux.animate({
            duration: 300,
        }).attr({x: final_coords["ui_and_ux"]["x"] })

        dot_up.animate({
            duration: 550,
        }).attr({x: final_coords["dot_up"]["x"] })
        dot_down.animate({
            duration: 400,
        }).attr({x: final_coords["dot_down"]["x"] })
    });
}

function animate_intro__deactivate(intro_info, initial_coords, final_coords, screen_width_in_px, screen_height){

    var parentheses = intro_info["parentheses"];
    var ui_and_ux   = intro_info["ui_and_ux"];
    var dot_up      = intro_info["dot_up"];
    var dot_down    = intro_info["dot_down"];

    parentheses.attr({x: initial_coords["parentheses"]["x"] })
    parentheses.animate({
        duration: 500,
    }).attr({x: final_coords["parentheses"]["x"] })

}