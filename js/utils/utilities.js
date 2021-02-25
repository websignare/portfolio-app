


//------------------------------------------------------------------------------------
function deactivate_current_page(current_page_name) {


    switch (current_page_name) {
        case "home_page":
            hp__deactivate();
            break;
        case "about":
            about__deactivate();
            break;
        case "web_design":
            web_design__deactivate();
            break;
        case "web_development":
            web_development__deactivate();
            break;
        case "moodboard":
            moodboard__deactivate();
            break;
        //MOBILE
        /*case "home_page_mobile":
            hp__mobile__deactivate();
            break;
        case "about_mobile":
            about__mobile__deactivate();
            break;
        case "web_design_mobile":
            web_design__deactivate();
            break;
        case "web_development_mobile":
            web_development__mobile__deactivate();
            break;
        case "moodboard_mobile":
            moodboard__mobile__deactivate();
            break;*/
    }
}

//---------------------------GET PHYSICAL SCREEN WIDTH--------------------------------
function get_physical_screen_width(screen_width_in_px){
    $('body').append(`
        <div id="meter">
        </div>`);
    $("#meter").css({                    
        "width": '10cm'
    });
    var pixPer10CM = $("#meter").width();
    var CMPerPix   = 10 / pixPer10CM;
    var widthCM    = screen_width_in_px * CMPerPix;
    console.log(screen_width_in_px)

    $("#meter").remove()
    return widthCM;
} 

//---------------------------FIT IMAGE--------------------------------
function fit_image_inside_rect(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({width: rect_width, height: rect_height})
        .attr({"x": x})
        .attr({"y": y})
    var image_rect  = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
    var image_gr = image_gr.image(image_url, function (e) {
        console.log(e)
        var image_width  = e.target.naturalWidth
        var image_height = e.target.naturalHeight

        image_gr.attr({
            viewBox: '0 0 '+image_width+' '+image_height,
            x:       view_box_x,
            y:       view_box_y,
            preserveAspectRatio: 'xMidYMid slice'
        })
    })
    .attr({width: '100%', height: '100%'})
}

//---------------------------FILTERS---------------------------------
function apply_filter(p_parent_gr, p_filter_node_id, p_target_node_id) {

    let filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute("id", p_filter_node_id)
    p_parent_gr.node.appendChild(filter);


    let blur = document.createElementNS('http://www.w3.org/2000/svg','feGaussianBlur');
    blur.setAttribute('stdDeviation','15');
    filter.appendChild(blur);
    
    p_parent_gr.find("#"+p_target_node_id+"").attr({"filter": "url(#"+p_filter_node_id+")"})
}

//------------------------------------------------------------------------------------
function create_play_button(sketch_name, parent_gr, button_size, x, y, screen_width_in_px, screen_height){

   var play_button_gr = parent_gr.nested()

   var play_button = play_button_gr.polygon(button_size).fill('#fff').stroke({ width: 1 })
   play_button_gr.attr({
       "opacity": 0.7,
       "x":       x,
       "y":       y
    })
    console.log(button_size, 'dfffddfss')

    /*play_button.mouseover(function() {               //when hovered over button it changes color
        play_button.fill({ color: "#fff" })
    })*/
    /////////////////////////////////////--OPEN ON BUTTON CLICKED--////////////////////////////////////////////
    play_button_clicked = false;

    play_button_gr.click(function() {                                           //.click is a SVG function
    
        // play_button CLICKED
        if (play_button_clicked == false) {

            //-----------------------------

            play_button_clicked = true;

            open_sketch__p5(sketch_name, screen_width_in_px, screen_height)
            //open_sketch__svg(sketch_name, screen_width_in_px, screen_height) 
            $("body").css({                    
                "overflow-y": "hidden"
            }); 

        }
        // play_button DEACTIVATED
        else {
            
            play_button_clicked = false;
        }
    })

}

//------------------------------------------------------------------------------------
function open_sketch__p5(sketch_name, screen_width_in_px, screen_height) {
    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);

    var offset;

    if (screen_physical_width_cm < 20.5){
        offset = 40
        var canvasWidth  = screen_width_in_px-2*offset
        var canvasHeight = screen_height-2*offset-30
    }else{
        offset = 200
        var canvasWidth  = screen_width_in_px-2*offset
        var canvasHeight = screen_height-2*offset
    }


    var canvas_id    = "canvas__"+sketch_name

    $("body").append(`
        <div id="`+sketch_name+`" class="sketch_p5">
            <div class="sketch_background">
            </div>
            <div id="`+canvas_id+`" class="sketch_canvas">
            </div>
        </div>
    `);

    var sketch = $(".sketch_p5#"+sketch_name);

    $(sketch).find(".sketch_background").on("click", function() {        // on("click") is used in jQuery

        $(sketch).remove();
        $("body").css({                    
            "overflow-y": "visible"
        }); 

    })

    var current_scroll_y = window.scrollY;

    $(sketch).css({                    
        "position":         "absolute",
        "height":           screen_height,
        "width":            screen_width_in_px,
        "top":              current_scroll_y+"px",
        "left":             '0px'        
    }); 

    $(sketch).find(".sketch_background").css({                    
        "background-color": '#000',
        "position":         "absolute",
        "height":           "100%",
        "width":            "100%",
        "opacity":          "0.9",
        
    }); 

    $(sketch).find(".sketch_canvas").css({
        "position": "absolute",
        "top":       offset+"px",
        "left":      offset+"px"
    });


    switch (sketch_name) {
        case "flying_rect":
            flying_rects_init(canvas_id, canvasWidth, canvasHeight)
            break;

        case "rect_follows_cursor":
            rect_follows_cursor_init(canvas_id, canvasWidth, canvasHeight)
            break;
            
        case "three_rects_connected":
            three_rects_connected_init(canvas_id, canvasWidth, canvasHeight)
            break;

        case "rect_on_x":
            rect_moving_on_x(canvas_id, canvasWidth, canvasHeight)
            break;

        case "points_on_edges":
            vibrating_turquoise_rects_init(canvas_id, canvasWidth, canvasHeight)
            break;
    }
}



