$(document).ready(function(){
    main();
})

// IMPORTANT!! - this variable memorizes which page is the current page
var current_page = "home_page"

function main() {
    

    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);
    
    hp__activate(bar_gr);

    $(window).resize(function() {
        
        hp__deactivate();

        hp__activate(bar_gr);
    });
}


function hp__activate(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    document.title = "home page"
    window.history.pushState({page: "home_page"},"", "#home_page");

    // BROWSER_BACK_BUTTON
    window.onpopstate = function(event) {
        // alert("location: " + document.location + ", state: " + JSON.stringify(event.state));


        var target_page_name = event.state.page;
        console.log("88888888888888888888888888888888888888888")
        console.log(target_page_name)


        //-----------------------------
        // RUN_PAGE_TRANSITION
        run_page_transition(target_page_name, "1_plane_swipe_to_left", current_page, bar_gr,
            // on_complete - called when the page_transition completes (X number of seconds in the future)
            function() {

                // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                //               to point to the new page name.
                current_page = target_page_name;

            });

        //-----------------------------
    };


    hp__create_responsive(bar_gr);
}

function hp__deactivate() {

    $("body #hp").remove();
    $("#hp #wrapper").remove();
    $("#contact_wrapper").remove();

}


function hp__create_responsive(bar_gr) {
    $("body").append(`
        <div id="hp">
            <div id="wrapper"></div>
        </div>
    `);

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    $("#hp #wrapper").css({                    
        "background-color": '#ece8e7f3',
        "position":         "relative",
       // "top":              current_scroll_y+"px",
        "width":            screen_width_in_px
    });  

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        var hp__mobile_info = hp__mobile__activate(bar_gr)

        hp_top__mobile__animate(hp__mobile_info, screen_width_in_px, screen_height)

    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        

    }

    else {
        var desktop__container    = SVG().addTo("#hp #wrapper").size(screen_width_in_px, screen_height)
        var desktop__container_gr = desktop__container.nested()   

        var home_layout_gr      = hp__create_background__desktop(desktop__container_gr, screen_width_in_px, screen_height)
        var white_background_gr = home_layout_gr.find("#white_background_gr")

        nevena_create_text__desktop(desktop__container_gr, screen_width_in_px, screen_height)
        section_images__desktop(white_background_gr)
        var hp__buttons__desktop_info = buttons(desktop__container_gr, bar_gr, screen_height, screen_width_in_px)
        create_contact_section(screen_width_in_px, screen_height)

        hp_top__animate(hp__buttons__desktop_info, screen_width_in_px, screen_height)


    }


}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function hp__create_background__desktop(parent_gr, screen_width_in_px, screen_height){

    var home_layout_gr = parent_gr.nested().attr({id: 'home_layout_gr'})

    var home_orange_background_gr = home_layout_gr.nested()
        .attr({
            id: "home_orange_background_gr",
        })

    var orange_background = home_orange_background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ece8e7f3')
        .attr({
            id:      "orange_background",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })

    var white_background_gr = home_orange_background_gr.nested().attr({id :"white_background_gr"})

    var white_background = white_background_gr.rect(screen_width_in_px-100,screen_height-100)
    .fill('#ece8e7f3')
    .attr({
        id:      "white_background",
        opacity: 1.0,
        'x':     50,
        'y':     50
    })
    return home_layout_gr;

}

