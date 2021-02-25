/*$(document).ready(function(){
    about__main();
})*/

function about__main() {

    about__activate(bar_gr);

    $(window).resize(function() {
        
        about__deactivate();

        about__activate(bar_gr);
    });
}

// ACTIVATE
function about__activate(bar_gr) {
    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;
    
    document.title = "about"
    window.history.pushState({page: "about"},"", "#about");
    $("body").append(`

        <div id="about">
            <div id="about_wrapper">
            </div>
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

    var info = about__create_responsive(bar_gr);
    animate_all_activate(info, screen_width_in_px, screen_height)
    current_page = "about";

}

// DEACTIVATE
function about__deactivate() {

    $("#about").remove();
    $("#about #about_wrapper").remove();
    $("#contact_wrapper").remove();
    //REMOVE/CLEANUP TRIGGERS (for this page)
    remove_triggers("about_canvas__trigger")
    remove_triggers("history_canvas__trigger")
    remove_triggers("process_canvas__trigger")
}

function about__create_responsive(bar_gr) {

    var screen_width_in_px = window.innerWidth;
    var screen_height      = window.innerHeight;

    $("#about #about_wrapper").css({                    
        "background-color": '#ece8e7ff',
        "position":         "relative",
        "height":           screen_height+screen_height/3,
        "width":            screen_width_in_px
    }); 

    $("#about #intro__info").css({                    
        "background-color": '#193136ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 
    var current_scroll_y = window.scrollY;

    var bounding_rect       = $("#about #intro__info").get(0).getBoundingClientRect()
    var about__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#about #history__info").css({                    
        "background-color": '#193136ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //getBoundingClientRect() gives local coordinates of VIEWPORT not global coordinates!
    //current_scroll_y gives y position of the viewport in Global coordinates!
    //therefor to get he global coordinates of "history_div" we have to add LOCAL coordinates
    //in the viewport to the Global coordinates of the viewport itself
    var bounding_rect         = $("#about #history__info").get(0).getBoundingClientRect()
    var history__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);


    $("#about #process__info").css({                    
        "background-color": '#193136ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    var bounding_rect         = $("#about #process__info").get(0).getBoundingClientRect()
    var process__div_bottom_y = current_scroll_y+bounding_rect.bottom;
    console.log(bounding_rect.top, bounding_rect.right, bounding_rect.bottom, bounding_rect.left);

    $("#about #video__info").css({                    
        "background-color": '#204057ff',
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width_in_px,
        
    }); 

    //----------SVG_CANVASES-----------//
    var main_canvas     = SVG().addTo("#about #about_wrapper").size(screen_width_in_px, screen_height+screen_height/3)
    var main_canvas__gr = main_canvas.nested()   

    var intro_canvas     = SVG().addTo("#about #intro__info").size(screen_width_in_px, screen_height)
    var intro_canvas__gr = intro_canvas.nested()   

    var history_canvas     = SVG().addTo("#about #history__info").size(screen_width_in_px, screen_height)
    var history_canvas__gr = history_canvas.nested()   

    var process_canvas     = SVG().addTo("#about #process__info").size(screen_width_in_px, screen_height)
    var process_canvas__gr = process_canvas.nested()   

    var video_canvas     = SVG().addTo("#about #video__info").size(screen_width_in_px, screen_height)
    var video_canvas__gr = video_canvas.nested()   

    var screen_physical_width_cm = get_physical_screen_width(screen_width_in_px);
    console.log(screen_physical_width_cm, '!!!SCREEN WIDTH')

    if (screen_physical_width_cm < 20.5) {
        // MOBILE
        //about__mobile__activate(bar_gr)
    }
    else if (screen_physical_width_cm < 33.8) { // max width for tablet 2736px, max height 2048px

        // TABLET
        

    }

    else {
        var about_layout_gr     = about__create_background__desktop(main_canvas__gr, bar_gr, screen_width_in_px, screen_height)
        var about_background_gr = about_layout_gr.find("#about_background_gr")
        
        console.log("***********")
        console.log(about_background_gr)

        var rects     = about__images__desktop(about_background_gr, screen_width_in_px, screen_height)
        var text_info = about_text__desktop(main_canvas__gr, screen_width_in_px, screen_height)

        about_intro__info(intro_canvas__gr, screen_width_in_px, screen_height, about__div_bottom_y)
        history__info(history_canvas__gr, screen_width_in_px, screen_height, history__div_bottom_y)
        process__info(process_canvas__gr, screen_width_in_px, screen_height, process__div_bottom_y)
        about_video__info(video_canvas__gr, screen_width_in_px, screen_height)

        create_contact_section(screen_width_in_px,screen_height)

            // RETURNED INFO
            var info = {
                "text_info": text_info,
                "rects":     rects
            }

            return info
    }
}

//----------------------------------------------CREATE-LAYOUT-DESKTOP----------------------------------------------------------------
function about__create_background__desktop(parent_gr, bar_gr, screen_width_in_px, screen_height){

    var about_layout_gr = parent_gr.nested().attr({id: 'about_layout_gr'})

    var about_background_gr = about_layout_gr.nested()
        .attr({
            id: "about_background_gr",
        })

    var background_rect = about_background_gr.rect(screen_width_in_px,screen_height)
        .fill('#ebf2edff')
        .attr({
            id:      "background_rect",
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
    var menu_rect         = menu_rect_gr.rect(50,50).attr({ opacity: 0.0, color: '#262626ff'})
    var menu_line_top     = menu_rect_gr.line(3, 20, 40, 20).stroke({ width: 5, color: '#262626ff', linecap: 'round' })
    var menu_line_midddle = menu_rect_gr.line(3, 35, 40, 35).stroke({ width: 5, color: '#262626ff', linecap: 'round' })
    var menu_line_bottom  = menu_rect_gr.line(3, 50, 40, 50).stroke({ width: 5, color: '#262626ff', linecap: 'round' })


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

    return about_layout_gr;

}

//----------------------------------------------TEXT----------------------------------------------------------------
function about_text__desktop(parent_gr, screen_width_in_px, screen_height)
{
    var text_gr = parent_gr.nested()
        //---------------------------SYMBOL----------------------------------
        var hashtag_symbol_gr = text_gr.nested()   

        var hashtag_symbol = hashtag_symbol_gr.path("m -833.94527,-1714.4575 c -3.5569,-0.9531 -6.26175,-2.921 -8.11454,-5.9038 -1.65675,-3.0959 -2.00857,-6.4223 -1.05546,-9.9792 0.91158,-3.4023 2.81738,-5.8752 5.71717,-7.4187 3.05454,-1.502 6.36026,-1.7766 9.91716,-0.8235 l 110.65102,29.6488 c 3.5569,0.9531 6.16372,2.9777 7.82047,6.0736 1.85279,2.9827 2.30264,6.2525 1.3496,9.8095 -0.91165,3.4022 -2.89471,5.8544 -5.94925,7.3564 -2.89986,1.5436 -6.12825,1.8388 -9.68515,0.8857 z m 69.32744,58.6052 c -4.17551,-1.1188 -7.02946,-3.4581 -8.56185,-7.018 -1.49101,-3.7146 -1.26973,-7.6333 0.66377,-11.7563 l 60.10182,-130.586 c 1.29269,-2.9687 3.24949,-5.0136 5.8704,-6.1346 2.66237,-1.2756 5.54003,-1.4991 8.633,-0.6703 4.02083,1.0774 6.77676,3.4734 8.2677,7.1879 1.53245,3.5599 1.33187,7.4013 -0.60163,11.5243 l -60.10182,130.5861 c -1.25131,2.814 -3.20811,4.8588 -5.8704,6.1345 -2.5077,1.317 -5.30803,1.5612 -8.40099,0.7324 z m -43.46482,-120.7938 c -3.5569,-0.9531 -6.26175,-2.921 -8.11455,-5.9038 -1.65674,-3.0959 -2.00856,-6.4223 -1.05552,-9.9793 0.91165,-3.4022 2.81744,-5.8751 5.71724,-7.4187 3.05454,-1.502 6.36026,-1.7765 9.91716,-0.8234 l 110.41901,29.5867 c 3.5569,0.953 6.16373,2.9775 7.82047,6.0735 1.8528,2.9827 2.30271,6.2526 1.34961,9.8095 -0.91166,3.4023 -2.89472,5.8544 -5.94918,7.3565 -2.89987,1.5435 -6.12826,1.8387 -9.68523,0.8857 z m -19.3998,103.9493 c -4.02084,-1.0774 -6.79752,-3.396 -8.32991,-6.9559 -1.33634,-3.6731 -1.11506,-7.5919 0.66384,-11.7562 l 60.10182,-130.5861 c 1.29268,-2.9687 3.24948,-5.0135 5.8704,-6.1345 2.6623,-1.2757 5.46263,-1.5198 8.40099,-0.7325 4.17551,1.1188 7.0087,3.5355 8.4997,7.25 1.53239,3.5599 1.33187,7.4013 -0.60162,11.5243 l -36.51091,79.3289 -23.59091,51.2572 c -1.25131,2.814 -3.20811,4.8588 -5.87041,6.1345 -2.66236,1.2756 -5.54003,1.4991 -8.63299,0.6703 z")
        hashtag_symbol_gr.css( "position", "fixed")
    
        hashtag_symbol.fill('#d0d0d0f3')
        hashtag_symbol.move(screen_width_in_px/7.15+hashtag_symbol.bbox().width/2,screen_height/2+hashtag_symbol.bbox().height+75)
        //hashtag_symbol.rotate(180)
        hashtag_symbol.scale(5.3)
        hashtag_symbol.attr({id: 'hashtag_symbol'})
    
        hashtag_symbol_gr.attr({
            id: "hashtag_symbol_gr"
        })
        $("#hashtag_symbol_gr").css({
            "z-index": 20
        })
        // SYMBOL ROTATION
        function rotatePositive() {
            hashtag_symbol.animate({duration: 4000}).ease("<").rotate(15).after(rotateNegative)
          }
          
        function rotateNegative() {
            hashtag_symbol.animate({duration: 4000}).ease(">").rotate(-15).after(rotatePositive)
        }
          
        rotatePositive()
        
    //---------------------ABOUT TITLE--------------------
    var about_me_path__gr = text_gr.nested()
    var about_me_path = about_me_path__gr.path("m -1388.7518,-1814.0614 q -3.8442,0 -6.6934,-1.5829 -2.804,-1.6281 -4.3416,-4.3869 -1.4925,-2.7588 -1.4925,-6.2411 0,-4.0703 1.6281,-6.9196 1.6734,-2.8944 4.3417,-4.4321 2.6683,-1.5376 5.6532,-1.5376 2.3065,0 4.3417,0.9497 2.0803,0.9497 3.6632,2.6231 1.5829,1.6281 2.4875,3.7989 0.9497,2.1709 0.9497,4.613 -0.045,1.0855 -0.8593,1.7638 -0.8141,0.6784 -1.8995,0.6784 h -17.2762 l -1.3567,-4.5225 h 16.5978 l -0.995,0.9045 v -1.2211 q -0.09,-1.3116 -0.9497,-2.3517 -0.8141,-1.0402 -2.0804,-1.6282 -1.2211,-0.6331 -2.6231,-0.6331 -1.3568,0 -2.5326,0.3618 -1.1759,0.3618 -2.0352,1.2211 -0.8593,0.8593 -1.3568,2.3065 -0.4974,1.4472 -0.4974,3.6633 0,2.4421 0.9949,4.1607 1.0402,1.6734 2.6231,2.5779 1.6281,0.8593 3.4372,0.8593 1.6733,0 2.6683,-0.2714 0.9949,-0.2713 1.5829,-0.6331 0.6331,-0.4071 1.1306,-0.6784 0.8141,-0.4071 1.5377,-0.4071 0.9949,0 1.6281,0.6784 0.6784,0.6784 0.6784,1.5829 0,1.2211 -1.2663,2.2161 -1.1759,0.9949 -3.3015,1.7638 -2.1256,0.7236 -4.3869,0.7236 z m -44.8801,-32.1554 q 0.6332,0 1.3116,0.3618 0.7236,0.3165 1.0854,0.8592 l 10.9898,16.9144 -2.2613,-0.09 11.2612,-16.824 q 0.8593,-1.221 2.2161,-1.221 1.0854,0 1.9447,0.7688 0.8593,0.7688 0.8593,1.9899 v 26.1857 q 0,1.1758 -0.7689,1.9899 -0.7688,0.7688 -2.0351,0.7688 -1.2663,0 -2.0804,-0.7688 -0.7688,-0.8141 -0.7688,-1.9899 v -21.3013 l 1.7638,0.407 -9.2261,14.0652 q -0.407,0.4975 -1.0402,0.8593 -0.5879,0.3618 -1.2211,0.3166 -0.5879,0.045 -1.2211,-0.3166 -0.5879,-0.3618 -0.9949,-0.8593 l -8.6381,-13.6582 1.1759,-2.3969 v 22.8842 q 0,1.1758 -0.7237,1.9899 -0.7236,0.7688 -1.8994,0.7688 -1.1307,0 -1.8543,-0.7688 -0.7236,-0.8141 -0.7236,-1.9899 v -26.1857 q 0,-1.1306 0.8141,-1.9447 0.8593,-0.814 2.0351,-0.814 z m -34.1227,7.9597 h 10.7185 q 1.0854,0 1.809,0.7236 0.7236,0.7236 0.7236,1.809 0,1.0402 -0.7236,1.7638 -0.7236,0.6784 -1.809,0.6784 h -10.7185 q -1.0854,0 -1.809,-0.7236 -0.7237,-0.7236 -0.7237,-1.809 0,-1.0402 0.7237,-1.7186 0.7236,-0.7236 1.809,-0.7236 z m 4.8391,-5.6532 q 1.1759,0 1.8995,0.814 0.7688,0.7689 0.7688,1.9447 v 20.1254 q 0,0.6332 0.2262,1.0402 0.2713,0.4071 0.6784,0.588 0.4522,0.1809 0.9497,0.1809 0.5427,0 0.995,-0.1809 0.4522,-0.2262 1.0401,-0.2262 0.6332,0 1.1307,0.588 0.5427,0.5879 0.5427,1.6281 0,1.2663 -1.402,2.0804 -1.3568,0.814 -2.9397,0.814 -0.9497,0 -2.1256,-0.1356 -1.1306,-0.181 -2.1708,-0.7689 -0.995,-0.6331 -1.6734,-1.8995 -0.6783,-1.2663 -0.6783,-3.4823 v -20.3516 q 0,-1.1758 0.7688,-1.9447 0.8141,-0.814 1.9899,-0.814 z m -13.7436,5.2009 q 1.1758,0 1.9447,0.8141 0.7688,0.7688 0.7688,1.9447 v 11.4873 q 0,4.7939 -2.6683,7.5979 -2.6683,2.804 -7.6884,2.804 -5.02,0 -7.6883,-2.804 -2.6231,-2.804 -2.6231,-7.5979 v -11.4873 q 0,-1.1759 0.7688,-1.9447 0.7689,-0.8141 1.9447,-0.8141 1.1759,0 1.9447,0.8141 0.7689,0.7688 0.7689,1.9447 v 11.4873 q 0,2.7588 1.2211,4.1155 1.2211,1.3116 3.6632,1.3116 2.4875,0 3.7085,-1.3116 1.2211,-1.3567 1.2211,-4.1155 v -11.4873 q 0,-1.1759 0.7689,-1.9447 0.7688,-0.8141 1.9447,-0.8141 z m -22.4447,12.1205 q 0,3.7085 -1.6733,6.5577 -1.6281,2.804 -4.4321,4.3869 -2.7588,1.5829 -6.1959,1.5829 -3.4372,0 -6.2412,-1.5829 -2.7587,-1.5829 -4.4321,-4.3869 -1.6281,-2.8492 -1.6281,-6.5577 0,-3.7085 1.6281,-6.5125 1.6734,-2.8492 4.4321,-4.4321 2.804,-1.6281 6.2412,-1.6281 3.4371,0 6.1959,1.6281 2.804,1.5829 4.4321,4.4321 1.6733,2.804 1.6733,6.5125 z m -5.427,0 q 0,-2.3065 -0.9498,-3.9799 -0.9045,-1.7185 -2.4874,-2.6683 -1.5377,-0.9497 -3.4371,-0.9497 -1.8995,0 -3.4824,0.9497 -1.5377,0.9498 -2.4874,2.6683 -0.9045,1.6734 -0.9045,3.9799 0,2.2613 0.9045,3.9798 0.9497,1.6734 2.4874,2.6231 1.5829,0.9498 3.4824,0.9498 1.8994,0 3.4371,-0.9498 1.5829,-0.9497 2.4874,-2.6231 0.9498,-1.7185 0.9498,-3.9798 z m -33.4691,-12.5727 q 3.1658,0 5.6532,1.6281 2.5326,1.5829 3.9798,4.3869 1.4925,2.804 1.4925,6.5125 0,3.7085 -1.4925,6.5577 -1.4472,2.804 -3.9346,4.4321 -2.4422,1.5829 -5.5175,1.5829 -1.8091,0 -3.3919,-0.5879 -1.5829,-0.588 -2.804,-1.4925 -1.1759,-0.9045 -1.8543,-1.809 -0.6331,-0.9498 -0.6331,-1.5829 l 1.4019,-0.588 v 3.3015 q 0,1.1759 -0.7688,1.9899 -0.7688,0.7689 -1.9447,0.7689 -1.1759,0 -1.9447,-0.7689 -0.7688,-0.7688 -0.7688,-1.9899 v -28.4017 q 0,-1.1758 0.7688,-1.9447 0.7688,-0.814 1.9447,-0.814 1.1759,0 1.9447,0.814 0.7688,0.7689 0.7688,1.9447 v 11.4873 l -0.7688,-0.407 q 0,-0.5879 0.6332,-1.402 0.6331,-0.8593 1.7185,-1.6733 1.0855,-0.8593 2.4875,-1.402 1.4472,-0.5427 3.0301,-0.5427 z m -0.6784,4.9748 q -1.9899,0 -3.4824,0.9949 -1.4924,0.995 -2.3517,2.7136 -0.8141,1.6733 -0.8141,3.8442 0,2.1256 0.8141,3.8894 0.8593,1.7185 2.3517,2.7135 1.4925,0.995 3.4824,0.995 1.9899,0 3.4371,-0.995 1.4925,-0.995 2.3065,-2.7135 0.8593,-1.7638 0.8593,-3.8894 0,-2.1709 -0.8593,-3.8442 -0.814,-1.7186 -2.3065,-2.7136 -1.4472,-0.9949 -3.4371,-0.9949 z m -28.6582,-4.8844 -9.7688,22.9746 q -0.3165,0.8593 -0.9949,1.3568 -0.6332,0.4523 -1.402,0.4523 -1.2211,0 -1.8091,-0.6784 -0.5879,-0.6784 -0.5879,-1.6734 0,-0.407 0.1357,-0.8593 l 11.2612,-27.0449 q 0.3618,-0.9045 1.0854,-1.402 0.7688,-0.4975 1.6281,-0.407 0.8141,0 1.4925,0.4975 0.7236,0.4522 1.0402,1.3115 l 11.1255,26.5022 q 0.2261,0.588 0.2261,1.0854 0,1.2211 -0.8141,1.9447 -0.7688,0.7237 -1.7185,0.7237 -0.8141,0 -1.4925,-0.4975 -0.6332,-0.4975 -0.995,-1.3568 l -9.7235,-22.658 z m -8.3668,17.4571 2.4874,-5.2009 h 12.211 l 0.8592,5.2009 z")
    about_me_path__gr.attr({
        id:    "about_me_path__gr",
    })
    about_me_path.fill('#2d3134ff')
    about_me_path.move(screen_width_in_px/2-about_me_path.bbox().width-270,screen_height/2-about_me_path.bbox().height-10)
    //about_me_path.rotate(-90)
    about_me_path.scale(2.8)
    about_me_path.attr({id: 'about_me_path'})
    about_me_path__gr.attr({
        x: -500,
        opacity: 0.0
    })


    var paragraph__gr = text_gr.nested()

    var paragraph = paragraph__gr.text(function(add){
        add.tspan('Imagination is the beginning of creation.').newLine()
        add.tspan('You imagine what you desire,').newLine()
        add.tspan('you will what you imagine,').newLine()
        add.tspan('and at last, ').newLine() 
        add.tspan('you create what you will.').newLine()
        add.tspan('').newLine()
        add.tspan('-George Bernand Shaw').newLine().dx(105).font({size:"1rem"})
    }).font({
        opacity: 1.0,
        weight:  600,
        fill:    '#2d3134ff',
        family:  'Open Sans',
        size:    "1.2rem"//"1.2vw"
    })   

    paragraph.attr({
        id: "paragraph_text"
    })
    paragraph__gr.attr({
        x: screen_width_in_px/2-paragraph__gr.bbox().width-170,
        y: screen_height/2+70,
    })
    var text_info = {
        "about_me_path__gr":  about_me_path__gr,
        "paragraph":      paragraph,
        "hashtag_symbol": hashtag_symbol
    }
    
    return text_info;
}

//----------------------------------------------IMAGES DESKTOP----------------------------------------------------------------
function about__images__desktop(parent_gr, screen_width_in_px, screen_height){

    var images_gr = parent_gr.nested()
    .attr({
        width: screen_width_in_px/2+120,
        height: screen_height+screen_height/3,
        x: screen_width_in_px/3-32
    })

    var rect_width = (screen_width_in_px/2)/6.7;
    var images_data = {
        'title': 'images',

        'elements_data':[
            {
                'img_url':   './../portfolio-app-media/media/a_1.png',
                'height':     '350',
                'position_x': 0,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_2.png',
                'height':     '350', // %
                'position_x': rect_width+15,
                'position_y': 0,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_3.png',
                'height':     '650',
                'position_x': rect_width*2+30,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },

            {
                'img_url':   './../portfolio-app-media/media/a_4.png',
                'height':     '160',
                'position_x': rect_width*3+45,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_5.png',
                'height':     '315',
                'position_x': rect_width*3+45,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_6.png',
                'height':     '650',
                'position_x': rect_width*4+60,
                'position_y': 190,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_7.png',
                'height':     '165',
                'position_x': rect_width*5+75,
                'position_y': 345,
                'view_box_x': '0',
                'view_box_y': '0'
            },
            {
                'img_url':   './../portfolio-app-media/media/a_8.png',
                'height':     '315',
                'position_x': rect_width*5+75,
                'position_y': 525,
                'view_box_x': '0',
                'view_box_y': '0'
            }

        ]
    }

    var img_url_0 = images_data['elements_data'][0]['img_url']
    var img_url_1 = images_data['elements_data'][1]['img_url']
    var img_url_2 = images_data['elements_data'][2]['img_url']
    var img_url_3 = images_data['elements_data'][3]['img_url']
    var img_url_4 = images_data['elements_data'][4]['img_url']
    var img_url_5 = images_data['elements_data'][5]['img_url']
    var img_url_6 = images_data['elements_data'][6]['img_url']
    var img_url_7 = images_data['elements_data'][7]['img_url']

    var height_0 = images_data['elements_data'][0]['height']
    var height_1 = images_data['elements_data'][1]['height']
    var height_2 = images_data['elements_data'][2]['height']
    var height_3 = images_data['elements_data'][3]['height']
    var height_4 = images_data['elements_data'][4]['height']
    var height_5 = images_data['elements_data'][5]['height']
    var height_6 = images_data['elements_data'][6]['height']
    var height_7 = images_data['elements_data'][7]['height']

    var position_x_0 = images_data['elements_data'][0]['position_x'];
    var position_x_1 = images_data['elements_data'][1]['position_x'];
    var position_x_2 = images_data['elements_data'][2]['position_x'];
    var position_x_3 = images_data['elements_data'][3]['position_x'];
    var position_x_4 = images_data['elements_data'][4]['position_x'];
    var position_x_5 = images_data['elements_data'][5]['position_x'];
    var position_x_6 = images_data['elements_data'][6]['position_x'];
    var position_x_7 = images_data['elements_data'][7]['position_x'];

    var position_y_0 = images_data['elements_data'][0]['position_y'];
    var position_y_1 = images_data['elements_data'][1]['position_y'];
    var position_y_2 = images_data['elements_data'][2]['position_y'];
    var position_y_3 = images_data['elements_data'][3]['position_y'];
    var position_y_4 = images_data['elements_data'][4]['position_y'];
    var position_y_5 = images_data['elements_data'][5]['position_y'];
    var position_y_6 = images_data['elements_data'][6]['position_y'];
    var position_y_7 = images_data['elements_data'][7]['position_y'];

    var view_box_x = images_data['elements_data'][0]['view_box_x'];
    var view_box_y = images_data['elements_data'][0]['view_box_y'];

    function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
        var image__gr_arr = parent_gr.nested()
            .attr({width: rect_width, height: rect_height})
            .attr({"x": x})
            .attr({"y": y})

        console.log("------------========================")
        console.log(image__gr_arr)

        var image_gr     = image__gr_arr[0]
        var image_rect   = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
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
                     about_create__image(images_gr, img_url_0, rect_width, height_0, position_x_0, position_y_0, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_1, rect_width, height_1, position_x_1, position_y_1, view_box_x, view_box_y)
    var image_gr_2 = about_create__image(images_gr, img_url_2, rect_width, height_2, position_x_2, position_y_2, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_3, rect_width, height_3, position_x_3, position_y_3, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_4, rect_width, height_4, position_x_4, position_y_4, view_box_x, view_box_y)
    var image_gr_5 = about_create__image(images_gr, img_url_5, rect_width, height_5, position_x_5, position_y_5, view_box_x, view_box_y)
    var image_gr_6 = about_create__image(images_gr, img_url_6, rect_width, height_6, position_x_6, position_y_6, view_box_x, view_box_y)
                     about_create__image(images_gr, img_url_7, rect_width, height_7, position_x_7, position_y_7, view_box_x, view_box_y)

    // A__RECT 
    var rect_height = (screen_height/2)/2;
    var rects_gr = images_gr.nested()

    var a_rect_gr     = rects_gr.nested()
    var a_rect_x      = image_gr_2.x()
    var a_rect_y      = image_gr_2.y()
    var a_rect_width  = image_gr_2.width()
    var a_rect_height = image_gr_2.height()

    var a_rect = a_rect_gr.rect(a_rect_width,a_rect_height/2)
    a_rect.attr({
            fill: "#f7a60bf2",
            x: a_rect_x,
            y: a_rect_y-a_rect_height-100
        })

    // B__RECT 
    var b_rect_gr     = rects_gr.nested()
    var b_rect_height = image_gr_5.height()
    var b_rect_width  = image_gr_5.width()
    var b_rect_x      = image_gr_5.x()
    var b_rect_y      = image_gr_5.y()

    var b_rect = b_rect_gr.rect(b_rect_width,b_rect_height)
    b_rect.attr({
            id: "b_rect",
            fill: "#f7a60bf2",
            x: b_rect_x,
            y: b_rect_y+b_rect_height+rect_height*5
        })

    // C__RECT 
    var c_rect_gr = rects_gr.nested()
    var c_rect_width  = image_gr_6.width()
    var c_rect_height = image_gr_6.height()
    var c_rect_x      = image_gr_6.x()
    var c_rect_y      = image_gr_6.y()
 
    var c_rect = c_rect_gr.rect(c_rect_width,a_rect_height/1.5)
        .attr({
            fill: "#f7a60bf2",
            x: c_rect_x,
            y: c_rect_y-a_rect_height-100
        })

    var rects = {
        "a_rect":        a_rect,
        "a_rect_y":      a_rect_y,
        "a_rect_height": a_rect_height,
        "b_rect":        b_rect,
        "b_rect_y":      b_rect_y,
        "b_rect_height": b_rect_height,
        "c_rect":        c_rect,
        "c_rect_y":      c_rect_y,
        "c_rect_height": c_rect_height,
        "rect_heigh":    rect_height
    }

    return rects
}

function about_create__image(parent_gr, image_url, rect_width, rect_height, x, y, opacity, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
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

function about_intro__info(parent_gr, screen_width_in_px, screen_height, about__div_bottom_y){

    var images_gr = parent_gr.nested().attr({id:"intro__info"}).attr({y: -35, opacity: 0.1})

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var light__url    = "./../portfolio-app-media/media/light.jpg"
    
    about_create__image(images_gr, light__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph__a = images_gr.text(function(add){
            add.tspan('My  name is Nevena. I am Junior').dx('50')
            add.tspan('UI | UX web designer & developer').fill('#2a3d35ef').font('size','2.2vw').dx('-20').newLine()
            add.tspan('currently based in Belgrade, Serbia.').dx('0').newLine()
        })
        .font({
            opacity: 1.0,
            weight:  700,
            leading:  '1.5em',
            fill:    '#ebf2edff',
            family:  'Open Sans',
            size:    '1.8vw'
        })    
    paragraph__a.attr({
        opacity: 0.0,
        id:     'paragraph__a',
        x:       50,
        y:       screen_height/2-paragraph__a.bbox().height/2
    }) 

    // ABOUT__SCROLL_TRIGGER
    var trigger_y_position__about_canvas = about__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__about_canvas,
        "about_canvas__trigger",
        screen_height,
        // activate_fn
        function() {
            images_gr.animate({
                    duration: 400,
                    delay: 200, 
                }).ease('>') 
                .attr({y: 0, opacity: 1.0})
            paragraph__a.animate({
                delay:    250,
                duration: 400,
            }).ease('>') 
            .attr({
                opacity: 1.0,
                x:       240,
            })
        },
        // deactivate
        function() {
            images_gr.animate({
                duration: 400,
                delay:    200, 
            }).ease('>') 
            .attr({y: -35, opacity: 0.1})
            paragraph__a.animate({
                delay:    250,
                duration: 400,
            }).ease('>') 
            .attr({
                opacity: 0.0,
                x:       50,
            })
        });
}

function history__info(parent_gr, screen_width_in_px, screen_height, history__div_bottom_y){

    var images_gr = parent_gr.nested().attr({y: -50, opacity: 0.1})

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var bist__url     = "./../portfolio-app-media/media/bist.png"

    about_create__image(images_gr, bist__url, rect_width, rect_height, 0, rect_height/2, 0.7, 0, 0)

    var paragraph__b = images_gr.text(function(add){
        add.tspan('After graduating as a sculptor on Faculty').newLine()
        add.tspan('of Fine Arts I`ve developed passion').newLine() 
        add.tspan('for creating through digital media.').newLine()
        add.tspan('I`ve spent the last 4 years exploring').newLine()
        add.tspan('programming languages ').fill('#fff').newLine()//.font('size','36')
        add.tspan('& wide palette')
        add.tspan('of different design genres.').newLine()
    })
    .font({
        opacity: 1.0,
        weight:  700,
        leading:  '1.5em',
        fill:    '#fff',
        family:  'Open Sans',
        size:    '1.5vw'
    })    

    paragraph__b.attr({
        id:     'paragraph__b',
        opacity: 0.0,
        x:       screen_width_in_px,
        y:       screen_height/2-paragraph__b.bbox().height/2
    }) 

    // HISTORY__SCROLL_TRIGGER
    var trigger_y_position__history_canvas = history__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__history_canvas,
        "history_canvas__trigger",
        screen_height,
        // activate_fn
        function() {
            images_gr.animate({
                duration: 400,
                delay: 400
            }).ease('>') 
            .attr({y: 0, opacity: 1.0})
            paragraph__b.animate({
                delay:    200,
                duration: 400,
            }).ease('>') 
            .attr({
                opacity: 1.0,
                x:       screen_width_in_px/2,
            })
        },
        // deactivate
        function() {
            images_gr.animate({
                duration: 200,
                delay:    400, 
            }).ease('>') 
            .attr({y: -50, opacity: 0.1})
            paragraph__b.animate({
                delay:    200,
                duration: 400,
            }).ease('>') 
            .attr({
                opacity: 0.0,
                x:       screen_width_in_px,
            })
        });
    
}

