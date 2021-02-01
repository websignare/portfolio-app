
//



function sc_trigger__create(trigger_y_position, name, screen_height, activate_fn, deactivate_fn) {

    console.log("SCROLL_TRIGGER CREATE")

    $("body").append("<div id='"+name+"'>"+name+"</div>");
    $("body").find("#"+name).css({
        position: "absolute",
        right:    "0px",
        top:      trigger_y_position+"px",
        width:    "200px",
        height:   "26px",
        "background-color": "yellow",
        "z-index": 20

    })

    var active = false;
    $(window).scroll(function(e){
        // console.log(e);

        // console.log(window.scrollY)

        // checking if the bottom of the screen has passed the trigger, in order to activate it.
        // only activate the trigger when its not active (active == false)
        var bottom_scroll_y = window.scrollY + screen_height;

        if (bottom_scroll_y > trigger_y_position && active == false) {
            active = true

            activate_fn();
        }

        if (bottom_scroll_y < trigger_y_position && active == true) {
            active = false

            deactivate_fn();
        }

    });





}


function remove_triggers(name){
    var target_trigger = $("body").find("#"+name)
    $(target_trigger).remove();
}