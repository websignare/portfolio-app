//---------------------------GET PHYSICAL SCREEN WIDTH--------------------------------
function get_physical_screen_width(screen_width_in_px){
    $('body').append(`
        <div id="meter">
        </div>`);
    $("#meter").css({                    
        "width": '10cm'
    });
    var pixPer10CM = $("#meter").width();
    var CMPerPix = 10 / pixPer10CM;
    var widthCM = screen_width_in_px * CMPerPix;
    console.log(screen_width_in_px)

    $("#meter").remove()
    return widthCM;
} 

//---------------------------FIT IMAGE--------------------------------
function fit_image_inside_rect(parent_gr, image_url, rect_width, rect_height, x, y, view_box_x, view_box_y){
    var image_gr = parent_gr.nested()
        .attr({width: rect_width, height: rect_height})
        .attr({"x": x})
        .attr({"y": y})
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

//---------------------------FILTERS---------------------------------
function apply_filter(p_parent_gr, p_filter_node_id, p_target_node_id) {

    let filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
    filter.setAttribute("id", p_filter_node_id)
    p_parent_gr.node.appendChild(filter);


    let blur = document.createElementNS('http://www.w3.org/2000/svg','feGaussianBlur');
    blur.setAttribute('stdDeviation','15');
    filter.appendChild(blur);
    
    p_parent_gr.find("#"+p_target_node_id+"").attr({"filter": "url(#"+p_filter_node_id+")"})
}

function create_play_button(parent_gr, x, y){

   var play_button_gr = parent_gr.nested()

   var play_button = play_button_gr.polygon('0,0 0,300 300,150').fill('#fff').stroke({ width: 1 })
   play_button_gr.attr({
       "opacity": 0.5,
       "x":       x,
       "y":       y
    })
}