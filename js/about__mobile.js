$( document ).ready(function() {
    about__mobile__main()
    console.log( "about__ready!" );
});

function about__mobile__main() {
    var screen_width_in_px = window.innerWidth;

    // NAVIGATION_BAR
    var bar_gr = nav_bar__create(screen_width_in_px);  

    about__mobile__activate(bar_gr);

    $(window).resize(function() {

        about__mobile__deactivate();

        about__mobile__activate(bar_gr);

    });
}

function about__mobile__activate(bar_gr) {

    //document.title = "about_mobile"
    //window.history.pushState({page: "about_mobile"},"", "#about_mobile");

    $("body").append(`
        <div id="about__mobile">
            <div id="intro__info">
            </div>
            <div id="history__info">
            </div>
            <div id="process__info">
            </div>
            <div id="video__info">
            </div>
        </div>
    `);

    about__mobile__create_responsive(bar_gr);
    //current_page = "about_mobile"
}
    
function about__mobile__deactivate(bar_gr) {

    $("#about__mobile").remove();
    $("#contact_mobile_wrapper").remove();

}

function about__mobile__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    //-------STYLE-------
    $("#about__mobile").css({                    
        "background-color": '#516051ff',
        "position":         "relative",
        "width":             screen_width_in_px
    }); 

    $("#about__mobile #intro__info").css({     
        //"background-color": '#000',               
        "position": "relative",
        "height":    screen_height+70,
        "width":     screen_width_in_px,
        
    }); 

    var bounding_rect          = $("#about__mobile #intro__info").get(0).getBoundingClientRect()
    var headline__div_bottom_y = bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    var intro__bounding_rect = $("#about__mobile #intro__info").get(0).getBoundingClientRect()
    var intro__div_bottom_y  = intro__bounding_rect.bottom;

    $("#about__mobile #history__info").css({                    
        "position":"relative",
        "height":   screen_height,
        "width":    screen_width_in_px,
        
    }); 

    $("#about__mobile #process__info").css({                    
        "position": "relative",
        "height":   screen_height,
        "width":    screen_width_in_px,
        
    }); 

    $("#about__mobile #video__info").css({     
        "position": "relative",
        "height":    screen_height,
        "width":     screen_width_in_px,
        
    }); 


    //----------SVG_CANVASES-----------//

    //creates one more empty canvas at the bottom of the page, above contact section
    /*var about_mobile__container     = SVG().addTo("#about__mobile").size(screen_width_in_px, screen_height)
    var about_mobile__container__gr = about_mobile__container.nested()  */  

    var intro_canvas     = SVG().addTo("#about__mobile #intro__info").size(screen_width_in_px, screen_height)
    var intro_canvas__gr = intro_canvas.nested()   
    intro_canvas__gr.attr({opacity: 1.0})

    var history_canvas     = SVG().addTo("#about__mobile #history__info").size(screen_width_in_px, screen_height)
    var history_canvas__gr = history_canvas.nested()   

    var process_canvas     = SVG().addTo("#about__mobile #process__info").size(screen_width_in_px, screen_height)
    var process_canvas__gr = process_canvas.nested()   

    var video_canvas     = SVG().addTo("#about__mobile #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    about_intro_mobile__info(intro_canvas__gr, bar_gr, screen_width_in_px, screen_height)
    about_history_mobile__info(history_canvas__gr, screen_width_in_px, screen_height)
    about_process_mobile__info(process_canvas__gr, screen_width_in_px, screen_height)
    about_video__mobile__info(video_canvas__gr, screen_width_in_px, screen_height)

    create_mobile_contact_section(screen_width_in_px,screen_height)
}

