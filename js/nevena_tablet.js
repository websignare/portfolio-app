//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function create_background__tablet(parent_gr, screen_width_in_px, screen_height){

    var layout_gr = parent_gr.nested().attr({id: 'layout_gr'})
    console.log("aaaaaaaaaaaa")
    // console.log(filter_def)

    var grey_background_gr = layout_gr.nested()
        .attr({
            id: "grey_background_gr",
        })

    var grey_background = grey_background_gr.rect(screen_width_in_px,screen_height)
        .fill('#D9D9D9')
        .attr({
            id:      "grey_background",
            opacity: 0.0,
            'x':     0,
            'y':     0
        })

    var white_background_gr = grey_background_gr.nested().attr({id :"background_white_tablet_gr"})

    var white_background = white_background_gr.rect(screen_width_in_px-100,screen_height-100)
    .fill('#D9D9D9')
    .attr({
        id:      "white_background",
        opacity: 1.0,
        'x':     50,
        'y':     50
    })
    return layout_gr;

}
//----------------------------------------------TEXT----------------------------------------------------------------
function create_text__tablet(parent_gr, screen_width_in_px, screen_height){
    var text_gr = parent_gr.nested()
    //-----------------PARENTHESES------------------------
    var parentheses_gr = text_gr.nested() 

    var parentheses = parentheses_gr.path("m -468.90528,-194.24566 -8e-5,20.84703 -57.80397,-0.20873 c -4.08747,-0.0167 -7.40087,1.42447 -9.94017,4.27335 -2.5393,2.7869 -3.80893,6.44088 -3.80893,10.9619 v 50.35097 c 0,4.64484 -0.95989,8.391743 -2.8797,11.240629 -1.91995,2.848804 -4.27338,5.016412 -7.06026,6.502784 2.78688,1.486372 5.14031,3.623047 7.06026,6.410068 1.91981,2.848928 2.8797,6.626766 2.8797,11.333513 v 50.350967 c 0,4.521024 1.26963,8.175004 3.80893,10.9619 2.5393,2.8488863 5.85266,4.2733505 9.94017,4.2733505 l 57.80397,-1.252e-4 -0.0669,20.7163257 -66.4696,1.25e-4 c -5.94553,0 -10.83813,-1.021876 -14.6779,-3.065585 -3.83976,-1.9819266 -6.8435,-4.6450481 -9.01119,-7.9893642 -2.16756,-3.28240833 -3.68485,-6.905414 -4.55191,-10.869017 -0.86722,-3.9636868 -1.30083,-7.8654238 -1.30083,-11.7051688 v -51.372717 c 0,-4.087544 -1.08376,-6.998339 -3.25132,-8.732467 -2.16765,-1.734129 -5.07848,-2.601214 -8.73245,-2.601214 v -15.421015 c 3.65397,0 6.5648,-0.867085 8.73245,-2.601209 2.16756,-1.73413 3.25132,-4.64493 3.25132,-8.73247 v -51.37272 c 0,-3.83974 0.43361,-7.74148 1.30083,-11.70517 0.86718,-3.96373 2.38451,-7.58673 4.55191,-10.86901 2.16769,-3.34432 5.17143,-6.00744 9.01119,-7.98937 3.83977,-2.04371 8.73237,-3.06554 14.6779,-3.06554 z")

    parentheses.fill('#bdbdbdff').move(screen_width_in_px-parentheses.bbox().width-60,screen_height/2-parentheses.bbox().height/2)
    //parentheses.rotate(180)
    parentheses.scale(2.5)
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
                fill:    '#bdbdbdff',
                family:  'Spartan',
                size:    190
            })    
        dot_up.attr({
            x: screen_width_in_px-dot_up.bbox().width-50,
            y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_up.bbox().y-dot_up.bbox().height/2-70
        })
    
        var dot_down = text_gr.text(function(text_element){
            text_element.tspan('.')
        })
            .font({
                opacity: 1.0,
                weight:  800,
                fill:    '#bdbdbdff',
                family:  'Spartan',
                size:    190
            })    
        dot_down.attr({
            x: screen_width_in_px-dot_down.bbox().width-50,
            y: (parentheses.bbox().y+parentheses.bbox().height/2)-dot_down.bbox().y-dot_down.bbox().height/2
        })
}


