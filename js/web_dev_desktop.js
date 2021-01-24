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
            <div id="technologies">
            </div>

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
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_development #web_development__headline_animation_info").css({                    
        "background-color": '#812f3eff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_development #web_development__animations").css({                    
        "background-color": '#812f3eff',
        "position":         "relative",
        "width":            screen_width_in_px
    });

    $("#web_development #web_development__headline__info").css({                    
        "background-color": '#4f7779ff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_development #technologies").css({                    
        "background-color": '#4f7779ff',
        "position":         "relative",
        "width":            screen_width_in_px
    });

    $("#web_development #video__info").css({                    
        "background-color": '#012a31ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var container       = SVG().addTo("#web_development #wrapper").size(screen_width_in_px, screen_height)
    var container_gr    = container.nested()   

    var headline_animation__container    = SVG().addTo("#web_development #web_development__headline_animation_info").size(screen_width_in_px, screen_height/2)
    var headline_animation__container_gr = headline_animation__container.nested()

    var web_development__animations_canvas    = SVG().addTo("#web_development #web_development__animations").size(screen_width_in_px, 3000)
    var web_development__animations_canvas_gr = web_development__animations_canvas.nested()

    var headline_container     = SVG().addTo("#web_development #web_development__headline__info").size(screen_width_in_px, screen_height/2)
    var headline__container_gr = headline_container.nested()

    var technologies_canvas    = SVG().addTo("#web_development #technologies").size(screen_width_in_px, 3000)
    var technologies_canvas_gr = technologies_canvas.nested()

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
        var web_development__layout_gr = web_development__create_background__desktop(container_gr, bar_gr, screen_width_in_px, screen_height)
        var web_development__background_gr = web_development__layout_gr.find("#web_development__background_gr")
        web_development__images__desktop(web_development__background_gr, screen_width_in_px, screen_height)

        web_development__quote_and_scroll__desktop(container_gr, screen_width_in_px, screen_height)

        web_development__headline_animation_info(headline_animation__container_gr, screen_width_in_px, screen_height)
        animations(web_development__animations_canvas_gr, screen_width_in_px, 3000, screen_height)
        web_development__headline__info(headline__container_gr, screen_width_in_px, screen_height)
        //technologies(technologies_canvas_gr, screen_width_in_px, 1800)
        technology_components(screen_width_in_px, 3000, screen_height)
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#812f3eff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#812f3eff', linecap: 'round' })

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

//----------------------------------------------TEXT----------------------------------------------------------------
function web_development__quote_and_scroll__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2,
        x: screen_width_in_px/2
    })

    var web_title = text_gr.text(function(text_element){
        text_element.tspan('web')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#812f3eff',
            family:  'Quicksand',
            size:    56
        })    
    web_title.attr({
        x: 0,                 //set web_title.x relative to image width
        y: screen_height/3+25
    })
    web_title.rotate(-90)

    var dev_title = text_gr.text(function(text_element){
        text_element.tspan('development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#812f3eff',
            family:  'Quicksand',
            size:    90
        })    
    dev_title.attr({
        x: web_title.bbox().x+90,
        y: web_title.bbox().y+dev_title.bbox().height/2
    })

    //-----------------QUOTES------------------------

    var paragraph_gr = text_gr.nested()
    var paragraph = paragraph_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
        add.tspan('weight.').newLine()
        add.tspan('').newLine()
        add.tspan('-Bill Gates').newLine().dx(445).font({size:'22'})
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#4f7779ff',
            family:  'Quicksand',
            size:    26
        })    
    paragraph_gr.attr({
        x: (screen_width_in_px/2)/8,
        y: screen_height/2
    })  

    var quotes_up = text_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            id:      "quotes_up",
            fill:    '#4f7779ff',
            family:  'Quicksand',
            size:    70
        })    
    quotes_up.attr({
        x: 50,
        y: screen_height/2+40
    })

    var quotes_down = paragraph_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            id:      "quotes_down",
            fill:    '#4f7779ff',
            family:  'Quicksand',
            size:    70
        })    
    quotes_down.attr({
        x: paragraph.bbox().x+paragraph.bbox().width,
        y: paragraph.bbox().y+50
    })

    var scroll_text = text_gr.text(function(text_element){
        text_element.tspan('Scroll through my work')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#4f7779ff',
            family:  'Quicksand',
            size:    18
        })    
    scroll_text.attr({
        x: paragraph.bbox().width/2+scroll_text.bbox().width,
        y: screen_height-150
    })

    var arrow_gr = text_gr.nested()
    var scroll_arrow = arrow_gr.path('m 53.347282,72.845957 3.5908,3.9688 3.9687,-3.9688 z m 3.7797,-28.829789 c 0,9.613609 0,19.227511 0,28.841609')
    scroll_arrow.stroke({ color: '#f06', width: 4, linecap: 'round', linejoin: 'round' })

    arrow_gr.attr({
            id:     'scroll_arrow',
            x: screen_width_in_px/3,
            y: screen_height/2
        }) 
    arrow_gr.scale(2)

}
//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function web_development__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2,
        height: screen_height,
        x: (screen_width_in_px/2)/18
    })

    var rect_height = screen_height/6;
    var rect_width  = screen_width_in_px/2
    var images_data = {
        'title': 'images',

        'elements_data':[
            /*{
                'img_url':   './media/001.png',
                'width':     '340',
                'position_x': 250,
                'position_y': 150,
                'view_box_x': '0',
                'view_box_y': '0'
            },*/
            {
                'img_url':   './../portfolio-app-media/media/dd_1.png',
                'width':     rect_width/2.25, // %
                'position_x': screen_width_in_px/2-rect_width/2,
                'position_y': 45,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_2.png',
                'width':     rect_width/2.1,
                'position_x': screen_width_in_px/2-rect_width/1.75,
                'position_y': rect_height+60,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/d_3.png',
                'width':     rect_width/1.8,
                'position_x': screen_width_in_px/2-rect_width/1.45,
                'position_y': rect_height*2+75,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_4.png',
                'width':     rect_width/1.23,
                'position_x': screen_width_in_px/2-rect_width/1.1,
                'position_y': rect_height*3+100,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/d_5.png',
                'width':     rect_width/2.25,
                'position_x': screen_width_in_px/2-rect_width/1.49,
                'position_y': rect_height*4+115,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            /*{
                'img_url':   './media/6.png',
                'width':     '320',
                'position_x': 0,
                'position_y': 595,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/7.png',
                'width':     '500',
                'position_x': 0,
                'position_y': 50,
                'view_box_x': '0',
                'view_box_y': '0'
            }*/

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
    
        var a_rect = a_rect_gr.rect(rect_width,a_rect_height)
        a_rect.attr({
                fill: colors_map["web_development"]["main_color"],
                x: a_rect_x-rect_width,
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
                fill: colors_map["web_development"]["main_color"],
                x: b_rect_x-rect_width,
                y: b_rect_y
            })
    
        // C__RECT 
        var c_rect_gr = rects_gr.nested()

        var c_rect_width  = image_gr_2.width()
        var c_rect_height = image_gr_2.height()
        var c_rect_x      = image_gr_2.x()
        var c_rect_y      = image_gr_2.y()
     
        var c_rect = c_rect_gr.rect(rect_width,c_rect_height)
            .attr({
                fill: colors_map["web_development"]["main_color"],
                x: c_rect_x+c_rect_width,
                y: c_rect_y
            })

}

//-------------------------HEADLINE-ANIMATION-INFO----------------------------------//
function web_development__headline_animation_info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var yellow_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#4f7779ff')
    .attr({
        id:      "yellow_rect",
        opacity: 1.0,
        'x':     0,
        'y':     screen_height/4
    })
 
    var my_title = headline_gr.text(function(text_element){
         text_element.tspan('art')
     })
         .font({
             opacity: 1.0,
             weight:  700,
             fill:    '#d9d9d9ff',
             family:  'Quicksand',
             size:    70
         })    
    my_title.attr({
        x: yellow_rect.bbox().x+yellow_rect.bbox().width,
        y: yellow_rect.bbox().y+my_title.bbox().height-10
    })
     my_title.rotate(-90)
 
     var work_title = headline_gr.text(function(text_element){
         text_element.tspan('procedural')
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
        y: yellow_rect.bbox().y+yellow_rect.bbox().height-25
    })
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
