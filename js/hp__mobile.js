$( document ).ready(function() {
    hp__mobile__main()
    console.log( "ready!" );
});

function hp__mobile__main() {
    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);  

    hp__mobile__activate(bar_gr);

    $(window).resize(function() {

        hp__mobile__deactivate();

        hp__mobile__activate(bar_gr);

    });

}

function hp__mobile__activate(bar_gr) {
    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;
    //document.title = "web_development"
    //window.history.pushState({page: "web_development"},"", "#web_development");

    $("body").append(`
        <div id="hp__mobile">
            <div id="wrapper">
            </div>
        </div>
    `);

    var hp__mobile_info = hp__mobile__create_responsive(bar_gr);
    hp_top__animate(hp__mobile_info, screen_width_in_px, screen_height)
    //current_page = "web_development"
}
    
function hp__mobile__deactivate() {

    $("#hp__mobile").remove();
    $("#contact_mobile_wrapper").remove();
    remove_triggers("hp_canvas__trigger")

}

function hp__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    var double_screen_height = screen_height*2-110;
    //-------STYLE-------
    $("#hp__mobile #wrapper").css({                    
        "background-color": '#d9d9d9ff',
        "position":         "relative",
        "height":           double_screen_height,
        "width":            screen_width_in_px
    }); 

    var current_scroll_y = window.scrollY;

    var bounding_rect    = $("#hp__mobile #wrapper").get(0).getBoundingClientRect()
    var hp__div_bottom_y = current_scroll_y+(bounding_rect.bottom-150);
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    var hp__mobile__container    = SVG().addTo("#hp__mobile #wrapper").size(screen_width_in_px, double_screen_height)
    var hp__mobile__container_gr = hp__mobile__container.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    var hp__mobile_info = hp__mobile(hp__mobile__container_gr, bar_gr, screen_width_in_px, screen_height,  double_screen_height, hp__div_bottom_y)
    create_mobile_contact_section(screen_width_in_px,screen_height)

    return hp__mobile_info
}

