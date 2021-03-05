$(document).ready(function(){
    web_design_tablet__main();
})

function web_design_tablet__main(screen_width_in_px) {

    var screen_width_in_px = window.innerWidth;

    var bar_gr = nav_bar__create(screen_width_in_px);

    web_design__tablet__activate(bar_gr);
    
    $(window).resize(function() {
        
        web_design__tablet__deactivate();

        web_design__tablet__activate(bar_gr);
    });
}

// ACTIVATE
function web_design__tablet__activate(bar_gr) {
    var screen_width_in_px  = window.innerWidth;
    var screen_height = window.innerHeight;

    document.title = "web_design_tablet"
    window.history.pushState({page: "web_design_tablet"},"", "#web_design_tablet");
    current_page = "web_design_tablet"

    $("body").append(`
        <div id="web_design_tablet">
            <div id="wrapper">
            </div>
            <div id="headline__info">
            </div>
            <div id="artist_portfolio__info">
            </div>
            <div id="suprematism__info">
            </div>
            <div id="deep_blue__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    var design__tablet_info = web_design_create__tablet__responsive(bar_gr);
    design_animate__tablet_activate(design__tablet_info, screen_width_in_px, screen_height)

}

// DEACTIVATE
function web_design__tablet__deactivate() {

    $("#web_design_tablet").remove();
    $("#contact_wrapper").remove();
    remove_triggers("artist_canvas__tablet_trigger") 
    remove_triggers("suprematism_canvas__tablet_trigger")
    remove_triggers("deep_blue_canvas__tablet_trigger")

}
    
function web_design_create__tablet__responsive(bar_gr) {

    var screen_width_in_px  = window.innerWidth;
    var screen_height = window.innerHeight;

    $("#web_design_tablet #wrapper").css({                    
        "background-color": '#fafafaff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design_tablet #headline__info").css({                    
        "background-color": '#2f4858',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_design_tablet #artist_portfolio__info").css({                    
        "background-color": '#2f4858',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var current_scroll_y = window.scrollY;

    var bounding_rect        = $("#web_design_tablet #artist_portfolio__info").get(0).getBoundingClientRect()
    var artist__div__tablet_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#web_design_tablet #suprematism__info").css({                    
        "background-color": '#2f4858',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect         = $("#web_design_tablet #suprematism__info").get(0).getBoundingClientRect()
    var suprematism__div_tablet_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#web_design_tablet #deep_blue__info").css({                    
        "background-color": '#2f4858',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect        = $("#web_design_tablet #deep_blue__info").get(0).getBoundingClientRect()
    var deep_blue__div_tablet_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left); 

    $("#web_design_tablet #video__info").css({                    
        "background-color": '#6d5f87',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var container                      = SVG().addTo("#web_design_tablet #wrapper").size(screen_width_in_px, screen_height)
    var container_gr                   = container.nested()   

    var headline_container             = SVG().addTo("#web_design_tablet #headline__info").size(screen_width_in_px, screen_height/2)
    var headline__container_gr         = headline_container.nested()

    var artist_portfolio__container    = SVG().addTo("#web_design_tablet #artist_portfolio__info").size(screen_width_in_px, screen_height)
    var artist_portfolio__container_gr = artist_portfolio__container.nested()   
    artist_portfolio__container_gr.attr({opacity: 0.5, y: -20})   

    var suprematism__container         = SVG().addTo("#web_design_tablet #suprematism__info").size(screen_width_in_px, screen_height)
    var suprematism__container_gr      = suprematism__container.nested()   
    suprematism__container_gr.attr({opacity: 0.5, y: -20})   

    var deep_blue__container           = SVG().addTo("#web_design_tablet #deep_blue__info").size(screen_width_in_px, screen_height)
    var deep_blue__container_gr        = deep_blue__container.nested()  
    deep_blue__container_gr.attr({opacity: 0.5, y: -20})   

    var video__container               = SVG().addTo("#web_design_tablet #video__info").size(screen_width_in_px, screen_height)
    var video__container_gr            = video__container.nested()  

    //------------------DEVICES--------------------------//
    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //intro(container_gr, screen_width_in_px, screen_height)
        //nevena(container_gr, screen_width_in_px, screen_height)
        //web_design(container_gr, screen_width_in_px, screen_height)
        //web_development(container_gr, screen_width_in_px, screen_height)
        //animation(container_gr, screen_width_in_px, screen_height)
        //contact(container_gr, screen_width_in_px, screen_height)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        var web_design__layout_gr = web_design__intro_section__tablet(container_gr, bar_gr, screen_width_in_px, screen_height)
        var web_design__background_gr = web_design__layout_gr.find("#web_design__background_gr")
        var design__top_tablet_rects = web_design__images__tablet(web_design__background_gr, screen_width_in_px, screen_height)

        var design_text_tablet_info = web_design_text__tablet(container_gr, screen_width_in_px, screen_height)

        web_design__headline_tablet_info(headline__container_gr, screen_width_in_px, screen_height)
        artist_portfolio__tablet(artist_portfolio__container_gr, screen_width_in_px, screen_height)
        suprematism__tablet(suprematism__container_gr, screen_width_in_px, screen_height)
        deep_blue__tablet(deep_blue__container_gr, screen_width_in_px, screen_height)
        video__section__tablet(video__container_gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)
    // INTRO__SCROLL_TRIGGER
    var trigger_y_position__artist_canvas = artist__div__tablet_bottom_y-200;
    sc_trigger__create(trigger_y_position__artist_canvas,
        "artist_canvas__tablet_trigger",
        screen_height,
        // activate_fn
        function() {
            artist_portfolio__container_gr.animate({
                    duration: 400,
                    // delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 1.0, y: 0})
        },
        // deactivate
        function() {
            artist_portfolio__container_gr.animate({
                duration: 200,
                delay:    400, 
                ease: '<' 
            })
            .attr({opacity: 0.1, y: -20})
        });

    // INTRO__SCROLL_TRIGGER
    var trigger_y_position__suprematism_canvas = suprematism__div_tablet_bottom_y-200;
    sc_trigger__create(trigger_y_position__suprematism_canvas,
        "suprematism_canvas__tablet_trigger",
        screen_height,
        // activate_fn
        function() {
            suprematism__container_gr.animate({
                    duration: 400,
                    // delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 1.0, y: 0})
        },
        // deactivate
        function() {
            suprematism__container_gr.animate({
                duration: 200,
                delay:    400, 
                ease: '<' 
            })
            .attr({opacity: 0.1, y: -20})
        });

        // DEEP_BLUE__SCROLL_TRIGGER
    var trigger_y_position__deep_blue_canvas = deep_blue__div_tablet_bottom_y-200;
    sc_trigger__create(trigger_y_position__deep_blue_canvas,
        "deep_blue_canvas__tablet_trigger",
        screen_height,
        // activate_fn
        function() {
            deep_blue__container_gr.animate({
                    duration: 400,
                    // delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 1.0, y: 0})
        },
        // deactivate
        function() {
            deep_blue__container_gr.animate({
                duration: 200,
                delay:    400, 
                ease: '<' 
            })
            .attr({opacity: 0.1, y: -20})
        });

        // RETURNED INFO
        var design__tablet_info = {
            "design__top_tablet_rects": design__top_tablet_rects,
            "design_text_tablet_info":  design_text_tablet_info
        }

        return design__tablet_info
    }

    else {

    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function web_design__intro_section__tablet(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var web_design__layout_gr = parent_gr.nested().attr({id: 'web_design__layout_gr'})

    var web_design__background_gr = web_design__layout_gr.nested()
        .attr({
            id: "web_design__background_gr",
        })

    var background = web_design__background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ffd097c3')
        .attr({
            id:      "background",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })


    //CALL MENU FUNCTION

    var menu_rect_gr = parent_gr.nested()
    .attr({
        x: 100,
        y: 100
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#6d5f87'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#6d5f87', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#6d5f87', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#6d5f87', linecap: 'round' })


    var menu_rect_clicked = false;

    menu_rect.click(function() {
        
        // ACTIVATE BOX_1
        if (menu_rect_clicked == false) {
            
            // ANIMATE
            console.log(create_menu)
            create_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)
            images__desktop
            images__desktop
            menu_rect_clicked = false;
        }
    })
    return web_design__layout_gr;
}

//----------------------------------------------TEXT----------------------------------------------------------------
function web_design_text__tablet(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    //---------------------------SYMBOL----------------------------------
    var line_symbol_gr = text_gr.nested()  

    var line_symbol = line_symbol_gr.path("m 718.26735,-1505.9353 q -3.66386,0 -7.54322,-3.0173 -3.87939,-3.0173 -3.87939,-7.7587 0,-2.5863 1.29313,-5.1725 l 87.5014,-179.0977 q 1.50865,-3.0173 4.0949,-4.7415 2.58625,-1.7242 5.38802,-1.7242 3.66385,0 7.32771,3.0173 3.87936,2.8018 3.87936,7.7588 0,2.5862 -1.29312,5.1725 l -87.28588,179.0977 q -1.50865,3.0173 -4.09489,4.7414 -2.37073,1.7242 -5.38802,1.7242 z")
    line_symbol_gr.css( "position", "fixed")

    line_symbol.fill('#d9d9d9ff')
    line_symbol.move(line_symbol.bbox().width-200,screen_height/2+10)
    //line_symbol.rotate(180)
    line_symbol.scale(3.4)
    line_symbol.attr({id: 'line_symbol'})

    line_symbol_gr.attr({
        id: "line_symbol_gr"
    })

    var star_symbol_gr = text_gr.nested()  

    var star_symbol = star_symbol_gr.path("m 863.95336,-1599.7951 q -3.15714,0 -5.18672,-2.2551 -1.80407,-2.255 -1.57856,-5.6377 l 2.02958,-17.8152 q 0.2255,-0.6766 -0.2255,-0.9021 -0.45102,-0.2255 -1.12756,0.2255 l -14.6581,10.599 q -2.70611,2.0296 -5.63773,1.5786 -2.93162,-0.6766 -4.73569,-3.6082 -2.02959,-3.6081 -0.90205,-6.3143 1.35306,-2.7061 4.28468,-3.8336 l 16.46218,-7.4418 q 0.67654,-0.2255 0.67654,-0.6766 0,-0.451 -0.67654,-0.6765 l -16.46218,-7.4418 q -3.15712,-1.353 -4.05916,-4.2847 -0.90204,-2.9316 0.67653,-5.8632 1.80407,-2.9316 4.73569,-3.3826 2.93162,-0.6766 5.63773,1.1275 l 14.6581,10.8244 q 0.67654,0.4511 1.12756,0.2256 0.451,-0.2256 0.2255,-0.9021 l -2.02958,-17.8152 q -0.22551,-3.3826 1.80408,-5.6377 2.02958,-2.2551 5.41222,-2.2551 3.15712,0 5.18671,2.2551 2.02959,2.2551 1.57857,5.6377 l -2.02958,17.8152 q -0.22552,0.6765 0.22549,0.9021 0.45103,0.2255 1.12755,-0.2256 l 14.65811,-10.5989 q 2.70612,-2.0296 5.63774,-1.353 3.15713,0.451 4.73568,3.3826 2.0296,3.6082 0.67654,6.3143 -1.12755,2.7061 -4.05917,3.8336 l -16.46218,7.4418 q -0.67653,0.2255 -0.67653,0.6765 0,0.4511 0.67653,0.6766 l 16.46218,7.4418 q 3.15713,1.353 4.05917,4.2847 1.12754,2.9316 -0.67654,5.8632 -1.57855,2.9316 -4.73568,3.6082 -2.93162,0.451 -5.63774,-1.3531 l -14.65811,-10.8245 q -0.67652,-0.451 -1.12755,-0.2255 -0.45101,0.2255 -0.22549,0.9021 l 2.02958,17.8152 q 0.45102,3.3827 -1.80409,5.6377 -2.02957,2.2551 -5.41221,2.2551 z")
    star_symbol_gr.css( "position", "fixed")

    star_symbol.fill('#d9d9d9ff')
    star_symbol.move(screen_width_in_px/3-star_symbol.bbox().width,screen_height/2-50)
    //star_symbol.rotate(180)
    star_symbol.scale(4)
    star_symbol.attr({id: 'star_symbol'})

    star_symbol_gr.attr({
        id: "star_symbol_gr"
    })

    // SYMBOL ROTATION
    function rotatePositive() {
        star_symbol.animate({duration: 9000}).ease("<>").rotate(180)
        line_symbol.animate({duration: 4000}).ease("<").rotate(10).after(rotateNegative)
      }
      
    function rotateNegative() {
        line_symbol.animate({duration: 4000}).ease(">").rotate(-10).after(rotatePositive)
    }
      
    rotatePositive()

    //---------------------WEB-DESIGN-TITLE--------------------
    var wdesign_path__gr = text_gr.nested()
    var wdesign_path = wdesign_path__gr.path("m 1133.2181,-1561.5234 q 2.5619,0 3.8775,1.0732 1.3501,1.0732 1.8348,2.8735 0.5193,1.7656 0.5193,3.9466 v 8.8627 q 0,0.9001 -0.5885,1.5232 -0.5886,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5886,-0.6231 -0.5886,-1.5232 v -8.8627 q 0,-1.1424 -0.3115,-2.0426 -0.277,-0.9347 -1.0386,-1.4886 -0.7617,-0.5539 -2.1811,-0.5539 -1.3848,0 -2.3541,0.5539 -0.9348,0.5539 -1.4541,1.4886 -0.4846,0.9002 -0.4846,2.0426 v 8.8627 q 0,0.9001 -0.5886,1.5232 -0.5885,0.5886 -1.4886,0.5886 -0.9001,0 -1.4887,-0.5886 -0.5885,-0.6231 -0.5885,-1.5232 v -14.298 q 0,-0.9001 0.5885,-1.4886 0.5886,-0.6232 1.4887,-0.6232 0.9001,0 1.4886,0.6232 0.5886,0.5885 0.5886,1.4886 v 1.4887 l -0.5193,-0.1039 q 0.3116,-0.5885 0.9001,-1.2463 0.5885,-0.6924 1.3848,-1.2809 0.7962,-0.5886 1.8002,-0.9348 1.004,-0.3808 2.181,-0.3808 z m -24.2965,0 q 1.454,0 2.6657,0.4501 1.2117,0.45 2.0772,1.1424 0.9001,0.6924 1.3848,1.4194 0.5193,0.6924 0.5193,1.1771 l -0.9001,0.4501 v -2.5273 q 0,-0.9001 0.5885,-1.4886 0.5885,-0.6232 1.4886,-0.6232 0.9002,0 1.4887,0.5885 0.5885,0.5886 0.5885,1.5233 v 15.4058 q 0,3.0119 -1.3155,4.8121 -1.281,1.8349 -3.3928,2.6311 -2.1118,0.8309 -4.5351,0.8309 -0.6924,0 -1.8003,-0.1731 -1.1078,-0.1731 -2.1118,-0.4154 -1.0039,-0.2424 -1.5232,-0.4501 -1.0386,-0.45 -1.4541,-1.1424 -0.3808,-0.6578 -0.1384,-1.4194 0.3115,-1.004 1.0039,-1.3848 0.6924,-0.3462 1.4541,-0.069 0.3462,0.1039 1.1424,0.4155 0.7963,0.3115 1.731,0.5539 0.9693,0.2769 1.6964,0.2769 2.5964,0 3.8428,-1.0386 1.2463,-1.0385 1.2463,-2.8734 v -3.0119 l 0.4154,0.3116 q 0,0.45 -0.4847,1.1078 -0.45,0.6232 -1.2809,1.2463 -0.7963,0.6232 -1.9041,1.0732 -1.1078,0.4155 -2.3541,0.4155 -2.458,0 -4.4314,-1.2117 -1.9733,-1.2463 -3.1157,-3.3928 -1.1425,-2.181 -1.1425,-4.9852 0,-2.8388 1.1425,-4.9852 1.1424,-2.1811 3.0811,-3.3928 1.9387,-1.2463 4.3275,-1.2463 z m 0.6578,3.8082 q -1.5579,0 -2.735,0.7616 -1.1771,0.7616 -1.8348,2.0772 -0.6578,1.3155 -0.6578,2.9773 0,1.6271 0.6578,2.9427 0.6577,1.3155 1.8348,2.0772 1.1771,0.7616 2.735,0.7616 1.5925,0 2.7695,-0.7616 1.1771,-0.7617 1.8349,-2.0772 0.6578,-1.3156 0.6578,-2.9427 0,-1.6618 -0.6578,-2.9773 -0.6578,-1.3156 -1.8349,-2.0772 -1.177,-0.7616 -2.7695,-0.7616 z m -12.4399,12.9478 q 0,0.9001 -0.5885,1.5232 -0.5886,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5886,-0.6231 -0.5886,-1.5232 v -14.298 q 0,-0.9001 0.5886,-1.4886 0.5885,-0.6232 1.4886,-0.6232 0.9001,0 1.4887,0.6232 0.5885,0.5885 0.5885,1.4886 z m -2.1118,-18.6601 q -1.1771,0 -1.6617,-0.3808 -0.4847,-0.3808 -0.4847,-1.3502 v -0.6577 q 0,-1.004 0.5193,-1.3502 0.5539,-0.3808 1.6617,-0.3808 1.2117,0 1.6964,0.3808 0.4847,0.3808 0.4847,1.3502 v 0.6577 q 0,1.004 -0.5193,1.3848 -0.5193,0.3462 -1.6964,0.3462 z m -19.5747,17.8984 q -0.3462,-0.4847 -0.3116,-1.2463 0.035,-0.7616 0.9001,-1.3155 0.5539,-0.3462 1.1771,-0.277 0.6231,0.035 1.2117,0.6232 1.0039,1.0039 2.1118,1.5578 1.1078,0.554 2.7695,0.554 0.5193,-0.035 1.1425,-0.1385 0.6231,-0.1385 1.0732,-0.5539 0.4847,-0.4501 0.4847,-1.3502 0,-0.7616 -0.5193,-1.2117 -0.5193,-0.45 -1.3848,-0.7616 -0.8309,-0.3116 -1.8695,-0.5886 -1.0732,-0.3115 -2.2156,-0.6924 -1.1079,-0.3808 -2.0426,-0.9693 -0.9347,-0.6232 -1.5233,-1.6271 -0.5885,-1.004 -0.5885,-2.5273 0,-1.731 0.9693,-2.9427 0.9694,-1.2116 2.4927,-1.8694 1.5579,-0.6578 3.2542,-0.6578 1.0732,0 2.2503,0.277 1.1771,0.2423 2.2503,0.8308 1.0732,0.554 1.8002,1.4887 0.3808,0.5193 0.4501,1.2463 0.069,0.727 -0.6578,1.3155 -0.5193,0.4155 -1.2117,0.3809 -0.6924,-0.069 -1.1424,-0.4847 -0.5886,-0.7616 -1.5926,-1.2117 -0.9693,-0.4501 -2.2502,-0.4501 -0.5193,0 -1.1425,0.1385 -0.5885,0.1039 -1.0386,0.5193 -0.45,0.3808 -0.45,1.2463 0,0.7963 0.5193,1.281 0.5193,0.45 1.3847,0.7616 0.9002,0.2769 1.9041,0.5539 1.0386,0.277 2.1118,0.6578 1.0732,0.3808 1.9734,1.004 0.9001,0.6231 1.454,1.6271 0.5539,0.9693 0.5539,2.4926 0,1.7656 -1.0386,3.0119 -1.0386,1.2463 -2.5965,1.9041 -1.5579,0.6232 -3.185,0.6232 -2.0425,0 -4.0851,-0.6924 -2.0426,-0.7271 -3.3927,-2.5273 z m -10.4579,3.2197 q -2.9427,0 -5.1237,-1.2117 -2.1464,-1.2463 -3.3235,-3.3581 -1.1425,-2.1119 -1.1425,-4.7776 0,-3.1157 1.2463,-5.2968 1.281,-2.2157 3.3235,-3.3927 2.0426,-1.1771 4.3275,-1.1771 1.7656,0 3.3235,0.727 1.5925,0.727 2.8042,2.008 1.2117,1.2463 1.9041,2.908 0.727,1.6618 0.727,3.5312 -0.035,0.8309 -0.6578,1.3502 -0.6231,0.5193 -1.454,0.5193 h -13.2247 l -1.0386,-3.462 h 12.7054 l -0.7616,0.6924 v -0.9347 q -0.069,-1.004 -0.727,-1.8002 -0.6232,-0.7963 -1.5926,-1.2463 -0.9347,-0.4847 -2.0079,-0.4847 -1.0386,0 -1.9387,0.2769 -0.9001,0.277 -1.5579,0.9348 -0.6578,0.6577 -1.0386,1.7656 -0.3808,1.1078 -0.3808,2.8042 0,1.8694 0.7616,3.185 0.7963,1.2809 2.008,1.9733 1.2463,0.6578 2.6311,0.6578 1.2809,0 2.0425,-0.2077 0.7617,-0.2077 1.2117,-0.4847 0.4847,-0.3116 0.8655,-0.5193 0.6232,-0.3116 1.1771,-0.3116 0.7616,0 1.2463,0.5193 0.5193,0.5193 0.5193,1.2117 0,0.9347 -0.9694,1.6964 -0.9001,0.7616 -2.5272,1.3501 -1.6271,0.554 -3.3581,0.554 z m -15.1305,-25.9648 q 0.9002,0 1.4887,0.5885 0.5885,0.5885 0.5885,1.5233 v 21.395 q 0,0.9001 -0.5885,1.5232 -0.5885,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5885,-0.6231 -0.5885,-1.5232 v -1.6964 l 0.7616,0.3116 q 0,0.45 -0.4847,1.1078 -0.4847,0.6232 -1.3155,1.2463 -0.8309,0.6232 -1.9734,1.0732 -1.1078,0.4155 -2.4233,0.4155 -2.3888,0 -4.3275,-1.2117 -1.9387,-1.2463 -3.0812,-3.3928 -1.1078,-2.181 -1.1078,-4.9852 0,-2.8388 1.1078,-4.9852 1.1425,-2.1811 3.0466,-3.3928 1.9041,-1.2463 4.2236,-1.2463 1.4886,0 2.7349,0.4501 1.2464,0.45 2.1465,1.1424 0.9347,0.6924 1.4194,1.4194 0.5193,0.6924 0.5193,1.1771 l -1.2463,0.4501 v -9.2781 q 0,-0.9002 0.5885,-1.4887 0.5885,-0.6231 1.4886,-0.6231 z m -6.9931,22.1566 q 1.5232,0 2.6657,-0.7616 1.1424,-0.7617 1.7656,-2.0772 0.6578,-1.3156 0.6578,-2.9427 0,-1.6618 -0.6578,-2.9773 -0.6232,-1.3156 -1.7656,-2.0772 -1.1425,-0.7616 -2.6657,-0.7616 -1.4887,0 -2.6311,0.7616 -1.1425,0.7616 -1.8003,2.0772 -0.6231,1.3155 -0.6231,2.9773 0,1.6271 0.6231,2.9427 0.6578,1.3155 1.8003,2.0772 1.1424,0.7616 2.6311,0.7616 z m -20.0777,-18.6574 q 0,-0.961 0.4942,-1.716 0.4805,-0.7687 1.3316,-1.208 0.8511,-0.453 1.9768,-0.453 1.1257,0 1.9905,0.453 0.8511,0.4393 1.3453,1.1943 0.4805,0.7413 0.4805,1.6748 0,0.5491 -0.1785,1.0295 -0.1785,0.4805 -0.453,0.8511 -0.2746,0.357 -0.5491,0.5629 -0.2883,0.1922 -0.4805,0.1922 l -0.1784,-0.4256 h 1.0021 q 0.3569,0 0.604,0.2334 0.2334,0.2334 0.2334,0.5903 0,0.3569 -0.2334,0.5903 -0.2334,0.2333 -0.604,0.2333 h -8.621 q -0.3569,0 -0.5902,-0.2333 -0.2471,-0.2334 -0.2471,-0.5903 0,-0.3569 0.2471,-0.5903 0.2333,-0.2334 0.5902,-0.2334 h 3.4869 l -0.1236,0.2334 q -0.1785,0 -0.4255,-0.1922 -0.2609,-0.1922 -0.508,-0.5217 -0.2608,-0.3294 -0.4255,-0.755 -0.1648,-0.4393 -0.1648,-0.9197 z m 1.5101,0.2059 q 0,0.604 0.302,1.057 0.302,0.453 0.8236,0.7139 0.508,0.2471 1.1669,0.2471 0.6452,0 1.1806,-0.2471 0.5216,-0.2609 0.8236,-0.7139 0.302,-0.453 0.302,-1.057 0,-0.604 -0.302,-1.0433 -0.302,-0.453 -0.8236,-0.7001 -0.5354,-0.2608 -1.1806,-0.2608 -0.6589,0 -1.1669,0.2608 -0.5216,0.2471 -0.8236,0.7001 -0.302,0.4393 -0.302,1.0433 z m 6.1088,8.169 q 0,1.1668 -0.4805,2.0317 -0.4942,0.8511 -1.3316,1.3178 -0.8374,0.453 -1.8944,0.453 -1.2355,0 -2.1003,-0.4942 -0.8786,-0.5079 -1.3453,-1.3178 -0.4668,-0.8099 -0.4668,-1.716 0,-0.7001 0.2883,-1.3178 0.2883,-0.6315 0.7962,-1.1119 0.4942,-0.4805 1.1531,-0.7551 0.659,-0.2882 1.4003,-0.2882 0.3294,0.014 0.5353,0.2608 0.206,0.2471 0.206,0.5765 v 5.244 l -1.3728,0.4118 v -5.038 l 0.2745,0.302 h -0.3706 q -0.3981,0.027 -0.7138,0.2883 -0.3158,0.2471 -0.4942,0.6314 -0.1922,0.3707 -0.1922,0.7962 0,0.4119 0.1098,0.7688 0.1098,0.3569 0.3706,0.6177 0.2609,0.2609 0.7002,0.4119 0.4392,0.151 1.1119,0.151 0.7413,0 1.2629,-0.302 0.508,-0.3158 0.7825,-0.7962 0.2608,-0.4942 0.2608,-1.0433 0,-0.508 -0.082,-0.81 -0.082,-0.302 -0.1922,-0.4804 -0.1236,-0.1922 -0.2059,-0.3432 -0.1236,-0.2471 -0.1236,-0.4668 0,-0.302 0.2059,-0.4942 0.2059,-0.2059 0.4805,-0.2059 0.3706,0 0.6726,0.3844 0.3021,0.3569 0.5354,1.0021 0.2197,0.6452 0.2197,1.3316 z m -7.4816,5.4715 q 0,-0.3157 0.2471,-0.5491 0.2334,-0.2334 0.604,-0.2334 0.096,0 0.1785,0.014 0.069,0.014 0.1373,0.041 l 5.6557,2.1003 q 0.2746,0.096 0.4256,0.3432 0.1373,0.2471 0.096,0.5216 -0.027,0.4668 -0.5217,0.7001 l -3.9123,1.3591 0.014,-0.357 3.8986,1.2767 q 0.4942,0.2334 0.5217,0.7001 0.041,0.2608 -0.096,0.5217 -0.151,0.2471 -0.4256,0.3432 l -5.6557,2.1003 q -0.151,0.055 -0.3158,0.055 -0.3294,0 -0.5903,-0.2196 -0.2608,-0.2197 -0.2608,-0.6041 0,-0.2608 0.1236,-0.4667 0.1235,-0.2059 0.3981,-0.2883 l 4.5026,-1.661 -0.027,0.3432 -3.3908,-1.2492 q -0.5079,-0.2197 -0.5079,-0.7551 0,-0.302 0.1373,-0.453 0.1236,-0.1647 0.3706,-0.2608 l 3.3908,-1.2492 0.055,0.4118 -4.5301,-1.6885 q -0.5217,-0.1647 -0.5217,-0.7962 z")
    wdesign_path__gr.attr({
        id:    "wdesign_path__gr",
    })
    wdesign_path.fill('#2f4858')
    wdesign_path.move(screen_width_in_px/2-wdesign_path.bbox().width-150,screen_height/2-wdesign_path.bbox().height-100)
    //wdesign_path.rotate(-90)
    wdesign_path.scale(3)
    wdesign_path.attr({id: 'wdesign_path'})
    wdesign_path__gr.attr({
        x:      -500,
        opacity: 0.0
    })

    //-----------------PARAGRAPH------------------------

    var paragraph = text_gr.text(function(add){
            add.tspan('Creativity is inventing, experimenting, ').newLine()
            add.tspan('growing, taking risk, breaking rules, ').newLine()
            add.tspan('making mistakes and having fun.').newLine() 
            add.tspan('').newLine()
            add.tspan('-Mary Lou Cook').newLine().dx(230).font({size:'15'})
        })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#2f4858',
            family:  'Quicksand',
            size:    "1.2rem"
        })    
    paragraph.attr({
        x: screen_width_in_px/2-paragraph.bbox().width-600,
        y: screen_height/2-paragraph.bbox().height/2
    })  
    var design__tablet_info = {
        "wdesign_path__gr": wdesign_path__gr,
        "paragraph":        paragraph,
    }
    
    return design__tablet_info;
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function web_design__images__tablet(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+150,
        height: screen_height,
        x: screen_width_in_px/2
    })

    var rect_width = (screen_width_in_px/2)/4.5;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/0.png',
                'height':     '370',
                'position_x': 0,
                'position_y': 175,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/2.png',
                'height':     '160',
                'position_x': rect_width+15,
                'position_y': 330,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/3.png',
                'height':     '380',
                'position_x': rect_width+15,
                'position_y': 505,
                'view_box_x': '0',
                'view_box_y': '500'
            },
            {
                'img_url':   './../portfolio-app-media/media/4.png',
                'height':     '560',
                'position_x': rect_width*2+30,
                'position_y': 65,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/7.png',
                'height':     '410',
                'position_x': rect_width*3+45,
                'position_y': 65,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }
    //var elements_height_percentage = images_data['elements_data']['height']
    //var elements_height_px         = images_gr_height*(elements_height_percentage*0.01)

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    //--------------------------------------------------------------------------------------
    function web_design__create_image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        
        //---------------------------
        // IMPORTANT!! - svg.js nested() function always returns an array with 1 element,
        //               and that first element is the object that represents the "nested" element.
        //               because we want to work with that "nested" element, and not an array of elements
        //               we extract it into the image__gr variable with the image__gr_arr[0] expression.
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y});

        var image__gr = image__gr_arr[0]

        //---------------------------


        var image_rect  = image__gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})

        var image_gr_img = image__gr.image(image_url, function (e) {
            console.log(e)
            var image_width  = e.target.naturalWidth
            var image_height = e.target.naturalHeight
    
            image_gr_img.attr({
                viewBox: '0 0 '+image_width+' '+image_height,
                x:       view_box_x,
                y:       view_box_y,
                preserveAspectRatio: 'xMidYMid slice'
            })
        })
        .attr({width: '100%', height: '100%'})

        return image__gr
    }

    //--------------------------------------------------------------------------------------

    var image_gr_0 = web_design__create_image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
    var image_gr_1 = web_design__create_image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
                     web_design__create_image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
    var image_gr_3 = web_design__create_image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
    var image_gr_4 = web_design__create_image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)

    //////////////---------------------------------------------------////////////
    var rect_height = image_gr_0.width()
    var rects_gr = images_gr.nested()
    
    // A__RECT 
    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_0.x()
    var a_rect_y      = image_gr_0.y()
    var a_rect_width  = image_gr_0.width()
    var a_rect_height = image_gr_0.height()

    var a_rect = a_rect_gr.rect(a_rect_width,rect_height)
    a_rect.attr({
            fill: "#df7f77",
            x: a_rect_x,
            y: a_rect_y+a_rect_height+700
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_width  = image_gr_1.width()
    var b_rect_height = image_gr_1.height()
    var b_rect_x      = image_gr_1.x()
    var b_rect_y      = image_gr_1.y()

    var b_rect = b_rect_gr.rect(b_rect_width,a_rect_height)
    b_rect.attr({
            fill: "#df7f77",
            x: b_rect_x,
            y: b_rect_y-a_rect_height*2
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_3.width()
    var c_rect_height = image_gr_3.height()
    var c_rect_x      = image_gr_3.x()
    var c_rect_y      = image_gr_3.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,rect_height)
        .attr({
            fill: "#df7f77",
            x: c_rect_x,
            y: c_rect_y+c_rect_height+600
        })

    // D__RECT 
    var d_rect_gr     = rects_gr.nested()
    var d_rect_width  = image_gr_4.width()
    var d_rect_height = image_gr_4.height()
    var d_rect_x      = image_gr_4.x()
    var d_rect_y      = image_gr_4.y()

    var d_rect = d_rect_gr.rect(d_rect_width,c_rect_height)
        .attr({
            fill: "#df7f77",
            x: d_rect_x,
            y: d_rect_y+c_rect_height*2
        })
        var design__top_tablet_rects = {
            "a_rect":        a_rect,
            "a_rect_y":      a_rect_y,
            "a_rect_height": a_rect_height,
            "b_rect":        b_rect,
            "b_rect_y":      b_rect_y,
            "b_rect_height": b_rect_height,
            "c_rect":        c_rect,
            "c_rect_y":      c_rect_y,
            "c_rect_height": c_rect_height,
            "d_rect":        d_rect,
            "d_rect_y":      d_rect_y,
            "d_rect_height": d_rect_height,
            "rect_height":    rect_height
        }
    
        return design__top_tablet_rects
}

function web_design__headline_tablet_info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
     var pink_rect = headline_gr.rect(screen_width_in_px/3.6,100)
        .fill('#6d5f87')
        .attr({
            id:      "pink_rect",
            opacity: 1.0,
            'x':     0,
            'y':     screen_height/5
        })
      //---------------------MY-WORK-TITLE--------------------
      var my_title = headline_gr.text(function(text_element){
        text_element.tspan('my')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#d8d8d8ff',
            family:  'Quicksand',
            size:    "4.5vw"
        })    
    my_title.attr({
       x: pink_rect.bbox().x+pink_rect.bbox().width,
       y: pink_rect.bbox().y+pink_rect.bbox().height/2+my_title.bbox().height/2-5
    })
    my_title.rotate(-90)

    var work_title = headline_gr.text(function(text_element){
        text_element.tspan('work')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#d8d8d8ff',
            family:  'Quicksand',
            size:    "15vw"
        })    
   work_title.attr({
       x: pink_rect.bbox().x+pink_rect.bbox().width+my_title.bbox().height+25,
       y: pink_rect.bbox().y+pink_rect.bbox().height-5
    })

}

function artist_portfolio__tablet(parent_gr, screen_width_in_px, screen_height){
    var artist_portfolio__gr = parent_gr.nested().attr({id: 'artist_portfolio__gr'})
    var rect_height = screen_height-200
    var rect_width  = screen_width_in_px-300

    var column_info_first = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(artist_portfolio__gr){    var rect_height = screen_height-200

                    var left_top_gr    = artist_portfolio__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#b5b5b5ff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Portfolio")
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   19,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: left_top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: left_top_gr.bbox().height/2-left_top_text.bbox().height
                        })

                    var right__gr   = artist_portfolio__gr.nested()
                    var right_rect  = right__gr.rect(rect_width/2,rect_height)
                        .attr({
                            id:      "right_rect",
                            x:       rect_width/2,
                            fill:   '#b5b5b5ff',
                            opacity: 0.0
                        })
                    var artist_image_url = './../portfolio-app-media/media/art_1.png'
                    fit_image_inside_rect(right__gr, artist_image_url, rect_width/2, rect_height, rect_width/2, 0, 0, 0)
    
                    var bottom_left__gr = artist_portfolio__gr.nested()
                    var bottom_top_left = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({id: "bottom_top_left",
                                x: 0,
                                y: rect_height/3,
                                opacity: 0.0
                        })


                    var artist_1 = './../portfolio-app-media/media/artist_0.png'
                    fit_image_inside_rect(bottom_left__gr, artist_1, rect_width/4-10, rect_height/3, 0, rect_height/3, 0, 0)

                    var bottom_top_right = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d95f40")
                        .attr({id: "bottom_top_right",
                            x: rect_width/4+10,
                            y: rect_height/3,
                            opacity: 0.0
                    })

                    var artist_2 = './../portfolio-app-media/media/art_2.png'
                    fit_image_inside_rect(bottom_left__gr, artist_2, rect_width/4-10, rect_height/3, rect_width/4, rect_height/3, 0, 0)

                    var bottom = bottom_left__gr.rect(rect_width/2-10,rect_height/3-10)
                        .attr({
                            opacity: 1.0,
                            id:  "bottom",
                            fill:"#b5b5b5ff", 
                            x:   0,
                            y:   rect_height-rect_height/3+10
                    })

                    var paragraph = bottom_left__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural ').newLine()
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration,').newLine()
                        add.tspan('aspiration...').newLine()
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  500,
                            fill:    '#1f2d38ff',
                            family:  'Quicksand',
                            size:    14
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width/2-paragraph.bbox().width/2,
                        y: rect_height-rect_height/3+800
                    }) 

                },    
                "activate_fn": function(artist_portfolio__gr){
                   

                }, 
                "deactivate_fn": function(artist_portfolio__gr){

                },     
                "width":                rect_width,           
                "height":               rect_height,                              //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "1"
            }

        ]

    }
    
    create_info_column(artist_portfolio__gr, screen_height, screen_width_in_px, 150, 0, column_info_first);

}

function suprematism__tablet(parent_gr, screen_width_in_px, screen_height){
    var suprematism__gr = parent_gr.nested().attr({id: 'suprematism__gr'})
    var rect_width  = screen_width_in_px-300
    var rect_height = screen_height-200

    var column_info_second = {

        "title": "elements",

        "elements_data":[ 
            {
                //SECOND RECT
                "name":"second",
                "date":"tag_2",    
                "draw_fn": function(parent_gr){
                    //element_number

                    var right_middle__gr = parent_gr.nested()
                    right_middle__gr.attr({ 
                        x: rect_width/2,
                        y: rect_height/3
                    }) 

                    var middle_left = right_middle__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({
                            id: "middle_left",
                            x: 10,
                            y: 0
                        })
                    var suprematism_image_url_2 = './../portfolio-app-media/media/sup_2.png'
                    fit_image_inside_rect(right_middle__gr, suprematism_image_url_2, rect_width/4-10, rect_height/3, 10, 0, 0, 0)

                    var middle_right = right_middle__gr.rect(rect_width/4-10,rect_height/3).fill("#000")
                        .attr({
                            id: "middle_right",
                            x: rect_width/4+10,
                            y: 0
                    })
                    var suprematism_image_url_4 = './../portfolio-app-media/media/sup_1.png'
                    fit_image_inside_rect(right_middle__gr, suprematism_image_url_4, rect_width/4-10, rect_height/3, rect_width/4+10, 0, 0, 0)

                    //////////////////////////////////////////////////////////////////
                    var bottom__gr = parent_gr.nested()
                    bottom__gr.attr({ 
                        x: rect_width/2,
                        y: rect_height-rect_height/3
                    }) 

                    var bottom = bottom__gr.rect(rect_width/2-10,rect_height/3-10).fill("#fff")
                        .attr({id: "bottom",
                            x: 10,
                            y: 10,
                            opacity: 1.0
                    })
                    
                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural ').newLine()
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration,').newLine()
                        add.tspan('aspiration...').newLine()
                
                    })
                    .font({
                        opacity: 1.0,
                        weight:  500,
                        fill:    '#1f2d38ff',
                        family:  'Quicksand',
                        size:    14
                    })   
                    paragraph.attr({
                        x: bottom__gr.bbox().width/2-paragraph.bbox().width/2,
                        y: bottom__gr.bbox().height/2-paragraph.bbox().height/2
                    }) 

                    //var suprematism_image_url_0 = './media/suprematism_0.png'
                    //fit_image_inside_rect(bottom__gr, suprematism_image_url_0, rect_width/2, rect_height/3, 0, 0, 0, 0)

                    ////////////////////////////////////////////////////////////////////////                      
                    var right_top_gr = parent_gr.nested()
                        .attr({
                            x: rect_width/2,
                            y: 0
                        })
                    var right_top_rect = right_top_gr.rect(rect_width/2-10,rect_height/3-10).fill("#fff")
                    .attr({id: "right_top",
                        x:       10,
                        y:       0,
                        opacity: 1.0
                    })
                    var right_top_text = right_top_gr.text("Type: Educational")
                    right_top_text.font({
                        family: 'Quicksand',
                        size:    19,
                        fill:   '#7a0000ff',
                        anchor: 'right',
                        weight: '700',
                        leading:'1.5em'
                    })
                    .attr({
                        x: right_top_rect.bbox().width/2-right_top_text.bbox().width/2,
                        y: right_top_rect.bbox().height/2-right_top_text.bbox().height
                    })

                    ////////////////////////////////////////////////////////////////////////////////////
                    var left_rect_gr = parent_gr.nested()
                    
                    var left_rect = left_rect_gr.rect(rect_width/2, rect_height)
                    .attr({
                        fill:    "#d45f00",
                        opacity: 1.0
                    })
                    
                   var suprematism_image_url = './../portfolio-app-media/media/suprematism_1.png'
                   fit_image_inside_rect(left_rect_gr, suprematism_image_url, rect_width/2, rect_height, 0, 0, 0, 0)

                },    
                "activate_fn": function(parent_gr){
                

                }, 
                "deactivate_fn": function(parent_gr){

                },     
                "width":                rect_width,           
                "height":               rect_height,                              //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "2"
            }
        ]
    }

    create_info_column(suprematism__gr, screen_height, screen_width_in_px, 150, 0, column_info_second);
}

function deep_blue__tablet(parent_gr, screen_width_in_px, screen_height){
    var deep_blue__gr = parent_gr.nested().attr({id: 'deep_blue__gr'})
    var rect_height = screen_height-200
    var rect_width  = screen_width_in_px-300

    var column_info_third = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(deep_blue__gr){

                    var left_top_gr    = deep_blue__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#6f907fff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Small bussines")
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   19,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: left_top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: left_top_gr.bbox().height/2-left_top_text.bbox().height
                        })

                    var right__gr   = deep_blue__gr.nested()
                    var right_rect  = right__gr.rect(rect_width/2,rect_height)
                        .attr({
                            id:      "right_rect",
                            x:       rect_width/2,
                            fill:   '#2a3d35ef',
                            opacity: 0.0
                        })
                    var url__a = './../portfolio-app-media/media/deep_blue_0.png'
                    fit_image_inside_rect(right__gr, url__a, rect_width/2, rect_height, rect_width/2, 0, 0, 0)
    
                    var bottom_left__gr = deep_blue__gr.nested()
                    var bottom_top_left = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({id: "bottom_top_left",
                                x: 0,
                                y: rect_height/3,
                                opacity: 0.0
                        })


                    var url__b = './../portfolio-app-media/media/deep_blue_2.png'
                    fit_image_inside_rect(bottom_left__gr, url__b, rect_width/4-10, rect_height/3, 0, rect_height/3, 0, 0)

                    var bottom_top_right = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d95f40")
                        .attr({id: "bottom_top_right",
                            x: rect_width/4+10,
                            y: rect_height/3,
                            opacity: 0.0
                    })

                    var url__c = './../portfolio-app-media/media/deep_blue_1.png'
                    fit_image_inside_rect(bottom_left__gr, url__c, rect_width/4-10, rect_height/3, rect_width/4, rect_height/3, 0, 0)

                    var bottom = bottom_left__gr.rect(rect_width/2-10,rect_height/3-10)
                        .attr({
                            opacity: 1.0,
                            id:  "bottom",
                            fill:"#6f907fff", 
                            x:   0,
                            y:   rect_height-rect_height/3+10
                    }) 

                    var paragraph = bottom_left__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural ').newLine()
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration,').newLine()
                        add.tspan('aspiration...').newLine()
                
                    })
                    .font({
                        opacity: 1.0,
                        weight:  500,
                        fill:    '#1f2d38ff',
                        family:  'Quicksand',
                        size:    14
                    })  
                    paragraph.attr({
                        x: bottom.bbox().width/2-paragraph.bbox().width/2,
                        y: rect_height-rect_height/3+50
                    }) 

                },    
                "activate_fn": function(deep_blue__gr){
                   

                }, 
                "deactivate_fn": function(deep_blue__gr){

                },     
                "width":                rect_width,           
                "height":               rect_height,                              //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "1"
            }

        ]

    }

    create_info_column(deep_blue__gr, screen_height, screen_width_in_px, 150, 0, column_info_third);
}

function video__section__tablet(parent_gr, screen_width_in_px, screen_height){

    // ! svg.js DOESNT SUPPORT .mp4 FILES !
    var video_gr   = parent_gr.nested()
    var video_gr_y = 100;
    
    video_gr.attr({
        y: video_gr_y
    })

    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y
    var video_global_height = 800

    $("#video__info").append(`
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar3.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#video__info").find("#video__container").css({
        opacity: 0.7
    });

    $("#video__info").find("#video__a").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#video__info").find("#video__b").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#video__info").find("#video__c").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}


