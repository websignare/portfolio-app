$( document ).ready(function() {
    moodboard__mobile__main()
    console.log( "moodboard__ready!" );
});

function moodboard__mobile__main() {
    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);  

    moodboard__mobile__activate(bar_gr);

    $(window).resize(function() {

        moodboard__mobile__deactivate();

        moodboard__mobile__activate(bar_gr);

    });
}

function moodboard__mobile__activate(bar_gr) {

    //document.title = "moodboard_mobile"
    //window.history.pushState({page: "moodboard_mobile"},"", "#moodboard_mobile");

    $("body").append(`
        <div id="moodboard__mobile">
            <div id="headline_info">
            </div>
            <div id="masonry_a">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    moodboard__mobile__create_responsive(bar_gr);
    //current_page = "moodboard_mobile"
}
    
function moodboard__mobile__deactivate(bar_gr) {

    $("#moodboard__mobile").remove();
    $("#contact_mobile_wrapper").remove();

}

function moodboard__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#moodboard__mobile").css({                    
        "background-color": '#AC3323',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#moodboard__mobile #headline_info").css({     
        //"background-color": '#000',               
        "position": "relative",
        "height":    screen_height+70,
        "width":     screen_width_in_px,
        
    }); 

    /*var bounding_rect          = $("#moodboard__mobile #headline_info").get(0).getBoundingClientRect()
    var headline__div_bottom_y = bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    var intro__bounding_rect = $("#moodboard__mobile #headline_info").get(0).getBoundingClientRect()
    var intro__div_bottom_y  = intro__bounding_rect.bottom;*/


    $("#moodboard__mobile #video__info").css({    
        "background-color": '#732424',                
        "position": "relative",
        "height":    screen_height,
        "width":     screen_width_in_px,
        
    }); 


    //----------SVG_CANVASES-----------//

    //creates one more empty canvas at the bottom of the page, above contact section
    /*var moodboard_mobile__container     = SVG().addTo("#moodboard__mobile").size(screen_width_in_px, screen_height)
    var moodboard_mobile__container__gr = moodboard_mobile__container.nested()  */  

    var headline_canvas     = SVG().addTo("#moodboard__mobile #headline_info").size(screen_width_in_px, screen_height)
    var headline_canvas__gr = headline_canvas.nested()   
    headline_canvas__gr.attr({opacity: 1.0})

    var video_canvas     = SVG().addTo("#moodboard__mobile #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    moodboard_headline__mobile(headline_canvas__gr, bar_gr, screen_width_in_px, screen_height)
    masonry_mobile(screen_width_in_px, screen_height)
    moodboard_video__mobile(video_canvas__gr, screen_width_in_px, screen_height)

    create_mobile_contact_section(screen_width_in_px,screen_height)
}

function moodboard_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({id: "moodboard_create__image"})
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

//-------------------------------NEVENA----------------------------------------------------------------
function moodboard_headline__mobile(parent_gr, bar_gr, screen_width_in_px, screen_height){

    intro_container__gr = parent_gr.nested()

    //CALL MENU FUNCTION

    var menu_rect_gr = intro_container__gr.nested()
    .attr({
        x: 32,
        y: 15
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#F2780C'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#F2780C', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#F2780C', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#F2780C', linecap: 'round' })


    var menu_rect_clicked = false;

    menu_rect_gr.click(function() {
        
        if (menu_rect_clicked == false) {
            
            // ANIMATE
            console.log(create_mobile_menu,"defined")
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = true;
        }

        // DEACTIVATE
        else {

            // ANIMATE
            create_mobile_menu(parent_gr, bar_gr, screen_width_in_px, screen_height)

            menu_rect_clicked = false;
        }
    })

    var moodboard__headline__gr = intro_container__gr.nested()
    moodboard__headline__gr.attr({
        id:     "moodboard__headline__gr",
        fill:   "#fff",
        x:      0,
        y:      menu_rect.bbox().y+menu_rect.bbox().height+50
    })

    var purple_rect__gr = moodboard__headline__gr.nested()
    var purple_rect = purple_rect__gr.rect(105,90)
        .fill('#9C8B71')
    purple_rect.attr({
        id:      "purple_rect",
        opacity: 1.0,
        'x':     0,
        'y':     0
    })
    
    console.log(purple_rect,"wwwwwwwwwwwheeeereeee are yooou")
 
    var moodboard_me_path__gr = moodboard__headline__gr.nested()
    var moodboard_me_path = moodboard_me_path__gr.path("m 2334.2532,1165.9558 q 0.1651,0 0.273,0.108 0.108,0.1079 0.108,0.2794 v 3.9243 q 0,0.1651 -0.108,0.2794 -0.1079,0.1079 -0.273,0.1079 -0.1651,0 -0.2731,-0.1079 -0.1079,-0.1143 -0.1079,-0.2794 v -0.3112 l 0.1397,0.057 q 0,0.082 -0.089,0.2032 -0.089,0.1143 -0.2413,0.2286 -0.1524,0.1143 -0.362,0.1968 -0.2032,0.076 -0.4445,0.076 -0.4381,0 -0.7937,-0.2222 -0.3556,-0.2286 -0.5652,-0.6223 -0.2032,-0.4001 -0.2032,-0.9144 0,-0.5207 0.2032,-0.9144 0.2096,-0.4001 0.5588,-0.6223 0.3493,-0.2286 0.7747,-0.2286 0.2731,0 0.5017,0.082 0.2286,0.083 0.3937,0.2096 0.1714,0.127 0.2603,0.2603 0.095,0.127 0.095,0.2159 l -0.2286,0.083 v -1.7018 q 0,-0.1651 0.1079,-0.2731 0.108,-0.1143 0.2731,-0.1143 z m -1.2827,4.064 q 0.2794,0 0.4889,-0.1397 0.2096,-0.1397 0.3239,-0.381 0.1206,-0.2413 0.1206,-0.5397 0,-0.3048 -0.1206,-0.5461 -0.1143,-0.2413 -0.3239,-0.381 -0.2095,-0.1397 -0.4889,-0.1397 -0.2731,0 -0.4826,0.1397 -0.2096,0.1397 -0.3302,0.381 -0.1143,0.2413 -0.1143,0.5461 0,0.2984 0.1143,0.5397 0.1206,0.2413 0.3302,0.381 0.2095,0.1397 0.4826,0.1397 z m -3.7028,0.635 q -0.1651,0 -0.273,-0.1079 -0.108,-0.1143 -0.108,-0.2794 v -2.6226 q 0,-0.1651 0.108,-0.273 0.1079,-0.1143 0.273,-0.1143 0.1651,0 0.2731,0.1143 0.1079,0.1079 0.1079,0.273 v 0.5969 l -0.044,-0.4254 q 0.07,-0.1524 0.1778,-0.2667 0.1143,-0.1207 0.254,-0.1969 0.1397,-0.082 0.2984,-0.1206 0.1588,-0.038 0.3175,-0.038 0.1905,0 0.3175,0.1079 0.1334,0.108 0.1334,0.254 0,0.2096 -0.108,0.3048 -0.1079,0.089 -0.2349,0.089 -0.1207,0 -0.2223,-0.044 -0.095,-0.044 -0.2222,-0.044 -0.1143,0 -0.235,0.057 -0.1143,0.051 -0.2159,0.1651 -0.095,0.1143 -0.1587,0.2857 -0.057,0.1651 -0.057,0.3937 v 1.505 q 0,0.1651 -0.1079,0.2794 -0.108,0.1079 -0.2731,0.1079 z m -1.5878,-3.4607 q 0.1651,0 0.2731,0.1079 0.1079,0.108 0.1079,0.2794 v 2.6861 q 0,0.1651 -0.1079,0.2794 -0.108,0.1079 -0.2731,0.1079 -0.1651,0 -0.273,-0.1079 -0.108,-0.1143 -0.108,-0.2794 v -0.3112 l 0.1397,0.057 q 0,0.082 -0.089,0.2032 -0.089,0.1143 -0.2413,0.2286 -0.1524,0.1143 -0.3619,0.1968 -0.2032,0.076 -0.4445,0.076 -0.4382,0 -0.7938,-0.2222 -0.3556,-0.2286 -0.5651,-0.6223 -0.2032,-0.4001 -0.2032,-0.9144 0,-0.5207 0.2032,-0.9144 0.2095,-0.4001 0.5588,-0.6223 0.3492,-0.2286 0.7747,-0.2286 0.273,0 0.5016,0.082 0.2286,0.083 0.3937,0.2096 0.1715,0.127 0.2604,0.2603 0.095,0.127 0.095,0.2159 l -0.2286,0.083 v -0.4636 q 0,-0.1651 0.108,-0.273 0.1079,-0.1143 0.273,-0.1143 z m -1.2827,2.8257 q 0.2794,0 0.489,-0.1397 0.2095,-0.1397 0.3238,-0.381 0.1207,-0.2413 0.1207,-0.5397 0,-0.3048 -0.1207,-0.5461 -0.1143,-0.2413 -0.3238,-0.381 -0.2096,-0.1397 -0.489,-0.1397 -0.273,0 -0.4826,0.1397 -0.2095,0.1397 -0.3302,0.381 -0.1143,0.2413 -0.1143,0.5461 0,0.2984 0.1143,0.5397 0.1207,0.2413 0.3302,0.381 0.2096,0.1397 0.4826,0.1397 z m -2.0973,-1.0604 q 0,0.5207 -0.2349,0.9207 -0.2286,0.3937 -0.6223,0.616 -0.3874,0.2222 -0.87,0.2222 -0.4826,0 -0.8763,-0.2222 -0.3873,-0.2223 -0.6223,-0.616 -0.2286,-0.4 -0.2286,-0.9207 0,-0.5207 0.2286,-0.9144 0.235,-0.4001 0.6223,-0.6223 0.3937,-0.2286 0.8763,-0.2286 0.4826,0 0.87,0.2286 0.3937,0.2222 0.6223,0.6223 0.2349,0.3937 0.2349,0.9144 z m -0.762,0 q 0,-0.3239 -0.1333,-0.5588 -0.127,-0.2413 -0.3493,-0.3747 -0.2159,-0.1333 -0.4826,-0.1333 -0.2667,0 -0.4889,0.1333 -0.2159,0.1334 -0.3493,0.3747 -0.127,0.2349 -0.127,0.5588 0,0.3175 0.127,0.5588 0.1334,0.2349 0.3493,0.3683 0.2222,0.1333 0.4889,0.1333 0.2667,0 0.4826,-0.1333 0.2223,-0.1334 0.3493,-0.3683 0.1333,-0.2413 0.1333,-0.5588 z m -4.6993,-1.7653 q 0.4445,0 0.7938,0.2286 0.3556,0.2222 0.5588,0.6159 0.2095,0.3937 0.2095,0.9144 0,0.5207 -0.2095,0.9208 -0.2032,0.3937 -0.5525,0.6223 -0.3429,0.2222 -0.7747,0.2222 -0.254,0 -0.4762,-0.082 -0.2223,-0.083 -0.3937,-0.2096 -0.1651,-0.127 -0.2604,-0.254 -0.089,-0.1333 -0.089,-0.2222 l 0.1969,-0.083 v 0.4636 q 0,0.1651 -0.108,0.2794 -0.1079,0.1079 -0.273,0.1079 -0.1651,0 -0.2731,-0.1079 -0.1079,-0.108 -0.1079,-0.2794 v -3.9878 q 0,-0.1651 0.1079,-0.2731 0.108,-0.1143 0.2731,-0.1143 0.1651,0 0.273,0.1143 0.108,0.108 0.108,0.2731 v 1.6129 l -0.108,-0.057 q 0,-0.082 0.089,-0.1968 0.089,-0.1207 0.2413,-0.235 0.1524,-0.1206 0.3493,-0.1968 0.2032,-0.076 0.4254,-0.076 z m -0.095,0.6985 q -0.2794,0 -0.489,0.1397 -0.2095,0.1397 -0.3302,0.381 -0.1143,0.2349 -0.1143,0.5397 0,0.2985 0.1143,0.5461 0.1207,0.2413 0.3302,0.381 0.2096,0.1397 0.489,0.1397 0.2794,0 0.4826,-0.1397 0.2095,-0.1397 0.3238,-0.381 0.1207,-0.2476 0.1207,-0.5461 0,-0.3048 -0.1207,-0.5397 -0.1143,-0.2413 -0.3238,-0.381 -0.2032,-0.1397 -0.4826,-0.1397 z m -1.2826,-7.5002 q 0.1651,0 0.2731,0.108 0.1079,0.1079 0.1079,0.2794 v 3.9243 q 0,0.1651 -0.1079,0.2794 -0.108,0.1079 -0.2731,0.1079 -0.1651,0 -0.273,-0.1079 -0.108,-0.1143 -0.108,-0.2794 v -0.3112 l 0.1397,0.057 q 0,0.082 -0.089,0.2032 -0.089,0.1143 -0.2413,0.2286 -0.1524,0.1143 -0.3619,0.1968 -0.2032,0.076 -0.4445,0.076 -0.4382,0 -0.7938,-0.2222 -0.3556,-0.2286 -0.5651,-0.6223 -0.2032,-0.4001 -0.2032,-0.9144 0,-0.5207 0.2032,-0.9144 0.2095,-0.4001 0.5588,-0.6223 0.3492,-0.2286 0.7747,-0.2286 0.273,0 0.5016,0.082 0.2286,0.083 0.3937,0.2096 0.1715,0.127 0.2604,0.2603 0.095,0.127 0.095,0.2159 l -0.2286,0.083 v -1.7018 q 0,-0.1651 0.108,-0.2731 0.1079,-0.1143 0.273,-0.1143 z m -1.2827,4.064 q 0.2794,0 0.489,-0.1397 0.2095,-0.1397 0.3238,-0.381 0.1207,-0.2413 0.1207,-0.5397 0,-0.3048 -0.1207,-0.5461 -0.1143,-0.2413 -0.3238,-0.381 -0.2096,-0.1397 -0.489,-0.1397 -0.273,0 -0.4826,0.1397 -0.2095,0.1397 -0.3302,0.381 -0.1143,0.2413 -0.1143,0.5461 0,0.2984 0.1143,0.5397 0.1207,0.2413 0.3302,0.381 0.2096,0.1397 0.4826,0.1397 z m -2.0973,-1.0604 q 0,0.5207 -0.2349,0.9207 -0.2286,0.3937 -0.6223,0.616 -0.3874,0.2222 -0.87,0.2222 -0.4826,0 -0.8763,-0.2222 -0.3873,-0.2223 -0.6223,-0.616 -0.2286,-0.4 -0.2286,-0.9207 0,-0.5207 0.2286,-0.9144 0.235,-0.4001 0.6223,-0.6223 0.3937,-0.2286 0.8763,-0.2286 0.4826,0 0.87,0.2286 0.3937,0.2222 0.6223,0.6223 0.2349,0.3937 0.2349,0.9144 z m -0.762,0 q 0,-0.3239 -0.1333,-0.5588 -0.127,-0.2413 -0.3493,-0.3747 -0.2159,-0.1333 -0.4826,-0.1333 -0.2667,0 -0.4889,0.1333 -0.2159,0.1334 -0.3493,0.3747 -0.127,0.2349 -0.127,0.5588 0,0.3175 0.127,0.5588 0.1334,0.2349 0.3493,0.3683 0.2222,0.1333 0.4889,0.1333 0.2667,0 0.4826,-0.1333 0.2223,-0.1334 0.3493,-0.3683 0.1333,-0.2413 0.1333,-0.5588 z m -3.1323,0 q 0,0.5207 -0.2349,0.9207 -0.2286,0.3937 -0.6223,0.616 -0.3874,0.2222 -0.87,0.2222 -0.4826,0 -0.8763,-0.2222 -0.3873,-0.2223 -0.6223,-0.616 -0.2286,-0.4 -0.2286,-0.9207 0,-0.5207 0.2286,-0.9144 0.235,-0.4001 0.6223,-0.6223 0.3937,-0.2286 0.8763,-0.2286 0.4826,0 0.87,0.2286 0.3937,0.2222 0.6223,0.6223 0.2349,0.3937 0.2349,0.9144 z m -0.762,0 q 0,-0.3239 -0.1333,-0.5588 -0.127,-0.2413 -0.3493,-0.3747 -0.2159,-0.1333 -0.4826,-0.1333 -0.2667,0 -0.4889,0.1333 -0.2159,0.1334 -0.3493,0.3747 -0.127,0.2349 -0.127,0.5588 0,0.3175 0.127,0.5588 0.1334,0.2349 0.3493,0.3683 0.2222,0.1333 0.4889,0.1333 0.2667,0 0.4826,-0.1333 0.2223,-0.1334 0.3493,-0.3683 0.1333,-0.2413 0.1333,-0.5588 z m -6.5715,-1.7653 q 0.508,0 0.7493,0.2476 0.2413,0.2413 0.3175,0.6287 l -0.1079,-0.057 0.051,-0.1016 q 0.076,-0.146 0.2349,-0.3111 0.1588,-0.1715 0.381,-0.2858 0.2286,-0.1206 0.508,-0.1206 0.4572,0 0.6922,0.1968 0.2413,0.1969 0.3302,0.5271 0.089,0.3238 0.089,0.7239 v 1.6256 q 0,0.1651 -0.108,0.2794 -0.1079,0.1079 -0.273,0.1079 -0.1651,0 -0.2731,-0.1079 -0.1079,-0.1143 -0.1079,-0.2794 v -1.6256 q 0,-0.2096 -0.051,-0.3747 -0.051,-0.1714 -0.1842,-0.273 -0.1333,-0.1016 -0.381,-0.1016 -0.2413,0 -0.4127,0.1016 -0.1715,0.1016 -0.2604,0.273 -0.082,0.1651 -0.082,0.3747 v 1.6256 q 0,0.1651 -0.108,0.2794 -0.1079,0.1079 -0.273,0.1079 -0.1651,0 -0.2731,-0.1079 -0.1079,-0.1143 -0.1079,-0.2794 v -1.6256 q 0,-0.2096 -0.051,-0.3747 -0.051,-0.1714 -0.1842,-0.273 -0.1333,-0.1016 -0.381,-0.1016 -0.2413,0 -0.4127,0.1016 -0.1715,0.1016 -0.2604,0.273 -0.082,0.1651 -0.082,0.3747 v 1.6256 q 0,0.1651 -0.108,0.2794 -0.1079,0.1079 -0.273,0.1079 -0.1651,0 -0.2731,-0.1079 -0.1079,-0.1143 -0.1079,-0.2794 v -2.6226 q 0,-0.1651 0.1079,-0.273 0.108,-0.1143 0.2731,-0.1143 0.1651,0 0.273,0.1143 0.108,0.1079 0.108,0.273 v 0.2731 l -0.095,-0.019 q 0.057,-0.1079 0.1588,-0.2286 0.1016,-0.127 0.2476,-0.2349 0.1461,-0.108 0.3239,-0.1715 0.1778,-0.07 0.3873,-0.07 z")
    moodboard_me_path__gr.attr({
        id:    "moodboard_me_path__gr",
    })
    moodboard_me_path.fill('#F2780C')
    moodboard_me_path.move(purple_rect.bbox().width+130,purple_rect.bbox().y+purple_rect.bbox().height/2-moodboard_me_path.bbox().height/2)
    moodboard_me_path.scale(7.8)
    moodboard_me_path.attr({id: 'moodboard_me_path'})
    //////////////////////////////////////////////////////////////////////////////////
    var background_img__gr = intro_container__gr.nested() 
    background_img__gr.attr({
        id: "background_img__gr",
        y: purple_rect.bbox().y+purple_rect.bbox().height+25,
    })
    console.log(background_img__gr,'dddddkkkkkkkkkkkkssssssssssssjjjjjjjjjdddddddddd')

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1;

    var light__url    = "./../portfolio-app-media/media/ggg.png"
    
    moodboard_create__image(background_img__gr, light__url, rect_width, rect_height, 0, purple_rect.bbox().y+purple_rect.bbox().height+25, 0.8, 0, 0)

    var paragraphs = background_img__gr.nested()
    paragraphs.attr({
        y: 150
    })
    var paragraph__a = paragraphs.text('People and things that inspire me')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#f6f6f6ff',
            family:  'Quicksand',
            size:    20,
        }) 
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 0
    }) 
    var paragraph__b = paragraphs.text('on a daily basis')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#f6f6f6ff',
            family:  'Quicksand',
            size:    20,
        }) 
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: 30
    }) 



}

function masonry_mobile(screen_width_in_px, screen_height){

    //------------------BLOG MASONRY-------------------------//
    $("#moodboard__mobile #masonry_a").append(`
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

function moodboard_video__mobile(parent_gr, screen_width_in_px, screen_height){

    var video_gr = parent_gr.nested()
    .attr({
        height: screen_height
    })

    var video_global_height = 200
    var video_gr_y = video_gr.bbox().y;

    var video_global_x = video_gr.x()
    var video_global_y = video_gr_y

    $("#moodboard__mobile #video__info").append(`
        <div id="video_mobile__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/moodboard_mobile_top.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/moodboard_mobile_middle.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/moodboard_mobile_bottom.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#moodboard__mobile #video__info").find("#video_mobile__container").css({
        opacity: 0.7
    });

    $("#moodboard__mobile #video__info").find("#video__a").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+100,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#moodboard__mobile #video__info").find("#video__b").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+250,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#moodboard__mobile #video__info").find("#video__c").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+400,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}