function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({id: "about_create__image"})
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
function about_intro_mobile__info(parent_gr, bar_gr, screen_width_in_px, screen_height){

    intro_container__gr = parent_gr.nested()

    //CALL MENU FUNCTION

    var menu_rect_gr = intro_container__gr.nested()
    .attr({
        x: 32,
        y: 15
    })
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#839b8bff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#839b8bff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#839b8bff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#839b8bff', linecap: 'round' })


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

    var about__headline__gr = intro_container__gr.nested()
    about__headline__gr.attr({
        id:     "about__headline__gr",
        fill:   "#fff",
        x:      0,
        y:      menu_rect.bbox().y+menu_rect.bbox().height+50
    })

    var green_rect__gr = about__headline__gr.nested()
    var green_rect = green_rect__gr.rect(105,90)
        .fill('#2b3f36ff')
    green_rect.attr({
        id:      "green_rect",
        opacity: 1.0,
        'x':     0,
        'y':     0
    })
    
    console.log(green_rect,"wwwwwwwwwwwheeeereeee are yooou")
 
    var about_me_path__gr = about__headline__gr.nested()
    var about_me_path = about_me_path__gr.path("m 1075.2175,425.79431 q 0,2.72169 -1.3269,4.01449 -1.2928,1.29281 -3.3681,1.70106 l 0.3062,-0.57835 0.5444,0.27216 q 0.7825,0.40826 1.667,1.25879 0.9185,0.85052 1.5309,2.04126 0.6465,1.22476 0.6465,2.7217 0,2.44952 -1.0547,3.7083 -1.0546,1.29281 -2.8237,1.7691 -1.7352,0.4763 -3.8785,0.4763 h -8.7094 q -0.8845,0 -1.4969,-0.57836 -0.5784,-0.57836 -0.5784,-1.46292 0,-0.88454 0.5784,-1.4629 0.6124,-0.57836 1.4969,-0.57836 h 8.7094 q 1.1227,0 2.0073,-0.27217 0.9186,-0.27217 1.4629,-0.98661 0.5443,-0.71444 0.5443,-2.04128 0,-1.2928 -0.5443,-2.21137 -0.5443,-0.91857 -1.4629,-1.39486 -0.8846,-0.44228 -2.0073,-0.44228 h -8.7094 q -0.8845,0 -1.4969,-0.57836 -0.5784,-0.57836 -0.5784,-1.46291 0,-0.88455 0.5784,-1.46291 0.6124,-0.57836 1.4969,-0.57836 h 8.7094 q 1.1227,0 2.0073,-0.27217 0.9186,-0.27217 1.4629,-0.98661 0.5443,-0.71444 0.5443,-2.04127 0,-1.29281 -0.5443,-2.21138 -0.5443,-0.91857 -1.4629,-1.39486 -0.8846,-0.44228 -2.0073,-0.44228 h -8.7094 q -0.8845,0 -1.4969,-0.57835 -0.5784,-0.57836 -0.5784,-1.46292 0,-0.88455 0.5784,-1.46291 0.6124,-0.57836 1.4969,-0.57836 h 14.0508 q 0.8845,0 1.4628,0.57836 0.6124,0.57836 0.6124,1.46291 0,0.88456 -0.6124,1.46292 -0.5783,0.57835 -1.4628,0.57835 h -1.4629 l 0.102,-0.51031 q 0.5784,0.30619 1.2247,0.85052 0.6804,0.54434 1.2588,1.32683 0.5784,0.78248 0.9186,1.73507 0.3743,0.9526 0.3743,2.0753 z m -18.8818,30.20653 q 0,-2.89179 1.1908,-5.03513 1.2247,-2.10931 3.3,-3.26603 2.0753,-1.1227 4.6949,-1.1227 3.0619,0 5.2053,1.22477 2.1773,1.25878 3.3341,3.26602 1.1567,2.00726 1.1567,4.25265 0,1.73507 -0.7145,3.26603 -0.7144,1.56497 -1.9732,2.75571 -1.2248,1.19074 -2.8578,1.87116 -1.633,0.71444 -3.4702,0.71444 -0.8165,-0.034 -1.3268,-0.6464 -0.5103,-0.61238 -0.5103,-1.42888 V 448.8564 l 3.4021,-1.02063 v 12.48576 l -0.6804,-0.74847 h 0.9186 q 0.9866,-0.068 1.7691,-0.71444 0.7824,-0.61239 1.2248,-1.56498 0.4762,-0.91857 0.4762,-1.97322 0,-1.02064 -0.2722,-1.90518 -0.2721,-0.88456 -0.9186,-1.53096 -0.6463,-0.6464 -1.735,-1.02064 -1.0887,-0.37423 -2.7557,-0.37423 -1.8371,0 -3.1299,0.74847 -1.2589,0.78248 -1.9393,1.97323 -0.6464,1.22476 -0.6464,2.5856 0,1.25878 0.2042,2.00725 0.2041,0.74847 0.4762,1.19075 0.3062,0.47629 0.5104,0.85052 0.3062,0.61238 0.3062,1.15672 0,0.74846 -0.5104,1.22476 -0.5102,0.51032 -1.1907,0.51032 -0.9185,0 -1.667,-0.95259 -0.7484,-0.88455 -1.3268,-2.48354 -0.5444,-1.59901 -0.5444,-3.30006 z m 2.0872,-43.85907 q 0.2938,0 0.5142,-0.14691 0.2204,-0.1469 0.3406,-0.40065 0.1268,-0.25375 0.1268,-0.5676 0,-0.32052 -0.1268,-0.57427 -0.1202,-0.25374 -0.3406,-0.40065 -0.2204,-0.14691 -0.5142,-0.14691 -0.2871,0 -0.5075,0.14691 -0.2203,0.14691 -0.3472,0.40065 -0.1202,0.25375 -0.1202,0.57427 0,0.31385 0.1202,0.5676 0.1269,0.25375 0.3472,0.40065 0.2204,0.14691 0.5075,0.14691 z m 1.3489,-2.97152 q 0.1736,0 0.2871,0.11352 0.1136,0.11352 0.1136,0.29381 v 2.82462 q 0,0.17361 -0.1136,0.29381 -0.1135,0.11352 -0.2871,0.11352 -0.1736,0 -0.2871,-0.11352 -0.1136,-0.1202 -0.1136,-0.29381 v -0.32721 l 0.147,0.0601 q 0,0.0868 -0.094,0.21369 -0.093,0.12019 -0.2538,0.24039 -0.1602,0.12019 -0.3806,0.207 -0.2137,0.0801 -0.4674,0.0801 -0.4608,0 -0.8347,-0.23371 -0.374,-0.24039 -0.5943,-0.6544 -0.2137,-0.42069 -0.2137,-0.96158 0,-0.54756 0.2137,-0.96157 0.2203,-0.42068 0.5876,-0.6544 0.3673,-0.24039 0.8147,-0.24039 0.2871,0 0.5275,0.0868 0.2404,0.0868 0.414,0.22036 0.1803,0.13355 0.2738,0.27378 0.1001,0.13355 0.1001,0.22703 l -0.2404,0.0868 v -0.48746 q 0,-0.17362 0.1136,-0.28714 0.1135,-0.12019 0.2871,-0.12019 z m 3.0186,0.73453 q -0.2938,0 -0.5142,0.14691 -0.2204,0.14691 -0.3472,0.40065 -0.1202,0.24707 -0.1202,0.5676 0,0.31384 0.1202,0.57427 0.1268,0.25375 0.3472,0.40065 0.2204,0.14691 0.5142,0.14691 0.2938,0 0.5075,-0.14691 0.2203,-0.1469 0.3405,-0.40065 0.1269,-0.26043 0.1269,-0.57427 0,-0.32053 -0.1269,-0.5676 -0.1202,-0.25374 -0.3405,-0.40065 -0.2137,-0.14691 -0.5075,-0.14691 z m 0.1001,-0.73453 q 0.4675,0 0.8347,0.24039 0.374,0.23372 0.5877,0.64773 0.2203,0.41401 0.2203,0.96157 0,0.54756 -0.2203,0.96825 -0.2137,0.41401 -0.581,0.6544 -0.3606,0.23371 -0.8146,0.23371 -0.2672,0 -0.5009,-0.0868 -0.2337,-0.0868 -0.414,-0.22036 -0.1736,-0.13356 -0.2738,-0.26711 -0.093,-0.14023 -0.093,-0.23371 l 0.207,-0.0868 v 0.48746 q 0,0.17362 -0.1136,0.29382 -0.1135,0.11351 -0.2871,0.11351 -0.1736,0 -0.2871,-0.11351 -0.1135,-0.11352 -0.1135,-0.29382 v -4.19352 q 0,-0.17361 0.1135,-0.28713 0.1135,-0.1202 0.2871,-0.1202 0.1736,0 0.2871,0.1202 0.1136,0.11352 0.1136,0.28713 v 1.69611 l -0.1136,-0.0601 q 0,-0.0868 0.093,-0.20701 0.093,-0.12687 0.2538,-0.24707 0.1602,-0.12687 0.3672,-0.207 0.2137,-0.0801 0.4474,-0.0801 z m 4.9418,1.85636 q 0,-0.34055 -0.1403,-0.58762 -0.1335,-0.25375 -0.3672,-0.39398 -0.2271,-0.14023 -0.5075,-0.14023 -0.2805,0 -0.5142,0.14023 -0.227,0.14023 -0.3673,0.39398 -0.1335,0.24707 -0.1335,0.58762 0,0.33388 0.1335,0.58763 0.1403,0.24707 0.3673,0.3873 0.2337,0.14023 0.5142,0.14023 0.2804,0 0.5075,-0.14023 0.2337,-0.14023 0.3672,-0.3873 0.1403,-0.25375 0.1403,-0.58763 z m 0.8013,0 q 0,0.54757 -0.2471,0.96825 -0.2404,0.41401 -0.6544,0.64773 -0.4073,0.23371 -0.9148,0.23371 -0.5075,0 -0.9215,-0.23371 -0.4074,-0.23372 -0.6544,-0.64773 -0.2404,-0.42068 -0.2404,-0.96825 0,-0.54756 0.2404,-0.96157 0.247,-0.42068 0.6544,-0.6544 0.414,-0.24039 0.9215,-0.24039 0.5075,0 0.9148,0.24039 0.414,0.23372 0.6544,0.6544 0.2471,0.41401 0.2471,0.96157 z m 3.3139,-1.78959 q 0.1736,0 0.2872,0.1202 0.1135,0.11352 0.1135,0.28714 v 1.6961 q 0,0.70782 -0.394,1.12183 -0.394,0.41401 -1.1352,0.41401 -0.7412,0 -1.1352,-0.41401 -0.3873,-0.41401 -0.3873,-1.12183 v -1.6961 q 0,-0.17362 0.1135,-0.28714 0.1136,-0.1202 0.2872,-0.1202 0.1736,0 0.2871,0.1202 0.1135,0.11352 0.1135,0.28714 v 1.6961 q 0,0.40733 0.1803,0.60766 0.1803,0.19365 0.5409,0.19365 0.3673,0 0.5476,-0.19365 0.1803,-0.20033 0.1803,-0.60766 v -1.6961 q 0,-0.17362 0.1135,-0.28714 0.1135,-0.1202 0.2871,-0.1202 z m 2.0293,-0.76792 q 0.1736,0 0.2804,0.1202 0.1136,0.11352 0.1136,0.28713 v 2.97153 q 0,0.0935 0.033,0.15358 0.04,0.0601 0.1001,0.0868 0.067,0.0267 0.1402,0.0267 0.08,0 0.147,-0.0267 0.067,-0.0334 0.1535,-0.0334 0.093,0 0.167,0.0868 0.08,0.0868 0.08,0.24039 0,0.18698 -0.207,0.30717 -0.2003,0.1202 -0.434,0.1202 -0.1403,0 -0.3139,-0.02 -0.1669,-0.0267 -0.3205,-0.11352 -0.1469,-0.0935 -0.2471,-0.28046 -0.1001,-0.18697 -0.1001,-0.51417 v -3.00492 q 0,-0.17361 0.1135,-0.28713 0.1202,-0.1202 0.2938,-0.1202 z m -0.7145,0.8347 h 1.5826 q 0.1602,0 0.2671,0.10684 0.1068,0.10684 0.1068,0.2671 0,0.15359 -0.1068,0.26043 -0.1069,0.10016 -0.2671,0.10016 h -1.5826 q -0.1603,0 -0.2671,-0.10684 -0.1069,-0.10684 -0.1069,-0.2671 0,-0.15359 0.1069,-0.25375 0.1068,-0.10684 0.2671,-0.10684 z")
    about_me_path__gr.attr({
        id:    "about_me_path__gr",
    })
    about_me_path.fill('#d9d26cff')
    about_me_path.move(green_rect.bbox().x+green_rect.bbox().width+115,green_rect.bbox().y+about_me_path.bbox().height/2-10)
    about_me_path.rotate(-90)
    about_me_path.scale(4)
    about_me_path.attr({id: 'about_me_path'})
    //////////////////////////////////////////////////////////////////////////////////
    var background_img__gr = intro_container__gr.nested() 
    background_img__gr.attr({
        id: "background_img__gr",
        y: green_rect.bbox().y+green_rect.bbox().height+25,
    })
    console.log(background_img__gr,'dddddkkkkkkkkkkkkssssssssssssjjjjjjjjjdddddddddd')

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1;

    var light__url    = "./../portfolio-app-media/media/light__mobile.png"
    
    about_create__image(background_img__gr, light__url, rect_width, rect_height, 0, green_rect.bbox().y+green_rect.bbox().height+25, 0.7, 0, 0)

    var paragraphs = background_img__gr.nested()
    .attr({
        y: background_img__gr.bbox().height/2+20
    })
    var paragraph__a = paragraphs.text('My  name is Nevena. I am Junior')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#ebf2edff',
            family:  'Quicksand',
            size:    18,
        }) 
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 50
    }) 
    var paragraph__b = paragraphs.text('UI | UX web designer & developer')
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#2a3d35ef',
            family:  'Quicksand',
            size:    20,
        }) 
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: 80
    }) 

    var paragraph__c = paragraphs.text('currently based in Belgrade, Serbia.').dx('20')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#ebf2edff',
        family:  'Quicksand',
        size:    18,
    }) 
    paragraph__c.attr({
        id: 'paragraph__c',
        x: rect_width/2-paragraph__c.bbox().width/2,
        y: 110
    }) 

}

