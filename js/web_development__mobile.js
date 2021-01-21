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

    //document.title = "web_development__mobile"
    //window.history.pushState({page: "web_development__mobile"},"", "#web_development__mobile");

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

    web_development__mobile__create_responsive(bar_gr);
    //current_page = "web_development__mobile"
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
        "background-color": '#92bec0ff',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#web_development__mobile #headline__info").css({     
        "position": "relative",
        "height":    screen_height,
        "width":     screen_width_in_px,
        
    }); 

   /* $("#web_development__mobile #technologies__mobile__info").css({                    
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); */

    $("#web_development__mobile #procedural_art__info").css({                    
        "position":         "relative",
        "height":           screen_height*5-200,
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
  
    var procedural_art__container            = SVG().addTo("#web_development__mobile #procedural_art__info").size(screen_width_in_px, screen_height*5-200)
    var procedural_art__mobile_container__gr = procedural_art__container.nested()   
    
    var video__container           = SVG().addTo("#web_development__mobile #video__info").size(screen_width_in_px, screen_height)
    var mobile_video__container_gr = video__container.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    web_development_mobile_headline__info(dev_headline_container__gr, bar_gr, screen_width_in_px, screen_height)
    animations_mobile(procedural_art__mobile_container__gr, screen_width_in_px, 3000, screen_height)
    //technology_components(technologies__mobile__container__gr, screen_width_in_px, screen_height)
    web_development_video__mobile(mobile_video__container_gr, screen_width_in_px, screen_height)

    create_mobile_contact_section(screen_width_in_px,screen_height)
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

    web_development_container__gr = parent_gr.nested()

    //CALL MENU FUNCTION

    var menu_rect_gr = web_development_container__gr.nested()
    .attr({
        x: 32,
        y: 15
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#6b9fa1ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#6b9fa1ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#6b9fa1ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#6b9fa1ff', linecap: 'round' })


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

    var web_development__headline__gr = web_development_container__gr.nested()
    web_development__headline__gr.attr({
        id:     "web_development__headline__gr",
        x:      0,
        y:      menu_rect.bbox().y+menu_rect.bbox().height+50
    })

    var yellow_rect__gr = web_development__headline__gr.nested()
    var yellow_rect = yellow_rect__gr.rect(105,90)
        .fill('#ffc13bff')
    yellow_rect.attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':     0
    })
     
    var web_development_me_path__gr = web_development__headline__gr.nested()
    var web_development_me_path = web_development_me_path__gr.path("m 1677.0742,-92.104839 h 3.1653 q 0.3206,0 0.5342,0.21369 0.2137,0.213689 0.2137,0.534224 0,0.307179 -0.2137,0.520868 -0.2136,0.200334 -0.5342,0.200334 h -3.1653 q -0.3205,0 -0.5342,-0.213689 -0.2137,-0.21369 -0.2137,-0.534224 0,-0.307179 0.2137,-0.507513 0.2137,-0.21369 0.5342,-0.21369 z m 1.4291,-1.66945 q 0.3472,0 0.5609,0.2404 0.2271,0.227046 0.2271,0.574291 v 5.943244 q 0,0.186978 0.067,0.307179 0.08,0.1202 0.2004,0.173623 0.1335,0.05342 0.2804,0.05342 0.1603,0 0.2939,-0.05342 0.1335,-0.06678 0.3072,-0.06678 0.1869,0 0.3338,0.173622 0.1603,0.173623 0.1603,0.480802 0,0.373957 -0.414,0.614358 -0.4007,0.240401 -0.8681,0.240401 -0.2805,0 -0.6277,-0.04007 -0.3339,-0.05342 -0.6411,-0.227045 -0.2938,-0.186979 -0.4942,-0.560936 -0.2003,-0.373957 -0.2003,-1.028381 v -6.010022 q 0,-0.347245 0.227,-0.574291 0.2404,-0.2404 0.5877,-0.2404 z m -5.6455,1.402338 q 0.9883,0 1.4959,0.414024 0.5208,0.414023 0.7078,1.108515 0.2003,0.681135 0.2003,1.522539 v 3.419034 q 0,0.347246 -0.227,0.587646 -0.2271,0.227046 -0.5743,0.227046 -0.3472,0 -0.5743,-0.227046 -0.227,-0.2404 -0.227,-0.587646 v -3.419034 q 0,-0.440735 -0.1202,-0.787981 -0.1069,-0.360601 -0.4007,-0.574291 -0.2938,-0.21369 -0.8414,-0.21369 -0.5342,0 -0.9082,0.21369 -0.3606,0.21369 -0.5609,0.574291 -0.187,0.347246 -0.187,0.787981 v 3.419034 q 0,0.347246 -0.227,0.587646 -0.2271,0.227046 -0.5743,0.227046 -0.3473,0 -0.5743,-0.227046 -0.2271,-0.2404 -0.2271,-0.587646 v -5.515864 q 0,-0.347246 0.2271,-0.574291 0.227,-0.240401 0.5743,-0.240401 0.3472,0 0.5743,0.240401 0.227,0.227045 0.227,0.574291 v 0.574291 l -0.2003,-0.04007 q 0.1202,-0.227045 0.3472,-0.480802 0.2271,-0.267112 0.5342,-0.494157 0.3072,-0.227045 0.6945,-0.360601 0.3873,-0.146912 0.8414,-0.146912 z m -8.2681,7.41236 q -1.1353,0 -1.9767,-0.467446 -0.828,-0.480802 -1.2821,-1.295494 -0.4407,-0.814692 -0.4407,-1.843073 0,-1.202004 0.4808,-2.043407 0.4941,-0.854759 1.2821,-1.30885 0.788,-0.45409 1.6695,-0.45409 0.6811,0 1.2821,0.280468 0.6144,0.280467 1.0818,0.774625 0.4674,0.480801 0.7346,1.12187 0.2804,0.641069 0.2804,1.362272 -0.013,0.320534 -0.2537,0.520868 -0.2404,0.200334 -0.561,0.200334 h -5.1018 l -0.4007,-1.33556 h 4.9015 l -0.2938,0.267112 v -0.360601 q -0.027,-0.387313 -0.2805,-0.694492 -0.2404,-0.307178 -0.6143,-0.480801 -0.3606,-0.186979 -0.7746,-0.186979 -0.4007,0 -0.748,0.106845 -0.3472,0.106845 -0.601,0.360601 -0.2537,0.253757 -0.4006,0.681136 -0.1469,0.42738 -0.1469,1.081804 0,0.721203 0.2938,1.228716 0.3072,0.494157 0.7746,0.761269 0.4808,0.253756 1.015,0.253756 0.4942,0 0.788,-0.08013 0.2938,-0.08013 0.4675,-0.186979 0.1869,-0.1202 0.3339,-0.200334 0.2404,-0.1202 0.454,-0.1202 0.2939,0 0.4808,0.200334 0.2004,0.200334 0.2004,0.467446 0,0.360601 -0.374,0.654425 -0.3472,0.293823 -0.9749,0.520868 -0.6277,0.21369 -1.2955,0.21369 z m -11.8581,-7.41236 q 1.0684,0 1.5759,0.520868 0.5075,0.507513 0.6678,1.322205 l -0.227,-0.1202 0.1068,-0.21369 q 0.1603,-0.307179 0.4942,-0.654424 0.3339,-0.360602 0.8013,-0.601003 0.4808,-0.253756 1.0684,-0.253756 0.9616,0 1.4558,0.414024 0.5075,0.414023 0.6945,1.108515 0.187,0.681135 0.187,1.522539 v 3.419034 q 0,0.347246 -0.2271,0.587646 -0.227,0.227046 -0.5743,0.227046 -0.3472,0 -0.5743,-0.227046 -0.227,-0.2404 -0.227,-0.587646 v -3.419034 q 0,-0.440735 -0.1068,-0.787981 -0.1069,-0.360601 -0.3874,-0.574291 -0.2804,-0.21369 -0.8013,-0.21369 -0.5075,0 -0.8681,0.21369 -0.3606,0.21369 -0.5476,0.574291 -0.1736,0.347246 -0.1736,0.787981 v 3.419034 q 0,0.347246 -0.2271,0.587646 -0.227,0.227046 -0.5742,0.227046 -0.3473,0 -0.5743,-0.227046 -0.2271,-0.2404 -0.2271,-0.587646 v -3.419034 q 0,-0.440735 -0.1068,-0.787981 -0.1069,-0.360601 -0.3873,-0.574291 -0.2805,-0.21369 -0.8014,-0.21369 -0.5075,0 -0.8681,0.21369 -0.3606,0.21369 -0.5476,0.574291 -0.1736,0.347246 -0.1736,0.787981 v 3.419034 q 0,0.347246 -0.227,0.587646 -0.2271,0.227046 -0.5743,0.227046 -0.3473,0 -0.5743,-0.227046 -0.2271,-0.2404 -0.2271,-0.587646 v -5.515864 q 0,-0.347246 0.2271,-0.574291 0.227,-0.240401 0.5743,-0.240401 0.3472,0 0.5743,0.240401 0.227,0.227045 0.227,0.574291 v 0.574291 l -0.2003,-0.04007 q 0.1202,-0.227045 0.3339,-0.480802 0.2137,-0.267112 0.5208,-0.494157 0.3072,-0.227045 0.6812,-0.360601 0.3739,-0.146912 0.8147,-0.146912 z m -8.3746,0 q 0.9349,0 1.6694,0.480802 0.7479,0.467446 1.1753,1.295493 0.4408,0.828048 0.4408,1.923207 0,1.09516 -0.4408,1.936563 -0.4274,0.828047 -1.1619,1.308849 -0.7212,0.467446 -1.6294,0.467446 -0.5342,0 -1.0017,-0.173623 -0.4674,-0.173623 -0.828,-0.440735 -0.3473,-0.267112 -0.5476,-0.534224 -0.187,-0.280468 -0.187,-0.467446 l 0.414,-0.173623 v 3.512524 q 0,0.347245 -0.227,0.574291 -0.227,0.2404 -0.5743,0.2404 -0.3472,0 -0.5743,-0.227045 -0.227,-0.227045 -0.227,-0.587646 v -8.186985 q 0,-0.347246 0.227,-0.574291 0.2271,-0.240401 0.5743,-0.240401 0.3473,0 0.5743,0.240401 0.227,0.227045 0.227,0.574291 v 0.654424 l -0.227,-0.1202 q 0,-0.173623 0.187,-0.414024 0.187,-0.253756 0.5075,-0.494157 0.3205,-0.253757 0.7345,-0.414024 0.4274,-0.160267 0.8949,-0.160267 z m -0.2004,1.469116 q -0.5876,0 -1.0283,0.293824 -0.4408,0.293823 -0.6945,0.801336 -0.2404,0.494157 -0.2404,1.135226 0,0.627713 0.2404,1.148582 0.2537,0.507513 0.6945,0.801336 0.4407,0.293823 1.0283,0.293823 0.5877,0 1.0151,-0.293823 0.4407,-0.293823 0.6811,-0.801336 0.2538,-0.520869 0.2538,-1.148582 0,-0.641069 -0.2538,-1.135226 -0.2404,-0.507513 -0.6811,-0.801336 -0.4274,-0.293824 -1.0151,-0.293824 z m -4.8251,2.243742 q 0,1.095159 -0.4941,1.936562 -0.4808,0.828048 -1.3089,1.295494 -0.8147,0.467446 -1.8297,0.467446 -1.015,0 -1.8431,-0.467446 -0.8147,-0.467446 -1.3088,-1.295494 -0.4808,-0.841403 -0.4808,-1.936562 0,-1.09516 0.4808,-1.923207 0.4941,-0.841403 1.3088,-1.308849 0.8281,-0.480802 1.8431,-0.480802 1.015,0 1.8297,0.480802 0.8281,0.467446 1.3089,1.308849 0.4941,0.828047 0.4941,1.923207 z m -1.6027,0 q 0,-0.681136 -0.2804,-1.175293 -0.2671,-0.507513 -0.7346,-0.787981 -0.4541,-0.280468 -1.015,-0.280468 -0.5609,0 -1.0284,0.280468 -0.4541,0.280468 -0.7346,0.787981 -0.2671,0.494157 -0.2671,1.175293 0,0.66778 0.2671,1.175293 0.2805,0.494157 0.7346,0.774625 0.4675,0.280467 1.0284,0.280467 0.5609,0 1.015,-0.280467 0.4675,-0.280468 0.7346,-0.774625 0.2804,-0.507513 0.2804,-1.175293 z m -6.9952,2.751254 q 0,0.347246 -0.2404,0.587646 -0.227,0.227046 -0.5743,0.227046 -0.3338,0 -0.5609,-0.227046 -0.227,-0.2404 -0.227,-0.587646 v -8.253763 q 0,-0.347246 0.227,-0.574291 0.2404,-0.240401 0.5877,-0.240401 0.3472,0 0.5609,0.240401 0.227,0.227045 0.227,0.574291 z m -6.1847,0.948248 q -1.1352,0 -1.9766,-0.467446 -0.828,-0.480802 -1.2821,-1.295494 -0.4408,-0.814692 -0.4408,-1.843073 0,-1.202004 0.4808,-2.043407 0.4942,-0.854759 1.2822,-1.30885 0.788,-0.45409 1.6694,-0.45409 0.6812,0 1.2822,0.280468 0.6143,0.280467 1.0818,0.774625 0.4674,0.480801 0.7345,1.12187 0.2805,0.641069 0.2805,1.362272 -0.013,0.320534 -0.2538,0.520868 -0.2404,0.200334 -0.5609,0.200334 h -5.1018 l -0.4007,-1.33556 h 4.9015 l -0.2938,0.267112 v -0.360601 q -0.027,-0.387313 -0.2805,-0.694492 -0.2404,-0.307178 -0.6143,-0.480801 -0.3606,-0.186979 -0.7747,-0.186979 -0.4006,0 -0.7479,0.106845 -0.3472,0.106845 -0.601,0.360601 -0.2537,0.253757 -0.4007,0.681136 -0.1469,0.42738 -0.1469,1.081804 0,0.721203 0.2939,1.228716 0.3071,0.494157 0.7746,0.761269 0.4808,0.253756 1.015,0.253756 0.4942,0 0.788,-0.08013 0.2938,-0.08013 0.4674,-0.186979 0.187,-0.1202 0.3339,-0.200334 0.2404,-0.1202 0.4541,-0.1202 0.2938,0 0.4808,0.200334 0.2004,0.200334 0.2004,0.467446 0,0.360601 -0.374,0.654425 -0.3472,0.293823 -0.975,0.520868 -0.6277,0.21369 -1.2955,0.21369 z m -10.4125,-7.278804 q 0.2537,0 0.4674,0.133556 0.2137,0.1202 0.3206,0.373957 l 1.9632,4.487483 -0.2938,0.133556 2.0033,-4.607683 q 0.2271,-0.534225 0.7079,-0.507513 0.3339,0 0.5342,0.213689 0.2137,0.200334 0.2137,0.507513 0,0.09349 -0.04,0.200334 -0.027,0.106845 -0.067,0.200334 l -2.4975,5.502509 q -0.2137,0.480802 -0.6812,0.507513 -0.2537,0.04007 -0.4941,-0.09349 -0.2271,-0.133556 -0.3473,-0.414023 l -2.4841,-5.502509 q -0.027,-0.06678 -0.067,-0.173623 -0.027,-0.106844 -0.027,-0.253756 0,-0.240401 0.2137,-0.467446 0.2137,-0.240401 0.5743,-0.240401 z m -4.6908,7.278804 q -1.1352,0 -1.9766,-0.467446 -0.828,-0.480802 -1.2821,-1.295494 -0.4408,-0.814692 -0.4408,-1.843073 0,-1.202004 0.4808,-2.043407 0.4942,-0.854759 1.2822,-1.30885 0.788,-0.45409 1.6694,-0.45409 0.6812,0 1.2822,0.280468 0.6143,0.280467 1.0818,0.774625 0.4674,0.480801 0.7345,1.12187 0.2805,0.641069 0.2805,1.362272 -0.013,0.320534 -0.2538,0.520868 -0.2404,0.200334 -0.5609,0.200334 h -5.1018 l -0.4007,-1.33556 h 4.9015 l -0.2938,0.267112 v -0.360601 q -0.027,-0.387313 -0.2805,-0.694492 -0.2404,-0.307178 -0.6144,-0.480801 -0.3606,-0.186979 -0.7746,-0.186979 -0.4006,0 -0.7479,0.106845 -0.3472,0.106845 -0.601,0.360601 -0.2537,0.253757 -0.4007,0.681136 -0.1469,0.42738 -0.1469,1.081804 0,0.721203 0.2939,1.228716 0.3071,0.494157 0.7746,0.761269 0.4808,0.253756 1.015,0.253756 0.4942,0 0.788,-0.08013 0.2938,-0.08013 0.4674,-0.186979 0.187,-0.1202 0.3339,-0.200334 0.2404,-0.1202 0.4541,-0.1202 0.2938,0 0.4808,0.200334 0.2003,0.200334 0.2003,0.467446 0,0.360601 -0.3739,0.654425 -0.3473,0.293823 -0.975,0.520868 -0.6277,0.21369 -1.2955,0.21369 z m -5.837,-10.016703 q 0.3473,0 0.5743,0.227046 0.227,0.227045 0.227,0.587646 v 8.253763 q 0,0.347246 -0.227,0.587646 -0.227,0.227046 -0.5743,0.227046 -0.3472,0 -0.5743,-0.227046 -0.227,-0.2404 -0.227,-0.587646 v -0.654425 l 0.2938,0.120201 q 0,0.173623 -0.187,0.427379 -0.187,0.240401 -0.5075,0.480802 -0.3205,0.240401 -0.7613,0.414024 -0.4273,0.160267 -0.9349,0.160267 -0.9215,0 -1.6694,-0.467446 -0.7479,-0.480802 -1.1887,-1.308849 -0.4273,-0.841403 -0.4273,-1.923207 0,-1.09516 0.4273,-1.923207 0.4408,-0.841403 1.1753,-1.308849 0.7346,-0.480802 1.6294,-0.480802 0.5743,0 1.0551,0.173623 0.4808,0.173623 0.8281,0.440735 0.3606,0.267112 0.5475,0.547579 0.2004,0.267113 0.2004,0.454091 l -0.4808,0.173623 v -3.579302 q 0,-0.347246 0.227,-0.574291 0.2271,-0.240401 0.5743,-0.240401 z m -2.6978,8.547586 q 0.5876,0 1.0284,-0.293823 0.4407,-0.293823 0.6811,-0.801336 0.2538,-0.507513 0.2538,-1.135226 0,-0.641069 -0.2538,-1.148582 -0.2404,-0.507513 -0.6811,-0.801336 -0.4408,-0.293824 -1.0284,-0.293824 -0.5743,0 -1.015,0.293824 -0.4408,0.293823 -0.6945,0.801336 -0.2404,0.507513 -0.2404,1.148582 0,0.627713 0.2404,1.135226 0.2537,0.507513 0.6945,0.801336 0.4407,0.293823 1.015,0.293823 z m -7.779,-7.210078 q 0,-0.367009 0.1888,-0.655374 0.1835,-0.293607 0.5085,-0.461383 0.3251,-0.173019 0.755,-0.173019 0.43,0 0.7603,0.173019 0.325,0.167776 0.5138,0.45614 0.1835,0.283122 0.1835,0.639645 0,0.20972 -0.068,0.393225 -0.068,0.183505 -0.173,0.325065 -0.1048,0.136318 -0.2097,0.214963 -0.1101,0.0734 -0.1835,0.0734 l -0.068,-0.162533 h 0.3828 q 0.1363,0 0.2307,0.08913 0.089,0.08913 0.089,0.225449 0,0.136318 -0.089,0.225448 -0.089,0.08913 -0.2307,0.08913 h -3.2926 q -0.1364,0 -0.2255,-0.08913 -0.094,-0.08913 -0.094,-0.225448 0,-0.136318 0.094,-0.225449 0.089,-0.08913 0.2255,-0.08913 h 1.3317 l -0.047,0.08913 q -0.068,0 -0.1625,-0.0734 -0.1,-0.0734 -0.194,-0.199234 -0.1,-0.125831 -0.1626,-0.288364 -0.063,-0.167776 -0.063,-0.351281 z m 0.5768,0.07864 q 0,0.230692 0.1153,0.403711 0.1153,0.173018 0.3146,0.272635 0.194,0.09437 0.4456,0.09437 0.2465,0 0.4509,-0.09437 0.1993,-0.09962 0.3146,-0.272635 0.1154,-0.173019 0.1154,-0.403711 0,-0.230692 -0.1154,-0.398467 -0.1153,-0.173019 -0.3146,-0.267393 -0.2044,-0.09962 -0.4509,-0.09962 -0.2516,0 -0.4456,0.09962 -0.1993,0.09437 -0.3146,0.267393 -0.1153,0.167775 -0.1153,0.398467 z m 2.3331,3.119996 q 0,0.445654 -0.1835,0.775963 -0.1888,0.325065 -0.5086,0.503327 -0.3198,0.173019 -0.7235,0.173019 -0.4719,0 -0.8022,-0.188748 -0.3355,-0.193991 -0.5138,-0.503327 -0.1783,-0.309337 -0.1783,-0.655374 0,-0.267393 0.1101,-0.503328 0.1101,-0.241177 0.3041,-0.424682 0.1888,-0.183505 0.4404,-0.288365 0.2517,-0.110103 0.5348,-0.110103 0.1259,0.0052 0.2045,0.09962 0.079,0.09437 0.079,0.220206 v 2.002823 l -0.5243,0.15729 v -1.924178 l 0.1049,0.115345 h -0.1416 q -0.152,0.01049 -0.2726,0.110103 -0.1206,0.09437 -0.1887,0.241178 -0.073,0.141561 -0.073,0.304094 0,0.157289 0.042,0.293607 0.042,0.136318 0.1416,0.235935 0.1,0.09962 0.2674,0.15729 0.1677,0.05767 0.4246,0.05767 0.2832,0 0.4824,-0.115346 0.194,-0.120589 0.2988,-0.304094 0.1,-0.188748 0.1,-0.398467 0,-0.193991 -0.031,-0.309337 -0.032,-0.115346 -0.073,-0.183505 -0.047,-0.0734 -0.079,-0.131075 -0.047,-0.09437 -0.047,-0.178261 0,-0.115346 0.079,-0.188748 0.079,-0.07864 0.1835,-0.07864 0.1416,0 0.2569,0.146804 0.1154,0.136318 0.2045,0.382738 0.084,0.246421 0.084,0.508571 z m -2.8574,2.089742 q 0,-0.120589 0.094,-0.20972 0.089,-0.08913 0.2307,-0.08913 0.037,0 0.068,0.0052 0.026,0.0052 0.052,0.01573 l 2.1601,0.802178 q 0.1049,0.0367 0.1626,0.131075 0.052,0.09437 0.037,0.199234 -0.01,0.178261 -0.1993,0.267392 l -1.4942,0.519057 0.01,-0.136318 1.489,0.487598 q 0.1888,0.08913 0.1993,0.267393 0.016,0.09962 -0.037,0.199233 -0.058,0.09437 -0.1626,0.131075 l -2.1601,0.802178 q -0.058,0.02097 -0.1206,0.02097 -0.1258,0 -0.2254,-0.08389 -0.1,-0.08389 -0.1,-0.230691 0,-0.09962 0.047,-0.178262 0.047,-0.07865 0.1521,-0.110103 l 1.7197,-0.634402 -0.011,0.131075 -1.295,-0.477113 q -0.194,-0.08389 -0.194,-0.288364 0,-0.115346 0.052,-0.173019 0.047,-0.06292 0.1416,-0.09962 l 1.295,-0.477112 0.021,0.157289 -1.7302,-0.644888 q -0.1992,-0.06292 -0.1992,-0.304093 z")
    web_development_me_path__gr.attr({
        id: "web_development_me_path__gr",
    })
    web_development_me_path.fill('#073f48ff')
    web_development_me_path.move(yellow_rect.bbox().x+yellow_rect.bbox().width+92,yellow_rect.bbox().y+yellow_rect.bbox().height/2-10)
    web_development_me_path.scale(2.9)
    web_development_me_path.attr({id: 'web_development_me_path'})

    //////////////////////////////////////////////////////////////////////////////////
    var wdev_background_img__gr = web_development_container__gr.nested() 
    wdev_background_img__gr.attr({
        id: "wdev_background_img__gr",
        y:   yellow_rect.bbox().y+yellow_rect.bbox().height+135,
    })

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1;

    console.log(rect_height, "visina!!!!!!!!")

    var dev_background_img = "./../portfolio-app-media/media/cables_crop.png"
    
    web_development_create__image(wdev_background_img__gr, dev_background_img, rect_width, rect_height, 0, 0, 0.5, 0, 0)

    var paragraphs = wdev_background_img__gr.nested()
    paragraphs.attr({
        id: "paragraphs",
        y:   wdev_background_img__gr.bbox().height/2-160
    })
    var paragraph__a = paragraphs.text('Creativity is inventing, ')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
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
            fill:    '#fff',
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
        fill:    '#fff',
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
        fill:    '#fff',
        family:  'Quicksand',
        size:    18,
    }) 
    paragraph__d.attr({
        id: 'paragraph__d',
        x: rect_width/2-paragraph__d.bbox().width/2,
        y: 90
    }) 

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