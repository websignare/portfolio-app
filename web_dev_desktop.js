$(document).ready(function(){
    main();
})

function main() {
    $("body").append(`
        <div id="wrapper">
        </div>
        <div id="headline__info">
        </div>
        <div id="technologies">
        </div>
        <div id="headline_animation_info">
        </div>
        <div id="animations">
        </div>
        <div id="video__info">
        </div>
    `);

    function create_responsive() {

        var screen_width_in_px  = window.innerWidth;
        var screen_height       = window.innerHeight;

        //-------STYLE-------
        $("#wrapper").css({                    
            "background-color": '#f5f0e1',
            "position":         "relative",
            "height":           screen_height,
            "width":            screen_width_in_px
        }); 


        $("#headline__info").css({                    
            "background-color": '#f8f1f1',
            "position":         "relative",
            "height":           screen_height/2,
            "width":            screen_width_in_px
        }); 

        $("#technologies").css({                    
            "background-color": '#f8f1f1',
            "position":         "relative",
            "width":            screen_width_in_px
        });
        

        $("#headline_animation_info").css({                    
            "background-color": '#060126',
            "position":         "relative",
            "height":           screen_height/2,
            "width":            screen_width_in_px
        }); 

        $("#animations").css({                    
            "background-color": '#fff',
            "position":         "relative",
            "width":            screen_width_in_px
        });

        $("#video__info").css({                    
            "background-color": '#060126',
            "position":         "relative",
            "height":           screen_height,
            "width":            screen_width_in_px
        }); 

        var container       = SVG().addTo("#wrapper").size(screen_width_in_px, screen_height)
        var container_gr    = container.nested()   

        var headline_container     = SVG().addTo("#headline__info").size(screen_width_in_px, screen_height/2)
        var headline__container_gr = headline_container.nested()

        var technologies_canvas    = SVG().addTo("#technologies").size(screen_width_in_px, 1800)
        var technologies_canvas_gr = technologies_canvas.nested()

        var headline_animation__container    = SVG().addTo("#headline_animation_info").size(screen_width_in_px, screen_height/2)
        var headline_animation__container_gr = headline_animation__container.nested()

        var animations_canvas     = SVG().addTo("#animations").size(screen_width_in_px, 3000)
        var animations_canvas_gr = animations_canvas.nested()

        var video_canvas    = SVG().addTo("#video__info").size(screen_width_in_px, screen_height)
        var video_canvas_gr = video_canvas.nested()

        var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
        console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

        if (screen_physical_width_cm < 20.5) {
            // MOBILE
            //intro(container_gr, screen_width_in_px, screen_height)
            nevena(container_gr, screen_width_in_px, screen_height)
            //web_design(container_gr, screen_width_in_px, screen_height)
            //web_development(container_gr, screen_width_in_px, screen_height)
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
            var layout_gr = create_background__desktop(container_gr, screen_width_in_px, screen_height)
            var background_gr = layout_gr.find("#background_gr")
            images__desktop(background_gr, screen_width_in_px, screen_height)

            quote_and_scroll__desktop(container_gr, screen_width_in_px, screen_height)

            headline__info(headline__container_gr, screen_width_in_px, screen_height)
            technologies(technologies_canvas_gr, screen_width_in_px, 1800)
            headline_animation_info(headline_animation__container_gr, screen_width_in_px, screen_height)
            animations(animations_canvas_gr, screen_width_in_px, 3000)
            video(video_canvas_gr, screen_width_in_px, screen_height)

            create_contact_section(screen_width_in_px, screen_height)
            //var white_background_gr = layout_gr.find("#white_background_gr")
            //section_images__desktop(white_background_gr)
            //buttons(container_gr, screen_height, screen_width_in_px)
            //create_contact_section(contact_gr, screen_width_in_px)
        }
    }

    create_responsive();

    $(window).resize(function() {
        $("#wrapper svg").remove();
        $("#headline__info").remove();
        $("#technologies").remove();
        $("#video__info").remove();
        $("#contact_wrapper").remove();
        //container_gr.remove(); // IMPORTANT!! - remove everything previously drawnscreen_width_in_px, screen_height
        //container_gr = container.nested();


        //$('#wrapper').attr('height', $(window).height());
        //$('#wrapper').attr('width', $(window).width());
        //create_background__desktop(container_gr, screen_width_in_px, screen_height)
        // create_text__desktop(container_gr, screen_width_in_px, screen_height)
        // section_images__desktop(container_gr)

        create_responsive();
    });
}
//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function create_background__desktop(parent_gr, screen_width_in_px, screen_height){

    var layout_gr = parent_gr.nested()

    var background_gr = layout_gr.nested()
        .attr({
            id: "background_gr",
        })

    var background_color = background_gr.rect(screen_width_in_px,screen_height)
        .fill('#759aa292')
        .attr({
            id:      "background_color",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })

    //CALL MENU FUNCTION
    var menu_rect = parent_gr.rect(50,50)
    .attr({
        fill: '#ff6e40',
        x: 100,
        y: 100
    })

    var menu_rect_clicked = false;

    menu_rect.click(function() {
        
        // ACTIVATE BOX_1
        if (menu_rect_clicked == false) {
            
            // ANIMATE
            console.log(create_menu)
            create_menu(parent_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_menu(parent_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = false;
        }
    })

    return layout_gr

}

//----------------------------------------------TEXT----------------------------------------------------------------
function quote_and_scroll__desktop(parent_gr, screen_width_in_px, screen_height){
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
            fill:    '#1e3d59',
            family:  'Quicksand',
            size:    56
        })    
    web_title.attr({
        x: 0,                 //set web_title.x relative to image width
        y: screen_height/3
    })
    web_title.rotate(-90)

    var dev_title = text_gr.text(function(text_element){
        text_element.tspan('development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#1e3d59',
            family:  'Quicksand',
            size:    90
        })    
    dev_title.attr({
        x: web_title.bbox().x+90,
        y: web_title.bbox().y+dev_title.bbox().height/2
    })

    //-----------------QUOTES------------------------

    var paragraph = text_gr.text(function(add){
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
            fill:    '#1e3d59',
            family:  'Quicksand',
            size:    28
        })    
    paragraph.attr({
        x: (screen_width_in_px/2)/8,
        y: screen_height/2
    })  

    var quotes_up = text_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#1e3d59',
            family:  'Quicksand',
            size:    70
        })    
    quotes_up.attr({
        x: web_title.bbox().x+quotes_up.bbox().width,
        y: paragraph.bbox().y+40
    })

    var quotes_down = text_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#1e3d59',
            family:  'Quicksand',
            size:    70
        })    
    quotes_down.attr({
        x: paragraph.bbox().x+paragraph.bbox().width+10,
        y: screen_height/2+80
    })

    var scroll_text = text_gr.text(function(text_element){
        text_element.tspan('Scroll through my work')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#ff6e40',
            family:  'Quicksand',
            size:    18
        })    
    scroll_text.attr({
        x: paragraph.bbox().width/2+scroll_text.bbox().width,
        y: paragraph.bbox().y+paragraph.bbox().height+170
    })

    var scroll_arrow_gr = text_gr.nested()
    var scroll_arrow = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-29.1042,-45.5041)">
    <g
        inkscape:label="#g2680"
        style="fill:none;fill-opacity:1.5;stroke:#ff6e40;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        transform="translate(1726.3821,-1064.1634)"
        id="arrow">
        <path
            style="fill:none;fill-opacity:1.5;stroke:#ff6e40;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -1693.5926,1109.6675 v 28.7261"
            id="path2674-9"
            inkscape:connector-curvature="0" />
        <path
            style="fill:#ff6e40;fill-opacity:1;stroke:none;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -1697.2779,1138.4881 h 7.5595 l -3.9687,3.9688 z"
            id="path2676-6"
            inkscape:connector-curvature="0" />
    </g>
    </g>`)

    scroll_arrow.attr({id: 'scroll_arrow'})
    scroll_arrow_gr.attr({
        id:     'scroll_arrow_gr',
        width:  scroll_arrow.bbox().width,
        height: scroll_arrow.bbox().height,
        x:      275,
        y:      325
    })    
    scroll_arrow_gr.scale(2.5)
    scroll_arrow.addTo(scroll_arrow_gr)

}
//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function images__desktop(parent_gr, screen_width_in_px, screen_height){

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
                'img_url':   './media/111.png',
                'width':     rect_width/2.25, // %
                'position_x': screen_width_in_px/2-rect_width/2,
                'position_y': 45,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/112.png',
                'width':     rect_width/2.1,
                'position_x': screen_width_in_px/2-rect_width/1.75,
                'position_y': rect_height+60,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './media/113.png',
                'width':     rect_width/1.8,
                'position_x': screen_width_in_px/2-rect_width/1.45,
                'position_y': rect_height*2+75,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/114.png',
                'width':     rect_width/1.23,
                'position_x': screen_width_in_px/2-rect_width/1.1,
                'position_y': rect_height*3+100,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/115.png',
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
        
        // A__RECT 
        var a_rect_gr = rects_gr.nested()

        var a_rect_width  = image_gr_0.width()
        var a_rect_height = image_gr_0.height()
        var a_rect_x      = image_gr_0.x()
        var a_rect_y      = image_gr_0.y()    
    
        var a_rect = a_rect_gr.rect(rect_width,a_rect_height)
        a_rect.attr({
                fill: "#ffc13b",
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
                fill: "#ffc13b",
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
                fill: "#ffc13b",
                x: c_rect_x+c_rect_width,
                y: c_rect_y
            })

}

//-------------------------HEADLINE-INFO----------------------------------//
function headline__info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var yellow_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#ff6f3c')
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
             fill:    '#155263',
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
             fill:    '#155263',
             family:  'Quicksand',
             size:    135
         })    
    work_title.attr({
        x: yellow_rect.bbox().x+yellow_rect.bbox().width+my_title.bbox().height+25,
        y: yellow_rect.bbox().y+yellow_rect.bbox().height-10
    })
}

//-------------------------HEADLINE-ANIMATION-INFO----------------------------------//
function headline_animation_info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
    var yellow_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#155263')
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
             fill:    '#467f8cff',
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
             fill:    '#467f8cff',
             family:  'Quicksand',
             size:    135
         })    
    work_title.attr({
        x: yellow_rect.bbox().x+yellow_rect.bbox().width+my_title.bbox().height+25,
        y: yellow_rect.bbox().y+yellow_rect.bbox().height-25
    })
}

function video(parent_gr, screen_width_in_px, screen_height){

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
                    <source src='./media/dev_video_kadar1.mp4' type='video/mp4'>
                </video>
                <video width="320" height="240" id='video__b' autoplay loop muted>
                    <source src='./media/dev_video_kadar2.mp4' type='video/mp4'>
                </video>
                <video width="320" height="240" id='video__c' autoplay loop muted>
                    <source src='./media/dev_video_kadar3.mp4' type='video/mp4'>
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
