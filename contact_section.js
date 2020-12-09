
function create_contact_section(screen_width_in_px,screen_height){
    $("body").append(`
        <div id="contact_wrapper">
        </div>
    `);
    var contact_height = screen_height;
    
    $("#contact_wrapper").css({                    
        "background-color": '#fb836bff',
        "position":         "relative",
        "height":           contact_height,
        "width":            screen_width_in_px
    }); 

    var contact_canvas = SVG().addTo("#contact_wrapper").size(screen_width_in_px, contact_height)
    var contact_gr     = contact_canvas.nested()   

    contact_big_screens(contact_gr, screen_width_in_px, contact_height)
    
    return contact_gr;
}
//-----------------------------------CONTACT---------------------------------------------------------------
function contact_big_screens(contact_gr, screen_width_in_px, contact_height){
    
    var layout_gr = contact_gr.nested() 
    .attr({
        id: 'layout_gr'
    })  

    var background_rect = layout_gr.rect(screen_width_in_px,contact_height)
        .fill('#fb836bff')
        .attr({
            id:      "orange",
            opacity: 1.0,
        })

    //-------------------------QUESTION--------------------------

    var question_gr = layout_gr.nested() 
        .attr({
            id: "question_gr"
        })

    var question = question_gr.text(function(text_element){
        text_element.tspan('What can I create for you?')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#fff',
            family:  'Quicksand',
            size:    40
        })
    question.attr({
        id: 'question',
        x:  screen_width_in_px/2-question.bbox().width,
        y:  contact_height/2
    })

    /*question_gr.attr({
        width:  question.bbox().width,
        height: question.bbox().height,
        x:      screen_width_in_px/2-question.bbox().width-100,
        y:      contact_height/2-question.bbox().height
    })*/
    //-------------------------PARAGRAPH--------------------------
    var paragraph = question_gr.text(function(add) {
        add.tspan('Pop me an a e-mail at nevena_create@gmail.com')
    })
    paragraph.font({
        opacity: 1.0,
        weight:  600,
        fill:    '#fff',
        family:  'Quicksand',
        size:    14
    })
    paragraph.attr({
        id: "paragraph",
        x:  question.bbox().width/2+paragraph.bbox().width/2,
        y:  question.bbox().y+question.bbox().height+50
    })

    //-------------------------HASHTAG--------------------------
    var hashtag = layout_gr.path("m -1246.5718,425.59012 0.3383,-2.81745 h -1.2753 v -1.36644 h 1.451 l 0.2603,-2.07567 h -1.7113 v -1.35992 h 1.8805 l 0.3448,-2.81746 h 1.3665 l -0.3644,2.81746 h 2.3229 l 0.3514,-2.81746 h 1.3599 l -0.3579,2.81746 h 1.3014 v 1.35992 h -1.4575 l -0.2733,2.07567 h 1.7308 v 1.36644 h -1.9 l -0.3384,2.81745 h -1.3534 l 0.3449,-2.81745 h -2.3229 l -0.3384,2.81745 z m 1.8674,-4.18389 h 2.3165 l 0.2732,-2.07567 h -2.3229 z")

    hashtag.fill('#fff').move(question.bbox().x-hashtag.bbox().width-40, question.bbox().y+hashtag.bbox().height)
    hashtag.scale(5)
    hashtag.attr({id: 'hashtag'})

    hashtag_clicked = false;

    hashtag.click(function() {
    
        // ACTIVATE BOX_2
        if (hashtag_clicked == false) {
            
            animate_hashtag__activate(hashtag_info, contact_height, screen_width_in_px);
    
            hashtag_clicked = true;
    
        }
        // DEACTIVATE
        else {
    
            animate_hashtag__deactivate(hashtag_info, contact_height, screen_width_in_px);
    
            hashtag_clicked = false;
        }
    })

    //-------------------------SUBMISSION FORM--------------------------
    var submission_form_shadow_gr = layout_gr.nested()

    var submission_form_shadow = submission_form_shadow_gr.rect(520,560)
        .fill('#bf5b5bff')

    var submission_form_gr = layout_gr.nested()
        .attr({ id: "submission_form_gr"})

//--------------------------------------------------------------
    var from_gr = submission_form_gr.nested()
        .attr({ id: "from_gr"})

    var from_rect = from_gr.rect(500,100)
        .fill('#fba16bff')
    from_rect.attr({
        id:      "from_rect",
        opacity: 1.0,
        x:       0,
        y:       0
    })

    var from_text = from_gr.text(function(text_element){
        text_element.tspan('Your name...')
    })
    .font({
        opacity: 0.8,
        weight:  400,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })
    from_text.attr({
        id: 'from_text',
        x:  20,
        y:  from_rect.bbox().height/2+from_text.bbox().height/2-2
    })


    //--------------------------------------------------------------
   var subject_gr = submission_form_gr.nested()
        .attr({ id: "subject_gr"})

    var subject_rect = subject_gr.rect(500,100)
        .fill('#fbae6bff')
    subject_rect.attr({
        id:      "subject_rect",
        opacity: 1.0,
        x:       0,
        y:       from_gr.bbox().y+from_gr.bbox().height
    })
    var subject_text = subject_gr.text(function(text_element){
        text_element.tspan('Subject...')
    })
    .font({
        opacity: 0.8,
        weight:  400,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })
   subject_text.attr({
        id: 'subject_text',
        x:  20,
        y:  from_gr.bbox().y+from_gr.bbox().height+from_gr.bbox().height/2
    })


    //--------------------------------------------------------------
    var message_gr = submission_form_gr.nested()
    .attr({ id: "message_gr"})

    var message_rect = message_gr.rect(500,350)
        .fill('#fbbc6bff')
    message_rect.attr({
        id:      "message_rect",
        opacity: 1.0,
        x:       0,
        y:       200
    })
    var message_text = message_gr.text(function(text_element){
        text_element.tspan('Your message...')
    })
    .font({
        opacity: 0.8,
        weight:  400,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })
    message_text.attr({
        id: 'message_text',
        x:  20,
        y:  from_gr.bbox().y+from_gr.bbox().height+subject_gr.bbox().height+40
    })

    //---------------ANIMATE SUBMIT BUTTON-----------------------------------------------
    var submit_gr = submission_form_gr.nested()
        .attr({ id: "submit_gr"})

    var submit_rect = submit_gr.rect(150,50)
        .fill('#bf5b5bff')
    submit_rect.attr({
        id:      "submit_rect",
        opacity: 0.8,
    })

    var submit_text = submit_gr.text(function(text_element){
        text_element.tspan('SUBMIT')
    })
    .font({
        opacity: 1.0,
        weight:  600,
        fill:    '#fff',
        family:  'Quicksand',
        size:    16
    })
    submit_text.attr({
        id: 'submit_text',
        x:   submit_rect.bbox().width/2-submit_text.bbox().width/2,
        y:   submit_rect.bbox().height/2+5
    })
    submit_gr.attr({
        width: submit_rect.bbox().width,
        height: submit_rect.bbox().height,
        y: message_rect.bbox().y+message_rect.bbox().height,
        x: message_rect.bbox().x+message_rect.bbox().width/2-submit_rect.bbox().width/2
    })

    var submit_info = {
        "submit_gr":   submit_gr,
        "submit_text": submit_text,
        "submit_rect": submit_rect,
    }
    var submit_gr_clicked = false;

    submit_gr.click(function() {
    console.log('1111111111111111111111111111111111111111555555555555555555555555555555')
    console.log(submit_gr_clicked)
        // ACTIVATE BOX_2
        if (submit_gr_clicked == false) {
            
            animate_submit_desktop__activate(submit_info);
    
            submit_gr_clicked = true;
    
        }
        // DEACTIVATE
        else {
    
            animate_submit_desktop__deactivate(submit_info);
    
            submit_gr_clicked = false;
        }
    })

    submission_form_gr.attr({
        width:  submission_form_gr.bbox().width,
        height: submission_form_gr.bbox().height,
        x:      screen_width_in_px/2+submission_form_gr.bbox().width/2-150,
        y:      contact_height/2-submission_form_gr.bbox().height/2
    })

    submission_form_shadow_gr.attr({
        id:      "apply_shadow",
        opacity: 0.6,
        x:       screen_width_in_px/2+submission_form_gr.bbox().width/2-160,
        y:       contact_height/2-submission_form_gr.bbox().height/2-8
    })

    

    var hashtag_info = {
        "hashtag":            hashtag,
        "question_gr":        question_gr,
        "submission_form_gr": submission_form_gr
    }

    //----------------------SUBMISSION FORM INPUT----------------------------------
    
    //FROM
    var from_global_x      = submission_form_gr.x()+from_gr.x()
    var from_global_y      = submission_form_gr.y()+from_gr.y()
    var from_global_width  = from_gr.bbox().width
    var from_global_height = from_gr.bbox().height
    
    $("#contact_wrapper").append("<input id='from_desktop_input'></input>");
    $("#contact_wrapper").find("#from_desktop_input").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        top:        from_global_y+"px",
        left:       from_global_x+"px",
        width:      from_global_width,
        height:     from_global_height
    })

    //SUBJECT
    var subject_global_x = submission_form_gr.x()+subject_gr.x()
    var subject_global_y = submission_form_gr.y()+subject_gr.y()+40
    var subject_width    = subject_gr.bbox().width
    var subject_height   = subject_gr.bbox().height
    
    $("#contact_wrapper").append("<input id='subject_desktop_input'></input>");
    $("#contact_wrapper").find("#subject_desktop_input").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        top:        subject_global_y+"px",
        left:       subject_global_x+"px",
        width:      subject_width,
        height:     subject_height
    })

    //MESSAGE
    var message_global_x      = submission_form_gr.x()+message_gr.x()
    var message_global_y      = submission_form_gr.y()+message_gr.y()+80
    var message_global_width  = message_gr.bbox().width
    var message_global_height = message_gr.bbox().height
    
    $("#contact_wrapper").append("<input id='message_desktop_input'></input>");
    $("#contact_wrapper").find("#message_desktop_input").css({
        position:   "absolute",
        background: "none",
        border:     "none",
        top:        message_global_y+"px",
        left:       message_global_x+"px",
        width:      message_global_width,
        height:     message_global_height
    })


    apply_filter(layout_gr, "apply_shadow_filter", "apply_shadow")

    var contact_info = {
        "question_gr":        question_gr,
        "hashtag":            hashtag,
        "paragraph":          paragraph,
        "submission_form_gr": submission_form_gr,
    }

    var initial_dekstop_coords = {
        "question_gr":               {x:0-600,y:question_gr.y()},
        "hashtag":                   {x:0-100,y:hashtag.y()},
        "paragraph":                 {x:0-600,y: contact_height},
        "submission_form_shadow_gr": {x:submission_form_shadow_gr.x(),y: contact_height},
        "submission_form_gr":        {x:submission_form_gr.x(),y:contact_height}
    }

    var final_desktop_coords = {
        "question_gr":               {x:question_gr.x(),y:question_gr.y()},
        "hashtag":                   {x:hashtag.x(),y:hashtag.y()},
        "paragraph":                 {x:paragraph.x(),y:paragraph.y()},
        "submission_form_shadow_gr": {x:submission_form_shadow_gr.x(),y: submission_form_shadow_gr.y()},
        "submission_form_gr":        {x:submission_form_gr.x(),y:submission_form_gr.y()}
    }


    animate_contact_desktop__activate(contact_info, initial_dekstop_coords, final_desktop_coords, screen_width_in_px, contact_height)
    animate_contact_desktop__deactivate(contact_info, initial_dekstop_coords, final_desktop_coords, screen_width_in_px, contact_height)
    
}
//---------------------ANIMATE SUBMIT-------------------------------------------------
function animate_submit_desktop__activate(submit_info) {

    var submit_gr   = submit_info["submit_gr"];
    var submit_text = submit_info["submit_text"];
    var submit_rect = submit_info["submit_rect"];
    console.log('submitedlllllllllllllllllllllll52555555555555555555555555555lllllllllll')
    submit_gr.animate({
        duration: 100,

    })
    .after(function() {
        submit_rect.fill("#fff")
        submit_text.text('SUBMITED!')
        submit_text.animate({
                duration: 200
            })

            console.log('submitedllllllllllllllllllllllllllllllllll')
        submit_text.attr({fill: "#bf5b5bff"})
            .attr({
                x:   0,//submit_rect.bbox().width/2-submit_text.bbox().width/2,
                y:   0//submit_rect.bbox().height/2+5
            })
    });
}

