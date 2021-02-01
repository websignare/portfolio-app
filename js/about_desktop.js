/*$(document).ready(function(){
    about__main();
})*/

function about__main() {

    about__activate(bar_gr);

    $(window).resize(function() {
        
        about__deactivate();

        about__activate(bar_gr);
    });
}

// ACTIVATE
function about__activate(bar_gr) {

    document.title = "about"
    window.history.pushState({page: "about"},"", "#about");

    $("body").append(`

        <div id="about">
            <div id="about_wrapper">
            </div>
            <div id="intro__info">
            </div>
            <div id="history__info">
            </div>
            <div id="process__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    about__create_responsive(bar_gr);
    current_page = "about";

}

// DEACTIVATE
function about__deactivate() {

    $("#about").remove();
    $("#about #about_wrapper").remove();
    $("#hp #wrapper").remove();
    $("#contact_wrapper").remove();
    
    //REMOVE/CLEANUP TRIGGERS (for this page)
    remove_triggers("intro_canvas__trigger")
    remove_triggers("history_canvas__trigger")
    //remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/
}

function about__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    $("#about #about_wrapper").css({                    
        "background-color": '#d8d8d8ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#about #intro__info").css({                    
        "background-color": '#262626fe',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 
    var current_scroll_y = window.scrollY;

    var bounding_rect       = $("#about #intro__info").get(0).getBoundingClientRect()
    var intro__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#about #history__info").css({                    
        "background-color": '#262626fe',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 
    //getBoundingClientRect() gives local coordinates of VIEWPORT not global coordinates!
    //current_scroll_y gives y position of the viewport in Global coordinates!
    //therefor to get he global coordinates of "history_div" we have to add LOCAL coordinates
    //in the viewport to the Global coordinates of the viewport itself
    var bounding_rect         = $("#about #history__info").get(0).getBoundingClientRect()
    var history__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);


    $("#about #process__info").css({                    
        "background-color": '#262626fe',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    $("#about #video__info").css({                    
        "background-color": '#d28419ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //----------SVG_CANVASES-----------//
    var main_canvas     = SVG().addTo("#about #about_wrapper").size(screen_width_in_px, screen_height)
    var main_canvas__gr = main_canvas.nested()   
 

    var intro_canvas     = SVG().addTo("#about #intro__info").size(screen_width_in_px, screen_height)
    var intro_canvas__gr = intro_canvas.nested()   
    intro_canvas__gr.attr({opacity: 1.0})

    var history_canvas     = SVG().addTo("#about #history__info").size(screen_width_in_px, screen_height)
    var history_canvas__gr = history_canvas.nested()   
    history_canvas__gr.attr({opacity: 1.0})

    var process_canvas     = SVG().addTo("#about #process__info").size(screen_width_in_px, screen_height)
    var process_canvas__gr = process_canvas.nested()   

    var video_canvas     = SVG().addTo("#about #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //intro(main_canvas__gr, screen_width_in_px, screen_height)
        //nevena(main_canvas__gr, screen_width_in_px, screen_height)
        //web_design(main_canvas__gr, screen_width_in_px, screen_height)
        //web_development(main_canvas__gr, screen_width_in_px, screen_height)
        //animation(main_canvas__gr, screen_width_in_px, screen_height)
        //contact(main_canvas__gr, screen_width_in_px, screen_height)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        //var layout_tablet_gr = create_background__tablet(main_canvas__gr, screen_width_in_px, screen_height)
        //var background_white_tablet_gr = layout_tablet_gr.findOne('#background_white_tablet_gr')
        //section_images__tablet(background_white_tablet_gr, screen_width_in_px, screen_height)
        //create_text__tablet(main_canvas__gr, about_wrapperscreen_width_in_px, screen_height)
        //buttons_tablet(main_canvas__gr, screen_height, screen_width_in_px)
        //create_contact_section(contact_gr, screen_width_in_px)

    }

    else {
        var about_layout_gr     = about__create_background__desktop(main_canvas__gr, bar_gr, screen_width_in_px, screen_height)
        var about_background_gr = about_layout_gr.find("#about_background_gr")
        

        console.log("***********")
        console.log(about_background_gr)

        about__images__desktop(about_background_gr, screen_width_in_px, screen_height)
        about_text__desktop(main_canvas__gr, screen_width_in_px, screen_height)

        about_intro__info(intro_canvas__gr, screen_width_in_px, screen_height)
        history__info(history_canvas__gr, screen_width_in_px, screen_height)
        process__info(process_canvas__gr, screen_width_in_px, screen_height)
        about_video__info(video_canvas__gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px,screen_height)

        // INTRO__SCROLL_TRIGGER
        var trigger_y_position__intro_canvas = intro__div_bottom_y;
        sc_trigger__create(trigger_y_position__intro_canvas,
            "intro_canvas__trigger",
            screen_height,
            // activate_fn
            function() {
                intro_canvas__gr.animate({
                        duration: 400,
                        // delay:    400, 
                        ease: '<' 
                    })
                    .attr({opacity: 1.0})
            },
            // deactivate
            function() {
                intro_canvas__gr.animate({
                    duration: 200,
                    delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 0.1})
            });

        // INTRO__SCROLL_TRIGGER
        var trigger_y_position__history_canvas = history__div_bottom_y;
        sc_trigger__create(trigger_y_position__history_canvas,
            "history_canvas__trigger",
            screen_height,
            // activate_fn
            function() {
                history_canvas__gr.animate({
                        duration: 400,
                        // delay:    400, 
                        ease: '<' 
                    })
                    .attr({opacity: 1.0})
            },
            // deactivate
            function() {
                history_canvas__gr.animate({
                    duration: 200,
                    delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 0.1})
            });
        
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function about__create_background__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var about_layout_gr = parent_gr.nested().attr({id: 'about_layout_gr'})

    var about_background_gr = about_layout_gr.nested()
        .attr({
            id: "about_background_gr",
        })

    var background_rect = about_background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ebf2edff')
        .attr({
            id:      "background_rect",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })

    //---------------------------SYMBOL----------------------------------
    var hashtag_symbol_gr = about_background_gr.nested()   

    var hashtag_symbol = hashtag_symbol_gr.path("m -833.94527,-1714.4575 c -3.5569,-0.9531 -6.26175,-2.921 -8.11454,-5.9038 -1.65675,-3.0959 -2.00857,-6.4223 -1.05546,-9.9792 0.91158,-3.4023 2.81738,-5.8752 5.71717,-7.4187 3.05454,-1.502 6.36026,-1.7766 9.91716,-0.8235 l 110.65102,29.6488 c 3.5569,0.9531 6.16372,2.9777 7.82047,6.0736 1.85279,2.9827 2.30264,6.2525 1.3496,9.8095 -0.91165,3.4022 -2.89471,5.8544 -5.94925,7.3564 -2.89986,1.5436 -6.12825,1.8388 -9.68515,0.8857 z m 69.32744,58.6052 c -4.17551,-1.1188 -7.02946,-3.4581 -8.56185,-7.018 -1.49101,-3.7146 -1.26973,-7.6333 0.66377,-11.7563 l 60.10182,-130.586 c 1.29269,-2.9687 3.24949,-5.0136 5.8704,-6.1346 2.66237,-1.2756 5.54003,-1.4991 8.633,-0.6703 4.02083,1.0774 6.77676,3.4734 8.2677,7.1879 1.53245,3.5599 1.33187,7.4013 -0.60163,11.5243 l -60.10182,130.5861 c -1.25131,2.814 -3.20811,4.8588 -5.8704,6.1345 -2.5077,1.317 -5.30803,1.5612 -8.40099,0.7324 z m -43.46482,-120.7938 c -3.5569,-0.9531 -6.26175,-2.921 -8.11455,-5.9038 -1.65674,-3.0959 -2.00856,-6.4223 -1.05552,-9.9793 0.91165,-3.4022 2.81744,-5.8751 5.71724,-7.4187 3.05454,-1.502 6.36026,-1.7765 9.91716,-0.8234 l 110.41901,29.5867 c 3.5569,0.953 6.16373,2.9775 7.82047,6.0735 1.8528,2.9827 2.30271,6.2526 1.34961,9.8095 -0.91166,3.4023 -2.89472,5.8544 -5.94918,7.3565 -2.89987,1.5435 -6.12826,1.8387 -9.68523,0.8857 z m -19.3998,103.9493 c -4.02084,-1.0774 -6.79752,-3.396 -8.32991,-6.9559 -1.33634,-3.6731 -1.11506,-7.5919 0.66384,-11.7562 l 60.10182,-130.5861 c 1.29268,-2.9687 3.24948,-5.0135 5.8704,-6.1345 2.6623,-1.2757 5.46263,-1.5198 8.40099,-0.7325 4.17551,1.1188 7.0087,3.5355 8.4997,7.25 1.53239,3.5599 1.33187,7.4013 -0.60162,11.5243 l -36.51091,79.3289 -23.59091,51.2572 c -1.25131,2.814 -3.20811,4.8588 -5.87041,6.1345 -2.66236,1.2756 -5.54003,1.4991 -8.63299,0.6703 z")
    hashtag_symbol_gr.css( "position", "fixed")

    hashtag_symbol.fill('#cdcdcdff')
    hashtag_symbol.move(screen_width_in_px/7.15+hashtag_symbol.bbox().width/2,screen_height/2+hashtag_symbol.bbox().height+75)
    //hashtag_symbol.rotate(180)
    hashtag_symbol.scale(5.3)
    hashtag_symbol.attr({id: 'hashtag_symbol'})

    hashtag_symbol_gr.attr({
        id: "hashtag_symbol_gr"
    })

    //CALL MENU FUNCTION
    var menu_rect_gr = parent_gr.nested()
    .attr({
        x: 100,
        y: 100
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#262626ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#262626ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#262626ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#262626ff', linecap: 'round' })


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

            menu_rect_clicked = false;
        }
    })

    return about_layout_gr;

}

//----------------------------------------------TEXT----------------------------------------------------------------
function about_text__desktop(parent_gr, screen_width_in_px, screen_height)
{
    var text_gr = parent_gr.nested()
    //---------------------ABOUT-TITLE--------------------
    var about_me_path__gr = text_gr.nested()
    var about_me_path = about_me_path__gr.path("m 1058.9639,-1839.4459 q -4.344,0 -7.5637,-1.7887 -3.1686,-1.8398 -4.9063,-4.9573 -1.6865,-3.1175 -1.6865,-7.0527 0,-4.5996 1.8399,-7.8193 1.8909,-3.2708 4.9062,-5.0084 3.0153,-1.7377 6.3883,-1.7377 2.6064,0 4.9062,1.0733 2.3509,1.0732 4.1396,2.9642 1.7888,1.8398 2.8109,4.2929 1.0732,2.4531 1.0732,5.2129 -0.051,1.2265 -0.971,1.9931 -0.9199,0.7666 -2.1465,0.7666 h -19.5226 l -1.5332,-5.1106 h 18.756 l -1.1243,1.0221 v -1.3799 q -0.1022,-1.4821 -1.0732,-2.6575 -0.92,-1.1755 -2.3509,-1.8399 -1.3799,-0.7154 -2.9642,-0.7154 -1.5332,0 -2.862,0.4088 -1.3287,0.4089 -2.2998,1.3799 -0.971,0.971 -1.5332,2.6064 -0.5621,1.6354 -0.5621,4.1396 0,2.7598 1.1243,4.7018 1.1755,1.891 2.9642,2.9131 1.8398,0.971 3.8841,0.971 1.8909,0 3.0153,-0.3066 1.1243,-0.3067 1.7887,-0.7155 0.7155,-0.46 1.2776,-0.7666 0.92,-0.46 1.7377,-0.46 1.1243,0 1.8398,0.7666 0.7666,0.7666 0.7666,1.7888 0,1.3798 -1.431,2.5042 -1.3288,1.1243 -3.7308,1.9931 -2.402,0.8177 -4.9573,0.8177 z m -48.022,-28.3641 q 4.0886,0 6.0306,1.9932 1.9421,1.942 2.5553,5.0595 l -0.8688,-0.4599 0.4089,-0.8177 q 0.6132,-1.1755 1.8909,-2.5042 1.2777,-1.3799 3.0664,-2.2998 1.8398,-0.9711 4.0885,-0.9711 3.6797,0 5.5706,1.5843 1.9421,1.5843 2.6575,4.2419 0.7155,2.6064 0.7155,5.8261 v 13.0833 q 0,1.3287 -0.8688,2.2487 -0.8688,0.8688 -2.1976,0.8688 -1.3287,0 -2.1975,-0.8688 -0.8688,-0.92 -0.8688,-2.2487 v -13.0833 q 0,-1.6865 -0.4089,-3.0153 -0.4088,-1.3798 -1.4821,-2.1975 -1.0732,-0.8177 -3.0664,-0.8177 -1.942,0 -3.3219,0.8177 -1.3799,0.8177 -2.0953,2.1975 -0.6644,1.3288 -0.6644,3.0153 v 13.0833 q 0,1.3287 -0.8688,2.2487 -0.8688,0.8688 -2.1976,0.8688 -1.3288,0 -2.1976,-0.8688 -0.8688,-0.92 -0.8688,-2.2487 v -13.0833 q 0,-1.6865 -0.4089,-3.0153 -0.4088,-1.3798 -1.482,-2.1975 -1.0733,-0.8177 -3.0664,-0.8177 -1.9421,0 -3.322,0.8177 -1.3798,0.8177 -2.0953,2.1975 -0.6644,1.3288 -0.6644,3.0153 v 13.0833 q 0,1.3287 -0.8688,2.2487 -0.8688,0.8688 -2.19758,0.8688 -1.32877,0 -2.19758,-0.8688 -0.86881,-0.92 -0.86881,-2.2487 v -21.107 q 0,-1.3288 0.86881,-2.1976 0.86881,-0.9199 2.19758,-0.9199 1.32878,0 2.19758,0.9199 0.8688,0.8688 0.8688,2.1976 v 2.1976 l -0.7666,-0.1533 q 0.46,-0.8688 1.2777,-1.8399 0.8177,-1.0221 1.9931,-1.8909 1.1755,-0.8688 2.6064,-1.3799 1.431,-0.5622 3.1175,-0.5622 z m -25.95567,3.1645 v -2.3418 q 0,-0.2371 0.1581,-0.3952 0.1581,-0.1581 0.39525,-0.1581 0.22725,0 0.38535,0.1581 0.14822,0.1581 0.14822,0.3952 v 2.3418 q 0,0.2372 -0.1581,0.3953 -0.15809,0.1581 -0.39524,0.1581 -0.22726,0 -0.37548,-0.1581 -0.1581,-0.1581 -0.1581,-0.3953 z m -1.23513,-1.0572 q 0,-0.2569 0.17786,-0.415 0.16798,-0.168 0.42488,-0.168 h 4.39707 q 0.13833,0 0.22726,-0.049 0.0889,-0.059 0.12846,-0.1482 0.0395,-0.099 0.0395,-0.2075 0,-0.1186 -0.0395,-0.2174 -0.0494,-0.099 -0.0494,-0.2273 0,-0.1383 0.12845,-0.247 0.12846,-0.1186 0.35572,-0.1186 0.27666,0 0.45453,0.3063 0.17785,0.2965 0.17785,0.6423 0,0.2075 -0.0297,0.4644 -0.0395,0.247 -0.16798,0.4743 -0.13834,0.2174 -0.41501,0.3656 -0.27667,0.1482 -0.76084,0.1482 h -4.44647 q -0.2569,0 -0.42489,-0.168 -0.17785,-0.1778 -0.17785,-0.4347 z m 1.13633,3.0027 q 0,-0.2569 0.17785,-0.4249 0.16798,-0.1679 0.42488,-0.1679 h 2.50979 q 1.04739,0 1.66002,0.5829 0.61262,0.583 0.61262,1.6798 0,1.0968 -0.61262,1.6798 -0.61263,0.5731 -1.66002,0.5731 h -2.50979 q -0.2569,0 -0.42488,-0.168 -0.17785,-0.168 -0.17785,-0.4249 0,-0.2569 0.17785,-0.4248 0.16798,-0.168 0.42488,-0.168 h 2.50979 q 0.60275,0 0.89918,-0.2668 0.28655,-0.2668 0.28655,-0.8004 0,-0.5434 -0.28655,-0.8102 -0.29643,-0.2668 -0.89918,-0.2668 h -2.50979 q -0.2569,0 -0.42488,-0.168 -0.17785,-0.168 -0.17785,-0.4249 z m 2.64812,4.9038 q 0.81024,0 1.43274,0.3656 0.61263,0.3557 0.95847,0.9683 0.34583,0.6028 0.34583,1.3537 0,0.751 -0.34583,1.3636 -0.34584,0.6028 -0.95847,0.9684 -0.6225,0.3557 -1.43274,0.3557 -0.81025,0 -1.42287,-0.3557 -0.62252,-0.3656 -0.96835,-0.9684 -0.35572,-0.6126 -0.35572,-1.3636 0,-0.7509 0.35572,-1.3537 0.34583,-0.6126 0.96835,-0.9683 0.61262,-0.3656 1.42287,-0.3656 z m 0,1.1857 q -0.50394,0 -0.86954,0.2075 -0.37548,0.1977 -0.58298,0.5435 -0.2075,0.3359 -0.2075,0.7509 0,0.4151 0.2075,0.7609 0.2075,0.3359 0.58298,0.5434 0.3656,0.1977 0.86954,0.1977 0.49405,0 0.86952,-0.1977 0.3656,-0.2075 0.5731,-0.5434 0.20751,-0.3458 0.20751,-0.7609 0,-0.415 -0.20751,-0.7509 -0.2075,-0.3458 -0.5731,-0.5435 -0.37547,-0.2075 -0.86952,-0.2075 z m -2.74694,7.3125 q 0,-0.6917 0.35572,-1.2352 0.34583,-0.5533 0.95846,-0.8695 0.61263,-0.3261 1.42288,-0.3261 0.81024,0 1.43275,0.3261 0.61262,0.3162 0.96834,0.8597 0.34583,0.5335 0.34583,1.2054 0,0.3953 -0.12845,0.7411 -0.12845,0.3459 -0.32608,0.6126 -0.19762,0.257 -0.39524,0.4052 -0.2075,0.1383 -0.34583,0.1383 l -0.12845,-0.3063 h 0.72131 q 0.25691,0 0.43476,0.168 0.16798,0.1679 0.16798,0.4249 0,0.2569 -0.16798,0.4248 -0.16797,0.168 -0.43476,0.168 h -6.2053 q -0.25691,0 -0.42488,-0.168 -0.17786,-0.1679 -0.17786,-0.4248 0,-0.257 0.17786,-0.4249 0.16797,-0.168 0.42488,-0.168 h 2.50978 l -0.0889,0.168 q -0.12845,0 -0.30631,-0.1384 -0.18774,-0.1383 -0.3656,-0.3754 -0.18774,-0.2372 -0.30632,-0.5435 -0.11857,-0.3162 -0.11857,-0.662 z m 1.08692,0.1482 q 0,0.4347 0.21738,0.7608 0.21739,0.3261 0.59286,0.5138 0.3656,0.1779 0.8399,0.1779 0.4644,0 0.84976,-0.1779 0.37548,-0.1877 0.59286,-0.5138 0.21739,-0.3261 0.21739,-0.7608 0,-0.4348 -0.21739,-0.751 -0.21738,-0.3261 -0.59286,-0.5039 -0.38536,-0.1877 -0.84976,-0.1877 -0.4743,0 -0.8399,0.1877 -0.37547,0.1778 -0.59286,0.5039 -0.21738,0.3162 -0.21738,0.751 z m -1.08692,4.4667 q 0,-0.2569 0.16798,-0.4249 0.16798,-0.168 0.43477,-0.168 h 4.17968 q 0.2569,0 0.43477,0.168 0.16797,0.168 0.16797,0.4249 0,0.2569 -0.16797,0.4249 -0.17787,0.1679 -0.43477,0.1679 h -0.48417 l 0.0889,-0.2173 q 0.12846,0 0.3162,0.1383 0.17786,0.1383 0.35572,0.3755 0.17786,0.2371 0.30631,0.5632 0.11857,0.3162 0.11857,0.6917 0,0.6818 -0.34583,1.2351 -0.35572,0.5533 -0.96834,0.8794 -0.62251,0.3162 -1.42287,0.3162 -0.81025,0 -1.42287,-0.3162 -0.62252,-0.3261 -0.96835,-0.8695 -0.35572,-0.5435 -0.35572,-1.2055 0,-0.4249 0.12845,-0.7806 0.12846,-0.3557 0.32608,-0.6126 0.19762,-0.2668 0.40512,-0.4052 0.19762,-0.1482 0.33596,-0.1482 l 0.12846,0.3557 h -0.72132 q -0.25691,0 -0.42489,-0.1679 -0.17786,-0.168 -0.17786,-0.4249 z m 4.39707,1.996 q 0,-0.4348 -0.21739,-0.7609 -0.21738,-0.3261 -0.59286,-0.5039 -0.37548,-0.1878 -0.83988,-0.1878 -0.4743,0 -0.84978,0.1878 -0.37547,0.1778 -0.59286,0.5039 -0.21738,0.3261 -0.21738,0.7609 0,0.4248 0.21738,0.7509 0.21739,0.3261 0.59286,0.5138 0.37548,0.1779 0.84978,0.1779 0.4644,0 0.83988,-0.1779 0.37548,-0.1877 0.59286,-0.5138 0.21739,-0.3261 0.21739,-0.7509 z")
    about_me_path__gr.attr({
        id:    "about_me_path__gr",
    })
    about_me_path.fill('#262626ff')
    about_me_path.move(screen_width_in_px/2-about_me_path.bbox().width-320,screen_height/2-about_me_path.bbox().height+50)
    //about_me_path.rotate(-90)
    about_me_path.scale(5.2)
    about_me_path.attr({id: 'about_me_path'})

    var paragraph = text_gr.text(function(add){
        add.tspan('Imagination is the beginning of creation.').newLine()
        add.tspan('You imagine what you desire,').newLine()
        add.tspan('you will what you imagine,').newLine()
        add.tspan('and at last, ').newLine() 
        add.tspan('you create what you will.').newLine()
        add.tspan('').newLine()
        add.tspan('-George Bernand Shaw').newLine().dx(230).font({size:'19'})
    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#262626ff',
            family:  'Quicksand',
            size:    23
        })    
    paragraph.attr({
        x: screen_width_in_px/2-paragraph.bbox().width-140,
        y: screen_height/2+paragraph.bbox().height/2+40
    }) 

    
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function about__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+120,
        height: screen_height,
        x: screen_width_in_px/3-32
    })

    var rect_width = (screen_width_in_px/2)/6.7;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/a_1.png',
                'height':     '350',
                'position_x': 0,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_2.png',
                'height':     '350', // %
                'position_x': rect_width+15,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_3.png',
                'height':     '650',
                'position_x': rect_width*2+30,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/a_4.png',
                'height':     '160',
                'position_x': rect_width*3+45,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_5.png',
                'height':     '315',
                'position_x': rect_width*3+45,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_6.png',
                'height':     '650',
                'position_x': rect_width*4+60,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_7.png',
                'height':     '165',
                'position_x': rect_width*5+75,
                'position_y': 345,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_8.png',
                'height':     '315',
                'position_x': rect_width*5+75,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']
    var img_url_5 = images_data['elements_data'][5]['img_url']
    var img_url_6 = images_data['elements_data'][6]['img_url']
    var img_url_7 = images_data['elements_data'][7]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']
    var height_6 = images_data['elements_data'][6]['height']
    var height_7 = images_data['elements_data'][7]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];
    var position_x_6 = images_data['elements_data'][6]['position_x'];
    var position_x_7 = images_data['elements_data'][7]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];
    var position_y_6 = images_data['elements_data'][6]['position_y'];
    var position_y_7 = images_data['elements_data'][7]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y})

        console.log("------------========================")
        console.log(image__gr_arr)

        var image_gr     = image__gr_arr[0]
        var image_rect   = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
        var image_gr_img = image_gr.image(image_url, function (e) {
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

        return image_gr
    }
                     about_create__image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
    var image_gr_2 = about_create__image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
    var image_gr_5 = about_create__image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    var image_gr_6 = about_create__image(images_gr, img_url_6, rect_width, height_6, position_x_6, position_y_6, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_7, rect_width, height_7, position_x_7, position_y_7, view_box_x, view_box_y)

    // A__RECT 
    var rect_height = (screen_width_in_px/2)/5.7;
    var rects_gr = images_gr.nested()

    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_2.x()
    var a_rect_y      = image_gr_2.y()
    var a_rect_width  = image_gr_2.width()

    var a_rect = a_rect_gr.rect(a_rect_width,rect_height+50)
    a_rect.attr({
            fill: "#f18b0fff",
            x: a_rect_x,
            y: a_rect_y-rect_height-50
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_height = image_gr_5.height()
    var b_rect_width  = image_gr_5.width()
    var b_rect_x      = image_gr_5.x()
    var b_rect_y      = image_gr_5.y()

    var b_rect = b_rect_gr.rect(b_rect_width,rect_height)
    b_rect.attr({
            fill: "#f18b0fff",
            x: b_rect_x,
            y: b_rect_height+rect_height
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_6.width()
    var c_rect_x      = image_gr_6.x()
    var c_rect_y      = image_gr_6.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,rect_height*2.5)
        .attr({
            fill: "#f18b0fff",
            x: c_rect_x,
            y: c_rect_y-rect_height*2.5
        })
}

function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
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

function about_intro__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested().attr({id:"intro__info"}) 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var light__url    = "./../portfolio-app-media/media/light.jpg"
    
    about_create__image(images_gr, light__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph__a = images_gr.text(function(add){
            add.tspan('My  name is Nevena. I am Junior').dx('50')
            add.tspan('UI | UX web designer & developer').fill('#2a3d35ef').font('size','42').dx('-20').newLine()
            add.tspan('currently based in Belgrade, Serbia.').dx('0').newLine()
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#ebf2edff',
            family:  'Quicksand',
            size:    36
        })    
    paragraph__a.attr({
        id: 'paragraph__a',
        x: 240,
        y: screen_height/2-paragraph__a.bbox().height/2
    }) 

}

function history__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var bist__url     = "./../portfolio-app-media/media/bist.png"

    about_create__image(images_gr, bist__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph_gr = images_gr.nested()
    var paragraph__b = paragraph_gr.text(function(add){
        add.tspan('After graduating as a sculptor on Faculty').newLine()
        add.tspan('of Fine Arts I`ve developed passion').newLine() 
        add.tspan('for creating through digital media.').newLine()
        add.tspan('I`ve spent the last 4 years exploring').newLine()
        add.tspan('programming languages ').fill('#fff').newLine()//.font('size','36')
        add.tspan('& wide palette')
        add.tspan('of different design genres.').newLine()
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    32
    })    
    paragraph_gr.attr({
        x: screen_width_in_px/2,
        y: screen_height/2-paragraph__b.bbox().height/2
    })
    paragraph__b.attr({
        id: 'paragraph__b',
        x: 0,
        y: 0
    }) 
    
}

