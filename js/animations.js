//-------------------------ANIMATIONS----------------------------------/

function animations(parent_gr, screen_width_in_px, height, screen_height) {

    

    var rect_width  = 600;
    var rect_height = 600;

    var animation_gr = parent_gr.nested()

    var animation_a_gr = animation_gr.nested()
    var animation_a = animation_a_gr.rect(rect_width,rect_height)
    animation_a.attr({
        opacity:   1.0,
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_a = "../portfolio-app-media/media/p_1_croped.png"
    animation_a_gr.attr({
        x:     screen_width_in_px/2-animation_a.bbox().width-50,
        y:     50
    })
    fit_image_inside_rect(animation_a_gr, image_url_a, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("rect_follows_cursor", animation_a_gr, '0,0 0,300 300,150',animation_a_gr.bbox().width/4, animation_a_gr.bbox().height/4, screen_width_in_px, screen_height)
    

/////////////////////////////////////////////////////////////////////////////////////
    var animation_b_gr = animation_gr.nested()
    var animation_b    = animation_b_gr.rect(rect_width,rect_height)
    animation_b.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_b = "../portfolio-app-media/media/p_2_croped.png"
    animation_b_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     50
    })
    fit_image_inside_rect(animation_b_gr, image_url_b, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("flying_rect", animation_b_gr, '0,0 0,300 300,150', animation_b_gr.bbox().width/4, animation_b_gr.bbox().height/4, screen_width_in_px, screen_height)
    

/////////////////////////////////////////////////////////////////////////////////////
    var animation_c_gr = animation_gr.nested()

    var animation_c = animation_c_gr.rect(600,600)
    animation_c.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_c = "../portfolio-app-media/media/p_3_croped.png"
    animation_c_gr.attr({
        x:     screen_width_in_px/2-animation_c.bbox().width-50,
        y:     50+animation_c.bbox().height+100
    })

    fit_image_inside_rect(animation_c_gr, image_url_c, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("three_rects_connected", animation_c_gr, '0,0 0,300 300,150', animation_c_gr.bbox().width/4, animation_c_gr.bbox().height/4, screen_width_in_px, screen_height)
/////////////////////////////////////////////////////////////////////////////////////
    var animation_d_gr = animation_gr.nested()

    var animation_d = animation_d_gr.rect(rect_width,rect_height)
    animation_d.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_d = "../portfolio-app-media/media/p_4_croped.png"
    animation_d_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     50+animation_d.bbox().height+100
    })

    fit_image_inside_rect(animation_d_gr, image_url_d, rect_width, rect_height, 0, 0, 0, -5)
    create_play_button("rect_on_x", animation_d_gr, '0,0 0,300 300,150', animation_d_gr.bbox().width/4, animation_d_gr.bbox().height/4, screen_width_in_px, screen_height)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_e_gr = animation_gr.nested()

    var animation_e = animation_e_gr.rect(rect_width,rect_height)
    animation_e.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_e = "../portfolio-app-media/media/p_5_croped.png"
    animation_e_gr.attr({
        x:     screen_width_in_px/2-animation_e.bbox().width-50,
        y:     50+animation_a.bbox().height+100+animation_c.bbox().height+100
    })

    fit_image_inside_rect(animation_e_gr, image_url_e, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("points_on_edges", animation_e_gr, '0,0 0,300 300,150', animation_e_gr.bbox().width/4, animation_e_gr.bbox().height/4, screen_width_in_px, screen_height)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_f_gr = animation_gr.nested()

    var animation_f = animation_f_gr.rect(rect_width,rect_height)
    animation_f.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_f = "../portfolio-app-media/media/svg_1_croped.png"
    animation_f_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     50+animation_b.bbox().height+100+animation_d.bbox().height+100
    })

    fit_image_inside_rect(animation_f_gr, image_url_f, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("", animation_f_gr, '0,0 0,300 300,150', animation_f_gr.bbox().width/4, animation_f_gr.bbox().height/4, screen_width_in_px, screen_height)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_g_gr = animation_gr.nested()

    var animation_g = animation_g_gr.rect(rect_width,rect_height)
    animation_g.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_g = "../portfolio-app-media/media/svg_2_croped.png"
    animation_g_gr.attr({
        x:     screen_width_in_px/2-animation_g.bbox().width-50,
        y:     50+animation_a.bbox().height+100+animation_c.bbox().height+100+animation_f.bbox().height+100
    })
    
    fit_image_inside_rect(animation_g_gr, image_url_g, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("", animation_g_gr, '0,0 0,300 300,150', animation_g_gr.bbox().width/4, animation_g_gr.bbox().height/4, screen_width_in_px, screen_height)

/////////////////////////////////////////////////////////////////////////////////////
    var animation_h_gr = animation_gr.nested()

    var animation_h = animation_h_gr.rect(rect_width,rect_height)
    animation_h.attr({
        fill: "#000",
        x:     0,
        y:     0
    })
    image_url_h = "../portfolio-app-media/media/svg_3_croped.png"
    animation_h_gr.attr({
        x:     screen_width_in_px/2+50,
        y:     50+animation_b.bbox().height+100+animation_d.bbox().height+100+animation_h.bbox().height+100
    })

    fit_image_inside_rect(animation_h_gr, image_url_h, rect_width, rect_height, 0, 0, 0, 0)
    create_play_button("", animation_h_gr, '0,0 0,300 300,150', animation_h_gr.bbox().width/4, animation_h_gr.bbox().height/4, screen_width_in_px, screen_height)

}