function about_history_mobile__info(parent_gr, screen_width_in_px, screen_height){

    var background_img__gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1

    var bist__url     = "./../portfolio-app-media/media/bist.png"

    about_create__image(background_img__gr, bist__url, rect_width, rect_height, 0, 0, 0.6, 0, 0)

    var paragraph_gr = background_img__gr.nested()
    var paragraph__a = paragraph_gr.text('After graduating as a sculptor on Faculty')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 0
    })
    var paragraph__b = paragraph_gr.text('of Fine Arts I`ve developed passion')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: paragraph__a.bbox().height+20
    }) 
    var paragraph__c = paragraph_gr.text('for creating through digital media.')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__c.attr({
        id: 'paragraph__c',
        x: rect_width/2-paragraph__c.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+40
    })
    var paragraph__d = paragraph_gr.text('I`ve spent the last 4 years exploring')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__d.attr({
        id: 'paragraph__d',
        x: rect_width/2-paragraph__d.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+paragraph__c.bbox().height+60
    })
    var paragraph__e = paragraph_gr.text('programming languages & wide pallete')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__e.attr({
        id: 'paragraph__e',
        x: rect_width/2-paragraph__e.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+paragraph__c.bbox().height+paragraph__d.bbox().height+80
    })
    var paragraph__f = paragraph_gr.text('of different design genres.')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__f.attr({
        id: 'paragraph__f',
        x: rect_width/2-paragraph__f.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+paragraph__c.bbox().height+paragraph__d.bbox().height+paragraph__e.bbox().height+100
    })


    paragraph_gr.attr({
        y: screen_height/2-paragraph_gr.bbox().height/2
    })
}

