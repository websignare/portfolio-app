/*$(document).ready(function(){
    main();
})*/

function web_design__main() {
    web_design__activate(bar_gr);
    
    $(window).resize(function() {
        
        web_design__deactivate();

        web_design__activate(bar_gr);
    });
}

// ACTIVATE
function web_design__activate(bar_gr) {

    var screen_width_in_px  = window.innerWidth;
    var screen_height = window.innerHeight;
    
    document.title = "web design"
    window.history.pushState({page: "web_design"},"", "#web_design");

    $("body").append(`
        <div id="web_design">
            <div id="wd_wrapper">
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

    var design__desktop_info = web_design_create_responsive(bar_gr);
   design_animate__activate(design__desktop_info, screen_width_in_px, screen_height)
    current_page = "web_design";

}

// DEACTIVATE
function web_design__deactivate() {

    $("#web_design").remove();
    $("#wd_wrapper").remove();
    $("#contact_wrapper").remove();


    remove_triggers("artist_canvas__trigger") // contact_canvas TRIGGER*/
    remove_triggers("suprematism_canvas__trigger")
    remove_triggers("deep_blue_canvas__trigger")

}
    
function web_design_create_responsive(bar_gr) {

    var screen_width_in_px  = window.innerWidth;
    var screen_height = window.innerHeight;

    $("#web_design #wd_wrapper").css({                    
        "background-color": '#ece8e7f3',
        "position":         "relative",
        "height":           screen_height+screen_height/5,
        "width":            screen_width_in_px
    }); 

    $("#web_design #headline__info").css({                    
        "background-color": '#442b3eff',
        "position":         "relative",
        "height":           screen_height/2.5,
        "width":            screen_width_in_px
    }); 

    $("#web_design #artist_portfolio__info").css({                    
        "background-color": '#442b3eff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 
    var current_scroll_y = window.scrollY;

    var bounding_rect        = $("#web_design #artist_portfolio__info").get(0).getBoundingClientRect()
    var artist__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);



    $("#web_design #suprematism__info").css({                    
        "background-color": '#442b3eff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect         = $("#web_design #suprematism__info").get(0).getBoundingClientRect()
    var suprematism__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);


    $("#deep_blue__info").css({                    
        "background-color": '#442b3eff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var bounding_rect        = $("#web_design #deep_blue__info").get(0).getBoundingClientRect()
    var deep_blue__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left); 

    $("#web_design #video__info").css({                    
        "background-color": '#2e1428ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var container                      = SVG().addTo("#web_design #wd_wrapper").size(screen_width_in_px, screen_height+screen_height/5)
    var container_gr                   = container.nested()   

    var headline_container             = SVG().addTo("#web_design #headline__info").size(screen_width_in_px, screen_height/2.5)
    var headline__container_gr         = headline_container.nested()

    var artist_portfolio__container    = SVG().addTo("#web_design #artist_portfolio__info").size(screen_width_in_px, screen_height)
    var artist_portfolio__container_gr = artist_portfolio__container.nested()
    artist_portfolio__container_gr.attr({opacity: 0.5, y: -20})   
  
    var suprematism__container         = SVG().addTo("#web_design #suprematism__info").size(screen_width_in_px, screen_height)
    var suprematism__container_gr      = suprematism__container.nested()   
    suprematism__container_gr.attr({opacity: 0.5, y: -20})   

    var deep_blue__container           = SVG().addTo("#web_design #deep_blue__info").size(screen_width_in_px, screen_height)
    var deep_blue__container_gr        = deep_blue__container.nested()  
    deep_blue__container_gr.attr({opacity: 0.5, y: -20})   
    
    var video__container               = SVG().addTo("#web_design #video__info").size(screen_width_in_px, screen_height)
    var video__container_gr            = video__container.nested()  

    //------------------DEVICES--------------------------//
    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        //var layout_tablet_gr = create_background__tablet(container_gr, screen_width_in_px, screen_height)
        //var background_white_tablet_gr = layout_tablet_gr.findOne('#background_white_tablet_gr')
        //section_images__tablet(background_white_tablet_gr, screen_width_in_px, screen_height)
        //create_text__tablet(container_gr, wd_wrapperscreen_width_in_px, screen_height)
        //buttons_tablet(container_gr, screen_height, screen_width_in_px)
        //create_contact_section(contact_gr, screen_width_in_px)

    }

    else {
        var web_design__layout_gr = web_design__intro_section__desktop(container_gr, bar_gr, screen_width_in_px, screen_height)
        var web_design__background_gr = web_design__layout_gr.find("#web_design__background_gr")
        var design__top_rects = web_design__images__desktop(web_design__background_gr, screen_width_in_px, screen_height)

        var design_text_info = web_design_text__desktop(container_gr, screen_width_in_px, screen_height)

        web_design__headline__info(headline__container_gr, screen_width_in_px, screen_height)
        artist_portfolio(artist_portfolio__container_gr, screen_width_in_px, screen_height)
        suprematism(suprematism__container_gr, screen_width_in_px, screen_height)
        deep_blue(deep_blue__container_gr, screen_width_in_px, screen_height)
        video__section(video__container_gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)
    }
    // INTRO__SCROLL_TRIGGER
    var trigger_y_position__artist_canvas = artist__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__artist_canvas,
        "artist_canvas__trigger",
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
    var trigger_y_position__suprematism_canvas = suprematism__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__suprematism_canvas,
        "suprematism_canvas__trigger",
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
    var trigger_y_position__deep_blue_canvas = deep_blue__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__deep_blue_canvas,
        "deep_blue_canvas__trigger",
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
        var design__desktop_info = {
            "design__top_rects": design__top_rects,
            "design_text_info":  design_text_info
        }

        return design__desktop_info
    
}


//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function web_design__intro_section__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#442b3eff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#442b3eff', linecap: 'round' })


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
function web_design_text__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested().attr({height: screen_height+screen_height/5,id: 'text_gr'})
    //---------------------------SYMBOL----------------------------------
    var line_symbol_gr = text_gr.nested()  

    var line_symbol = line_symbol_gr.path("m 718.26735,-1505.9353 q -3.66386,0 -7.54322,-3.0173 -3.87939,-3.0173 -3.87939,-7.7587 0,-2.5863 1.29313,-5.1725 l 87.5014,-179.0977 q 1.50865,-3.0173 4.0949,-4.7415 2.58625,-1.7242 5.38802,-1.7242 3.66385,0 7.32771,3.0173 3.87936,2.8018 3.87936,7.7588 0,2.5862 -1.29312,5.1725 l -87.28588,179.0977 q -1.50865,3.0173 -4.09489,4.7414 -2.37073,1.7242 -5.38802,1.7242 z")
    line_symbol_gr.css( "position", "fixed")

    line_symbol.fill('#d2d1d1ff')
    line_symbol.move(line_symbol.bbox().width-40,screen_height/2+10)
    //line_symbol.rotate(180)
    line_symbol.scale(4)
    line_symbol.attr({id: 'line_symbol'})

    line_symbol_gr.attr({
        id: "line_symbol_gr"
    })

    var star_symbol_gr = text_gr.nested()  

    var star_symbol = star_symbol_gr.path("m 863.95336,-1599.7951 q -3.15714,0 -5.18672,-2.2551 -1.80407,-2.255 -1.57856,-5.6377 l 2.02958,-17.8152 q 0.2255,-0.6766 -0.2255,-0.9021 -0.45102,-0.2255 -1.12756,0.2255 l -14.6581,10.599 q -2.70611,2.0296 -5.63773,1.5786 -2.93162,-0.6766 -4.73569,-3.6082 -2.02959,-3.6081 -0.90205,-6.3143 1.35306,-2.7061 4.28468,-3.8336 l 16.46218,-7.4418 q 0.67654,-0.2255 0.67654,-0.6766 0,-0.451 -0.67654,-0.6765 l -16.46218,-7.4418 q -3.15712,-1.353 -4.05916,-4.2847 -0.90204,-2.9316 0.67653,-5.8632 1.80407,-2.9316 4.73569,-3.3826 2.93162,-0.6766 5.63773,1.1275 l 14.6581,10.8244 q 0.67654,0.4511 1.12756,0.2256 0.451,-0.2256 0.2255,-0.9021 l -2.02958,-17.8152 q -0.22551,-3.3826 1.80408,-5.6377 2.02958,-2.2551 5.41222,-2.2551 3.15712,0 5.18671,2.2551 2.02959,2.2551 1.57857,5.6377 l -2.02958,17.8152 q -0.22552,0.6765 0.22549,0.9021 0.45103,0.2255 1.12755,-0.2256 l 14.65811,-10.5989 q 2.70612,-2.0296 5.63774,-1.353 3.15713,0.451 4.73568,3.3826 2.0296,3.6082 0.67654,6.3143 -1.12755,2.7061 -4.05917,3.8336 l -16.46218,7.4418 q -0.67653,0.2255 -0.67653,0.6765 0,0.4511 0.67653,0.6766 l 16.46218,7.4418 q 3.15713,1.353 4.05917,4.2847 1.12754,2.9316 -0.67654,5.8632 -1.57855,2.9316 -4.73568,3.6082 -2.93162,0.451 -5.63774,-1.3531 l -14.65811,-10.8245 q -0.67652,-0.451 -1.12755,-0.2255 -0.45101,0.2255 -0.22549,0.9021 l 2.02958,17.8152 q 0.45102,3.3827 -1.80409,5.6377 -2.02957,2.2551 -5.41221,2.2551 z")
    star_symbol_gr.css( "position", "fixed")

    star_symbol.fill('#d2d1d1ff')
    star_symbol.move(screen_width_in_px/3-star_symbol.bbox().width-50,screen_height/2+star_symbol.bbox().height+40)
    //star_symbol.rotate(180)
    star_symbol.scale(4.5)
    star_symbol.attr({id: 'star_symbol'})

    star_symbol_gr.attr({
        id: "star_symbol_gr"
    })

     /*// SYMBOL ROTATION
     function rotatePositive() {
        star_symbol.animate({duration: 9000}).ease("<>").rotate(180)
        line_symbol.animate({duration: 4000}).ease("<").rotate(10).after(rotateNegative)
      }
      
    function rotateNegative() {
        line_symbol.animate({duration: 4000}).ease(">").rotate(-10).after(rotatePositive)
    }
      
    rotatePositive()*/

    //---------------PARAGRAPH------------------------

    var paragraph = text_gr.text(function(add){
            add.tspan('Creativity is inventing, experimenting, ').newLine()
            add.tspan('growing, taking risk, breaking rules, ').newLine()
            add.tspan('making mistakes and having fun.').newLine() 
            add.tspan('').newLine()
            add.tspan('-Mary Lou Cook').newLine().dx(250).font({size:'1rem'})
        })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#442b3eff',
            family:  'Open Sans',
            size:    "1.2rem"
        })    
    paragraph.attr({
        opacity:0.0,
        x: screen_width_in_px/2-paragraph.bbox().width-700,
        y: screen_height/2+paragraph.bbox().height-20
    })  
    //---------------------WEB-DESIGN-TITLE--------------------
    var wdesign_path__gr = text_gr.nested()
    var wdesign_path = wdesign_path__gr.path("m -1750.9466,999.78361 q 2.3497,0 3.5562,0.98429 1.2384,0.9843 1.6829,2.6354 0.4763,1.6194 0.4763,3.6198 v 8.1285 q 0,0.8256 -0.5398,1.3971 -0.5398,0.5398 -1.3653,0.5398 -0.8256,0 -1.3654,-0.5398 -0.5398,-0.5715 -0.5398,-1.3971 v -8.1285 q 0,-1.0478 -0.2857,-1.8734 -0.2541,-0.8573 -0.9526,-1.3653 -0.6986,-0.5081 -2.0004,-0.5081 -1.2701,0 -2.1591,0.5081 -0.8573,0.508 -1.3336,1.3653 -0.4445,0.8256 -0.4445,1.8734 v 8.1285 q 0,0.8256 -0.5398,1.3971 -0.5398,0.5398 -1.3654,0.5398 -0.8255,0 -1.3653,-0.5398 -0.5398,-0.5715 -0.5398,-1.3971 v -13.1136 q 0,-0.8255 0.5398,-1.3653 0.5398,-0.5716 1.3653,-0.5716 0.8256,0 1.3654,0.5716 0.5398,0.5398 0.5398,1.3653 v 1.3653 l -0.4763,-0.095 q 0.2857,-0.5398 0.8255,-1.1431 0.5398,-0.635 1.2701,-1.1748 0.7303,-0.5398 1.6511,-0.8573 0.9208,-0.34929 2.0004,-0.34929 z m -22.284,0 q 1.3336,0 2.4449,0.41279 1.1113,0.4128 1.9051,1.0478 0.8256,0.635 1.2701,1.3018 0.4763,0.6351 0.4763,1.0796 l -0.8256,0.4128 v -2.3179 q 0,-0.8256 0.5398,-1.3654 0.5398,-0.57149 1.3654,-0.57149 0.8255,0 1.3653,0.53979 0.5398,0.5398 0.5398,1.3971 v 14.1297 q 0,2.7624 -1.2066,4.4135 -1.1748,1.6829 -3.1117,2.4132 -1.9369,0.762 -4.1595,0.762 -0.6351,0 -1.6511,-0.1587 -1.0161,-0.1588 -1.9369,-0.3811 -0.9208,-0.2222 -1.3971,-0.4127 -0.9526,-0.4128 -1.3336,-1.0479 -0.3493,-0.6033 -0.127,-1.3018 0.2858,-0.9208 0.9208,-1.2701 0.6351,-0.3175 1.3336,-0.063 0.3175,0.095 1.0478,0.381 0.7303,0.2858 1.5876,0.5081 0.8891,0.254 1.5559,0.254 2.3814,0 3.5245,-0.9526 1.143,-0.9525 1.143,-2.6354 v -2.7624 l 0.3811,0.2857 q 0,0.4128 -0.4446,1.0161 -0.4127,0.5715 -1.1748,1.1431 -0.7303,0.5715 -1.7464,0.9843 -1.016,0.381 -2.1591,0.381 -2.2544,0 -4.0643,-1.1113 -1.8098,-1.1431 -2.8577,-3.1117 -1.0478,-2.0004 -1.0478,-4.5723 0,-2.6037 1.0478,-4.5723 1.0479,-2.0004 2.826,-3.1117 1.7781,-1.14309 3.969,-1.14309 z m 0.6033,3.49269 q -1.4289,0 -2.5084,0.6986 -1.0796,0.6985 -1.6829,1.9051 -0.6033,1.2066 -0.6033,2.7307 0,1.4923 0.6033,2.6989 0.6033,1.2066 1.6829,1.9051 1.0795,0.6986 2.5084,0.6986 1.4606,0 2.5402,-0.6986 1.0795,-0.6985 1.6828,-1.9051 0.6033,-1.2066 0.6033,-2.6989 0,-1.5241 -0.6033,-2.7307 -0.6033,-1.2066 -1.6828,-1.9051 -1.0796,-0.6986 -2.5402,-0.6986 z m -11.4094,11.8753 q 0,0.8256 -0.5398,1.3971 -0.5398,0.5398 -1.3654,0.5398 -0.8255,0 -1.3653,-0.5398 -0.5398,-0.5715 -0.5398,-1.3971 v -13.1136 q 0,-0.8255 0.5398,-1.3653 0.5398,-0.5716 1.3653,-0.5716 0.8256,0 1.3654,0.5716 0.5398,0.5398 0.5398,1.3653 z m -1.9369,-17.11435 q -1.0796,0 -1.5241,-0.34928 -0.4445,-0.34927 -0.4445,-1.23833 v -0.60329 q 0,-0.92081 0.4762,-1.23833 0.5081,-0.34927 1.5241,-0.34927 1.1114,0 1.5559,0.34927 0.4445,0.34927 0.4445,1.23833 v 0.60329 q 0,0.92081 -0.4763,1.27008 -0.4762,0.31753 -1.5558,0.31753 z m -17.9533,16.41585 q -0.3176,-0.4446 -0.2858,-1.1431 0.032,-0.6985 0.8255,-1.2066 0.5081,-0.3175 1.0796,-0.254 0.5716,0.032 1.1113,0.5715 0.9208,0.9209 1.9369,1.4289 1.0161,0.508 2.5402,0.508 0.4763,-0.032 1.0478,-0.127 0.5715,-0.127 0.9843,-0.508 0.4445,-0.4128 0.4445,-1.2384 0,-0.6985 -0.4762,-1.1113 -0.4763,-0.4128 -1.2701,-0.6985 -0.7621,-0.2858 -1.7146,-0.5398 -0.9843,-0.2858 -2.0322,-0.635 -1.016,-0.3493 -1.8733,-0.8891 -0.8573,-0.5715 -1.3971,-1.4924 -0.5398,-0.9208 -0.5398,-2.3179 0,-1.5876 0.889,-2.6989 0.8891,-1.1113 2.2862,-1.7146 1.4288,-0.60329 2.9847,-0.60329 0.9843,0 2.0639,0.25399 1.0795,0.2223 2.0639,0.7621 0.9843,0.508 1.6511,1.3653 0.3492,0.4763 0.4127,1.1431 0.063,0.6668 -0.6032,1.2066 -0.4763,0.381 -1.1114,0.3492 -0.635,-0.063 -1.0478,-0.4445 -0.5398,-0.6985 -1.4606,-1.1113 -0.889,-0.4128 -2.0639,-0.4128 -0.4763,0 -1.0478,0.127 -0.5398,0.095 -0.9526,0.4763 -0.4127,0.3493 -0.4127,1.1431 0,0.7303 0.4763,1.1748 0.4762,0.4128 1.27,0.6986 0.8256,0.254 1.7464,0.508 0.9526,0.254 1.9369,0.6033 0.9843,0.3493 1.8098,0.9208 0.8256,0.5715 1.3336,1.4923 0.5081,0.8891 0.5081,2.2862 0,1.6193 -0.9526,2.7624 -0.9526,1.1431 -2.3814,1.7464 -1.4288,0.5715 -2.9212,0.5715 -1.8734,0 -3.7467,-0.635 -1.8734,-0.6668 -3.1117,-2.3179 z m -9.5917,2.9529 q -2.6989,0 -4.6993,-1.1113 -1.9686,-1.1431 -3.0482,-3.08 -1.0478,-1.9368 -1.0478,-4.3817 0,-2.8577 1.1431,-4.8581 1.1748,-2.0321 3.0482,-3.1117 1.8734,-1.07959 3.969,-1.07959 1.6194,0 3.0482,0.66679 1.4606,0.6668 2.5719,1.8416 1.1113,1.1431 1.7464,2.6672 0.6668,1.5241 0.6668,3.2387 -0.032,0.7621 -0.6033,1.2383 -0.5715,0.4763 -1.3336,0.4763 h -12.1293 l -0.9526,-3.1752 h 11.6531 l -0.6986,0.6351 v -0.8573 q -0.063,-0.9209 -0.6668,-1.6512 -0.5715,-0.7303 -1.4606,-1.143 -0.8573,-0.4446 -1.8416,-0.4446 -0.9526,0 -1.7781,0.2541 -0.8256,0.254 -1.4289,0.8573 -0.6032,0.6033 -0.9525,1.6193 -0.3493,1.0161 -0.3493,2.5719 0,1.7147 0.6986,2.9212 0.7302,1.1749 1.8416,1.8099 1.143,0.6033 2.4131,0.6033 1.1749,0 1.8734,-0.1905 0.6986,-0.1905 1.1113,-0.4446 0.4446,-0.2857 0.7938,-0.4762 0.5716,-0.2858 1.0796,-0.2858 0.6985,0 1.1431,0.4763 0.4763,0.4763 0.4763,1.1113 0,0.8573 -0.8891,1.5559 -0.8256,0.6985 -2.3179,1.2383 -1.4924,0.508 -3.08,0.508 z m -20.9454,-22.54396 q 2.2861,0 4.0642,0.8573 1.7782,0.85731 2.9847,2.41316 1.2384,1.5241 1.8417,3.5562 0.635,2.0004 0.635,4.2866 0,3.0799 -1.1113,5.6201 -1.1113,2.5084 -3.2387,4.0008 -2.0957,1.4923 -5.1756,1.4923 h -7.5888 q -0.8255,0 -1.3971,-0.5398 -0.5397,-0.5715 -0.5397,-1.3971 v -18.35269 q 0,-0.82555 0.5397,-1.36534 0.5716,-0.57153 1.3971,-0.57153 z m -0.3175,18.57496 q 2.0003,0 3.2704,-1.0161 1.2701,-1.0478 1.8416,-2.7306 0.6033,-1.7146 0.6033,-3.715 0,-1.4924 -0.3492,-2.826 -0.3176,-1.3653 -1.0161,-2.3814 -0.6986,-1.04779 -1.7781,-1.65108 -1.0796,-0.60329 -2.5719,-0.60329 h -5.5567 l 0.3176,-0.28577 v 15.55854 l -0.1905,-0.3493 z m -29.3816,-13.65339 q 2.2226,0 3.969,1.14309 1.7781,1.1113 2.7942,3.0799 1.0478,1.9687 1.0478,4.5723 0,2.6037 -1.0478,4.6041 -1.0161,1.9686 -2.7625,3.1117 -1.7146,1.1113 -3.8737,1.1113 -1.2701,0 -2.3814,-0.4128 -1.1114,-0.4127 -1.9687,-1.0478 -0.8255,-0.635 -1.3018,-1.2701 -0.4445,-0.6668 -0.4445,-1.1113 l 0.9843,-0.4128 v 2.3179 q 0,0.8256 -0.5398,1.3971 -0.5398,0.5398 -1.3653,0.5398 -0.8256,0 -1.3654,-0.5398 -0.5398,-0.5397 -0.5398,-1.3971 v -19.94027 q 0,-0.82555 0.5398,-1.36534 0.5398,-0.57154 1.3654,-0.57154 0.8255,0 1.3653,0.57154 0.5398,0.53979 0.5398,1.36534 v 8.06507 l -0.5398,-0.2858 q 0,-0.4128 0.4445,-0.9843 0.4446,-0.6033 1.2066,-1.1748 0.7621,-0.6033 1.7464,-0.9844 1.016,-0.38099 2.1274,-0.38099 z m -0.4763,3.49269 q -1.3971,0 -2.4449,0.6986 -1.0479,0.6985 -1.6511,1.9051 -0.5716,1.1748 -0.5716,2.6989 0,1.4924 0.5716,2.7307 0.6032,1.2066 1.6511,1.9051 1.0478,0.6986 2.4449,0.6986 1.3971,0 2.4131,-0.6986 1.0479,-0.6985 1.6194,-1.9051 0.6033,-1.2383 0.6033,-2.7307 0,-1.5241 -0.6033,-2.6989 -0.5715,-1.2066 -1.6194,-1.9051 -1.016,-0.6986 -2.4131,-0.6986 z m -18.895,14.1297 q -2.6989,0 -4.6993,-1.1113 -1.9686,-1.1431 -3.0482,-3.08 -1.0478,-1.9368 -1.0478,-4.3817 0,-2.8577 1.143,-4.8581 1.1749,-2.0321 3.0482,-3.1117 1.8734,-1.07959 3.9691,-1.07959 1.6193,0 3.0482,0.66679 1.4606,0.6668 2.5719,1.8416 1.1113,1.1431 1.7463,2.6672 0.6668,1.5241 0.6668,3.2387 -0.032,0.7621 -0.6033,1.2383 -0.5715,0.4763 -1.3335,0.4763 h -12.1293 l -0.9526,-3.1752 h 11.653 l -0.6985,0.6351 v -0.8573 q -0.063,-0.9209 -0.6668,-1.6512 -0.5716,-0.7303 -1.4606,-1.143 -0.8573,-0.4446 -1.8416,-0.4446 -0.9526,0 -1.7782,0.2541 -0.8255,0.254 -1.4288,0.8573 -0.6033,0.6033 -0.9526,1.6193 -0.3492,1.0161 -0.3492,2.5719 0,1.7147 0.6985,2.9212 0.7303,1.1749 1.8416,1.8099 1.1431,0.6033 2.4132,0.6033 1.1748,0 1.8734,-0.1905 0.6985,-0.1905 1.1113,-0.4446 0.4445,-0.2857 0.7938,-0.4762 0.5715,-0.2858 1.0796,-0.2858 0.6985,0 1.143,0.4763 0.4763,0.4763 0.4763,1.1113 0,0.8573 -0.889,1.5559 -0.8256,0.6985 -2.3179,1.2383 -1.4924,0.508 -3.08,0.508 z m -11.9939,-22.63922 q 0.7303,0 1.3971,0.57154 0.6668,0.53978 0.6668,1.49235 0,0.28576 -0.095,0.63504 l -6.2552,18.41619 q -0.1905,0.5716 -0.6985,0.8891 -0.4763,0.2857 -1.0161,0.3175 -0.5398,0 -1.0796,-0.3175 -0.508,-0.3175 -0.7938,-0.9208 l -4.6993,-10.6687 0.2858,0.1905 -4.6358,10.4782 q -0.2858,0.6033 -0.8256,0.9208 -0.508,0.3175 -1.0478,0.3175 -0.508,-0.032 -1.0161,-0.3175 -0.508,-0.3175 -0.6985,-0.8891 l -6.2552,-18.41619 q -0.095,-0.34928 -0.095,-0.63504 0,-0.95257 0.6668,-1.49235 0.6985,-0.57154 1.4288,-0.57154 0.6033,0 1.1113,0.31752 0.5398,0.31752 0.7303,0.92081 l 5.0486,15.30449 -0.6985,-0.032 4.5088,-10.8275 q 0.254,-0.57153 0.7303,-0.88905 0.4762,-0.34928 1.0795,-0.31752 0.6033,-0.0318 1.0796,0.31752 0.4763,0.31752 0.6986,0.88905 l 4.1277,10.3512 -0.508,0.3175 4.9851,-15.11399 q 0.1905,-0.60329 0.7303,-0.92081 0.5398,-0.31752 1.143,-0.31752 z")
    wdesign_path__gr.attr({
        id:    "wdesign_path__gr",
    })
    wdesign_path.fill('#442b3eff')
    wdesign_path.move(screen_width_in_px/2-wdesign_path.bbox().width-300,text_gr.bbox().height-wdesign_path.bbox().height-25)
    //wdesign_path.rotate(-90)
    wdesign_path.scale(3.55)
    wdesign_path.attr({id: 'wdesign_path'})
   wdesign_path__gr.attr({x: -800, opacity: 0.0})

    var design_text_info = {
        "wdesign_path__gr": wdesign_path__gr,
        "paragraph":        paragraph,
    }
    console.log(design_text_info,"AGAGAGAGAAAAAAAAAAAAAGAGAGAGAGAGAO////////////////////******************/////////////////*********")
    return design_text_info;
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function web_design__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+120,
        height: screen_height+screen_height/5,
        x: screen_width_in_px/2-170
    })

    var rect_width = (screen_width_in_px/2)/6.7;
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
                'img_url':   './../portfolio-app-media/media/5.png',
                'height':     '300',
                'position_x': rect_width*3+45,
                'position_y': 160,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/6.png',
                'height':     '325',
                'position_x': rect_width*3+45,
                'position_y': 475,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/7.png',
                'height':     '410',
                'position_x': rect_width*4+60,
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
    var img_url_5 = images_data['elements_data'][5]['img_url']
    var img_url_6 = images_data['elements_data'][6]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']
    var height_6 = images_data['elements_data'][6]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];
    var position_x_6 = images_data['elements_data'][6]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];
    var position_y_6 = images_data['elements_data'][6]['position_y'];

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
    web_design__create_image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
    web_design__create_image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    var image_gr_6 = web_design__create_image(images_gr, img_url_6, rect_width, height_6, position_x_6, position_y_6, view_box_x, view_box_y)

    //////////////---------------------------------------------------////////////
    var rect_height = (screen_width_in_px/2)/6;
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
    var d_rect_width  = image_gr_6.width()
    var d_rect_height = image_gr_6.height()
    var d_rect_x      = image_gr_6.x()
    var d_rect_y      = image_gr_6.y()

    var d_rect = d_rect_gr.rect(d_rect_width,c_rect_height+500)
        .attr({
            fill: "#df7f77",
            x: d_rect_x,
            y: d_rect_y+c_rect_height*2
        })

    var design__top_rects = {
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

    return design__top_rects

}

function web_design__headline__info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
  
     var my_title = headline_gr.text(function(text_element){
          text_element.tspan('projects')
      })
          .font({
              opacity: 1.0,
              weight:  700,
              fill:    '#e07f6cf3',
              family:  'Quicksand',
              size:    "11vw"
          })    
      my_title.attr({
         x: 140,
         y: headline_gr.bbox().height/2+my_title.bbox().height/2+40
      })
  
}

function artist_portfolio(parent_gr, screen_width_in_px, screen_height){
    var artist_portfolio__gr = parent_gr.nested().attr({id: 'artist_portfolio__gr'})
    var artist_content       = artist_portfolio__gr.nested()
    var column_info_first = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(artist_portfolio__gr){
                    var rect_height = screen_height/1.2
                    var rect_width  = screen_width_in_px-280

                    var left_top_gr    = artist_portfolio__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#b5b5b5ff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Portfolio")
                        left_top_text.font({
                          family: 'Open Sans',
                          size:   42,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5vw'
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
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  600,
                            fill:    '#1f2d38ff',
                            family:  'Open Sans',
                            size:    "1.2vw"
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width/2-paragraph.bbox().width/2,
                        y: rect_height-rect_height/3+50
                    }) 

                },    
                "activate_fn": function(artist_portfolio__gr){
                   

                }, 
                "deactivate_fn": function(artist_portfolio__gr){

                },     
                "height":                screen_height/1.2,       
                "width":                 screen_width_in_px-280,                              //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "1"
            }

        ]

    }
    
    create_info_column(artist_portfolio__gr, screen_height, screen_width_in_px, 150, 0, column_info_first);

}

function suprematism(parent_gr, screen_width_in_px, screen_height){
    var suprematism__gr = parent_gr.nested().attr({id: 'suprematism__gr'})

    var column_info_second = {

        "title": "elements",

        "elements_data":[ 
            {
                //SECOND RECT
                "name":"second",
                "date":"tag_2",    
                "draw_fn": function(suprematism__gr){
                    //element_number
                    var rect_height = screen_height/1.2
                    var rect_width  = screen_width_in_px-280                             //shadow height

                    var right_middle__gr = suprematism__gr.nested()
                    right_middle__gr.attr({ 
                        x: rect_width/2,
                        y: rect_height/3
                    }) 

                    var middle_left = right_middle__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({
                            id: "middle_left",
                            x: 10,
                            y: 0,
                            id: "left"
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
                    var bottom__gr = suprematism__gr.nested()
                    bottom__gr.attr({ 
                        x: rect_width/2+10,
                        y: rect_height-rect_height/3+10
                    }) 

                    var bottom = bottom__gr.rect(rect_width/2-10,rect_height/3-10).fill("#fff")
                        .attr({id: "bottom",
                            x: 0,
                            y: 0,
                            opacity: 1.0
                    })

                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                    .font({
                        opacity: 1.0,
                        weight:  600,
                        fill:    '#7a0000ff',
                        family:  'Open Sans',
                        size:    "1.2vw"
                    })    
                    paragraph.attr({
                        x: bottom__gr.bbox().width/2-paragraph.bbox().width/2,
                        y: bottom__gr.bbox().height/2-paragraph.bbox().height/2
                    }) 

                    //var suprematism_image_url_0 = './media/suprematism_0.png'
                    //fit_image_inside_rect(bottom__gr, suprematism_image_url_0, rect_width/2, rect_height/3, 0, 0, 0, 0)

                    ////////////////////////////////////////////////////////////////////////                      
                    var right_top_gr = suprematism__gr.nested()
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
                        family: 'Open Sans',
                        size:    42,
                        fill:   '#7a0000ff',
                        anchor: 'right',
                        weight: '700',
                        leading:'1.5vw'
                    })
                    .attr({
                        x: right_top_rect.bbox().width/2-right_top_text.bbox().width/2,
                        y: right_top_rect.bbox().height/2-right_top_text.bbox().height
                    })

                    ////////////////////////////////////////////////////////////////////////////////////
                    var left_rect_gr = suprematism__gr.nested()
                    
                    var left_rect = left_rect_gr.rect(rect_width/2, rect_height)
                    .attr({
                        fill:    "#d45f00",
                        opacity: 1.0
                    })
                    
                   var suprematism_image_url = './../portfolio-app-media/media/suprematism_1.png'
                   fit_image_inside_rect(left_rect_gr, suprematism_image_url, rect_width/2, rect_height, 0, 0, 0, 0)

                },    
                "activate_fn": function(suprematism__gr){
                

                }, 
                "deactivate_fn": function(suprematism__gr){

                },     
                "height":  screen_height/1.2,       
                "width": screen_width_in_px-280,                             //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "2"
            }
        ]
    }

    create_info_column(suprematism__gr, screen_height, screen_width_in_px, 150, 0, column_info_second);
}

function deep_blue(parent_gr, screen_width_in_px, screen_height){
    var deep_blue__gr = parent_gr.nested().attr({id: 'deep_blue__gr'})

    var column_info_third = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(deep_blue__gr){
                    var rect_height = screen_height/1.2
                    var rect_width  = screen_width_in_px-280

                    var left_top_gr    = deep_blue__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#6f907fff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Small bussines")
                        left_top_text.font({
                          family: 'Open Sans',
                          size:   42,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5vw'
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
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  600,
                            fill:    '#1f2d38ff',
                            family:  'Open Sans',
                            size:    "1.2vw"
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
                "height":  screen_height/1.2,       
                "width": screen_width_in_px-280,                               //shadow height
                "color": "#350028ff",
                "element_number_color": "#d90f0f",
                "element_number": "1"
            }

        ]

    }

    create_info_column(deep_blue__gr, screen_height, screen_width_in_px, 150, 0, column_info_third);
}

function video__section(parent_gr, screen_width_in_px, screen_height){

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
        opacity: 0.5
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


function design_animate__activate(design__desktop_info, screen_width_in_px, screen_height){

    var wdesign_path__gr = design__desktop_info["design_text_info"]["wdesign_path__gr"]
    var paragraph        = design__desktop_info["design_text_info"]["paragraph"]
    var rect_height      = design__desktop_info["design__top_rects"]["rect_height"]
    var a_rect           = design__desktop_info["design__top_rects"]["a_rect"]
    var a_rect_y         = design__desktop_info["design__top_rects"]["a_rect_y"]
    var a_rect_height    = design__desktop_info["design__top_rects"]["a_rect_height"]
    var b_rect           = design__desktop_info["design__top_rects"]["b_rect"]
    var b_rect_y         = design__desktop_info["design__top_rects"]["b_rect_y"]
    var b_rect_height    = design__desktop_info["design__top_rects"]["b_rect_height"]
    var c_rect           = design__desktop_info["design__top_rects"]["c_rect"]
    var c_rect_y         = design__desktop_info["design__top_rects"]["c_rect_y"]
    var c_rect_height    = design__desktop_info["design__top_rects"]["c_rect_height"]
    var d_rect           = design__desktop_info["design__top_rects"]["d_rect"]
    var d_rect_y         = design__desktop_info["design__top_rects"]["d_rect_y"]
    var d_rect_height    = design__desktop_info["design__top_rects"]["d_rect_height"]

    wdesign_path__gr.animate({
        delay: 500,
        duration:500
    }).ease('>')
    .attr({x: 0, opacity: 1.0})
    paragraph.animate({
        delay: 400,
        duration:500
    }).ease('>')
    .attr({
        opacity: 1.0,
        x: screen_width_in_px/2-paragraph.bbox().width-200,
        y: screen_height/2+paragraph.bbox().height-20
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

