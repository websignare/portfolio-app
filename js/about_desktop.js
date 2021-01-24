/*$(document).ready(function(){
    about__main();
})*/

function about__main() {

    about__activate(bar_gr);

    $(window).resize(function() {
        
        about__deactivate();

        about__activate(bar_gr);
    });
}

// ACTIVATE
function about__activate(bar_gr) {

    document.title = "about"
    window.history.pushState({page: "about"},"", "#about");

    $("body").append(`

        <div id="about">
            <div id="wrapper">
            </div>
            <div id="headline__info">
            </div>
            <div id="intro__info">
            </div>
            <div id="history__info">
            </div>
            <div id="process__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    about__create_responsive(bar_gr);
    current_page = "about";

}

// DEACTIVATE
function about__deactivate() {

    $("#about").remove();
    $("#contact_wrapper").remove();
    
    /* REMOVE/CLEANUP TRIGGERS (for this page)
    remove_triggers("headline_canvas__trigger")
    remove_triggers("intro_canvas__trigger")
    remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/
}

function about__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    $("#about #wrapper").css({                    
        "background-color": '#d8d8d8ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 


    $("#about #headline__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height/2.5,
        "width":            screen_width_in_px,
        
    }); 


    console.log("dddddddddddddddddddddddddddddddddddddddddd")
    console.log("dddddddddddddddddddddddddddddddddddddddddd")
    console.log("dddddddddddddddddddddddddddddddddddddddddd")
    var bounding_rect          = $("#about #headline__info").get(0).getBoundingClientRect()
    var headline__div_bottom_y = bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#about #intro__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    var intro__bounding_rect = $("#about #intro__info").get(0).getBoundingClientRect()
    var intro__div_bottom_y  = intro__bounding_rect.bottom;

    $("#about #history__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    $("#about #process__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    $("#about #video__info").css({                    
        "background-color": '#262626ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //----------SVG_CANVASES-----------//
    var main_canvas     = SVG().addTo("#about #wrapper").size(screen_width_in_px, screen_height)
    var main_canvas__gr = main_canvas.nested()   

    var headline_canvas     = SVG().addTo("#about #headline__info").size(screen_width_in_px, screen_height/2)
    var headline_canvas__gr = headline_canvas.nested()   
    headline_canvas__gr.attr({opacity: 1.0})

    var intro_canvas     = SVG().addTo("#about #intro__info").size(screen_width_in_px, screen_height)
    var intro_canvas__gr = intro_canvas.nested()   
    intro_canvas__gr.attr({opacity: 1.0})

    var history_canvas     = SVG().addTo("#about #history__info").size(screen_width_in_px, screen_height)
    var history_canvas__gr = history_canvas.nested()   

    var process_canvas     = SVG().addTo("#about #process__info").size(screen_width_in_px, screen_height)
    var process_canvas__gr = process_canvas.nested()   

    var video_canvas     = SVG().addTo("#about #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //intro(main_canvas__gr, screen_width_in_px, screen_height)
        //nevena(main_canvas__gr, screen_width_in_px, screen_height)
        //web_design(main_canvas__gr, screen_width_in_px, screen_height)
        //web_development(main_canvas__gr, screen_width_in_px, screen_height)
        //animation(main_canvas__gr, screen_width_in_px, screen_height)
        //contact(main_canvas__gr, screen_width_in_px, screen_height)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        //var layout_tablet_gr = create_background__tablet(main_canvas__gr, screen_width_in_px, screen_height)
        //var background_white_tablet_gr = layout_tablet_gr.findOne('#background_white_tablet_gr')
        //section_images__tablet(background_white_tablet_gr, screen_width_in_px, screen_height)
        //create_text__tablet(main_canvas__gr, wrapperscreen_width_in_px, screen_height)
        //buttons_tablet(main_canvas__gr, screen_height, screen_width_in_px)
        //create_contact_section(contact_gr, screen_width_in_px)

    }

    else {
        var about_layout_gr     = about__create_background__desktop(main_canvas__gr, bar_gr, screen_width_in_px, screen_height)
        var about_background_gr = about_layout_gr.find("#about_background_gr")
        

        console.log("***********")
        console.log(about_background_gr)

        about__images__desktop(about_background_gr, screen_width_in_px, screen_height)
        about__quote_and_scroll__desktop(main_canvas__gr, screen_width_in_px, screen_height)

        about__headline___info(headline_canvas__gr, screen_width_in_px, screen_height)
        about_intro__info(intro_canvas__gr, screen_width_in_px, screen_height)
        history__info(history_canvas__gr, screen_width_in_px, screen_height)
        process__info(process_canvas__gr, screen_width_in_px, screen_height)
        about_video__info(video_canvas__gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px,screen_height)

        // HEADLINE__SCROLL_TRIGGER
        /*var trigger_y_position__headline_canvas = headline__div_bottom_y;
        sc_trigger__create(trigger_y_position__headline_canvas,
            "headline_canvas__trigger",
            screen_height,
            // activate_fn
            function() {
                headline_canvas__gr.animate({
                        duration: 400,
                        // delay:    400, 
                        ease: '<' 
                    })
                    .attr({opacity: 1.0})
            },
            // deactivate
            function() {
                headline_canvas__gr.animate({
                    duration: 200,
                    delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 0.1})
            });

        // INTRO__SCROLL_TRIGGER
        var trigger_y_position__intro_canvas = intro__div_bottom_y;
        sc_trigger__create(trigger_y_position__intro_canvas,
            "intro_canvas__trigger",
            screen_height,
            // activate_fn
            function() {
                intro_canvas__gr.animate({
                        duration: 400,
                        // delay:    400, 
                        ease: '<' 
                    })
                    .attr({opacity: 1.0})
            },
            // deactivate
            function() {
                intro_canvas__gr.animate({
                    duration: 200,
                    delay:    400, 
                    ease: '<' 
                })
                .attr({opacity: 0.1})
            });*/
        
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function about__create_background__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var about_layout_gr = parent_gr.nested().attr({id: 'about_layout_gr'})

    var about_background_gr = about_layout_gr.nested()
        .attr({
            id: "about_background_gr",
        })

    var background_rect = about_background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ebf2edff')
        .attr({
            id:      "background_rect",
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#f18b0fff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#f18b0fff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#f18b0fff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#f18b0fff', linecap: 'round' })


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

    return about_layout_gr;

}

//----------------------------------------------TEXT----------------------------------------------------------------
function about__quote_and_scroll__desktop(parent_gr, screen_width_in_px, screen_height)
{
    var text_gr = parent_gr.nested()

        //-----------------QUOTES------------------------
        var quotes_up = text_gr.text(function(text_element){
            text_element.tspan('"')
        })
            .font({
                opacity: 1.0,
                weight:  700,
                fill:    '#6b1427ff',
                family:  'Quicksand',
                size:    60
            })    
        quotes_up.attr({
            x: 190,
            y: screen_height/2-20
        })

        var paragraph = text_gr.text(function(add){
            add.tspan('Imagination is the beginning of creation.').newLine()
            add.tspan('').newLine()
            add.tspan('You imagine what you desire,').newLine()
            add.tspan('you will what you imagine,').newLine()
            add.tspan('and at last, ').newLine() 
            add.tspan('you create what you will.').newLine()
            add.tspan('').newLine() 
            add.tspan('-George Bernand Shaw').newLine().dx(310).font({size:'24'})
        })
            .font({
                opacity: 1.0,
                weight:  700,
                fill:    '#6b1427ff',
                family:  'Quicksand',
                size:    26
            })    
        paragraph.attr({
            x: 240,
            y: screen_height/2-60
        })  

        var quotes_down = text_gr.text(function(text_element){
            text_element.tspan('"')
        })
            .font({
                opacity: 1.0,
                weight:  700,
                fill:    '#6b1427ff',
                family:  'Quicksand',
                size:    60
            })    
        quotes_down.attr({
            x: paragraph.bbox().width+175,
            y: screen_height/2+paragraph.bbox().height-quotes_down.bbox().height/2-90
        })

        var scroll_gr = text_gr.nested()
        var scroll_text = scroll_gr.text(function(text_element){
            text_element.tspan('Scroll & read a little about me')
        })
            .font({
                opacity: 1.0,
                weight:  400,
                fill:    '#6b1427ff',
                family:  'Quicksand',
                size:    18
            })   
        scroll_text.attr({
            x: 0,
            y: 0
        }) 
        scroll_gr.attr({
            x: paragraph.bbox().x,
            y: paragraph.bbox().y+paragraph.bbox().height+105
        })

        var arrow_gr = text_gr.nested()
        var scroll_arrow = arrow_gr.path('m 53.347282,72.845957 3.5908,3.9688 3.9687,-3.9688 z m 3.7797,-28.829789 c 0,9.613609 0,19.227511 0,28.841609')
        scroll_arrow.stroke({ color: '#262626ff', width: 4, linecap: 'round', linejoin: 'round' })
        /*var scroll_arrow_gr = scroll_gr.nested()
        var scroll_arrow = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-29.1042,-45.5041)">
       <g
          inkscape:label="#g2680"
          style="fill:none;fill-opacity:1;stroke:#2a3b2a;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          transform="translate(1726.3821,-1064.1634)"
          id="arrow">
         <path
            style="fill:none;fill-opacity:1;stroke:#2a3b2a;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -1693.5926,1109.6675 v 28.7261"
            id="path2674-9"
            inkscape:connector-curvature="0" />
         <path
            style="fill:#2a3d35;fill-opacity:1;stroke:none;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -1697.2779,1138.4881 h 7.5595 l -3.9687,3.9688 z"
            id="path2676-6"
            inkscape:connector-curvature="0" />
       </g>
     </g>`)*/

        arrow_gr.attr({
            id:     'scroll_arrow',
            x: paragraph.bbox().x,
            y: paragraph.bbox().height
        }) 
        arrow_gr.scale(2)

}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function about__images__desktop(parent_gr, screen_width_in_px, screen_height){

    console.log("====================")
    console.log(parent_gr)


    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+220,
        height: screen_height,
        x: screen_width_in_px/3-32
    })

    var rect_width = (screen_width_in_px/2)/5.7;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/a_1.png',
                'height':     '350',
                'position_x': 0,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_2.png',
                'height':     '350', // %
                'position_x': rect_width+15,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_3.png',
                'height':     '650',
                'position_x': rect_width*2+30,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/a_4.png',
                'height':     '160',
                'position_x': rect_width*3+45,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_5.png',
                'height':     '350',
                'position_x': rect_width*3+45,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_6.png',
                'height':     '650',
                'position_x': rect_width*4+60,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_7.png',
                'height':     '160',
                'position_x': rect_width*5+75,
                'position_y': 363,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_8.png',
                'height':     '350',
                'position_x': rect_width*5+75,
                'position_y': 535,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']
    var img_url_5 = images_data['elements_data'][5]['img_url']
    var img_url_6 = images_data['elements_data'][6]['img_url']
    var img_url_7 = images_data['elements_data'][7]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']
    var height_6 = images_data['elements_data'][6]['height']
    var height_7 = images_data['elements_data'][7]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];
    var position_x_6 = images_data['elements_data'][6]['position_x'];
    var position_x_7 = images_data['elements_data'][7]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];
    var position_y_6 = images_data['elements_data'][6]['position_y'];
    var position_y_7 = images_data['elements_data'][7]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y})

        console.log("------------========================")
        console.log(image__gr_arr)

        var image_gr     = image__gr_arr[0]
        var image_rect   = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
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
                     about_create__image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
    var image_gr_2 = about_create__image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
    var image_gr_4 = about_create__image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    var image_gr_6 = about_create__image(images_gr, img_url_6, rect_width, height_6, position_x_6, position_y_6, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_7, rect_width, height_7, position_x_7, position_y_7, view_box_x, view_box_y)

    // A__RECT 
    var rect_height = (screen_width_in_px/2)/5.7;
    var rects_gr = images_gr.nested()

    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_2.x()
    var a_rect_y      = image_gr_2.y()
    var a_rect_width  = image_gr_2.width()

    var a_rect = a_rect_gr.rect(a_rect_width,rect_height)
    a_rect.attr({
            fill: "#f18b0fff",
            x: a_rect_x,
            y: a_rect_y-rect_height
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_width  = image_gr_4.width()
    var b_rect_x      = image_gr_4.x()
    var b_rect_y      = image_gr_4.y()

    var b_rect = b_rect_gr.rect(b_rect_width,rect_height)
    b_rect.attr({
            fill: "#f18b0fff",
            x: b_rect_x,
            y: b_rect_y-rect_height
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_6.width()
    var c_rect_x      = image_gr_6.x()
    var c_rect_y      = image_gr_6.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,rect_height)
        .attr({
            fill: "#f18b0fff",
            x: c_rect_x,
            y: c_rect_y-rect_height-13
        })
}

function about__headline___info(parent_gr, screen_width_in_px, screen_height){
    var headline_gr = parent_gr.nested()

    var yellow_rect = headline_gr.rect(screen_width_in_px/2-350,100)
        .fill('#f18b0fff')
    yellow_rect.attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':     screen_height/4-yellow_rect.bbox().height/2
    })
 
    var about_title = headline_gr.text(function(text_element){
         text_element.tspan('ABOUT')
     })
         .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#d8d8d8ff',
             family:  'Quicksand',
             size:    56
         })    
     about_title.attr({
         x: yellow_rect.bbox().x+yellow_rect.bbox().width-45,
         y: yellow_rect.bbox().y+about_title.bbox().height
     })
     about_title.rotate(90)
 
     var me_title = headline_gr.text(function(text_element){
            text_element.tspan('me')
        })
        .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#d8d8d8ff',
             family:  'Quicksand',
             size:    360
        })    
     me_title.attr({
         x: yellow_rect.bbox().x+yellow_rect.bbox().width+about_title.bbox().height+5,
         y: yellow_rect.bbox().y+yellow_rect.bbox().height+about_title.bbox().height-25
     })
}

