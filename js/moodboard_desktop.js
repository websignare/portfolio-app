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

    var screen_width_in_px  = window.innerWidth;
    var screen_height       = window.innerHeight; 

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

    var moodboard__desktop_info = moodboard__create_responsive(bar_gr);
    moodboard_animate__activate(moodboard__desktop_info, screen_width_in_px, screen_height)
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
        "background-color": '#ece8e7f3',
        "position":         "relative",
        "height":           screen_height+screen_height/5,
        "width":            screen_width_in_px
    }); 

    $("#moodboard #headline__info").css({                    
        "background-color": '#872529ff',
        "position":         "relative",
        "height":           screen_height/2,
        "width":            screen_width_in_px,
        
    }); 

    var container    = SVG().addTo("#moodboard #wrapper").size(screen_width_in_px, screen_height+screen_height/5)
    var container_gr = container.nested()   

    var headline_canvas     = SVG().addTo("#moodboard #headline__info").size(screen_width_in_px, screen_height/2)
    var headline_canvas__gr = headline_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //moodboard__mobile__activate(bar_gr)
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
        var moodboard__top_rects = moodboard__images__desktop(moodboard__background_gr, screen_width_in_px, screen_height)
        var moodboard_text_info = moodboard_text__desktop(container_gr, screen_width_in_px, screen_height)

        moodboard__headline__info(headline_canvas__gr, screen_width_in_px, screen_height)
        masonry(screen_width_in_px, screen_height)
        moodboard__video(screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px, screen_height)

        // RETURNED INFO
        var moodboard__desktop_info = {
            "moodboard__top_rects": moodboard__top_rects,
            "moodboard_text_info":  moodboard_text_info
        }

        return moodboard__desktop_info
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
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#921a1fff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#921a1fff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#921a1fff', linecap: 'round' })


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

    square_brackets_symbol.fill('#d2d1d1ff')
    square_brackets_symbol.move(screen_width_in_px/2-square_brackets_symbol.bbox().width-100,screen_height/2-square_brackets_symbol.bbox().height/2+15)
    //square_brackets_symbol.rotate(180)
    square_brackets_symbol.scale(5.5)
    square_brackets_symbol.attr({id: 'square_brackets_symbol'})

    square_brackets_symbol_gr.attr({
        id: "square_brackets_symbol_gr"
    })

    // SYMBOL ROTATION

    function rotatePositive(){
        square_brackets_symbol_gr.animate({duration: 4000}).ease(">").rotate(10).after(rotateNegative)
    }
    function rotateNegative(){
        square_brackets_symbol_gr.animate({duration: 4000}).ease("<").rotate(-10).after(rotatePositive)
    }
    rotatePositive()

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
                fill: "#e77e2efe",
                x: a_rect_x+a_rect_width+800,
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
                fill: "#e77e2efe",
                x: 0,
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
                fill: "#e77e2efe",
                x: c_rect_x+c_rect_width+800,
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
                fill: "#e77e2efe",
                x: 0-screen_width_in_px-200,
                y: d_rect_y
            })

        var moodboard__top_rects = {
            "a_rect":        a_rect,
            "a_rect_x":      a_rect_x,
            "a_rect_width":  a_rect_width,
            "b_rect":        b_rect,
            "b_rect_x":      b_rect_x,
            "b_rect_width":  b_rect_width,
            "c_rect":        c_rect,
            "c_rect_x":      c_rect_x,
            "c_rect_width":  c_rect_width,
            "d_rect":        d_rect,
            "d_rect_x":      d_rect_x,
            "d_rect_width":  d_rect_width,
            "rect_width":    rect_width
        }
    
        return moodboard__top_rects
}

