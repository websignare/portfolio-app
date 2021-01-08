
//-------------------------------WEB DEVELOPMENT----------------------------------------------------------------
function web_development(parent_gr, screen_width_in_px, screen_height){
    var dev_layout_gr = parent_gr.nested() 
        .attr({
            id: 'dev_layout_gr'
        })  

    var background_rect = dev_layout_gr.rect(screen_width_in_px,screen_height)
        .fill('#c3c599ff')
        .attr({
            id:      "pink",
            opacity: 1.0,
        })
    var green_rect_shadow = dev_layout_gr.rect(350,350)
        .fill("#999b6fff")
    green_rect_shadow.attr({
            id:      "green_rect_shadow",
            opacity:  0.5,
            x:  green_rect_shadow.bbox().x,
            y:  screen_height/2-50
        })

    var green_rect_gr = dev_layout_gr.nested() 
        .attr({
            id: "green_rect_gr"
        })
        var green_rect_gr = dev_layout_gr.nested() 
            .attr({
                id: "green_rect_gr"
            })
        
    
    var green_rect = green_rect_gr.rect(300,220)
        .fill('#789b7fff')
    green_rect.attr({
        id:      "green_rect",
        opacity: 1.0,
    })

    var web = green_rect_gr.text(function(text_element){
        text_element.tspan('Web')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#c3c599ff',
        family:  'Spartan',
        size:    70
    })
    web.attr({
        id: 'web',
        x:  green_rect.bbox().width/2-web.bbox().width/2,
        y:  (green_rect.bbox().height+web.bbox().height)/2-10
    })

    green_rect_gr.attr({
        width:  green_rect.bbox().width,
        height: green_rect.bbox().height,
        y:      screen_height/2
    })

    var development = dev_layout_gr.text(function(text_element){
        text_element.tspan('Development')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#fff',
        family:  'Spartan',
        size:    25
    })
    development.attr({
        id: 'development',
        x:  green_rect.bbox().width-development.bbox().width,
        y:  screen_height/2+green_rect.bbox().height+development.bbox().height
    })

    var paragraph = dev_layout_gr.text(function(add) {
        add.tspan('Lorem ipsum dolor sit amet ').newLine()
        add.tspan('consectetur')//.fill('#f06')
        add.tspan('.')
        add.tspan('Cras sodales imperdiet auctor.').newLine()
        add.tspan('Nunc ultrices lectus at erat').newLine()
        add.tspan('dictum pharetra elementum ante').newLine()
        add.tspan('Cras sodales imperdiet auctor.').newLine()
        add.tspan('Lorem ipsum dolor sit amet ').newLine()
        add.tspan('consectetur')//.fill('#f06')
        add.tspan('.')
        add.tspan('Cras sodales imperdiet auctor.').newLine()
        add.tspan('Nunc ultrices lectus at erat').newLine()
        add.tspan('dictum pharetra elementum ante').newLine()
        add.tspan('Cras sodales imperdiet auctor.').newLine()
      })
    paragraph.font({
        opacity: 1.0,
        weight:  400,
        fill:    '#fff',
        family:  'Spartan',
        size:    15
    })
    paragraph.attr({
        id: "paragraph",
        x:  (screen_width_in_px-paragraph.bbox().width)/2,
        y:  screen_height/2-paragraph.bbox().height-paragraph.bbox().height/2
    })
    apply_filter(dev_layout_gr, "green_rect_shadow_filter", "green_rect_shadow")

    var web_dev_info = {
        "green_rect_shadow": green_rect_shadow,
        "green_rect_gr":     green_rect_gr,
        "development":       development,
        "paragraph":         paragraph
    }

    var initial_coords = {
        "green_rect_shadow": {x:screen_width_in_px,y:green_rect_shadow.y()},
        "green_rect_gr":     {x:screen_width_in_px,y:green_rect_gr.y()},
        "development":       {x:0-development.x(),y:development.y()},
        "paragraph":         {x:paragraph.x(),y:0-paragraph.y()},
    }

    var final_coords = {
        "green_rect_shadow": {x:green_rect_shadow.x(),y:green_rect_shadow.y()},
        "green_rect_gr":     {x:green_rect_gr.x(),y:green_rect_gr.y()},
        "development":       {x:development.x(),y:development.y()},
        "paragraph":         {x:paragraph.x(),y:paragraph.y()},
    }

    animate_web_dev__activate(web_dev_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    animate_web_dev__deactivate(web_dev_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    
}

function animate_web_dev__activate(web_dev_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var green_rect_shadow = web_dev_info["green_rect_shadow"];
    var green_rect_gr     = web_dev_info["green_rect_gr"];
    var development       = web_dev_info["development"];
    var paragraph         = web_dev_info["paragraph"];

    green_rect_shadow.attr({x: initial_coords["green_rect_shadow"]["x"] })
    green_rect_shadow.animate({
        duration: 500,
    }).attr({x: final_coords["green_rect_shadow"]["x"] })

    green_rect_gr.attr({x: initial_coords["green_rect_gr"]["x"] })
    green_rect_gr.animate({
        duration: 500,
    }).attr({x: final_coords["green_rect_gr"]["x"] })
    
    .after(function() {
        development.attr({x : initial_coords["development"]["x"] })
        paragraph.attr({y: initial_coords["paragraph"]["y"] })
        
        development.animate({
            duration: 500,
        }).attr({x: final_coords["development"]["x"] })

        paragraph.animate({
            duration: 300,
        }).attr({y: final_coords["paragraph"]["y"] })

    });
}

function animate_web_dev__deactivate(web_dev_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var green_rect_shadow = web_dev_info["green_rect_shadow"];
    var green_rect_gr     = web_dev_info["green_rect_gr"];
    var development       = web_dev_info["development"];
    var paragraph         = web_dev_info["paragraph"];

    green_rect_shadow.attr({x: initial_coords["green_rect_shadow"]["x"] })
    green_rect_shadow.animate({
        duration: 500,
    }).attr({x: final_coords["green_rect_shadow"]["x"] })

}
