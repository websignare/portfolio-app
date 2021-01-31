/*$(document).ready(function(){
    test__info_column();
})*/

/*function test__info_column(){

    var screen_width  = window.innerWidth;
    var screen_height = window.innerHeight;

    $("body").append(`
        <div id="info_column">
        </div>
    `);

    $("#info_column").css({                    
        "background-color": "none",
        "position":         "relative",
        "height":           screen_height,
        "width":            screen_width
    }); 

    //var bottom_circle;
    var bottom_element = {
        "name":"bottom",
        "date":"tag_2",    
        "draw_fn": function(parent_gr, rect_width){
            //element_number
            var rect_height = 300
            var rect_width = 350

            var love_image_url = "./images/LOVE IS CALLING , 2013.jpeg"
            var kusama_image_url = "./images/kusama.jpg"

            fit_image_inside_rect(parent_gr, love_image_url, rect_width, rect_height/2, 0, 0)
            fit_image_inside_rect(parent_gr, kusama_image_url, rect_width, rect_height/2, 0, rect_height/2)

        },  
        "activate_fn": function(parent_gr){
            //bottom_circle = parent_gr.circle(50).fill('#6C5B78').radius(50).move(17,17)

        },  
        "deactivate_fn": function(parent_gr){
            //bottom_circle.remove()

        },        
        "height":"300",        
        "color": "#391826",
        "element_number_color": "#204c39",
        "element_number": "3"
    }

    var column_info = {

        "title": "elements",

        "elements_data":[ 
            {
                "name":"TOP",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    //element_number
                    var rect_height = 200
                    var rect_width  = 350

                    yayoi_kusama_image_url = './images/yayoi_kusama.jpg'
                    fit_image_inside_rect(parent_gr, yayoi_kusama_image_url, rect_width/2, rect_height, rect_width/2, 0)

                        //set image width and height at 100%
                        //in viewBox put '0 0 imageWidth imageHeight'
                        //xMidYMid positions img in center and slice crops it
                        //create function fit-image-inside-rect(parent_gr, urls, rect_width, rect_height)

                    var left_bottom_gr    = parent_gr.nested(rect_width/2,rect_height)
                    var left_bottom       = left_bottom_gr.rect(rect_width/2,rect_height).fill("#b8b8b8").attr({id: "left_bottom"})
                    var left_bottom_text  = left_bottom_gr.text(function(add) {
                        add.tspan('Yayoi Kusama is a Japanese artist').newLine()
                        add.tspan('who is sometimes called "the').newLine()//.dx(20)
                        add.tspan('princess of polka dots".').newLine()
                        add.tspan('Although she makes lots of').newLine()
                        add.tspan('different types of art – paintings,').newLine()
                        add.tspan('sculptures, performances and').newLine()
                        add.tspan('installations – they have one thing').newLine()
                        add.tspan('in common, DOTS!').newLine()

                      })
                      left_bottom_text.font({
                        family: 'Lora',
                        size:   10,
                        fill:   '#fff',
                        anchor: 'left',
                        weight: 'bold',
                        leading:'1.5em'
                      }).move(5, 45)

                    var left_top_gr    = parent_gr.nested(rect_width/2,rect_height/6)
                    var left_top_rect  = left_top_gr.rect(rect_width/2,rect_height/6).fill("#d4d4d4").attr({id: "left_top"})
                    var left_top_text  = left_top_gr.text("YAYOI KUSAMA")
                        left_top_text.font({
                          family: 'Montserrat',
                          size:   19,
                          fill:   '#d90f0f',
                          anchor: 'left',
                          weight: 'bold',
                          leading:'1.5em'
                        }).move(10, 5)
                },    
                "activate_fn": function(parent_gr){
                   

                }, 
                "deactivate_fn": function(parent_gr){

                },      
                "height":"200",         
                "color": "#204c39",
                "element_number_color": "#d90f0f",
                "element_number": "1"
            },

            {
                "name":"middle",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    //element_number
                    var rect_height = 150
                    var rect_width  = 350

                    var mushrooms_image_url = "./images/mushrooms_2004.jpg"
                    var wind_image_url      = './images/passage_of_the_wind_1988.jpg'

                    fit_image_inside_rect(parent_gr, mushrooms_image_url, rect_width/2, rect_height, 0)
                    fit_image_inside_rect(parent_gr, wind_image_url, rect_width/2, rect_height, rect_width/2)


                },   
                "activate_fn": function(parent_gr){
                   

                },   
                "deactivate_fn": function(parent_gr){

                },      
                "height":"150",         
                "color": "#18392b",
                "element_number_color": "#2b1839",
                "element_number": "2"
            },
            bottom_element,
            {
                "name":"last",
                "date":"tag_2",    
                "draw_fn": function(parent_gr){
                    

                },  
                "activate_fn": function(parent_gr){
                

                },  
                "deactivate_fn": function(parent_gr){

                },        
                "height":"100",         
                "color": "#2b1839",
                "element_number_color": "#204c39",
                "element_number": "4"
            }

        ]

    }
    var bottom_circle_center;
    var bottom_element_center = {
        "name":"bottom",
        "date":"tag_2",    
        "draw_fn": function(parent_gr, rect_width){
            //element_number
            var rect_height = 300
            var rect_width = 350

            basquiat_image_url = './images/fallen_angel_1981.jpg'
            fit_image_inside_rect(parent_gr, basquiat_image_url, rect_width, rect_height, 0, 0)

        },  
        "activate_fn": function(parent_gr){
            bottom_circle = parent_gr.circle(50).fill('#6C5B78').radius(50).move(17,17)

        },  
        "deactivate_fn": function(parent_gr){
            bottom_circle.remove()

        },        
        "height":"300",        
        "color": "#391826",
        "element_number_color": "#204c39",
        "element_number": "3"
    }
    var column_info_center = {

        "title": "elements",

        "elements_data":[ 
            {
                "name":"top",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    //element_number
                    var rect_height = 200
                    var rect_width  = 350

                    basquiat_image_url = './images/basquiat_1981.jpg'
                    fit_image_inside_rect(parent_gr, basquiat_image_url, rect_width/2, rect_height, rect_width/2, 0)

                    var left_top_gr    = parent_gr.nested(rect_width/2,rect_height/4)
                    var left_top_rect  = left_top_gr.rect(rect_width/2,rect_height/4).fill("#18363a").attr({id: "left_top"})
                    var left_top_text  = left_top_gr.text("Basquiat")
                        left_top_text.font({
                          //family:   'Helvetica'
                          size:     21,
                          fill:    '#F67280',
                          anchor:   'left',
                          weight: 'bold',
                          leading:  '1.5em'
                        }).move(5, 10)

                    var left_bottom_gr = parent_gr.nested(rect_width/2,rect_height/1.35)
                    var left_bottom    = left_bottom_gr.rect(rect_width/2,rect_height/1.35).fill("#dbd8d0").attr("y",rect_height/4).attr({id: "left_bottom"})

                },    
                "activate_fn": function(parent_gr){
                   

                }, 
                "deactivate_fn": function(parent_gr){

                },      
                "height":"200",         
                "color": "#204c39",
                "element_number_color": "#391826",
                "element_number": "1"
            },

            {
                "name":"middle",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    var rect_height = 150
                    var rect_width = 350

                    portrait_image_url = './images/Darren MacPherson.jpg'
                    cabeza_image_url = './images/cabeza_1982.jpg'

                    fit_image_inside_rect(parent_gr, portrait_image_url, rect_width/2, rect_height, 0, 0)
                    fit_image_inside_rect(parent_gr, cabeza_image_url, rect_width/2, rect_height, rect_width/2, 0)

                },   
                "activate_fn": function(parent_gr){
                   

                },   
                "deactivate_fn": function(parent_gr){

                },      
                "height":"150",         
                "color": "#18392b",
                "element_number_color": "#2b1839",
                "element_number": "2"
            },
            bottom_element_center,
            {
                "name":"last",
                "date":"tag_2",    
                "draw_fn": function(parent_gr){
                    

                },  
                "activate_fn": function(parent_gr){
                

                },  
                "deactivate_fn": function(parent_gr){

                },        
                "height":"100",         
                "color": "#2b1839",
                "element_number_color": "#204c39",
                "element_number": "4"
            }

        ]

    }
    //var bottom_circle_right;
    var bottom_element_right = {
        "name":"bottom",
        "date":"tag_2",    
        "draw_fn": function(parent_gr, rect_width){
            //element_number
            var rect_height = 300
            var rect_width = 350

            var blue_garden_image_url = './images/garden_with_blue_terrace_2019.jpg'
            var garden_image_url = './images/garden_2015.jpg'

            fit_image_inside_rect(parent_gr, blue_garden_image_url, rect_width, rect_height/2, 0, 0)
            fit_image_inside_rect(parent_gr, garden_image_url, rect_width, rect_height/2, 0, rect_height/2)

        },  
        "activate_fn": function(parent_gr){
            //bottom_circle = parent_gr.circle(50).fill('#6C5B78').radius(50).move(17,17)

        },  
        "deactivate_fn": function(parent_gr){
            //bottom_circle.remove()

        },        
        "height":"300",        
        "color": "#391826",
        "element_number_color": "#204c39",
        "element_number": "3"
    }
    var column_info_right = {

        "title": "elements",

        "elements_data":[ 
            {
                "name":"top",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    //element_number
                    var rect_height = 200
                    var rect_width  = 350

                    var hockney_images_urls = './images/david-hockney.jpg'

                    fit_image_inside_rect(parent_gr, hockney_images_urls, rect_width/2, rect_height, rect_width/2, 0)

                    var left_top_gr    = parent_gr.nested(rect_width/2,rect_height/4)
                    var left_top_rect  = left_top_gr.rect(rect_width/2,rect_height/4).fill("#18363a").attr({id: "left_top"})
                    var left_top_text  = left_top_gr.text("David Hockney")
                        left_top_text.font({
                          //family:   'Helvetica'
                          size:     21,
                          fill:    '#F67280',
                          anchor:   'left',
                          weight: 'bold',
                          leading:  '1.5em'
                        }).move(5, 10)

                    var left_bottom_gr = parent_gr.nested(rect_width/2,rect_height/1.35)
                    var left_bottom    = left_bottom_gr.rect(rect_width/2,rect_height/1.35).fill("#dbd8d0").attr("y",rect_height/4).attr({id: "left_bottom"})

                },    
                "activate_fn": function(parent_gr){
                   

                }, 
                "deactivate_fn": function(parent_gr){

                },      
                "height":"200",   
                "color": "#204c39",
                "element_number_color": "#391826",
                "element_number": "1"
            },

            {
                "name":"middle",
                "date":"tag_2",    
                "draw_fn": function(parent_gr, rect_width){
                    //element_number
                    var rect_height = 150
                    var rect_width = 350

                    var pool_image_url = './images/peter_getting_out_of_nicks_pool.jpg'
                    var lawn_image_url = './images/a_lawn_being_sprinkled_1967.jpg'

                    fit_image_inside_rect(parent_gr, pool_image_url, rect_width/2, rect_height, 0, 0)
                    fit_image_inside_rect(parent_gr, lawn_image_url, rect_width/2, rect_height, rect_width/2, 0)

                },   
                "activate_fn": function(parent_gr){
                   

                },   
                "deactivate_fn": function(parent_gr){

                },      
                "height":"150",         
                "color": "#18392b",
                "element_number_color": "#2b1839",
                "element_number": "2"
            },
            bottom_element_right,
            {
                "name":"last",
                "date":"tag_2",    
                "draw_fn": function(parent_gr){
                    

                },  
                "activate_fn": function(parent_gr){
                

                },  
                "deactivate_fn": function(parent_gr){

                },        
                "height":"100",         
                "color": "#2b1839",
                "element_number_color": "#204c39",
                "element_number": "4"
            }

        ]

    }
    console.log(column_info)

    var info_container    = SVG().addTo("#info_column").size(screen_width, screen_height)
    var info_container_gr = info_container.nested()   
    
    create_info_column(info_container_gr, screen_height, screen_width, 0, 100, column_info);
    //calling second info column
    create_info_column(info_container_gr, screen_height, screen_width, 600, 100, column_info_center);
    create_info_column(info_container_gr, screen_height, screen_width, 1200, 100, column_info_right);

    $( window ).resize(function() {
        $( "#info_column" ).remove();

        var screen_width  = window.innerWidth;
        var screen_height = window.innerHeight;

        create_info_column(info_container_gr, screen_height, screen_width, 0, 100, column_info);
        create_info_column(info_container_gr, screen_height, screen_width, 600, 100, column_info_center); 
        create_info_column(info_container_gr, screen_height, screen_width, 1200, 100, column_info_right);

    });
    return info_container_gr

}

function fit_image_inside_rect(parent_gr, image_url, rect_width, rect_height, x, y){
    var image_gr    = parent_gr.nested().attr({width: rect_width, height: rect_height}).attr({"x": x}).attr({"y": y})
    var image_rect  = image_gr.rect(rect_width, rect_height).fill("#102427").attr({'stroke-width': 0})
    var image_gr = image_gr.image(image_url, function (e) {
        console.log(e)
        var image_width  = e.target.naturalWidth
        var image_height = e.target.naturalHeight

        image_gr.attr({
            viewBox: '0 0 '+image_width+' '+image_height,
            preserveAspectRatio: 'xMidYMid slice'
        })
    })
    .attr({width: '100%', height: '100%'})
}*/

