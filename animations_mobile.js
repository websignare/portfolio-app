//-------------------------------ANIMATIONS----------------------------------------------------------------
function animation(parent_gr, screen_width_in_px, screen_height){
    var layout_gr = parent_gr.nested() 
        .attr({
            id: 'layout_gr'
        })  

    var background_rect = layout_gr.rect(screen_width_in_px,screen_height)
        .fill('#ffcc84ff')
        .attr({
            id:      "pink",
            opacity: 1.0,
        })

    var pink_rect_shadow = layout_gr.rect(320,350)
        .fill("#cda66fff")
    pink_rect_shadow.attr({
        id:      "pink_rect_shadow",
        opacity:  0.5,
        x:        screen_width_in_px/2-pink_rect_shadow.bbox().width/2,
        y:        screen_height/2-pink_rect_shadow.bbox().height-pink_rect_shadow.bbox().y-50
    })

    var pink_rect_gr = layout_gr.nested() 
        .attr({
            id: "pink_rect_gr"
        })

    var pink_rect = pink_rect_gr.rect(250,300)
        .fill('#f08e94fa')
        .attr({
            id:      "pink_rect",
            opacity: 1.0
        })

    var animation = layout_gr.text(function(text_element){
        text_element.tspan('Animations')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#fff',
        family:  'Spartan',
        size:    40
    })
    animation.attr({
        id: 'animation',
        x:  screen_width_in_px/2-animation.bbox().width/2,
        y:  screen_height/2-animation.bbox().height/2
    })

    pink_rect_gr.attr({
        width:  pink_rect.bbox().width,
        height: pink_rect.bbox().height,
        x:      screen_width_in_px/2-pink_rect.bbox().width/2,
        y:      screen_height/2-pink_rect.bbox().height-pink_rect.bbox().y-70
    })

    var icon_gr = pink_rect_gr.nested()
    var icon = SVG(`<g
    inkscape:label="Layer 1"
    inkscape:groupmode="layer"
    id="layer1"
    transform="translate(279.44015,8.2330401)">
   <g
      transform="matrix(1.2421952,0,0,1.2421952,-232.37936,-206.55682)"
      id="g13634-6-0-0-4-5-8-3-18">
     <rect
        style="opacity:1;fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:0.63099998;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        id="rect3905-6-5-1-3-0-5-7-9-1-7"
        width="25.723513"
        height="17.006292"
        x="-37.569683"
        y="159.97139" />
     <g
        id="g37150-7-7-92"
        transform="translate(-1.9279788,0.63755094)">
       <path
          sodipodi:nodetypes="cccc"
          inkscape:connector-curvature="0"
          id="path3937-4-4-0-9-4-8-5-9-9-0-0"
          d="m -28.354731,171.58508 6.222642,-0.0902 -3.096294,-4.53923 z"
          style="fill:#4089a2;fill-opacity:1;stroke:none;stroke-width:0.12024427px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
       <path
          sodipodi:nodetypes="cccc"
          inkscape:connector-curvature="0"
          id="path3937-8-1-4-7-7-7-6-2-4-2"
          d="m -25.189795,171.54403 h 7.98463 l -3.896326,-7.45514 z"
          style="fill:#fffefe;fill-opacity:1;stroke:none;stroke-width:0.12024427px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
       <circle
          r="0.92465276"
          cy="166.09053"
          cx="-25.19141"
          id="path3960-0-5-9-7-5-2-0-9-6-3"
          style="opacity:1;fill:#fffefe;fill-opacity:1;stroke:none;stroke-width:0.28676841;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
     </g>
     <circle
        r="3.1565516"
        cy="176.91396"
        cx="-27.874205"
        id="path3962-8-9-9-1-1-9-8-2-3-7"
        style="opacity:1;fill:#4089a2;fill-opacity:1;stroke:none;stroke-width:0.13687278;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
     <path
        inkscape:connector-curvature="0"
        id="path3964-1-7-6-6-4-2-5-7-8-5"
        d="m -28.435652,177.99445 1.694305,-1.07542 -1.70445,-1.08558 z"
        style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.05739184px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
   </g>
 </g>`)

    icon.attr({id: 'animation_icon'})
    icon_gr.attr({
        id:     'animation_icon_gr',
        width:  icon.bbox().width+5,
        height: icon.bbox().height+5,
        x:      8,
        y:      30
    })    
    icon_gr.scale(5)
    icon.addTo(icon_gr)


    var paragraph = layout_gr.text(function(add) {
        add.tspan('Lorem ipsum dolor sit amet ').newLine()
        add.tspan('consectetur')//.fill('#f06')
        add.tspan('.')
        add.tspan('Cras sodales imperdiet auctor.').newLine()
        add.tspan('Nunc ultrices lectus at erat').newLine()
        add.tspan('dictum pharetra elementum ante').newLine()
        add.tspan('Cras sodales imperdiet auctor.').newLine()
        add.tspan('Lorem ipsum dolor sit amet ').newLine()
        add.tspan('consectetur')//.fill('#f06')
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
        y:   screen_height/2+animation.bbox().height/2
    })

    apply_filter(layout_gr, "pink_rect_shadow_filter", "pink_rect_shadow")

    var animation_info = {
        "pink_rect_gr":     pink_rect_gr,
        "pink_rect_shadow": pink_rect_shadow,
        "animation":        animation,
        "paragraph":        paragraph
    }

    var initial_coords = {
        "pink_rect_gr":     {x:pink_rect_gr.x(),y:0-pink_rect_gr.height()},
        "pink_rect_shadow": {x:screen_width_in_px,y:0-pink_rect_gr.height()},
        "animation":        {x:screen_width_in_px, y:animation.y()},
        "paragraph":        {x:paragraph.x(),y: screen_height}

    }

    var final_coords = {
        "pink_rect_gr":     {x:pink_rect_gr.x(),y:pink_rect_gr.y()},
        "pink_rect_shadow": {x:pink_rect_shadow.x(),y:pink_rect_shadow.y()},
        "animation":        {x:animation.x(),y:animation.y()},
        "paragraph":        {x:paragraph.x(),y:paragraph.y()}
    }

    animate_animation__activate(animation_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    animate_animation__deactivate(animation_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    
}

function animate_animation__activate(animation_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var pink_rect_gr      = animation_info["pink_rect_gr"];
    var pink_rect_shadow  = animation_info["pink_rect_shadow"];
    var animation         = animation_info["animation"];
    var paragraph         = animation_info["paragraph"];

    pink_rect_shadow.attr({y : initial_coords["pink_rect_shadow"]["y"] })

    pink_rect_shadow.animate({
        duration: 600,
    }).attr({y: final_coords["pink_rect_shadow"]["y"] })
    pink_rect_gr.attr({y: initial_coords["pink_rect_gr"]["y"] })
        
    pink_rect_gr.animate({
        duration: 600,
    }).attr({y: final_coords["pink_rect_gr"]["y"] })

    .after(function() {
        paragraph.attr({y: initial_coords["paragraph"]["y"] })
        animation.attr({x : initial_coords["animation"]["x"] })
       
    
        animation.animate({
            duration: 500,
        }).attr({x: final_coords["animation"]["x"] })

        paragraph.animate({
            duration: 600,
        }).attr({y: final_coords["paragraph"]["y"] })

    });
}

function animate_animation__deactivate(animation_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var pink_rect_gr      = animation_info["pink_rect_gr"];
    var pink_rect_shadow  = animation_info["pink_rect_shadow"];
    var animation         = animation_info["animation"];
    var paragraph         = animation_info["paragraph"];

    paragraph.animate({
        duration: 100,

    })
}