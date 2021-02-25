function create_info_column__mobile(parent_gr, screen_height, screen_width, x, y, column_info__mobile){

    var screen_width  = window.innerWidth;
    var screen_height = window.innerHeight;

    var component_gr    = parent_gr.nested().attr({"y": y}).attr({"x": x}).attr({id: "info_column_mobile"})
    var background_rect = component_gr.rect(screen_width,screen_height).fill("#000").opacity(0.0)

    var elements_data           = column_info__mobile["elements_data"];
    var element_previous_y      = 0;
    var element_previous_height = 0;

    for (i = 0; i < elements_data.length; i++) {

        var element_data = elements_data[i];

        //distance between elements
        var distance   = 15;
        // parseInt() converts string to integer (natural number)
        var element_y = 0;

        if ( i > 0){

            element_y = element_previous_y + element_previous_height + distance  
    
        }

        //attach create_element_mobile for info_column parent
        create_element_mobile(component_gr, column_info__mobile, element_data, element_y, screen_height, screen_width);

        element_previous_y      = element_y;
        element_previous_height = parseInt(element_data.height)

    }

}


function apply_filter(p_shadow_parent_gr, shadow_filter_id, shadow_rect_id) {

    let filter = document.createElementNS('http://www.w3.org/2000/svg','filter');
    filter.setAttribute("id", shadow_filter_id)
    p_shadow_parent_gr.node.appendChild(filter);


    let blur = document.createElementNS('http://www.w3.org/2000/svg','feGaussianBlur');
    blur.setAttribute('stdDeviation','15');
    filter.appendChild(blur);



    p_shadow_parent_gr.find("#"+shadow_rect_id).attr({"filter": "url(#"+shadow_filter_id+")"})

}


function create_element_mobile(parent_gr, column_info__mobile, element_data, element_y, screen_height, screen_width){
    var element_name         = element_data["name"];
    var element_date         = element_data["date"];
    var element_height       = parseInt(element_data["height"]);
    var element_width        = parseInt(element_data["width"]);
    var element_color        = element_data["color"];
    var element_number_color = element_data["element_number_color"];
    var element_number       = element_data["element_number"];

    //SHADOW_rect
    var shadow_gr         = parent_gr.nested().move(20, element_y).size(screen_width, screen_height/0.8).attr({id: "column_shadow_mobile"})
    var background_shadow = shadow_gr.rect(element_width+50,element_height+50).fill("gray").move(5,5).attr({opacity: "0.5",id: "column_shadow_rect_mobile"})

    apply_filter(shadow_gr, "column_shadow_mobile", "column_shadow_rect_mobile")

    //BACKGROUND_element
    var element_gr = parent_gr.nested().move(0, element_y).size(screen_width, screen_height)
    var background = element_gr.rect(element_width,element_height).fill('none')
    
    //NAME_element
    /*var element_name_gr   = parent_gr.nested().move(-60, element_y+50)
        element_name_gr.attr({opacity: 0.0})
    var element_name_rect = element_name_gr.rect(150,50).fill("#651b40ff")
    var element_name_text = element_name_gr.text(element_name)
        .font({
            opacity: 1.0,
            weight:  '700',
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })
   
    //to get X POSITION of elements text inside rect, substract rect width out of element text length 
    var text_x = element_name_rect.attr("width") - element_name_text.length();
    element_name_text.move(13+text_x, 7)
    //set rect width to be the same as text width
    element_name_rect.attr({"width": element_name_text.length()+20})
    element_name_rect.attr({"x": 150-element_name_text.length()})*/

    //NUMBER_element_rect
    var element_number_gr   = parent_gr.nested().move(15, element_y)
        element_number_gr.attr({opacity:  0.0})
    var element_number_rect = element_number_gr.rect(50,50).fill("none")
    var element_number_text = element_number_gr.text(element_number).attr({opacity: 0.0})
        .move(element_number_rect.bbox().width/2-10,-8)
        .font({
            opacity: 1.0,
            fill:    '#B12F2B',
            family:  'Quicksand',
            weight:  '500',
            size:    40
        });

    //CANCEL_rect
    var cancel_gr = parent_gr.nested().move(element_width-30, element_y)
    .attr({
        opacity: 0.0
    })
    var element_cancel_rect = cancel_gr.rect(50,50).fill("#fff").attr({opacity: 0.1})

    var line_top            = cancel_gr.line(10, 10, 40, 40).stroke({color: '#B12F2B', width: 4, linecap: 'round', })
    var line_bottom         = cancel_gr.line(40, 10, 10, 40).stroke({color: '#B12F2B', width: 4, linecap: 'round', })
  
    //OVERLAY_element
    var overlay_gr = parent_gr.nested().move(20, element_y).size(screen_width, screen_height/1.1).attr({id: "overlay"})
    var overlay    = overlay_gr.rect(element_width, element_height).fill("#371124ff").opacity(0.7).attr({id: "overlay_rect"})
    
    pulsating_circle(overlay_gr, 2000, screen_width, screen_height)


    var element_activated = false;

    overlay_gr.click(function() {

        // ACTIVATE 
        if (element_activated == false) {
            
            overlay_gr.animate({
                duration: 200
            })
            .after(function() {

                overlay_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    //wait: 20
                })
                .attr({opacity: 0.0})
                .attr({ width: '0' }); 

                /*element_name_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    wait: 20
                })
                .attr({opacity: 1.0})*/
                
                    element_number_gr.animate({
                        duration: 100,
                        //delay: 500,
                        when: 'now',
                        swing: true,
                        times: 1,
                        wait: 40
                    })
                    .attr({opacity: 1.0})
                    cancel_gr.attr({opacity: 1.0})

            })
            element_data["activate_fn"](activate_fn_gr);

            element_activated = true;


        }
    });
    
    // DEACTIVATE
    cancel_gr.click(function() {

        if (element_activated == true){

            overlay_gr.animate({
                duration: 200
            })
            .after(function() {

                overlay_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    wait: 20
                })
                .attr({opacity: 0.9})
                .attr({ width: element_width })
                
                    /*element_name_gr.animate({
                        duration: 100,
                        //delay: 500,
                        when: 'now',
                        swing: true,
                        times: 1,
                        wait: 20
                    })
                    .attr({opacity: 0.0})*/

                        element_number_gr.animate({
                            duration: 100,
                            //delay: 500,
                            when: 'now',
                            swing: true,
                            times: 1,
                            wait: 40
                        })
                        .attr({opacity: 0.0})
                        cancel_gr.attr({opacity: 0.0})

            })
            element_data["deactivate_fn"](deactivate_fn_gr);
            element_activated = false;

        }
    })


    var draw_fn_gr = element_gr.nested();
    //pull draw_fn() from array of objects
    element_data["draw_fn"](draw_fn_gr);

    var activate_fn_gr = element_gr.nested();
    //pull activate_fn() from array of objects
    //element_data["activate_fn"](activate_fn_gr);

    var deactivate_fn_gr = element_gr.nested();
    //pull deactivate_fn() from array of objects
    //element_data["deactivate_fn"](deactivate_fn_gr);

    /*setInterval(function(){
        pulsating_circle(overlay_gr, element_height)
    }, 3000)*/
}