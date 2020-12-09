
/*function menu__main(){

    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;

    $("body").append(`
        <div id="wrapper">
        </div>
    `);

    $("#wrapper").css({                    
        "background-color": "#000",
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width
    }); 

    var container              = SVG().addTo("#wrapper").size(screen_width, screen_height) // draw svg canvas
    var container_gr           = container.nested()


    create_menu(container_gr, screen_width, screen_height)
    
    $( window ).resize(function() {
        $( "#wrapper" ).remove();

        var screen_width = window.innerWidth;
        var screen_height = window.innerHeight;

        create_menu(container_gr, screen_width, screen_height)
    });
}*/

function create_menu(parent_gr, screen_width, screen_height) {

    //-----------------BACKGROUND------------------------
    var menu_background_gr = parent_gr.nested()

    var menu = menu_background_gr.rect(screen_width/2, screen_height)
    .fill('#d9d26cff')
    .attr({
        id:      "menu",
        opacity: 1.0,
    })

    //-----------------TEXT------------------------

    var home_title = menu_background_gr.text(function(text_element){
        text_element.tspan('HOME')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    home_title.attr({
        x: menu.bbox().width/2-home_title.bbox().width/2,
        y: menu.bbox().y+220
    })

    var about_title = menu_background_gr.text(function(text_element){
        text_element.tspan('ABOUT')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    about_title.attr({
        x: menu.bbox().width/2-about_title.bbox().width/2,
        y: home_title.bbox().y+home_title.bbox().height+100
    })

    var design_title = menu_background_gr.text(function(text_element){
        text_element.tspan('WEB DESIGN')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    design_title.attr({
        x: menu.bbox().width/2-design_title.bbox().width/2,
        y: about_title.bbox().y+about_title.bbox().height+100
    })

    var development_title = menu_background_gr.text(function(text_element){
        text_element.tspan('WEB DEVELOPMENT')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    development_title.attr({
        x: menu.bbox().width/2-development_title.bbox().width/2,
        y: design_title.bbox().y+design_title.bbox().height+100
    })


    var moodboard_title = menu_background_gr.text(function(text_element){
        text_element.tspan('MOODBOARD')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    moodboard_title.attr({
        x: menu.bbox().width/2-moodboard_title.bbox().width/2,
        y: development_title.bbox().y+development_title.bbox().height+100
    })


    var contact_title = menu_background_gr.text(function(text_element){
        text_element.tspan('CONTACT')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cff',
            family:  'Quicksand',
            size:    45
        })    
    contact_title.attr({
        x: menu.bbox().width/2-contact_title.bbox().width/2,
        y: moodboard_title.bbox().y+moodboard_title.bbox().height+100
    })

    /*menu_buttons.attr({
        x: (menu.bbox().x+menu.bbox().width)/2,
        y: (menu.bbox().y+menu.bbox().height)/2
    })*/

    //-----------------BUTTONS HOVER-MOUSEOVER------------------------

    menu.mouseover(function() {                     //when hovered over background titles color return to its origin
        home_title.fill({ color: '#467f8cff' })
        design_title.fill({ color: '#467f8cff' })
        development_title.fill({ color: '#467f8cff' })
        about_title.fill({ color: '#467f8cff' })
        moodboard_title.fill({ color: '#467f8cff' })
        contact_title.fill({ color: '#467f8cff' })

    })

    home_title.mouseover(function() {               //when hovered over title it changes color
        home_title.fill({ color: '#b42541e6' })
    })
    about_title.mouseover(function() {
        about_title.fill({ color: '#b42541e6' })
    })
    design_title.mouseover(function() {
        design_title.fill({ color: '#b42541e6' })
    })
    development_title.mouseover(function() {
        development_title.fill({ color: '#b42541e6' })
    })
    moodboard_title.mouseover(function() {
        moodboard_title.fill({ color: '#b42541e6' })
    })
    contact_title.mouseover(function() {
        contact_title.fill({ color: '#b42541e6' })
    })
    //home_title.mouseover(null)

    var menu_info = {
        "menu":               menu,
        "menu_background_gr": menu_background_gr
    }
    close_menu(menu_background_gr, menu_info)

    return menu_info

}

function close_menu(parent_gr, menu_info){

    var menu               = menu_info["menu"];
    var menu_background_gr = menu_info["menu_background_gr"];

    var close_menu_gr = parent_gr.nested()
        close_menu_gr.attr({
            opacity: 1.0,
            x: 100,
            y: 100
        })

    var close_menu_rect = close_menu_gr.rect(50,50)
    .fill("#d9d26cff")
    var line_top        = close_menu_gr.line(5, 5, 40, 40).stroke({color: '#467f8cff', width: 6, linecap: 'round', opacity: 1.0 })
    var line_bottom     = close_menu_gr.line(40, 5, 5, 40).stroke({color: '#467f8cff', width: 6, linecap: 'round', opacity: 1.0 })

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
            menu_background_gr.remove()

            close_menu_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_menu(menu_background_gr, screen_width_in_px, screen_height)

            close_menu_clicked = false;
        }
    })


}