function design_animate__tablet_activate(design__tablet_info, screen_width_in_px, screen_height){

    var wdesign_path__gr = design__tablet_info["design_text_tablet_info"]["wdesign_path__gr"]
    var paragraph        = design__tablet_info["design_text_tablet_info"]["paragraph"]
    var rect_height      = design__tablet_info["design__top_tablet_rects"]["rect_height"]
    var a_rect           = design__tablet_info["design__top_tablet_rects"]["a_rect"]
    var a_rect_y         = design__tablet_info["design__top_tablet_rects"]["a_rect_y"]
    var a_rect_height    = design__tablet_info["design__top_tablet_rects"]["a_rect_height"]
    var b_rect           = design__tablet_info["design__top_tablet_rects"]["b_rect"]
    var b_rect_y         = design__tablet_info["design__top_tablet_rects"]["b_rect_y"]
    var b_rect_height    = design__tablet_info["design__top_tablet_rects"]["b_rect_height"]
    var c_rect           = design__tablet_info["design__top_tablet_rects"]["c_rect"]
    var c_rect_y         = design__tablet_info["design__top_tablet_rects"]["c_rect_y"]
    var c_rect_height    = design__tablet_info["design__top_tablet_rects"]["c_rect_height"]
    var d_rect           = design__tablet_info["design__top_tablet_rects"]["d_rect"]
    var d_rect_y         = design__tablet_info["design__top_tablet_rects"]["d_rect_y"]
    var d_rect_height    = design__tablet_info["design__top_tablet_rects"]["d_rect_height"]

    wdesign_path__gr.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({x: 0, opacity: 1.0})
    paragraph.animate({
        delay: 500,
        duration:500
    }).ease('>')
    .attr({
        x: screen_width_in_px/2-paragraph.bbox().width-25,
    })
    a_rect.animate({
        delay: 150,
        duration:500
    }).ease('>')
    .attr({
        y: a_rect_y+a_rect_height
    })
    b_rect.animate({
        delay: 250,
        duration:500
    }).ease('>')
    .attr({
        y: b_rect_y-a_rect_height
    })
    c_rect.animate({
        delay: 400,
        duration:500
    }).ease('>')
    .attr({
        y: c_rect_y+c_rect_height
    })
    d_rect.animate({
        delay: 500,
        duration:500
    }).ease('>')
    .attr({
        y: d_rect_y+d_rect_height
    })

}

