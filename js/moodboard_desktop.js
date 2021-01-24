/*$(document).ready(function(){
    main();
})*/

function moodboard__main() {
    moodboard__activate();

    $(window).resize(function() {
        
        moodboard__deactivate();

        moodboard__activate();
    });
}

function moodboard__activate(bar_gr){

    document.title = "moodboard"
    window.history.pushState({page: "moodboard"},"", "#moodboard");

    $("body").append(`
        <div id="moodboard">
            <div id="wrapper">
            </div>
            <div id="headline__info">
            </div>
            <div id="masonry_container">
            </div>
        </div>
    `);

    moodboard__create_responsive(bar_gr);
    current_page = "moodboard";
}

function moodboard__deactivate(){
    $("#moodboard").remove();
    $("#contact_wrapper").remove();

    /*remove_triggers("contact_canvas__trigger") // contact_canvas TRIGGER*/
}
function moodboard__create_responsive(bar_gr) {

    var screen_width_in_px  = window.innerWidth;
    var screen_height       = window.innerHeight;

    $("#moodboard #wrapper").css({                    
        "background-color": '#d8d8d8ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    $("#moodboard #headline__info").css({                    
        "background-color": '#AC3323',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px,
        
    }); 

    var container    = SVG().addTo("#moodboard #wrapper").size(screen_width_in_px, screen_height)
    var container_gr = container.nested()   

    var headline_canvas     = SVG().addTo("#moodboard #headline__info").size(screen_width_in_px, screen_height/2)
    var headline_canvas__gr = headline_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //intro(container_gr, screen_width_in_px, screen_height)
        //nevena(container_gr, screen_width_in_px, screen_height)
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
        var moodboard__layout_gr = moodboard__intro_section__desktop(container_gr, bar_gr, screen_width_in_px, screen_height)
        var moodboard__background_gr = moodboard__layout_gr.find("#moodboard__background_gr")
        moodboard__images__desktop(moodboard__background_gr, screen_width_in_px, screen_height)

        moodboard__headline__info(headline_canvas__gr, screen_width_in_px, screen_height)
        masonry(screen_width_in_px, screen_height)
        moodboard__video(screen_width_in_px, screen_height)

        moodboard__quote_and_scroll__desktop(container_gr, screen_width_in_px, screen_height)
        create_contact_section(screen_width_in_px, screen_height)
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function moodboard__intro_section__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var moodboard__layout_gr = parent_gr.nested()

    var moodboard__background_gr = moodboard__layout_gr.nested()
        .attr({
            id: "moodboard__background_gr",
        })

    var background_color = moodboard__background_gr.rect(screen_width_in_px,screen_height)
        .fill('#f7cd97e3')
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#da2b13ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#da2b13ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#da2b13ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#da2b13ff', linecap: 'round' })


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

    return moodboard__layout_gr;
}

