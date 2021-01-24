$(document).ready(function(){
    about_tablet__main();
})

function about_tablet__main(screen_width_in_px) {
    var bar_gr = nav_bar__create(screen_width_in_px);

    about_tablet__activate(bar_gr);

    $(window).resize(function() {
        
        about_tablet__deactivate();

        about_tablet__activate(bar_gr);
    });
}

// ACTIVATE
function about_tablet__activate(bar_gr) {

    /*document.title = "about"
    window.history.pushState({page: "about"},"", "#about_tablet");*/

    $("body").append(`

        <div id="about_tablet">
            <div id="wrapper">
            </div>
            <div id="headline__info">
            </div>
            <div id="intro__info">
            </div>
            <div id="history_tablet__info">
            </div>
            <div id="process_tablet__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    about__tablet_create_responsive(bar_gr);
    //current_page = "about";

}

// DEACTIVATE
function about_tablet__deactivate() {

    $("#about_tablet").remove();
    $("#contact_wrapper").remove();
    
    /* REMOVE/CLEANUP TRIGGERS (for this page)
    remove_triggers("headline_canvas__trigger")
    remove_triggers("intro_canvas__trigger")
    remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/
}

function about__tablet_create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    $("#about_tablet #wrapper").css({                    
        "background-color": '#d8d8d8ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 


    $("#about_tablet #headline__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height/2.5,
        "width":            screen_width_in_px,
        
    }); 


    console.log("dddddddddddddddddddddddddddddddddddddddddd")
    console.log("dddddddddddddddddddddddddddddddddddddddddd")
    console.log("dddddddddddddddddddddddddddddddddddddddddd")
   // var bounding_rect          = $("#about_tablet #headline__info").get(0).getBoundingClientRect()
   // var headline__div_bottom_y = bounding_rect.bottom;
    //console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#about_tablet #intro__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //var intro__bounding_rect = $("#about_tablet #intro__info").get(0).getBoundingClientRect()
    //var intro__div_bottom_y  = intro__bounding_rect.bottom;

    $("#about_tablet #history_tablet__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    $("#about_tablet #process_tablet__info").css({                    
        "background-color": '#4c4c48ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    $("#about_tablet #video__info").css({                    
        "background-color": '#262626ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //----------SVG_CANVASES-----------//
    var main_canvas__tablet     = SVG().addTo("#about_tablet #wrapper").size(screen_width_in_px, screen_height)
    var main_canvas_tablet__gr = main_canvas__tablet.nested()   

    var headline_canvas     = SVG().addTo("#about_tablet #headline__info").size(screen_width_in_px, screen_height/2)
    var headline_canvas__gr = headline_canvas.nested()   
    headline_canvas__gr.attr({opacity: 1.0})

    var intro_canvas     = SVG().addTo("#about_tablet #intro__info").size(screen_width_in_px, screen_height)
    var intro_canvas__gr = intro_canvas.nested()   
    intro_canvas__gr.attr({opacity: 1.0})

    var history_canvas     = SVG().addTo("#about_tablet #history_tablet__info").size(screen_width_in_px, screen_height)
    var history_canvas__gr = history_canvas.nested()   

    var process_canvas     = SVG().addTo("#about_tablet #process_tablet__info").size(screen_width_in_px, screen_height)
    var process_canvas__gr = process_canvas.nested()   

    var video_canvas     = SVG().addTo("#about_tablet #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 22.5) {
        // MOBILE
        //intro(main_canvas_tablet__gr, screen_width_in_px, screen_height)
        //nevena(main_canvas_tablet__gr, screen_width_in_px, screen_height)
        //web_design(main_canvas_tablet__gr, screen_width_in_px, screen_height)
        //web_development(main_canvas_tablet__gr, screen_width_in_px, screen_height)
        //animation(main_canvas_tablet__gr, screen_width_in_px, screen_height)
        //contact(main_canvas_tablet__gr, screen_width_in_px, screen_height)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        var about_tablet__layout_gr     = about__create_background__tablet(main_canvas_tablet__gr, bar_gr, screen_width_in_px, screen_height)
        var about_background_tablet__gr = about_tablet__layout_gr.find("#about_background_tablet__gr")
        

        console.log("***********")
        console.log(about_background_tablet__gr)

        about__images__tablet(about_background_tablet__gr, screen_width_in_px, screen_height)

        about__headline_tablet__info(headline_canvas__gr, screen_width_in_px, screen_height)
        about_intro_tablet__info(intro_canvas__gr, screen_width_in_px, screen_height)
        history_tablet__info(history_canvas__gr, screen_width_in_px, screen_height)
        process_tablet__info(process_canvas__gr, screen_width_in_px, screen_height)
        about_video_tablet__info(video_canvas__gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px,screen_height)

    }

    else {


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
function about__create_background__tablet(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var about_tablet__layout_gr = parent_gr.nested().attr({id: 'about_tablet__layout_gr'})

    var about_background_tablet__gr = about_tablet__layout_gr.nested()
        .attr({
            id: "about_background_tablet__gr",
        })

    var background_rect = about_background_tablet__gr.rect(screen_width_in_px,screen_height)
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

    return about_tablet__layout_gr;

}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function about__images__tablet(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+150,
        height: screen_height,
        x: screen_width_in_px/3-32
    })

    var rect_width = (screen_width_in_px/2)/4.5;
    var images_data = {
        'title': 'images',

        'elements_data':[

            {
                'img_url':   './../portfolio-app-media/media/aa1.png',
                'height':     '350', // %
                'position_x': rect_width+15,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/aa2.png',
                'height':     '650',
                'position_x': rect_width*2+30,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/aa3.png',
                'height':     '155',
                'position_x': rect_width*3+45,
                'position_y': 235,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/aa4.png',
                'height':     '350',
                'position_x': rect_width*3+45,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/aa5.png',
                'height':     '155',
                'position_x': rect_width*4.52,
                'position_y': 235,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/aa6.png',
                'height':     '350',
                'position_x': rect_width*4.52,
                'position_y': 525,
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

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    function about_create_tablet__image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
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
                     about_create_tablet__image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
    var image_gr_1 = about_create_tablet__image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
    var image_gr_3 = about_create_tablet__image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
                     about_create_tablet__image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
    var image_gr_5 = about_create_tablet__image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
                     about_create_tablet__image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    //var image_gr_5 = about_create_tablet__image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)

    // A__RECT 
    var rect_height = (screen_width_in_px/2)/4.5;
    var rects_gr = images_gr.nested()

    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_1.x()
    var a_rect_y      = image_gr_1.y()
    var a_rect_width  = image_gr_1.width()

    var a_rect = a_rect_gr.rect(a_rect_width,rect_height)
    a_rect.attr({
            fill: "#f18b0fff",
            x: a_rect_x,
            y: a_rect_y-rect_height
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_width  = image_gr_3.width()
    var b_rect_x      = image_gr_3.x()
    var b_rect_y      = image_gr_3.y()

    var b_rect = b_rect_gr.rect(b_rect_width,rect_height)
    b_rect.attr({
            fill: "#f18b0fff",
            x: b_rect_x,
            y: b_rect_y+image_gr_3.height()
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_5.width()
    var c_rect_x      = image_gr_5.x()
    var c_rect_y      = image_gr_5.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,rect_height)
        .attr({
            fill: "#f18b0fff",
            x: c_rect_x,
            y: c_rect_y+image_gr_5.height()
        })

    /////////////////////////////////////////////////////////////////////
    var text_gr = parent_gr.nested()

    //-----------------QUOTES------------------------

    var paragraph = text_gr.text(function(add){
        add.tspan('Imagination is the beginning of creation.').newLine()
        add.tspan('').newLine()
        add.tspan('You imagine what you desire,').newLine()
        add.tspan('you will what you imagine,').newLine()
        add.tspan('and at last, ').newLine() 
        add.tspan('you create what you will.').newLine()
        add.tspan('').newLine() 
        add.tspan('- George Bernand Shaw').newLine().dx(180).font({size:'18'})
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#6b1427ff',
            family:  'Quicksand',
            size:    20
        })    
    paragraph.attr({
        x: 50,
        y: 0
    })  



    /*var scroll_text = scroll_gr.text(function(text_element){
        text_element.tspan('Scroll & read a little about me')
    })
        .font({
            id: "#scroll_text",
            opacity: 1.0,
            weight:  500,
            fill:    '#6b1427ff',
            family:  'Quicksand',
            size:    16
        })   
    scroll_text.attr({
        x: 0,
        y: 60
    }) */
    var scroll_gr = text_gr.nested()

    scroll_gr.attr({
        id: "#scroll_gr",
    })

    var arrow_gr = scroll_gr.nested()
    var scroll_arrow = arrow_gr.path('m 53.347282,72.845957 3.5908,3.9688 3.9687,-3.9688 z m 3.7797,-28.829789 c 0,9.613609 0,19.227511 0,28.841609')
    scroll_arrow.stroke({ color: '#6b1427ff', width: 4, linecap: 'round', linejoin: 'round' })

    arrow_gr.attr({
        id:     'scroll_arrow',
        x:      50,
        y:      85
    }) 
    arrow_gr.scale(3.5)

    text_gr.attr({
        x: 50,
        y: screen_height/2.1,
        id: "text_gr",
        height: screen_height/2,
        width: screen_width_in_px/2
    })
}

function about__headline_tablet__info(parent_gr, screen_width_in_px, screen_height){
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

function about_create_tablet__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
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

function about_intro_tablet__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var light__url    = "./../portfolio-app-media/media/light.jpg"
    
    about_create_tablet__image(images_gr, light__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph__a = images_gr.text(function(add){
            add.tspan('My  name is Nevena. I am Junior').dx('50')
            add.tspan('UI | UX web designer & developer').fill('#2a3d35ef').font('size','38').dx('-20').newLine()
            add.tspan('currently based in Belgrade, Serbia.').dx('0').newLine()
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#ebf2edff',
            family:  'Quicksand',
            size:    32
        })    
    paragraph__a.attr({
        id: 'paragraph__a',
        x: screen_width_in_px/2-paragraph__a.bbox().width/2,
        y: screen_height/2-paragraph__a.bbox().height/2
    }) 

}

function history_tablet__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var bist__url     = "./../portfolio-app-media/media/bist.png"

    about_create_tablet__image(images_gr, bist__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

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
        fill:    '#fff',
        family:  'Quicksand',
        size:    26
    })    
    paragraph_gr.attr({
        x: screen_width_in_px-paragraph_gr.bbox().width-20,
        y: screen_height/2-paragraph__b.bbox().height/2
    })
    paragraph__b.attr({
        id: 'paragraph__b',
        x: 0,
        y: 0
    }) 
    
}

function process_tablet__info(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var stickers__url = "./../portfolio-app-media/media/stickeers.jpg"

    about_create_tablet__image(images_gr, stickers__url, rect_width, rect_height, 0, rect_height/2, 0.6, 0, 0)

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
        size:    30
    })    
    paragraph__c.attr({
        id: 'paragraph__c',
        x: screen_width_in_px/2-paragraph__c.bbox().width/2,
        y: screen_height/2-paragraph__c.bbox().height/2
    }) 

}

function about_video_tablet__info(parent_gr, screen_width_in_px, screen_height){

    var video_gr   = parent_gr.nested()

    var video_global_height = 800
    var video_gr_y = screen_height/2-400;
    video_gr.attr({
        y: video_gr_y
    })


    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y

    $("#about_tablet #video__info").append(`
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

    $("#about_tablet #video__info").find("#video__container").css({
        opacity: 0.4
    });

    $("#about_tablet #video__info").find("#video__a").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about_tablet #video__info").find("#video__b").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about_tablet #video__info").find("#video__c").css({
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