function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
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

function about_intro__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var light__url    = "./../portfolio-app-media/media/light.jpg"
    
    about_create__image(images_gr, light__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph__a = images_gr.text(function(add){
            add.tspan('My  name is Nevena. I am Junior').dx('50')
            add.tspan('UI | UX web designer & developer').fill('#2a3d35ef').font('size','42').dx('-20').newLine()
            add.tspan('currently based in Belgrade, Serbia.').dx('0').newLine()
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#ebf2edff',
            family:  'Quicksand',
            size:    36
        })    
    paragraph__a.attr({
        id: 'paragraph__a',
        x: 240,
        y: screen_height/2-paragraph__a.bbox().height/2
    }) 

}

function history__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var bist__url     = "./../portfolio-app-media/media/bist.png"

    about_create__image(images_gr, bist__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph_gr = images_gr.nested()
    var paragraph__b = paragraph_gr.text(function(add){
        add.tspan('After graduating as a sculptor on Faculty').newLine()
        add.tspan('of Fine Arts I`ve developed passion').newLine() 
        add.tspan('for creating through digital media.').newLine()
        add.tspan('I`ve spent the last 4 years exploring').newLine()
        add.tspan('programming languages ').fill('#b4bebbff').newLine()//.font('size','36')
        add.tspan('& wide palette')
        add.tspan('of different design genres.').newLine()
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#cc7c1bff',
        family:  'Quicksand',
        size:    32
    })    
    paragraph_gr.attr({
        x: screen_width_in_px/2,
        y: screen_height/2-paragraph__b.bbox().height/2
    })
    paragraph__b.attr({
        id: 'paragraph__b',
        x: 0,
        y: 0
    }) 
    
}