//------------------------------------------------------------------------------------
/*function open_sketch__svg(sketch_name, screen_width_in_px, screen_height) {



}*/
//------------------------------------------------------------------------------------
function run_page_transition(target_page_name, transition_type, current_page_name, bar_gr, on_complete_fun) {

    var current_scroll_y = window.scrollY;
    
    $("body").append(`
        <div id="transitions"></div>
    `);

    $("#transitions").css({
        "position": "absolute",
        "top":       current_scroll_y+"px",
        "z-index":   "10",
        "opacity":   "1.0",
        "width":     "600",
        "height":    "600"
    }); 
    
    var screen_width  = window.innerWidth;
    var screen_height = window.innerHeight;

    var transitions_container    = SVG().addTo("#transitions").size(screen_width, screen_height)
    var transitions_container_gr = transitions_container.nested()


    // ACTIVATE_TRANSITION_TYPE
    switch (transition_type) {

        ///////////////////////////////////////////////////////////////////////

        case "1_plane_swipe_to_left":
        
            var full_screen_rect = transitions_container_gr.rect(0, screen_height)
            .fill('#102427ff')
            .attr({
                x: screen_width,
                opacity: 1.0
            })
            
            var transition_info = {
                "full_screen_rect": full_screen_rect
            }

            var transition_activate_fn   = animate_swipe_to_left__activate;
            var transition_deactivate_fn = animate_swipe_to_left__deactivate;

            break;

        ///////////////////////////////////////////////////////////////////////

        case "2_plane_swipe_to_center":

            var full_screen_rect_up    = transitions_container_gr.rect(screen_width, 0).fill('#bf1f1fff').attr({opacity: 1.0})
            var full_screen_rect_down  = transitions_container_gr.rect(screen_width, 0).fill('#bf1f1fff').attr({opacity: 1.0, y: screen_height})
            var transition_info = {
                "full_screen_rect_up":   full_screen_rect_up,
                "full_screen_rect_down": full_screen_rect_down
            }
            
            var transition_activate_fn   = animate_swipe_down_and_up__activate;
            var transition_deactivate_fn = animate_swipe_down_and_up__deactivate;
            
            break;

        /////////////////////////////////////////////////////////////////////

        case "4_plane_in_circle":
            
            var swipe_right_rect = transitions_container_gr.rect(0, screen_height/2+5).fill('#7e2c3cff').attr({opacity: 1.0, x: 0})
            var swipe_down_rect  = transitions_container_gr.rect(screen_width/2, 0).fill('#7e2c3cff').attr({opacity: 1.0, x: screen_width/2, y:0})
            var swipe_left_rect  = transitions_container_gr.rect(0, screen_height/2).fill('#7e2c3cff').attr({opacity: 1.0, x: screen_width, y: screen_height/2})
            var swipe_up_rect    = transitions_container_gr.rect(screen_width/2, 0).fill('#7e2c3cff').attr({opacity: 1.0, x: 0, y: screen_height})
            var transition_info = {
                "swipe_right_rect": swipe_right_rect,
                "swipe_down_rect":  swipe_down_rect,
                "swipe_left_rect":  swipe_left_rect,
                "swipe_up_rect":    swipe_up_rect,
            }
            
            var transition_activate_fn   = animate_all_directions_delay__activate;
            var transition_deactivate_fn = animate_all_directions_delay__deactivate;

            break;

        /////////////////////////////////////////////////////////////////////

        case "1_plane_swipe_to_right":

            var full_screen_rect = transitions_container_gr.rect(0, screen_height).fill('#533065ff').attr({opacity: 1.0})
            var transition_info  = {
                "full_screen_rect": full_screen_rect
            }

            var transition_activate_fn   = animate_swipe_to_right__activate;
            var transition_deactivate_fn = animate_swipe_to_right__deactivate;

            break;
            
        /////////////////////////////////////////////////////////////////////

        case "1_plane_scale":

            var full_screen_rect_scale = transitions_container_gr.rect(0, 0).fill('#db7310ff').attr({opacity: 1.0, x: screen_width/2, y: screen_height/2})
            var transition_info = {
                "full_screen_rect_scale": full_screen_rect_scale,
            }

            var transition_activate_fn   = animate_scale_rect__activate;
            var transition_deactivate_fn = animate_scale_rect__deactivate;

            break;
    
        /////////////////////////////////////////////////////////////////////
        
        case "2_plane_swipe_up_and_down":

            var full_screen_rect_up    = transitions_container_gr.rect(screen_width/2, 0).fill('#ae3600ff').attr({opacity: 1.0})
            var full_screen_rect_down  = transitions_container_gr.rect(screen_width/2, 0).fill('#cb3f00ff').attr({opacity: 1.0, y: screen_height, x: screen_width/2})

            var transition_info = {
                "transitions_container_gr": transitions_container_gr,
                "full_screen_rect_up":      full_screen_rect_up,
                "full_screen_rect_down":    full_screen_rect_down
            }

            var transition_activate_fn   = animate_swipe_half_width__activate;
            var transition_deactivate_fn = animate_swipe_half_width__deactivate;

            break;

        /////////////////////////////////////////////////////////////////////


        default:
            console.log("add support for this target_page ["+target_page_name+"]!")
    }


    
            
    // animate_swipe_to_right__activate(transition_info,
    transition_activate_fn(transition_info,
        screen_width,
        screen_height,
        bar_gr,

        // on_complete_fun - called when the "activate" animations finishes running
        function() {

            // DEACTIVATE_CURRENT_PAGE 
            deactivate_current_page(current_page_name);

            // ACTIVATE_TARGET_PAGE
            switch (target_page_name) {
                case "home_page":
                    hp__activate(bar_gr);
                    break;
                case "about":
                    about__activate(bar_gr);
                    break;
                case "web_design":
                    web_design__activate(bar_gr);
                    break;
                case "web_development":
                    web_development__activate(bar_gr);
                    break;
                case "moodboard":
                    moodboard__activate(bar_gr);
                    break;
                //MOBILE
                /*case "home_page_mobile":
                    hp__mobile__deactivate();
                    break;
                case "about_mobile":
                    about__mobile__deactivate();
                    break;
                case "web_design_mobile":
                    web_design__deactivate();
                    break;
                case "web_development_mobile":
                    web_development__mobile__deactivate();
                    break;
                case "moodboard_mobile":
                    moodboard__mobile__deactivate();
                    break;*/
                default:
                    console.log("add support for this target_page ["+target_page_name+"]!")
            }
            
            window.scrollTo({
                top: 0,
                left: 0,
                //behavior: 'smooth'
              });

            // animate_swipe_to_right__deactivate(transition_info,
            transition_deactivate_fn(transition_info,
                screen_width,
                screen_height,
                bar_gr,

                function(){
                    console.log("page transition done...")

                    $("#transitions").remove();

                    on_complete_fun();
                });
        });
}

