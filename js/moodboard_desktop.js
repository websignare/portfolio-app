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
        moodboard_text__desktop(container_gr, screen_width_in_px, screen_height)

        moodboard__headline__info(headline_canvas__gr, screen_width_in_px, screen_height)
        masonry(screen_width_in_px, screen_height)
        moodboard__video(screen_width_in_px, screen_height)

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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#d0633dff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#d0633dff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#d0633dff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#d0633dff', linecap: 'round' })


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
    
    //---------------------------SYMBOL----------------------------------
    var square_brackets_symbol_gr = moodboard__background_gr.nested() 

    var square_brackets_symbol = square_brackets_symbol_gr.path("m 935.81176,-1112.7249 q 4.05889,-2.3434 8.13386,-1.0881 4.15668,0.9503 6.5001,5.0093 l 88.60378,153.46619 q 2.3434,4.05893 1.0881,8.13391 -0.9504,4.15665 -5.0093,6.50005 l -40.78258,23.54585 q -4.05897,2.34345 -8.32715,1.19975 -3.96338,-1.06198 -6.30681,-5.12091 -2.23183,-3.86564 -1.28142,-8.0223 1.2552,-4.07492 5.31418,-6.41837 l 28.79908,-16.62715 -0.074,2.10422 -80.34596,-139.16334 3.65848,0.9803 -30.15206,17.4083 q -4.05897,2.3434 -8.21556,1.393 -4.07497,-1.2552 -6.41839,-5.3142 -2.23184,-3.8656 -1.16984,-7.829 1.14361,-4.2682 5.20258,-6.6116 z m -8.39006,234.2058 q -4.05897,2.34345 -8.32723,1.1998 -3.9633,-1.06203 -6.30672,-5.12096 l -88.60377,-153.46624 q -2.34343,-4.0589 -1.28152,-8.0222 1.1437,-4.2683 5.20268,-6.6117 l 40.78252,-23.5458 q 4.05897,-2.3435 8.13394,-1.0882 4.15659,0.9504 6.50001,5.0093 2.23184,3.8657 1.08822,8.1339 -1.06199,3.9633 -5.12096,6.3068 l -28.79907,16.6271 0.0737,-2.1042 80.34599,139.16336 -3.65849,-0.98029 30.15206,-17.4083 q 4.05897,-2.34345 8.02235,-1.28148 4.26818,1.14371 6.61161,5.20264 2.23183,3.86564 0.97663,7.94057 -0.95041,4.15665 -5.00939,6.5001 z")
    square_brackets_symbol_gr.css( "position", "fixed")

    square_brackets_symbol.fill('#cdcdcdff')
    square_brackets_symbol.move(screen_width_in_px/2-square_brackets_symbol.bbox().width-100,screen_height/2-square_brackets_symbol.bbox().height/2+15)
    //square_brackets_symbol.rotate(180)
    square_brackets_symbol.scale(5.5)
    square_brackets_symbol.attr({id: 'square_brackets_symbol'})

    square_brackets_symbol_gr.attr({
        id: "square_brackets_symbol_gr"
    })

    return moodboard__layout_gr;
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function moodboard__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px,
        height: screen_height,
    })

    var rect_height = screen_height/6.6;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/m_1.png',
                'width':     '220',
                'position_x': screen_width_in_px/2+115,
                'position_y': 60,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/m_2.png',
                'width':     '250', 
                'position_x': screen_width_in_px/2+195,
                'position_y': rect_height+75,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/m_3.png',
                'width':     '590',
                'position_x': screen_width_in_px/2-50,
                'position_y': rect_height*2+90,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/m_4.png',
                'width':     '295',
                'position_x': screen_width_in_px/2+165,
                'position_y': rect_height*3+105,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/m_5.png',
                'width':     '380',
                'position_x': screen_width_in_px/2+5,
                'position_y': rect_height*4+120,
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
    
        var a_rect = a_rect_gr.rect(rect_width+screen_width_in_px,a_rect_height)
        a_rect.attr({
                fill: "#f57714fe",
                x: a_rect_x+a_rect_width,
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
                fill: "#f57714fe",
                x: b_rect_x-rect_width,
                y: b_rect_y
            })
    
        // C__RECT 
        var c_rect_gr = rects_gr.nested()
        var c_rect_width  = image_gr_3.width()
        var c_rect_height = image_gr_3.height()
        var c_rect_x      = image_gr_3.x()
        var c_rect_y      = image_gr_3.y()
     
        var c_rect = c_rect_gr.rect(rect_width,c_rect_height+1)
            .attr({
                fill: "#f57714fe",
                x: c_rect_x+c_rect_width,
                y: c_rect_y-1
            })
    
        // D__RECT 
        var d_rect_gr     = rects_gr.nested()
        var d_rect_width  = image_gr_5.width()
        var d_rect_height = image_gr_5.height()
        var d_rect_x      = image_gr_5.x()
        var d_rect_y      = image_gr_5.y()
    
        var d_rect = d_rect_gr.rect(rect_width+screen_width_in_px,d_rect_height)
            .attr({
                fill: "#f57714fe",
                x: d_rect_x-screen_width_in_px,
                y: d_rect_y
            })
}