//----------------------------------------------TEXT----------------------------------------------------------------
function nevena_create_text__desktop(parent_gr, screen_width_in_px, screen_height) {

    var text_gr = parent_gr.nested()

    //-----------------PARENTHESES------------------------
    var parentheses_gr = text_gr.nested() 

    var parentheses = parentheses_gr.path("m -468.90528,-194.24566 -8e-5,20.84703 -57.80397,-0.20873 c -4.08747,-0.0167 -7.40087,1.42447 -9.94017,4.27335 -2.5393,2.7869 -3.80893,6.44088 -3.80893,10.9619 v 50.35097 c 0,4.64484 -0.95989,8.391743 -2.8797,11.240629 -1.91995,2.848804 -4.27338,5.016412 -7.06026,6.502784 2.78688,1.486372 5.14031,3.623047 7.06026,6.410068 1.91981,2.848928 2.8797,6.626766 2.8797,11.333513 v 50.350967 c 0,4.521024 1.26963,8.175004 3.80893,10.9619 2.5393,2.8488863 5.85266,4.2733505 9.94017,4.2733505 l 57.80397,-1.252e-4 -0.0669,20.7163257 -66.4696,1.25e-4 c -5.94553,0 -10.83813,-1.021876 -14.6779,-3.065585 -3.83976,-1.9819266 -6.8435,-4.6450481 -9.01119,-7.9893642 -2.16756,-3.28240833 -3.68485,-6.905414 -4.55191,-10.869017 -0.86722,-3.9636868 -1.30083,-7.8654238 -1.30083,-11.7051688 v -51.372717 c 0,-4.087544 -1.08376,-6.998339 -3.25132,-8.732467 -2.16765,-1.734129 -5.07848,-2.601214 -8.73245,-2.601214 v -15.421015 c 3.65397,0 6.5648,-0.867085 8.73245,-2.601209 2.16756,-1.73413 3.25132,-4.64493 3.25132,-8.73247 v -51.37272 c 0,-3.83974 0.43361,-7.74148 1.30083,-11.70517 0.86718,-3.96373 2.38451,-7.58673 4.55191,-10.86901 2.16769,-3.34432 5.17143,-6.00744 9.01119,-7.98937 3.83977,-2.04371 8.73237,-3.06554 14.6779,-3.06554 z")

    parentheses.fill('#d2d1d1ff').move(screen_width_in_px-parentheses.bbox().width-120,screen_height/2-parentheses.bbox().height/2)
    //parentheses.rotate(180)
    parentheses.scale(3.8)
    parentheses.attr({id: 'parentheses'})

    parentheses_gr.attr({
        id: "parentheses_gr"
    })

        //-----------------DOTS------------------------
        var dot_up = text_gr.text(function(text_element){
            text_element.tspan('.')
        })
            .font({
                opacity: 1.0,
                weight:  800,
                fill:    '#d2d1d1ff',
                family:  'Spartan',
                size:    230
            })    
        dot_up.attr({
            x: screen_width_in_px-dot_up.bbox().width-100,
            y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_up.bbox().y-dot_up.bbox().height/2-90
        })
    
        var dot_down = text_gr.text(function(text_element){
            text_element.tspan('.')
        })
            .font({
                opacity: 1.0,
                weight:  800,
                fill:    '#d2d1d1ff',
                family:  'Spartan',
                size:    230
            })    
        dot_down.attr({
            x: screen_width_in_px-dot_down.bbox().width-100,
            y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_down.bbox().y-dot_down.bbox().height/2
        })
}

//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function section_images__desktop(parent_gr){

    var images_gr_width  = parent_gr.bbox()[0].width-410;
    var images_gr_height = parent_gr.bbox()[0].height;
    var images_gr        = parent_gr.nested()   


    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'url':        '../portfolio-app-media/media/a0.png',
                'height':     '17', // %
                'position_y': 60,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a1.png',
                'height':     '40',
                'position_y': 37,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a2.png',
                'height':     '69',
                'position_y':25,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a3.png',
                'height':     '35',
                'position_y':  25,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a4.png',
                'height':     '40',
                'position_y': 37,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a5.png',
                'height':     '30',
                'position_y':  37,
                'view_box_x':  '0',
                'view_box_y':  '0'
            },
            {
                'url':        '../portfolio-app-media/media/a6.png',
                'height':     '42',
                'position_y': 25,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'url':        '../portfolio-app-media/media/a7.png',
                'height':     '72',
                'position_y': 15,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }

    var total_width               = images_gr_width
    var elements_number           = images_data['elements_data'].length

    var distance_between_elements = 20;
    var element_width             = (total_width-elements_number*distance_between_elements)/elements_number;


    //----------------------CREATE images POSITION_X---------------------------------------------------
    var elements_data = images_data['elements_data'];
    var element_previous_x = 0;
    var elements_start_x   = 100;

    for(i=0; i<elements_data.length; i++) {
        var element_data = elements_data[i];

        var elements_height_percentage = images_data['elements_data'][i]['height']
        var elements_height_px         = images_gr_height*(elements_height_percentage*0.01)   // 0.01 is to bring range 0-100% into range 0-1.0

        var view_box_x = element_data['view_box_x'];
        var view_box_y = (element_data['view_box_y'-20]);

        var url = images_data['elements_data'][i]['url']

        var element_position_y_px = images_gr_height*(element_data['position_y']*0.01)
        
        if(i>0){
            element_x = element_previous_x + element_width + distance_between_elements
        }
        else{
            element_x = elements_start_x;
        }
    
        element_previous_x = element_x;
        
        var image_element = images_gr.nested().size(element_width, elements_height_px)
        image_element.move(element_x, element_position_y_px)
        image_element.attr({"id": "image_element_"+i})

        var image_background = image_element.rect(element_width, elements_height_px)
            .fill('#787878')
            .attr({
                id:      "image_background",
                opacity: 0.7,
            })

        fit_image_inside_rect(image_element, 
            url, 
            element_width, 
            elements_height_px, 
            0, 
            0, 
            view_box_x, 
            view_box_y)
    }

    //-----------------OBJECTS-------------------

    var hp_images__desktop__info = {
        "view_box_y":         (element_data['view_box_y']),
        /*"element_x":             element_x,
        "element_position_y_px": element_position_y_px*/

    }


    return hp_images__desktop__info

    // IMPORTANT!! - this function has to be called after all the image_elements
    //               are created, because it gets some of those elements
    //               and attaches text relative to them (so their position
    //               has to be set beforehnevena_create_text__desktop(images_gr)

}