/*function get_transition_name_for_page(page_name) {

        const transitions_for_pages_map = {
            "home_page":       "swipe_to_left",
            "about":           "swipe_to_left",
            "web_design":      "swipe_to_left",
            "web_development": "swipe_to_left",
            "moodboard":       "swipe_to_left",
        }
        return transitions_for_pages_map[page_name]
}*/

function pulsating_circle(parent_gr, animation_time, screen_width, screen_height){
    var circle_button_gr = parent_gr.nested()

    var circle_button = circle_button_gr.ellipse(30).fill("#442b3eff").attr({cx: screen_width/2-15, cy: screen_height/2}).opacity(0.95)
    var stroke_button = circle_button_gr.ellipse(34).attr({cx: screen_width/2-15, cy: screen_height/2}).fill("none").stroke({ color: '#442b3eff', width: 4}).opacity(0.95)
    circle_button_gr.attr({
        id:     "circle_button__gr",
        width:  screen_width,
        height: screen_height,
        x: 0,
        y: 0
    })
    var circle_button__runner = circle_button.animate({
        duration: animation_time,
    }).attr({
        rx: "50",
        ry: "50",
        opacity: 0.0
    })
    circle_button__runner.loop()

    var stroke_button__runner = stroke_button.animate({
        duration: animation_time,
    }).attr({
        rx: "70",
        ry: "70",
        opacity: 0.0
    })
    stroke_button__runner.loop()
}

function scroll_to_top__btn(){
    var btn_gr = SVG().addTo("body").size(100,100)

    $("body").css({
        position: "fixed",
        bottom:   "0",
        "z-index":  "20"
    })

    var btn = btn_gr.rect(50,50).fill("#fff")
    var polyline = btn_gr.polyline([0,0, 25,50, 50,25]).attr({
        fill: "none"
    }).stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })



    var element_activated = false;

    btn_gr.click(function() {

        // ACTIVATE 
        if (element_activated == false) {
            
            window.scrollTo({
                top: 0,
                left: 0,
                //behavior: 'smooth'
              });

        }
    });
}