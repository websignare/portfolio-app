$(document).ready(function(){
    main();
})

function main() {
    $("body").append(`
        <div id="wrapper">
        </div>
        <div id="headline__info">
        </div>
    `);

    function create_responsive() {

        var screen_width_in_px  = window.innerWidth;
        var screen_height = window.innerHeight;

        $("#wrapper").css({                    
            "background-color": '#759aa292',
            "position":         "relative",
            "height":           screen_height,
            "width":            screen_width_in_px
        }); 

        $("#headline__info").css({                    
            "background-color": '#fff',
            "position":         "relative",
            "height":           screen_height/2,
            "width":            screen_width_in_px,
            
        }); 

        var container       = SVG().addTo("#wrapper").size(screen_width_in_px, screen_height)
        var container_gr    = container.nested()   


        var headline_canvas     = SVG().addTo("#headline__info").size(screen_width_in_px, screen_height/2)
        var headline_canvas__gr = headline_canvas.nested()   

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
            var layout_gr = intro_section__desktop(container_gr, screen_width_in_px, screen_height)
            var background_gr = layout_gr.find("#background_gr")
            images__desktop(background_gr, screen_width_in_px, screen_height)

            headline__info(headline_canvas__gr, screen_width_in_px, screen_height)
            masonry(screen_width_in_px, screen_height)
            video(screen_width_in_px, screen_height)

            quote_and_scroll__desktop(container_gr, screen_width_in_px, screen_height)
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
function intro_section__desktop(parent_gr, screen_width_in_px, screen_height){

    var layout_gr = parent_gr.nested()

    var background_gr = layout_gr.nested()
        .attr({
            id: "background_gr",
        })

    var background_color = background_gr.rect(screen_width_in_px,screen_height)
        .fill('#f7cd97e3')
        .attr({
            id:      "background_color",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })

    //CALL MENU FUNCTION
    var menu_rect = parent_gr.rect(50,50)
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

    return layout_gr;
}

//----------------------------------------------TEXT----------------------------------------------------------------
function quote_and_scroll__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    var moodboard_title = text_gr.text(function(text_element){
        text_element.tspan('moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#846693ff',
            family:  'Quicksand',
            size:    125
        })    
    moodboard_title.attr({
        x: 160,
        y: screen_height/2-moodboard_title.bbox().height/2
    })

    //-----------------QUOTES------------------------
    /*var quotes_up = text_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#846693ff',
            family:  'Quicksand',
            size:    60
        })    
    quotes_up.attr({
        x: 145,
        y: screen_height/2+40
    })*/

    var paragraph = text_gr.text(function(add){
        add.tspan('Custom made masonry galleries that are').newLine()
        add.tspan('responsive and contain my architectural models').newLine()
        add.tspan('that were hand-made in my free time,').newLine()
        add.tspan('and there are also images of my inspiration, aspiration...').newLine()

    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#846693ff',
            family:  'Quicksand',
            size:    26
        })    
    paragraph.attr({
        x: 180,
        y: screen_height/2
    })  

    /*var quotes_down = text_gr.text(function(text_element){
        text_element.tspan('"')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#846693ff',
            family:  'Quicksand',
            size:    60
        })    
    quotes_down.attr({
        x: paragraph.bbox().x+paragraph.bbox().width-45,
        y: screen_height/2+paragraph.bbox().height-quotes_down.bbox().height/2-5
    })*/

    var scroll_text = text_gr.text(function(text_element){
        text_element.tspan('Scroll through my work')
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#846693ff',
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
        fill: '#846693ff',
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
function images__desktop(parent_gr, screen_width_in_px, screen_height){

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
                'img_url':   './media/rubic.png',
                'width':     '340',
                'position_x': 250,
                'position_y': 20,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/rubic.png',
                'width':     '400', 
                'position_x': 355,
                'position_y': 200,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './media/rubic.png',
                'width':     '660',
                'position_x': 210,
                'position_y': 380,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './media/rubic.png',
                'width':     '550',
                'position_x': 210,
                'position_y': 560,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            /*{
                'img_url':   './media/mosaic2.jpg',
                'width':     '850',
                'position_x': 100,
                'position_y': 590,
                'view_box_x': '0',
                'view_box_y': '0'
            },*/
            {
                'img_url':   './media/rubic.png',
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
    
        var a_rect_gr = rects_gr.nested()
        var a_rect_width  = image_gr_0.width()
        var a_rect_height = image_gr_0.height()
        var a_rect_x  = image_gr_0.x()
        var a_rect_y  = image_gr_0.y()    
    
        var a_rect = a_rect_gr.rect(rect_width,a_rect_height)
        a_rect.attr({
                fill: "#b42541e6",
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
                fill: "#b42541e6",
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
                fill: "#b42541e6",
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
                fill: "#b42541e6",
                x: d_rect_x,
                y: d_rect_y
            })
}

function headline__info(parent_gr, screen_width_in_px, screen_height){
    var headline_gr = parent_gr.nested()

    var pink_rect = headline_gr.rect(screen_width_in_px/2-350,100)
    .fill('#b42541e6')
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
            fill:    '#482d4bff',
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
            fill:    '#482d4bff',
            family:  'Quicksand',
            size:    160
        })    
   galleries_title.attr({
        x: pink_rect.bbox().x+pink_rect.bbox().width+masonry_title.bbox().height+30,
        y: pink_rect.bbox().y+pink_rect.bbox().height-10//+galleries_title.bbox().height/2
    })
}

function masonry(screen_width_in_px, screen_height){
    //------------------FOOD MASONRY-------------------------//
    $("body").append(`
        <div id="food_masonry_section">

            <div id="masonry_food">

                <div class="item">
                <img src="./masonry/blog_media/food_1.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=concrete+design&tbm=isch&ved=2ahUKEwiB3JrXgJztAhUI_4UKHW8XAooQ2-cCegQIABAA&oq=concrete+design&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQpyJYqydg8ihoAHAAeACAAYYBiAGjBZIBAzAuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=EGu9X4GUB4j-lwTvrojQCA&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Eggs, bacon & spinach</h1>
                            <p class="item__author">Breakfast</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_2.png">
                        <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=airplane+wings&tbm=isch&ved=2ahUKEwi8oaXl_5vtAhVF5IUKHfK0AlIQ2-cCegQIABAA&oq=airplane+&gs_lcp=CgNpbWcQARgAMgQIABBDMgQIABBDMgIIADICCAAyBAgAEEMyAggAMgQIABBDMgIIADICCAAyAggAUJEgWNU0YPM_aABwAHgAgAGJAYgBzQiSAQMwLjmYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=IWq9X_yMDcXIlwTy6YqQBQ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Buda bowl</h1>
                            <p class="item__author">Lunch</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                <img src="./masonry/blog_media/food_3.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=architecture+maquette&tbm=isch&ved=2ahUKEwjy8OSNgZztAhXa44UKHdb_B2IQ2-cCegQIABAA&oq=architecture+maqu&gs_lcp=CgNpbWcQARgAMgIIADICCAAyBggAEAUQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIECAAQHjoECAAQQ1CsDlivKWCSNWgAcAB4AIAB8gKIAe0SkgEIMS4xMy4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=gmu9X_KnI9rHlwTW_5-QBg&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Veggie tortila</h1>
                            <p class="item__author">Lunch/Dinner</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                <img src="./masonry/blog_media/food_4.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=architecture+maquette&tbm=isch&ved=2ahUKEwjy8OSNgZztAhXa44UKHdb_B2IQ2-cCegQIABAA&oq=architecture+maqu&gs_lcp=CgNpbWcQARgAMgIIADICCAAyBggAEAUQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIECAAQHjoECAAQQ1CsDlivKWCSNWgAcAB4AIAB8gKIAe0SkgEIMS4xMy4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=gmu9X_KnI9rHlwTW_5-QBg&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Fruit sandwiches</h1>
                            <p class="item__author">Breakfast/Snack</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                <img src="./masonry/blog_media/food_5.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=wooden+structure&tbm=isch&ved=2ahUKEwi_7sDq_5vtAhVX-4UKHY55DlgQ2-cCegQIABAA&oq=wooden+stru&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQ1CB6QNYn5YEYKmlBGgCcAB4AIABf4gB5wuSAQQwLjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=LGq9X7-oCdf2lwSO87nABQ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Green smoothie</h1>
                            <p class="item__author">Snack</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                <img src="./masonry/blog_media/food_6.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=antennas&tbm=isch&ved=2ahUKEwit-7qSgZztAhVHZRoKHapQCJUQ2-cCegQIABAA&oq=antennas&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEENQ4OECWND0AmCw9gJoAHAAeACAAY8BiAGvB5IBAzAuOJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=jGu9X62FF8fKaaqhoagJ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Salad with eggwhites</h1>
                            <p class="item__author">Breakfast</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                <img src="./masonry/blog_media/food_7.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=concrete+design&tbm=isch&ved=2ahUKEwiB3JrXgJztAhUI_4UKHW8XAooQ2-cCegQIABAA&oq=concrete+design&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQpyJYqydg8ihoAHAAeACAAYYBiAGjBZIBAzAuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=EGu9X4GUB4j-lwTvrojQCA&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Fruit wafles</h1>
                            <p class="item__author">Breakfast</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_8.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=concrete+design&tbm=isch&ved=2ahUKEwiB3JrXgJztAhUI_4UKHW8XAooQ2-cCegQIABAA&oq=concrete+design&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQpyJYqydg8ihoAHAAeACAAYYBiAGjBZIBAzAuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=EGu9X4GUB4j-lwTvrojQCA&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Poached egg sandwiches</h1>
                            <p class="item__author">Breakfast</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_9.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=architecture+maquette&tbm=isch&ved=2ahUKEwjy8OSNgZztAhXa44UKHdb_B2IQ2-cCegQIABAA&oq=architecture+maqu&gs_lcp=CgNpbWcQARgAMgIIADICCAAyBggAEAUQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIECAAQHjoECAAQQ1CsDlivKWCSNWgAcAB4AIAB8gKIAe0SkgEIMS4xMy4yLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=gmu9X_KnI9rHlwTW_5-QBg&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Red veggies pottage</h1>
                            <p class="item__author">Lunch/Dinner</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_10.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=wooden+structure&tbm=isch&ved=2ahUKEwi_7sDq_5vtAhVX-4UKHY55DlgQ2-cCegQIABAA&oq=wooden+stru&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQ1CB6QNYn5YEYKmlBGgCcAB4AIABf4gB5wuSAQQwLjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=LGq9X7-oCdf2lwSO87nABQ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Ice smoothies</h1>
                            <p class="item__author">Snack</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_11.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=wooden+structure&tbm=isch&ved=2ahUKEwi_7sDq_5vtAhVX-4UKHY55DlgQ2-cCegQIABAA&oq=wooden+stru&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQ1CB6QNYn5YEYKmlBGgCcAB4AIABf4gB5wuSAQQwLjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=LGq9X7-oCdf2lwSO87nABQ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Ham sandwiche with dried paprika</h1>
                            <p class="item__author">Breakfast</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <img src="./masonry/blog_media/food_12.png">
                    <div class="item__body">
                        <div class="relative">
                            <a class="item__link" target="_blank" href="https://www.google.com/search?q=wooden+structure&tbm=isch&ved=2ahUKEwi_7sDq_5vtAhVX-4UKHY55DlgQ2-cCegQIABAA&oq=wooden+stru&gs_lcp=CgNpbWcQARgAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoECAAQQ1CB6QNYn5YEYKmlBGgCcAB4AIABf4gB5wuSAQQwLjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=LGq9X7-oCdf2lwSO87nABQ&bih=969&biw=1920&client=ubuntu" ></a>
                            <h1 class="item__title">Fried Cauliflower salad</h1>
                            <p class="item__author">Lunch</p>
                        </div>
                        <div class="mt-auto" >
                            <span class="item__tag">#see recipe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)

    $("#food_masonry_section").css({                    
        "background-color": '#fff',
        "position":         "relative",
        "width":            screen_width_in_px,
    }); 


    var masonry_container    = SVG().addTo("#food_masonry_section").size(screen_width_in_px, screen_height)
    var masonry_container_gr = masonry_container.nested()
    masonry_container_gr.attr({
        x: 100
    })

    $('#masonry_food').masonry({
        // options
        itemSelector: '.item',
        columnWidth: 24, 
        percentPosition: true
    });

    $('.item img').on('load', ()=>{
		$('#masonry_food').masonry();
    });


    //------------------BLOG MASONRY-------------------------//
    $("body").append(`
        <div id="blog_masonry_section">

            <h1>Nourishing body & mind</h1>
            <p>Self-care essentials</p>
                <div id="masonry_blog">
                    <div class="blog_item">
                        #shoes
                        <img src="./masonry/blog_media/self_care_6.png">
                    </div>
                    <div class="blog_item">
                        #bamboo_shampoo
                        <img src="./masonry/blog_media/self_care_2.png">
                    </div>
                    <div class="blog_item">
                        #plant
                        <img src="./masonry/blog_media/self_care_3.png">
                    </div>
                    <div class="blog_item">
                        #t-shirts
                        <img src="./masonry/blog_media/self_care_5.png">
                    </div>
                    <div class="blog_item">
                        #scrubs
                        <img src="./masonry/blog_media/self_care_4.png">
                    </div>
                    <div class="blog_item">
                        #women_smiling
                        <img src="./masonry/blog_media/self_care_8.png">
                    </div>
                    <div class="blog_item">
                        #vitality_shot
                        <img src="./masonry/blog_media/self_care_7.png">
                    </div>
                    <div class="blog_item">
                        #perfume
                        <img src="./masonry/blog_media/self_care_1.png">    
                    </div>
                </div>
        </div>
    `)

    $("#blog_masonry_section").css({                    
        "background-color": '#fff',
        "position":         "relative",
        "width":            screen_width_in_px,
    }); 

    var blog_masonry_container    = SVG().addTo("#blog_masonry_section").size(screen_width_in_px, screen_height)
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

function video(screen_width_in_px, screen_height){

    $("body").append(`
    <div id="video__info">
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./media/sculpture_kadar_1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./media/sculpture_kadar_2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./media/sculpture_kadar_3.mp4' type='video/mp4'>
            </video>
        </div>
    </div>`);

    $("#video__info").css({                    
        "background-color": '#4a6696c9',
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
