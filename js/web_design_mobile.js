//-------------------------------WEB DESIGN----------------------------------------------------------------
function web_design(parent_gr, screen_width_in_px, screen_height){
    var web_design_layout_gr = parent_gr.nested() 
        .attr({
            id: 'web_design_layout_gr'
        })  
        console.log(web_design_layout_gr,"weeeeeeeeeeeeeeb___________Design")

    var background_rect = web_design_layout_gr.rect(screen_width_in_px,screen_height)
        .fill('#f08e94ff')
        .attr({
            id:      "pink",
            opacity: 1.0,
        })
    var yellow_rect_shadow = web_design_layout_gr.rect(500,500)
        .fill("#c1656bff")
        .attr({
            id:      "yellow_rect_shadow",
            opacity:  0.6,
            x:     -210,
            y:     -210
        })
    var yellow_rect_gr = web_design_layout_gr.nested() 
        .attr({
            id: "yellow_rect_gr"
        })

    var yellow_rect = yellow_rect_gr.rect(250,250)
        .fill('#fee38dff')
        .attr({
            id:      "yellow_rect",
            opacity: 1.0
        })

    var web = yellow_rect_gr.text(function(text_element){
        text_element.tspan('Web')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#f08e94ff',
        family:  'Spartan',
        size:    70
    })
    web.attr({
        id: 'web',
        x:  yellow_rect.bbox().width/2-web.bbox().width/2,
        y:  (yellow_rect.bbox().height+web.bbox().height)/2-10
    })

    yellow_rect_gr.attr({
        width:  yellow_rect.bbox().width,
        height: yellow_rect.bbox().height
    })

    var design = web_design_layout_gr.text(function(text_element){
        text_element.tspan('Design')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#fff',
        family:  'Spartan',
        size:    33
    })
    design.attr({
        id: 'design',
        x:  yellow_rect.bbox().width-web.bbox().width/2-web.bbox().x+5,
        y:  yellow_rect.bbox().height+web.bbox().height/2+5
    })

    var paragraph = web_design_layout_gr.text(function(add) {
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
        y:  screen_height/2+paragraph.bbox().height
    })

    apply_filter(web_design_layout_gr, "yellow_rect_shadow_filter", "yellow_rect_shadow")

    var web_design_info = {
        "yellow_rect_shadow": yellow_rect_shadow,
        "yellow_rect_gr":     yellow_rect_gr,
        "design":             design,
        "paragraph":          paragraph
    }

    var initial_coords = {
        "yellow_rect_shadow": {x:0-yellow_rect_shadow.x(),y:yellow_rect_shadow.y()},
        "yellow_rect_gr":     {x:screen_width_in_px-yellow_rect_gr.x(),y:yellow_rect_gr.y()},
        "design":             {x:0-design.x(),y:design.y()},
        "paragraph":          {x:paragraph.x(),y:screen_height}
    }

    var final_coords = {
        "yellow_rect_shadow": {x:yellow_rect_shadow.x(),y:yellow_rect_shadow.y()},
        "yellow_rect_gr":     {x:yellow_rect_gr.x(),y:yellow_rect_gr.y()},
        "design":             {x:design.x(),y:design.y()},
        "paragraph":          {x:paragraph.x(),y:paragraph.y()}
    }

    animate_web_design__activate(web_design_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    animate_web_design__deactivate(web_design_info, initial_coords, final_coords, screen_width_in_px, screen_height)
}

function animate_web_design__activate(web_design_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var yellow_rect_shadow = web_design_info["yellow_rect_shadow"];
    var yellow_rect_gr     = web_design_info["yellow_rect_gr"];
    var design             = web_design_info["design"];
    var paragraph          = web_design_info["paragraph"];

    yellow_rect_shadow.attr({x: initial_coords["yellow_rect_shadow"]["x"] })
    yellow_rect_shadow.animate({
        duration: 600,
    }).attr({x: final_coords["yellow_rect_shadow"]["x"] })

    yellow_rect_gr.attr({x: initial_coords["yellow_rect_gr"]["x"] })
    yellow_rect_gr.animate({
        duration: 300,
    }).attr({x: final_coords["yellow_rect_gr"]["x"] })
    
    .after(function() {
        design.attr({x : initial_coords["design"]["x"] })
        paragraph.attr({y: initial_coords["paragraph"]["y"] })
        
        design.animate({
            duration: 600,
        }).attr({x: final_coords["design"]["x"] })

        paragraph.animate({
            duration: 300,
        }).attr({y: final_coords["paragraph"]["y"] })

    });
}

function animate_web_design__deactivate(web_design_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var yellow_rect_shadow = web_design_info["yellow_rect_shadow"];
    var yellow_rect_gr     = web_design_info["yellow_rect_gr"];
    var design             = web_design_info["design"];
    var paragraph          = web_design_info["paragraph"];

    yellow_rect_shadow.attr({x: initial_coords["yellow_rect_shadow"]["x"] })
    yellow_rect_shadow.animate({
        duration: 500,
    }).attr({x: final_coords["yellow_rect_shadow"]["x"] })

}