//----------------------------------------------hp__mobile----------------------------------------------------------------
function hp__mobile(parent_gr, bar_gr, screen_width_in_px, screen_height, double_screen_height, hp__div_bottom_y){

    var hp__mobile__layout_gr = parent_gr.nested()   
    //-----------------BACKGROUND------------------------
    var background_rect = hp__mobile__layout_gr.rect(screen_width_in_px,double_screen_height)
        .fill('#D9D9D9')
        .attr({
            id:      "background_rect",
            opacity: 0.9,
        })

    var text_gr = hp__mobile__layout_gr.nested().fill("#0000000")   
        .attr({
            id: "text_group",
            x:  0,
            y:  0
        })

    //CALL MENU FUNCTION
    var menu_rect_gr = hp__mobile__layout_gr.nested()
    .attr({
        x: screen_width_in_px-60,
        y: 0
    })
    
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#839b8bff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#fff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#fff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#fff', linecap: 'round' })

    var menu_rect_clicked = false;

    menu_rect_gr.click(function() {
        
        // ACTIVATE BOX_1
        if (menu_rect_clicked == false) {
            
            // ANIMATE
            console.log(create_mobile_menu,"defined")
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = false;
        }
    })

    //-----------------PARENTHESES------------------------
    var parentheses_gr = text_gr.nested().fill("#0000000")   

    var parentheses = parentheses_gr.path("m -2009.0649,148.1955 h 3.5897 v 20.16483 h -3.5897 z m 57.4847,146.18287 q -11.6662,0 -19.2004,-4.01022 -7.5343,-3.88868 -11.7876,-10.45086 -4.2533,-6.44066 -5.9546,-14.21804 -1.7013,-7.77741 -1.7013,-15.31174 v -67.20152 q 0,-8.02043 -4.2532,-11.42303 -4.2533,-3.40263 -11.4231,-3.40263 v -20.17259 q 7.1698,0 11.4231,-3.40261 4.2532,-3.4026 4.2532,-11.42306 V 66.16058 q 0,-7.534355 1.7013,-15.311739 1.7013,-7.777404 5.9546,-14.21804 4.2533,-6.562179 11.7876,-10.450881 7.5342,-4.010207 19.2004,-4.010207 h 20.2942 v 27.099331 h -8.8711 q -8.0205,0 -13.0029,5.590004 -4.8608,5.468479 -4.8608,14.339563 V 135.0634 q 0,9.23563 -3.7672,14.82564 -3.7672,5.46848 -9.3571,8.385 5.5899,2.91651 9.3571,8.50652 3.7672,5.59 3.7672,14.70413 v 65.86477 q 0,8.87108 4.8608,14.33956 4.9824,5.59 13.0029,5.59 h 8.8711 v 27.09935 z")
    parentheses_gr.css("position", "fixed")

    parentheses.fill('#bdbdbdff')
    parentheses.move(screen_width_in_px/2-12,double_screen_height/2-parentheses.bbox().height/2)
    //parentheses.rotate(180)
    parentheses.scale(4.6)
    parentheses.attr({
        id: 'parentheses',
        opacity: 0.0
    })

    parentheses_gr.attr({
        id: "parentheses_gr"
    })

    //-----------------DOTS------------------------
    var dots_gr = text_gr.nested().fill("#0000000")   

    var dots = dots_gr.path("m -1754.4056,199.84313 q -2.4405,0 -4.4817,-1.19807 -1.9968,-1.19807 -3.1948,-3.19485 -1.1981,-1.99679 -1.1981,-4.48168 0,-2.44051 1.1981,-4.43729 1.198,-1.99679 3.1948,-3.19486 2.0412,-1.24244 4.4817,-1.24244 2.4849,0 4.4817,1.24244 1.9968,1.19807 3.1948,3.19486 1.1981,1.99678 1.1981,4.43729 0,2.48489 -1.1981,4.48168 -1.198,1.99678 -3.1948,3.19485 -1.9968,1.19807 -4.4817,1.19807 z m 0,34.78843 q -2.4405,0 -4.4817,-1.19807 -1.9968,-1.19807 -3.1948,-3.19486 -1.1981,-2.04115 -1.1981,-4.48167 0,-2.48489 1.1981,-4.48167 1.198,-1.99679 3.1948,-3.19486 2.0412,-1.19807 4.4817,-1.19807 2.4849,0 4.4817,1.19807 1.9968,1.19807 3.1948,3.19486 1.1981,1.99678 1.1981,4.48167 0,2.44052 -1.1981,4.48167 -1.198,1.99679 -3.1948,3.19486 -1.9968,1.19807 -4.4817,1.19807 z")

    dots.fill('#bdbdbdff')
    dots.move(screen_width_in_px-dots.bbox().width-50,(parentheses.bbox().y+parentheses.bbox().height/2)-dots.bbox().height/2)
    dots.scale(3)
    dots.attr({
        id:      'dots',
        opacity: 0.0
    })

    dots_gr.attr({
        id: "dots_gr"
    })

    //-----------------UI | UX title------------------------
    var ui_and_ux_gr = text_gr.nested().fill("#0000000")   

    var ui_and_ux = ui_and_ux_gr.path("m -1807.9228,107.31621 q 0.34,0 0.5493,0.23544 0.2094,0.22234 0.2094,0.56241 v 4.73475 q 0,1.0856 -0.4709,1.92266 -0.4578,0.83709 -1.2688,1.30794 -0.8109,0.47087 -1.8835,0.47087 -1.0724,0 -1.8963,-0.47087 -0.811,-0.47085 -1.2819,-1.30794 -0.4578,-0.83706 -0.4578,-1.92266 v -4.73475 q 0,-0.34007 0.2354,-0.56241 0.2355,-0.23544 0.6017,-0.23544 0.3008,0 0.5363,0.23544 0.2485,0.22234 0.2485,0.56241 v 4.73475 q 0,0.65397 0.2747,1.1379 0.2877,0.47086 0.7455,0.73245 0.4709,0.2616 0.9939,0.2616 0.5626,0 1.0466,-0.2616 0.4837,-0.26159 0.7846,-0.73245 0.3008,-0.48393 0.3008,-1.1379 v -4.73475 q 0,-0.34007 0.1963,-0.56241 0.1962,-0.23544 0.5362,-0.23544 z m 4.3565,8.39699 q 0,0.34007 -0.2485,0.57549 -0.2486,0.22235 -0.5756,0.22235 -0.3661,0 -0.5885,-0.22235 -0.2224,-0.23542 -0.2224,-0.57549 v -7.55991 q 0,-0.34006 0.2355,-0.56241 0.2354,-0.23543 0.6017,-0.23543 0.3139,0 0.5493,0.23543 0.2485,0.22235 0.2485,0.56241 z m 6.9502,0.85223 q 0,0.29958 -0.2076,0.49548 -0.1957,0.2074 -0.4953,0.2074 -0.2881,0 -0.484,-0.2074 -0.1959,-0.1959 -0.1959,-0.49548 v -9.26437 q 0,-0.29959 0.1959,-0.49547 0.2074,-0.20741 0.5071,-0.20741 0.2996,0 0.4839,0.20741 0.1959,0.19588 0.1959,0.49547 z m 12.0679,-9.24922 q 0.34,0 0.5493,0.23544 0.2092,0.22234 0.2092,0.56241 v 4.73475 q 0,1.0856 -0.4709,1.92266 -0.4577,0.83709 -1.2686,1.30794 -0.8109,0.47087 -1.8835,0.47087 -1.0725,0 -1.8965,-0.47087 -0.8109,-0.47085 -1.2817,-1.30794 -0.4578,-0.83706 -0.4578,-1.92266 v -4.73475 q 0,-0.34007 0.2354,-0.56241 0.2355,-0.23544 0.6016,-0.23544 0.3008,0 0.5363,0.23544 0.2485,0.22234 0.2485,0.56241 v 4.73475 q 0,0.65397 0.2747,1.1379 0.2878,0.47086 0.7456,0.73245 0.4708,0.2616 0.9939,0.2616 0.5624,0 1.0464,-0.2616 0.4839,-0.26159 0.7848,-0.73245 0.3008,-0.48393 0.3008,-1.1379 v -4.73475 q 0,-0.34007 0.1961,-0.56241 0.1963,-0.23544 0.5364,-0.23544 z m 2.9078,9.25045 q -0.2879,0 -0.4971,-0.20927 -0.2093,-0.22234 -0.2093,-0.48394 0,-0.28774 0.1962,-0.53625 l 2.6551,-3.59684 0.8632,1.26871 -2.3542,3.19137 q -0.2617,0.36622 -0.6539,0.36622 z m 0.1623,-9.26683 q 0.3793,0 0.6409,0.34006 l 5.7549,7.65146 q 0.157,0.20927 0.157,0.48394 0,0.36622 -0.2616,0.57549 -0.2616,0.20927 -0.5231,0.20927 -0.3794,0 -0.641,-0.34006 l -5.7549,-7.65146 q -0.1701,-0.20927 -0.1701,-0.47086 0,-0.34006 0.2485,-0.56242 0.2616,-0.23542 0.5494,-0.23542 z m 5.7887,0.0327 q 0.3008,0 0.5101,0.23543 0.2224,0.23543 0.2224,0.49702 0,0.2485 -0.1701,0.47086 l -2.6289,3.46604 -0.8894,-1.21639 2.315,-3.07365 q 0.2747,-0.37931 0.6409,-0.37931 z")

    ui_and_ux.fill('#fff')
    ui_and_ux.move(screen_width_in_px/2+200,screen_height/2),
    ui_and_ux.scale(3.3)
    ui_and_ux.attr({id: 'ui_and_ux'})

    ui_and_ux_gr.attr({
        id: "ui_and_ux_gr"
    })

    //-----------------PARENTHESES------------------------
    var nevena__gr = parentheses_gr.nested().fill("#0000000")   

    var nevena = nevena__gr.path("m 2281.3398,-817.12305 q 0.6806,0 1.1256,0.44499 0.445,0.44499 0.445,1.15173 v 11.07231 q 0,0.68057 -0.445,1.15173 -0.445,0.44499 -1.1256,0.44499 -0.6805,0 -1.1255,-0.44499 -0.445,-0.47116 -0.445,-1.15173 v -1.28261 l 0.5758,0.23559 q 0,0.34028 -0.3664,0.83762 -0.3665,0.47116 -0.9947,0.94232 -0.6282,0.47116 -1.492,0.81145 -0.8376,0.31411 -1.8323,0.31411 -1.8061,0 -3.272,-0.91615 -1.4658,-0.94233 -2.3296,-2.56522 -0.8376,-1.64907 -0.8376,-3.7693 0,-2.1464 0.8376,-3.7693 0.8638,-1.64906 2.3035,-2.56521 1.4396,-0.94233 3.1934,-0.94233 1.1255,0 2.0679,0.34029 0.9423,0.34028 1.6229,0.86379 0.7067,0.52352 1.0732,1.07321 0.3926,0.52351 0.3926,0.88997 l -0.9423,0.34028 v -1.91082 q 0,-0.68057 0.445,-1.12556 0.445,-0.47116 1.1255,-0.47116 z m -5.2875,11.64818 q 1.1518,0 2.0156,-0.57586 0.8638,-0.57587 1.3349,-1.57054 0.4974,-0.99468 0.4974,-2.22494 0,-1.25643 -0.4974,-2.25111 -0.4711,-0.99467 -1.3349,-1.57054 -0.8638,-0.57586 -2.0156,-0.57586 -1.1255,0 -1.9893,0.57586 -0.8638,0.57587 -1.3612,1.57054 -0.4711,0.99468 -0.4711,2.25111 0,1.23026 0.4711,2.22494 0.4974,0.99467 1.3612,1.57054 0.8638,0.57586 1.9893,0.57586 z m -14.1532,-11.64818 q 1.937,0 2.9316,0.81145 1.0209,0.81144 1.3873,2.17258 0.3927,1.33496 0.3927,2.98403 v 6.70097 q 0,0.68057 -0.445,1.15173 -0.445,0.44499 -1.1256,0.44499 -0.6805,0 -1.1255,-0.44499 -0.445,-0.47116 -0.445,-1.15173 v -6.70097 q 0,-0.8638 -0.2356,-1.54437 -0.2094,-0.70674 -0.7853,-1.12555 -0.5758,-0.41881 -1.649,-0.41881 -1.047,0 -1.78,0.41881 -0.7067,0.41881 -1.0993,1.12555 -0.3665,0.68057 -0.3665,1.54437 v 6.70097 q 0,0.68057 -0.445,1.15173 -0.445,0.44499 -1.1255,0.44499 -0.6806,0 -1.1256,-0.44499 -0.445,-0.47116 -0.445,-1.15173 v -10.81055 q 0,-0.68057 0.445,-1.12556 0.445,-0.47116 1.1256,-0.47116 0.6805,0 1.1255,0.47116 0.445,0.44499 0.445,1.12556 v 1.12555 l -0.3926,-0.0785 q 0.2355,-0.44498 0.6805,-0.94232 0.445,-0.52351 1.0471,-0.9685 0.602,-0.44499 1.3611,-0.70675 0.7591,-0.28793 1.6491,-0.28793 z m -16.2048,14.52751 q -2.225,0 -3.874,-0.91615 -1.6229,-0.94233 -2.5129,-2.53904 -0.8638,-1.59672 -0.8638,-3.61225 0,-2.35581 0.9423,-4.00488 0.9685,-1.67524 2.5129,-2.56521 1.5444,-0.88998 3.272,-0.88998 1.3349,0 2.5128,0.54969 1.2041,0.54969 2.1202,1.51819 0.9162,0.94233 1.4397,2.19876 0.5497,1.25643 0.5497,2.66992 -0.026,0.62822 -0.4973,1.02085 -0.4712,0.39264 -1.0994,0.39264 h -9.9991 l -0.7853,-2.61757 h 9.6065 l -0.5759,0.52351 v -0.70674 q -0.052,-0.7591 -0.5497,-1.36114 -0.4711,-0.60204 -1.2041,-0.94232 -0.7067,-0.36646 -1.5181,-0.36646 -0.7853,0 -1.4659,0.2094 -0.6806,0.20941 -1.1779,0.70675 -0.4973,0.49733 -0.7853,1.33496 -0.2879,0.83762 -0.2879,2.12023 0,1.41348 0.5759,2.40816 0.602,0.9685 1.5182,1.49201 0.9423,0.49734 1.9893,0.49734 0.9685,0 1.5444,-0.15705 0.5758,-0.15706 0.9161,-0.36646 0.3665,-0.23558 0.6544,-0.39264 0.4712,-0.23558 0.89,-0.23558 0.5759,0 0.9423,0.39264 0.3926,0.39263 0.3926,0.91615 0,0.70674 -0.7329,1.2826 -0.6805,0.57587 -1.9108,1.02086 -1.2303,0.41881 -2.539,0.41881 z m -20.4077,-14.26575 q 0.4974,0 0.9162,0.26176 0.4188,0.23558 0.6282,0.73292 l 3.8478,8.79503 -0.5758,0.26175 3.9263,-9.03061 q 0.445,-1.04703 1.3873,-0.99468 0.6544,0 1.0471,0.41882 0.4188,0.39263 0.4188,0.99467 0,0.18323 -0.079,0.39264 -0.052,0.2094 -0.1308,0.39263 l -4.8949,10.78438 q -0.4188,0.94233 -1.335,0.99468 -0.4973,0.0785 -0.9685,-0.18323 -0.4449,-0.26176 -0.6805,-0.81145 l -4.8687,-10.78438 q -0.052,-0.13088 -0.1309,-0.34028 -0.052,-0.20941 -0.052,-0.49734 0,-0.47116 0.4188,-0.91615 0.4188,-0.47116 1.1255,-0.47116 z m -9.1934,14.26575 q -2.2249,0 -3.874,-0.91615 -1.6228,-0.94233 -2.5128,-2.53904 -0.8638,-1.59672 -0.8638,-3.61225 0,-2.35581 0.9423,-4.00488 0.9685,-1.67524 2.5129,-2.56521 1.5443,-0.88998 3.2719,-0.88998 1.335,0 2.5129,0.54969 1.2041,0.54969 2.1202,1.51819 0.9162,0.94233 1.4397,2.19876 0.5497,1.25643 0.5497,2.66992 -0.026,0.62822 -0.4974,1.02085 -0.4711,0.39264 -1.0993,0.39264 h -9.9991 l -0.7853,-2.61757 h 9.6065 l -0.5759,0.52351 v -0.70674 q -0.052,-0.7591 -0.5497,-1.36114 -0.4712,-0.60204 -1.2041,-0.94232 -0.7067,-0.36646 -1.5182,-0.36646 -0.7852,0 -1.4658,0.2094 -0.6806,0.20941 -1.1779,0.70675 -0.4973,0.49733 -0.7853,1.33496 -0.2879,0.83762 -0.2879,2.12023 0,1.41348 0.5759,2.40816 0.602,0.9685 1.5181,1.49201 0.9424,0.49734 1.9894,0.49734 0.9685,0 1.5444,-0.15705 0.5758,-0.15706 0.9161,-0.36646 0.3665,-0.23558 0.6544,-0.39264 0.4712,-0.23558 0.89,-0.23558 0.5758,0 0.9423,0.39264 0.3926,0.39263 0.3926,0.91615 0,0.70674 -0.7329,1.2826 -0.6806,0.57587 -1.9108,1.02086 -1.2303,0.41881 -2.5391,0.41881 z m -14.572,-14.52751 q 1.937,0 2.9316,0.81145 1.0209,0.81144 1.3873,2.17258 0.3927,1.33496 0.3927,2.98403 v 6.70097 q 0,0.68057 -0.445,1.15173 -0.445,0.44499 -1.1256,0.44499 -0.6805,0 -1.1255,-0.44499 -0.445,-0.47116 -0.445,-1.15173 v -6.70097 q 0,-0.8638 -0.2356,-1.54437 -0.2094,-0.70674 -0.7852,-1.12555 -0.5759,-0.41881 -1.6491,-0.41881 -1.047,0 -1.78,0.41881 -0.7067,0.41881 -1.0993,1.12555 -0.3665,0.68057 -0.3665,1.54437 v 6.70097 q 0,0.68057 -0.445,1.15173 -0.445,0.44499 -1.1255,0.44499 -0.6806,0 -1.1256,-0.44499 -0.445,-0.47116 -0.445,-1.15173 v -10.81055 q 0,-0.68057 0.445,-1.12556 0.445,-0.47116 1.1256,-0.47116 0.6805,0 1.1255,0.47116 0.445,0.44499 0.445,1.12556 v 1.12555 l -0.3926,-0.0785 q 0.2355,-0.44498 0.6805,-0.94232 0.445,-0.52351 1.0471,-0.9685 0.602,-0.44499 1.3611,-0.70675 0.7591,-0.28793 1.6491,-0.28793 z")

    nevena.fill('#c12d2dff')
    nevena.move(screen_width_in_px/2-nevena.bbox().width-280,ui_and_ux.bbox().y-70)
    //nevena.rotate(180)
    nevena.scale(3.5)
    nevena.attr({id: 'nevena'})

    nevena__gr.attr({
        opacity: 1.0,
        id: "nevena__gr",
    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    nevena_clicked = false;

    nevena__gr.click(function() {
    
        // NEVENA CLICKED
        if (nevena_clicked == false) {
            

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "about";
            run_page_transition(target_page_name, "1_plane_scale", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------
            

            console.log("open new window...")
            // window.open("about_desktop.html")
            nevena_clicked = true;
    
            nav_bar__reset(bar_gr)

        }
        // NEVENA DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width_in_px);
    
            nevena_clicked = false;
        }
    })
    //-----------------WEB_DESIGNER_DEV_TITLE------------------------
    var designer_dev__gr = text_gr.nested().fill("#0000000")   
    designer_dev__gr.attr({
        x: 0,
        y: ui_and_ux.bbox().y+ui_and_ux.bbox().height+35//designer_dev__rect.bbox().height/2+designer_dev__title.bbox().height/2-10
    })
    var designer_dev__rect = designer_dev__gr.rect(screen_width_in_px,100)
        .fill('#c12d2dff')
        .attr({
            id:  "designer_dev__rect",
            opacity: 1.0,
            'x': -200, 
            'y': 0  
        })
    /*designer_dev__rect.attr({
        x: designer_dev__gr.bbox().width/2-designer_dev__rect.bbox().width/2,
        y: ui_and_ux.bbox().y+ui_and_ux.bbox().height+35//designer_dev__rect.bbox().height/2+designer_dev__title.bbox().height/2-10
    })*/
    var designer_dev__title = designer_dev__gr.text(function(text_element){
        text_element.tspan('web designer & developer')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    24
        })    
    designer_dev__title.attr({
        x: designer_dev__gr.bbox().width/2+designer_dev__title.bbox().width/2,
        y: designer_dev__gr.bbox().height/2-designer_dev__title.bbox().height/2+10//designer_dev__rect.bbox().height/2+designer_dev__title.bbox().height/2-10
    })

    //-----------------DESIGN-DEVELOPMENT-MOODBOARD-GROUP------------------------
    var des_dev_mood__gr = text_gr.nested() 

    //-----------------DESIGN-BUTTON------------------------
    var design__gr = des_dev_mood__gr.nested()

    var design__rect = design__gr.rect(screen_width_in_px,100)
        .fill('#533065ff')
        .attr({
            id:  "designer_dev__rect",
            opacity: 1.0,
            'x': 0, 
            'y': 0  
        })

    var design__title = design__gr.text(function(text_element){
        text_element.tspan('design')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    24
        })    
    design__title.attr({
        x: design__gr.bbox().width/2-design__title.bbox().width/2,
        y: design__gr.bbox().height/2-design__title.bbox().height/2+10
    })

    design__gr.attr({
        x:      0,
        y:      -20,
        height: design__rect.bbox().height,
        opacity: 0.0
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    design_clicked = false;

    design__gr.click(function() {
    
        // DESIGN CLICKED
        if (design_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "web_design";
            run_page_transition(target_page_name, "1_plane_swipe_to_right", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            design_clicked = true;

            nav_bar__reset(bar_gr)
    
        }
        // DESIGN DEACTIVATED
        else {
        
            design_clicked = false;
        }
    })

    //-----------------DEVELOPMENT-BUTTON------------------------
    var development__gr = des_dev_mood__gr.nested().fill("#0000000")   

    var development__rect = development__gr.rect(screen_width_in_px,100)
        .fill('#8a2337ff')
        .attr({
            id:  "designer_dev__rect",
            opacity: 1.0,
            'x': 0, 
            'y': 0  
        })

    var development__title = development__gr.text(function(text_element){
        text_element.tspan('development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    24
        })    
    development__title.attr({
        x: development__gr.bbox().width/2-development__title.bbox().width/2,
        y: development__gr.bbox().height/2-development__title.bbox().height/2+10//designer_dev__rect.bbox().height/2+designer_dev__title.bbox().height/2-10
    })

    development__gr.attr({
        x:      0,
        y:      design__gr.bbox().height,
        height: development__rect.bbox().height,
        opacity: 0.0
    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    development_clicked = false;
    
    development__gr.click(function() {
    
        // DEVELOPMENT CLICKED
        if (development_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "web_development";
            run_page_transition(target_page_name, "4_plane_in_circle", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            development_clicked = true;
            nav_bar__reset(bar_gr)

    
        }
        // DEVELOPMENT DEACTIVATED
        else {
        
            development_clicked = false;
        }
    })

    //-----------------MOODBOARD-BUTTON------------------------

    var moodboard__gr = des_dev_mood__gr.nested().fill("#0000000")   

    var moodboard__rect = moodboard__gr.rect(screen_width_in_px,100)
        .fill('#cb3f00ff')
        .attr({
            id:  "moodboard__rect",
            opacity: 1.0,
            'x': 0, 
            'y': 0  
        })

    var moodboard__title = moodboard__gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    24
        })    
    moodboard__title.attr({
        x: moodboard__gr.bbox().width/2-moodboard__title.bbox().width/2,
        y: moodboard__gr.bbox().height/2-moodboard__title.bbox().height/2+10
    })

    moodboard__gr.attr({
        x:      0,
        y:      design__gr.bbox().height+20+development__gr.bbox().height,
        height: moodboard__rect.bbox().height,
        opacity: 0.0

    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    moodboard_clicked = false;

    moodboard__gr.click(function() {

        // MOODBOARD CLICKED
        if (moodboard_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "moodboard";
            run_page_transition(target_page_name, "2_plane_swipe_up_and_down", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            moodboard_clicked = true;

            nav_bar__reset(bar_gr)

        }
        // MOODBOARD DEACTIVATED
        else {
        
            moodboard_clicked = false;
        }
    })
    //-----------------CONTACT-BUTTON------------------------
    var contact__gr = text_gr.nested()

    var contact__rect = contact__gr.rect(screen_width_in_px,100)
        .fill('#bdbdbdff')
        .attr({
            id:  "contact__rect",
            opacity: 0.0,
            'x': 0, 
            'y': 0  
        })
    var contact__title = contact__gr.text(function(text_element){
        text_element.tspan('contact')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#bf5b5bff',
            family:  'Quicksand',
            size:    28
        })    
    contact__title.attr({
        x: contact__gr.bbox().width/2-contact__title.bbox().width/2,
        y: contact__gr.bbox().height/2-contact__title.bbox().height/2+10
    })
    var contact_underline = contact__gr.line(contact__gr.bbox().width/2-contact__title.bbox().width/2, contact__gr.bbox().height/2+contact__title.bbox().height/2-10, contact__gr.bbox().width/2+contact__title.bbox().width/2, contact__gr.bbox().height/2+contact__title.bbox().height/2-10)
    contact_underline.stroke({ width: 3, color: "#bf5b5bff", linecap: 'round' })
    
    contact__gr.attr({
        opacity: 0.0,
        x: 0,
        y: double_screen_height-contact__gr.bbox().height-40
        //y: design__gr.bbox().height+20+development__gr.bbox().height+20+moodboard__gr.bbox().height+50
    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    contact_clicked = false;

    contact__gr.click(function() {
        console.log("CLICKED!")

        // CONTACT CLICKED
        if (contact_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "contact";
            run_page_transition(target_page_name, "2_plane_swipe_up_and_down", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            contact_clicked = true;

            nav_bar__reset(bar_gr)

        }
        // CONTACT DEACTIVATED
        else {
        
            contact_clicked = false;
        }
    })


    des_dev_mood__gr.attr({
        x: 0,
        y: double_screen_height/2+design__gr.bbox().height-30,
        id: "des_dev_mood__gr"
    })


    var trigger_y_position__hp_canvas = hp__div_bottom_y;
        sc_trigger__create(trigger_y_position__hp_canvas,
            "hp_canvas__trigger",
            screen_height,
            // activate_fn
            function() {
                buttons__animate__activate(hp__mobile_info, 
                    screen_width_in_px, 
                    double_screen_height)


            },
            // deactivate
            function() {
                buttons__animate__deactivate(hp__mobile_info, 
                    screen_width_in_px, 
                    double_screen_height)

            });
    //-----------------OBJECTS-------------------

    var hp__mobile_info = {
        "parentheses":         parentheses,
        "ui_and_ux":           ui_and_ux,
        "dots":                dots,
        "nevena":              nevena,
        "designer_dev__gr":    designer_dev__gr,
        "designer_dev__rect":  designer_dev__rect,
        "designer_dev__title": designer_dev__title,
        "design__gr":          design__gr,
        "development__gr":     development__gr,
        "moodboard__gr":       moodboard__gr,
        "contact__gr":         contact__gr

    }
    

    return hp__mobile_info
}

function hp_top__animate(hp__mobile_info, screen_width_in_px, screen_height){
    var parentheses         = hp__mobile_info["parentheses"];
    var ui_and_ux           = hp__mobile_info["ui_and_ux"];
    var dots                = hp__mobile_info["dots"];
    var nevena              = hp__mobile_info["nevena"];
    var designer_dev__gr    = hp__mobile_info["designer_dev__gr"];
    var designer_dev__rect  = hp__mobile_info["designer_dev__rect"];
    var designer_dev__title = hp__mobile_info["designer_dev__title"];

    parentheses.animate({
        duration: 2000,
    }).attr({
        opacity: 1.0
    })
    dots.animate({
        duration: 2000,
    }).attr({
        opacity: 1.0
    })
    nevena.animate({
        duration: 600
    }).move(screen_width_in_px/2-nevena.bbox().width/2-232,ui_and_ux.bbox().y-70)
    designer_dev__rect.animate({
        duration: 500
    }).attr({
        x: 0
    })
    ui_and_ux.animate({
        delay:    100,
        duration: 500
    }).move(screen_width_in_px/2+ui_and_ux.bbox().width+97,screen_height/2)

    designer_dev__title.animate({
        delay:    150,
        duration: 700
    }).attr({
        x: designer_dev__gr.bbox().width/2-designer_dev__title.bbox().width/2-70,
        y: designer_dev__gr.bbox().height/2-designer_dev__title.bbox().height/2+10
    })
        
}


function buttons__animate__activate(hp__mobile_info, screen_width_in_px, double_screen_height){
    var design__gr         = hp__mobile_info["design__gr"];
    var development__gr    = hp__mobile_info["development__gr"];
    var moodboard__gr      = hp__mobile_info["moodboard__gr"];
    var contact__gr        = hp__mobile_info["contact__gr"]
    
    design__gr.animate({
        duration: 600,
    }).attr({
        opacity: 1.0,
        y: 20
    })
    development__gr.animate({
        duration: 600,
        delay:    400
    }).attr({
        opacity: 1.0,
        y:design__gr.bbox().height+40
    })
    moodboard__gr.animate({
        duration: 600,
        delay:    800
    }).attr({
        opacity: 1.0,
        y:design__gr.bbox().height+20+development__gr.bbox().height+40
    })
    contact__gr.animate({
        duration: 600,
        delay:    900
    }).attr({
        opacity: 1.0,
        y: double_screen_height-contact__gr.bbox().height-40

    })
  
        
}


function buttons__animate__deactivate(hp__mobile_info, screen_width_in_px, double_screen_height){
    var design__gr         = hp__mobile_info["design__gr"];
    var development__gr    = hp__mobile_info["development__gr"];
    var moodboard__gr      = hp__mobile_info["moodboard__gr"];
    var contact__gr        = hp__mobile_info["contact__gr"]
    
    moodboard__gr.animate({
        duration: 400,
    }).attr({
        opacity: 0.0,
        y:design__gr.bbox().height+20+development__gr.bbox().height,
    })
    .after(function(){

        development__gr.animate({
            duration: 500,
        }).attr({
            opacity: 0.0,
            y:design__gr.bbox().height
        })
        design__gr.animate({
            duration: 600,
            delay:    900
        }).attr({
            opacity: 0.0,
            y:-20
        })
    })
}