function process__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var stickers__url = "./../portfolio-app-media/media/stickeers.jpg"

    about_create__image(images_gr, stickers__url, rect_width, rect_height, 0, rect_height/2, 0.6, 0, 0)

    var paragraph__c = images_gr.text(function(add){
        add.tspan('I find my passion in creating and coding').newLine() 
        add.tspan('visualy appealing, responsive websites with').newLine()
        add.tspan('focus on friendly, emotive, aesthetically').newLine()
        add.tspan('pleasing, clear, on-brand and usable').newLine()
        add.tspan('interfaces.').newLine()

    }) 
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#ebf2edff',
        family:  'Quicksand',
        size:    36
    })    
    paragraph__c.attr({
        id: 'paragraph__c',
        x: 240,
        y: screen_height/2-paragraph__c.bbox().height/2
    }) 

}

function about_video__info(parent_gr, screen_width_in_px, screen_height){

    var video_gr   = parent_gr.nested()

    var video_global_height = 800
    var video_gr_y = screen_height/2-400;
    video_gr.attr({
        y: video_gr_y
    })


    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y

    $("#about #video__info").append(`
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar3.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#about #video__info").find("#video__container").css({
        opacity: 0.4
    });

    $("#about #video__info").find("#video__a").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__b").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__c").css({
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
