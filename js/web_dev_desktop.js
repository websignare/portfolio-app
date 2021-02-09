function web_development__main() {

    web_development__activate();

    $(window).resize(function() {
        
        web_development__deactivate();

        web_development__activate();
    });
}

function web_development__activate(bar_gr) {

    document.title = "web_development"
    window.history.pushState({page: "web_development"},"", "#web_development");

    $("body").append(`
        <div id="web_development">
            <div id="wrapper">
            </div>

            <div id="web_development__headline_animation_info">
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

    web_development__create_responsive(bar_gr);
    current_page = "web_development"
}
    
function web_development__deactivate() {

    $("#web_development").remove();
    $("#sketch_p5").remove();
    $("#technologies__mobile__info").remove();
    $("#contact_wrapper").remove();

    /*remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/

}

function web_development__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#web_development #wrapper").css({                    
        "background-color": '#d9d9d9ff',
        "position":         "relative",
        "height":           screen_height+500,
        "width":            screen_width_in_px
    }); 

    $("#web_development #web_development__headline_animation_info").css({                    
        "background-color": '#d9d9d9ff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_development #web_development__animations").css({                    
        "background-color": '#d9d9d9ff',
        "position":         "relative",
        "width":            screen_width_in_px
    });

    $("#web_development #web_development__headline__info").css({                    
        "background-color": '#4f7779ff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_development #video__info").css({                    
        "background-color": '#012a31ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var container       = SVG().addTo("#web_development #wrapper").size(screen_width_in_px, screen_height+500)
    var container_gr    = container.nested()   

    var headline_animation__container    = SVG().addTo("#web_development #web_development__headline_animation_info").size(screen_width_in_px, screen_height/2)
    var headline_animation__container_gr = headline_animation__container.nested()

    var web_development__animations_canvas    = SVG().addTo("#web_development #web_development__animations").size(screen_width_in_px, 3000)
    var web_development__animations_canvas_gr = web_development__animations_canvas.nested()

    var headline_container     = SVG().addTo("#web_development #web_development__headline__info").size(screen_width_in_px, screen_height/2)
    var headline__container_gr = headline_container.nested()

    var video_canvas    = SVG().addTo("#web_development #video__info").size(screen_width_in_px, screen_height)
    var video_canvas_gr = video_canvas.nested()

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //intro(container_gr, screen_width_in_px, screen_height)
        //nevena(container_gr, screen_width_in_px, screen_height)
        //web_design(container_gr, screen_width_in_px, screen_height)
        web_development(container_gr, screen_width_in_px, screen_height)
        //animation(container_gr, screen_width_in_px, screen_height)
        //contact(container_gr, screen_width_in_px, screen_height)
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
        var web_development__layout_gr = web_development__create_background__desktop(container_gr, bar_gr, screen_width_in_px, screen_height+500)
        var web_development__background_gr = web_development__layout_gr.find("#web_development__background_gr")
        web_development__images__desktop(web_development__background_gr, screen_width_in_px, screen_height)

        web_development_text__desktop(container_gr, screen_width_in_px, screen_height)

        web_development__headline_animation_info(headline_animation__container_gr, screen_width_in_px, screen_height)
        animations(web_development__animations_canvas_gr, screen_width_in_px, 3000, screen_height)
        web_development__headline__info(headline__container_gr, screen_width_in_px, screen_height)
        technology_components(screen_width_in_px, screen_height)
        web_development__video(video_canvas_gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)
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
    
        var a_rect = a_rect_gr.rect(rect_width+screen_width_in_px,a_rect_height)
        a_rect.attr({
                fill: "#597f83ff",
                x: a_rect_x-rect_width-screen_width_in_px,
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
                x: b_rect_x-rect_width,
                y: b_rect_y
            })
    
        // C__RECT 
        var c_rect_gr = rects_gr.nested()

        var c_rect_width  = image_gr_2.width()
        var c_rect_height = image_gr_2.height()
        var c_rect_x      = image_gr_2.x()
        var c_rect_y      = image_gr_2.y()
     
        var c_rect = c_rect_gr.rect(rect_width+screen_width_in_px,c_rect_height)
            .attr({
                fill: "#597f83ff",
                x: c_rect_x+c_rect_width,
                y: c_rect_y
            })

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

    plus_symbol.fill('#cdcdcdff')
    plus_symbol.move(plus_symbol_gr.bbox().width+plus_symbol.bbox().width+150,screen_height/2+plus_symbol.bbox().height+70)
    //plus_symbol.rotate(180)
    plus_symbol.scale(5.8)
    plus_symbol.attr({id: 'plus_symbol'})

    plus_symbol_gr.attr({
        id: "plus_symbol_gr"
    })
    //---------------------DEV-TITLE--------------------
    var develop_path__gr = text_gr.nested()
    var develop_path = develop_path__gr.path("m 1048.5132,-1272.4361 q 0,-0.6632 0.3411,-1.1843 0.3316,-0.5306 0.919,-0.8338 0.5875,-0.3127 1.3644,-0.3127 0.7769,0 1.3738,0.3127 0.5874,0.3032 0.9285,0.8243 0.3316,0.5116 0.3316,1.1559 0,0.379 -0.1231,0.7106 -0.1232,0.3316 -0.3127,0.5874 -0.1895,0.2464 -0.379,0.3885 -0.199,0.1326 -0.3316,0.1326 l -0.1232,-0.2937 h 0.6917 q 0.2463,0 0.4169,0.1611 0.161,0.1611 0.161,0.4074 0,0.2463 -0.161,0.4074 -0.1611,0.1611 -0.4169,0.1611 h -5.9501 q -0.2463,0 -0.4074,-0.1611 -0.1706,-0.1611 -0.1706,-0.4074 0,-0.2463 0.1706,-0.4074 0.1611,-0.1611 0.4074,-0.1611 h 2.4066 l -0.085,0.1611 q -0.1232,0 -0.2937,-0.1327 -0.1801,-0.1326 -0.3506,-0.36 -0.18,-0.2274 -0.2937,-0.5211 -0.1137,-0.3032 -0.1137,-0.6348 z m 1.0422,0.1421 q 0,0.4169 0.2085,0.7296 0.2084,0.3126 0.5684,0.4926 0.3506,0.1706 0.8054,0.1706 0.4453,0 0.8148,-0.1706 0.3601,-0.18 0.5685,-0.4926 0.2084,-0.3127 0.2084,-0.7296 0,-0.4169 -0.2084,-0.7201 -0.2084,-0.3126 -0.5685,-0.4832 -0.3695,-0.18 -0.8148,-0.18 -0.4548,0 -0.8054,0.18 -0.36,0.1706 -0.5684,0.4832 -0.2085,0.3032 -0.2085,0.7201 z m 4.2162,5.6382 q 0,0.8053 -0.3316,1.4022 -0.3411,0.5875 -0.919,0.9096 -0.578,0.3127 -1.3075,0.3127 -0.8527,0 -1.4496,-0.3411 -0.6064,-0.3506 -0.9286,-0.9096 -0.3221,-0.559 -0.3221,-1.1843 0,-0.4832 0.199,-0.9096 0.1989,-0.4358 0.5495,-0.7674 0.3411,-0.3317 0.7959,-0.5212 0.4547,-0.1989 0.9664,-0.1989 0.2274,0.01 0.3695,0.18 0.1421,0.1705 0.1421,0.3979 v 3.6194 l -0.9474,0.2842 v -3.4772 l 0.1895,0.2084 h -0.2559 q -0.2747,0.019 -0.4927,0.199 -0.2179,0.1706 -0.3411,0.4358 -0.1326,0.2559 -0.1326,0.5496 0,0.2842 0.076,0.5306 0.076,0.2463 0.2558,0.4263 0.1801,0.18 0.4832,0.2843 0.3032,0.1042 0.7675,0.1042 0.5116,0 0.8717,-0.2085 0.3505,-0.2179 0.54,-0.5495 0.18,-0.3411 0.18,-0.7201 0,-0.3505 -0.057,-0.559 -0.057,-0.2084 -0.1326,-0.3316 -0.085,-0.1326 -0.1422,-0.2369 -0.085,-0.1705 -0.085,-0.3221 0,-0.2084 0.1421,-0.3411 0.1421,-0.1421 0.3316,-0.1421 0.2558,0 0.4643,0.2653 0.2084,0.2463 0.3695,0.6916 0.1515,0.4453 0.1515,0.9191 z m -5.1637,3.7764 q 0,-0.2179 0.1706,-0.379 0.1611,-0.1611 0.4169,-0.1611 0.066,0 0.1231,0.01 0.048,0.01 0.095,0.028 l 3.9036,1.4496 q 0.1895,0.066 0.2937,0.2369 0.095,0.1705 0.066,0.36 -0.019,0.3222 -0.36,0.4832 l -2.7003,0.938 0.01,-0.2463 2.6908,0.8811 q 0.3411,0.1611 0.3601,0.4832 0.029,0.1801 -0.066,0.3601 -0.1042,0.1705 -0.2937,0.2368 l -3.9035,1.4497 q -0.1043,0.038 -0.218,0.038 -0.2274,0 -0.4074,-0.1515 -0.18,-0.1516 -0.18,-0.4169 0,-0.1801 0.085,-0.3222 0.085,-0.1421 0.2747,-0.1989 l 3.1077,-1.1465 -0.019,0.2369 -2.3403,-0.8622 q -0.3505,-0.1516 -0.3505,-0.5211 0,-0.2085 0.095,-0.3127 0.085,-0.1137 0.2558,-0.18 l 2.3403,-0.8622 0.038,0.2843 -3.1266,-1.1654 q -0.3601,-0.1137 -0.3601,-0.5496 z m 94.8447,-8.2718 q 1.6317,0 2.9137,0.8391 1.3054,0.8159 2.0513,2.261 0.7692,1.4453 0.7692,3.3566 0,1.9115 -0.7692,3.3801 -0.7459,1.4451 -2.0279,2.2842 -1.2588,0.8159 -2.8439,0.8159 -0.9323,0 -1.7482,-0.3029 -0.8158,-0.3032 -1.4452,-0.7693 -0.6061,-0.4662 -0.9557,-0.9325 -0.3264,-0.4895 -0.3264,-0.8157 l 0.7226,-0.3031 v 6.1305 q 0,0.6061 -0.3962,1.0023 -0.3963,0.4196 -1.0023,0.4196 -0.6061,0 -1.0024,-0.3962 -0.3962,-0.3963 -0.3962,-1.0257 v -14.2889 q 0,-0.6061 0.3962,-1.0024 0.3963,-0.4196 1.0024,-0.4196 0.606,0 1.0023,0.4196 0.3962,0.3963 0.3962,1.0024 v 1.1421 l -0.3962,-0.2097 q 0,-0.303 0.3263,-0.7226 0.3264,-0.443 0.8858,-0.8626 0.5594,-0.4428 1.282,-0.7225 0.746,-0.2797 1.5618,-0.2797 z m -0.3496,2.5641 q -1.0257,0 -1.7949,0.5128 -0.7692,0.5127 -1.2121,1.3986 -0.4196,0.8624 -0.4196,1.9812 0,1.0957 0.4196,2.0047 0.4429,0.8859 1.2121,1.3986 0.7692,0.5128 1.7949,0.5128 1.0256,0 1.7715,-0.5128 0.7692,-0.5127 1.1888,-1.3986 0.4429,-0.909 0.4429,-2.0047 0,-1.1188 -0.4429,-1.9812 -0.4196,-0.8859 -1.1888,-1.3986 -0.7459,-0.5128 -1.7715,-0.5128 z m -8.4215,3.916 q 0,1.9114 -0.8624,3.3799 -0.8392,1.4453 -2.2844,2.261 -1.4219,0.8159 -3.1934,0.8159 -1.7716,0 -3.2168,-0.8159 -1.4219,-0.8157 -2.2844,-2.261 -0.8391,-1.4685 -0.8391,-3.3799 0,-1.9115 0.8391,-3.3566 0.8625,-1.4685 2.2844,-2.2844 1.4452,-0.8391 3.2168,-0.8391 1.7715,0 3.1934,0.8391 1.4452,0.8159 2.2844,2.2844 0.8624,1.4451 0.8624,3.3566 z m -2.7972,0 q 0,-1.1888 -0.4895,-2.0513 -0.4662,-0.8857 -1.282,-1.3752 -0.7925,-0.4895 -1.7715,-0.4895 -0.9791,0 -1.7949,0.4895 -0.7925,0.4895 -1.2821,1.3752 -0.4662,0.8625 -0.4662,2.0513 0,1.1655 0.4662,2.0513 0.4896,0.8624 1.2821,1.3519 0.8158,0.4895 1.7949,0.4895 0.979,0 1.7715,-0.4895 0.8158,-0.4895 1.282,-1.3519 0.4895,-0.8858 0.4895,-2.0513 z m -12.2089,4.8018 q 0,0.6061 -0.4195,1.0257 -0.3963,0.3963 -1.0024,0.3963 -0.5827,0 -0.979,-0.3963 -0.3962,-0.4196 -0.3962,-1.0257 v -14.4055 q 0,-0.606 0.3962,-1.0023 0.4196,-0.4196 1.0257,-0.4196 0.606,0 0.979,0.4196 0.3962,0.3963 0.3962,1.0023 z m -10.7943,1.655 q -1.9813,0 -3.4498,-0.8159 -1.4452,-0.8391 -2.2378,-2.261 -0.7692,-1.4218 -0.7692,-3.2167 0,-2.0979 0.8392,-3.5664 0.8624,-1.4918 2.2377,-2.2845 1.3753,-0.7924 2.9137,-0.7924 1.1888,0 2.2378,0.4895 1.0723,0.4895 1.8881,1.3519 0.8158,0.8391 1.282,1.958 0.4895,1.1189 0.4895,2.3776 -0.023,0.5595 -0.4428,0.9091 -0.4196,0.3497 -0.9791,0.3497 h -8.9043 l -0.6993,-2.331 h 8.5547 l -0.5128,0.4663 v -0.6294 q -0.047,-0.676 -0.4895,-1.2122 -0.4196,-0.536 -1.0723,-0.8392 -0.6293,-0.3262 -1.352,-0.3262 -0.6993,0 -1.3053,0.1864 -0.6061,0.1865 -1.0489,0.6293 -0.4429,0.443 -0.6993,1.1888 -0.2565,0.746 -0.2565,1.8881 0,1.2588 0.5129,2.1446 0.5361,0.8624 1.3519,1.3287 0.8392,0.4428 1.7716,0.4428 0.8624,0 1.3753,-0.1399 0.5128,-0.1398 0.8158,-0.3262 0.3263,-0.2098 0.5828,-0.3496 0.4195,-0.2098 0.7925,-0.2098 0.5128,0 0.8391,0.3496 0.3497,0.3497 0.3497,0.8158 0,0.6293 -0.6527,1.1422 -0.606,0.5128 -1.7016,0.9091 -1.0956,0.3729 -2.2611,0.3729 z m -18.1733,-12.7039 q 0.4429,0 0.8159,0.2332 0.3729,0.2098 0.5594,0.6526 l 3.4265,7.8321 -0.5128,0.2331 3.4965,-8.0419 q 0.3963,-0.9324 1.2354,-0.8857 0.5828,0 0.9324,0.3729 0.373,0.3497 0.373,0.8858 0,0.1632 -0.07,0.3497 -0.047,0.1864 -0.1166,0.3496 l -4.359,9.6037 q -0.3729,0.8391 -1.1888,0.8858 -0.4429,0.07 -0.8625,-0.1633 -0.3962,-0.233 -0.606,-0.7225 l -4.3357,-9.6037 q -0.047,-0.117 -0.1166,-0.3031 -0.047,-0.1864 -0.047,-0.4428 0,-0.4196 0.3729,-0.8159 0.373,-0.4196 1.0024,-0.4196 z m -8.1869,12.7039 q -1.9813,0 -3.4498,-0.8159 -1.4452,-0.8391 -2.2378,-2.261 -0.7692,-1.4218 -0.7692,-3.2167 0,-2.0979 0.8392,-3.5664 0.8624,-1.4918 2.2377,-2.2845 1.3753,-0.7924 2.9137,-0.7924 1.1888,0 2.2378,0.4895 1.0723,0.4895 1.8881,1.3519 0.8158,0.8391 1.282,1.958 0.4896,1.1189 0.4896,2.3776 -0.023,0.5595 -0.4429,0.9091 -0.4196,0.3497 -0.9791,0.3497 h -8.9043 l -0.6993,-2.331 h 8.5547 l -0.5128,0.4663 v -0.6294 q -0.047,-0.676 -0.4895,-1.2122 -0.4196,-0.536 -1.0723,-0.8392 -0.6293,-0.3262 -1.352,-0.3262 -0.6993,0 -1.3053,0.1864 -0.6061,0.1865 -1.0489,0.6293 -0.4429,0.443 -0.6993,1.1888 -0.2565,0.746 -0.2565,1.8881 0,1.2588 0.5129,2.1446 0.5361,0.8624 1.3519,1.3287 0.8392,0.4428 1.7716,0.4428 0.8624,0 1.3753,-0.1399 0.5128,-0.1398 0.8158,-0.3262 0.3264,-0.2098 0.5828,-0.3496 0.4195,-0.2098 0.7925,-0.2098 0.5128,0 0.8392,0.3496 0.3496,0.3497 0.3496,0.8158 0,0.6293 -0.6527,1.1422 -0.606,0.5128 -1.7016,0.9091 -1.0956,0.3729 -2.2611,0.3729 z m -10.1875,-17.4824 q 0.6061,0 1.0024,0.3963 0.3962,0.3962 0.3962,1.0256 v 14.4055 q 0,0.6061 -0.3962,1.0257 -0.3963,0.3963 -1.0024,0.3963 -0.606,0 -1.0023,-0.3963 -0.3963,-0.4196 -0.3963,-1.0257 v -1.1421 l 0.5129,0.2097 q 0,0.303 -0.3264,0.746 -0.3263,0.4196 -0.8858,0.8392 -0.5594,0.4195 -1.3286,0.7225 -0.7459,0.2797 -1.6317,0.2797 -1.6084,0 -2.9137,-0.8159 -1.3054,-0.8391 -2.0746,-2.2842 -0.7459,-1.4686 -0.7459,-3.3567 0,-1.9115 0.7459,-3.3566 0.7692,-1.4685 2.0513,-2.2844 1.282,-0.8391 2.8438,-0.8391 1.0023,0 1.8414,0.3029 0.8392,0.3032 1.4453,0.7693 0.6293,0.4662 0.9556,0.9557 0.3497,0.4663 0.3497,0.7925 l -0.8392,0.3031 v -6.2471 q 0,-0.606 0.3963,-1.0023 0.3963,-0.4196 1.0023,-0.4196 z m -4.7086,14.9183 q 1.0257,0 1.7949,-0.5128 0.7692,-0.5127 1.1888,-1.3986 0.4429,-0.8858 0.4429,-1.9813 0,-1.1188 -0.4429,-2.0046 -0.4196,-0.8859 -1.1888,-1.3986 -0.7692,-0.5128 -1.7949,-0.5128 -1.0023,0 -1.7715,0.5128 -0.7692,0.5127 -1.2121,1.3986 -0.4196,0.8858 -0.4196,2.0046 0,1.0955 0.4196,1.9813 0.4429,0.8859 1.2121,1.3986 0.7692,0.5128 1.7715,0.5128 z")
    develop_path__gr.attr({
        id:    "develop_path__gr",
    })
    develop_path.fill('#863845ff')
    develop_path.move(develop_path.bbox().width+145,screen_height/2-develop_path.bbox().height-15)
    //develop_path.rotate(-90)
    develop_path.scale(4.8)
    develop_path.attr({id: 'develop_path'})

    //-----------------QUOTES------------------------

    var paragraph = text_gr.text(function(add){
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine() 
        add.tspan('').newLine()
        add.tspan('-Mary Lou Cook').newLine().dx(270).font({size:'19'})
    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#863845ff',
            family:  'Quicksand',
            size:    23
        })    
    paragraph.attr({
        x: 130,
        y: screen_height/2+35
    })  

}
//-------------------------HEADLINE-ANIMATION-INFO----------------------------------//
function web_development__headline_animation_info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var yellow_rect = headline_gr.rect(screen_width_in_px,screen_height/20)
    .fill('#863845ff')
    yellow_rect.attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':    headline_gr.bbox().height-yellow_rect.bbox().height-20
    })

    var work_title = headline_gr.text(function(add){
        add.tspan('P').font({weight: '500', size:'190'})
        add.tspan('rocedural art')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#863845ff',
            family:  'Quicksand',
            size:    130
        })    
    work_title.attr({
        x: screen_width_in_px/2-work_title.bbox().width/2,
        y: headline_gr.bbox().height/2+work_title.bbox().height+100
    })

    var paragraph = headline_gr.text(function(add){
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine()         
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine() 

    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#863845ff',
            family:  'Quicksand',
            size:    23
        })    
    paragraph.attr({
        x: work_title.bbox().width/2+paragraph.bbox().width,
        y: work_title.bbox().y-paragraph.bbox().height+50
    })  

     /*
    var my_title = headline_gr.text(function(text_element){
        text_element.tspan('art')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#cdcdcdff',
            family:  'Quicksand',
            size:    70
        })    
   my_title.attr({
       x: work_title.bbox().x+work_title.bbox().width+5,
       y: work_title.bbox().y+my_title.bbox().height+25
   })
    my_title.rotate(-90)*/
}

//-------------------------HEADLINE-INFO----------------------------------//
function web_development__headline__info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var yellow_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#812f3eff')
    .attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':     screen_height/4
    })
 
    var my_title = headline_gr.text(function(text_element){
         text_element.tspan('about')
     })
         .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#d9d9d9ff',
             family:  'Quicksand',
             size:    50
         })    
    my_title.attr({
        x: yellow_rect.bbox().x+yellow_rect.bbox().width-25,
        y: yellow_rect.bbox().y+my_title.bbox().height
    })
     my_title.rotate(-90)
 
     var work_title = headline_gr.text(function(text_element){
         text_element.tspan('technologies')
     })
         .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#d9d9d9ff',
             family:  'Quicksand',
             size:    135
         })    
    work_title.attr({
        x: yellow_rect.bbox().x+yellow_rect.bbox().width+my_title.bbox().height+25,
        y: yellow_rect.bbox().y+yellow_rect.bbox().height-10
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
