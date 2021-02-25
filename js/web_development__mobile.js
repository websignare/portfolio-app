$( document ).ready(function() {
    web_development__mobile__main()
    console.log( "web_development__ready!" );
});

function web_development__mobile__main() {
    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);  

    web_development__mobile__activate(bar_gr);

    $(window).resize(function() {

        web_development__mobile__deactivate();

        web_development__mobile__activate(bar_gr);

    });
}

function web_development__mobile__activate(bar_gr) {

    document.title = "web_development_mobile"
    window.history.pushState({page: "web_development_mobile"},"", "#web_development_mobile");

    $("body").append(`
        <div id="web_development__mobile">
            <div id="headline__info">
            </div>

            <div id="procedural_art__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);
    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    var develop__mobile_info = web_development__mobile__create_responsive(bar_gr);
    web_develop_top__animate(develop__mobile_info, screen_width_in_px, screen_height)
    current_page = "web_development_mobile"
}
    
function web_development__mobile__deactivate(bar_gr) {

    $("#web_development__mobile").remove();
    $("#contact_mobile_wrapper").remove();

}

function web_development__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#web_development__mobile").css({                    
        "background-color": '#d8d8d8ff',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#web_development__mobile #headline__info").css({     
        "position": "relative",
        "height":    screen_height,//+200,
        "width":     screen_width_in_px,
        
    }); 

   /* $("#web_development__mobile #technologies__mobile__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); */

    $("#web_development__mobile #procedural_art__info").css({                    
        "position":         "relative",
        "height":           "2900px",
        "width":            screen_width_in_px
    }); 

    $("#web_development__mobile #video__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var dev_headline_container        = SVG().addTo("#web_development__mobile #headline__info").size(screen_width_in_px, screen_height)
    var dev_headline_container__gr    = dev_headline_container.nested()

    /*var technologies__mobile__container     = SVG().addTo("#web_development__mobile #technologies__mobile__info").size(screen_width_in_px, screen_height)
    var technologies__mobile__container__gr = technologies__mobile__container.nested()  */
  
    var procedural_art__container            = SVG().addTo("#web_development__mobile #procedural_art__info").size(screen_width_in_px, 2900)
    var procedural_art__mobile_container__gr = procedural_art__container.nested()   
    
    var video__container           = SVG().addTo("#web_development__mobile #video__info").size(screen_width_in_px, screen_height)
    var mobile_video__container_gr = video__container.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    var develop__mobile_info = web_development_mobile_headline__info(dev_headline_container__gr, bar_gr, screen_width_in_px, screen_height)
    animations_mobile(procedural_art__mobile_container__gr, screen_width_in_px, screen_height)
    //technology_components(technologies__mobile__container__gr, screen_width_in_px, screen_height)
    web_development_video__mobile(mobile_video__container_gr, screen_width_in_px, screen_height)

    create_mobile_contact_section(screen_width_in_px,screen_height)

    return develop__mobile_info
}

function web_development_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({id: "web_development_create__image"})
        .attr({width: rect_width, height: rect_height})
        .attr({"x": x})
        .attr({"y": y})
        .attr({"opacity": opacity})
    var image_rect  = image_gr.rect(rect_width, rect_height).fill("#073f48ff").attr({'stroke-width': 0})
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

//-------------------------------WEB-development----------------------------------------------------------------
function web_development_mobile_headline__info(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var  dev_container__gr = parent_gr.nested()

    //--------------------------RECT---------------------------------------
    var strip__gr = dev_container__gr.nested()
    var strip = strip__gr.rect(75,screen_height+50)
        .fill('#812f3eff')
    strip.attr({
        id:      "strip",
        opacity: 1.0,
        'x':     screen_width_in_px-strip.bbox().width,
        'y':     0
    })

    //---------------------CALL MENU FUNCTION-------------------------------
    var menu_rect_gr = strip__gr.nested()
    .attr({
        x: strip.bbox().x+15,
        y: 0
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#c2c2c2ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#c2c2c2ff', linecap: 'round' })


    var menu_rect_clicked = false;

    menu_rect_gr.click(function() {
        
            
            // ANIMATE
            console.log(create_mobile_menu,"defined")
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;

    })

    //---------------------------SYMBOL----------------------------------
    var plus_symbol_gr = dev_container__gr.nested()

    var plus_symbol = plus_symbol_gr.path("m 786.55532,-1194.9604 q -8.7225,4.1731 -17.58674,0.962 -8.86429,-3.2113 -13.4382,-12.2013 -4.57384,-8.9899 -1.61756,-17.3908 2.95636,-8.4007 11.67886,-12.5738 l 147.91915,-70.7694 q 8.72249,-4.1732 17.58673,-0.962 8.67372,2.8367 13.24756,11.8266 4.57391,8.99 1.8082,17.7654 -2.95636,8.4008 -11.67886,12.5739 z m 110.57735,37.9196 q -10.17627,4.8687 -20.51203,1.4299 -9.97232,-3.6127 -15.30854,-14.101 l -74.32571,-146.0868 q -5.33622,-10.4883 -1.86135,-20.5346 3.47493,-10.0461 13.65119,-14.9147 10.53969,-5.0426 20.14852,-1.2561 9.97232,3.6126 15.30854,14.1009 l 74.32572,146.0869 q 5.33621,10.4883 2.22478,20.3606 -3.11144,9.8724 -13.65112,14.9149 z")
    plus_symbol_gr.css( "position", "fixed")

    plus_symbol.fill('#c2c2c2ff')
    plus_symbol.move(screen_width_in_px/2-plus_symbol.bbox().width/2-30,screen_height/2+plus_symbol.bbox().width/2+30)
    //plus_symbol.rotate(180)
    plus_symbol.scale(2.6)
    plus_symbol.attr({
        opacity: 0.0,
        id:      'plus_symbol'
    })

    plus_symbol_gr.attr({
        id: "plus_symbol_gr"
    })

    //---------------------------IMAGE----------------------------------
    var background_img__gr = dev_container__gr.nested() 

    var rect_width  = 300//screen_width_in_px-100;
    var rect_height = 300//screen_height/2.4;

    var wired_url = "./../portfolio-app-media/media/fffff.jpg"
    
    web_development_create__image(background_img__gr, wired_url, rect_width, rect_height, 0, 0, 1.0, 0, 0)

    background_img__gr.attr({
        id: "background_img__gr",
        y: screen_height/2-background_img__gr.bbox().height/2-40,
        x: screen_width_in_px+background_img__gr.bbox().width
    })

    //---------------------DEV-TITLE--------------------
    var develop_path__gr = dev_container__gr.nested()
    var develop_path = develop_path__gr.path("m 1048.5132,-1272.4361 q 0,-0.6632 0.3411,-1.1843 0.3316,-0.5306 0.919,-0.8338 0.5875,-0.3127 1.3644,-0.3127 0.7769,0 1.3738,0.3127 0.5874,0.3032 0.9285,0.8243 0.3316,0.5116 0.3316,1.1559 0,0.379 -0.1231,0.7106 -0.1232,0.3316 -0.3127,0.5874 -0.1895,0.2464 -0.379,0.3885 -0.199,0.1326 -0.3316,0.1326 l -0.1232,-0.2937 h 0.6917 q 0.2463,0 0.4169,0.1611 0.161,0.1611 0.161,0.4074 0,0.2463 -0.161,0.4074 -0.1611,0.1611 -0.4169,0.1611 h -5.9501 q -0.2463,0 -0.4074,-0.1611 -0.1706,-0.1611 -0.1706,-0.4074 0,-0.2463 0.1706,-0.4074 0.1611,-0.1611 0.4074,-0.1611 h 2.4066 l -0.085,0.1611 q -0.1232,0 -0.2937,-0.1327 -0.1801,-0.1326 -0.3506,-0.36 -0.18,-0.2274 -0.2937,-0.5211 -0.1137,-0.3032 -0.1137,-0.6348 z m 1.0422,0.1421 q 0,0.4169 0.2085,0.7296 0.2084,0.3126 0.5684,0.4926 0.3506,0.1706 0.8054,0.1706 0.4453,0 0.8148,-0.1706 0.3601,-0.18 0.5685,-0.4926 0.2084,-0.3127 0.2084,-0.7296 0,-0.4169 -0.2084,-0.7201 -0.2084,-0.3126 -0.5685,-0.4832 -0.3695,-0.18 -0.8148,-0.18 -0.4548,0 -0.8054,0.18 -0.36,0.1706 -0.5684,0.4832 -0.2085,0.3032 -0.2085,0.7201 z m 4.2162,5.6382 q 0,0.8053 -0.3316,1.4022 -0.3411,0.5875 -0.919,0.9096 -0.578,0.3127 -1.3075,0.3127 -0.8527,0 -1.4496,-0.3411 -0.6064,-0.3506 -0.9286,-0.9096 -0.3221,-0.559 -0.3221,-1.1843 0,-0.4832 0.199,-0.9096 0.1989,-0.4358 0.5495,-0.7674 0.3411,-0.3317 0.7959,-0.5212 0.4547,-0.1989 0.9664,-0.1989 0.2274,0.01 0.3695,0.18 0.1421,0.1705 0.1421,0.3979 v 3.6194 l -0.9474,0.2842 v -3.4772 l 0.1895,0.2084 h -0.2559 q -0.2747,0.019 -0.4927,0.199 -0.2179,0.1706 -0.3411,0.4358 -0.1326,0.2559 -0.1326,0.5496 0,0.2842 0.076,0.5306 0.076,0.2463 0.2558,0.4263 0.1801,0.18 0.4832,0.2843 0.3032,0.1042 0.7675,0.1042 0.5116,0 0.8717,-0.2085 0.3505,-0.2179 0.54,-0.5495 0.18,-0.3411 0.18,-0.7201 0,-0.3505 -0.057,-0.559 -0.057,-0.2084 -0.1326,-0.3316 -0.085,-0.1326 -0.1422,-0.2369 -0.085,-0.1705 -0.085,-0.3221 0,-0.2084 0.1421,-0.3411 0.1421,-0.1421 0.3316,-0.1421 0.2558,0 0.4643,0.2653 0.2084,0.2463 0.3695,0.6916 0.1515,0.4453 0.1515,0.9191 z m -5.1637,3.7764 q 0,-0.2179 0.1706,-0.379 0.1611,-0.1611 0.4169,-0.1611 0.066,0 0.1231,0.01 0.048,0.01 0.095,0.028 l 3.9036,1.4496 q 0.1895,0.066 0.2937,0.2369 0.095,0.1705 0.066,0.36 -0.019,0.3222 -0.36,0.4832 l -2.7003,0.938 0.01,-0.2463 2.6908,0.8811 q 0.3411,0.1611 0.3601,0.4832 0.029,0.1801 -0.066,0.3601 -0.1042,0.1705 -0.2937,0.2368 l -3.9035,1.4497 q -0.1043,0.038 -0.218,0.038 -0.2274,0 -0.4074,-0.1515 -0.18,-0.1516 -0.18,-0.4169 0,-0.1801 0.085,-0.3222 0.085,-0.1421 0.2747,-0.1989 l 3.1077,-1.1465 -0.019,0.2369 -2.3403,-0.8622 q -0.3505,-0.1516 -0.3505,-0.5211 0,-0.2085 0.095,-0.3127 0.085,-0.1137 0.2558,-0.18 l 2.3403,-0.8622 0.038,0.2843 -3.1266,-1.1654 q -0.3601,-0.1137 -0.3601,-0.5496 z m 94.8447,-8.2718 q 1.6317,0 2.9137,0.8391 1.3054,0.8159 2.0513,2.261 0.7692,1.4453 0.7692,3.3566 0,1.9115 -0.7692,3.3801 -0.7459,1.4451 -2.0279,2.2842 -1.2588,0.8159 -2.8439,0.8159 -0.9323,0 -1.7482,-0.3029 -0.8158,-0.3032 -1.4452,-0.7693 -0.6061,-0.4662 -0.9557,-0.9325 -0.3264,-0.4895 -0.3264,-0.8157 l 0.7226,-0.3031 v 6.1305 q 0,0.6061 -0.3962,1.0023 -0.3963,0.4196 -1.0023,0.4196 -0.6061,0 -1.0024,-0.3962 -0.3962,-0.3963 -0.3962,-1.0257 v -14.2889 q 0,-0.6061 0.3962,-1.0024 0.3963,-0.4196 1.0024,-0.4196 0.606,0 1.0023,0.4196 0.3962,0.3963 0.3962,1.0024 v 1.1421 l -0.3962,-0.2097 q 0,-0.303 0.3263,-0.7226 0.3264,-0.443 0.8858,-0.8626 0.5594,-0.4428 1.282,-0.7225 0.746,-0.2797 1.5618,-0.2797 z m -0.3496,2.5641 q -1.0257,0 -1.7949,0.5128 -0.7692,0.5127 -1.2121,1.3986 -0.4196,0.8624 -0.4196,1.9812 0,1.0957 0.4196,2.0047 0.4429,0.8859 1.2121,1.3986 0.7692,0.5128 1.7949,0.5128 1.0256,0 1.7715,-0.5128 0.7692,-0.5127 1.1888,-1.3986 0.4429,-0.909 0.4429,-2.0047 0,-1.1188 -0.4429,-1.9812 -0.4196,-0.8859 -1.1888,-1.3986 -0.7459,-0.5128 -1.7715,-0.5128 z m -8.4215,3.916 q 0,1.9114 -0.8624,3.3799 -0.8392,1.4453 -2.2844,2.261 -1.4219,0.8159 -3.1934,0.8159 -1.7716,0 -3.2168,-0.8159 -1.4219,-0.8157 -2.2844,-2.261 -0.8391,-1.4685 -0.8391,-3.3799 0,-1.9115 0.8391,-3.3566 0.8625,-1.4685 2.2844,-2.2844 1.4452,-0.8391 3.2168,-0.8391 1.7715,0 3.1934,0.8391 1.4452,0.8159 2.2844,2.2844 0.8624,1.4451 0.8624,3.3566 z m -2.7972,0 q 0,-1.1888 -0.4895,-2.0513 -0.4662,-0.8857 -1.282,-1.3752 -0.7925,-0.4895 -1.7715,-0.4895 -0.9791,0 -1.7949,0.4895 -0.7925,0.4895 -1.2821,1.3752 -0.4662,0.8625 -0.4662,2.0513 0,1.1655 0.4662,2.0513 0.4896,0.8624 1.2821,1.3519 0.8158,0.4895 1.7949,0.4895 0.979,0 1.7715,-0.4895 0.8158,-0.4895 1.282,-1.3519 0.4895,-0.8858 0.4895,-2.0513 z m -12.2089,4.8018 q 0,0.6061 -0.4195,1.0257 -0.3963,0.3963 -1.0024,0.3963 -0.5827,0 -0.979,-0.3963 -0.3962,-0.4196 -0.3962,-1.0257 v -14.4055 q 0,-0.606 0.3962,-1.0023 0.4196,-0.4196 1.0257,-0.4196 0.606,0 0.979,0.4196 0.3962,0.3963 0.3962,1.0023 z m -10.7943,1.655 q -1.9813,0 -3.4498,-0.8159 -1.4452,-0.8391 -2.2378,-2.261 -0.7692,-1.4218 -0.7692,-3.2167 0,-2.0979 0.8392,-3.5664 0.8624,-1.4918 2.2377,-2.2845 1.3753,-0.7924 2.9137,-0.7924 1.1888,0 2.2378,0.4895 1.0723,0.4895 1.8881,1.3519 0.8158,0.8391 1.282,1.958 0.4895,1.1189 0.4895,2.3776 -0.023,0.5595 -0.4428,0.9091 -0.4196,0.3497 -0.9791,0.3497 h -8.9043 l -0.6993,-2.331 h 8.5547 l -0.5128,0.4663 v -0.6294 q -0.047,-0.676 -0.4895,-1.2122 -0.4196,-0.536 -1.0723,-0.8392 -0.6293,-0.3262 -1.352,-0.3262 -0.6993,0 -1.3053,0.1864 -0.6061,0.1865 -1.0489,0.6293 -0.4429,0.443 -0.6993,1.1888 -0.2565,0.746 -0.2565,1.8881 0,1.2588 0.5129,2.1446 0.5361,0.8624 1.3519,1.3287 0.8392,0.4428 1.7716,0.4428 0.8624,0 1.3753,-0.1399 0.5128,-0.1398 0.8158,-0.3262 0.3263,-0.2098 0.5828,-0.3496 0.4195,-0.2098 0.7925,-0.2098 0.5128,0 0.8391,0.3496 0.3497,0.3497 0.3497,0.8158 0,0.6293 -0.6527,1.1422 -0.606,0.5128 -1.7016,0.9091 -1.0956,0.3729 -2.2611,0.3729 z m -18.1733,-12.7039 q 0.4429,0 0.8159,0.2332 0.3729,0.2098 0.5594,0.6526 l 3.4265,7.8321 -0.5128,0.2331 3.4965,-8.0419 q 0.3963,-0.9324 1.2354,-0.8857 0.5828,0 0.9324,0.3729 0.373,0.3497 0.373,0.8858 0,0.1632 -0.07,0.3497 -0.047,0.1864 -0.1166,0.3496 l -4.359,9.6037 q -0.3729,0.8391 -1.1888,0.8858 -0.4429,0.07 -0.8625,-0.1633 -0.3962,-0.233 -0.606,-0.7225 l -4.3357,-9.6037 q -0.047,-0.117 -0.1166,-0.3031 -0.047,-0.1864 -0.047,-0.4428 0,-0.4196 0.3729,-0.8159 0.373,-0.4196 1.0024,-0.4196 z m -8.1869,12.7039 q -1.9813,0 -3.4498,-0.8159 -1.4452,-0.8391 -2.2378,-2.261 -0.7692,-1.4218 -0.7692,-3.2167 0,-2.0979 0.8392,-3.5664 0.8624,-1.4918 2.2377,-2.2845 1.3753,-0.7924 2.9137,-0.7924 1.1888,0 2.2378,0.4895 1.0723,0.4895 1.8881,1.3519 0.8158,0.8391 1.282,1.958 0.4896,1.1189 0.4896,2.3776 -0.023,0.5595 -0.4429,0.9091 -0.4196,0.3497 -0.9791,0.3497 h -8.9043 l -0.6993,-2.331 h 8.5547 l -0.5128,0.4663 v -0.6294 q -0.047,-0.676 -0.4895,-1.2122 -0.4196,-0.536 -1.0723,-0.8392 -0.6293,-0.3262 -1.352,-0.3262 -0.6993,0 -1.3053,0.1864 -0.6061,0.1865 -1.0489,0.6293 -0.4429,0.443 -0.6993,1.1888 -0.2565,0.746 -0.2565,1.8881 0,1.2588 0.5129,2.1446 0.5361,0.8624 1.3519,1.3287 0.8392,0.4428 1.7716,0.4428 0.8624,0 1.3753,-0.1399 0.5128,-0.1398 0.8158,-0.3262 0.3264,-0.2098 0.5828,-0.3496 0.4195,-0.2098 0.7925,-0.2098 0.5128,0 0.8392,0.3496 0.3496,0.3497 0.3496,0.8158 0,0.6293 -0.6527,1.1422 -0.606,0.5128 -1.7016,0.9091 -1.0956,0.3729 -2.2611,0.3729 z m -10.1875,-17.4824 q 0.6061,0 1.0024,0.3963 0.3962,0.3962 0.3962,1.0256 v 14.4055 q 0,0.6061 -0.3962,1.0257 -0.3963,0.3963 -1.0024,0.3963 -0.606,0 -1.0023,-0.3963 -0.3963,-0.4196 -0.3963,-1.0257 v -1.1421 l 0.5129,0.2097 q 0,0.303 -0.3264,0.746 -0.3263,0.4196 -0.8858,0.8392 -0.5594,0.4195 -1.3286,0.7225 -0.7459,0.2797 -1.6317,0.2797 -1.6084,0 -2.9137,-0.8159 -1.3054,-0.8391 -2.0746,-2.2842 -0.7459,-1.4686 -0.7459,-3.3567 0,-1.9115 0.7459,-3.3566 0.7692,-1.4685 2.0513,-2.2844 1.282,-0.8391 2.8438,-0.8391 1.0023,0 1.8414,0.3029 0.8392,0.3032 1.4453,0.7693 0.6293,0.4662 0.9556,0.9557 0.3497,0.4663 0.3497,0.7925 l -0.8392,0.3031 v -6.2471 q 0,-0.606 0.3963,-1.0023 0.3963,-0.4196 1.0023,-0.4196 z m -4.7086,14.9183 q 1.0257,0 1.7949,-0.5128 0.7692,-0.5127 1.1888,-1.3986 0.4429,-0.8858 0.4429,-1.9813 0,-1.1188 -0.4429,-2.0046 -0.4196,-0.8859 -1.1888,-1.3986 -0.7692,-0.5128 -1.7949,-0.5128 -1.0023,0 -1.7715,0.5128 -0.7692,0.5127 -1.2121,1.3986 -0.4196,0.8858 -0.4196,2.0046 0,1.0955 0.4196,1.9813 0.4429,0.8859 1.2121,1.3986 0.7692,0.5128 1.7715,0.5128 z")
    develop_path__gr.attr({
        id:    "develop_path__gr",
    })
    develop_path.fill('#4a868cff')
    develop_path.move(0-develop_path.bbox().width-110,screen_height/1.35)
    //develop_path.rotate(-90)
    develop_path.scale(3)
    develop_path.attr({id: 'develop_path'})

    /*var paragraph__gr = dev_container__gr.nested()
    var paragraph = paragraph__gr.text(function(add){
        add.tspan('Custom made masonry galleries that are').newLine().dx("20")
        add.tspan('responsive and contain my architectural ').newLine().dx("20")
        add.tspan('models that were hand-made in my free time,').newLine()
        add.tspan('and there are also images of my inspiration, ').newLine()
        add.tspan('models that were hand-made in my free time,').newLine()
        add.tspan('and there are also images of my inspiration, ').newLine()
        add.tspan('aspiration...').newLine().dx("120")

    })
        .font({
            opacity: 1.0,
            weight:  500,
            fill:    '#812f3eff',
            family:  'Quicksand',
            size:    14
        })    
    paragraph.attr({
        x: screen_width_in_px/2-paragraph.bbox().width/2,
        y: screen_height+50
    }) */

    var develop__mobile_info = {
        "develop_path":       develop_path,
        "plus_symbol":        plus_symbol,
        "background_img__gr": background_img__gr,
        "menu_rect_gr":       menu_rect_gr
    }

    return develop__mobile_info;


}

function web_development_video__mobile(parent_gr, screen_width_in_px, screen_height){

    var video_gr = parent_gr.nested()
    .attr({
        height: screen_height
    })

    var video_global_height = 200
    var video_gr_y = video_gr.bbox().y;

    var video_global_x = video_gr.x()
    var video_global_y = video_gr_y

    $("#web_development__mobile #video__info").append(`
        <div id="video_mobile__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/dev_mobile_top.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/dev_mobile_middle.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/dev_mobile_bottom.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#web_development__mobile #video__info").find("#video_mobile__container").css({
        opacity: 0.4
    });

    $("#web_development__mobile #video__info").find("#video__a").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+50,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#web_development__mobile #video__info").find("#video__b").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#web_development__mobile #video__info").find("#video__c").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+350,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}

function web_develop_top__animate(develop__mobile_info, screen_width_in_px, screen_height){
    var develop_path       = develop__mobile_info["develop_path"];
    var plus_symbol        = develop__mobile_info["plus_symbol"];
    var background_img__gr = develop__mobile_info["background_img__gr"];
    var menu_rect_gr       = develop__mobile_info["menu_rect_gr"];

    plus_symbol.animate({
        duration: 600,
    }).attr({
        opacity: 1.0
    })
    develop_path.animate({
        delay: 200,
        duration: 1000,
        ease: '<'
    }).move(-103,screen_height/1.35)
    .attr({
        opacity: 1.0
    })
    background_img__gr.animate({
        delay: 300,
        duration: 1000,
        ease: '<'
    }).attr({
        y: screen_height/2-background_img__gr.bbox().height/2-40,
        x: screen_width_in_px-background_img__gr.bbox().width
    })

}