//----------------------------------------------TEXT----------------------------------------------------------------
function moodboard_text__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    //---------------------MOODBOARD-TITLE--------------------
    var moodboard_path__gr = text_gr.nested()
    var moodboard_path = moodboard_path__gr.path("m 1220.3147,-986.30847 q 0.5074,0 0.8391,0.33173 0.3317,0.33172 0.3317,0.85857 v 12.05904 q 0,0.50734 -0.3317,0.85857 -0.3317,0.33172 -0.8391,0.33172 -0.5073,0 -0.839,-0.33172 -0.3318,-0.35123 -0.3318,-0.85857 v -0.95614 l 0.4293,0.17562 q 0,0.25367 -0.2732,0.62442 -0.2731,0.35123 -0.7414,0.70247 -0.4684,0.35123 -1.1123,0.6049 -0.6244,0.23415 -1.3659,0.23415 -1.3464,0 -2.4391,-0.68295 -1.0928,-0.70247 -1.7367,-1.91228 -0.6244,-1.22932 -0.6244,-2.80987 0,-1.60007 0.6244,-2.80987 0.6439,-1.22932 1.7172,-1.91228 1.0732,-0.70247 2.3805,-0.70247 0.8391,0 1.5416,0.25367 0.7024,0.25367 1.2098,0.64393 0.5268,0.39026 0.8,0.80003 0.2927,0.39026 0.2927,0.66345 l -0.7025,0.25367 v -5.22949 q 0,-0.50734 0.3318,-0.83906 0.3317,-0.35124 0.839,-0.35124 z m -3.9416,12.48833 q 0.8586,0 1.5025,-0.42928 0.6439,-0.42929 0.9952,-1.17078 0.3707,-0.7415 0.3707,-1.65861 0,-0.93662 -0.3707,-1.67812 -0.3513,-0.74149 -0.9952,-1.17078 -0.6439,-0.42929 -1.5025,-0.42929 -0.8391,0 -1.483,0.42929 -0.6439,0.42929 -1.0147,1.17078 -0.3512,0.7415 -0.3512,1.67812 0,0.91711 0.3512,1.65861 0.3708,0.74149 1.0147,1.17078 0.6439,0.42928 1.483,0.42928 z m -11.3782,1.9513 q -0.5074,0 -0.8391,-0.33172 -0.3317,-0.35123 -0.3317,-0.85857 v -8.05887 q 0,-0.50734 0.3317,-0.83906 0.3317,-0.35124 0.8391,-0.35124 0.5073,0 0.839,0.35124 0.3318,0.33172 0.3318,0.83906 v 1.83422 l -0.1366,-1.30737 q 0.2146,-0.46831 0.5463,-0.81955 0.3513,-0.37075 0.7805,-0.6049 0.4293,-0.25367 0.9172,-0.37075 0.4878,-0.11708 0.9756,-0.11708 0.5854,0 0.9757,0.33172 0.4097,0.33172 0.4097,0.78052 0,0.64393 -0.3317,0.93663 -0.3317,0.27318 -0.722,0.27318 -0.3707,0 -0.6829,-0.13659 -0.2927,-0.13659 -0.683,-0.13659 -0.3512,0 -0.722,0.17562 -0.3512,0.1561 -0.6634,0.50733 -0.2927,0.35124 -0.4878,0.87809 -0.1756,0.50734 -0.1756,1.20981 v 4.62458 q 0,0.50734 -0.3318,0.85857 -0.3317,0.33172 -0.839,0.33172 z m -4.8792,-10.63459 q 0.5073,0 0.8391,0.33172 0.3317,0.33172 0.3317,0.85858 v 8.254 q 0,0.50734 -0.3317,0.85857 -0.3318,0.33172 -0.8391,0.33172 -0.5073,0 -0.8391,-0.33172 -0.3317,-0.35123 -0.3317,-0.85857 v -0.95614 l 0.4293,0.17562 q 0,0.25367 -0.2732,0.62442 -0.2732,0.35123 -0.7415,0.70247 -0.4683,0.35123 -1.1122,0.6049 -0.6244,0.23415 -1.3659,0.23415 -1.3464,0 -2.4391,-0.68295 -1.0928,-0.70247 -1.7367,-1.91228 -0.6244,-1.22932 -0.6244,-2.80987 0,-1.60007 0.6244,-2.80987 0.6439,-1.22932 1.7171,-1.91228 1.0733,-0.70247 2.3806,-0.70247 0.8391,0 1.5416,0.25367 0.7024,0.25367 1.2098,0.64393 0.5268,0.39026 0.8,0.80003 0.2927,0.39026 0.2927,0.66345 l -0.7025,0.25367 v -1.42445 q 0,-0.50734 0.3317,-0.83906 0.3318,-0.35124 0.8391,-0.35124 z m -3.9416,8.68329 q 0.8585,0 1.5025,-0.42928 0.6439,-0.42929 0.9951,-1.17078 0.3708,-0.7415 0.3708,-1.65861 0,-0.93662 -0.3708,-1.67812 -0.3512,-0.74149 -0.9951,-1.17078 -0.644,-0.42929 -1.5025,-0.42929 -0.8391,0 -1.483,0.42929 -0.6439,0.42929 -1.0147,1.17078 -0.3512,0.7415 -0.3512,1.67812 0,0.91711 0.3512,1.65861 0.3708,0.74149 1.0147,1.17078 0.6439,0.42928 1.483,0.42928 z m -6.4448,-3.25867 q 0,1.60007 -0.722,2.82939 -0.7025,1.2098 -1.9123,1.89276 -1.1903,0.68295 -2.6732,0.68295 -1.483,0 -2.6928,-0.68295 -1.1903,-0.68296 -1.9123,-1.89276 -0.7025,-1.22932 -0.7025,-2.82939 0,-1.60007 0.7025,-2.80987 0.722,-1.22932 1.9123,-1.91228 1.2098,-0.70247 2.6928,-0.70247 1.4829,0 2.6732,0.70247 1.2098,0.68296 1.9123,1.91228 0.722,1.2098 0.722,2.80987 z m -2.3416,0 q 0,-0.99516 -0.4097,-1.71715 -0.3903,-0.74149 -1.0733,-1.15126 -0.6634,-0.40978 -1.4829,-0.40978 -0.8196,0 -1.5025,0.40978 -0.6635,0.40977 -1.0733,1.15126 -0.3902,0.72199 -0.3902,1.71715 0,0.97565 0.3902,1.71715 0.4098,0.72198 1.0733,1.13175 0.6829,0.40977 1.5025,0.40977 0.8195,0 1.4829,-0.40977 0.683,-0.40977 1.0733,-1.13175 0.4097,-0.7415 0.4097,-1.71715 z m -14.4405,-5.42462 q 1.3659,0 2.4391,0.70247 1.0927,0.68296 1.7172,1.89276 0.6439,1.20981 0.6439,2.80988 0,1.60006 -0.6439,2.82938 -0.6245,1.20981 -1.6977,1.91228 -1.0537,0.68295 -2.3806,0.68295 -0.7805,0 -1.4634,-0.25366 -0.683,-0.25367 -1.2098,-0.64393 -0.5074,-0.39026 -0.8001,-0.78052 -0.2732,-0.40978 -0.2732,-0.68296 l 0.6049,-0.25367 v 1.42445 q 0,0.50734 -0.3317,0.85857 -0.3317,0.33172 -0.839,0.33172 -0.5074,0 -0.8391,-0.33172 -0.3317,-0.33172 -0.3317,-0.85857 v -12.25417 q 0,-0.50734 0.3317,-0.83906 0.3317,-0.35124 0.8391,-0.35124 0.5073,0 0.839,0.35124 0.3317,0.33172 0.3317,0.83906 v 4.9563 l -0.3317,-0.17561 q 0,-0.25367 0.2732,-0.60491 0.2732,-0.37074 0.7415,-0.72198 0.4683,-0.37075 1.0732,-0.6049 0.6244,-0.23416 1.3074,-0.23416 z m -0.2927,2.14643 q -0.8586,0 -1.5025,0.42929 -0.6439,0.42929 -1.0147,1.17078 -0.3512,0.72198 -0.3512,1.65861 0,0.91711 0.3512,1.67812 0.3708,0.74149 1.0147,1.17078 0.6439,0.42928 1.5025,0.42928 0.8586,0 1.483,-0.42928 0.6439,-0.42929 0.9951,-1.17078 0.3708,-0.76101 0.3708,-1.67812 0,-0.93663 -0.3708,-1.65861 -0.3512,-0.74149 -0.9951,-1.17078 -0.6244,-0.42929 -1.483,-0.42929 z m -8.8208,-5.95147 q 0.5073,0 0.8391,0.33173 0.3317,0.33172 0.3317,0.85857 v 12.05904 q 0,0.50734 -0.3317,0.85857 -0.3318,0.33172 -0.8391,0.33172 -0.5073,0 -0.8391,-0.33172 -0.3317,-0.35123 -0.3317,-0.85857 v -0.95614 l 0.4293,0.17562 q 0,0.25367 -0.2732,0.62442 -0.2732,0.35123 -0.7415,0.70247 -0.4683,0.35123 -1.1122,0.6049 -0.6244,0.23415 -1.3659,0.23415 -1.3464,0 -2.4392,-0.68295 -1.0927,-0.70247 -1.7366,-1.91228 -0.6244,-1.22932 -0.6244,-2.80987 0,-1.60007 0.6244,-2.80987 0.6439,-1.22932 1.7171,-1.91228 1.0733,-0.70247 2.3806,-0.70247 0.8391,0 1.5416,0.25367 0.7024,0.25367 1.2098,0.64393 0.5268,0.39026 0.8,0.80003 0.2927,0.39026 0.2927,0.66345 l -0.7025,0.25367 v -5.22949 q 0,-0.50734 0.3317,-0.83906 0.3318,-0.35124 0.8391,-0.35124 z m -3.9416,12.48833 q 0.8585,0 1.5025,-0.42928 0.6439,-0.42929 0.9951,-1.17078 0.3708,-0.7415 0.3708,-1.65861 0,-0.93662 -0.3708,-1.67812 -0.3512,-0.74149 -0.9951,-1.17078 -0.644,-0.42929 -1.5025,-0.42929 -0.8391,0 -1.483,0.42929 -0.6439,0.42929 -1.0147,1.17078 -0.3512,0.7415 -0.3512,1.67812 0,0.91711 0.3512,1.65861 0.3708,0.74149 1.0147,1.17078 0.6439,0.42928 1.483,0.42928 z m -6.4448,-3.25867 q 0,1.60007 -0.722,2.82939 -0.7025,1.2098 -1.9123,1.89276 -1.1903,0.68295 -2.6733,0.68295 -1.4829,0 -2.6928,-0.68295 -1.1902,-0.68296 -1.9122,-1.89276 -0.7025,-1.22932 -0.7025,-2.82939 0,-1.60007 0.7025,-2.80987 0.722,-1.22932 1.9122,-1.91228 1.2099,-0.70247 2.6928,-0.70247 1.483,0 2.6733,0.70247 1.2098,0.68296 1.9123,1.91228 0.722,1.2098 0.722,2.80987 z m -2.3416,0 q 0,-0.99516 -0.4097,-1.71715 -0.3903,-0.74149 -1.0733,-1.15126 -0.6634,-0.40978 -1.483,-0.40978 -0.8195,0 -1.5025,0.40978 -0.6634,0.40977 -1.0732,1.15126 -0.3902,0.72199 -0.3902,1.71715 0,0.97565 0.3902,1.71715 0.4098,0.72198 1.0732,1.13175 0.683,0.40977 1.5025,0.40977 0.8196,0 1.483,-0.40977 0.683,-0.40977 1.0733,-1.13175 0.4097,-0.7415 0.4097,-1.71715 z m -9.6254,0 q 0,1.60007 -0.722,2.82939 -0.7024,1.2098 -1.9122,1.89276 -1.1903,0.68295 -2.6733,0.68295 -1.483,0 -2.6928,-0.68295 -1.1903,-0.68296 -1.9123,-1.89276 -0.7025,-1.22932 -0.7025,-2.82939 0,-1.60007 0.7025,-2.80987 0.722,-1.22932 1.9123,-1.91228 1.2098,-0.70247 2.6928,-0.70247 1.483,0 2.6733,0.70247 1.2098,0.68296 1.9122,1.91228 0.722,1.2098 0.722,2.80987 z m -2.3415,0 q 0,-0.99516 -0.4098,-1.71715 -0.3903,-0.74149 -1.0732,-1.15126 -0.6635,-0.40978 -1.483,-0.40978 -0.8196,0 -1.5025,0.40978 -0.6635,0.40977 -1.0732,1.15126 -0.3903,0.72199 -0.3903,1.71715 0,0.97565 0.3903,1.71715 0.4097,0.72198 1.0732,1.13175 0.6829,0.40977 1.5025,0.40977 0.8195,0 1.483,-0.40977 0.6829,-0.40977 1.0732,-1.13175 0.4098,-0.7415 0.4098,-1.71715 z m -20.1936,-5.42462 q 1.5611,0 2.3026,0.76101 0.7415,0.74149 0.9756,1.93179 l -0.3317,-0.17562 0.1561,-0.31221 q 0.2342,-0.4488 0.722,-0.95614 0.4878,-0.52685 1.1708,-0.87808 0.7024,-0.37075 1.561,-0.37075 1.4049,0 2.1269,0.60491 0.7415,0.6049 1.0147,1.61958 0.2732,0.99516 0.2732,2.22448 v 4.99533 q 0,0.50734 -0.3317,0.85857 -0.3318,0.33172 -0.8391,0.33172 -0.5073,0 -0.8391,-0.33172 -0.3317,-0.35123 -0.3317,-0.85857 v -4.99533 q 0,-0.64393 -0.1561,-1.15127 -0.1561,-0.52685 -0.5659,-0.83906 -0.4097,-0.31221 -1.1707,-0.31221 -0.7415,0 -1.2684,0.31221 -0.5268,0.31221 -0.8,0.83906 -0.2537,0.50734 -0.2537,1.15127 v 4.99533 q 0,0.50734 -0.3317,0.85857 -0.3317,0.33172 -0.8391,0.33172 -0.5073,0 -0.839,-0.33172 -0.3318,-0.35123 -0.3318,-0.85857 v -4.99533 q 0,-0.64393 -0.1561,-1.15127 -0.1561,-0.52685 -0.5658,-0.83906 -0.4098,-0.31221 -1.1708,-0.31221 -0.7415,0 -1.2684,0.31221 -0.5268,0.31221 -0.8,0.83906 -0.2537,0.50734 -0.2537,1.15127 v 4.99533 q 0,0.50734 -0.3317,0.85857 -0.3317,0.33172 -0.839,0.33172 -0.5074,0 -0.8391,-0.33172 -0.3317,-0.35123 -0.3317,-0.85857 v -8.05887 q 0,-0.50734 0.3317,-0.83906 0.3317,-0.35124 0.8391,-0.35124 0.5073,0 0.839,0.35124 0.3317,0.33172 0.3317,0.83906 v 0.83906 l -0.2927,-0.0585 q 0.1757,-0.33172 0.4879,-0.70247 0.3122,-0.39026 0.761,-0.72198 0.4488,-0.33172 0.9951,-0.52685 0.5464,-0.21465 1.1903,-0.21465 z")
    moodboard_path__gr.attr({
        id:    "moodboard_path__gr",
    })
    moodboard_path.fill('#ac3323ff')
    moodboard_path.move(screen_width_in_px/2-moodboard_path.bbox().width-240,screen_height/2-moodboard_path.bbox().height-150)
    //moodboard_path.rotate(-90)
    moodboard_path.scale(5.75)
    moodboard_path.attr({id: 'moodboard_path'})

    //-----------------QUOTES------------------------
    var paragraph = text_gr.text(function(add){
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine() 
        add.tspan('').newLine()
        add.tspan('-Mary Lou Cook').newLine().dx(270).font({size:'19'})
    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#863845ff',
            family:  'Quicksand',
            size:    23
        })    
    paragraph.attr({
        x: screen_width_in_px/2-paragraph.bbox().width-180,
        y: screen_height/2-105
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
