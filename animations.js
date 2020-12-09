//-------------------------ANIMATIONS----------------------------------/

function animations(parent_gr, screen_width_in_px, height) {

    var animation_gr = parent_gr.nested()

    var animation_a_gr = animation_gr.nested()
    var animation_a = animation_a_gr.rect(600,600)
    animation_a.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_a_gr.attr({
        x:     screen_width_in_px/2-animation_a.bbox().width-50,
        y:     200
    })

    create_play_button(animation_a_gr, animation_a_gr.bbox().width/4, animation_a_gr.bbox().height/4)
/////////////////////////////////////////////////////////////////////////////////////
    var animation_b_gr = animation_gr.nested()
    var animation_b    = animation_b_gr.rect(600,600)
    animation_b.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_b_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     200
    })

    create_play_button(animation_b_gr, animation_b_gr.bbox().width/4, animation_b_gr.bbox().height/4)
/////////////////////////////////////////////////////////////////////////////////////
    var animation_c_gr = animation_gr.nested()

    var animation_c = animation_c_gr.rect(600,600)
    animation_c.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_c_gr.attr({
        x:     screen_width_in_px/2-animation_c.bbox().width-50,
        y:     200+animation_c.bbox().height+100
    })

    create_play_button(animation_c_gr, animation_c_gr.bbox().width/4, animation_c_gr.bbox().height/4)
/////////////////////////////////////////////////////////////////////////////////////
    var animation_d_gr = animation_gr.nested()

    var animation_d = animation_d_gr.rect(600,600)
    animation_d.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_d_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     200+animation_d.bbox().height+100
    })

    create_play_button(animation_d_gr, animation_d_gr.bbox().width/4, animation_d_gr.bbox().height/4)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_e_gr = animation_gr.nested()

    var animation_e = animation_e_gr.rect(600,600)
    animation_e.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_e_gr.attr({
        x:     screen_width_in_px/2-animation_e.bbox().width-50,
        y:     200+animation_a.bbox().height+100+animation_c.bbox().height+100
    })

    create_play_button(animation_e_gr, animation_e_gr.bbox().width/4, animation_e_gr.bbox().height/4)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_f_gr = animation_gr.nested()

    var animation_f = animation_f_gr.rect(600,600)
    animation_f.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_f_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     200+animation_b.bbox().height+100+animation_d.bbox().height+100
    })

    create_play_button(animation_f_gr, animation_f_gr.bbox().width/4, animation_f_gr.bbox().height/4)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_g_gr = animation_gr.nested()

    var animation_g = animation_g_gr.rect(600,600)
    animation_g.attr({
        fill: "#000",
        x:     0,
        y:     0
    })

    animation_g_gr.attr({
        x:     screen_width_in_px/2-animation_g.bbox().width-50,
        y:     200+animation_a.bbox().height+100+animation_c.bbox().height+100+animation_f.bbox().height+100
    })

    create_play_button(animation_g_gr, animation_g_gr.bbox().width/4, animation_g_gr.bbox().height/4)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_h_gr = animation_gr.nested()

    var animation_h = animation_h_gr.rect(600,600)
    animation_h.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    animation_h_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     200+animation_b.bbox().height+100+animation_d.bbox().height+100+animation_h.bbox().height+100
    })

    create_play_button(animation_h_gr, animation_h_gr.bbox().width/4, animation_h_gr.bbox().height/4)

}