function animate_submit_desktop__deactivate(submit_info) {
    var submit_gr   = submit_info["submit_gr"];
    var submit_text = submit_info["submit_text"];
    var submit_rect = submit_info["submit_rect"];

    submit_rect.fill("#bf5b5bff")
    submit_text.text('SUBMIT')
    submit_text.animate({
        duration: 200,
    })
    submit_text.attr({fill: "#fff"})
    .attr({
        x:   submit_rect.bbox().width/2-submit_text.bbox().width/2,
        y:   submit_rect.bbox().height/2+5
    })
    submit_gr.animate({
        duration: 100,

    })
}

/*//---------------------ANIMATE HASHTAG-------------------------------------------------
function animate_hashtag_desktop__activate(hashtag_info, contact_height, screen_width_in_px) {

    var hashtag            = hashtag_info["hashtag"];
    var question_gr        = hashtag_info["question_gr"];
    var question_rect      = hashtag_info["question_rect"];
    var submission_form_gr = hashtag_info["submission_form_gr"];

    hashtag.animate({
        duration: 100,
    })
    hashtag.attr({fill: "#fb836bff"})
    hashtag.move(
        0-100,
        contact_height/6-question_rect.bbox().height/2-5
    )
}

function animate_hashtag_desktop__deactivate(hashtag_info, contact_height, screen_width_in_px) {
    var hashtag            = hashtag_info["hashtag"];
    var question_gr        = hashtag_info["question_gr"];
    var question_rect      = hashtag_info["question_rect"];
    
    hashtag.animate({
        duration: 100,
    })
    hashtag.attr({fill: "#fff"})
    hashtag.move(
        screen_width_in_px-question_rect.bbox().width-hashtag.bbox().width-40,
        contact_height/6-question_rect.bbox().height/2-5
    )
}*/
//---------------------ANIMATE CONTACT-------------------------------------------------
function animate_contact_desktop__activate(contact_info, initial_dekstop_coords, final_desktop_coords, screen_width_in_px, contact_height){
   
    var submission_form_shadow_gr = contact_info["submission_form_shadow_gr"];
    var question_gr               = contact_info["question_gr"];
    var hashtag                   = contact_info["hashtag"];
    var paragraph                 = contact_info["paragraph"];
    var submission_form_gr        = contact_info["submission_form_gr"];

    hashtag.attr({x: initial_dekstop_coords["hashtag"]["x"] })
    hashtag.animate({
        duration: 500,
    }).attr({x: final_desktop_coords["hashtag"]["x"] })
    
    .after(function() {
        submission_form_gr.attr({y : initial_dekstop_coords["submission_form_gr"]["y"] })
        paragraph.attr({y: initial_dekstop_coords["paragraph"]["y"] })
        question_gr.attr({x : initial_dekstop_coords["question_gr"]["x"] })
        
        question_gr.animate({
            duration: 500,
        }).attr({x: final_desktop_coords["question_gr"]["x"] })

        submission_form_gr.animate({
            duration: 500,
        }).attr({y: final_desktop_coords["submission_form_gr"]["y"] })

        paragraph.animate({
            duration: 200,
        }).attr({y: final_desktop_coords["paragraph"]["y"] })

    });
}

function animate_contact_desktop__deactivate(contact_info, initial_dekstop_coords, final_desktop_coords, screen_width_in_px, contact_height){
   
    var submission_form_shadow_gr = contact_info["submission_form_shadow_gr"];
    var question_gr               = contact_info["question_gr"];
    var hashtag                   = contact_info["hashtag"];
    var paragraph                 = contact_info["paragraph"];
    var submission_form_gr        = contact_info["submission_form_gr"];

    question_gr.animate({
        duration: 100,

    })
}