function create_info_column(parent_gr, screen_height, screen_width, x, y, column_info){

    var screen_width  = window.innerWidth;
    var screen_height = window.innerHeight;

    console.log("aaaa0000")
    console.log(parent_gr)
    var component_gr    = parent_gr.nested().attr({"y": y}).attr({"x": x}).attr({id: "info_column"})
    var background_rect = component_gr.rect(screen_width,screen_height).fill("#000").opacity(0.0)

    var elements_data           = column_info["elements_data"];
    var element_previous_y      = 0;
    var element_previous_height = 0;

    for (i = 0; i < elements_data.length; i++) {

        var element_data = elements_data[i];

        //distance between elements
        var distance   = 15;
        // parseInt() converts string to integer (natural number)
        var element_y = 0;

        if ( i > 0){

            element_y = element_previous_y + element_previous_height + distance  
    
        }

        console.log(element_previous_y,"aaaaaaa")
        //attach create_element for info_column parent
        create_element(component_gr, column_info, element_data, element_y, screen_height, screen_width);
        console.log("400")


        element_previous_y      = element_y;
        element_previous_height = parseInt(element_data.height)
    
    
    //var parent_gr;
    //column_info["element_data"][0]["draw_fn"](parent_gr)
    }

}


function apply_filter(p_shadow_gr) {

    let filter = document.createElementNS('http://www.w3.org/2000/svg','filter');
    filter.setAttribute("id", "element_shadow")
    p_shadow_gr.node.appendChild(filter);


    let blur = document.createElementNS('http://www.w3.org/2000/svg','feGaussianBlur');
    blur.setAttribute('stdDeviation','0.9');
    filter.appendChild(blur);



    p_shadow_gr.find("#element_shadow_rect").attr({"filter": "url(#element_shadow)"})

}