function buttons(parent_gr, bar_gr, screen_height, screen_width_in_px){

    var buttons_gr = parent_gr.nested()
    var buttons    = buttons_gr.rect(screen_width_in_px,screen_height)
    .attr({
        opacity: 0.0,
        id:     "buttons"
    })
    var rect_height = 150;
    //--------------------------UI----------------------------------
    var ui_gr         = buttons_gr.nested()
    var ui_base_image = parent_gr.findOne("#image_element_0");
    var ui_x          = ui_base_image.x()
    var ui_width      = ui_base_image.width()

    var ui_rect = ui_gr.rect(ui_width,rect_height)
        .fill('#ed693aff')
        .attr({
            id:  "ui_rect",
            'x': 0, 
            'y': 0  
        })

    var ui_title = ui_gr.text(function(text_element){
        text_element.tspan('UI')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    82
        })    
    ui_title.attr({
        x: ui_rect.bbox().width/2-ui_title.bbox().width/2,
        y: ui_rect.bbox().height/2+ui_title.bbox().height/2-20
    })

    ui_gr.attr({
        opacity: 1.0,
        id:      "ui_gr",
        "x":     ui_x-500,
        "y":     ui_base_image.y()-ui_rect.bbox().height
    })

    //--------------------------UX----------------------------------
    var ux_gr                = buttons_gr.nested();
    var ux_base_image_first  = parent_gr.findOne("#image_element_0");
    var ux_base_image_second = parent_gr.findOne("#image_element_1");
    var ux_x                 = ux_base_image_first.x()
    var ux_height            = ux_base_image_first.height()
    var ux_width             = ux_base_image_first.width() + 20 + ux_base_image_second.width()

    var ux_rect = ux_gr.rect(ux_width,rect_height)
        .fill('#ed693aff')
        .attr({
            id:  "ux_rect",
            'x': 0, 
            'y': -1  
        })

    var ux_title = ux_gr.text(function(text_element){
        text_element.tspan('UX')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    105
        })    
    ux_title.attr({
        x: ux_rect.bbox().width/2-ux_title.bbox().width/2,
        y: ux_rect.bbox().height/2+ux_title.bbox().height/2-30
    })

    ux_gr.attr({
        opacity: 1.0, 
        id:      "ux_gr",
        "x":     ux_x-500,
        "y":     ux_base_image_first.y()+ux_height
    })

    //--------------------------CONTACT----------------------------------
    var contact_gr          = buttons_gr.nested()
    var contact_base_image  = parent_gr.findOne("#image_element_2");
    var contact_x           = contact_base_image.x()
    var contact_width       = contact_base_image.width()

    var contact_rect = contact_gr.rect(contact_width,rect_height)
        .fill('#F2622E')
        .attr({
            id:  "contact_rect",
            opacity: 0.0,
            'x': 0, 
            'y': 0  
        })

    var contact_title = contact_gr.text(function(text_element){
        text_element.tspan('contact')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#BF1F1F',
            family:  'Quicksand',
            size:    "1.5vw"
        })    
    contact_title.attr({
        x: contact_rect.bbox().width/2-contact_title.bbox().width/2,
        y: contact_rect.bbox().height/2+contact_title.bbox().height+10
    })

    contact_gr.attr({
        opacity: 1.0,
        id:     "contact_gr",
        "x":     contact_x,
        "y":    contact_base_image.y()-contact_rect.bbox().height-500
    })

    //--------------------------DESIGN----------------------------------
    var design_gr = buttons_gr.nested()
    var design_base_image  = parent_gr.findOne("#image_element_3");
    var design_x                 = design_base_image.x()
    var design_width             = design_base_image.width()

    var design_rect = design_gr.rect(design_width,rect_height).fill('#DFAA73')
        .fill('#BF1F1F')
        .attr({
            id:  "design_rect",
            'x': 0, 
            'y': 2  
        })

    var design_title = design_gr.text(function(text_element){
        text_element.tspan('Design')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    "1.5vw"
        })    
        design_title.attr({
        x: design_rect.bbox().width/2-design_title.bbox().width/2,
        y: design_rect.bbox().height/2+design_title.bbox().height/2-10
    })

    design_gr.attr({
        opacity: 1.0,
        id:     "design_gr",
        "x":     design_x,
        "y":     design_base_image.y()-design_rect.bbox().height-500
    })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    design_clicked = false;

    design_gr.click(function() {
    
        // DESIGN CLICKED
        if (design_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "web_design";
            run_page_transition(target_page_name, "1_plane_swipe_to_right", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;
                    
                });

            //-----------------------------

            design_clicked = true;

            nav_bar__reset(bar_gr)
    
        }
        // DESIGN DEACTIVATED
        else {
        
            design_clicked = false;
        }
    })

    //--------------------------DEVELOPMENT----------------------------------
    var development_gr                = buttons_gr.nested();
    var development_base_image_first  = parent_gr.findOne("#image_element_4");
    var development_base_image_second = parent_gr.findOne("#image_element_5");
    var development_x                 = development_base_image_first.x()
    var development_width             = development_base_image_first.width() + 20 + development_base_image_second.width()

    // console.log(development_x, 'xxxxxxxxxxxxxxxxxxx')
    // console.log(development_base_image_first.width(), '1111111111111111')
    // console.log(development_base_image_second.width(), '222222222222222')

    var development_rect = development_gr.rect(development_width,rect_height)
        .fill('#BF1F1F')
        .attr({
            id:  "development_rect",
            'x': 0, 
            'y': 2  
        })

    var development_title = development_gr.text(function(text_element){
        text_element.tspan('Development')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    "2vw"
        })    
    development_title.attr({
        x: development_rect.bbox().width/2-development_title.bbox().width/2,
        y: development_rect.bbox().height/2+development_title.bbox().height/2-10
    })

    development_gr.attr({
        opacity: 1.0,
        id:     "development_gr",
        "x":     development_x,
        "y":     development_base_image_first.y()-development_rect.bbox().height-500
    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    development_clicked = false;
    
    development_gr.click(function() {
    
        // DEVELOPMENT CLICKED
        if (development_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "web_development";
            run_page_transition(target_page_name, "4_plane_in_circle", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            development_clicked = true;
            nav_bar__reset(bar_gr)

    
        }
        // DEVELOPMENT DEACTIVATED
        else {
        
            development_clicked = false;
        }
    })

    //--------------------------NEVENA----------------------------------
    var nevena_gr                = buttons_gr.nested();
    var nevena_base_image_first  = parent_gr.findOne("#image_element_5");
    var nevena_base_image_second = parent_gr.findOne("#image_element_6");
    var nevena_x                 = nevena_base_image_first.x()
    var nevena_height            = nevena_base_image_first.height()
    var nevena_width             = nevena_base_image_first.width() + 20 + nevena_base_image_second.width()

    nevena_gr.css("position", "absolute")
    var nevena_rect = nevena_gr.rect(nevena_width,rect_height)
        .fill('#212622')
        .attr({
            id:  "nevena_rect",
            opacity: 0.0,
            'x': 0, 
            'y': 0  
        })

    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    nevena_clicked = false;

    nevena_gr.click(function() {
    
        // NEVENA CLICKED
        if (nevena_clicked == false) {
            

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "about";
            run_page_transition(target_page_name, "1_plane_scale", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------
            

            console.log("open new window...")
            // window.open("about_desktop.html")
            nevena_clicked = true;
    
            nav_bar__reset(bar_gr)

        }
        // NEVENA DEACTIVATED
        else {
    
            //animate_hashtag__deactivate(hashtag_info, contact_height, screen_width_in_px);
    
            nevena_clicked = false;
        }
    })
    ////////////////////////////////////////////////////////////////////////////////////
    var nevena_title = nevena_gr.text(function(text_element){
        text_element.tspan('nevena')
    })
    .font({
        opacity: 1.0,
        weight:  500,
        fill:    '#BF1F1F',
        family:  'Quicksand',
        size:    "3.7vw"//"3.7vw"
    })    
    nevena_title.attr({
        x: nevena_rect.bbox().width/2-nevena_title.bbox().width/2,
        y: nevena_rect.bbox().height/2+nevena_title.bbox().height/2-5
    })
    //nevena_title.css({ width: '100%'})

    nevena_gr.attr({
        id:     "nevena_gr",
        "x":     nevena_x,
        "y":     nevena_base_image_first.y()+nevena_height-nevena_title.bbox().height/2+600
    })
    //--------------------------ANIMATION----------------------------------
    var moodboard_gr          = buttons_gr.nested()
    var moodboard_base_image  = parent_gr.findOne("#image_element_7");
    var mooodboard_x          = moodboard_base_image.x()
    var moodboard_height      = moodboard_base_image.height()
    var moodboard_width       = moodboard_base_image.width()+20

    var moodboard_rect = moodboard_gr.rect(moodboard_width*2,rect_height/2)
        .fill('#BF1F1F')
        .attr({
            id:  "moodboard_rect",
            'x': 1, 
            'y': 0  
        })

    var moodboard_title = moodboard_gr.text(function(text_element){
        text_element.tspan('Moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    "2rem"//"2vw"  
        })    
    moodboard_title.attr({
        x: moodboard_rect.bbox().width/2-moodboard_title.bbox().width/2,
        y: moodboard_rect.bbox().height/2+moodboard_title.bbox().height/2-10
    })

    moodboard_gr.attr({
        opacity: 1.0,
        id:     "moodboard_gr",
        width:   moodboard_rect.bbox().width,
        x: mooodboard_x-moodboard_width-moodboard_rect.bbox().width/2,
        "y":     moodboard_base_image.y()+moodboard_height+500
    })
    //////////////////////////////////////--PAGE TRANSITION ON BUTTON CLICKED--////////////////////////////////////////////
    moodboard_clicked = false;

    moodboard_gr.click(function() {
    
        // MOODBOARD CLICKED
        if (moodboard_clicked == false) {

            //-----------------------------
            // RUN_PAGE_TRANSITION
            var target_page_name = "moodboard";
            run_page_transition(target_page_name, "2_plane_swipe_up_and_down", current_page, bar_gr,
                // on_complete - called when the page_transition completes (X number of seconds in the future)
                function() {

                    // IMPORTANT!! - change the value of the global variable "current_page" (update it)
                    //               to point to the new page name.
                    current_page = target_page_name;

                });

            //-----------------------------

            moodboard_clicked = true;

            nav_bar__reset(bar_gr)
    
        }
        // MOODBOARD DEACTIVATED
        else {
        
            moodboard_clicked = false;
        }
    })
    //-----------------BUTTONS HOVER-MOUSEOVER------------------------

    buttons.mouseover(function() {                     //when hovered over background titles color return to its origin
        nevena_title.fill({ color: '#BF1F1F' })
        moodboard_title.fill({ color: '#fff' })
        development_title.fill({ color: '#fff' })
        design_title.fill({ color: '#fff' })
        contact_title.fill({ color: '#BF1F1F' })

    })

    nevena_title.mouseover(function() {               //when hovered over title it changes color
        nevena_title.fill({ color: '#720e0eff' })
    })
    design_title.mouseover(function() {
        design_title.fill({ color: '#720e0eff' })
    })
    moodboard_title.mouseover(function() {
        moodboard_title.fill({ color: '#720e0eff' })
    })
    development_title.mouseover(function() {
        development_title.fill({ color: '#720e0eff' })
    })
    contact_title.mouseover(function() {
        contact_title.fill({ color: '#720e0eff' })
    })
    
     //-----------------OBJECTS-------------------

     var hp__buttons__desktop_info = {
        "ui_gr":                        ui_gr,
        "ui_x":                         ui_x,
        "ux_gr":                        ux_gr,
        "ux_x":                         ux_x,
        "contact_gr":                   contact_gr,
        "contact_base_image":           contact_base_image,
        "contact_rect":                 contact_rect,
        "nevena_gr":                    nevena_gr,
        "nevena_title":                 nevena_title,
        "nevena_rect":                  nevena_rect,
        "nevena_base_image_first":      nevena_base_image_first,
        "nevena_height":                nevena_height,
        "design_gr":                    design_gr,
        "design_rect":                  design_rect,
        "design_base_image":            design_base_image,
        "development_gr":               development_gr,
        "development_base_image_first": development_base_image_first,
        "development_rect":             development_rect,
        "moodboard_gr":                 moodboard_gr,
        "moodboard_height":             moodboard_height,
        "moodboard_rect":               moodboard_rect,
        "moodboard_base_image":         moodboard_base_image

    }

    return hp__buttons__desktop_info
}

function hp_top__animate(hp__buttons__desktop_info , screen_width_in_px, screen_height){
    var ui_gr              = hp__buttons__desktop_info["ui_gr"];
    var ui_x               = hp__buttons__desktop_info["ui_x"];
    var ux_gr              = hp__buttons__desktop_info["ux_gr"];
    var ux_x               = hp__buttons__desktop_info["ux_x"];
    var contact_gr         = hp__buttons__desktop_info["contact_gr"];
    var contact_base_image = hp__buttons__desktop_info["contact_base_image"];
    var contact_rect       = hp__buttons__desktop_info["contact_rect"];
    var nevena_gr          = hp__buttons__desktop_info["nevena_gr"];
    var nevena_title       = hp__buttons__desktop_info["nevena_title"];
    var nevena_rect       = hp__buttons__desktop_info["nevena_rect"];
    var nevena_base_image_first       = hp__buttons__desktop_info["nevena_base_image_first"];
    var nevena_height       = hp__buttons__desktop_info["nevena_height"];
    var design_gr          = hp__buttons__desktop_info["design_gr"];
    var design_base_image  = hp__buttons__desktop_info["design_base_image"];
    var design_rect        = hp__buttons__desktop_info["design_rect"];
    var development_gr     = hp__buttons__desktop_info["development_gr"];
    var development_rect   = hp__buttons__desktop_info["development_rect"];
    var development_base_image_first  = hp__buttons__desktop_info["development_base_image_first"];
    var moodboard_gr       = hp__buttons__desktop_info["moodboard_gr"];
    var moodboard_base_image = hp__buttons__desktop_info["moodboard_base_image"];
    var moodboard_height     = hp__buttons__desktop_info["moodboard_height"];
    var moodboard_rect       = hp__buttons__desktop_info["moodboard_rect"];

    /*ui_gr.animate({
        duration: 1000,
    }).attr({
        opacity: 0.6,
        //"y": ui_base_image.y()-ui_rect.bbox().height
    })
    ux_gr.animate({
        duration: 1000,
    }).attr({
        opacity: 0.6,
        //"y": ui_base_image.y()-ui_rect.bbox().height
    })*/
    design_gr.animate({
        duration: 500,
    }).ease('>')
    .attr({
        opacity: 1.0,
        y: design_base_image.y()-design_rect.bbox().height
    })
    console.log(design_gr, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakjjjjjjjjauigoduywgefuygf")
    development_gr.animate({
        duration: 500,
        delay: 250,
    })
    .ease('>')
    .attr({
        opacity: 1.0,
        y: development_base_image_first.y()-development_rect.bbox().height
    })
    moodboard_gr.animate({
        delay: 650,
        duration: 500,
    })
    .ease('>')
    .attr({
        opacity: 1.0,
        "y": moodboard_base_image.y()+moodboard_height-moodboard_rect.bbox().height
    })
    contact_gr.animate({
        delay: 350,
        duration: 500,
    })
    .ease('>')
    .attr({
        opacity: 1.0,
        y: contact_base_image.y()-contact_rect.bbox().height
    })
    nevena_gr.animate({
        delay:    450,
        duration: 500,
    }).ease('>')
    .attr({
        y:nevena_base_image_first.y()+nevena_height-nevena_title.bbox().height/2
    })

    nevena_title.animate({
        delay: 450,
        duration: 500,
    }).font({"size": "4vw", "weight": "700", "opacity": "1.0"}) //"4vw"
    .ease('>')
    .attr({
        x: nevena_rect.bbox().width/2-nevena_title.bbox().width/2-10,
        y: nevena_rect.bbox().height/2+nevena_title.bbox().height/2-5
    })

    ui_gr.animate({
        duration: 600,
    }).ease('>')
    .attr({
        opacity: 1.0,
        x: ui_x,
    })
    ux_gr.animate({
        delay: 350,
        duration: 600,
    }).ease('>')
    .attr({
        opacity: 1.0,
        "x":     ux_x,
    })
        
}