//----------------------------------------------IMAGES-DESKTOP----------------------------------------------------------------
function section_images__tablet(parent_gr,screen_width_in_px, screen_height){
    console.log(parent_gr,"paaaaaareeeent")
    var images_gr = parent_gr.nested()
    console.log(images_gr,"imaaaageeeees")
    var images_gr_width  = parent_gr.bbox().width-210;
    var images_gr_height = parent_gr.bbox().height;


    var images_tablet_data = {
        'title': 'images',

        'elements_tablet_data':[
            {
                'height':     '15', // %
                'position_y': 71,
                'view_box_x': '-320',
                'view_box_y': '-30'
            },
            {
                'height':     '40',
                'position_y': 46,
                'view_box_x': '-440',
                'view_box_y': '-150'
            },
            {
                'height':     '40',
                'position_y': 36,
                'view_box_x': '-870',
                'view_box_y': '-130'
            },
            {
                'height':     '40',
                'position_y': 36,
                'view_box_x': '-980',
                'view_box_y': '-160'
            },
            {
                'height':     '79',
                'position_y': 18,
                'view_box_x': '-1080',
                'view_box_y': '-200'
            }
        ]
    }

    var total_width     = images_gr_width
    var elements_number = images_tablet_data['elements_tablet_data'].length

    var distance_between_elements = 20;
    var element_tablet_width             = (total_width-elements_number*distance_between_elements)/elements_number;

    //----------------------CREATE images POSITION_X---------------------------------------------------
    var elements_data = images_tablet_data['elements_tablet_data'];
    var element_previous_x = 0;
    var elements_start_x   = 50;


    for(i=0; i<elements_data.length; i++) {
        var element_data = elements_data[i];

        var elements_height_percentage = images_tablet_data['elements_tablet_data'][i]['height']
        var elements_tablet_height_px  = images_gr_height*(elements_height_percentage*0.01)   // 0.01 is to bring range 0-100% into range 0-1.0

        var view_tablet_box_x = element_data['view_box_x'];
        var view_tablet_box_y = element_data['view_box_y'];


        var element_position_y_px = images_gr_height*(element_data['position_y']*0.01)
        
        if(i>0){
            element_x = element_previous_x + element_tablet_width + distance_between_elements
        }
        else{
            element_x = elements_start_x;
        }
    
        element_previous_x = element_x;
        
        var ship_tablet_image_url = './ship.jpg'

        var image_tablet_element = images_gr.nested().size(element_tablet_width, elements_tablet_height_px)
        image_tablet_element.move(element_x, element_position_y_px)
        image_tablet_element.attr({"id": "image_element_"+i})

        var image_background = image_tablet_element.rect(element_tablet_width, elements_tablet_height_px)
            .fill('#787878')
            .attr({
                id:      "image_background",
                opacity: 0.7,
            })

        fit_image_inside_rect(image_tablet_element, 
            ship_tablet_image_url, 
            element_tablet_width, 
            elements_tablet_height_px, 
            0, 
            0, 
            view_tablet_box_x, 
            view_tablet_box_y)
            
    }

}