//----------------------------------------------TEXT----------------------------------------------------------------
function moodboard_text__desktop(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()

    //---------------------MOODBOARD-TITLE--------------------
    var moodboard_path__gr = text_gr.nested()
    var moodboard_path = moodboard_path__gr.path("m -2387.6125,-2330.5206 q 0.9278,0 1.5343,0.6066 0.6066,0.6066 0.6066,1.57 v 22.0514 q 0,0.9278 -0.6066,1.57 -0.6065,0.6066 -1.5343,0.6066 -0.9277,0 -1.5343,-0.6066 -0.6066,-0.6422 -0.6066,-1.57 v -1.7484 l 0.785,0.3212 q 0,0.4638 -0.4995,1.1418 -0.4996,0.6423 -1.3559,1.2845 -0.8564,0.6423 -2.0339,1.1062 -1.1418,0.4282 -2.4978,0.4282 -2.462,0 -4.4602,-1.2489 -1.9982,-1.2846 -3.1757,-3.4968 -1.1418,-2.248 -1.1418,-5.1382 0,-2.926 1.1418,-5.1382 1.1775,-2.248 3.14,-3.4969 1.9625,-1.2845 4.3532,-1.2845 1.5343,0 2.8189,0.4638 1.2845,0.4639 2.2123,1.1775 0.9634,0.7137 1.4629,1.463 0.5353,0.7136 0.5353,1.2132 l -1.2846,0.4639 v -9.5628 q 0,-0.9277 0.6066,-1.5343 0.6066,-0.6423 1.5343,-0.6423 z m -7.2077,22.8364 q 1.57,0 2.7475,-0.785 1.1775,-0.785 1.8198,-2.1409 0.6779,-1.3559 0.6779,-3.0329 0,-1.7128 -0.6779,-3.0687 -0.6423,-1.3559 -1.8198,-2.1409 -1.1775,-0.785 -2.7475,-0.785 -1.5343,0 -2.7119,0.785 -1.1775,0.785 -1.8554,2.1409 -0.6423,1.3559 -0.6423,3.0687 0,1.677 0.6423,3.0329 0.6779,1.3559 1.8554,2.1409 1.1776,0.785 2.7119,0.785 z m -20.8065,3.5682 q -0.9277,0 -1.5343,-0.6066 -0.6066,-0.6422 -0.6066,-1.57 v -14.7366 q 0,-0.9277 0.6066,-1.5343 0.6066,-0.6423 1.5343,-0.6423 0.9277,0 1.5343,0.6423 0.6066,0.6066 0.6066,1.5343 v 3.3541 l -0.2498,-2.3907 q 0.3925,-0.8564 0.9991,-1.4986 0.6423,-0.678 1.4273,-1.1062 0.785,-0.4638 1.6771,-0.6779 0.892,-0.2141 1.7841,-0.2141 1.0704,0 1.7841,0.6066 0.7493,0.6066 0.7493,1.4272 0,1.1776 -0.6066,1.7128 -0.6066,0.4995 -1.3202,0.4995 -0.678,0 -1.2489,-0.2497 -0.5352,-0.2498 -1.2489,-0.2498 -0.6423,0 -1.3202,0.3211 -0.6423,0.2855 -1.2132,0.9277 -0.5352,0.6423 -0.892,1.6057 -0.3212,0.9278 -0.3212,2.2123 v 8.4566 q 0,0.9278 -0.6066,1.57 -0.6066,0.6066 -1.5343,0.6066 z m -8.9222,-19.4466 q 0.9278,0 1.5344,0.6066 0.6066,0.6066 0.6066,1.57 v 15.0934 q 0,0.9278 -0.6066,1.57 -0.6066,0.6066 -1.5344,0.6066 -0.9277,0 -1.5343,-0.6066 -0.6066,-0.6422 -0.6066,-1.57 v -1.7484 l 0.785,0.3212 q 0,0.4638 -0.4995,1.1418 -0.4996,0.6423 -1.3559,1.2845 -0.8564,0.6423 -2.0339,1.1062 -1.1418,0.4282 -2.4977,0.4282 -2.4621,0 -4.4603,-1.2489 -1.9982,-1.2846 -3.1757,-3.4968 -1.1418,-2.248 -1.1418,-5.1382 0,-2.926 1.1418,-5.1382 1.1775,-2.248 3.14,-3.4969 1.9625,-1.2845 4.3532,-1.2845 1.5344,0 2.8189,0.4638 1.2846,0.4639 2.2123,1.1775 0.9634,0.7137 1.4629,1.463 0.5353,0.7136 0.5353,1.2132 l -1.2846,0.4639 v -2.6048 q 0,-0.9278 0.6066,-1.5343 0.6066,-0.6423 1.5343,-0.6423 z m -7.2077,15.8784 q 1.57,0 2.7475,-0.785 1.1775,-0.785 1.8198,-2.1409 0.6779,-1.3559 0.6779,-3.0329 0,-1.7128 -0.6779,-3.0687 -0.6423,-1.3559 -1.8198,-2.1409 -1.1775,-0.785 -2.7475,-0.785 -1.5343,0 -2.7118,0.785 -1.1775,0.785 -1.8555,2.1409 -0.6423,1.3559 -0.6423,3.0687 0,1.677 0.6423,3.0329 0.678,1.3559 1.8555,2.1409 1.1775,0.785 2.7118,0.785 z m -11.7851,-5.9588 q 0,2.9259 -1.3202,5.1738 -1.2846,2.2123 -3.4968,3.4612 -2.1766,1.2489 -4.8885,1.2489 -2.7118,0 -4.9241,-1.2489 -2.1766,-1.2489 -3.4968,-3.4612 -1.2846,-2.2479 -1.2846,-5.1738 0,-2.926 1.2846,-5.1382 1.3202,-2.248 3.4968,-3.4969 2.2123,-1.2845 4.9241,-1.2845 2.7119,0 4.8885,1.2845 2.2122,1.2489 3.4968,3.4969 1.3202,2.2122 1.3202,5.1382 z m -4.2818,0 q 0,-1.8198 -0.7493,-3.1401 -0.7137,-1.3559 -1.9625,-2.1052 -1.2132,-0.7493 -2.7119,-0.7493 -1.4986,0 -2.7475,0.7493 -1.2132,0.7493 -1.9625,2.1052 -0.7136,1.3203 -0.7136,3.1401 0,1.7841 0.7136,3.14 0.7493,1.3202 1.9625,2.0695 1.2489,0.7493 2.7475,0.7493 1.4987,0 2.7119,-0.7493 1.2488,-0.7493 1.9625,-2.0695 0.7493,-1.3559 0.7493,-3.14 z m -26.4063,-9.9196 q 2.4977,0 4.4602,1.2845 1.9982,1.2489 3.14,3.4612 1.1775,2.2123 1.1775,5.1382 0,2.9259 -1.1775,5.1739 -1.1418,2.2122 -3.1043,3.4968 -1.9268,1.2489 -4.3532,1.2489 -1.4273,0 -2.6761,-0.4639 -1.2489,-0.4639 -2.2123,-1.1775 -0.9278,-0.7137 -1.463,-1.4273 -0.4995,-0.7493 -0.4995,-1.2489 l 1.1061,-0.4638 v 2.6048 q 0,0.9277 -0.6066,1.57 -0.6066,0.6066 -1.5343,0.6066 -0.9277,0 -1.5343,-0.6066 -0.6066,-0.6066 -0.6066,-1.57 v -22.4083 q 0,-0.9277 0.6066,-1.5343 0.6066,-0.6423 1.5343,-0.6423 0.9277,0 1.5343,0.6423 0.6066,0.6066 0.6066,1.5343 v 9.0632 l -0.6066,-0.3211 q 0,-0.4639 0.4996,-1.1062 0.4995,-0.6779 1.3559,-1.3202 0.8563,-0.678 1.9625,-1.1061 1.1418,-0.4282 2.3907,-0.4282 z m -0.5353,3.925 q -1.57,0 -2.7475,0.785 -1.1775,0.785 -1.8554,2.1409 -0.6423,1.3202 -0.6423,3.033 0,1.677 0.6423,3.0686 0.6779,1.3559 1.8554,2.1409 1.1775,0.785 2.7475,0.785 1.57,0 2.7119,-0.785 1.1775,-0.785 1.8197,-2.1409 0.678,-1.3916 0.678,-3.0686 0,-1.7128 -0.678,-3.033 -0.6422,-1.3559 -1.8197,-2.1409 -1.1419,-0.785 -2.7119,-0.785 z m -16.1299,-10.883 q 0.9278,0 1.5344,0.6066 0.6066,0.6066 0.6066,1.57 v 22.0514 q 0,0.9278 -0.6066,1.57 -0.6066,0.6066 -1.5344,0.6066 -0.9277,0 -1.5343,-0.6066 -0.6066,-0.6422 -0.6066,-1.57 v -1.7484 l 0.785,0.3212 q 0,0.4638 -0.4995,1.1418 -0.4996,0.6423 -1.3559,1.2845 -0.8564,0.6423 -2.0339,1.1062 -1.1418,0.4282 -2.4977,0.4282 -2.4621,0 -4.4603,-1.2489 -1.9982,-1.2846 -3.1757,-3.4968 -1.1418,-2.248 -1.1418,-5.1382 0,-2.926 1.1418,-5.1382 1.1775,-2.248 3.14,-3.4969 1.9625,-1.2845 4.3532,-1.2845 1.5344,0 2.8189,0.4638 1.2846,0.4639 2.2123,1.1775 0.9634,0.7137 1.4629,1.463 0.5353,0.7136 0.5353,1.2132 l -1.2846,0.4639 v -9.5628 q 0,-0.9277 0.6066,-1.5343 0.6066,-0.6423 1.5343,-0.6423 z m -7.2077,22.8364 q 1.57,0 2.7475,-0.785 1.1775,-0.785 1.8198,-2.1409 0.6779,-1.3559 0.6779,-3.0329 0,-1.7128 -0.6779,-3.0687 -0.6423,-1.3559 -1.8198,-2.1409 -1.1775,-0.785 -2.7475,-0.785 -1.5343,0 -2.7118,0.785 -1.1775,0.785 -1.8555,2.1409 -0.6423,1.3559 -0.6423,3.0687 0,1.677 0.6423,3.0329 0.678,1.3559 1.8555,2.1409 1.1775,0.785 2.7118,0.785 z m -11.7851,-5.9588 q 0,2.9259 -1.3202,5.1738 -1.2846,2.2123 -3.4969,3.4612 -2.1766,1.2489 -4.8884,1.2489 -2.7118,0 -4.9241,-1.2489 -2.1766,-1.2489 -3.4968,-3.4612 -1.2846,-2.2479 -1.2846,-5.1738 0,-2.926 1.2846,-5.1382 1.3202,-2.248 3.4968,-3.4969 2.2123,-1.2845 4.9241,-1.2845 2.7118,0 4.8884,1.2845 2.2123,1.2489 3.4969,3.4969 1.3202,2.2122 1.3202,5.1382 z m -4.2818,0 q 0,-1.8198 -0.7493,-3.1401 -0.7137,-1.3559 -1.9626,-2.1052 -1.2131,-0.7493 -2.7118,-0.7493 -1.4986,0 -2.7475,0.7493 -1.2132,0.7493 -1.9625,2.1052 -0.7136,1.3203 -0.7136,3.1401 0,1.7841 0.7136,3.14 0.7493,1.3202 1.9625,2.0695 1.2489,0.7493 2.7475,0.7493 1.4987,0 2.7118,-0.7493 1.2489,-0.7493 1.9626,-2.0695 0.7493,-1.3559 0.7493,-3.14 z m -17.6013,0 q 0,2.9259 -1.3202,5.1738 -1.2845,2.2123 -3.4968,3.4612 -2.1766,1.2489 -4.8884,1.2489 -2.7119,0 -4.9242,-1.2489 -2.1765,-1.2489 -3.4968,-3.4612 -1.2845,-2.2479 -1.2845,-5.1738 0,-2.926 1.2845,-5.1382 1.3203,-2.248 3.4968,-3.4969 2.2123,-1.2845 4.9242,-1.2845 2.7118,0 4.8884,1.2845 2.2123,1.2489 3.4968,3.4969 1.3202,2.2122 1.3202,5.1382 z m -4.2818,0 q 0,-1.8198 -0.7493,-3.1401 -0.7136,-1.3559 -1.9625,-2.1052 -1.2132,-0.7493 -2.7118,-0.7493 -1.4987,0 -2.7476,0.7493 -1.2131,0.7493 -1.9625,2.1052 -0.7136,1.3203 -0.7136,3.1401 0,1.7841 0.7136,3.14 0.7494,1.3202 1.9625,2.0695 1.2489,0.7493 2.7476,0.7493 1.4986,0 2.7118,-0.7493 1.2489,-0.7493 1.9625,-2.0695 0.7493,-1.3559 0.7493,-3.14 z m -40.6545,-15.486 q 0.4995,0 1.0347,0.2855 0.5709,0.2497 0.8564,0.6779 l 8.6707,13.3451 -1.7841,-0.071 8.8848,-13.2737 q 0.678,-0.9634 1.7484,-0.9634 0.8564,0 1.5344,0.6066 0.6779,0.6066 0.6779,1.57 v 20.6598 q 0,0.9278 -0.6066,1.57 -0.6066,0.6066 -1.6057,0.6066 -0.9991,0 -1.6413,-0.6066 -0.6066,-0.6422 -0.6066,-1.57 v -16.8062 l 1.3916,0.3212 -7.2791,11.0971 q -0.3212,0.3925 -0.8207,0.6779 -0.4639,0.2855 -0.9634,0.2498 -0.4639,0.036 -0.9635,-0.2498 -0.4638,-0.2854 -0.785,-0.6779 l -6.8152,-10.776 0.9277,-1.8911 v 18.055 q 0,0.9278 -0.5709,1.57 -0.5709,0.6066 -1.4986,0.6066 -0.8921,0 -1.463,-0.6066 -0.5709,-0.6422 -0.5709,-1.57 v -20.6598 q 0,-0.8921 0.6423,-1.5343 0.6779,-0.6423 1.6057,-0.6423 z")
    moodboard_path__gr.attr({
        id:    "moodboard_path__gr",
    })
    moodboard_path.fill('#921a1fff')
    moodboard_path.move(screen_width_in_px/2-moodboard_path.bbox().width-330,screen_height/2-moodboard_path.bbox().height-150)
    //moodboard_path.rotate(-90)
    moodboard_path.scale(3)
    moodboard_path.attr({id: 'moodboard_path'})
    moodboard_path__gr.attr({
        x:       -500,
        opacity: 0.0
    })

    //-----------------QUOTES------------------------
    var paragraph = text_gr.text(function(add){
        add.tspan('Creativity is inventing, experimenting, ').newLine()
        add.tspan('growing, taking risk, breaking rules, ').newLine()
        add.tspan('making mistakes and having fun.').newLine() 
        add.tspan('').newLine()
        add.tspan('-Mary Lou Cook').newLine().dx(230).font({size:'1rem'})
    })
        .font({
            opacity: 1.0,
            weight:  600,
            fill:    '#921a1fff',
            family:  'Open Sans',
            size:    "1.2rem"
        })    
    paragraph.attr({
        x:       screen_width_in_px/2-paragraph.bbox().width-500,
        y:       screen_height/2-50,
        opacity: 0.0
    })   

    var moodboard_text_info = {
        "moodboard_path__gr": moodboard_path__gr,
        "paragraph":          paragraph,
    }
    
    return moodboard_text_info;

}

