/*$(document).ready(function(){
    main();
})*/

function web_design__main() {
    web_design__activate(bar_gr);
    
    $(window).resize(function() {
        
        web_design__deactivate();

        web_design__activate(bar_gr);
    });
}

// ACTIVATE
function web_design__activate(bar_gr) {
    document.title = "web design"
    window.history.pushState({page: "web_design"},"", "#web_design");

    $("body").append(`
        <div id="web_design">
            <div id="wrapper">
            </div>
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

    web_design_create_responsive(bar_gr);
    current_page = "web_design";

}

// DEACTIVATE
function web_design__deactivate() {

    $("#web_design").remove();
    $("#contact_wrapper").remove();

    /*remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/

}
    
function web_design_create_responsive(bar_gr) {

    var screen_width_in_px  = window.innerWidth;
    var screen_height = window.innerHeight;

    $("#web_design #wrapper").css({                    
        "background-color": '#ffd097c3',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design #headline__info").css({                    
        "background-color": '#4d849079',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px
    }); 

    $("#web_design #artist_portfolio__info").css({                    
        "background-color": '#4d849079',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design #suprematism__info").css({                    
        "background-color": '#4d849079',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#deep_blue__info").css({                    
        "background-color": '#4d849079',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#web_design #video__info").css({                    
        "background-color": '#4d849079',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    //----------SVG_CANVASES-----------//
    var container                      = SVG().addTo("#web_design #wrapper").size(screen_width_in_px, screen_height)
    var container_gr                   = container.nested()   

    var headline_container             = SVG().addTo("#web_design #headline__info").size(screen_width_in_px, screen_height/2)
    var headline__container_gr         = headline_container.nested()

    var artist_portfolio__container    = SVG().addTo("#web_design #artist_portfolio__info").size(screen_width_in_px, screen_height)
    var artist_portfolio__container_gr = artist_portfolio__container.nested()   
  
    var suprematism__container         = SVG().addTo("#web_design #suprematism__info").size(screen_width_in_px, screen_height)
    var suprematism__container_gr      = suprematism__container.nested()   
   
    var deep_blue__container           = SVG().addTo("#web_design #deep_blue__info").size(screen_width_in_px, screen_height)
    var deep_blue__container_gr        = deep_blue__container.nested()  
    
    var video__container               = SVG().addTo("#web_design #video__info").size(screen_width_in_px, screen_height)
    var video__container_gr            = video__container.nested()  

    //------------------DEVICES--------------------------//
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
        var web_design__layout_gr = web_design__intro_section__desktop(container_gr, bar_gr, screen_width_in_px, screen_height)
        var web_design__background_gr = web_design__layout_gr.find("#web_design__background_gr")
        web_design__images__desktop(web_design__background_gr, screen_width_in_px, screen_height)

        web_design__quote_and_scroll___desktop(container_gr, screen_width_in_px, screen_height)

        web_design__headline__info(headline__container_gr, screen_width_in_px, screen_height)
        artist_portfolio(artist_portfolio__container_gr, screen_width_in_px, screen_height)
        suprematism(suprematism__container_gr, screen_width_in_px, screen_height)
        deep_blue(deep_blue__container_gr, screen_width_in_px, screen_height)
        video__section(video__container_gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function web_design__intro_section__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var web_design__layout_gr = parent_gr.nested().attr({id: 'web_design__layout_gr'})

    var web_design__background_gr = web_design__layout_gr.nested()
        .attr({
            id: "web_design__background_gr",
        })

    var background = web_design__background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ffd097c3')
        .attr({
            id:      "background",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })
    
    //CALL MENU FUNCTION
    var menu_rect = web_design__layout_gr.rect(50,50)
        .attr({
            fill: '#b42541e6',
            x: 100,
            y: 100
        })

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
            images__desktop
            images__desktop
            menu_rect_clicked = false;
        }
    })
    return web_design__layout_gr;
}

//----------------------------------------------TEXT----------------------------------------------------------------
function web_design__quote_and_scroll___desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    var headline_gr = text_gr.nested()
    var web_title = headline_gr.text(function(text_element){
            text_element.tspan('web')
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    54
        })    
    web_title.attr({
        x: 0+100,
        y: screen_height/2-70
    })
    web_title.rotate(-90)

    var design_title = headline_gr.text(function(text_element){
            text_element.tspan('design')
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    140
        })    
    design_title.attr({
        x: web_title.bbox().x+web_title.bbox().height+20,
        y: screen_height/2-40

    })
    //-----------------PARAGRAPH------------------------
    var paragraph_gr = text_gr.nested()

    var quotes_up = paragraph_gr.text(function(text_element){
            text_element.tspan('"')
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    60
        })    
    quotes_up.attr({
        x: 0,
        y: 0
    })

    var quotes_down = paragraph_gr.text(function(text_element){
            text_element.tspan('"')
        })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    60
        })    
    quotes_down.attr({
        x: 0,
        y: 0
    })

    var paragraph = paragraph_gr.text(function(add){
            add.tspan('Creativity is inventing, experimenting, ').newLine()
            add.tspan('growing, taking risk, breaking rules, ').newLine()
            add.tspan('making mistakes and having fun.').newLine() 
            add.tspan('').newLine()
            add.tspan('-Mary Lou Cook').newLine().dx(260).font({size:'20'})
        })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    26
        })    
    paragraph_gr.attr({
        x: 0+150,
        y: screen_height/2
    })  


    var scroll_text = text_gr.text(function(text_element){
            text_element.tspan('Scroll through my work')
        })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#467f8cf3',
            family:  'Quicksand',
            size:    18
        })    
    scroll_text.attr({
        x: paragraph_gr.bbox().x+scroll_text.bbox().width,
        y: screen_height/2+paragraph_gr.bbox().height+scroll_text.bbox().height+45
    })

    var scroll_arrow_gr = text_gr.nested()

    var scroll_arrow = SVG(`<g
        id="layer1"
        transform="translate(-29.1042,-45.5041)">
    <g transform="translate(1726.3821,-1064.1634)"
        id="arrow">
        <path
            id="vertical_line"
            style="
                stroke:            #467f8cf3;
                fill-opacity:      1;
                stroke-width:      0.5;
                stroke-linecap:    butt;
                stroke-linejoin:   miter;
                stroke-miterlimit: 4;
                stroke-dasharray:  none;
                stroke-opacity:    1"
            d="m -1693.5926,1109.6675 v 28.7261"/>
        <path
            style="
                fill:            #467f8cf3;
                stroke-width:      0.5;
                stroke-linecap:    butt;
                stroke-linejoin:   miter;
                stroke-miterlimit: 4;
                stroke-dasharray:  none;
                stroke-opacity:    1"
            d="m -1697.2779,1138.4881 h 7.5595 l -3.9687,3.9688 z"/>
    </g>
    </g>`)

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA00..")
    console.log(screen_height)
    console.log(screen_height/2)

    scroll_arrow.attr({id: 'scroll_arrow'})
    scroll_arrow_gr.attr({
        id:     'scroll_arrow_gr',
        width:  scroll_arrow.bbox().width,
        height: scroll_arrow.bbox().height,
        x:      0, // 60,
        y:      screen_height/2, // 300
    })    
    //scroll_arrow_gr.scale(2.5)
    scroll_arrow.addTo(scroll_arrow_gr)
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function web_design__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+150,
        height: screen_height,
        x: screen_width_in_px/2-170
    })

    var rect_width = (screen_width_in_px/2)/5.5;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/0.png',
                'height':     '370',
                'position_x': 0,
                'position_y': 175,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/2.png',
                'height':     '160',
                'position_x': rect_width+15,
                'position_y': 330,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/3.png',
                'height':     '380',
                'position_x': rect_width+15,
                'position_y': 505,
                'view_box_x': '0',
                'view_box_y': '500'
            },
            {
                'img_url':   './../portfolio-app-media/media/4.png',
                'height':     '560',
                'position_x': rect_width*2+30,
                'position_y': 65,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/5.png',
                'height':     '300',
                'position_x': rect_width*3+45,
                'position_y': 160,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/6.png',
                'height':     '325',
                'position_x': rect_width*3+45,
                'position_y': 475,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/7.png',
                'height':     '410',
                'position_x': rect_width*4+60,
                'position_y': 65,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }
    //var elements_height_percentage = images_data['elements_data']['height']
    //var elements_height_px         = images_gr_height*(elements_height_percentage*0.01)

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']
    var img_url_5 = images_data['elements_data'][5]['img_url']
    var img_url_6 = images_data['elements_data'][6]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']
    var height_6 = images_data['elements_data'][6]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];
    var position_x_6 = images_data['elements_data'][6]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];
    var position_y_6 = images_data['elements_data'][6]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    //--------------------------------------------------------------------------------------
    function web_design__create_image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        
        //---------------------------
        // IMPORTANT!! - svg.js nested() function always returns an array with 1 element,
        //               and that first element is the object that represents the "nested" element.
        //               because we want to work with that "nested" element, and not an array of elements
        //               we extract it into the image__gr variable with the image__gr_arr[0] expression.
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y});

        var image__gr = image__gr_arr[0]

        //---------------------------


        var image_rect  = image__gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})

        var image_gr_img = image__gr.image(image_url, function (e) {
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

        return image__gr
    }

    //--------------------------------------------------------------------------------------

    var image_gr_0 = web_design__create_image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
    var image_gr_1 = web_design__create_image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
                     web_design__create_image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
    var image_gr_3 = web_design__create_image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
    web_design__create_image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
    web_design__create_image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    var image_gr_6 =web_design__create_image(images_gr, img_url_6, rect_width, height_6, position_x_6, position_y_6, view_box_x, view_box_y)

    //////////////---------------------------------------------------////////////
    var rect_height = (screen_width_in_px/2)/6;
    var rects_gr = images_gr.nested()
    
    // A__RECT 
    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_0.x()
    var a_rect_y      = image_gr_0.y()
    var a_rect_width  = image_gr_0.width()
    var a_rect_height = image_gr_0.height()

    var a_rect = a_rect_gr.rect(a_rect_width,rect_height)
    a_rect.attr({
            fill: "#b42541e6",
            x: a_rect_x,
            y: a_rect_y+a_rect_height
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_width  = image_gr_1.width()
    var b_rect_height = image_gr_1.height()
    var b_rect_x      = image_gr_1.x()
    var b_rect_y      = image_gr_1.y()

    var b_rect = b_rect_gr.rect(b_rect_width,rect_height)
    b_rect.attr({
            fill: "#b42541e6",
            x: b_rect_x,
            y: b_rect_y-rect_height
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_3.width()
    var c_rect_height = image_gr_3.height()
    var c_rect_x      = image_gr_3.x()
    var c_rect_y      = image_gr_3.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,rect_height)
        .attr({
            fill: "#b42541e6",
            x: c_rect_x,
            y: c_rect_y+c_rect_height
        })

    // D__RECT 
    var d_rect_gr     = rects_gr.nested()
    var d_rect_width  = image_gr_6.width()
    var d_rect_height = image_gr_6.height()
    var d_rect_x      = image_gr_6.x()
    var d_rect_y      = image_gr_6.y()

    var d_rect = d_rect_gr.rect(d_rect_width,rect_height)
        .attr({
            fill: "#b42541e6",
            x: d_rect_x,
            y: d_rect_y+d_rect_height
        })

}

function web_design__headline__info(parent_gr, screen_width_in_px, screen_height){

    var headline_gr = parent_gr.nested()
 
     var pink_rect = headline_gr.rect(screen_width_in_px/2-350,100)
        .fill('#b42541e6')
        .attr({
            id:      "pink_rect",
            opacity: 1.0,
            'x':     0,
            'y':     screen_height/4
        })
  
     var my_title = headline_gr.text(function(text_element){
          text_element.tspan('my')
      })
          .font({
              opacity: 1.0,
              weight:  700,
              fill:    '#3b7a87f3',
              family:  'Quicksand',
              size:    60
          })    
      my_title.attr({
         x: pink_rect.bbox().x+pink_rect.bbox().width,
         y: pink_rect.bbox().y+my_title.bbox().height
      })
      my_title.rotate(-90)
  
      var work_title = headline_gr.text(function(text_element){
          text_element.tspan('work')
      })
          .font({
              opacity: 1.0,
              weight:  700,
              fill:    '#3b7a87f3',
              family:  'Quicksand',
              size:    200
          })    
     work_title.attr({
         x: pink_rect.bbox().x+pink_rect.bbox().width+my_title.bbox().height+25,
         y: pink_rect.bbox().y+pink_rect.bbox().height
      })
}

function artist_portfolio(parent_gr, screen_width_in_px, screen_height){
    var artist_portfolio__gr = parent_gr.nested().attr({id: 'artist_portfolio__gr'})
    var artist_content       = artist_portfolio__gr.nested()
    var column_info_first = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(artist_portfolio__gr){
                    var rect_height = 800
                    var rect_width  = 1500

                    var left_top_gr    = artist_portfolio__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#b5b5b5ff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Portfolio")
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   42,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: left_top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: left_top_gr.bbox().height/2-left_top_text.bbox().height
                        })

                    var right__gr   = artist_portfolio__gr.nested()
                    var right_rect  = right__gr.rect(rect_width/2,rect_height)
                        .attr({
                            id:      "right_rect",
                            x:       rect_width/2,
                            fill:   '#b5b5b5ff',
                            opacity: 0.0
                        })
                    var artist_image_url = './../portfolio-app-media/media/art_1.png'
                    fit_image_inside_rect(right__gr, artist_image_url, rect_width/2, rect_height, rect_width/2, 0, 0, 0)
    
                    var bottom_left__gr = artist_portfolio__gr.nested()
                    var bottom_top_left = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({id: "bottom_top_left",
                                x: 0,
                                y: rect_height/3,
                                opacity: 0.0
                        })


                    var artist_1 = './../portfolio-app-media/media/artist_0.png'
                    fit_image_inside_rect(bottom_left__gr, artist_1, rect_width/4-10, rect_height/3, 0, rect_height/3, 0, 0)

                    var bottom_top_right = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d95f40")
                        .attr({id: "bottom_top_right",
                            x: rect_width/4+10,
                            y: rect_height/3,
                            opacity: 0.0
                    })

                    var artist_2 = './../portfolio-app-media/media/art_2.png'
                    fit_image_inside_rect(bottom_left__gr, artist_2, rect_width/4-10, rect_height/3, rect_width/4, rect_height/3, 0, 0)

                    var bottom = bottom_left__gr.rect(rect_width/2-10,rect_height/3-10)
                        .attr({
                            opacity: 1.0,
                            id:  "bottom",
                            fill:"#b5b5b5ff", 
                            x:   0,
                            y:   rect_height-rect_height/3+10
                    })

                    var paragraph = bottom_left__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  600,
                            fill:    '#1f2d38ff',
                            family:  'Quicksand',
                            size:    26
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width/2-paragraph.bbox().width/2,
                        y: rect_height-rect_height/3+50
                    }) 

                },    
                "activate_fn": function(artist_portfolio__gr){
                   

                }, 
                "deactivate_fn": function(artist_portfolio__gr){

                },     
                "width":"1500",           
                "height":"800",                              //shadow height
                "color": "#204c39",
                "element_number_color": "#d90f0f",
                "element_number": "1"
            }

        ]

    }
    
    create_info_column(artist_portfolio__gr, screen_height, screen_width_in_px, 150, 0, column_info_first);

}

function suprematism(parent_gr, screen_width_in_px, screen_height){
    var suprematism__gr = parent_gr.nested().attr({id: 'suprematism__gr'})

    var column_info_second = {

        "title": "elements",

        "elements_data":[ 
            {
                //SECOND RECT
                "name":"second",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, screen_width_in_px){
                    //element_number
                    var rect_height = 800
                    var rect_width  = 1500

                    var right_middle__gr = parent_gr.nested()
                    right_middle__gr.attr({ 
                        x: rect_width/2,
                        y: rect_height/3
                    }) 

                    var middle_left = right_middle__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({
                            id: "middle_left",
                            x: 10,
                            y: 0
                        })
                    var suprematism_image_url_2 = './../portfolio-app-media/media/sup_2.png'
                    fit_image_inside_rect(right_middle__gr, suprematism_image_url_2, rect_width/4-10, rect_height/3, 10, 0, 0, 0)

                    var middle_right = right_middle__gr.rect(rect_width/4-10,rect_height/3).fill("#000")
                        .attr({
                            id: "middle_right",
                            x: rect_width/4+10,
                            y: 0
                    })
                    var suprematism_image_url_4 = './../portfolio-app-media/media/sup_1.png'
                    fit_image_inside_rect(right_middle__gr, suprematism_image_url_4, rect_width/4-10, rect_height/3, rect_width/4+10, 0, 0, 0)

                    //////////////////////////////////////////////////////////////////
                    var bottom__gr = parent_gr.nested()
                    bottom__gr.attr({ 
                        x: rect_width/2,
                        y: rect_height-rect_height/3
                    }) 

                    var bottom = bottom__gr.rect(rect_width/2-10,rect_height/3-10).fill("#fff")
                        .attr({id: "bottom",
                            x: 10,
                            y: 10,
                            opacity: 1.0
                    })

                    var paragraph = bottom__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                    .font({
                        opacity: 1.0,
                        weight:  600,
                        fill:    '#7a0000ff',
                        family:  'Quicksand',
                        size:    26
                    })    
                    paragraph.attr({
                        x: bottom__gr.bbox().width/2-paragraph.bbox().width/2,
                        y: bottom__gr.bbox().height/2-paragraph.bbox().height/2
                    }) 

                    //var suprematism_image_url_0 = './media/suprematism_0.png'
                    //fit_image_inside_rect(bottom__gr, suprematism_image_url_0, rect_width/2, rect_height/3, 0, 0, 0, 0)

                    ////////////////////////////////////////////////////////////////////////                      
                    var right_top_gr = parent_gr.nested()
                        .attr({
                            x: rect_width/2,
                            y: 0
                        })
                    var right_top_rect = right_top_gr.rect(rect_width/2-10,rect_height/3-10).fill("#fff")
                    .attr({id: "right_top",
                        x:       10,
                        y:       0,
                        opacity: 1.0
                    })
                    var right_top_text = right_top_gr.text("Type: Educational")
                    right_top_text.font({
                        family: 'Quicksand',
                        size:    42,
                        fill:   '#7a0000ff',
                        anchor: 'right',
                        weight: '700',
                        leading:'1.5em'
                    })
                    .attr({
                        x: right_top_rect.bbox().width/2-right_top_text.bbox().width/2,
                        y: right_top_rect.bbox().height/2-right_top_text.bbox().height
                    })

                    ////////////////////////////////////////////////////////////////////////////////////
                    var left_rect_gr = parent_gr.nested()
                    
                    var left_rect = left_rect_gr.rect(rect_width/2, rect_height)
                    .attr({
                        fill:    "#d45f00",
                        opacity: 1.0
                    })
                    
                   var suprematism_image_url = './../portfolio-app-media/media/suprematism_1.png'
                   fit_image_inside_rect(left_rect_gr, suprematism_image_url, rect_width/2, rect_height, 0, 0, 0, 0)

                },    
                "activate_fn": function(parent_gr){
                

                }, 
                "deactivate_fn": function(parent_gr){

                },     
                "width":                "1500",           
                "height":               "800",                              //shadow height
                "color":                "#204c39",
                "element_number_color": "#d90f0f",
                "element_number":       "2"
            }
        ]
    }

    create_info_column(suprematism__gr, screen_height, screen_width_in_px, 150, 0, column_info_second);
}

function deep_blue(parent_gr, screen_width_in_px, screen_height){
    var deep_blue__gr = parent_gr.nested().attr({id: 'deep_blue__gr'})

    var column_info_third = {

        "title": "elements",

        "elements_data":[ 
            {
                //FIRST RECT
                "name":"2019",
                "date":"",    
                "draw_fn": function(deep_blue__gr){
                    var rect_height = 800
                    var rect_width  = 1500

                    var left_top_gr    = deep_blue__gr.nested()
                    var left_top_rect  = left_top_gr.rect(rect_width/2-10,rect_height/3-10)
                    .attr({
                        id:      "left_top",
                        fill:    "#6f907fff",
                        opacity: 1.0
                    })
                    var left_top_text  = left_top_gr.text("Type: Small bussines")
                        left_top_text.font({
                          family: 'Quicksand',
                          size:   42,
                          fill:   '#1f2d38ff',
                          anchor: 'left',
                          weight: '700',
                          leading:'1.5em'
                        })
                        .attr({
                            x: left_top_gr.bbox().width/2-left_top_text.bbox().width/2,
                            y: left_top_gr.bbox().height/2-left_top_text.bbox().height
                        })

                    var right__gr   = deep_blue__gr.nested()
                    var right_rect  = right__gr.rect(rect_width/2,rect_height)
                        .attr({
                            id:      "right_rect",
                            x:       rect_width/2,
                            fill:   '#2a3d35ef',
                            opacity: 0.0
                        })
                    var url__a = './../portfolio-app-media/media/deep_blue_0.png'
                    fit_image_inside_rect(right__gr, url__a, rect_width/2, rect_height, rect_width/2, 0, 0, 0)
    
                    var bottom_left__gr = deep_blue__gr.nested()
                    var bottom_top_left = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d45f00")
                        .attr({id: "bottom_top_left",
                                x: 0,
                                y: rect_height/3,
                                opacity: 0.0
                        })


                    var url__b = './../portfolio-app-media/media/deep_blue_2.png'
                    fit_image_inside_rect(bottom_left__gr, url__b, rect_width/4-10, rect_height/3, 0, rect_height/3, 0, 0)

                    var bottom_top_right = bottom_left__gr.rect(rect_width/4-10,rect_height/3).fill("#d95f40")
                        .attr({id: "bottom_top_right",
                            x: rect_width/4+10,
                            y: rect_height/3,
                            opacity: 0.0
                    })

                    var url__c = './../portfolio-app-media/media/deep_blue_1.png'
                    fit_image_inside_rect(bottom_left__gr, url__c, rect_width/4-10, rect_height/3, rect_width/4, rect_height/3, 0, 0)

                    var bottom = bottom_left__gr.rect(rect_width/2-10,rect_height/3-10)
                        .attr({
                            opacity: 1.0,
                            id:  "bottom",
                            fill:"#6f907fff", 
                            x:   0,
                            y:   rect_height-rect_height/3+10
                    })

                    var paragraph = bottom_left__gr.text(function(add){
                        add.tspan('Custom made masonry galleries that are').newLine()
                        add.tspan('responsive and contain my architectural models').newLine()
                        add.tspan('that were hand-made in my free time, and').newLine()
                        add.tspan('there are also images of my inspiration, aspiration...').newLine()
                
                    })
                        .font({
                            opacity: 1.0,
                            weight:  600,
                            fill:    '#1f2d38ff',
                            family:  'Quicksand',
                            size:    26
                        })    
                    paragraph.attr({
                        x: bottom.bbox().width/2-paragraph.bbox().width/2,
                        y: rect_height-rect_height/3+50
                    }) 

                },    
                "activate_fn": function(deep_blue__gr){
                   

                }, 
                "deactivate_fn": function(deep_blue__gr){

                },     
                "width":"1500",           
                "height":"800",                              //shadow height
                "color": "#204c39",
                "element_number_color": "#d90f0f",
                "element_number": "1"
            }

        ]

    }

    create_info_column(deep_blue__gr, screen_height, screen_width_in_px, 150, 100, column_info_third);
}

function video__section(parent_gr, screen_width_in_px, screen_height){

    // ! svg.js DOESNT SUPPORT .mp4 FILES !
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
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/design_mobile__small__kadar3.mp4' type='video/mp4'>
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