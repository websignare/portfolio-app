$( document ).ready(function() {
    web_design__mobile__main()
    console.log( "web_design__ready!" );
});

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

    //document.title = "web_design__mobile"
    //window.history.pushState({page: "web_design__mobile"},"", "#web_design__mobile");

    $("body").append(`
        <div id="web_design__mobile">
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

    web_design__mobile__create_responsive(bar_gr);
    //current_page = "web_design__mobile"
}
    
function web_design__mobile__deactivate(bar_gr) {

    $("#web_design__mobile").remove();
    $("#contact_mobile_wrapper").remove();

}

function web_design__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#web_design__mobile").css({                    
        "background-color": '#fcd8acfe',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#web_design__mobile #headline__info").css({     
        "position": "relative",
        "height":    screen_height,
        "width":     screen_width_in_px,
        
    }); 

    $("#web_design__mobile #artist_portfolio__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design__mobile #suprematism__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design__mobile #deep_blue__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design__mobile #video__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var headline_container            = SVG().addTo("#web_design__mobile #headline__info").size(screen_width_in_px, screen_height)
    var mobile_headline__container_gr = headline_container.nested()

    var artist_portfolio__container           = SVG().addTo("#web_design__mobile #artist_portfolio__info").size(screen_width_in_px, screen_height)
    var mobile_artist_portfolio__container_gr = artist_portfolio__container.nested()   
  
    var suprematism__container           = SVG().addTo("#web_design__mobile #suprematism__info").size(screen_width_in_px, screen_height)
    var mobile_suprematism__container_gr = suprematism__container.nested()   
   
    var deep_blue__container           = SVG().addTo("#web_design__mobile #deep_blue__info").size(screen_width_in_px, screen_height)
    var mobile_deep_blue__container_gr = deep_blue__container.nested()  
    
    var video__container           = SVG().addTo("#web_design__mobile #video__info").size(screen_width_in_px, screen_height)
    var mobile_video__container_gr = video__container.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    web_design_mobile_headline__info(mobile_headline__container_gr, bar_gr, screen_width_in_px, screen_height)
    /*web_design_mobile_artist_portfolio(mobile_artist_portfolio__container_gr, screen_width_in_px, screen_height)
    web_design_mobile_suprematism(mobile_suprematism__container_gr, screen_width_in_px, screen_height)
    web_design_mobile_deep_blue(mobile_deep_blue__container_gr, screen_width_in_px, screen_height)
    web_design_mobile_video__section(mobile_video__container_gr, screen_width_in_px, screen_height)*/

    create_mobile_contact_section(screen_width_in_px,screen_height)
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
function web_design_mobile_headline__info(parent_gr, bar_gr, screen_width_in_px, screen_height){

    web_design_container__gr = parent_gr.nested()

    //CALL MENU FUNCTION

    var menu_rect_gr = web_design_container__gr.nested()
    .attr({
        x: 32,
        y: 15
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#d4a46cff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#d4a46cff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#d4a46cff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#d4a46cff', linecap: 'round' })


    var menu_rect_clicked = false;

    menu_rect_gr.click(function() {
        
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

    var web_design__headline__gr = web_design_container__gr.nested()
    web_design__headline__gr.attr({
        id:     "web_design__headline__gr",
        x:      0,
        y:      menu_rect.bbox().y+menu_rect.bbox().height+50
    })

    var pink_rect__gr = web_design__headline__gr.nested()
    var pink_rect = pink_rect__gr.rect(105,90)
        .fill('#4f838dff')
    pink_rect.attr({
        id:      "pink_rect",
        opacity: 1.0,
        'x':     0,
        'y':     0
    })
     
    var web_design_me_path__gr = web_design__headline__gr.nested()
    var web_design_me_path = web_design_me_path__gr.path("m 395.74543,324.82759 q 1.97049,0 2.98236,0.82547 1.0385,0.82548 1.41129,2.21015 0.39943,1.35804 0.39943,3.03561 v 6.81682 q 0,0.69234 -0.45268,1.17165 -0.45268,0.45268 -1.14502,0.45268 -0.69233,0 -1.14501,-0.45268 -0.45268,-0.47931 -0.45268,-1.17165 v -6.81682 q 0,-0.87873 -0.23965,-1.57106 -0.21303,-0.71896 -0.79885,-1.14501 -0.58582,-0.42606 -1.67758,-0.42606 -1.06513,0 -1.81072,0.42606 -0.71896,0.42605 -1.11838,1.14501 -0.3728,0.69233 -0.3728,1.57106 v 6.81682 q 0,0.69234 -0.45267,1.17165 -0.45268,0.45268 -1.14502,0.45268 -0.69233,0 -1.14501,-0.45268 -0.45268,-0.47931 -0.45268,-1.17165 v -10.99745 q 0,-0.69233 0.45268,-1.14501 0.45268,-0.47931 1.14501,-0.47931 0.69234,0 1.14502,0.47931 0.45267,0.45268 0.45267,1.14501 v 1.14502 l -0.39942,-0.0799 q 0.23966,-0.45268 0.69234,-0.95861 0.45267,-0.53257 1.06512,-0.98525 0.61245,-0.45268 1.38467,-0.71896 0.77222,-0.29291 1.67758,-0.29291 z m -18.68802,0 q 1.11839,0 2.05037,0.34617 0.93199,0.34616 1.5977,0.87873 0.69233,0.53256 1.06513,1.09175 0.39942,0.53257 0.39942,0.90536 l -0.69234,0.34617 v -1.94386 q 0,-0.69233 0.45268,-1.14501 0.45268,-0.47931 1.14502,-0.47931 0.69233,0 1.14501,0.45268 0.45268,0.45268 0.45268,1.17164 v 11.84956 q 0,2.31665 -1.01187,3.70132 -0.98525,1.41129 -2.60957,2.02374 -1.62432,0.63908 -3.48829,0.63908 -0.53257,0 -1.38467,-0.13314 -0.8521,-0.13314 -1.62432,-0.31954 -0.77222,-0.1864 -1.17164,-0.34617 -0.79885,-0.34616 -1.11839,-0.87873 -0.29291,-0.50594 -0.10651,-1.09176 0.23965,-0.77221 0.77222,-1.06512 0.53256,-0.26629 1.11838,-0.0533 0.26629,0.0799 0.87873,0.31954 0.61245,0.23965 1.33142,0.42605 0.74559,0.21302 1.30478,0.21302 1.99711,0 2.95573,-0.79884 0.95861,-0.79885 0.95861,-2.21014 v -2.31666 l 0.31954,0.23966 q 0,0.34616 -0.37279,0.8521 -0.34617,0.47931 -0.98525,0.95861 -0.61244,0.47931 -1.46455,0.82548 -0.8521,0.31954 -1.81072,0.31954 -1.8906,0 -3.40841,-0.93199 -1.5178,-0.95862 -2.39654,-2.60956 -0.87873,-1.67758 -0.87873,-3.83447 0,-2.18351 0.87873,-3.83446 0.87874,-1.67758 2.36992,-2.60956 1.49118,-0.95862 3.32852,-0.95862 z m 0.50594,2.9291 q -1.19827,0 -2.10363,0.58582 -0.90536,0.58582 -1.4113,1.5977 -0.50593,1.01187 -0.50593,2.29002 0,1.25153 0.50593,2.2634 0.50594,1.01187 1.4113,1.59769 0.90536,0.58582 2.10363,0.58582 1.2249,0 2.13025,-0.58582 0.90536,-0.58582 1.4113,-1.59769 0.50594,-1.01187 0.50594,-2.2634 0,-1.27815 -0.50594,-2.29002 -0.50594,-1.01188 -1.4113,-1.5977 -0.90535,-0.58582 -2.13025,-0.58582 z m -9.56827,9.95895 q 0,0.69234 -0.45268,1.17165 -0.45268,0.45268 -1.14501,0.45268 -0.69233,0 -1.14501,-0.45268 -0.45268,-0.47931 -0.45268,-1.17165 v -10.99745 q 0,-0.69233 0.45268,-1.14501 0.45268,-0.47931 1.14501,-0.47931 0.69233,0 1.14501,0.47931 0.45268,0.45268 0.45268,1.14501 z m -1.62432,-14.3526 q -0.90536,0 -1.27815,-0.29291 -0.3728,-0.29291 -0.3728,-1.0385 v -0.50594 q 0,-0.77222 0.39943,-1.0385 0.42605,-0.29291 1.27815,-0.29291 0.93199,0 1.30478,0.29291 0.3728,0.29291 0.3728,1.0385 v 0.50594 q 0,0.77222 -0.39943,1.06513 -0.39942,0.26628 -1.30478,0.26628 z m -15.05617,13.76678 q -0.26628,-0.37279 -0.23966,-0.95861 0.0266,-0.58582 0.69234,-1.01187 0.42605,-0.26629 0.90536,-0.21303 0.47931,0.0266 0.93198,0.47931 0.77222,0.77222 1.62433,1.19827 0.8521,0.42605 2.13025,0.42605 0.39943,-0.0266 0.87873,-0.10651 0.47931,-0.10652 0.82548,-0.42605 0.37279,-0.34617 0.37279,-1.0385 0,-0.58583 -0.39942,-0.93199 -0.39942,-0.34617 -1.06513,-0.58582 -0.63908,-0.23966 -1.43792,-0.45268 -0.82548,-0.23966 -1.70421,-0.53257 -0.8521,-0.29291 -1.57106,-0.74559 -0.71896,-0.4793 -1.17164,-1.25152 -0.45268,-0.77222 -0.45268,-1.94386 0,-1.33141 0.74559,-2.2634 0.74559,-0.93199 1.91723,-1.43792 1.19827,-0.50594 2.50305,-0.50594 0.82547,0 1.73083,0.21303 0.90536,0.18639 1.73084,0.63907 0.82547,0.42605 1.38466,1.14502 0.29292,0.39942 0.34617,0.95861 0.0533,0.55919 -0.50593,1.01187 -0.39943,0.31954 -0.93199,0.29291 -0.53257,-0.0532 -0.87873,-0.37279 -0.45268,-0.58582 -1.2249,-0.93199 -0.74559,-0.34616 -1.73083,-0.34616 -0.39943,0 -0.87874,0.10651 -0.45268,0.0799 -0.79884,0.39942 -0.34617,0.29291 -0.34617,0.95862 0,0.61245 0.39942,0.98524 0.39943,0.34617 1.06513,0.58582 0.69234,0.21303 1.46455,0.42605 0.79885,0.21303 1.62433,0.50594 0.82547,0.29291 1.5178,0.77222 0.69234,0.4793 1.11839,1.25152 0.42605,0.74559 0.42605,1.91723 0,1.35804 -0.79885,2.31666 -0.79884,0.95861 -1.99711,1.46455 -1.19827,0.47931 -2.4498,0.47931 -1.57106,0 -3.14213,-0.53257 -1.57106,-0.55919 -2.60956,-1.94386 z m -8.0438,2.47643 q -2.2634,0 -3.94098,-0.93199 -1.65095,-0.95862 -2.55631,-2.58294 -0.87873,-1.62432 -0.87873,-3.67469 0,-2.39654 0.95862,-4.07412 0.98524,-1.7042 2.55631,-2.60956 1.57106,-0.90536 3.32852,-0.90536 1.35804,0 2.55631,0.55919 1.2249,0.5592 2.15689,1.54444 0.93198,0.95861 1.46455,2.23677 0.55919,1.27815 0.55919,2.71608 -0.0266,0.63907 -0.50593,1.0385 -0.47931,0.39942 -1.11839,0.39942 h -10.17198 l -0.79884,-2.66282 h 9.77255 l -0.58582,0.53256 v -0.71896 q -0.0533,-0.77222 -0.55919,-1.38467 -0.47931,-0.61244 -1.2249,-0.95861 -0.71896,-0.3728 -1.54444,-0.3728 -0.79884,0 -1.49118,0.21303 -0.69233,0.21303 -1.19827,0.71896 -0.50593,0.50594 -0.79884,1.35804 -0.29291,0.8521 -0.29291,2.15689 0,1.43792 0.58582,2.44979 0.61245,0.98524 1.54443,1.51781 0.95862,0.50593 2.02375,0.50593 0.98524,0 1.57106,-0.15976 0.58582,-0.15977 0.93199,-0.3728 0.3728,-0.23965 0.66571,-0.39942 0.4793,-0.23966 0.90536,-0.23966 0.58582,0 0.95861,0.39943 0.39942,0.39942 0.39942,0.93198 0,0.71897 -0.74559,1.30479 -0.69233,0.58582 -1.94386,1.0385 -1.25152,0.42605 -2.58293,0.42605 z m -11.63778,-19.97116 q 0.69233,0 1.14501,0.45268 0.45268,0.45268 0.45268,1.17164 v 16.45623 q 0,0.69234 -0.45268,1.17165 -0.45268,0.45268 -1.14501,0.45268 -0.69233,0 -1.14501,-0.45268 -0.45268,-0.47931 -0.45268,-1.17165 v -1.30478 l 0.58582,0.23966 q 0,0.34616 -0.3728,0.8521 -0.37279,0.47931 -1.01187,0.95861 -0.63907,0.47931 -1.51781,0.82548 -0.8521,0.31954 -1.86397,0.31954 -1.83735,0 -3.32853,-0.93199 -1.49118,-0.95862 -2.36991,-2.60956 -0.8521,-1.67758 -0.8521,-3.83447 0,-2.18351 0.8521,-3.83446 0.87873,-1.67758 2.34328,-2.60956 1.46456,-0.95862 3.24865,-0.95862 1.14501,0 2.10363,0.34617 0.95861,0.34616 1.65094,0.87873 0.71897,0.53256 1.09176,1.09175 0.39942,0.53257 0.39942,0.90536 l -0.95861,0.34617 v -7.13636 q 0,-0.69233 0.45268,-1.14501 0.45268,-0.47931 1.14501,-0.47931 z m -5.3789,17.04205 q 1.17164,0 2.05037,-0.58582 0.87874,-0.58582 1.35804,-1.59769 0.50594,-1.01187 0.50594,-2.2634 0,-1.27815 -0.50594,-2.29002 -0.4793,-1.01188 -1.35804,-1.5977 -0.87873,-0.58582 -2.05037,-0.58582 -1.14501,0 -2.02374,0.58582 -0.87873,0.58582 -1.38467,1.5977 -0.47931,1.01187 -0.47931,2.29002 0,1.25153 0.47931,2.2634 0.50594,1.01187 1.38467,1.59769 0.87873,0.58582 2.02374,0.58582 z M 310.7123,322.21789 q 0,-0.73494 0.37797,-1.3124 0.36747,-0.58795 1.01842,-0.92393 0.65095,-0.34647 1.51188,-0.34647 0.86094,0 1.52239,0.34647 0.65095,0.33598 1.02892,0.91343 0.36747,0.56696 0.36747,1.28091 0,0.41996 -0.13649,0.78743 -0.13649,0.36748 -0.34647,0.65095 -0.20999,0.27298 -0.41997,0.43047 -0.22048,0.14699 -0.36747,0.14699 l -0.13649,-0.32547 h 0.76644 q 0.27298,0 0.46196,0.17848 0.17849,0.17849 0.17849,0.45147 0,0.27298 -0.17849,0.45146 -0.17848,0.17849 -0.46196,0.17849 h -6.59349 q -0.27298,0 -0.45147,-0.17849 -0.18898,-0.17848 -0.18898,-0.45146 0,-0.27298 0.18898,-0.45147 0.17849,-0.17848 0.45147,-0.17848 h 2.66679 l -0.0945,0.17848 q -0.13649,0 -0.32548,-0.14699 -0.19948,-0.14699 -0.38847,-0.39897 -0.19948,-0.25198 -0.32547,-0.57745 -0.12599,-0.33598 -0.12599,-0.70345 z m 1.15491,0.15749 q 0,0.46196 0.23098,0.80844 0.23098,0.34647 0.62995,0.54596 0.38847,0.18898 0.89243,0.18898 0.49347,0 0.90293,-0.18898 0.39897,-0.19949 0.62996,-0.54596 0.23098,-0.34648 0.23098,-0.80844 0,-0.46196 -0.23098,-0.79794 -0.23099,-0.34647 -0.62996,-0.53546 -0.40946,-0.19948 -0.90293,-0.19948 -0.50396,0 -0.89243,0.19948 -0.39897,0.18899 -0.62995,0.53546 -0.23098,0.33598 -0.23098,0.79794 z m 4.67214,6.24784 q 0,0.89243 -0.36747,1.55388 -0.37797,0.65095 -1.01842,1.00792 -0.64046,0.34648 -1.44889,0.34648 -0.94493,0 -1.60638,-0.37798 -0.67195,-0.38847 -1.02892,-1.00792 -0.35697,-0.61945 -0.35697,-1.3124 0,-0.53546 0.22048,-1.00792 0.22048,-0.48296 0.60895,-0.85043 0.37797,-0.36748 0.88194,-0.57746 0.50396,-0.22048 1.07091,-0.22048 0.25198,0.0105 0.40947,0.19948 0.15749,0.18899 0.15749,0.44097 v 4.01069 l -1.04992,0.31498 v -3.85321 l 0.20998,0.23098 h -0.28347 q -0.30448,0.021 -0.54596,0.22049 -0.24148,0.18898 -0.37797,0.48296 -0.14699,0.28348 -0.14699,0.60895 0,0.31498 0.084,0.58796 0.084,0.27298 0.28348,0.47246 0.19948,0.19949 0.53546,0.31498 0.33597,0.11549 0.85043,0.11549 0.56696,0 0.96593,-0.23098 0.38847,-0.24149 0.59845,-0.60896 0.19949,-0.37797 0.19949,-0.79794 0,-0.38847 -0.063,-0.61945 -0.063,-0.23098 -0.14699,-0.36747 -0.0945,-0.14699 -0.15748,-0.26248 -0.0945,-0.18898 -0.0945,-0.35697 0,-0.23098 0.15749,-0.37797 0.15749,-0.15749 0.36747,-0.15749 0.28348,0 0.51446,0.29398 0.23099,0.27298 0.40947,0.76644 0.16799,0.49346 0.16799,1.01842 z m -5.72206,4.18475 q 0,-0.24148 0.18898,-0.41997 0.17849,-0.17849 0.46197,-0.17849 0.0735,0 0.13649,0.0105 0.0525,0.0105 0.10499,0.0315 l 4.32567,1.60638 q 0.20998,0.0735 0.32547,0.26248 0.10499,0.18898 0.0735,0.39897 -0.021,0.35697 -0.39897,0.53545 l -2.99227,1.03942 0.0105,-0.27298 2.98177,0.97643 q 0.37797,0.17849 0.39897,0.53546 0.0315,0.19948 -0.0735,0.39897 -0.11549,0.18898 -0.32547,0.26248 l -4.32567,1.60637 q -0.11549,0.042 -0.24148,0.042 -0.25198,0 -0.45147,-0.16799 -0.19948,-0.16798 -0.19948,-0.46196 0,-0.19949 0.0945,-0.35697 0.0945,-0.15749 0.30448,-0.22049 l 3.44373,-1.2704 -0.021,0.26248 -2.5933,-0.95543 q -0.38847,-0.16798 -0.38847,-0.57745 0,-0.23098 0.105,-0.34647 0.0945,-0.12599 0.28347,-0.19949 l 2.5933,-0.95543 0.042,0.31498 -3.46473,-1.2914 q -0.39897,-0.12599 -0.39897,-0.60895 z")
    web_design_me_path__gr.attr({
        id:    "web_design_me_path__gr",
    })
    web_design_me_path.fill('#bb364bff')
    web_design_me_path.move(pink_rect.bbox().x+pink_rect.bbox().width+85,pink_rect.bbox().y+pink_rect.bbox().height/2-10)
    web_design_me_path.scale(2.7)
    web_design_me_path.attr({id: 'web_design_me_path'})

    //////////////////////////////////////////////////////////////////////////////////
    var wd_background_img__gr = web_design_container__gr.nested() 
    wd_background_img__gr.attr({
        id: "wd_background_img__gr",
        y:   pink_rect.bbox().y+pink_rect.bbox().height+135,
    })

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1;

    console.log(rect_height, "visina!!!!!!!!")

    var background_img = "./../portfolio-app-media/media/design__mobile__img.png"
    
    web_design_create__image(wd_background_img__gr, background_img, rect_width, rect_height, 0, 0, 0.6, 0, 0)

    var paragraphs = wd_background_img__gr.nested()
    paragraphs.attr({
        id: "paragraphs",
        y:   wd_background_img__gr.bbox().height/2-160
    })
    var paragraph__a = paragraphs.text('Creativity is inventing, ')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff6edff',
            family:  'Quicksand',
            size:    18,
        }) 
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 0
    }) 
    var paragraph__b = paragraphs.text('experimenting, growing, taking ')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#bb364bff',
            family:  'Quicksand',
            size:    20,
        }) 
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: 30
    }) 

    var paragraph__c = paragraphs.text('risk, breaking rules, making')//.dx('20')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff6edff',
        family:  'Quicksand',
        size:    18,
    }) 
    paragraph__c.attr({
        id: 'paragraph__c',
        x: rect_width/2-paragraph__c.bbox().width/2,
        y: 60
    }) 

    var paragraph__d = paragraphs.text('mistakes and having fun.')//.dx('20')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff6edff',
        family:  'Quicksand',
        size:    18,
    }) 
    paragraph__d.attr({
        id: 'paragraph__d',
        x: rect_width/2-paragraph__d.bbox().width/2,
        y: 90
    }) 

}