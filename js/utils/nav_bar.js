
function nav_bar__create(screen_width) {

    var bar_width_int  = 400
    var bar_height_int = 40

    var pages_map = {
        "home_page":  {},
        "about":      {},
        "web_design": {},
        "web_development": {},
        "moodboard":       {},
    }


    $("body").append('<div id="nav_bar"></div>');
    $("#nav_bar").css({
        "z-index": 20,
        position:  "fixed",
        bottom:    10,
        width:     screen_width
    })
    const container    = SVG().addTo("#nav_bar").size(screen_width, bar_height_int)
    const container_gr = container.nested()


    const bar_gr = container_gr.nested();
    const bar_x  = screen_width/2-bar_width_int/2;
    bar_gr.attr({x: bar_x})


    // BACKGROUND
    bar_gr.rect(bar_width_int, bar_height_int)
        .fill('#1c5e6d')
        .attr({opacity: 0.0})



    const button_width = 20;
    const side_padding = 20;
    const pages_num = Object.keys(pages_map).length // counts how many keys in the pages_map 



    const element_section_width = (bar_width_int - 2*side_padding)/pages_num;
    var i = 0;
    var previous_button = "not_assigned";

    //-------------------------------------------------------------------
    function button__init(page_name) {

        // "page_name" is the variable that holds the key name of the pages_map
        //             in each loop.
        const page_info_map = pages_map[page_name]

        var colors_map = get_colors();

        console.log(page_name,"DFFDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD")

        // IMPORTANT!! - its very important that this switch statement, with the transition_type and button_color variables, 
        //               is in its own function, when that function is executing multiple times in a loop
        //               (once for each page name). 
        //               Each function when it executes creates a unique "name space". in this namespace variables are unique, even
        //               if they have the same name as variables that are in some other namespace.
        //               if this switch statement was creating variables directly in a loop, outside this function,
        //               it would create variables with the same name multiple times. but because these variables are in the same namespace
        //               only 1 will ever be created, and that ones variables value would change multiple times (once for each execution of the loop).
        switch(page_name){
            case "home_page":
                var transition_type = "2_plane_swipe_to_center"
                var button_color    = colors_map["home_page"]["main_color"]
                break
            case "about":
                var transition_type = "1_plane_scale"
                var button_color    = colors_map["about"]["main_color"]
                break
            case "web_design":
                var transition_type = "1_plane_swipe_to_right"
                var button_color    = colors_map["web_design"]["main_color"]
                break
            case "web_development":
                var transition_type = "4_plane_in_circle"
                var button_color    = colors_map["web_development"]["main_color"]
                break
            case "moodboard":
                var transition_type = "2_plane_swipe_up_and_down"
                var button_color    = colors_map["moodboard"]["main_color"]
                break
        }


        console.log(i)
        console.log(element_section_width)

        const new_x = side_padding + element_section_width * i + (element_section_width-button_width)/2
        const button = bar_gr.rect(button_width, button_width)
            .fill(button_color)
            .attr({
                class: "nav_bar__button",
                opacity: 1.0, 
                x: new_x, 
                y: 8
            })

        button.click(function(){

            // previous_button == "not_assigned" if this is the first time any button has been clicked
            // "previous_button != button" - checks if the previous_button that was clicked and the current
            //                               button that is cliked are not the same button. if they are the
            //                               same button we dont want to do anything.
            // if they're different buttons then bring the previous_button to the same size as all the other
            // buttons when they're not clicked.
            if (previous_button != "not_assigned" && previous_button != button) {
                previous_button.attr({width:button_width, height: button_width})
            }
            
            if (previous_button != button) {
                button.attr({
                    width:button_width+10, 
                    height: button_width+10
                })
                previous_button = button;
            

                //-----------------------------
                // RUN_PAGE_TRANSITION
                var target_page_name = page_name;
                run_page_transition(target_page_name, transition_type, current_page, bar_gr,
                    // on_complete - called when the page_transition completes (X number of seconds in the future)
                    function() {

                        // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                        //               to point to the new page name.
                        current_page = target_page_name;

                    });

                //-----------------------------
            }
        })
    }

    //-------------------------------------------------------------------
    // for (var a in some_map) {} - this is a variation of "for" loop for use on maps, instead of arrays
    for (const page_name in pages_map) {
        
        button__init(page_name)
    
        i+=1
    }

    return bar_gr
}


function nav_bar__reset(bar_gr) {
    var buttons = bar_gr.find(".nav_bar__button")

    for (i=0; i < buttons.length; i++){
        console.log(buttons[i],"fffffffffffffffffffffffffffffff")

        const button_width = 20;

        var button = buttons[i];
        button.attr({
            width:button_width, 
            height: button_width

            })
    }

}