function about_process_mobile__info(parent_gr, screen_width_in_px, screen_height){

    var background_img__gr = parent_gr.nested() 

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/1.1;

    var stickers__url = "./../portfolio-app-media/media/stickeers.jpg"

    about_create__image(background_img__gr, stickers__url, rect_width, rect_height, 0, 0, 0.4, 0, 0)

    var paragraph_gr = background_img__gr.nested()
    var paragraph__a = paragraph_gr.text('I find my passion in creating and coding')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__a.attr({
        id: 'paragraph__a',
        x: rect_width/2-paragraph__a.bbox().width/2,
        y: 0
    })
    var paragraph__b = paragraph_gr.text('visualy appealing, responsive websites with')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__b.attr({
        id: 'paragraph__b',
        x: rect_width/2-paragraph__b.bbox().width/2,
        y: paragraph__a.bbox().height+20
    }) 
    var paragraph__c = paragraph_gr.text('focus on friendly, emotive, aesthetically')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__c.attr({
        id: 'paragraph__c',
        x: rect_width/2-paragraph__c.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+40
    })
    var paragraph__d = paragraph_gr.text('pleasing, clear, on-brand and usable')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__d.attr({
        id: 'paragraph__d',
        x: rect_width/2-paragraph__d.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+paragraph__c.bbox().height+60
    })
    var paragraph__e = paragraph_gr.text('interfaces.')
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })    
    paragraph__e.attr({
        id: 'paragraph__e',
        x: rect_width/2-paragraph__e.bbox().width/2,
        y: paragraph__a.bbox().height+paragraph__b.bbox().height+paragraph__c.bbox().height+paragraph__d.bbox().height+80
    })


    paragraph_gr.attr({
        y: screen_height/2-paragraph_gr.bbox().height/2
    })
}

function about_video__mobile__info(parent_gr, screen_width_in_px, screen_height){

    var video_gr = parent_gr.nested()
    .attr({
        height: screen_height
    })

    var video_global_height = 200
    var video_gr_y = video_gr.bbox().y;

    var video_global_x = video_gr.x()
    var video_global_y = video_gr_y

    $("#about__mobile #video__info").append(`
        <div id="video_mobile__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_mobile_top.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_mobile_middle.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_mobile_bottom.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#about__mobile #video__info").find("#video_mobile__container").css({
        opacity: 0.4
    });

    $("#about__mobile #video__info").find("#video__a").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+50,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about__mobile #video__info").find("#video__b").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about__mobile #video__info").find("#video__c").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y+350,
        width:      screen_width_in_px,
        height:     video_global_height
    })

}