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
        "background-color": '#d8d8d8ff',
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#812f3eff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })


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
        .fill('#73273598')
    yellow_rect.attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':     0
    })
     
    var web_development_me_path__gr = web_development__headline__gr.nested()
    var web_development_me_path = web_development_me_path__gr.path("m 169.8741,-161.97678 h 2.56473 q 0.25971,0 0.43286,0.17315 0.17315,0.17314 0.17315,0.43286 0,0.2489 -0.17315,0.42204 -0.17315,0.16233 -0.43286,0.16233 h -2.56473 q -0.25972,0 -0.43286,-0.17315 -0.17315,-0.17314 -0.17315,-0.43286 0,-0.2489 0.17315,-0.41122 0.17314,-0.17315 0.43286,-0.17315 z m 1.15792,-1.3527 q 0.28136,0 0.4545,0.19479 0.18397,0.18396 0.18397,0.46533 v 4.81562 q 0,0.1515 0.0541,0.24889 0.0649,0.0974 0.16232,0.14069 0.10822,0.0433 0.22726,0.0433 0.12986,0 0.23807,-0.0433 0.10822,-0.0541 0.2489,-0.0541 0.1515,0 0.27054,0.14068 0.12986,0.14068 0.12986,0.38958 0,0.303 -0.33547,0.49779 -0.32465,0.19479 -0.70341,0.19479 -0.22725,0 -0.50861,-0.0325 -0.27054,-0.0433 -0.51944,-0.18397 -0.23807,-0.1515 -0.4004,-0.45451 -0.16232,-0.303 -0.16232,-0.83326 v -4.86973 q 0,-0.28136 0.18396,-0.46533 0.19479,-0.19479 0.47616,-0.19479 z m -4.57434,1.13627 q 0.8008,0 1.21202,0.33547 0.42204,0.33547 0.57355,0.89819 0.16232,0.5519 0.16232,1.23367 v 2.77033 q 0,0.28136 -0.18397,0.47615 -0.18396,0.18397 -0.46533,0.18397 -0.28136,0 -0.46533,-0.18397 -0.18396,-0.19479 -0.18396,-0.47615 v -2.77033 q 0,-0.35712 -0.0974,-0.63848 -0.0866,-0.29218 -0.32465,-0.46533 -0.23807,-0.17314 -0.68176,-0.17314 -0.43286,0 -0.73587,0.17314 -0.29218,0.17315 -0.45451,0.46533 -0.1515,0.28136 -0.1515,0.63848 v 2.77033 q 0,0.28136 -0.18397,0.47615 -0.18396,0.18397 -0.46533,0.18397 -0.28136,0 -0.46533,-0.18397 -0.18396,-0.19479 -0.18396,-0.47615 v -4.46933 q 0,-0.28136 0.18396,-0.46533 0.18397,-0.19479 0.46533,-0.19479 0.28137,0 0.46533,0.19479 0.18397,0.18397 0.18397,0.46533 v 0.46533 l -0.16232,-0.0325 q 0.0974,-0.18396 0.28136,-0.38958 0.18397,-0.21643 0.43286,-0.4004 0.2489,-0.18396 0.56273,-0.29218 0.31382,-0.11904 0.68176,-0.11904 z m -6.69943,6.006 q -0.91984,0 -1.6016,-0.37876 -0.67094,-0.38958 -1.03887,-1.0497 -0.35712,-0.66012 -0.35712,-1.49338 0,-0.97395 0.38958,-1.65571 0.4004,-0.69258 1.03888,-1.06052 0.63847,-0.36793 1.3527,-0.36793 0.5519,0 1.03887,0.22725 0.4978,0.22726 0.87656,0.62766 0.37875,0.38957 0.59518,0.90901 0.22725,0.51944 0.22725,1.10381 -0.0108,0.25972 -0.2056,0.42204 -0.19479,0.16232 -0.45451,0.16232 h -4.13386 l -0.32465,-1.08216 h 3.97154 l -0.23808,0.21643 v -0.29218 q -0.0216,-0.31383 -0.22725,-0.56272 -0.1948,-0.2489 -0.4978,-0.38958 -0.29218,-0.1515 -0.62765,-0.1515 -0.32465,0 -0.60601,0.0866 -0.28136,0.0866 -0.48698,0.29218 -0.20562,0.20561 -0.32464,0.5519 -0.11904,0.34629 -0.11904,0.87655 0,0.58437 0.23806,0.99559 0.24891,0.4004 0.62767,0.61684 0.38958,0.20561 0.82244,0.20561 0.4004,0 0.63848,-0.0649 0.23807,-0.0649 0.37875,-0.15151 0.15151,-0.0974 0.27054,-0.16232 0.19478,-0.0974 0.36794,-0.0974 0.23807,0 0.38958,0.16232 0.16232,0.16233 0.16232,0.37876 0,0.29218 -0.303,0.53026 -0.28137,0.23807 -0.78998,0.42204 -0.50862,0.17315 -1.0497,0.17315 z m -9.60825,-6.006 q 0.86573,0 1.27696,0.42204 0.41122,0.41122 0.54108,1.07134 l -0.18397,-0.0974 0.0866,-0.17314 q 0.12986,-0.2489 0.4004,-0.53026 0.27053,-0.29219 0.6493,-0.48698 0.38957,-0.20561 0.86573,-0.20561 0.77915,0 1.17956,0.33547 0.41121,0.33547 0.56271,0.8982 0.1515,0.5519 0.1515,1.23366 v 2.77034 q 0,0.28136 -0.18395,0.47615 -0.18397,0.18397 -0.46534,0.18397 -0.28136,0 -0.46533,-0.18397 -0.18397,-0.19479 -0.18397,-0.47615 v -2.77034 q 0,-0.35711 -0.0866,-0.63847 -0.0866,-0.29219 -0.31383,-0.46533 -0.22726,-0.17315 -0.6493,-0.17315 -0.41122,0 -0.7034,0.17315 -0.29219,0.17314 -0.44369,0.46533 -0.14068,0.28136 -0.14068,0.63847 v 2.77034 q 0,0.28136 -0.18397,0.47615 -0.18397,0.18397 -0.46533,0.18397 -0.28136,0 -0.46533,-0.18397 -0.18397,-0.19479 -0.18397,-0.47615 v -2.77034 q 0,-0.35711 -0.0866,-0.63847 -0.0866,-0.29219 -0.31383,-0.46533 -0.22725,-0.17315 -0.64929,-0.17315 -0.41122,0 -0.70341,0.17315 -0.29218,0.17314 -0.44368,0.46533 -0.14069,0.28136 -0.14069,0.63847 v 2.77034 q 0,0.28136 -0.18396,0.47615 -0.18397,0.18397 -0.46533,0.18397 -0.28137,0 -0.46533,-0.18397 -0.18397,-0.19479 -0.18397,-0.47615 v -4.46933 q 0,-0.28136 0.18397,-0.46533 0.18396,-0.19479 0.46533,-0.19479 0.28136,0 0.46533,0.19479 0.18396,0.18397 0.18396,0.46533 v 0.46533 l -0.16232,-0.0325 q 0.0974,-0.18397 0.27054,-0.38958 0.17315,-0.21643 0.42204,-0.4004 0.2489,-0.18397 0.55191,-0.29218 0.303,-0.11904 0.66011,-0.11904 z m -6.78566,0 q 0.75751,0 1.35269,0.38958 0.60602,0.37875 0.95232,1.04969 0.35711,0.67094 0.35711,1.55832 0,0.88737 -0.35711,1.56913 -0.3463,0.67094 -0.94149,1.06052 -0.58437,0.37876 -1.32023,0.37876 -0.43287,0 -0.81162,-0.14068 -0.37876,-0.14069 -0.67095,-0.35712 -0.28136,-0.21643 -0.44368,-0.43286 -0.1515,-0.22726 -0.1515,-0.37876 l 0.33547,-0.14068 v 2.84609 q 0,0.28136 -0.18397,0.46533 -0.18397,0.19479 -0.46533,0.19479 -0.28136,0 -0.46533,-0.18397 -0.18397,-0.18397 -0.18397,-0.47615 v -6.63366 q 0,-0.28136 0.18397,-0.46533 0.18397,-0.19479 0.46533,-0.19479 0.28136,0 0.46533,0.19479 0.18397,0.18397 0.18397,0.46533 v 0.53026 l -0.18397,-0.0974 q 0,-0.14068 0.1515,-0.33547 0.15149,-0.20561 0.41121,-0.4004 0.25973,-0.20561 0.5952,-0.33547 0.34629,-0.12986 0.72505,-0.12986 z m -0.16233,1.19038 q -0.47616,0 -0.83326,0.23807 -0.35711,0.23808 -0.56272,0.6493 -0.19479,0.4004 -0.19479,0.91984 0,0.50861 0.19479,0.93066 0.20561,0.41122 0.56272,0.64929 0.3571,0.23808 0.83326,0.23808 0.47616,0 0.82245,-0.23808 0.35711,-0.23807 0.5519,-0.64929 0.20561,-0.42205 0.20561,-0.93066 0,-0.51944 -0.20561,-0.91984 -0.19479,-0.41122 -0.5519,-0.6493 -0.34629,-0.23807 -0.82245,-0.23807 z m -3.90965,1.81803 q 0,0.88737 -0.40039,1.56913 -0.38958,0.67094 -1.06052,1.0497 -0.66012,0.37876 -1.48256,0.37876 -0.82245,0 -1.49339,-0.37876 -0.66011,-0.37876 -1.06052,-1.0497 -0.38957,-0.68176 -0.38957,-1.56913 0,-0.88737 0.38957,-1.55832 0.40041,-0.68176 1.06052,-1.06051 0.67094,-0.38958 1.49339,-0.38958 0.82244,0 1.48256,0.38958 0.67094,0.37875 1.06052,1.06051 0.40039,0.67095 0.40039,1.55832 z m -1.29859,0 q 0,-0.5519 -0.22725,-0.9523 -0.21643,-0.41123 -0.59519,-0.63848 -0.36794,-0.22725 -0.82244,-0.22725 -0.45451,0 -0.83328,0.22725 -0.36792,0.22725 -0.59518,0.63848 -0.21644,0.4004 -0.21644,0.9523 0,0.54108 0.21644,0.9523 0.22726,0.4004 0.59518,0.62765 0.37877,0.22726 0.83328,0.22726 0.4545,0 0.82244,-0.22726 0.37876,-0.22725 0.59519,-0.62765 0.22725,-0.41122 0.22725,-0.9523 z m -5.66799,2.22925 q 0,0.28136 -0.19479,0.47615 -0.18397,0.18397 -0.46534,0.18397 -0.27053,0 -0.4545,-0.18397 -0.18397,-0.19479 -0.18397,-0.47615 v -6.68776 q 0,-0.28136 0.18397,-0.46533 0.19478,-0.19479 0.47615,-0.19479 0.28137,0 0.45451,0.19479 0.18397,0.18397 0.18397,0.46533 z m -5.01126,0.76834 q -0.91983,0 -1.6016,-0.37876 -0.67094,-0.38958 -1.03887,-1.0497 -0.35712,-0.66012 -0.35712,-1.49338 0,-0.97395 0.38958,-1.65571 0.4004,-0.69258 1.03888,-1.06052 0.63847,-0.36793 1.3527,-0.36793 0.5519,0 1.03888,0.22725 0.49778,0.22726 0.87655,0.62766 0.37874,0.38957 0.59518,0.90901 0.22726,0.51944 0.22726,1.10381 -0.0108,0.25972 -0.20562,0.42204 -0.19478,0.16232 -0.4545,0.16232 h -4.13386 l -0.32465,-1.08216 h 3.97153 l -0.23808,0.21643 v -0.29218 q -0.0216,-0.31383 -0.22724,-0.56272 -0.19479,-0.2489 -0.4978,-0.38958 -0.29219,-0.1515 -0.62765,-0.1515 -0.32465,0 -0.60601,0.0866 -0.28136,0.0866 -0.48697,0.29218 -0.20561,0.20561 -0.32465,0.5519 -0.11904,0.34629 -0.11904,0.87655 0,0.58437 0.23808,0.99559 0.24889,0.4004 0.62765,0.61684 0.38958,0.20561 0.82243,0.20561 0.40041,0 0.63849,-0.0649 0.23807,-0.0649 0.37876,-0.15151 0.1515,-0.0974 0.27054,-0.16232 0.19479,-0.0974 0.36793,-0.0974 0.23808,0 0.38957,0.16232 0.16233,0.16233 0.16233,0.37876 0,0.29218 -0.303,0.53026 -0.28137,0.23807 -0.78998,0.42204 -0.50862,0.17315 -1.0497,0.17315 z m -8.43697,-5.89779 q 0.20561,0 0.37876,0.10822 0.17314,0.0974 0.25971,0.30301 l 1.59078,3.63606 -0.23807,0.10822 1.62324,-3.73346 q 0.18397,-0.43287 0.57355,-0.41122 0.27054,0 0.43286,0.17314 0.17315,0.16233 0.17315,0.41122 0,0.0757 -0.0325,0.16233 -0.0216,0.0866 -0.0541,0.16232 l -2.02364,4.45851 q -0.17315,0.38958 -0.5519,0.41122 -0.20561,0.0325 -0.4004,-0.0757 -0.18397,-0.10822 -0.28136,-0.33547 l -2.01283,-4.45851 q -0.0216,-0.0541 -0.0541,-0.14068 -0.0216,-0.0866 -0.0216,-0.20561 0,-0.19479 0.17315,-0.37876 0.17314,-0.19479 0.46533,-0.19479 z m -3.80076,5.89779 q -0.91984,0 -1.6016,-0.37876 -0.67094,-0.38958 -1.03887,-1.0497 -0.35712,-0.66012 -0.35712,-1.49338 0,-0.97395 0.38958,-1.65571 0.4004,-0.69258 1.03888,-1.06052 0.63847,-0.36793 1.3527,-0.36793 0.5519,0 1.03888,0.22725 0.49779,0.22726 0.87655,0.62766 0.37875,0.38957 0.59519,0.90901 0.22725,0.51944 0.22725,1.10381 -0.0108,0.25972 -0.20561,0.42204 -0.19479,0.16232 -0.45451,0.16232 h -4.13386 l -0.32465,-1.08216 h 3.97154 l -0.23808,0.21643 v -0.29218 q -0.0216,-0.31383 -0.22725,-0.56272 -0.19479,-0.2489 -0.4978,-0.38958 -0.29218,-0.1515 -0.62765,-0.1515 -0.32465,0 -0.60601,0.0866 -0.28136,0.0866 -0.48697,0.29218 -0.20561,0.20561 -0.32465,0.5519 -0.11904,0.34629 -0.11904,0.87655 0,0.58437 0.23808,0.99559 0.24889,0.4004 0.62765,0.61684 0.38958,0.20561 0.82244,0.20561 0.4004,0 0.63848,-0.0649 0.23807,-0.0649 0.37876,-0.15151 0.1515,-0.0974 0.27054,-0.16232 0.19478,-0.0974 0.36793,-0.0974 0.23808,0 0.38958,0.16232 0.16232,0.16233 0.16232,0.37876 0,0.29218 -0.303,0.53026 -0.28136,0.23807 -0.78998,0.42204 -0.50862,0.17315 -1.0497,0.17315 z m -4.72955,-8.11622 q 0.28136,0 0.46533,0.18397 0.18396,0.18397 0.18396,0.47615 v 6.68776 q 0,0.28136 -0.18396,0.47615 -0.18397,0.18397 -0.46533,0.18397 -0.28137,0 -0.46533,-0.18397 -0.18397,-0.19479 -0.18397,-0.47615 v -0.53026 l 0.23807,0.0974 q 0,0.14068 -0.1515,0.34629 -0.1515,0.19479 -0.41122,0.38958 -0.25972,0.19479 -0.61683,0.33547 -0.34629,0.12986 -0.75752,0.12986 -0.74669,0 -1.3527,-0.37875 -0.60601,-0.38958 -0.96312,-1.06052 -0.34629,-0.68177 -0.34629,-1.55832 0,-0.88737 0.34629,-1.55831 0.35711,-0.68176 0.9523,-1.06052 0.59519,-0.38958 1.32024,-0.38958 0.46533,0 0.85491,0.14068 0.38957,0.14068 0.67094,0.35712 0.29218,0.21643 0.44368,0.44368 0.16233,0.21644 0.16233,0.36794 l -0.38958,0.14068 v -2.90019 q 0,-0.28137 0.18397,-0.46533 0.18396,-0.19479 0.46533,-0.19479 z m -2.18597,6.92584 q 0.47615,0 0.83326,-0.23808 0.35712,-0.23807 0.55191,-0.64929 0.20561,-0.41123 0.20561,-0.91984 0,-0.51944 -0.20561,-0.93066 -0.19479,-0.41122 -0.55191,-0.6493 -0.35711,-0.23807 -0.83326,-0.23807 -0.46533,0 -0.82244,0.23807 -0.35712,0.23808 -0.56273,0.6493 -0.19479,0.41122 -0.19479,0.93066 0,0.50861 0.19479,0.91984 0.20561,0.41122 0.56273,0.64929 0.35711,0.23808 0.82244,0.23808 z m 7.76218,3.22086 q 0.44558,0 0.79569,0.22915 0.35647,0.22279 0.56015,0.61746 0.21008,0.39466 0.21007,0.91663 0,0.52197 -0.21007,0.92302 -0.20369,0.39465 -0.55379,0.6238 -0.34372,0.22281 -0.7766,0.22278 -0.25463,-2e-5 -0.47741,-0.0828 -0.2228,-0.0828 -0.39467,-0.21008 -0.16551,-0.12738 -0.26096,-0.25462 -0.0891,-0.13372 -0.0891,-0.22279 l 0.19733,-0.0828 -1e-5,0.46467 q 1e-5,0.16552 -0.10813,0.2801 -0.10813,0.10836 -0.27373,0.10836 -0.16549,0 -0.27373,-0.10836 -0.10812,-0.10837 -0.10812,-0.28011 l 1e-5,-3.99753 q -1e-5,-0.16551 0.10813,-0.27373 0.10836,-0.11452 0.27372,-0.11452 0.1655,0 0.27373,0.11452 0.10813,0.10813 0.10813,0.27373 v 1.61684 l -0.10813,-0.0572 q 0,-0.0828 0.0891,-0.19732 0.0891,-0.12101 0.24189,-0.23553 0.15277,-0.12087 0.35011,-0.19734 0.2037,-0.0765 0.42648,-0.0765 z m -0.0954,0.70021 q -0.28007,0 -0.49014,0.14009 -0.21007,0.14008 -0.33101,0.38193 -0.1144,0.23553 -0.11464,0.54106 0,0.2992 0.11464,0.54745 0.12088,0.24187 0.331,0.38192 0.21008,0.14008 0.49015,0.14008 0.28008,-1e-5 0.48377,-0.14008 0.21009,-0.14009 0.32466,-0.38192 0.121,-0.24825 0.121,-0.54746 3e-5,-0.30555 -0.121,-0.54106 -0.11452,-0.24189 -0.32465,-0.38191 -0.20368,-0.14008 -0.48376,-0.14008 z m -3.78798,2.83266 q -0.54107,0 -0.9421,-0.22281 -0.39465,-0.22916 -0.61108,-0.61745 -0.21006,-0.38831 -0.21007,-0.87844 0,-0.5729 0.22917,-0.97393 0.2355,-0.40739 0.61108,-0.62381 0.37556,-0.21643 0.79562,-0.21667 0.32464,0 0.61109,0.13373 0.29282,0.13372 0.51561,0.3692 0.22279,0.22915 0.3501,0.53471 0.13373,0.30555 0.13373,0.64926 -0.008,0.15278 -0.12101,0.24825 -0.11464,0.0954 -0.26736,0.0953 h -2.43163 l -0.19101,-0.63655 h 2.33617 l -0.14008,0.12736 10e-6,-0.17188 q -0.0133,-0.1846 -0.13358,-0.33103 -0.11464,-0.14644 -0.29282,-0.22914 -0.17187,-0.0891 -0.36919,-0.0891 -0.19096,4e-5 -0.35647,0.0509 -0.16542,0.0513 -0.28646,0.17185 -0.121,0.121 -0.19096,0.32465 -0.0701,0.20368 -0.0701,0.51562 0,0.34374 0.14009,0.58561 0.14645,0.23553 0.36919,0.36284 0.22917,0.121 0.48379,0.121 0.23552,1e-5 0.37557,-0.0381 0.14009,-0.0381 0.2228,-0.0891 0.0891,-0.0572 0.15913,-0.0954 0.1144,-0.0572 0.21642,-0.0572 0.14008,-4e-5 0.22914,0.0953 0.0955,0.0953 0.0955,0.22278 -4e-5,0.17187 -0.17824,0.31192 -0.1655,0.14008 -0.46467,0.24826 -0.2992,0.10173 -0.61746,0.10185 z m -2.53715,-3.46922 q 0.14643,-1e-5 0.25462,0.11452 0.10813,0.10825 0.10813,0.2801 2e-5,0.0445 -0.008,0.0827 -0.008,0.0319 -0.0191,0.0635 l -0.97392,2.62259 q -0.0445,0.12736 -0.15912,0.19733 -0.11465,0.0635 -0.24189,0.0445 -0.21645,-0.0133 -0.32465,-0.2419 l -0.63018,-1.81418 0.16549,0.008 -0.592,1.80783 q -0.10837,0.22914 -0.32464,0.24187 -0.12099,0.0191 -0.24189,-0.0445 -0.11464,-0.07 -0.15913,-0.19734 l -0.97394,-2.6226 q -0.0257,-0.0699 -0.0252,-0.14644 1e-5,-0.15277 0.10185,-0.27373 0.10186,-0.12099 0.28009,-0.12099 0.12099,3e-5 0.21641,0.0572 0.0954,0.0572 0.13358,0.18459 l 0.77024,2.0879 -0.15913,-0.0134 0.57927,-1.57227 q 0.10185,-0.23554 0.3501,-0.23554 0.14008,-4e-5 0.21005,0.0635 0.0764,0.0572 0.12088,0.17187 l 0.57924,1.57228 -0.19097,0.0253 0.78296,-2.10063 q 0.0765,-0.24189 0.36919,-0.24189 z")
    web_development_me_path__gr.attr({
        id: "web_development_me_path__gr",
    })
    web_development_me_path.fill('#812f3eff')
    web_development_me_path.move(yellow_rect.bbox().x+yellow_rect.bbox().width+99,yellow_rect.bbox().y+yellow_rect.bbox().height/2-10)
    web_development_me_path.scale(3.4)
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

    var dev_background_img = "./../portfolio-app-media/media/fffff.jpg"
    
    web_development_create__image(wdev_background_img__gr, dev_background_img, rect_width, rect_height, 0, 0, 0.9, 0, 0)

    var paragraphs = wdev_background_img__gr.nested()
    paragraphs.attr({
        id: "paragraphs",
        y:   wdev_background_img__gr.bbox().height/2-275
    })
    var paragraph__a = paragraphs.text('Measuring programming progress')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#4c6f69ff',
            family:  'Quicksand',
            size:    18,
        }) 
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 0
    }) 
    var paragraph__b = paragraphs.text('by lines of code ')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#4c6f69ff',
            family:  'Quicksand',
            size:    18,
        }) 
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: 30
    }) 

    var paragraph__c = paragraphs.text('is like measuring aircraft')//.dx('20')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#4c6f69ff',
        family:  'Quicksand',
        size:    18,
    }) 
    paragraph__c.attr({
        id: 'paragraph__c',
        x: rect_width/2-paragraph__c.bbox().width/2,
        y: 60
    }) 

    var paragraph__d = paragraphs.text('building progress by weight.')//.dx('20')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#4c6f69ff',
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