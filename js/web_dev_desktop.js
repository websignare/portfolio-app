function web_development__main() {

    web_development__activate();

    $(window).resize(function() {
        
        web_development__deactivate();

        web_development__activate();
    });
}

function web_development__activate(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    document.title = "web_development"
    window.history.pushState({page: "web_development"},"", "#web_development");

    $("body").append(`
        <div id="web_development">
            <div id="wrapper">
            </div>
            <div id="web_development__animations">
            </div>

            <div id="web_development__headline__info">
            </div>

            <div id="tech_components"></div>

            <div id="video__info">
            </div>
        </div>
    `);

    var develop__desktop_info = web_development__create_responsive(bar_gr);
    develop_animate__activate(develop__desktop_info, screen_width_in_px, screen_height)
    current_page = "web_development"
}
    
function web_development__deactivate() {

    $("#web_development").remove();
    $("#sketch_p5").remove();
    //$("#technologies__mobile__info").remove();
    $("#contact_wrapper").remove();

    /*remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/

}

function web_development__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#web_development #wrapper").css({                    
        "background-color": '#ece8e7f3',
        "position":         "relative",
        "height":           screen_height+screen_height/3,
        "width":            screen_width_in_px
    }); 

    $("#web_development #web_development__animations").css({                    
        "background-color": '#762d39ff',
        "position":         "relative",
        "width":            screen_width_in_px
    });

    $("#web_development #web_development__headline__info").css({                    
        "background-color": '#0e282eff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 
    $("#web_development #tech_components").css({                    
        "background-color": '#0e282eff',
        "position":         "relative",
        "height":           screen_height+250,
        "width":            screen_width_in_px
    }); 
    $("#web_development #video__info").css({                    
        "background-color": '#27040aff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var container       = SVG().addTo("#web_development #wrapper").size(screen_width_in_px, screen_height+screen_height/3)
    var container_gr    = container.nested()   

    var web_development__animations_canvas    = SVG().addTo("#web_development #web_development__animations").size(screen_width_in_px, 3100)
    var web_development__animations_canvas_gr = web_development__animations_canvas.nested()

    var headline_container     = SVG().addTo("#web_development #web_development__headline__info").size(screen_width_in_px, screen_height/2)
    var headline__container_gr = headline_container.nested()

    var video_canvas    = SVG().addTo("#web_development #video__info").size(screen_width_in_px, screen_height)
    var video_canvas_gr = video_canvas.nested()

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //web_development__mobile__activate(bar_gr)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        //var layout_tablet_gr = create_background__tablet(container_gr, screen_width_in_px, screen_height)
        //var background_white_tablet_gr = layout_tablet_gr.findOne('#background_white_tablet_gr')
        //section_images__tablet(background_white_tablet_gr, screen_width_in_px, screen_height)
        //create_text__tablet(container_gr, wrapperscreen_width_in_px, screen_height)
        //buttons_tablet(container_gr, screen_height, screen_width_in_px)
        //create_contact_section(contact_gr, screen_width_in_px)

    }

    else {
        var web_development__layout_gr = web_development__create_background__desktop(container_gr, bar_gr, screen_width_in_px, screen_height)
        var web_development__background_gr = web_development__layout_gr.find("#web_development__background_gr")
        var develop__top_rects = web_development__images__desktop(web_development__background_gr, screen_width_in_px, screen_height)

        var develop_text_info = web_development_text__desktop(container_gr, screen_width_in_px, screen_height)
        animations(web_development__animations_canvas_gr, screen_width_in_px, 3100, screen_height)
        web_development__headline__info(headline__container_gr, screen_width_in_px, screen_height)
        technology_components()
        web_development__video(video_canvas_gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)

        // RETURNED INFO
        var develop__desktop_info = {
            "develop__top_rects": develop__top_rects,
            "develop_text_info":  develop_text_info
        }

        return develop__desktop_info
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function web_development__create_background__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var web_development__layout_gr = parent_gr.nested()

    var web_development__background_gr = web_development__layout_gr.nested()
        .attr({
            id: "web_development__background_gr",
        })

    var background_color = web_development__background_gr.rect(screen_width_in_px,screen_height)
        .fill('#759aa292')
        .attr({
            id:      "background_color",
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#c2c2c2ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })

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

    
    return web_development__layout_gr

}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function web_development__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    images_gr.attr({
        width: screen_width_in_px,
        height: screen_height,
    })

    var rect_height = screen_height/6.6;
    var rect_width  = screen_width_in_px/2-100
    var images_data = {
        'title': 'images',

        'elements_data':[

            {
                'img_url':   './../portfolio-app-media/media/dd_1.png',
                'width':     rect_width/2.25, // %
                'position_x': screen_width_in_px/2-rect_width/2+100,
                'position_y': 60,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_2.png',
                'width':     rect_width/2.1,
                'position_x': screen_width_in_px/2-rect_width/1.75+100,
                'position_y': rect_height+75,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/d_3.png',
                'width':     rect_width/1.8,
                'position_x': screen_width_in_px/2-rect_width/1.45+100,
                'position_y': rect_height*2+90,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_4.png',
                'width':     rect_width/1.6,
                'position_x': screen_width_in_px/2-rect_width/1.1+175,
                'position_y': rect_height*3+105,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_5.png',
                'width':     rect_width/2.25,
                'position_x': screen_width_in_px/2-rect_width/1.49+100,
                'position_y': rect_height*4+120,
                'view_box_x': '0',
                'view_box_y': '0'
            },

        ]
    }
    //var elements_width_percentage = images_data['elements_data']['width']
    //var elements_width_px         = images_gr_width*(elements_width_percentage*0.01)

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']

    var width_0 = images_data['elements_data'][0]['width']
    var width_1 = images_data['elements_data'][1]['width']
    var width_2 = images_data['elements_data'][2]['width']
    var width_3 = images_data['elements_data'][3]['width']
    var width_4 = images_data['elements_data'][4]['width']

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

    function create_image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y})
        var image_gr = image__gr_arr[0]

        var image_rect  = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
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

    var image_gr_0 = create_image(images_gr, img_url_0, width_0, rect_height,  position_x_0, position_y_0, view_box_x, view_box_y)
    create_image(images_gr, img_url_1, width_1, rect_height,  position_x_1, position_y_1, view_box_x, view_box_y)
    var image_gr_1 = create_image(images_gr, img_url_2, width_2, rect_height,  position_x_2, position_y_2, view_box_x, view_box_y)
    create_image(images_gr, img_url_3, width_3, rect_height,  position_x_3, position_y_3, view_box_x, view_box_y)
    var image_gr_2 = create_image(images_gr, img_url_4, width_4, rect_height,  position_x_4, position_y_4, view_box_x, view_box_y)


        var rect_width = rect_height;
        var rects_gr = images_gr.nested()
        var colors_map = get_colors();

        // A__RECT 
        var a_rect_gr = rects_gr.nested()

        var a_rect_width  = image_gr_0.width()
        var a_rect_height = image_gr_0.height()
        var a_rect_x      = image_gr_0.x()
        var a_rect_y      = image_gr_0.y()    
    
        var a_rect = a_rect_gr.rect(rect_width+500,a_rect_height)
        a_rect.attr({
                fill: "#597f83ff",
                x: -900,
                y: a_rect_y
            })
    
        // B__RECT 
        var b_rect_gr = rects_gr.nested()

        var b_rect_width  = image_gr_1.width()
        var b_rect_height = image_gr_1.height()
        var b_rect_x      = image_gr_1.x()
        var b_rect_y      = image_gr_1.y()
    
        var b_rect = b_rect_gr.rect(rect_width,b_rect_height)
        b_rect.attr({
                fill: "#597f83ff",
                x: b_rect_x-rect_width-800,
                y: b_rect_y
            })
    
        // C__RECT 
        var c_rect_gr = rects_gr.nested()

        var c_rect_width  = image_gr_2.width()
        var c_rect_height = image_gr_2.height()
        var c_rect_x      = image_gr_2.x()
        var c_rect_y      = image_gr_2.y()
     
        var c_rect = c_rect_gr.rect(rect_width+500,c_rect_height)
            .attr({
                fill: "#597f83ff",
                x: c_rect_x+c_rect_width+600,
                y: c_rect_y
            })

        var develop__top_rects = {
            "a_rect":        a_rect,
            "a_rect_x":      a_rect_x,
            "a_rect_width":  a_rect_width,
            "b_rect":        b_rect,
            "b_rect_x":      b_rect_x,
            "b_rect_width":  b_rect_width,
            "c_rect":        c_rect,
            "c_rect_x":      c_rect_x,
            "c_rect_width":  c_rect_width,
            "rect_width":    rect_width
        }
    
        return develop__top_rects

}

//----------------------------------------------TEXT----------------------------------------------------------------
function web_development_text__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2,
        x: screen_width_in_px/2
    })

    //---------------------------SYMBOL----------------------------------
    var plus_symbol_gr = text_gr.nested()

    var plus_symbol = plus_symbol_gr.path("m 786.55532,-1194.9604 q -8.7225,4.1731 -17.58674,0.962 -8.86429,-3.2113 -13.4382,-12.2013 -4.57384,-8.9899 -1.61756,-17.3908 2.95636,-8.4007 11.67886,-12.5738 l 147.91915,-70.7694 q 8.72249,-4.1732 17.58673,-0.962 8.67372,2.8367 13.24756,11.8266 4.57391,8.99 1.8082,17.7654 -2.95636,8.4008 -11.67886,12.5739 z m 110.57735,37.9196 q -10.17627,4.8687 -20.51203,1.4299 -9.97232,-3.6127 -15.30854,-14.101 l -74.32571,-146.0868 q -5.33622,-10.4883 -1.86135,-20.5346 3.47493,-10.0461 13.65119,-14.9147 10.53969,-5.0426 20.14852,-1.2561 9.97232,3.6126 15.30854,14.1009 l 74.32572,146.0869 q 5.33621,10.4883 2.22478,20.3606 -3.11144,9.8724 -13.65112,14.9149 z")
    plus_symbol_gr.css( "position", "fixed")

    plus_symbol.fill('#d2d1d1ff')
    plus_symbol.move(plus_symbol_gr.bbox().width+plus_symbol.bbox().width+150,screen_height/2+plus_symbol.bbox().height+70)
    //plus_symbol.rotate(180)
    plus_symbol.scale(5.8)
    plus_symbol.attr({id: 'plus_symbol'})

    plus_symbol_gr.attr({
        id: "plus_symbol_gr"
    })

    // SYMBOL ROTATION
    function rotatePositive() {
        plus_symbol.animate({duration: 3500}).ease(">").rotate(10).after(rotateNegative)
    }
        
    function rotateNegative() {
        plus_symbol.animate({duration: 3500}).ease(">").rotate(-10).after(rotatePositive)
    }
        
    rotatePositive()

    //---------------------DEV-TITLE--------------------
    var develop_path__gr = text_gr.nested()
    var develop_path = develop_path__gr.path("m -690.40775,1135.1677 q 2.21043,0 3.94719,1.1368 1.76834,1.1052 2.77882,3.063 1.04206,1.9578 1.04206,4.5472 0,2.5893 -1.04206,4.5787 -1.01048,1.9578 -2.74724,3.0946 -1.70519,1.1052 -3.85246,1.1052 -1.26309,0 -2.36831,-0.4105 -1.10521,-0.4105 -1.9578,-1.042 -0.82102,-0.6316 -1.29468,-1.2631 -0.44208,-0.6632 -0.44208,-1.1053 l 0.9789,-0.4105 v 8.3049 q 0,0.821 -0.53682,1.3578 -0.53681,0.5684 -1.35783,0.5684 -0.82101,0 -1.35783,-0.5368 -0.53682,-0.5368 -0.53682,-1.3894 v -19.357 q 0,-0.821 0.53682,-1.3578 0.53682,-0.5684 1.35783,-0.5684 0.82102,0 1.35783,0.5684 0.53682,0.5368 0.53682,1.3578 v 1.5473 l -0.53682,-0.2842 q 0,-0.4105 0.44209,-0.9789 0.44208,-0.6 1.19994,-1.1684 0.75786,-0.5999 1.73676,-0.9789 1.01048,-0.3789 2.11569,-0.3789 z m -0.47366,3.4735 q -1.38941,0 -2.43146,0.6947 -1.04206,0.6947 -1.64203,1.8947 -0.5684,1.1684 -0.5684,2.6841 0,1.4841 0.5684,2.7156 0.59997,1.2 1.64203,1.8947 1.04205,0.6947 2.43146,0.6947 1.38941,0 2.39989,-0.6947 1.04206,-0.6947 1.61045,-1.8947 0.59998,-1.2315 0.59998,-2.7156 0,-1.5157 -0.59998,-2.6841 -0.56839,-1.2 -1.61045,-1.8947 -1.01048,-0.6947 -2.39989,-0.6947 z m -11.40835,5.3051 q 0,2.5893 -1.16836,4.5787 -1.13679,1.9578 -3.0946,3.063 -1.92622,1.1052 -4.32611,1.1052 -2.39989,0 -4.3577,-1.1052 -1.92622,-1.1052 -3.09459,-3.063 -1.13679,-1.9894 -1.13679,-4.5787 0,-2.5894 1.13679,-4.5472 1.16837,-1.9894 3.09459,-3.0946 1.95781,-1.1368 4.3577,-1.1368 2.39989,0 4.32611,1.1368 1.95781,1.1052 3.0946,3.0946 1.16836,1.9578 1.16836,4.5472 z m -3.78929,0 q 0,-1.6105 -0.66313,-2.7789 -0.63155,-1.1999 -1.73676,-1.863 -1.07364,-0.6632 -2.39989,-0.6632 -1.32626,0 -2.43147,0.6632 -1.07363,0.6631 -1.73676,1.863 -0.63155,1.1684 -0.63155,2.7789 0,1.5788 0.63155,2.7788 0.66313,1.1683 1.73676,1.8315 1.10521,0.6631 2.43147,0.6631 1.32625,0 2.39989,-0.6631 1.10521,-0.6632 1.73676,-1.8315 0.66313,-1.2 0.66313,-2.7788 z m -16.53922,6.5049 q 0,0.821 -0.56839,1.3894 -0.53682,0.5368 -1.35784,0.5368 -0.78943,0 -1.32625,-0.5368 -0.53682,-0.5684 -0.53682,-1.3894 v -19.5149 q 0,-0.821 0.53682,-1.3578 0.56839,-0.5684 1.38941,-0.5684 0.82101,0 1.32625,0.5684 0.53682,0.5368 0.53682,1.3578 z m -14.62283,2.242 q -2.68409,0 -4.67347,-1.1052 -1.9578,-1.1368 -3.03144,-3.063 -1.04206,-1.9262 -1.04206,-4.3577 0,-2.842 1.13679,-4.8314 1.16837,-2.0209 3.03144,-3.0946 1.86307,-1.0736 3.94719,-1.0736 1.61045,0 3.03144,0.6631 1.45256,0.6632 2.55777,1.8315 1.10522,1.1368 1.73676,2.6525 0.66313,1.5158 0.66313,3.2209 -0.0316,0.7579 -0.59997,1.2316 -0.5684,0.4736 -1.32625,0.4736 h -12.0626 l -0.94733,-3.1577 h 11.58894 l -0.69471,0.6315 v -0.8526 q -0.0631,-0.9157 -0.66312,-1.642 -0.5684,-0.7263 -1.45257,-1.1368 -0.85259,-0.4421 -1.83149,-0.4421 -0.94733,0 -1.76834,0.2527 -0.82102,0.2526 -1.42099,0.8525 -0.59997,0.6 -0.94732,1.6105 -0.34735,1.0105 -0.34735,2.5578 0,1.7052 0.6947,2.9051 0.72628,1.1684 1.83149,1.7999 1.13679,0.6 2.39989,0.6 1.16837,0 1.86307,-0.1895 0.69471,-0.1894 1.10522,-0.4421 0.44208,-0.2842 0.78943,-0.4736 0.5684,-0.2842 1.07364,-0.2842 0.6947,0 1.13679,0.4736 0.47366,0.4737 0.47366,1.1053 0,0.8525 -0.88417,1.5473 -0.82101,0.6947 -2.30516,1.2315 -1.48414,0.5052 -3.06301,0.5052 z m -24.6191,-17.2097 q 0.59998,0 1.10521,0.3158 0.50524,0.2842 0.75786,0.8841 l 4.64189,10.6101 -0.6947,0.3157 4.73662,-10.8942 q 0.53682,-1.2631 1.67361,-1.1999 0.78944,0 1.2631,0.5052 0.50524,0.4737 0.50524,1.1999 0,0.2211 -0.0947,0.4737 -0.0632,0.2526 -0.15789,0.4737 l -5.90499,13.0099 q -0.50524,1.1368 -1.61045,1.1999 -0.59997,0.095 -1.16837,-0.221 -0.53682,-0.3158 -0.82101,-0.9789 l -5.87342,-13.0099 q -0.0631,-0.1579 -0.15788,-0.4105 -0.0632,-0.2527 -0.0632,-0.6 0,-0.5684 0.50524,-1.1052 0.50524,-0.5684 1.35783,-0.5684 z m -11.0906,17.2097 q -2.68408,0 -4.67346,-1.1052 -1.95781,-1.1368 -3.03144,-3.063 -1.04206,-1.9262 -1.04206,-4.3577 0,-2.842 1.13679,-4.8314 1.16837,-2.0209 3.03144,-3.0946 1.86307,-1.0736 3.94718,-1.0736 1.61046,0 3.03144,0.6631 1.45257,0.6632 2.55778,1.8315 1.10521,1.1368 1.73676,2.6525 0.66313,1.5158 0.66313,3.2209 -0.0316,0.7579 -0.59997,1.2316 -0.5684,0.4736 -1.32626,0.4736 h -12.0626 l -0.94732,-3.1577 h 11.58893 l -0.6947,0.6315 v -0.8526 q -0.0631,-0.9157 -0.66313,-1.642 -0.56839,-0.7263 -1.45256,-1.1368 -0.85259,-0.4421 -1.8315,-0.4421 -0.94732,0 -1.76833,0.2527 -0.82102,0.2526 -1.42099,0.8525 -0.59997,0.6 -0.94733,1.6105 -0.34735,1.0105 -0.34735,2.5578 0,1.7052 0.69471,2.9051 0.72628,1.1684 1.83149,1.7999 1.13679,0.6 2.39989,0.6 1.16837,0 1.86307,-0.1895 0.69471,-0.1894 1.10521,-0.4421 0.44209,-0.2842 0.78944,-0.4736 0.56839,-0.2842 1.07363,-0.2842 0.69471,0 1.13679,0.4736 0.47367,0.4737 0.47367,1.1053 0,0.8525 -0.88417,1.5473 -0.82102,0.6947 -2.30516,1.2315 -1.48414,0.5052 -3.06302,0.5052 z m -20.83028,-22.42 q 2.27358,0 4.04192,0.8526 1.76834,0.8526 2.96828,2.3999 1.23153,1.5157 1.8315,3.5367 0.63155,1.9893 0.63155,4.2629 0,3.063 -1.10522,5.5892 -1.10521,2.4947 -3.2209,3.9788 -2.08411,1.4841 -5.14713,1.4841 h -7.54702 q -0.82101,0 -1.38941,-0.5368 -0.53681,-0.5684 -0.53681,-1.3894 v -18.2518 q 0,-0.821 0.53681,-1.3578 0.5684,-0.5684 1.38941,-0.5684 z m -0.31577,18.4728 q 1.98938,0 3.25248,-1.0104 1.2631,-1.0421 1.83149,-2.7157 0.59997,-1.7052 0.59997,-3.6946 0,-1.4841 -0.34735,-2.8104 -0.31577,-1.3578 -1.01048,-2.3683 -0.6947,-1.042 -1.76834,-1.642 -1.07363,-0.6 -2.55777,-0.6 h -5.52606 l 0.31577,-0.2842 v 15.473 l -0.18946,-0.3474 z m -29.22004,-13.5783 q 2.21043,0 3.94719,1.1368 1.76834,1.1052 2.77882,3.063 1.04205,1.9578 1.04205,4.5472 0,2.5893 -1.04205,4.5787 -1.01048,1.9578 -2.74724,3.0946 -1.70519,1.1052 -3.85246,1.1052 -1.2631,0 -2.36831,-0.4105 -1.10521,-0.4105 -1.9578,-1.042 -0.82102,-0.6316 -1.29468,-1.2631 -0.44208,-0.6632 -0.44208,-1.1053 l 0.9789,-0.4105 v 2.3052 q 0,0.821 -0.53682,1.3894 -0.53682,0.5368 -1.35783,0.5368 -0.82102,0 -1.35783,-0.5368 -0.53682,-0.5368 -0.53682,-1.3894 v -19.8307 q 0,-0.821 0.53682,-1.3578 0.53681,-0.5684 1.35783,-0.5684 0.82101,0 1.35783,0.5684 0.53682,0.5368 0.53682,1.3578 v 8.0207 l -0.53682,-0.2842 q 0,-0.4105 0.44209,-0.9789 0.44208,-0.6 1.19994,-1.1684 0.75786,-0.5999 1.73676,-0.9789 1.01048,-0.3789 2.11569,-0.3789 z m -0.47366,3.4735 q -1.38941,0 -2.43147,0.6947 -1.04205,0.6947 -1.64202,1.8947 -0.5684,1.1684 -0.5684,2.6841 0,1.4841 0.5684,2.7156 0.59997,1.2 1.64202,1.8947 1.04206,0.6947 2.43147,0.6947 1.38941,0 2.39989,-0.6947 1.04206,-0.6947 1.61045,-1.8947 0.59997,-1.2315 0.59997,-2.7156 0,-1.5157 -0.59997,-2.6841 -0.56839,-1.2 -1.61045,-1.8947 -1.01048,-0.6947 -2.39989,-0.6947 z m -18.79107,14.052 q -2.68408,0 -4.67346,-1.1052 -1.95781,-1.1368 -3.03144,-3.063 -1.04206,-1.9262 -1.04206,-4.3577 0,-2.842 1.13679,-4.8314 1.16837,-2.0209 3.03144,-3.0946 1.86307,-1.0736 3.94718,-1.0736 1.61045,0 3.03144,0.6631 1.45257,0.6632 2.55778,1.8315 1.10521,1.1368 1.73676,2.6525 0.66313,1.5158 0.66313,3.2209 -0.0316,0.7579 -0.59998,1.2316 -0.56839,0.4736 -1.32625,0.4736 h -12.0626 l -0.94732,-3.1577 h 11.58893 l -0.6947,0.6315 v -0.8526 q -0.0632,-0.9157 -0.66313,-1.642 -0.56839,-0.7263 -1.45256,-1.1368 -0.85259,-0.4421 -1.8315,-0.4421 -0.94732,0 -1.76834,0.2527 -0.82101,0.2526 -1.42098,0.8525 -0.59997,0.6 -0.94733,1.6105 -0.34735,1.0105 -0.34735,2.5578 0,1.7052 0.69471,2.9051 0.72628,1.1684 1.83149,1.7999 1.13679,0.6 2.39989,0.6 1.16836,0 1.86307,-0.1895 0.6947,-0.1894 1.10521,-0.4421 0.44209,-0.2842 0.78944,-0.4736 0.56839,-0.2842 1.07363,-0.2842 0.69471,0 1.13679,0.4736 0.47366,0.4737 0.47366,1.1053 0,0.8525 -0.88416,1.5473 -0.82102,0.6947 -2.30516,1.2315 -1.48414,0.5052 -3.06302,0.5052 z m -11.9279,-22.5147 q 0.72628,0 1.38941,0.5684 0.66313,0.5368 0.66313,1.4841 0,0.2842 -0.0947,0.6316 l -6.22077,18.3149 q -0.18946,0.5684 -0.6947,0.8842 -0.47367,0.2842 -1.01048,0.3157 -0.53682,0 -1.07364,-0.3157 -0.50524,-0.3158 -0.78943,-0.9158 l -4.67347,-10.61 0.2842,0.1894 -4.61032,10.4206 q -0.28419,0.6 -0.82101,0.9158 -0.50524,0.3157 -1.04206,0.3157 -0.50524,-0.032 -1.01048,-0.3157 -0.50524,-0.3158 -0.6947,-0.8842 l -6.22077,-18.3149 q -0.0947,-0.3474 -0.0947,-0.6316 0,-0.9473 0.66313,-1.4841 0.6947,-0.5684 1.42098,-0.5684 0.59998,0 1.10522,0.3157 0.53681,0.3158 0.72628,0.9158 l 5.02082,15.2203 -0.69471,-0.032 4.48401,-10.768 q 0.25262,-0.5684 0.72628,-0.8841 0.47366,-0.3474 1.07363,-0.3158 0.59998,-0.032 1.07364,0.3158 0.47366,0.3157 0.6947,0.8841 l 4.10508,10.2943 -0.50524,0.3158 4.95766,-15.0309 q 0.18947,-0.6 0.72628,-0.9158 0.53682,-0.3157 1.13679,-0.3157 z")
    develop_path__gr.attr({
        id:    "develop_path__gr",
    })
    develop_path.fill('#863845ff')
    develop_path.move(develop_path.bbox().width+30,screen_height/2-develop_path.bbox().height-15)
    //develop_path.rotate(-90)
    develop_path.scale(3.2)
    develop_path.attr({id: 'develop_path'})
    develop_path__gr.attr({
        x:       800,
        opacity: 0.0
    })
    //-----------------QUOTES------------------------

    var paragraph = text_gr.text(function(add){
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine() 
        add.tspan('').newLine()
        add.tspan('-Mary Lou Cook').newLine().dx(270).font({size:'1rem'})
    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#863845ff',
            family:  'Quicksand',
            size:    "1.2rem"
        })    
    paragraph.attr({
        x: 800,
        y: screen_height/2+35
    })  

    var develop_text_info = {
        "develop_path__gr": develop_path__gr,
        "paragraph":        paragraph,
    }
    
    return develop_text_info;
}

//-------------------------HEADLINE-INFO----------------------------------//
function web_development__headline__info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var my_title = headline_gr.text(function(text_element){
         text_element.tspan('tech skills')
     })
         .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#dcb73aff',
             family:  'Quicksand',
             size:    "10vw"
         })    
    my_title.attr({
        x: headline_gr.bbox().width/2+my_title.bbox().width/2-10,
        y: 200
    })
 
}

function web_development__video(parent_gr, screen_width_in_px, screen_height){

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
                    <source src='./../portfolio-app-media/media/dev_video_kadar1.mp4' type='video/mp4'>
                </video>
                <video width="320" height="240" id='video__b' autoplay loop muted>
                    <source src='./../portfolio-app-media/media/dev_video_kadar2.mp4' type='video/mp4'>
                </video>
                <video width="320" height="240" id='video__c' autoplay loop muted>
                    <source src='./../portfolio-app-media/media/dev_video_kadar3.mp4' type='video/mp4'>
                </video>
            </div>`);
    
        $("#video__info").find("#video__container").css({
            opacity: 0.4
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

function develop_animate__activate(develop__desktop_info, screen_width_in_px, screen_height){

    var develop_path__gr = develop__desktop_info["develop_text_info"]["develop_path__gr"]
    var paragraph        = develop__desktop_info["develop_text_info"]["paragraph"]
    var rect_width      = develop__desktop_info["develop__top_rects"]["rect_width"]
    var a_rect           = develop__desktop_info["develop__top_rects"]["a_rect"]
    var a_rect_y         = develop__desktop_info["develop__top_rects"]["a_rect_y"]
    var a_rect_x         = develop__desktop_info["develop__top_rects"]["a_rect_x"]
    var b_rect           = develop__desktop_info["develop__top_rects"]["b_rect"]
    var b_rect_x         = develop__desktop_info["develop__top_rects"]["b_rect_x"]
    var b_rect_width    = develop__desktop_info["develop__top_rects"]["b_rect_width"]
    var c_rect           = develop__desktop_info["develop__top_rects"]["c_rect"]
    var c_rect_x         = develop__desktop_info["develop__top_rects"]["c_rect_x"]
    var c_rect_width    = develop__desktop_info["develop__top_rects"]["c_rect_width"]

    a_rect.animate({
        delay: 550,
        duration:500
    }).ease('>')
    .attr({
       x: a_rect_x-rect_width-500,
    })
    b_rect.animate({
        delay: 500,
        duration:500
    }).ease('>')
    .attr({
        x: b_rect_x-rect_width,
    })
    c_rect.animate({
        delay: 350,
        duration:500
    }).ease('>')
    .attr({
        x: c_rect_x+c_rect_width,
    })
    develop_path__gr.animate({
        delay: 350,
        duration:500
    }).ease('>')
    .attr({x: 0, opacity: 1.0})
    
    paragraph.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        x: 160,
        y: screen_height/2+35
    })

}