function create_element(parent_gr, column_info, element_data, element_y, screen_height, screen_width){
    var element_name         = element_data["name"];
    var element_date         = element_data["date"];
    var element_height       = parseInt(element_data["height"]);
    var element_width        = parseInt(element_data["width"]);
    var element_color        = element_data["color"];
    var element_number_color = element_data["element_number_color"];
    var element_number       = element_data["element_number"];

    console.log(parent_gr)


    //SHADOW_rect
    /*var shadow_gr         = parent_gr.nested().move(0, element_y).size(screen_width, screen_height).attr({id: "element_shadow"})
    var background_shadow = shadow_gr.rect(element_width,element_height+100).fill("#000").move(5,5).attr({id: "element_shadow_rect"})

    apply_filter(shadow_gr);*/

    //BACKGROUND_element
    var element_gr = parent_gr.nested().move(0, element_y).size(screen_width, screen_height)
    var background = element_gr.rect(element_width,element_height).fill('none')
    
    //NAME_element
    var element_name_gr   = parent_gr.nested().move(-60, element_y+50)
        element_name_gr.attr({opacity: 0.0})
    var element_name_rect = element_name_gr.rect(150,50).fill("#123b6e")
    var element_name_text = element_name_gr.text(element_name)
        .font({
            opacity: 1.0,
            weight:  '700',
            fill:    '#fff',
            family:  'Quicksand',
            size:    28
            //weight:  50
        })
   
    //to get X POSITION of elements text inside rect, substract rect width out of element text length 
    var text_x = element_name_rect.attr("width") - element_name_text.length();
    element_name_text.move(13+text_x, 7)
    //set rect width to be the same as text width
    element_name_rect.attr({"width": element_name_text.length()+20})
    element_name_rect.attr({"x": 150-element_name_text.length()})

    //NUMBER_element_rect
    var element_number_gr   = parent_gr.nested().move(0, element_y)
        element_number_gr.attr({opacity:  0.0})
    var element_number_rect = element_number_gr.rect(50,50).fill(element_number_color)
    var element_number_text = element_number_gr.text(element_number).attr({opacity: 0.0})
        .move(element_number_rect.bbox().width/2-10,-8)
        .font({
            opacity: 1.0,
            fill:    '#fff',
            family:  'Quicksand',
            weight:  '500',
            size:    40
        });

    //CANCEL_rect
    var cancel_gr = parent_gr.nested().move(element_width, element_y)
        cancel_gr.attr({opacity: 0.0})
    var element_cancel_rect = cancel_gr.rect(50,50).fill(element_number_color)
    var line_top            = cancel_gr.line(10, 10, 40, 40).stroke({color: '#fff', width: 4, linecap: 'round', opacity: 1.0 })
    var line_bottom         = cancel_gr.line(40, 10, 10, 40).stroke({color: '#fff', width: 4, linecap: 'round', opacity: 1.0 })
  
    //OVERLAY_element
    var overlay_gr = parent_gr.nested().move(0, element_y).size(screen_width, screen_height).attr({id: "overlay"})
    var overlay    = overlay_gr.rect(element_width, element_height).fill("#533065ff").opacity(0.7).attr({id: "overlay_rect"})
    pulsating_circle(overlay_gr, 2000, screen_width/2+200, screen_height/2+200)

    var element_activated = false;

    overlay_gr.click(function() {

        // ACTIVATE 
        if (element_activated == false) {
            
            overlay_gr.animate({
                duration: 200
            })
            .after(function() {

                overlay_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    //wait: 20
                })
                .attr({opacity: 0.0})
                .attr({ width: '0' }); 

                element_name_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    wait: 20
                })
                .attr({opacity: 1.0})
                
                    element_number_gr.animate({
                        duration: 100,
                        //delay: 500,
                        when: 'now',
                        swing: true,
                        times: 1,
                        wait: 40
                    })
                    .attr({opacity: 1.0})

            })
            element_data["activate_fn"](activate_fn_gr);

            element_activated = true;

            cancel_gr.attr({opacity: 1.0})

        }
    });
    
    // DEACTIVATE
    cancel_gr.click(function() {

        if (element_activated == true){

            overlay_gr.animate({
                duration: 200
            })
            .after(function() {

                overlay_gr.animate({
                    duration: 100,
                    //delay: 500,
                    when: 'now',
                    swing: true,
                    times: 1,
                    wait: 20
                })
                .attr({opacity: 0.9})
                .attr({ width: element_width })
                
                    element_name_gr.animate({
                        duration: 100,
                        //delay: 500,
                        when: 'now',
                        swing: true,
                        times: 1,
                        wait: 20
                    })
                    .attr({opacity: 0.0})

                        element_number_gr.animate({
                            duration: 100,
                            //delay: 500,
                            when: 'now',
                            swing: true,
                            times: 1,
                            wait: 40
                        })
                        .attr({opacity: 0.0})

            })
            element_data["deactivate_fn"](deactivate_fn_gr);
            element_activated = false;

            cancel_gr.attr({opacity: 0.0})
        }
    })


    var draw_fn_gr = element_gr.nested();
    //pull draw_fn() from array of objects
    element_data["draw_fn"](draw_fn_gr);

    var activate_fn_gr = element_gr.nested();
    //pull activate_fn() from array of objects
    //element_data["activate_fn"](activate_fn_gr);

    var deactivate_fn_gr = element_gr.nested();
    //pull deactivate_fn() from array of objects
    //element_data["deactivate_fn"](deactivate_fn_gr);

    /*setInterval(function(){
        pulsating_circle(overlay_gr, element_height)
    }, 3000)*/
}

/*function pulsating_circle(overlay_gr, element_height) {
    var element_width = 600;
    var circle_big   = overlay_gr.circle(80).fill('#cc4f78').move(element_width/2-150, element_height/7).attr({id: "big_circle"})
    var circle_small = overlay_gr.circle(80).fill('#ff6396').move(element_width/2-150, element_height/5).attr({id: "small_circle"})
    
    circle_big.animate({
        duration: 1000
    }).attr('r', 100)
    .after(function() {

        circle_big.animate({
            duration: 1000,
            //delay: 500,
            when: 'now',
            swing: true,
            times: 1,
            //wait: 20
        })
        .attr({opacity: 0.0})
        .attr('r', 80)

    })
     
    circle_small.animate({
        duration: 2000
    }).attr('r', 85)
    .after(function() {

        circle_small.animate({
            duration: 100,
            //delay: 500,
            when: 'now',
            swing: true,
            times: 1,
            //wait: 20
        })
        .attr({opacity: 1.0})
        .attr('r', 80)

    })

}*/