function buttons_tablet(parent_gr, screen_height, screen_width_in_px){

    var buttons_gr = parent_gr.nested()
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
            weight:  800,
            fill:    '#fff',
            family:  'Quicksand',
            size:    82
        })    
        ui_title.attr({
        x: ui_rect.bbox().width/2-ui_title.bbox().width/2,
        y: ui_rect.bbox().height/2+ui_title.bbox().height/2-20
    })

    ui_gr.attr({
        id: "ui_gr",
        "x": ui_x,
        "y": ui_base_image.y()-ui_rect.bbox().height
    })

    //--------------------------UI----------------------------------
    var ux_gr         = buttons_gr.nested()
    var ux_base_image = parent_gr.findOne("#image_element_1");
    var ux_x          = ui_base_image.x()
    var ux_height     = ux_base_image.height()
    var ux_width      = ui_base_image.width()

    var ux_rect = ux_gr.rect(ux_width,rect_height)
        .fill('#ed693aff')
        .attr({
            id:  "ui_rect",
            'x': 0, 
            'y': 0  
        })

    var ux_title = ux_gr.text(function(text_element){
        text_element.tspan('UX')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#fff',
            family:  'Quicksand',
            size:    82
        })    
    ux_title.attr({
        x: ux_rect.bbox().width/2-ux_title.bbox().width/2,
        y: ux_rect.bbox().height/2+ux_title.bbox().height/2-20
    })

    ux_gr.attr({
        id: "ux_gr",
        "x": ux_x,
        "y": ux_base_image.y()+ux_height
    })


    //--------------------------CONTACT----------------------------------
    var contact_gr = buttons_gr.nested()
    var contact_base_image  = parent_gr.findOne("#image_element_1");
    var contact_x                 = contact_base_image.x()
    var contact_width             = contact_base_image.width()

    var contact_rect = contact_gr.rect(contact_width,rect_height)
        .fill('#faba6bff')
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
            weight:  800,
            fill:    '#BF1F1F',
            family:  'Quicksand',
            size:    39
        })    
        contact_title.attr({
        x: contact_rect.bbox().width/2-contact_title.bbox().width/2,
        y: contact_rect.bbox().height/2+contact_title.bbox().height+10
    })

    contact_gr.attr({
        id: "contact_gr",
        "x": contact_x,
        "y": contact_base_image.y()+contact_base_image.height()-contact_title.bbox().height-43
    })

    //--------------------------DESIGN----------------------------------
    var design_gr = buttons_gr.nested()
    var design_base_image  = parent_gr.findOne("#image_element_1");
    var design_x                 = design_base_image.x()
    var design_width             = design_base_image.width()

    var design_rect = design_gr.rect(design_width,rect_height).fill('#DFAA73')
        .fill('#BF1F1F')
        .attr({
            id:  "design_rect",
            'x': 0, 
            'y': 0  
        })

    var design_title = design_gr.text(function(text_element){
        text_element.tspan('Design')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
        })    
        design_title.attr({
        x: design_rect.bbox().width/2-design_title.bbox().width/2,
        y: design_rect.bbox().height/2+design_title.bbox().height/2-10
    })

    design_gr.attr({
        id: "design_gr",
        "x": design_x,
        "y": design_base_image.y()-design_rect.bbox().height
    })

    //--------------------------DEVELOPMENT----------------------------------
    var development_gr                = buttons_gr.nested();
    var development_base_image_first  = parent_gr.findOne("#image_element_2");
    var development_base_image_second = parent_gr.findOne("#image_element_3");
    var development_x                 = development_base_image_first.x()
    var development_width             = development_base_image_first.width() + 20 + development_base_image_second.width()

    console.log(development_x, 'xxxxxxxxxxxxxxxxxxx')
    console.log(development_base_image_first.width(), '1111111111111111')
    console.log(development_base_image_second.width(), '222222222222222')

    var development_rect = development_gr.rect(development_width,rect_height)
        .fill('#BF1F1F')
        .attr({
            id:  "development_rect",
            'x': 0, 
            'y': 0  
        })

    var development_title = development_gr.text(function(text_element){
        text_element.tspan('Development')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#fff',
            family:  'Quicksand',
            size:    34
        })    
    development_title.attr({
        x: development_rect.bbox().width/2-development_title.bbox().width/2,
        y: development_rect.bbox().height/2+development_title.bbox().height/2-10
    })

    development_gr.attr({
        id: "development_gr",
        "x": development_x,
        "y": development_base_image_first.y()-development_rect.bbox().height
    })

    //--------------------------NEVENA----------------------------------
    var nevena_gr                = buttons_gr.nested();
    var nevena_base_image_first  = parent_gr.findOne("#image_element_2");
    var nevena_base_image_second = parent_gr.findOne("#image_element_3");
    var nevena_x                 = nevena_base_image_first.x()
    var nevena_height            = nevena_base_image_first.height()
    var nevena_width             = nevena_base_image_first.width() + 20 + nevena_base_image_second.width()

    var nevena_rect = nevena_gr.rect(nevena_width,rect_height)
        .fill('#c3c599fa')
        .attr({
            id:  "nevena_rect",
            opacity: 0.0,
            'x': 0, 
            'y': 0  
        })

    var nevena_title = nevena_gr.text(function(text_element){
        text_element.tspan('nevena')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#BF1F1F',
            family:  'Quicksand',
            size:    80
        })    
        nevena_title.attr({
        x: nevena_rect.bbox().width/2-nevena_title.bbox().width/2,
        y: nevena_rect.bbox().height/2+nevena_title.bbox().height/2-5
    })

    nevena_gr.attr({
        id: "nevena_gr",
        "x": nevena_x,
        "y": nevena_base_image_first.y()+nevena_height-nevena_title.bbox().height/2
    })
    //--------------------------ANIMATION----------------------------------
    var moodboard_gr          = buttons_gr.nested()
    var moodboard_base_image  = parent_gr.findOne("#image_element_4");
    var moodboard_x           = moodboard_base_image.x()
    var moodboard_height      = moodboard_base_image.height()
    var moodboard_width       = moodboard_base_image.width()+20

    var moodboard_rect = moodboard_gr.rect(moodboard_width*2,rect_height/2)
        .fill('#BF1F1F')
        .attr({
            id:  "moodboard_rect",
            'x': 0, 
            'y': 0  
        })

    var moodboard_title = moodboard_gr.text(function(text_element){
        text_element.tspan('Moodboard')
    })
        .font({
            opacity: 1.0,
            weight:  800,
            fill:    '#fff',
            family:  'Quicksand',
            size:    34  
        })    
    moodboard_title.attr({
        x: moodboard_rect.bbox().width/2-moodboard_title.bbox().width/2,
        y: moodboard_rect.bbox().height/2+moodboard_title.bbox().height/2-10
    })

    moodboard_gr.attr({
        id: "design_gr",
        "x": moodboard_x-moodboard_width-moodboard_rect.bbox().width/2,
        "y": moodboard_base_image.y()+moodboard_height-moodboard_rect.bbox().height
    })
}