function process__info(parent_gr, screen_width_in_px, screen_height, process__div_bottom_y){

    var images_gr = parent_gr.nested().attr({y: -50, opacity: 0.1})

    var rect_width  = screen_width_in_px;
    var rect_height = screen_height/2;

    var stickers__url = "./../portfolio-app-media/media/stickeers.jpg"

    about_create__image(images_gr, stickers__url, rect_width, rect_height, 0, rect_height/2, 0.6, 0, 0)

    var paragraph__c = images_gr.text(function(add){
        add.tspan('I find my passion in creating and coding').newLine() 
        add.tspan('visualy appealing, responsive websites with').newLine()
        add.tspan('focus on friendly, emotive, aesthetically').newLine()
        add.tspan('pleasing, clear, on-brand and usable').newLine()
        add.tspan('interfaces.').newLine()

    }) 
    .font({
        opacity: 1.0,
        weight:  700,
        leading:  '1.5em',
        fill:    '#ebf2edff',
        family:  'Open Sans',
        size:    '1.5vw'
    })    
    paragraph__c.attr({
        opacity: 0.0,
        id: 'paragraph__c',
        x: 50,
        y: screen_height/2-paragraph__c.bbox().height/2
    }) 

    // PROCESS__SCROLL_TRIGGER
    var trigger_y_position__process_canvas = process__div_bottom_y-200;
    sc_trigger__create(trigger_y_position__process_canvas,
        "process_canvas__trigger",
        screen_height,
        // activate_fn
        function() {
            images_gr.animate({
                duration: 400,
                delay:    400, 
            }).ease('>') 
            .attr({y: 0, opacity: 1.0})
            paragraph__c.animate({
                duration: 400,
                delay:    400, 
            }).ease('>') 
            .attr({
                opacity: 1.0,
                x: 240,
            })
        },
        // deactivate
        function() {
            images_gr.animate({
                duration: 200,
                delay:    400,  
            }).ease('<') 
            .attr({y: -50, opacity: 0.1})
            paragraph__c.animate({
                duration: 400,
                delay:    400, 
            }).ease('>') 
            .attr({
                opacity: 0.0,
                x: 50,
            })
        });

}

