//-------------------------------NEVENA----------------------------------------------------------------
function nevena(parent_gr, screen_width_in_px, screen_height){

    var layout_gr = parent_gr.nested() 
    .attr({
        id: 'layout_gr'
    })  

    var background_rect = layout_gr.rect(screen_width_in_px,screen_height)
        .fill('#D9D9D9')
        .attr({
            id:      "baby_pink",
            opacity: 1.0,
        })

    //-------------------------BRACKETS-------------------------------------------
    var brackets_gr = layout_gr.nested()   
    .attr({
        id: "brackets_gr",
        x:  0,
        y:  0
    })

    var bracket_left = brackets_gr.text(function(text_element){
        text_element.tspan('[')
    })
        .font({
            id:      "bracket_left",
            opacity: 1.0,
            weight:  700,
            fill:    '#bdbdbdff',
            family:  'Quicksand',
            size:    190
        })    
    bracket_left.attr({
        x: brackets_gr.bbox().x,
        y: ((screen_height-brackets_gr.bbox().height)/2)-bracket_left.bbox().y
    })

    var bracket_right = brackets_gr.text(']')
        .font({
            id:      "bracket_right",
            opacity: 1.0,
            weight:  700,
            fill:    '#bdbdbdff',
            family:  'Quicksand',
            size:    190
        })    
    bracket_right.attr({
        x: (screen_width_in_px-bracket_right.bbox().width)-5,
        y: ((screen_height-brackets_gr.bbox().height)/2)-bracket_right.bbox().y
    })

    //-------------------------LETTERS-N-E-V-E-N-A-------------------------------------------
    var nevena_gr = layout_gr.nested()   

    //---------------A------------------
    var letter_a_gr = nevena_gr.nested().attr({id: 'letter_a_gr'})

    var letter_a = letter_a_gr.path("m -192.40206,-5.2111868 q -0.80151,0 -1.45627,-0.3951111 -0.64911,-0.4007555 -1.03293,-1.0950222 -0.37818,-0.6942667 -0.37818,-1.5860889 0,-0.8748889 0.36689,-1.5635111 0.37253,-0.6942669 1.02164,-1.0950219 0.64912,-0.4064 1.47885,-0.4064 0.67733,0 1.24742,0.282222 0.57009,0.282222 0.90311,0.784578 v -0.886178 h 1.40547 v 5.779911 h -1.40547 v -0.9256889 q -0.38382,0.5249334 -0.93698,0.8184445 -0.55315,0.2878666 -1.21355,0.2878666 z m 0.40075,-1.2022666 q 0.52494,0 0.92569,-0.2370667 0.4064,-0.2427111 0.63218,-0.6604 0.23142,-0.4233333 0.23142,-0.9708445 0,-0.5418666 -0.23142,-0.9652 -0.23142,-0.4233333 -0.63218,-0.6604 -0.40075,-0.2427114 -0.92569,-0.2427114 -0.51928,0 -0.92568,0.2427114 -0.4064,0.2370667 -0.63783,0.6604 -0.23142,0.4233334 -0.23142,0.9652 0,0.5362223 0.23142,0.9652001 0.23143,0.4233333 0.63218,0.6660444 0.4064,0.2370667 0.93133,0.2370667 z")
    
    letter_a.fill('#BF1F1F').move(200, 180).scale(10)
    letter_a.rotate(-90)
    letter_a.attr({id: 'letter_a'})

    //---------------N2------------------
    var letter_n2_gr = nevena_gr.nested().attr({id: 'letter_n2_gr'})

    var letter_n2 = letter_n2_gr.path("m -10.317994,185.70963 v -5.41867 h 1.3176247 v 0.65087 q 0.28575,-0.35983 0.7514167,-0.58737 0.4656666,-0.23283 1.063625,-0.23283 0.6297083,0 1.0953749,0.26458 0.4709583,0.26458 0.73025,0.75671 0.2592917,0.49212 0.2592917,1.15358 v 3.41313 h -1.317625 v -3.13796 q 0,-0.67734 -0.3386667,-1.04246 -0.3333749,-0.37042 -0.9260416,-0.37042 -0.41275,0 -0.7090833,0.16934 -0.2910417,0.16404 -0.4497917,0.4445 -0.15875,0.27516 -0.15875,0.61383 v 3.32317 z")
    
    letter_n2.fill('#BF1F1F').move(200, 255).scale(11)
    letter_n2.rotate(-90)
    letter_n2.attr({id: 'letter_a'})

    //---------------E------------------
    var letter_e_gr = nevena_gr.nested().attr({id: 'letter_e_gr'})   

    var letter_e = letter_e_gr.path("m -10.972083,199.46249 q -0.867833,0 -1.555749,-0.37571 -0.687917,-0.37571 -1.084792,-1.02659 -0.396875,-0.65087 -0.396875,-1.46579 0,-0.60854 0.22225,-1.12712 0.227542,-0.52388 0.629708,-0.92075 0.407459,-0.39688 0.941917,-0.61913 0.534458,-0.22225 1.153583,-0.22225 0.846667,0 1.4816667,0.34925 0.6402917,0.34925 0.9948334,0.97896 0.3598333,0.62442 0.3598333,1.44463 -0.00529,0.0688 -0.010583,0.1217 0,0.0476 -0.015875,0.14817 h -4.41325 q 0,0.48683 0.22225,0.86254 0.22225,0.37571 0.619125,0.58738 0.402167,0.20637 0.92075,0.20637 0.492125,0 0.873125,-0.19579 0.3862917,-0.20108 0.69812001,-0.60854 l 0.9577916,0.49212 q -0.3862916,0.64559 -1.0742083,1.01071 -0.6826254,0.35984 -1.5240004,0.35984 z m -1.635124,-3.54013 h 3.0744577 q -0.068792,-0.37042 -0.2804583,-0.64029 -0.2116664,-0.26988 -0.5344584,-0.41804 -0.322792,-0.15346 -0.719667,-0.15346 -0.418041,0 -0.746125,0.14817 -0.328083,0.14287 -0.534458,0.41804 -0.201083,0.26987 -0.259291,0.64558 z")

    letter_e.fill('#BF1F1F').move(200, 330).scale(11)
    letter_e.rotate(-90)
    letter_e.attr({id: 'letter_e'})

    //---------------V------------------
    var letter_v_gr = nevena_gr.nested().attr({id: 'letter_v_gr'})  

    var letter_v = letter_v_gr.path("m -10.665733,187.97749 -2.772833,-5.41866 h 1.55575 l 1.656291,3.64596 1.656292,-3.64596 h 1.5557499 l -2.7728332,5.41866 z")

    letter_v.fill('#BF1F1F').move(200, 405).scale(11)
    letter_v.rotate(-90)
    letter_v.attr({id: 'letter_e'})

    //---------------&------------------
    var ampersand_gr = nevena_gr.nested().attr({id: 'symbol_gr'})  

    var ampersand = ampersand_gr.path("m 3.692952,170.48357 q -0.7990416,0 -1.4234582,-0.29104 -0.619125,-0.29104 -0.9789584,-0.82021 -0.35454161,-0.52916 -0.35454161,-1.25412 0,-0.85725 0.52387501,-1.49225 0.5291666,-0.64029 1.5822083,-1.10067 -0.381,-0.42862 -0.6085417,-0.762 -0.2275416,-0.33867 -0.3280833,-0.64029 -0.09525,-0.30692 -0.09525,-0.62971 0,-0.64558 0.3227917,-1.11125 0.3227916,-0.46567 0.8625416,-0.71437 0.53975,-0.24871 1.2012083,-0.24871 0.587375,0 1.0212916,0.17462 0.4392083,0.16934 0.7408333,0.47096 0.3069167,0.30163 0.4550834,0.67204 0.1534583,0.37042 0.1534583,0.76729 0,0.68263 -0.4550833,1.2118 -0.4550834,0.52387 -1.3282083,0.97366 l 1.7832916,1.89971 q 0.1322916,-0.10583 0.2910416,-0.27517 0.1640417,-0.16933 0.3280834,-0.34925 0.1640416,-0.1852 0.3069166,-0.34925 0.1481667,-0.16933 0.2328334,-0.26987 l 0.8519583,0.79904 q -0.2645834,0.34396 -0.5767917,0.71438 -0.3122083,0.36512 -0.5662083,0.61912 l 1.7250833,1.83621 h -1.74625 l -1.0001249,-1.0795 q -0.6297084,0.59796 -1.36525,0.92604 -0.7355416,0.32279 -1.55575,0.32279 z m 0.1693334,-1.31233 q 0.4815416,0 0.9524999,-0.22225 0.47625,-0.22754 0.8995833,-0.65088 l -1.9526249,-2.0267 q -0.6085416,0.25929 -0.9472083,0.6932 -0.3386667,0.43392 -0.3386667,0.9578 0,0.40216 0.1852084,0.68262 0.1905,0.27517 0.508,0.42333 0.3175,0.14288 0.6932083,0.14288 z m 0.41275,-4.24921 q 0.4180416,-0.22225 0.7037916,-0.42862 0.28575,-0.21167 0.4339167,-0.4498 0.1481666,-0.24341 0.1481666,-0.56091 0,-0.31221 -0.1481666,-0.55563 -0.142875,-0.24341 -0.3915834,-0.37571 -0.2487083,-0.13758 -0.5609166,-0.13758 -0.3069167,0 -0.5450417,0.13758 -0.238125,0.13759 -0.3757083,0.37042 -0.1375833,0.23283 -0.1375833,0.54504 0,0.22754 0.084667,0.4445 0.089958,0.21696 0.2804583,0.46038 0.1905,0.23812 0.508,0.55033 z")

    ampersand.fill('#BF1F1F').move(200, 480).scale(8)
    ampersand.attr({id: 'ampersand'})

    //---------------N1------------------
    var letter_n1_gr = nevena_gr.nested().attr({id: 'letter_n1_gr'})  
//
    var letter_n1 = letter_n1_gr.path("m -10.317994,185.70963 v -5.41867 h 1.3176247 v 0.65087 q 0.28575,-0.35983 0.7514167,-0.58737 0.4656666,-0.23283 1.063625,-0.23283 0.6297083,0 1.0953749,0.26458 0.4709583,0.26458 0.73025,0.75671 0.2592917,0.49212 0.2592917,1.15358 v 3.41313 h -1.317625 v -3.13796 q 0,-0.67734 -0.3386667,-1.04246 -0.3333749,-0.37042 -0.9260416,-0.37042 -0.41275,0 -0.7090833,0.16934 -0.2910417,0.16404 -0.4497917,0.4445 -0.15875,0.27516 -0.15875,0.61383 v 3.32317 z")

    letter_n1.fill('#BF1F1F').move(200, 565).scale(11)
    letter_n1.rotate(-90)
    letter_n1.attr({id: 'ampersand'})
   
    nevena_gr.attr({
        opacity: 0.0,
        id:     'nevena_gr',
        x:      (screen_width_in_px-nevena_gr.bbox().width)/2-nevena_gr.bbox().x,
        y:      (screen_height-nevena_gr.bbox().height)/2-nevena_gr.bbox().y
    })

    //-------------------------WEB DESIGN AND DEVELOPMENT-------------------------------------------
    var web_design = brackets_gr.text(function(text_element){
        text_element.tspan('Web Design')
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#BF1F1F',
        family:  'Quicksand',
        size:    18
    })

    web_design.attr({
        id: 'web_design',
        x:  bracket_left.bbox().x+18,
        y:  bracket_left.bbox().y+bracket_left.bbox().height+web_design.bbox().height+10
    })

    var web_development = brackets_gr.text(function(text_element){
        text_element.tspan('Development')
    })
    .font({
        opacity: 1.0,
        weight:  700,
        fill:    '#BF1F1F',
        family:  'Quicksand',
        size:    18
    })

    web_development.attr({
        id: 'web_development',
        x:  bracket_right.bbox().x-web_development.bbox().width/2,
        y:  bracket_right.bbox().y+bracket_right.bbox().height+web_development.bbox().height+10
    })

    var nevena_info = {
        "bracket_left":       bracket_left,
        "bracket_right":      bracket_right,
        "nevena_gr":          nevena_gr,
        "web_design":         web_design,
        "web_development":    web_development,
    }

    var initial_coords = {
        "bracket_left":     {x:0-bracket_left.y(),y:bracket_left.y()},
        "bracket_right":    {x:screen_width_in_px+bracket_left.y(),y:bracket_right.y()},
        "nevena_gr":        {x:nevena_gr.x(),y:screen_height},
        "web_design":       {x:web_design.x(),y: screen_height},
        "web_development":  {x:web_development.x(),y: screen_height},
    }

    var final_coords = {
        "bracket_left":     {x:bracket_left.x(),y:bracket_left.y()},
        "bracket_right":    {x:bracket_right.x(),y:bracket_right.y()},
        "nevena_gr":        {x:nevena_gr.x(),y:nevena_gr.y()},
        "web_design":       {x:web_design.x(),y:web_design.y()},
        "web_development":  {x:web_development.x(),y:web_development.y()}
    }

    animate_nevena__activate(nevena_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    animate_nevena__deactivate(nevena_info, initial_coords, final_coords, screen_width_in_px, screen_height)
    
}

//---------------------ANIMATE NEVENA-------------------------------------------------
function animate_nevena__activate(nevena_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var bracket_left    = nevena_info["bracket_left"];
    var bracket_right   = nevena_info["bracket_right"];
    var nevena_gr       = nevena_info["nevena_gr"];
    var web_design      = nevena_info["web_design"];
    var web_development = nevena_info["web_development"];

    bracket_left.attr({x: initial_coords["bracket_left"]["x"] })
    bracket_left.animate({
        duration: 1000,
    }).attr({x: final_coords["bracket_left"]["x"] })
    
    bracket_right.attr({x: initial_coords["bracket_right"]["x"] })
    bracket_right.animate({
        duration: 1000,
    }).attr({x: final_coords["bracket_right"]["x"] })

    .after(function() {
        nevena_gr.attr({y : initial_coords["nevena_gr"]["y"] })
        web_design.attr({y: initial_coords["web_design"]["y"] })
        web_development.attr({y : initial_coords["web_development"]["y"] })
        
        nevena_gr.animate({
            duration: 1000,
        }).attr({y: final_coords["nevena_gr"]["y"],
                 opacity: 1.0            
        })

        web_design.animate({
            duration: 1200,
        }).attr({y: final_coords["web_design"]["y"] +10})

        web_development.animate({
            duration: 1200,
        }).attr({y: final_coords["web_development"]["y"] +10})

    });
}

function animate_nevena__deactivate(nevena_info, initial_coords, final_coords, screen_width_in_px, screen_height){
    var bracket_left    = nevena_info["bracket_left"];
    var bracket_right   = nevena_info["bracket_right"];
    var nevena_gr       = nevena_info["nevena_gr"];
    var web_design      = nevena_info["web_design"];
    var web_development = nevena_info["web_development"];

    bracket_left.animate({
        duration: 100,
    })
}