function process__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var stickers__url = "./../portfolio-app-media/media/stickeers.jpg"

    about_create__image(images_gr, stickers__url, rect_width, rect_height, 0, rect_height/2, 0.6, 0, 0)

    var paragraph__c = images_gr.text(function(add){
        add.tspan('I find my passion in creating and coding').newLine() 
        add.tspan('visualy appealing, responsive websites with').newLine()
        add.tspan('focus on friendly, emotive, aesthetically').newLine()
        add.tspan('pleasing, clear, on-brand and usable').newLine()
        add.tspan('interfaces.').newLine()

    }) 
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#ebf2edff',
        family:  'Quicksand',
        size:    36
    })    
    paragraph__c.attr({
        id: 'paragraph__c',
        x: 240,
        y: screen_height/2-paragraph__c.bbox().height/2
    }) 

}

function about_video__info(parent_gr, screen_width_in_px, screen_height){

    var video_gr   = parent_gr.nested()

    var video_global_height = 800
    var video_gr_y = screen_height/2-400;
    video_gr.attr({
        y: video_gr_y
    })


    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y

    $("#about #video__info").append(`
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar3.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#about #video__info").find("#video__container").css({
        opacity: 0.4
    });

    $("#about #video__info").find("#video__a").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__b").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__c").css({
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
