
function create_mobile_menu(parent_gr, bar_gr, screen_width, screen_height) {

    //-----------------BACKGROUND------------------------
    var menu_background_gr = parent_gr.nested()

    var menu = menu_background_gr.rect(screen_width, screen_height)
    .fill('#cf573eff')
    .attr({
        id:      "menu",
        opacity: 1.0,
        height:  screen_height,
    })

    //-----------------TEXT------------------------
    var titles__gr = menu_background_gr.nested().attr({ y: 130 })

    var home_title__gr = titles__gr.nested()
    var home_title     = home_title__gr.text(function(text_element){
        text_element.tspan('home')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    

    home_title.attr({
        x: 0,
        y: 50
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    home_clicked = false;

    home_title__gr.click(function() {
    
        // HOME CLICKED
        if (home_clicked == false) {
            

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "home_page";
            run_page_transition(target_page_name, "2_plane_swipe_to_center", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------
            

            console.log("open new window...")
            // window.open("about_desktop.html")
            home_clicked = true;

            nav_bar__reset(bar_gr)
     
        }
        // HOME DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width);
    
            home_clicked = false;
        }
    })

    ///////////////////////////////////////////////////////////////////////////////////////

    var about_title__gr = titles__gr.nested()
    var about_title     = about_title__gr.text(function(text_element){
        text_element.tspan('about')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#bf1f1fff',
            family:  'Quicksand',
            size:    28
        })    
    about_title.attr({
        x: 0,
        y: 100
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    nevena_clicked = false;

    about_title__gr.click(function() {
    
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

            nav_bar__reset(bar_gr);
    
        }
        // NEVENA DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width);
    
            nevena_clicked = false;
        }
    })
    
    ///////////////////////////////////////////////////////////////////////////////////////

    var design_title__gr = titles__gr.nested()
    var design_title     = design_title__gr.text(function(text_element){
        text_element.tspan('web design')
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    28
    })    
    design_title.attr({
        x: 0,
        y: 150
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    design_clicked = false;

    design_title__gr.click(function() {
    
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
    ///////////////////////////////////////////////////////////////////////////////////////

    var development_title__gr = titles__gr.nested()
    var development_title     = development_title__gr.text(function(text_element){
        text_element.tspan('web development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#b52a43ff',
            family:  'Quicksand',
            size:    28
        })    
    development_title.attr({
        x: 0,
        y: 200
    })



    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    development_clicked = false;
    
    development_title__gr.click(function() {
    
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

    ///////////////////////////////////////////////////////////////////////////////////////

    var moodboard_title__gr = titles__gr.nested()
    var moodboard_title     = moodboard_title__gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
    moodboard_title.attr({
        x: 0,
        y: 250
    })

    moodboard_clicked = false;

    moodboard_title__gr.click(function() {
    
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

    ///////////////////////////////////////////////////////////////////////////////////////

    var contact_title__gr = titles__gr.nested()
    var contact_title     = contact_title__gr.text(function(text_element){
        text_element.tspan('contact')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
    contact_title.attr({
        x: 0,
        y: 300
    })

    //-----------------BUTTONS HOVER-MOUSEOVER------------------------

    menu.mouseover(function() {                     //when hovered over background titles color return to its origin
        home_title.fill({ color: '#fff' })
        design_title.fill({ color: '#fff' })
        development_title.fill({ color: '#fff' })
        about_title.fill({ color: '#fff' })
        moodboard_title.fill({ color: '#fff' })
        contact_title.fill({ color: '#fff' })

    })

    home_title.mouseover(function() {               //when hovered over title it changes color
        home_title.fill({ color: '#fbbc6bff' })
    })
    about_title.mouseover(function() {
        about_title.fill({ color: '#fbbc6bff' })
    })
    design_title.mouseover(function() {
        design_title.fill({ color: '#fbbc6bff' })
    })
    development_title.mouseover(function() {
        development_title.fill({ color: '#fbbc6bff' })
    })
    moodboard_title.mouseover(function() {
        moodboard_title.fill({ color: '#fbbc6bff' })
    })
    contact_title.mouseover(function() {
        contact_title.fill({ color: '#fbbc6bff' })
    })
    //home_title.mouseover(null)

    var menu_info = {
        "menu":               menu,
        "menu_background_gr": menu_background_gr
    }
    close_mobile__menu(menu_background_gr, menu_info)

    return menu_info

}

function close_mobile__menu(parent_gr, menu_info){

    var menu               = menu_info["menu"];
    var menu_background_gr = menu_info["menu_background_gr"];

    var close_mobile__menu_gr = parent_gr.nested()
        close_mobile__menu_gr.attr({
            opacity: 1.0,
            x: 35,
            y: 30
        })

    var close_mobile__menu_rect = close_mobile__menu_gr.rect(50,50)
    .fill("#fff")
    var line_top        = close_mobile__menu_gr.line(5, 5, 35, 35).stroke({color: '#bf5b5bff', width: 6, linecap: 'round', opacity: 1.0 })
    var line_bottom     = close_mobile__menu_gr.line(35, 5, 5, 35).stroke({color: '#bf5b5bff', width: 6, linecap: 'round', opacity: 1.0 })

    close_mobile__menu_gr.mouseover(function() {
        line_top.stroke({ color: '#bf5b5bff' })
        line_bottom.stroke({ color: '#bf5b5bff' })
    })


    menu.mouseover(function() {                  
        line_top.fill({ color: '#b42541e6' })
        line_bottom.fill({ color: '#b42541e6' })
    })



    var close_mobile__menu_clicked = false;

    close_mobile__menu_gr.click(function() {
        
        // ACTIVATE BOX_1
        if (close_mobile__menu_clicked == false) {
            
            // ANIMATE
            menu_background_gr.remove()

            close_mobile__menu_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_menu(menu_background_gr, screen_width, screen_height)

            close_mobile__menu_clicked = false;
        }
    })


}

/*
function create_mobile_menu(parent_gr, bar_gr, screen_width, screen_height) {

    //-----------------BACKGROUND------------------------
    var menu_background_gr = parent_gr.nested()

    var menu = menu_background_gr.rect(screen_width, screen_height)
    .fill('#fff')
    .attr({
        id:      "menu",
        opacity: 1.0,
        height:  screen_height,
    })

    //-----------------TEXT------------------------
    var titles__gr = menu_background_gr.nested().attr({ y: 130 })

    var home_title__gr = titles__gr.nested()
    var home_rect      = home_title__gr.rect(screen_width,50).fill("#bf1f1fff")
    var home_title     = home_title__gr.text(function(text_element){
        text_element.tspan('home')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
    home_title.attr({
        x: home_rect.bbox().width/2-home_title.bbox().width/2,
        y: home_rect.bbox().height/2+home_title.bbox().height/2-10
    })
    home_title__gr.attr({
        x: menu.bbox().width/2-home_rect.bbox().width/2,
        y: 0
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    home_clicked = false;

    home_title__gr.click(function() {
    
        // HOME CLICKED
        if (home_clicked == false) {
            

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "home_page";
            run_page_transition(target_page_name, "2_plane_swipe_to_center", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------
            

            console.log("open new window...")
            // window.open("about_desktop.html")
            home_clicked = true;

            nav_bar__reset(bar_gr)
     
        }
        // HOME DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width);
    
            home_clicked = false;
        }
    })

    ///////////////////////////////////////////////////////////////////////////////////////

    var about_title__gr = titles__gr.nested()
    var about_rect      = about_title__gr.rect(screen_width, 50).fill("#d9d26cff")
    var about_title     = about_title__gr.text(function(text_element){
        text_element.tspan('about')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#bf1f1fff',
            family:  'Quicksand',
            size:    28
        })    
    about_title.attr({
        x: about_rect.bbox().width/2-about_title.bbox().width/2,
        y: about_rect.bbox().height/2+about_title.bbox().height/2-10
    })
    about_title__gr.attr({
        x: menu.bbox().width/2-about_rect.bbox().width/2,
        y: home_title__gr.bbox().height+20
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    nevena_clicked = false;

    about_title__gr.click(function() {
    
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

            nav_bar__reset(bar_gr);
    
        }
        // NEVENA DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width);
    
            nevena_clicked = false;
        }
    })
    
    ///////////////////////////////////////////////////////////////////////////////////////

    var design_title__gr = titles__gr.nested()
    var design_rect      = design_title__gr.rect(screen_width, 50).fill("#b52a43ff")
    var design_title     = design_title__gr.text(function(text_element){
        text_element.tspan('web design')
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    28
    })    
    design_title.attr({
        x: design_rect.bbox().width/2-design_title.bbox().width/2,
        y: design_rect.bbox().height/2+design_title.bbox().height/2-10
    })
    design_title__gr.attr({
        x: menu.bbox().width/2-design_rect.bbox().width/2,
        y: home_title__gr.bbox().height+about_title__gr.bbox().height+40
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    design_clicked = false;

    design_title__gr.click(function() {
    
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
    ///////////////////////////////////////////////////////////////////////////////////////

    var development_title__gr = titles__gr.nested()
    var development_rect      = development_title__gr.rect(screen_width, 50).fill("#ffc13bff")
    var development_title     = development_title__gr.text(function(text_element){
        text_element.tspan('web development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#b52a43ff',
            family:  'Quicksand',
            size:    28
        })    
    development_title.attr({
        x: development_rect.bbox().width/2-development_title.bbox().width/2,
        y: development_rect.bbox().height/2+development_title.bbox().height/2-10
    })
    development_title__gr.attr({
        x: menu.bbox().width/2-development_rect.bbox().width/2,
        y: home_title__gr.bbox().height+about_title__gr.bbox().height+design_title__gr.bbox().height+60
    })


    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    development_clicked = false;
    
    development_title__gr.click(function() {
    
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

    ///////////////////////////////////////////////////////////////////////////////////////

    var moodboard_title__gr = titles__gr.nested()
    var moodboard_rect      = moodboard_title__gr.rect(screen_width, 50).fill("#2d0092ff")
    var moodboard_title     = moodboard_title__gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
    moodboard_title.attr({
        x: moodboard_rect.bbox().width/2-moodboard_title.bbox().width/2,
        y: moodboard_rect.bbox().height/2+moodboard_title.bbox().height/2-10
    })
    moodboard_title__gr.attr({
        x: menu.bbox().width/2-moodboard_rect.bbox().width/2,
        y: home_title__gr.bbox().height+about_title__gr.bbox().height+design_title__gr.bbox().height+development_title__gr.bbox().height+80
    })

    moodboard_clicked = false;

    moodboard_title__gr.click(function() {
    
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

    ///////////////////////////////////////////////////////////////////////////////////////

    var contact_title__gr = titles__gr.nested()
    var contact_rect      = contact_title__gr.rect(screen_width, 50).fill("#bf5b5bff")
    var contact_title     = contact_title__gr.text(function(text_element){
        text_element.tspan('contact')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
    contact_title.attr({
        x: contact_rect.bbox().width/2-contact_title.bbox().width/2,
        y: contact_rect.bbox().height/2+contact_title.bbox().height/2-10
    })
    contact_title__gr.attr({
        x: menu.bbox().width/2-contact_rect.bbox().width/2,
        y: home_title__gr.bbox().height+about_title__gr.bbox().height+design_title__gr.bbox().height+development_title__gr.bbox().height+moodboard_title__gr.bbox().height+100
    })

    //-----------------BUTTONS HOVER-MOUSEOVER------------------------

    menu.mouseover(function() {                     //when hovered over background titles color return to its origin
        home_title.fill({ color: '#fff' })
        design_title.fill({ color: '#fff' })
        development_title.fill({ color: '#fff' })
        about_title.fill({ color: '#fff' })
        moodboard_title.fill({ color: '#fff' })
        contact_title.fill({ color: '#fff' })

    })

    home_title.mouseover(function() {               //when hovered over title it changes color
        home_title.fill({ color: '#fbbc6bff' })
    })
    about_title.mouseover(function() {
        about_title.fill({ color: '#fbbc6bff' })
    })
    design_title.mouseover(function() {
        design_title.fill({ color: '#fbbc6bff' })
    })
    development_title.mouseover(function() {
        development_title.fill({ color: '#fbbc6bff' })
    })
    moodboard_title.mouseover(function() {
        moodboard_title.fill({ color: '#fbbc6bff' })
    })
    contact_title.mouseover(function() {
        contact_title.fill({ color: '#fbbc6bff' })
    })
    //home_title.mouseover(null)

    var menu_info = {
        "menu":               menu,
        "menu_background_gr": menu_background_gr
    }
    close_mobile__menu(menu_background_gr, menu_info)

    return menu_info

}

function close_mobile__menu(parent_gr, menu_info){

    var menu               = menu_info["menu"];
    var menu_background_gr = menu_info["menu_background_gr"];

    var close_mobile__menu_gr = parent_gr.nested()
        close_mobile__menu_gr.attr({
            opacity: 1.0,
            x: 35,
            y: 30
        })

    var close_mobile__menu_rect = close_mobile__menu_gr.rect(50,50)
    .fill("#fff")
    var line_top        = close_mobile__menu_gr.line(5, 5, 35, 35).stroke({color: '#bf5b5bff', width: 6, linecap: 'round', opacity: 1.0 })
    var line_bottom     = close_mobile__menu_gr.line(35, 5, 5, 35).stroke({color: '#bf5b5bff', width: 6, linecap: 'round', opacity: 1.0 })

    close_mobile__menu_gr.mouseover(function() {
        line_top.stroke({ color: '#bf5b5bff' })
        line_bottom.stroke({ color: '#bf5b5bff' })
    })


    menu.mouseover(function() {                  
        line_top.fill({ color: '#b42541e6' })
        line_bottom.fill({ color: '#b42541e6' })
    })



    var close_mobile__menu_clicked = false;

    close_mobile__menu_gr.click(function() {
        
        // ACTIVATE BOX_1
        if (close_mobile__menu_clicked == false) {
            
            // ANIMATE
            menu_background_gr.remove()

            close_mobile__menu_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_menu(menu_background_gr, screen_width, screen_height)

            close_mobile__menu_clicked = false;
        }
    })


}
*/ 