function about_video__info(parent_gr, screen_width_in_px, screen_height){

    var video_gr   = parent_gr.nested()

    var video_global_height = 800
    var video_gr_y = screen_height/2-400;
    video_gr.attr({
        y: video_gr_y
    })

    var video_global_x      = video_gr.x()
    var video_global_y      = video_gr_y

    $("#about #video__info").append(`
        <div id="video__container">
            <video width="320" height="240" id='video__a' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar1.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__b' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar2.mp4' type='video/mp4'>
            </video>
            <video width="320" height="240" id='video__c' autoplay loop muted>
                <source src='./../portfolio-app-media/media/about_page__small__kadar3.mp4' type='video/mp4'>
            </video>
        </div>`);

    $("#about #video__info").find("#video__container").css({
        opacity: 0.6
    });

    $("#about #video__info").find("#video__a").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y-200,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__b").css({
        // id: "video",
        position:   "absolute",
        background: "none",
        border:     "none",
        left:       video_global_x,
        top:        video_global_y,
        width:      screen_width_in_px,
        height:     video_global_height
    })

    $("#about #video__info").find("#video__c").css({
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

function animate_all_activate(info, screen_width_in_px, screen_height){

    var about_me_path__gr  = info["text_info"]["about_me_path__gr"]
    var paragraph      = info["text_info"]["paragraph"]
    var hashtag_symbol = info["text_info"]["hashtag_symbol"]
    var rect_height    = info["rects"]["rect_height"]
    var a_rect         = info["rects"]["a_rect"]
    var a_rect_y       = info["rects"]["a_rect_y"]
    var a_rect_height  = info["rects"]["a_rect_height"]
    var b_rect         = info["rects"]["b_rect"]
    var b_rect_y       = info["rects"]["b_rect_y"]
    var b_rect_height  = info["rects"]["b_rect_height"]
    var c_rect         = info["rects"]["c_rect"]
    var c_rect_y       = info["rects"]["c_rect_y"]
    var c_rect_height  = info["rects"]["c_rect_height"]

    a_rect.animate({
        delay: 600,
        duration:500
    }).ease('>')
    .attr({
        y: a_rect_y-a_rect_height/2
    })
    b_rect.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        y: b_rect_y+b_rect_height
    })
    c_rect.animate({
        delay: 550,
        duration:500
    }).ease('>')
    .attr({
        y: c_rect_y-a_rect_height/1.5
    })

    about_me_path__gr.animate({
        delay: 450,
        duration:500
    }).ease('>')
    .attr({
        x: 0,
        opacity: 1.0
    })


   /* paragraph.animate({
        delay: 600,
        duration:600
    }).ease('>')
    .attr({
        x: screen_width_in_px/2-paragraph.bbox().width-140,
        y: screen_height/2+paragraph.bbox().height/2+40
    }) */
    /*hashtag_symbol.animate({
        delay: 200,
        duration:1000
    }).ease('>')*/

}

