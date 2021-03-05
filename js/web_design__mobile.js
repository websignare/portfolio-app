/*$( document ).ready(function() {
    web_design__mobile__main()
    console.log( "web_design__ready!" );
});*/

function web_design__mobile__main() {
    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);  

    web_design__mobile__activate(bar_gr);

    $(window).resize(function() {

        web_design__mobile__deactivate();

        web_design__mobile__activate(bar_gr);

    });
}

function web_design__mobile__activate(bar_gr) {
    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;
    document.title = "web_design_mobile"
    window.history.pushState({page: "web_design_mobile"},"", "#web_design_mobile");
    current_page = "web_design_mobile"

    $("body #hp").append(`
        <div id="web_design__mobile">
            <div id="headline__info">
            </div>
            <div id="artist_portfolio__mobile__info">
            </div>
            <div id="suprematism__info">
            </div>
            <div id="deep_blue__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    var design__mobile_info = web_design__mobile__create_responsive(bar_gr);
    web_design_top__animate(design__mobile_info, screen_width_in_px, screen_height)
}
    
function web_design__mobile__deactivate(bar_gr) {

    $("#web_design__mobile").remove();
    $("#contact_mobile_wrapper").remove();
    remove_triggers("artist_div__trigger")
    remove_triggers("suprematism_div__trigger")
    remove_triggers("deep_blue__trigger")

}

function web_design__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#web_design__mobile").css({                    
        "background-color": '#ece8e7f3',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#web_design__mobile #headline__info").css({     
        "position": "relative",
        "height":    screen_height,
        "width":     screen_width_in_px,
        
    }); 

    $("#web_design__mobile #artist_portfolio__mobile__info").css({      
        "background-color": '#442b3eff',              
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var current_scroll_y = window.scrollY;

    var bounding_rect       = $("#web_design__mobile #artist_portfolio__mobile__info").get(0).getBoundingClientRect()
    var artist__div_bottom_y = current_scroll_y+(bounding_rect.bottom-250);
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#web_design__mobile #suprematism__info").css({     
        "background-color": '#442b3eff',               
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect       = $("#web_design__mobile #suprematism__info").get(0).getBoundingClientRect()
    var suprematism__div_bottom_y = current_scroll_y+(bounding_rect.bottom-250);
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#web_design__mobile #deep_blue__info").css({   
        "background-color": '#442b3eff',                 
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect       = $("#web_design__mobile #deep_blue__info").get(0).getBoundingClientRect()
    var deep_blue__div_bottom_y = current_scroll_y+(bounding_rect.bottom-250);
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#web_design__mobile #video__info").css({      
        "background-color": '#2e1428ff',              
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var headline_container            = SVG().addTo("#web_design__mobile #headline__info").size(screen_width_in_px, screen_height)
    var mobile_headline__container_gr = headline_container.nested()

    var artist_portfolio__mobile__container           = SVG().addTo("#web_design__mobile #artist_portfolio__mobile__info").size(screen_width_in_px, screen_height)
    var mobile_artist_portfolio__mobile__container_gr = artist_portfolio__mobile__container.nested()   
    mobile_artist_portfolio__mobile__container_gr.attr({y: -30,opacity: 0.5})

    var suprematism__container           = SVG().addTo("#web_design__mobile #suprematism__info").size(screen_width_in_px, screen_height)
    var mobile_suprematism__container_gr = suprematism__container.nested()   
    mobile_suprematism__container_gr.attr({y: 0,opacity: 0.5})

    var deep_blue__container           = SVG().addTo("#web_design__mobile #deep_blue__info").size(screen_width_in_px, screen_height)
    var mobile_deep_blue__container_gr = deep_blue__container.nested()  
    mobile_deep_blue__container_gr.attr({y: -30,opacity: 0.5})

    var video__container           = SVG().addTo("#web_design__mobile #video__info").size(screen_width_in_px, screen_height)
    var mobile_video__container_gr = video__container.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    var design__mobile_info = web_design_intro__info(mobile_headline__container_gr, bar_gr, screen_width_in_px, screen_height)
    artist_portfolio__mobile(mobile_artist_portfolio__mobile__container_gr, screen_width_in_px, screen_height)
    suprematism__mobile(mobile_suprematism__container_gr, screen_width_in_px, screen_height)
    deep_blue__mobile(mobile_deep_blue__container_gr, screen_width_in_px, screen_height)
    web_design_video__mobile(mobile_video__container_gr, screen_width_in_px, screen_height)

    create_mobile_contact_section(screen_width_in_px,screen_height)

    // ARTIST__SCROLL_TRIGGER
    var trigger_y_position__artist_canvas = artist__div_bottom_y;
    sc_trigger__create(trigger_y_position__artist_canvas,
        "artist_div__trigger",
        screen_height,
        // activate_fn
        function() {
            mobile_artist_portfolio__mobile__container_gr.animate({
                    duration: 600,
                    delay:    300, 
                    ease: '<' 
                })
                .attr({y:0, opacity: 1.0})
        },
        // deactivate
        function() {
            mobile_artist_portfolio__mobile__container_gr.animate({
                duration: 600,
                delay:    300, 
                ease: '<' 
            })
            .attr({y: -30, opacity: 0.5})
        });

    // SUPREMATISM__SCROLL_TRIGGER
    var trigger_y_position__suprematism_canvas = suprematism__div_bottom_y;
    sc_trigger__create(trigger_y_position__suprematism_canvas,
        "suprematism_div__trigger",
        screen_height,
        // activate_fn
        function() {
            mobile_suprematism__container_gr.animate({
                    duration: 600,
                    delay:    300, 
                    ease: '<' 
                })
                .attr({y: 0,opacity: 1.0})
        },
        // deactivate
        function() {
            mobile_suprematism__container_gr.animate({
                duration: 600,
                delay:    300, 
                ease: '<' 
            })
            .attr({y: -30, opacity: 0.5})
        });

    // DEEP_BLUE__SCROLL_TRIGGER
    var trigger_y_position__deep_blue_canvas = deep_blue__div_bottom_y;
    sc_trigger__create(trigger_y_position__deep_blue_canvas,
        "deep_blue__trigger",
        screen_height,
        // activate_fn
        function() {
            mobile_deep_blue__container_gr.animate({
                    duration: 600,
                    delay:    300, 
                    ease: '<' 
                })
                .attr({y: 0,opacity: 1.0})
        },
        // deactivate
        function() {
            mobile_deep_blue__container_gr.animate({
                duration: 200,
                //delay:    400, 
                ease: '<' 
            })
            .attr({y: -30, opacity: 0.5})
        });

    return design__mobile_info;
}

function web_design_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({id: "web_design_create__image"})
        .attr({width: rect_width, height: rect_height})
        .attr({"x": x})
        .attr({"y": y})
        .attr({"opacity": opacity})
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

//-------------------------------WEB-DESIGN----------------------------------------------------------------
function web_design_intro__info(parent_gr, bar_gr, screen_width_in_px, screen_height){

    web_design_container__gr = parent_gr.nested()

    //--------------------------RECT---------------------------------------
    var strip__gr = web_design_container__gr.nested()
    var strip = strip__gr.rect(screen_width_in_px/2,screen_height)
        .fill('#df8371ff')
    strip.attr({
        id:      "strip",
        opacity: 1.0,
        'x':     screen_width_in_px/2,
        'y':     0
    })


    //---------------------------SYMBOL----------------------------------
    var line_symbol_gr = web_design_container__gr.nested()  

    var line_symbol = line_symbol_gr.path("m 718.26735,-1505.9353 q -3.66386,0 -7.54322,-3.0173 -3.87939,-3.0173 -3.87939,-7.7587 0,-2.5863 1.29313,-5.1725 l 87.5014,-179.0977 q 1.50865,-3.0173 4.0949,-4.7415 2.58625,-1.7242 5.38802,-1.7242 3.66385,0 7.32771,3.0173 3.87936,2.8018 3.87936,7.7588 0,2.5862 -1.29312,5.1725 l -87.28588,179.0977 q -1.50865,3.0173 -4.09489,4.7414 -2.37073,1.7242 -5.38802,1.7242 z")
    line_symbol_gr.css( "position", "fixed")

    line_symbol.fill('#d2d1d1ff')
    line_symbol.move(line_symbol.bbox().width-200,screen_height/2+10)
    //line_symbol.rotate(180)
    line_symbol.scale(2.3)
    line_symbol.attr({opacity: 0.0, id: 'line_symbol'})

    line_symbol_gr.attr({
        id: "line_symbol_gr"
    })

    var star_symbol_gr = web_design_container__gr.nested()  

    var star_symbol = star_symbol_gr.path("m 863.95336,-1599.7951 q -3.15714,0 -5.18672,-2.2551 -1.80407,-2.255 -1.57856,-5.6377 l 2.02958,-17.8152 q 0.2255,-0.6766 -0.2255,-0.9021 -0.45102,-0.2255 -1.12756,0.2255 l -14.6581,10.599 q -2.70611,2.0296 -5.63773,1.5786 -2.93162,-0.6766 -4.73569,-3.6082 -2.02959,-3.6081 -0.90205,-6.3143 1.35306,-2.7061 4.28468,-3.8336 l 16.46218,-7.4418 q 0.67654,-0.2255 0.67654,-0.6766 0,-0.451 -0.67654,-0.6765 l -16.46218,-7.4418 q -3.15712,-1.353 -4.05916,-4.2847 -0.90204,-2.9316 0.67653,-5.8632 1.80407,-2.9316 4.73569,-3.3826 2.93162,-0.6766 5.63773,1.1275 l 14.6581,10.8244 q 0.67654,0.4511 1.12756,0.2256 0.451,-0.2256 0.2255,-0.9021 l -2.02958,-17.8152 q -0.22551,-3.3826 1.80408,-5.6377 2.02958,-2.2551 5.41222,-2.2551 3.15712,0 5.18671,2.2551 2.02959,2.2551 1.57857,5.6377 l -2.02958,17.8152 q -0.22552,0.6765 0.22549,0.9021 0.45103,0.2255 1.12755,-0.2256 l 14.65811,-10.5989 q 2.70612,-2.0296 5.63774,-1.353 3.15713,0.451 4.73568,3.3826 2.0296,3.6082 0.67654,6.3143 -1.12755,2.7061 -4.05917,3.8336 l -16.46218,7.4418 q -0.67653,0.2255 -0.67653,0.6765 0,0.4511 0.67653,0.6766 l 16.46218,7.4418 q 3.15713,1.353 4.05917,4.2847 1.12754,2.9316 -0.67654,5.8632 -1.57855,2.9316 -4.73568,3.6082 -2.93162,0.451 -5.63774,-1.3531 l -14.65811,-10.8245 q -0.67652,-0.451 -1.12755,-0.2255 -0.45101,0.2255 -0.22549,0.9021 l 2.02958,17.8152 q 0.45102,3.3827 -1.80409,5.6377 -2.02957,2.2551 -5.41221,2.2551 z")
    star_symbol_gr.css( "position", "fixed")

    star_symbol.fill('#d2d1d1ff')
    star_symbol.move(screen_width_in_px/2-star_symbol.bbox().width/2,screen_height/2+star_symbol.bbox().height+100)
    //star_symbol.rotate(180)
    star_symbol.scale(2.3)
    star_symbol.attr({opacity: 0.0, id: 'star_symbol'})

    star_symbol_gr.attr({
        id: "star_symbol_gr"
    })

    //---------------------CALL MENU FUNCTION-------------------------------
    var menu_rect_gr = strip__gr.nested()
    .attr({
        x: screen_width_in_px-60,
        y: 0
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#533065ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 35, 20).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 32, 35, 32).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 45, 35, 45).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })


    var menu_rect_clicked = false;

    menu_rect_gr.click(function() {
        
            
            // ANIMATE
            console.log(create_mobile_menu,"defined")
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;

    })

    //---------------------------IMAGE----------------------------------
    var background_img__gr = web_design_container__gr.nested() 

    var rect_width  =  300//screen_width_in_px-100;
    var rect_height =  300//screen_height/2.4;

    var light__url = "./../portfolio-app-media/media/design__mobile__img.png"
    
    web_design_create__image(background_img__gr, light__url, rect_width, rect_height, 0, 0, 1.0, 0, 0)

    background_img__gr.attr({
        id:     "background_img__gr",
        height: rect_height,
        width:  rect_width,
        y:      screen_height/2-80,
        x:      screen_width_in_px+background_img__gr.bbox().width
    })


    //---------------------WEB-DESIGN-TITLE--------------------
    var wdesign_path_mob_gr = web_design_container__gr.nested()
    var wdesign_path_mob = wdesign_path_mob_gr.path("m 1133.2181,-1561.5234 q 2.5619,0 3.8775,1.0732 1.3501,1.0732 1.8348,2.8735 0.5193,1.7656 0.5193,3.9466 v 8.8627 q 0,0.9001 -0.5885,1.5232 -0.5886,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5886,-0.6231 -0.5886,-1.5232 v -8.8627 q 0,-1.1424 -0.3115,-2.0426 -0.277,-0.9347 -1.0386,-1.4886 -0.7617,-0.5539 -2.1811,-0.5539 -1.3848,0 -2.3541,0.5539 -0.9348,0.5539 -1.4541,1.4886 -0.4846,0.9002 -0.4846,2.0426 v 8.8627 q 0,0.9001 -0.5886,1.5232 -0.5885,0.5886 -1.4886,0.5886 -0.9001,0 -1.4887,-0.5886 -0.5885,-0.6231 -0.5885,-1.5232 v -14.298 q 0,-0.9001 0.5885,-1.4886 0.5886,-0.6232 1.4887,-0.6232 0.9001,0 1.4886,0.6232 0.5886,0.5885 0.5886,1.4886 v 1.4887 l -0.5193,-0.1039 q 0.3116,-0.5885 0.9001,-1.2463 0.5885,-0.6924 1.3848,-1.2809 0.7962,-0.5886 1.8002,-0.9348 1.004,-0.3808 2.181,-0.3808 z m -24.2965,0 q 1.454,0 2.6657,0.4501 1.2117,0.45 2.0772,1.1424 0.9001,0.6924 1.3848,1.4194 0.5193,0.6924 0.5193,1.1771 l -0.9001,0.4501 v -2.5273 q 0,-0.9001 0.5885,-1.4886 0.5885,-0.6232 1.4886,-0.6232 0.9002,0 1.4887,0.5885 0.5885,0.5886 0.5885,1.5233 v 15.4058 q 0,3.0119 -1.3155,4.8121 -1.281,1.8349 -3.3928,2.6311 -2.1118,0.8309 -4.5351,0.8309 -0.6924,0 -1.8003,-0.1731 -1.1078,-0.1731 -2.1118,-0.4154 -1.0039,-0.2424 -1.5232,-0.4501 -1.0386,-0.45 -1.4541,-1.1424 -0.3808,-0.6578 -0.1384,-1.4194 0.3115,-1.004 1.0039,-1.3848 0.6924,-0.3462 1.4541,-0.069 0.3462,0.1039 1.1424,0.4155 0.7963,0.3115 1.731,0.5539 0.9693,0.2769 1.6964,0.2769 2.5964,0 3.8428,-1.0386 1.2463,-1.0385 1.2463,-2.8734 v -3.0119 l 0.4154,0.3116 q 0,0.45 -0.4847,1.1078 -0.45,0.6232 -1.2809,1.2463 -0.7963,0.6232 -1.9041,1.0732 -1.1078,0.4155 -2.3541,0.4155 -2.458,0 -4.4314,-1.2117 -1.9733,-1.2463 -3.1157,-3.3928 -1.1425,-2.181 -1.1425,-4.9852 0,-2.8388 1.1425,-4.9852 1.1424,-2.1811 3.0811,-3.3928 1.9387,-1.2463 4.3275,-1.2463 z m 0.6578,3.8082 q -1.5579,0 -2.735,0.7616 -1.1771,0.7616 -1.8348,2.0772 -0.6578,1.3155 -0.6578,2.9773 0,1.6271 0.6578,2.9427 0.6577,1.3155 1.8348,2.0772 1.1771,0.7616 2.735,0.7616 1.5925,0 2.7695,-0.7616 1.1771,-0.7617 1.8349,-2.0772 0.6578,-1.3156 0.6578,-2.9427 0,-1.6618 -0.6578,-2.9773 -0.6578,-1.3156 -1.8349,-2.0772 -1.177,-0.7616 -2.7695,-0.7616 z m -12.4399,12.9478 q 0,0.9001 -0.5885,1.5232 -0.5886,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5886,-0.6231 -0.5886,-1.5232 v -14.298 q 0,-0.9001 0.5886,-1.4886 0.5885,-0.6232 1.4886,-0.6232 0.9001,0 1.4887,0.6232 0.5885,0.5885 0.5885,1.4886 z m -2.1118,-18.6601 q -1.1771,0 -1.6617,-0.3808 -0.4847,-0.3808 -0.4847,-1.3502 v -0.6577 q 0,-1.004 0.5193,-1.3502 0.5539,-0.3808 1.6617,-0.3808 1.2117,0 1.6964,0.3808 0.4847,0.3808 0.4847,1.3502 v 0.6577 q 0,1.004 -0.5193,1.3848 -0.5193,0.3462 -1.6964,0.3462 z m -19.5747,17.8984 q -0.3462,-0.4847 -0.3116,-1.2463 0.035,-0.7616 0.9001,-1.3155 0.5539,-0.3462 1.1771,-0.277 0.6231,0.035 1.2117,0.6232 1.0039,1.0039 2.1118,1.5578 1.1078,0.554 2.7695,0.554 0.5193,-0.035 1.1425,-0.1385 0.6231,-0.1385 1.0732,-0.5539 0.4847,-0.4501 0.4847,-1.3502 0,-0.7616 -0.5193,-1.2117 -0.5193,-0.45 -1.3848,-0.7616 -0.8309,-0.3116 -1.8695,-0.5886 -1.0732,-0.3115 -2.2156,-0.6924 -1.1079,-0.3808 -2.0426,-0.9693 -0.9347,-0.6232 -1.5233,-1.6271 -0.5885,-1.004 -0.5885,-2.5273 0,-1.731 0.9693,-2.9427 0.9694,-1.2116 2.4927,-1.8694 1.5579,-0.6578 3.2542,-0.6578 1.0732,0 2.2503,0.277 1.1771,0.2423 2.2503,0.8308 1.0732,0.554 1.8002,1.4887 0.3808,0.5193 0.4501,1.2463 0.069,0.727 -0.6578,1.3155 -0.5193,0.4155 -1.2117,0.3809 -0.6924,-0.069 -1.1424,-0.4847 -0.5886,-0.7616 -1.5926,-1.2117 -0.9693,-0.4501 -2.2502,-0.4501 -0.5193,0 -1.1425,0.1385 -0.5885,0.1039 -1.0386,0.5193 -0.45,0.3808 -0.45,1.2463 0,0.7963 0.5193,1.281 0.5193,0.45 1.3847,0.7616 0.9002,0.2769 1.9041,0.5539 1.0386,0.277 2.1118,0.6578 1.0732,0.3808 1.9734,1.004 0.9001,0.6231 1.454,1.6271 0.5539,0.9693 0.5539,2.4926 0,1.7656 -1.0386,3.0119 -1.0386,1.2463 -2.5965,1.9041 -1.5579,0.6232 -3.185,0.6232 -2.0425,0 -4.0851,-0.6924 -2.0426,-0.7271 -3.3927,-2.5273 z m -10.4579,3.2197 q -2.9427,0 -5.1237,-1.2117 -2.1464,-1.2463 -3.3235,-3.3581 -1.1425,-2.1119 -1.1425,-4.7776 0,-3.1157 1.2463,-5.2968 1.281,-2.2157 3.3235,-3.3927 2.0426,-1.1771 4.3275,-1.1771 1.7656,0 3.3235,0.727 1.5925,0.727 2.8042,2.008 1.2117,1.2463 1.9041,2.908 0.727,1.6618 0.727,3.5312 -0.035,0.8309 -0.6578,1.3502 -0.6231,0.5193 -1.454,0.5193 h -13.2247 l -1.0386,-3.462 h 12.7054 l -0.7616,0.6924 v -0.9347 q -0.069,-1.004 -0.727,-1.8002 -0.6232,-0.7963 -1.5926,-1.2463 -0.9347,-0.4847 -2.0079,-0.4847 -1.0386,0 -1.9387,0.2769 -0.9001,0.277 -1.5579,0.9348 -0.6578,0.6577 -1.0386,1.7656 -0.3808,1.1078 -0.3808,2.8042 0,1.8694 0.7616,3.185 0.7963,1.2809 2.008,1.9733 1.2463,0.6578 2.6311,0.6578 1.2809,0 2.0425,-0.2077 0.7617,-0.2077 1.2117,-0.4847 0.4847,-0.3116 0.8655,-0.5193 0.6232,-0.3116 1.1771,-0.3116 0.7616,0 1.2463,0.5193 0.5193,0.5193 0.5193,1.2117 0,0.9347 -0.9694,1.6964 -0.9001,0.7616 -2.5272,1.3501 -1.6271,0.554 -3.3581,0.554 z m -15.1305,-25.9648 q 0.9002,0 1.4887,0.5885 0.5885,0.5885 0.5885,1.5233 v 21.395 q 0,0.9001 -0.5885,1.5232 -0.5885,0.5886 -1.4887,0.5886 -0.9001,0 -1.4886,-0.5886 -0.5885,-0.6231 -0.5885,-1.5232 v -1.6964 l 0.7616,0.3116 q 0,0.45 -0.4847,1.1078 -0.4847,0.6232 -1.3155,1.2463 -0.8309,0.6232 -1.9734,1.0732 -1.1078,0.4155 -2.4233,0.4155 -2.3888,0 -4.3275,-1.2117 -1.9387,-1.2463 -3.0812,-3.3928 -1.1078,-2.181 -1.1078,-4.9852 0,-2.8388 1.1078,-4.9852 1.1425,-2.1811 3.0466,-3.3928 1.9041,-1.2463 4.2236,-1.2463 1.4886,0 2.7349,0.4501 1.2464,0.45 2.1465,1.1424 0.9347,0.6924 1.4194,1.4194 0.5193,0.6924 0.5193,1.1771 l -1.2463,0.4501 v -9.2781 q 0,-0.9002 0.5885,-1.4887 0.5885,-0.6231 1.4886,-0.6231 z m -6.9931,22.1566 q 1.5232,0 2.6657,-0.7616 1.1424,-0.7617 1.7656,-2.0772 0.6578,-1.3156 0.6578,-2.9427 0,-1.6618 -0.6578,-2.9773 -0.6232,-1.3156 -1.7656,-2.0772 -1.1425,-0.7616 -2.6657,-0.7616 -1.4887,0 -2.6311,0.7616 -1.1425,0.7616 -1.8003,2.0772 -0.6231,1.3155 -0.6231,2.9773 0,1.6271 0.6231,2.9427 0.6578,1.3155 1.8003,2.0772 1.1424,0.7616 2.6311,0.7616 z m -20.0777,-18.6574 q 0,-0.961 0.4942,-1.716 0.4805,-0.7687 1.3316,-1.208 0.8511,-0.453 1.9768,-0.453 1.1257,0 1.9905,0.453 0.8511,0.4393 1.3453,1.1943 0.4805,0.7413 0.4805,1.6748 0,0.5491 -0.1785,1.0295 -0.1785,0.4805 -0.453,0.8511 -0.2746,0.357 -0.5491,0.5629 -0.2883,0.1922 -0.4805,0.1922 l -0.1784,-0.4256 h 1.0021 q 0.3569,0 0.604,0.2334 0.2334,0.2334 0.2334,0.5903 0,0.3569 -0.2334,0.5903 -0.2334,0.2333 -0.604,0.2333 h -8.621 q -0.3569,0 -0.5902,-0.2333 -0.2471,-0.2334 -0.2471,-0.5903 0,-0.3569 0.2471,-0.5903 0.2333,-0.2334 0.5902,-0.2334 h 3.4869 l -0.1236,0.2334 q -0.1785,0 -0.4255,-0.1922 -0.2609,-0.1922 -0.508,-0.5217 -0.2608,-0.3294 -0.4255,-0.755 -0.1648,-0.4393 -0.1648,-0.9197 z m 1.5101,0.2059 q 0,0.604 0.302,1.057 0.302,0.453 0.8236,0.7139 0.508,0.2471 1.1669,0.2471 0.6452,0 1.1806,-0.2471 0.5216,-0.2609 0.8236,-0.7139 0.302,-0.453 0.302,-1.057 0,-0.604 -0.302,-1.0433 -0.302,-0.453 -0.8236,-0.7001 -0.5354,-0.2608 -1.1806,-0.2608 -0.6589,0 -1.1669,0.2608 -0.5216,0.2471 -0.8236,0.7001 -0.302,0.4393 -0.302,1.0433 z m 6.1088,8.169 q 0,1.1668 -0.4805,2.0317 -0.4942,0.8511 -1.3316,1.3178 -0.8374,0.453 -1.8944,0.453 -1.2355,0 -2.1003,-0.4942 -0.8786,-0.5079 -1.3453,-1.3178 -0.4668,-0.8099 -0.4668,-1.716 0,-0.7001 0.2883,-1.3178 0.2883,-0.6315 0.7962,-1.1119 0.4942,-0.4805 1.1531,-0.7551 0.659,-0.2882 1.4003,-0.2882 0.3294,0.014 0.5353,0.2608 0.206,0.2471 0.206,0.5765 v 5.244 l -1.3728,0.4118 v -5.038 l 0.2745,0.302 h -0.3706 q -0.3981,0.027 -0.7138,0.2883 -0.3158,0.2471 -0.4942,0.6314 -0.1922,0.3707 -0.1922,0.7962 0,0.4119 0.1098,0.7688 0.1098,0.3569 0.3706,0.6177 0.2609,0.2609 0.7002,0.4119 0.4392,0.151 1.1119,0.151 0.7413,0 1.2629,-0.302 0.508,-0.3158 0.7825,-0.7962 0.2608,-0.4942 0.2608,-1.0433 0,-0.508 -0.082,-0.81 -0.082,-0.302 -0.1922,-0.4804 -0.1236,-0.1922 -0.2059,-0.3432 -0.1236,-0.2471 -0.1236,-0.4668 0,-0.302 0.2059,-0.4942 0.2059,-0.2059 0.4805,-0.2059 0.3706,0 0.6726,0.3844 0.3021,0.3569 0.5354,1.0021 0.2197,0.6452 0.2197,1.3316 z m -7.4816,5.4715 q 0,-0.3157 0.2471,-0.5491 0.2334,-0.2334 0.604,-0.2334 0.096,0 0.1785,0.014 0.069,0.014 0.1373,0.041 l 5.6557,2.1003 q 0.2746,0.096 0.4256,0.3432 0.1373,0.2471 0.096,0.5216 -0.027,0.4668 -0.5217,0.7001 l -3.9123,1.3591 0.014,-0.357 3.8986,1.2767 q 0.4942,0.2334 0.5217,0.7001 0.041,0.2608 -0.096,0.5217 -0.151,0.2471 -0.4256,0.3432 l -5.6557,2.1003 q -0.151,0.055 -0.3158,0.055 -0.3294,0 -0.5903,-0.2196 -0.2608,-0.2197 -0.2608,-0.6041 0,-0.2608 0.1236,-0.4667 0.1235,-0.2059 0.3981,-0.2883 l 4.5026,-1.661 -0.027,0.3432 -3.3908,-1.2492 q -0.5079,-0.2197 -0.5079,-0.7551 0,-0.302 0.1373,-0.453 0.1236,-0.1647 0.3706,-0.2608 l 3.3908,-1.2492 0.055,0.4118 -4.5301,-1.6885 q -0.5217,-0.1647 -0.5217,-0.7962 z")

    wdesign_path_mob.fill('#442b3eff')
    wdesign_path_mob.move(screen_width_in_px/2-wdesign_path_mob.bbox().width/2,screen_height/4.5)
    //wdesign_path_mob.rotate(-90)
    wdesign_path_mob.scale(2.6)
    wdesign_path_mob.attr({
        id:     'wdesign_path_mob',
    })
    wdesign_path_mob_gr.attr({
        id:    "wdesign_path_mob_gr",
        opacity: 0.0,
        x: screen_width_in_px+200
    })
    var design__mobile_info = {
        "wdesign_path_mob_gr":   wdesign_path_mob_gr,
        "line_symbol":     line_symbol,
        "star_symbol":     star_symbol,
        "background_img__gr": background_img__gr,
        "menu_rect_gr":       menu_rect_gr
    }

    return design__mobile_info;
}

function artist_portfolio__mobile(parent_gr, screen_width_in_px, screen_height){
    var artist_portfolio__mobile__gr = parent_gr.nested().attr({id: 'artist_portfolio__mobile__gr'})
    var column_info_first_mobile = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT

                "draw_fn": function(artist_portfolio__mobile__gr){
                    var rect_height = screen_height/1.15
                    var rect_width  = screen_width_in_px-40

                    var top_gr    = artist_portfolio__mobile__gr.nested()
                    var top_rect  = top_gr.rect(rect_width,rect_height/6)
                    .attr({
                        id:      "top",
                        fill:    "#fff",
                        opacity: 1.0,
                        x:20
                    })
                    var left_top_text  = top_gr.text(function(add){
                        add.tspan("Type: Portfolio").newLine().dx("20")
                        add.tspan('Link: www.artist_portfolio.com').newLine().dx("20")
                    })
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   16,
                          fill:   '#000',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: top_gr.bbox().height/2-left_top_text.bbox().height/2+5
                        })

                    var middle__gr   = artist_portfolio__mobile__gr.nested()
                    var middle_rect  = middle__gr.rect(rect_width,rect_height/1.63)
                        .attr({
                            id:      "middle_rect",
                            x:       20,
                            y: top_rect.bbox().height,
                            fill:   '#fff',
                            opacity: 1.0
                        })
                    var artist_image_url = './../portfolio-app-media/media/art_1.png'
                    fit_image_inside_rect(middle__gr, artist_image_url, screen_width_in_px-60, rect_height/1.63, 30, rect_height/6, 0, 0)
    
                    //paragraph on bottom
                    var bottom__gr = artist_portfolio__mobile__gr.nested()

                    var bottom = bottom__gr.rect(rect_width,rect_height/4.5)
                        .attr({
                            opacity: 1.0,
                            id:      "bottom",
                            fill:    "#fff", 
                            x:       20,
                            y:       rect_height-rect_height/4.5
                    })

                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine().dx("20")
                        add.tspan('responsive and contain my architectural ').newLine().dx("20")
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration, ').newLine()
                        add.tspan('aspiration...').newLine().dx("120")
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  500,
                            fill:    '#000',
                            family:  'Quicksand',
                            size:    14
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width-paragraph.bbox().width+10,
                        y: rect_height-rect_height/5
                    }) 

                },    
                "activate_fn": function(artist_portfolio__mobile__gr){
                   

                }, 
                "deactivate_fn": function(artist_portfolio__mobile__gr){

                },     
                "width": screen_width_in_px-40,           
                "height":screen_height/1.15,                              //shadow height
                "color": "#204c39",
                "element_number_color": "#651b40ff",
                "element_number": "1"
            }

        ]

    }
    
    create_info_column__mobile(artist_portfolio__mobile__gr, screen_height, screen_width_in_px, 0, 70, column_info_first_mobile);

}


function suprematism__mobile(parent_gr, screen_width_in_px, screen_height){
    var suprematism__gr = parent_gr.nested().attr({id: 'suprematism__gr'})

    var column_info_second_mobile = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "draw_fn": function(suprematism__gr){
                    var rect_height = screen_height/1.15
                    var rect_width  = screen_width_in_px-40

                    var top_gr   = suprematism__gr.nested()
                    var top_rect = top_gr.rect(rect_width,rect_height/6)
                    .attr({
                        id:      "top",
                        fill:    "#fff",
                        opacity: 1.0,
                        x: 20
                    })
                    var left_top_text  = top_gr.text(function(add){
                        add.tspan("Type: Suprematism").newLine().dx("15")
                        add.tspan('Link:').dx("15").newLine()
                        add.tspan('www.suprematism.com').dx("15")
                    })
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   16,
                          fill:   '#000',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: top_gr.bbox().height/2-left_top_text.bbox().height/2+5
                        })

                    var middle__gr   = suprematism__gr.nested()
                    var middle_rect  = middle__gr.rect(rect_width,rect_height/1.63)
                        .attr({
                            id:      "middle_rect",
                            x:       20,
                            y: top_rect.bbox().height,
                            fill:   '#fff',
                            opacity: 1.0
                        })
                    var suprematism_image = './../portfolio-app-media/media/sup_3.png'
                    fit_image_inside_rect(middle__gr, suprematism_image, screen_width_in_px-60, rect_height/1.63, 30, rect_height/6, 0, 0)

                    //paragraph on bottom
                    var bottom__gr = suprematism__gr.nested()

                    var bottom = bottom__gr.rect(rect_width,rect_height/4.5)
                        .attr({
                            opacity: 1.0,
                            id:      "bottom",
                            fill:    "#fff", 
                            x:       20,
                            y:       rect_height-rect_height/4.5
                    })

                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine().dx("20")
                        add.tspan('responsive and contain my architectural ').newLine().dx("20")
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration, ').newLine()
                        add.tspan('aspiration...').newLine().dx("120")
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  500,
                            fill:    '#000',
                            family:  'Quicksand',
                            size:    14
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width-paragraph.bbox().width+10,
                        y: rect_height-rect_height/5
                    }) 

                },    
                "activate_fn": function(suprematism__gr){
                   

                }, 
                "deactivate_fn": function(suprematism__gr){

                },     
                "width": screen_width_in_px-40,           
                "height":screen_height/1.15,    
                "color":                "#204c39",
                "element_number_color": "#651b40ff",
                "element_number":       "2"
            }

        ]

    }

    create_info_column__mobile(suprematism__gr, screen_height, screen_width_in_px, 0, 70, column_info_second_mobile);
}

function deep_blue__mobile(parent_gr, screen_width_in_px, screen_height){
    var deep_blue__gr = parent_gr.nested().attr({id: 'deep_blue__gr'})
    
    var column_info_deep_blue_mobile = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
 
                "draw_fn": function(deep_blue__gr){
                    var rect_height = screen_height/1.15
                    var rect_width  = screen_width_in_px-40

                    var top_gr   = deep_blue__gr.nested()
                    var top_rect = top_gr.rect(rect_width,rect_height/6)
                    .attr({
                        id:      "top",
                        fill:    "#fff",
                        opacity: 1.0,
                        x: 20
                    })
                    var left_top_text  = top_gr.text(function(add){
                        add.tspan("Type: Deep Blue").newLine().dx("15")
                        add.tspan('Link:').dx("15").newLine()
                        add.tspan('www.deep_blue.com').dx("15")
                    })
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   16,
                          fill:   '#000',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: top_gr.bbox().height/2-left_top_text.bbox().height/2+5
                        })

                    var middle__gr   = deep_blue__gr.nested()
                    var middle_rect  = middle__gr.rect(rect_width,rect_height/1.63)
                        .attr({
                            id:      "middle_rect",
                            x:       20,
                            y: top_rect.bbox().height,
                            fill:   '#fff',
                            opacity: 1.0
                        })
                    var deep_blue_img = './../portfolio-app-media/media/deep_blue_0.png'
                    fit_image_inside_rect(middle__gr, deep_blue_img, screen_width_in_px-60, rect_height/1.63, 30, rect_height/6, 0, 0)
        
                    //paragraph on bottom
                    var bottom__gr = deep_blue__gr.nested()

                    var bottom = bottom__gr.rect(rect_width,rect_height/4.5)
                        .attr({
                            opacity: 1.0,
                            id:      "bottom",
                            fill:    "#fff", 
                            x:       20,
                            y:       rect_height-rect_height/4.5
                    })

                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine().dx("20")
                        add.tspan('responsive and contain my architectural ').newLine().dx("20")
                        add.tspan('models that were hand-made in my free time,').newLine()
                        add.tspan('and there are also images of my inspiration, ').newLine()
                        add.tspan('aspiration...').newLine().dx("120")
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  500,
                            fill:    '#000',
                            family:  'Quicksand',
                            size:    14
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width-paragraph.bbox().width+10,
                        y: rect_height-rect_height/5
                    }) 

                },    
                "activate_fn": function(deep_blue__gr){
                }, 
                "deactivate_fn": function(deep_blue__gr){

                },     
                "width": screen_width_in_px-40,           
                "height":screen_height/1.15,    
                "color":                "#204c39",
                "element_number_color": "#651b40ff",
                "element_number":       "3"
            }

        ]

    }
    
    create_info_column__mobile(deep_blue__gr, screen_height, screen_width_in_px, 0, 70, column_info_deep_blue_mobile);
}

function web_design_video__mobile(parent_gr, screen_width_in_px, screen_height){

    var video_gr = parent_gr.nested()
    .attr({
        height: screen_height
    })

    var video_global_height = 200
    var video_gr_y = video_gr.bbox().y;

    var video_global_x = video_gr.x()
    var video_global_y = video_gr_y

    $("#web_design__mobile #video__info").append(`
        <div id="video_mobile__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/web_design_mobile_top.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/web_design_mobile_middle.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/web_design_mobile_bottom.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#web_design__mobile #video__info").find("#video_mobile__container").css({
        opacity: 0.6
    });

    $("#web_design__mobile #video__info").find("#video__a").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+50,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#web_design__mobile #video__info").find("#video__b").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#web_design__mobile #video__info").find("#video__c").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+350,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}

function web_design_top__animate(design__mobile_info, screen_width_in_px, screen_height){
    var wdesign_path_mob_gr   = design__mobile_info["wdesign_path_mob_gr"];
    var line_symbol     = design__mobile_info["line_symbol"];
    var star_symbol     = design__mobile_info["star_symbol"];
    var background_img__gr = design__mobile_info["background_img__gr"];
    var menu_rect_gr       = design__mobile_info["menu_rect_gr"];

    line_symbol.animate({
        duration: 400,
    }).attr({
        opacity: 1.0
    })    
    
    star_symbol.animate({
        duration: 400,
    }).attr({
        opacity: 1.0
    })

    wdesign_path_mob_gr.animate({
        delay: 200,
        duration: 500,
    }).ease(">")
    .attr({
        opacity: 1.0,
        x: 0
    })

    background_img__gr.animate({
        delay: 400,
        duration: 500,
    }).ease(">")
    .attr({
        y: screen_height/2-80,
        x: screen_width_in_px-background_img__gr.bbox().width
    })

}