function moodboard__headline__info(parent_gr, screen_width_in_px, screen_height){
    var headline_gr = parent_gr.nested()

    var inspiration_title = headline_gr.text(function(text_element){
        text_element.tspan('inspiration')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#dc711ce2',
            family:  'Quicksand',
            size:    "10vw"
        })    
    inspiration_title.attr({
        x: headline_gr.bbox().width/2-inspiration_title.bbox().height/2+100,
        y: headline_gr.bbox().height/2+inspiration_title.bbox().height+30
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
        "background-color": '#872529ff',
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
        "background-color": '#5d0e11ff',
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

function moodboard_animate__activate(moodboard__desktop_info, screen_width_in_px, screen_height){

    var moodboard_path__gr = moodboard__desktop_info["moodboard_text_info"]["moodboard_path__gr"]
    var paragraph          = moodboard__desktop_info["moodboard_text_info"]["paragraph"]
    var rect_width         = moodboard__desktop_info["moodboard__top_rects"]["rect_width"]
    var a_rect             = moodboard__desktop_info["moodboard__top_rects"]["a_rect"]
    var a_rect_x           = moodboard__desktop_info["moodboard__top_rects"]["a_rect_x"]
    var a_rect_width       = moodboard__desktop_info["moodboard__top_rects"]["a_rect_width"]
    var b_rect             = moodboard__desktop_info["moodboard__top_rects"]["b_rect"]
    var b_rect_x           = moodboard__desktop_info["moodboard__top_rects"]["b_rect_x"]
    var b_rect_width       = moodboard__desktop_info["moodboard__top_rects"]["b_rect_width"]
    var c_rect             = moodboard__desktop_info["moodboard__top_rects"]["c_rect"]
    var c_rect_x           = moodboard__desktop_info["moodboard__top_rects"]["c_rect_x"]
    var c_rect_width       = moodboard__desktop_info["moodboard__top_rects"]["c_rect_width"]
    var d_rect             = moodboard__desktop_info["moodboard__top_rects"]["d_rect"]
    var d_rect_x           = moodboard__desktop_info["moodboard__top_rects"]["d_rect_x"]
    var d_rect_width       = moodboard__desktop_info["moodboard__top_rects"]["d_rect_width"]

    moodboard_path__gr.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({x: 0, opacity: 1.0})

   a_rect.animate({
        delay: 650,
        duration:500
    }).ease('>')
    .attr({
        x: a_rect_x+a_rect_width,
    })
    b_rect.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        x: b_rect_x-rect_width,
    })
    c_rect.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        x: c_rect_x+c_rect_width,
    })
    d_rect.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        x: d_rect_x-screen_width_in_px,
    })
    
    paragraph.animate({
        delay: 550,
        duration:500
    }).ease('>')
    .attr({
        x: screen_width_in_px/2-paragraph.bbox().width-230,
        opacity: 1.0
    })

}