//----------------------------------------------TEXT----------------------------------------------------------------
function moodboard__quote_and_scroll__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    var moodboard_title = text_gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#AC3323',
            family:  'Quicksand',
            size:    125
        })    
    moodboard_title.attr({
        x: 160,
        y: screen_height/2-moodboard_title.bbox().height/2
    })

    var paragraph = text_gr.text(function(add){
        add.tspan('Custom made masonry galleries that are').newLine()
        add.tspan('responsive and contain my architectural models').newLine()
        add.tspan('that were hand-made in my free time,').newLine()
        add.tspan('and there are also images of my inspiration,').newLine()
        add.tspan('aspiration...').newLine()


    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#924b2896',
            family:  'Quicksand',
            size:    26
        })    
    paragraph.attr({
        x: 200,
        y: screen_height/2
    })  

    var scroll_text = text_gr.text(function(text_element){
        text_element.tspan('Scroll through my work')
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#924b2896',
            family:  'Quicksand',
            size:    18
        })    
    scroll_text.attr({
        x: paragraph.bbox().x,
        y: paragraph.bbox().y+paragraph.bbox().height+100
    })

    var scroll_arrow_gr = text_gr.nested()
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
        </g>`)

    scroll_arrow.attr({id: 'scroll_arrow'})
    scroll_arrow_gr.attr({
        fill: '#924b2896',
        id:     'scroll_arrow_gr',
        width:  scroll_arrow.bbox().width,
        height: scroll_arrow.bbox().height,
        x:      60,
        y:      300
    })    
    scroll_arrow_gr.scale(2.5)
    scroll_arrow.addTo(scroll_arrow_gr)

    /*var scroll_arrow = scroll_arrow_gr.path("m -1692.5609,1103.5441 -0.095,32.7894 3.9687,-3.9688 h -7.5595 l 3.5908,3.9688")

    scroll_arrow.fill('#3c5c53ff').move(scroll_text.bbox().x-scroll_arrow.bbox().width-10,paragraph.bbox().y+paragraph.bbox().height+100)
    //parentheses.rotate(180)
    scroll_arrow.scale(3.8)
    scroll_arrow.attr({id: 'scroll_arrow'})*/

}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function moodboard__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2,
        height: screen_height,
        x: screen_width_in_px/2-100
    })

    var rect_height = 160;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/m_1.png',
                'width':     '340',
                'position_x': 250,
                'position_y': 20,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/m_2.png',
                'width':     '400', 
                'position_x': 355,
                'position_y': 200,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/m_3.png',
                'width':     '660',
                'position_x': 210,
                'position_y': 380,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/m_4.png',
                'width':     '550',
                'position_x': 210,
                'position_y': 560,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            /*{
                'img_url':   './../portfolio-app-media/media/mosaic2.jpg',
                'width':     '850',
                'position_x': 100,
                'position_y': 590,
                'view_box_x': '0',
                'view_box_y': '0'
            },*/
            {
                'img_url':   './../portfolio-app-media/media/m_5.png',
                'width':     '400',
                'position_x': 195,
                'position_y': 740,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_5 = images_data['elements_data'][4]['img_url']

    var width_0 = images_data['elements_data'][0]['width']
    var width_1 = images_data['elements_data'][1]['width']
    var width_2 = images_data['elements_data'][2]['width']
    var width_3 = images_data['elements_data'][3]['width']
    var width_5 = images_data['elements_data'][4]['width']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_5 = images_data['elements_data'][4]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_5 = images_data['elements_data'][4]['position_y'];

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
    var image_gr_1 = create_image(images_gr, img_url_1, width_1, rect_height,  position_x_1, position_y_1, view_box_x, view_box_y)
    create_image(images_gr, img_url_2, width_2, rect_height,  position_x_2, position_y_2, view_box_x, view_box_y)
    var image_gr_3 = create_image(images_gr, img_url_3, width_3, rect_height,  position_x_3, position_y_3, view_box_x, view_box_y)
    //create_image(images_gr, img_url_4, width_4, rect_height,  position_x_4, position_y_4, view_box_x, view_box_y)
    var image_gr_5 = create_image(images_gr, img_url_5, width_5, rect_height,  position_x_5, position_y_5, view_box_x, view_box_y)

        // A__RECT 
        var rect_width = 160;
        var rects_gr = images_gr.nested()
        var colors_map = get_colors();

        var a_rect_gr = rects_gr.nested()
        var a_rect_width  = image_gr_0.width()
        var a_rect_height = image_gr_0.height()
        var a_rect_x  = image_gr_0.x()
        var a_rect_y  = image_gr_0.y()    
    
        var a_rect = a_rect_gr.rect(rect_width,a_rect_height)
        a_rect.attr({
                fill: colors_map["moodboard"]["main_color"],
                x: a_rect_x,
                y: a_rect_y
            })
    
        // B__RECT 
        var b_rect_gr     = rects_gr.nested()
        var b_rect_width  = image_gr_1.width()
        var b_rect_height = image_gr_1.height()
        var b_rect_x      = image_gr_1.x()
        var b_rect_y      = image_gr_1.y()
    
        var b_rect = b_rect_gr.rect(rect_width,b_rect_height)
        b_rect.attr({
                fill: colors_map["moodboard"]["main_color"],
                x: b_rect_x,
                y: b_rect_y
            })
    
        // C__RECT 
        var c_rect_gr = rects_gr.nested()
        var c_rect_width  = image_gr_3.width()
        var c_rect_height = image_gr_3.height()
        var c_rect_x      = image_gr_3.x()
        var c_rect_y      = image_gr_3.y()
     
        var c_rect = c_rect_gr.rect(rect_width,c_rect_height)
            .attr({
                fill: colors_map["moodboard"]["main_color"],
                x: c_rect_x,
                y: c_rect_y
            })
    
        // D__RECT 
        var d_rect_gr     = rects_gr.nested()
        var d_rect_width  = image_gr_5.width()
        var d_rect_height = image_gr_5.height()
        var d_rect_x      = image_gr_5.x()
        var d_rect_y      = image_gr_5.y()
    
        var d_rect = d_rect_gr.rect(rect_width,d_rect_height)
            .attr({
                fill: colors_map["moodboard"]["main_color"],
                x: d_rect_x,
                y: d_rect_y
            })
}

function moodboard__headline__info(parent_gr, screen_width_in_px, screen_height){
    var headline_gr = parent_gr.nested()

    var pink_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#924b2896')
    .attr({
        id:      "pink_rect",
        opacity: 1.0,
        'x':     0,
        'y':     screen_height/4-50
    })
 
    var masonry_title = headline_gr.text(function(text_element){
        text_element.tspan('masonry')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#d8d8d8ff',
            family:  'Quicksand',
            size:    34
        })    
    masonry_title.attr({
        x: pink_rect.bbox().x+pink_rect.bbox().width-35,
        y: pink_rect.bbox().y+masonry_title.bbox().height+20
    })
    masonry_title.rotate(-90)
 
    var galleries_title = headline_gr.text(function(text_element){
        text_element.tspan('galleries')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#d8d8d8ff',
            family:  'Quicksand',
            size:    160
        })    
   galleries_title.attr({
        x: pink_rect.bbox().x+pink_rect.bbox().width+masonry_title.bbox().height+30,
        y: pink_rect.bbox().y+pink_rect.bbox().height-10//+galleries_title.bbox().height/2
    })
}

function masonry(screen_width_in_px, screen_height){

    //------------------BLOG MASONRY-------------------------//
    $("#moodboard #masonry_container").append(`
        <div id="blog_masonry_section">

        <h1>Inspiring art</h1>
        <p>Typography, illustrations & installations</p>
            <div id="masonry_blog">
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_10.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_3.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_5.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_6.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_8.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_1.png">
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_11.png">    
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_12.png">    
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_13.png">    
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_14.png">    
                </div>
                <div class="blog_item">
                    #Paula Scher
                    <img src="./../portfolio-app-media/masonry/blog_media/paula_15.png">    
                </div>


                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n_1.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n_2.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n_3.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n5.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n6.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n7.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n8.png">
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n9.png">    
                </div>
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n10.png">    
                </div>                    
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n11.png">    
                </div>                    
                <div class="blog_item">
                    #christoph niemann
                    <img src="./../portfolio-app-media/masonry/blog_media/n12.png">    
                </div>
                <div class="blog_item">
                    #Olafur Eliasson
                    <img src="./../portfolio-app-media/masonry/blog_media/oe.png">    
                </div>
                <div class="blog_item">
                    #Olafur Eliasson
                    <img src="./../portfolio-app-media/masonry/blog_media/oe1.png">    
                </div>
                <div class="blog_item">
                    #Olafur Eliasson
                    <img src="./../portfolio-app-media/masonry/blog_media/oe2.png">    
                </div>
                <div class="blog_item">
                    #Olafur Eliasson
                    <img src="./../portfolio-app-media/masonry/blog_media/oe3.png">    
                </div>
                <div class="blog_item">
                    #Olafur Eliasson
                    <img src="./../portfolio-app-media/masonry/blog_media/oe4.png">    
                </div>
            </div>
    </div>
    `)

    $("#blog_masonry_section").css({                    
        "background-color": '#AC3323',
        "position":         "relative",
        "width":            screen_width_in_px,
    }); 

    var blog_masonry_container    = SVG().addTo("#blog_masonry_section")
    var blog_masonry_container_gr = blog_masonry_container.nested()
    blog_masonry_container_gr.attr({
        x: 100
    })

    $('#blog_masonry').masonry({
        // options
        itemSelector: '.blog_item',
        columnWidth: 24, 
        percentPosition: true
    });

    $('.blog_item img').on('load', ()=>{
		$('#blog_masonry').masonry();
    });

}

function moodboard__video(screen_width_in_px, screen_height){

    $("#moodboard").append(`
    <div id="video__info">
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/sculpture_kadar_1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/sculpture_kadar_2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/sculpture_kadar_3.mp4' type='video/mp4'>
            </video>
        </div>
    </div>`);

    $("#video__info").css({                    
        "background-color": '#732424',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px
    }); 

    var video_canvas     = SVG().addTo("#video__info").size(screen_width_in_px, screen_height)
    var video_canvas_gr = video_canvas.nested()

    var video_gr   = video_canvas_gr.nested()
    var video_gr_y = 0;
    
    video_gr.attr({
        y: video_gr_y
    })

    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y
    var video_global_height = screen_height

    $("#video__info").find("#video__container").css({
        opacity: 0.5
    });

    $("#video__info").find("#video__a").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-250,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#video__info").find("#video__b").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#video__info").find("#video__c").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+250,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}
