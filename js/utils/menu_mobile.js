
function create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height) {

    //-----------------BACKGROUND------------------------
    var menu_background_gr = parent_gr.nested()

    var menu = menu_background_gr.rect(screen_width_in_px, screen_height)
    .fill('#fb6d6bff')
    .attr({
        id:      "menu",
        opacity: 1.0,
    })

    //-----------------TEXT------------------------

    var home_title__gr = menu_background_gr.nested()
    var home_title     = home_title__gr.text(function(text_element){
        text_element.tspan('home')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    home_title.attr({
        x: menu.bbox().width/2-home_title.bbox().width/2,
        y: menu.bbox().y+135
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
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width_in_px);
    
            home_clicked = false;
        }
    })

    ///////////////////////////////////////////////////////////////////////////////////////

    var about_title__gr = menu_background_gr.nested()
    var about_title     = about_title__gr.text(function(text_element){
        text_element.tspan('about')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    about_title.attr({
        x: menu.bbox().width/2-about_title.bbox().width/2,
        y: home_title.bbox().y+home_title.bbox().height+65
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
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width_in_px);
    
            nevena_clicked = false;
        }
    })
    
    ///////////////////////////////////////////////////////////////////////////////////////

    var design_title__gr = menu_background_gr.nested()
    var design_title     = design_title__gr.text(function(text_element){
        text_element.tspan('web design')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    design_title.attr({
        x: menu.bbox().width/2-design_title.bbox().width/2,
        y: about_title.bbox().y+about_title.bbox().height+65
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

    var development_title__gr = menu_background_gr.nested()
    var development_title     = development_title__gr.text(function(text_element){
        text_element.tspan('web develop')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    development_title.attr({
        x: menu.bbox().width/2-development_title.bbox().width/2,
        y: design_title.bbox().y+design_title.bbox().height+65
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

    var moodboard_title__gr = menu_background_gr.nested()
    var moodboard_title     = moodboard_title__gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    moodboard_title.attr({
        x: menu.bbox().width/2-moodboard_title.bbox().width/2,
        y: development_title.bbox().y+development_title.bbox().height+65
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

    var contact_title__gr = menu_background_gr.nested()
    var contact_title     = contact_title__gr.text(function(text_element){
        text_element.tspan('contact')
    })
        .font({
            opacity: 0.2,
            weight:  600,
            fill:    '#fff',
            family:  'Quicksand',
            size:    18
        })    
    contact_title.attr({
        x: menu.bbox().width/2-contact_title.bbox().width/2,
        y: moodboard_title.bbox().y+moodboard_title.bbox().height+65
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
        home_title.fill({ color: '#a93636ff' })
    })
    about_title.mouseover(function() {
        about_title.fill({ color: '#a93636ff' })
    })
    design_title.mouseover(function() {
        design_title.fill({ color: '#a93636ff' })
    })
    development_title.mouseover(function() {
        development_title.fill({ color: '#a93636ff' })
    })
    moodboard_title.mouseover(function() {
        moodboard_title.fill({ color: '#a93636ff' })
    })
    contact_title.mouseover(function() {
        contact_title.fill({ color: '#a93636ff' })
    })
    //home_title.mouseover(null)

    var menu_info = {
        "menu":               menu,
        "menu_background_gr": menu_background_gr,
        "home_title":         home_title,
        "about_title":         about_title,
        "design_title":       design_title,
        "development_title":  development_title,
        "moodboard_title":    moodboard_title,
        "contact_title":      contact_title
    }
    animate_menu__activate(menu_info)
    close_menu(menu_background_gr, menu_info, screen_width_in_px, screen_height)

    return menu_info

}





function close_menu(parent_gr, menu_info, screen_width_in_px, screen_height){

    var menu               = menu_info["menu"];
    var menu_background_gr = menu_info["menu_background_gr"];

    var close_menu_gr = parent_gr.nested()
        close_menu_gr.attr({
            id:    "close_menu", 
            opacity: 1.0,
            x:       screen_width_in_px-55,
            y:       15
        })
        console.log(close_menu_gr, "menu rectjjjjjjjjjjjjjjjjjjjjjj")

    var close_menu_rect = close_menu_gr.rect(50,50)
    close_menu_rect.fill("#bf5b5bff")
    close_menu_rect.attr({
        opacity: 0.05,
    })
    var line_top    = close_menu_gr.line(5, 5, 35, 35).stroke({color: '#a93636ff', width: 6, linecap: 'round', opacity: 1.0 })
    var line_bottom = close_menu_gr.line(35, 5, 5, 35).stroke({color: '#a93636ff', width: 6, linecap: 'round', opacity: 1.0 })

    line_top.mouseover(function() {
        line_top.fill({ color: '#8c8300ff' })
    })

    line_bottom.mouseover(function() {
        line_bottom.fill({ color: '#8c8300ff' })
    })

    menu.mouseover(function() {                  
        line_top.fill({ color: '#b42541e6' })
        line_bottom.fill({ color: '#b42541e6' })
    })

    var close_menu_clicked = false;

    close_menu_gr.click(function() {
        
        // ACTIVATE BOX_1
        if (close_menu_clicked == false) {
            
            // ANIMATE
            animate_menu__deactivate(menu_info,function(){
                menu_background_gr.remove()     //called when last animation is completed
            })
            close_menu_clicked = true;
        }

    })
}

//---------------------ANIMATE MENU-------------------------------------------------
function animate_menu__activate(menu_info){
    var menu              = menu_info["menu"];
    var home_title        = menu_info["home_title"];
    var about_title       = menu_info["about_title"];
    var design_title      = menu_info["design_title"];
    var development_title = menu_info["development_title"];
    var moodboard_title   = menu_info["moodboard_title"];  
    var contact_title     = menu_info["contact_title"];      

    home_title.animate({
        delay: 100,
        duration: 200,
    })
    .font("size", "34")
    .attr({
        opacity: 1.0,
        x: menu.bbox().width/2-(home_title.bbox().width+50)/2, //adding 30px to home_title.width() because initial font-size is smaller then given after in animation
    })                                                         //without adding px home_title.width()/2 would be smaller and positioned wrong

    about_title.animate({
        duration: 200,
        delay:    150,
    })
    .font("size", "34")
    .attr({
        x: menu.bbox().width/2-(about_title.bbox().width+50)/2,
        opacity: 1.0,
    })

    design_title.animate({
        duration: 200,
        delay:    200,
    })
    .font("size", "34")
    .attr({
        opacity: 1.0,
        x: menu.bbox().width/2-(design_title.bbox().width+90)/2,
    })

    development_title.animate({
        duration: 200,
        delay:    250,
    })
    .font("size", "34")
    .attr({
        opacity: 1.0,
        x: menu.bbox().width/2-(development_title.bbox().width+100)/2,
    })

    moodboard_title.animate({
        duration: 200,
        delay:    300,
    }).font("size", "34")
    .attr({
        opacity: 1.0,
        x: menu.bbox().width/2-(moodboard_title.bbox().width+95)/2,
    })

    contact_title.animate({
        duration: 200,
        delay:    350,
    }).font("size", "34")
    .attr({
        opacity: 1.0,
        x: menu.bbox().width/2-(contact_title.bbox().width+60)/2,
    })
    

}

//---------------------ANIMATE MENU-------------------------------------------------
function animate_menu__deactivate(menu_info, on_complete__fn){
    var menu              = menu_info["menu"];
    var home_title        = menu_info["home_title"];
    var about_title       = menu_info["about_title"];
    var design_title      = menu_info["design_title"];
    var development_title = menu_info["development_title"];
    var moodboard_title   = menu_info["moodboard_title"];  
    var contact_title     = menu_info["contact_title"];      

    contact_title.animate({
        duration: 200,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(contact_title.bbox().width-60)/2,
    })

    moodboard_title.animate({
        duration: 400,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(moodboard_title.bbox().width-90)/2,
    })

    development_title.animate({
        duration: 600,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(development_title.bbox().width-95)/2,
    })

    design_title.animate({
        duration: 800,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(design_title.bbox().width-85)/2,
    })

    about_title.animate({
        duration: 1000,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(about_title.bbox().width-45)/2,
    })

    home_title.animate({
        duration: 1000,
    }).font("size", "18")
    .attr({
        opacity: 0.2,
        x: menu.bbox().width/2-(home_title.bbox().width-40)/2,
    })
    .after(function(){
        on_complete__fn();
    })





}