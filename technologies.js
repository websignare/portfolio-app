//-------------------------TECHNOLOGIES--------------------------------------//

function technologies(parent_gr, screen_width_in_px, height){

    var technologies_gr = parent_gr.nested()
    technologies_gr.attr({
        id: "technologies",
        x:  0, 
    })
    
    var rect_height = height/14

    ////////////////////////////////////////////////////////////////////////////
    var html_gr = technologies_gr.nested()
    var rect_html = html_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    html_gr.attr({
        id:     "html_gr",
        height: rect_height,
        y:      20
    })

    var icon_html_gr = html_gr.nested()
    var icon_html = SVG(`<g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(-8.5800599,-237.11797)">
    <g
        aria-label="&lt;/&gt;"
        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:42.92354202px;line-height:1.25;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.07308853"
        id="text817">
            <path
                d="m 25.706553,268.0873 q -0.472159,0 -1.030165,-0.25755 -0.515082,-0.30046 -1.116012,-0.64385 L 9.6102249,258.9875 q -0.5150825,-0.34338 -0.7726237,-0.85847 -0.2575413,-0.558 -0.2575413,-1.11601 0,-0.60093 0.2575413,-1.11601 0.2575412,-0.55801 0.7726237,-0.85847 l 13.9501511,-8.0267 q 0.558006,-0.34339 1.030165,-0.51509 0.515083,-0.21461 0.944318,-0.21461 0.858471,0 1.588171,0.85847 0.772624,0.81554 0.772624,1.71694 0,0.42923 -0.257541,0.85847 -0.214618,0.38631 -0.686777,0.68678 l -14.894469,8.62763 -0.300465,-4.29236 15.15201,9.05687 q 0.515083,0.30047 0.729701,0.77262 0.214617,0.42924 0.214617,0.90141 0,1.03016 -0.7297,1.84571 -0.686777,0.77263 -1.416477,0.77262 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';stroke-width:1.07308853"
                id="path819"
                inkscape:connector-curvature="0" />
            <path
                d="m 33.664175,277.25148 q -0.7297,0 -1.502324,-0.60093 -0.772624,-0.60093 -0.772624,-1.54525 0,-0.51508 0.257542,-1.03016 l 17.426958,-35.66947 q 0.300464,-0.60093 0.815547,-0.94431 0.515082,-0.34339 1.073089,-0.34339 0.7297,0 1.4594,0.60093 0.772624,0.558 0.772624,1.54525 0,0.51508 -0.257542,1.03016 l -17.384034,35.66946 q -0.300465,0.60093 -0.815547,0.94432 -0.472159,0.34339 -1.073089,0.34339 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';stroke-width:1.07308853"
                id="path821"
                inkscape:connector-curvature="0" />
            <path
                d="m 58.961567,268.0873 q -0.85847,0 -1.631094,-0.81555 -0.7297,-0.85847 -0.7297,-1.75987 0,-0.47215 0.214617,-0.85847 0.257542,-0.3863 0.729701,-0.68677 l 14.894469,-8.62764 0.300464,4.29236 -15.15201,-9.05687 q -0.515082,-0.30046 -0.7297,-0.7297 -0.214618,-0.47216 -0.214618,-0.94432 0,-1.03016 0.7297,-1.80279 0.729701,-0.81554 1.416477,-0.81554 0.472159,0 0.987242,0.30046 0.558006,0.25754 1.158935,0.60093 l 13.950152,8.1984 q 0.515082,0.30046 0.772623,0.85847 0.257542,0.51508 0.257542,1.11601 0,0.60093 -0.257542,1.15894 -0.257541,0.51508 -0.772623,0.81554 L 60.93605,267.3576 q -0.558006,0.30046 -1.030165,0.51508 -0.472159,0.21462 -0.944318,0.21462 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';stroke-width:1.07308853"
                id="path823"
                inkscape:connector-curvature="0" />
        </g>
    </g>`)

    icon_html.attr({id: 'icon_html'})
    icon_html_gr.attr({
        fill: '#de5211ff',
        id:     'icon_html_gr',
        width:  icon_html.bbox().width,
        height: icon_html.bbox().height,
        x:      (screen_width_in_px/2)/16,
        y:      -5
    })    
    icon_html_gr.scale(4)
    icon_html.addTo(icon_html_gr)
    //-----------------------------------------------------------------//
    var html_title = html_gr.text(function(text_element){
        text_element.tspan('html')
    })
        .font({
            id:      "html_title",
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    42
        })    
    html_title.attr({
        x: screen_width_in_px/2-html_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph = html_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph.attr({
        x: (screen_width_in_px/2)+paragraph.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  

    /////////////////////////////////////////////////////////////////////////////////////////
    var css_gr = technologies_gr.nested()
    var rect_css = css_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    css_gr.attr({
        id: "css_gr",
        height: rect_height,
        y:  rect_height+40
    })

    var icon_css_gr = css_gr.nested()
    var icon_css = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(112.87321,-58.007223)">
    <g
        style="fill:#000000;fill-opacity:1"
        transform="matrix(5.1106733,-0.0521671,0.0521671,5.1106733,5737.1835,-6393.179)"
        id="g4514" />
    <g
        id="g825">
        <g
            aria-label="{ }"
            transform="matrix(5.1106734,-0.0521671,0.0521671,5.1106734,5737.1834,-6393.1789)"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:24.21348572px;line-height:1.25;font-family:Spartan;-inkscape-font-specification:Spartan;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.60533714"
            id="text4508">
        <path
            d="m -1149.3302,1272.5848 q -0.097,0 -0.1937,0 -0.073,0 -0.1695,-0.024 -1.7676,-0.3632 -2.7361,-1.0169 -0.9443,-0.6296 -1.3318,-1.5497 -0.3632,-0.9201 -0.3632,-2.0581 l 0.048,-2.4698 q 0,-0.9201 -0.2906,-1.5013 -0.2663,-0.5811 -0.7506,-0.8474 -0.4843,-0.2906 -1.1138,-0.3148 h -0.097 q -0.46,0 -0.799,-0.3148 -0.3148,-0.3147 -0.3148,-0.799 0,-0.4843 0.3148,-0.7991 0.339,-0.3147 0.799,-0.3147 h 0.1453 q 0.6053,-0.049 1.0654,-0.3148 0.4843,-0.2906 0.7506,-0.8717 0.2906,-0.5811 0.2906,-1.477 l -0.048,-2.4698 q 0,-0.8475 0.1938,-1.5739 0.2179,-0.7506 0.7021,-1.3317 0.4843,-0.5811 1.3318,-1.017 0.8717,-0.4358 2.2034,-0.7022 0.678,-0.121 1.017,0.2422 0.339,0.3389 0.339,0.8232 0,0.3148 -0.2422,0.5811 -0.2179,0.2664 -0.5811,0.3875 -0.9685,0.3389 -1.4528,0.7506 -0.4843,0.3874 -0.6538,0.9443 -0.1452,0.5327 -0.1452,1.3075 l 0.048,2.5182 q 0,1.4044 -0.7022,2.2035 -0.7022,0.7748 -1.9129,1.1622 v -0.097 q 1.2107,0.3874 1.9129,1.1864 0.7022,0.7748 0.7022,2.1792 l -0.048,2.5182 q 0,0.7506 0.1452,1.2833 0.1695,0.5327 0.6538,0.9202 0.4843,0.4116 1.4528,0.799 0.8233,0.3148 0.8233,1.017 0,0.4116 -0.2906,0.7264 -0.2906,0.3147 -0.7022,0.3147 z"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#000000;fill-opacity:1;stroke-width:0.60533714"
            id="path819" />
        <path
            d="m -1139.9187,1272.5606 q -0.4601,0 -0.7022,-0.4116 -0.2421,-0.3874 -0.2421,-0.7022 0,-0.339 0.2179,-0.6053 0.2421,-0.2422 0.6053,-0.3632 0.9928,-0.339 1.4528,-0.7506 0.4843,-0.3875 0.6296,-0.9444 0.1695,-0.5569 0.1695,-1.3075 l -0.048,-2.5182 q 0,-1.4286 0.7021,-2.2034 0.7264,-0.7749 1.9129,-1.1623 v 0.097 q -1.1865,-0.4116 -1.9129,-1.1865 -0.7021,-0.7748 -0.7021,-2.1792 l 0.048,-2.5182 q 0,-0.7748 -0.1695,-1.2833 -0.1453,-0.5327 -0.6296,-0.9443 -0.4842,-0.4117 -1.4528,-0.7749 -0.8232,-0.3147 -0.8232,-1.0169 0,-0.4117 0.2905,-0.7264 0.2906,-0.3148 0.7022,-0.3148 0.097,0 0.1695,0 0.097,0 0.1937,0.024 1.7676,0.339 2.7119,0.9928 0.9686,0.6537 1.3318,1.5738 0.3874,0.9201 0.3874,2.0582 l -0.048,2.4698 q 0,0.9201 0.2663,1.5012 0.2906,0.5811 0.7748,0.8717 0.5085,0.2663 1.1139,0.2905 h 0.097 q 0.4601,0 0.7748,0.3148 0.339,0.3148 0.339,0.7991 0,0.4842 -0.339,0.799 -0.3147,0.3148 -0.7748,0.3148 h -0.1453 q -0.6053,0.024 -1.0896,0.3147 -0.46,0.2906 -0.7506,0.8717 -0.2663,0.5569 -0.2663,1.4771 l 0.048,2.4697 q 0,0.8475 -0.1937,1.5739 -0.1937,0.7506 -0.7022,1.3318 -0.4843,0.5811 -1.356,1.0169 -0.8474,0.4359 -2.1792,0.7022 -0.097,0.024 -0.1937,0.024 -0.073,0.024 -0.2179,0.024 z"
            style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#000000;fill-opacity:1;stroke-width:0.60533714"
            id="path821" />
        </g>
    </g>
    </g>`)

    icon_css.attr({id: 'icon_css'})
    icon_css_gr.attr({
        fill: '#de5211ff',
        id:     'icon_css_gr',
        width:  icon_css.bbox().width,
        height: icon_css.bbox().height,
        x:      (screen_width_in_px/2)/8,
        y:      -22
    })    
    icon_css_gr.scale(2)
    icon_css.addTo(icon_css_gr)
        
    //-----------------------------------------------------------------//
    var css_title = css_gr.text(function(text_element){
        text_element.tspan('css')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    css_title.attr({
        x: screen_width_in_px/2-css_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_css = css_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_css.attr({
        x: (screen_width_in_px/2)+paragraph_css.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var javascript_gr   = technologies_gr.nested()
    var rect_javascript = javascript_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    javascript_gr.attr({
        id: "javascript_gr",
        height: rect_height,
        y:  rect_height*2+60
    })
    
        var icon_javascript_gr = javascript_gr.nested()
        var icon_javascript = SVG(`<g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(19.606678,25.390759)">
        <g
            aria-label=".JS"
            style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:141.67736816px;line-height:1.25;font-family:Spartan;-inkscape-font-specification:Spartan;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:3.54193377"
            id="text4488">
            <path
                d="m -11.106036,75.058495 q -4.108643,0 -6.375481,-2.12516 -2.125161,-2.266838 -2.125161,-6.375482 v -2.408515 q 0,-4.108644 2.125161,-6.233804 2.266838,-2.266838 6.375481,-2.266838 h 1.8418062 q 4.1086436,0 6.2338042,2.266838 2.26683785,2.12516 2.26683785,6.233804 v 2.408515 q 0,4.108644 -2.26683785,6.375482 -2.1251606,2.12516 -6.2338042,2.12516 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#000000;fill-opacity:1;stroke-width:3.54193377"
                id="path814" />
            <path
                d="m 41.037876,76.616946 q -8.07561,0 -15.017801,-3.258579 -6.942191,-3.25858 -11.334189,-9.350707 -1.700129,-2.550192 -1.700129,-4.958708 0,-3.541934 2.69187,-5.950449 2.833548,-2.408515 5.525418,-2.408515 2.12516,0 4.108643,1.275096 2.125161,1.275096 3.825289,2.975225 2.833548,2.550192 5.525418,3.683611 2.833547,0.991742 6.375481,0.991742 4.250321,0 7.933933,-2.125161 3.683611,-2.12516 5.950449,-5.667094 2.266838,-3.541935 2.266838,-7.650578 v -59.504495 q 0,-3.683611 2.69187,-6.092127 2.69187,-2.550192 6.233804,-2.550192 3.966967,0 6.375482,2.550192 2.408515,2.408516 2.408515,6.092127 v 59.504495 q 0,8.642319 -4.533676,16.009542 -4.533675,7.367224 -12.184253,11.900899 -7.650578,4.533676 -17.142962,4.533676 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#000000;fill-opacity:1;stroke-width:3.54193377"
                id="path816" />
            <path
                d="m 128.13182,76.616946 q -9.91741,0 -17.85135,-2.408515 -7.93393,-2.550193 -15.159476,-8.783997 -1.841806,-1.558451 -2.833547,-3.541934 -0.991742,-1.983483 -0.991742,-3.966966 0,-3.25858 2.266838,-5.667095 2.408515,-2.550193 5.95045,-2.550193 2.691867,0 4.817027,1.700129 5.38374,4.391998 10.62581,6.658836 5.38374,2.266838 13.17599,2.266838 5.24206,0 9.63406,-1.558451 4.392,-1.700129 7.08387,-4.391999 2.69187,-2.833547 2.69187,-6.375481 0,-4.250321 -2.55019,-7.225546 -2.55019,-2.975225 -7.79226,-4.958708 -5.24206,-2.12516 -13.31767,-3.258579 -7.65058,-1.133419 -13.45935,-3.400257 -5.80877,-2.408515 -9.77574,-5.95045 -3.825287,-3.683611 -5.80877,-8.500642 -1.983484,-4.9587077 -1.983484,-11.0508345 0,-9.2090289 4.675354,-15.7261875 4.81703,-6.517159 12.89264,-9.917416 8.07561,-3.400257 17.85135,-3.400257 9.20903,0 17.00128,2.833547 7.93394,2.69187 12.89264,6.942191 4.10865,3.25858 4.10865,7.5089009 0,3.1169021 -2.40852,5.6670948 -2.40851,2.5501926 -5.66709,2.5501926 -2.12516,0 -3.82529,-1.2750963 -2.26684,-1.9834832 -6.09213,-3.6836116 -3.82529,-1.8418058 -8.07561,-2.9752247 -4.25032,-1.2750963 -7.93393,-1.2750963 -6.09213,0 -10.34245,1.558451 -4.10864,1.5584511 -6.2338,4.2503211 -2.12516,2.69186996 -2.12516,6.2338042 0,4.250321 2.40851,7.0838683 2.55019,2.69187 7.22555,4.391998 4.67535,1.558452 11.19251,2.833548 8.50064,1.558451 14.87612,3.683611 6.51716,2.125161 10.76748,5.525418 4.25032,3.258579 6.37548,8.358964 2.12516,4.958708 2.12516,12.184254 0,9.209029 -5.10038,15.867865 -5.10039,6.658837 -13.45935,10.200771 -8.21729,3.541934 -17.85135,3.541934 z"
                style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-family:Quicksand;-inkscape-font-specification:'Quicksand Bold';fill:#000000;fill-opacity:1;stroke-width:3.54193377"
                id="path818" />
        </g>
        </g>`)
    
        icon_javascript.attr({id: 'icon_javascript'})
        icon_javascript_gr.attr({
            fill: '#de5211ff',
            id:     'icon_javascript_gr',
            width:  icon_javascript.bbox().width,
            height: icon_javascript.bbox().height,
            x:      (screen_width_in_px/2)/9,
            y:      -10
        })    
        icon_javascript_gr.scale(1.6)
        icon_javascript.addTo(icon_javascript_gr)
    //-----------------------------------------------------------------//
    var javascript_title = javascript_gr.text(function(text_element){
        text_element.tspan('javascript')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    javascript_title.attr({
        x: screen_width_in_px/2-javascript_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_javascript = javascript_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_javascript.attr({
        x: (screen_width_in_px/2)+paragraph_javascript.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var svg_gr   = technologies_gr.nested()
    var rect_svg = svg_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:     0
        })
        svg_gr.attr({
            id: "svg_gr",
            height: rect_height,
            y:  rect_height*3+80
        })
    
        var icon_svg_gr = svg_gr.nested()
        var icon_svg = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-68.470147,-65.966001)">
       <g
          id="g905"
          style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-opacity:1"
          transform="matrix(0.14774731,0,0,0.14774731,52.831261,63.927955)">
         <g
            id="g935">
           <g
              id="g881">
             <path
                inkscape:connector-curvature="0"
                id="path822"
                d="m 106.35441,121.39101 218.16983,0.0487 -41.82734,-18.23191 -20.92781,-0.34308 15.09546,-15.095463 -27.10321,-27.103229 -15.43855,15.095471 0.34308,-20.92781 -38.42482,0.34308 -0.34308,20.58473 L 180.45943,60.666068 153.69928,87.769297 169.82399,103.894 H 148.5531 Z"
                style="fill:#010101;fill-opacity:1;stroke:#000000;stroke-width:1.79078269px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                sodipodi:nodetypes="ccccccccccccccc" />
             <circle
                r="25.262827"
                cy="62.720871"
                cx="155.31082"
                id="path824"
                style="opacity:0.95;fill:#010101;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
             <circle
                r="25.262827"
                cy="39.056961"
                cx="215.42995"
                id="path824-3"
                style="opacity:0.95;fill:#010101;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
             <circle
                r="25.262827"
                cy="63.680222"
                cx="274.58975"
                id="path824-6"
                style="opacity:0.95;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
             <path
                transform="matrix(1.0247394,0,0,1.0247394,-2.8503476,-2.6761323)"
                inkscape:original-d="m 156.27017,121.72077 c 0.10837,-2.98643 0.21497,-5.97107 0.31978,-8.95392 -3.88648,-4.52923 -7.77959,-9.0623 -11.67207,-13.590759 -4.90138,-1.227584 -9.80487,-2.453457 -14.71,-3.6775 -5.75578,2.450507 -11.51038,4.901539 -17.26826,7.354999 -1.86431,3.41051 -3.72901,6.82024 -5.5962,10.23305 -0.41838,2.59895 -0.83803,5.19645 -1.25973,7.79737 -0.008,0.34708 -0.017,0.69541 -0.0283,1.0458 0.0384,-0.0229 0.0746,-0.0439 0.10927,-0.0631 15.3811,-0.002 32.65988,-0.002 48.98713,0 0.37453,-0.0504 0.74735,-0.0991 1.11834,-0.14594 z"
                inkscape:path-effect="#path-effect855"
                inkscape:connector-curvature="0"
                id="path853"
                d="m 156.3235,120.22752 c 0.0533,-1.49324 0.15992,-4.47788 -1.73101,-8.23307 -1.89094,-3.75518 -5.78405,-8.28825 -10.18028,-11.16604 -4.39624,-2.877796 -9.29973,-4.103668 -14.62973,-3.491055 -5.33001,0.612614 -11.08461,3.063645 -14.8962,5.995025 -3.8116,2.93138 -5.67629,6.34111 -6.8195,9.34704 -1.1432,3.00593 -1.56285,5.60343 -1.77767,7.07753 -0.21481,1.4741 -0.22424,1.82242 -0.20962,1.98646 0.0146,0.16404 0.0509,0.14312 7.75856,0.13321 7.70771,-0.01 24.98649,-0.01 33.33748,-0.0344 8.35099,-0.0245 8.72381,-0.0731 8.90921,-0.0973 0.18539,-0.0242 0.18543,-0.0242 0.23876,-1.51744 z"
                style="fill:#010101;fill-opacity:1;stroke:none;stroke-width:1.79078269px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
             <path
                inkscape:original-d="m 156.27017,121.72077 c 0.10837,-2.98643 0.21497,-5.97107 0.31978,-8.95392 -3.88648,-4.52923 -7.77959,-9.0623 -11.67207,-13.590759 -4.90138,-1.227584 -9.80487,-2.453457 -14.71,-3.6775 -5.75578,2.450507 -11.51038,4.901539 -17.26826,7.354999 -1.86431,3.41051 -3.72901,6.82024 -5.5962,10.23305 -0.41838,2.59895 -0.83803,5.19645 -1.25973,7.79737 -0.036,0.61361 -0.0703,1.22824 -0.10284,1.84536 0.12509,-0.0496 0.25915,-0.10024 0.38031,-0.1436 15.3194,-0.22753 32.52887,-0.48116 48.79063,-0.71906 0.37453,-0.0504 0.74735,-0.0991 1.11834,-0.14594 z"
                inkscape:path-effect="#path-effect855-5"
                inkscape:connector-curvature="0"
                id="path853-3"
                d="m 156.3235,120.22752 c 0.0533,-1.49324 0.15992,-4.47788 -1.73101,-8.23307 -1.89094,-3.75518 -5.78405,-8.28825 -10.18028,-11.16604 -4.39624,-2.877796 -9.29973,-4.103668 -14.62973,-3.491055 -5.33001,0.612614 -11.08461,3.063645 -14.8962,5.995025 -3.8116,2.93138 -5.67629,6.34111 -6.8195,9.34704 -1.1432,3.00593 -1.56285,5.60343 -1.79007,7.21087 -0.22722,1.60743 -0.26147,2.22206 -0.21573,2.50681 0.0457,0.28474 0.17981,0.23412 7.89971,0.0985 7.7199,-0.13561 24.92937,-0.38924 33.2476,-0.53352 8.31823,-0.14428 8.69105,-0.19293 8.87645,-0.21713 0.18539,-0.0242 0.18543,-0.0242 0.23876,-1.51744 z"
                style="fill:#010101;fill-opacity:1;stroke:none;stroke-width:1.79078269px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                transform="matrix(-1.0323669,0,0,1.0323669,434.72248,-4.2670977)"
                sodipodi:nodetypes="cccccccccccc" />
             <circle
                r="25.262827"
                cy="62.624592"
                cx="155.44716"
                id="path824-36"
                style="opacity:0.95;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
             <circle
                r="25.262827"
                cy="38.960682"
                cx="215.56628"
                id="path824-3-7"
                style="opacity:0.95;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
             <circle
                r="25.262827"
                cy="63.583939"
                cx="274.72607"
                id="path824-6-5"
                style="opacity:0.95;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
           </g>
         </g>
       </g>
     </g>`)

    icon_svg.attr({id: 'icon_svg'})
    icon_svg_gr.attr({
        fill: '#de5211ff',
        id:     'icon_svg_gr',
        width:  icon_svg.bbox().width,
        height: icon_svg.bbox().height,
        x:      (screen_width_in_px/2)/40,
        y:      -2
    })    
    icon_svg_gr.scale(9)
    icon_svg.addTo(icon_svg_gr)
    //-----------------------------------------------------------------//
    var svg_title = svg_gr.text(function(text_element){
        text_element.tspan('svg standard')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    svg_title.attr({
        x: screen_width_in_px/2-svg_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_svg = svg_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_svg.attr({
        x: (screen_width_in_px/2)+paragraph_svg.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var jquery_gr   = technologies_gr.nested()
    var rect_jquery = jquery_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:     0
        })
    jquery_gr.attr({
        id: "jquery_gr",
        height: rect_height,
        y: rect_height*4+100
    })

    var icon_jquery_gr = jquery_gr.nested()
        var icon_jquery = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-45.860102,16.116076)">
       <g
          style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.45680785;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
          transform="matrix(1.2029254,0,0,1.2029254,943.46313,-1514.3026)"
          id="g4553">
         <path
            style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.45680785;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -739.84989,1257.2391 c -0.22289,2.3832 -1.02467,7.4613 -0.0224,12.4728 1.0023,5.0116 3.80848,9.9557 7.12714,14.1431 3.31867,4.1873 7.14951,7.6173 12.18321,10.0227 5.0337,2.4054 11.26993,3.7863 16.23661,3.7639 4.96668,-0.022 8.6642,-1.4478 11.51494,-2.9623 2.85073,-1.5145 4.85551,-3.1183 6.08044,-4.1205 1.22493,-1.0022 1.67043,-1.4032 1.78411,-1.4149 0.11369,-0.012 -0.1046,0.3663 -1.33053,2.3055 -1.22593,1.9391 -3.45591,5.4338 -7.11101,8.0514 -3.6551,2.6176 -8.73273,4.3547 -14.14521,5.0007 -5.41248,0.646 -11.15845,0.2005 -16.45946,-1.9822 -5.30102,-2.1828 -10.15615,-6.1026 -13.98707,-10.6017 -3.83091,-4.4992 -6.63728,-9.5773 -7.68404,-14.4995 -1.04675,-4.9222 -0.33404,-9.6886 0.55686,-13.0294 0.8909,-3.3408 1.96009,-5.2564 2.73961,-6.4368 0.77952,-1.1803 1.26971,-1.6259 1.55917,-1.9154 0.28947,-0.2895 0.3786,-0.4232 0.60098,-0.6456 0.22237,-0.2224 0.57951,-0.535 0.35661,1.8482 z"
            id="path4520"
            inkscape:connector-curvature="0"
            inkscape:path-effect="#path-effect4522"
            inkscape:original-d="m -739.27105,1254.5444 c -0.80143,5.0779 -1.60338,10.156 -2.40533,15.2344 2.8067,4.9445 5.61287,9.8887 8.41904,14.8335 3.83117,3.4297 7.66207,6.8596 11.49244,10.2898 6.23676,1.3807 12.47299,2.7616 18.70896,4.1427 3.69728,-1.4256 7.39483,-2.8511 11.09159,-4.2763 2.00475,-1.6037 4.0095,-3.2075 6.01372,-4.8108 0.44556,-0.4012 0.89111,-0.8021 1.33641,-1.2028 -0.21775,0.3774 -0.43604,0.7554 -0.65458,1.1335 -2.23335,3.5002 -4.46326,6.9949 -6.69555,10.4928 -5.07814,1.7371 -10.15576,3.4742 -15.23418,5.2117 -5.74648,-0.4457 -11.49244,-0.8912 -17.23892,-1.3363 -4.85537,-3.9204 -9.71048,-7.8402 -14.56611,-11.7599 -2.80617,-5.0784 -5.6126,-10.1565 -8.41904,-15.2343 0.71279,-4.7665 1.42557,-9.5329 2.1381,-14.299 1.06918,-1.9155 2.13836,-3.8311 3.20728,-5.7463 0.49001,-0.4456 0.98028,-0.8911 1.47002,-1.3363 0.0892,-0.1338 0.17833,-0.2675 0.26723,-0.4009 0.35587,-0.3114 0.71305,-0.6239 1.06892,-0.9355 z" />
         <path
            transform="matrix(0.73100083,0,0,0.73100083,-182.24987,331.43542)"
            style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.99289501;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -739.84989,1257.2391 c -0.22289,2.3832 -1.02467,7.4613 -0.0224,12.4728 1.0023,5.0116 3.80848,9.9557 7.12714,14.1431 3.31867,4.1873 7.14951,7.6173 12.18321,10.0227 5.0337,2.4054 11.26993,3.7863 16.23661,3.7639 4.96668,-0.022 8.6642,-1.4478 11.51494,-2.9623 2.85073,-1.5145 4.85551,-3.1183 6.08044,-4.1205 1.22493,-1.0022 1.67043,-1.4032 1.78411,-1.4149 0.11369,-0.012 -0.1046,0.3663 -1.33053,2.3055 -1.22593,1.9391 -3.45591,5.4338 -7.11101,8.0514 -3.6551,2.6176 -8.73273,4.3547 -14.14521,5.0007 -5.41248,0.646 -11.15845,0.2005 -16.45946,-1.9822 -5.30102,-2.1828 -10.15615,-6.1026 -13.98707,-10.6017 -3.83091,-4.4992 -6.63728,-9.5773 -7.68404,-14.4995 -1.04675,-4.9222 -0.33404,-9.6886 0.55686,-13.0294 0.8909,-3.3408 1.96009,-5.2564 2.73961,-6.4368 0.77952,-1.1803 1.26971,-1.6259 1.55917,-1.9154 0.28947,-0.2895 0.3786,-0.4232 0.60098,-0.6456 0.22237,-0.2224 0.57951,-0.535 0.35661,1.8482 z"
            id="path4520-6"
            inkscape:connector-curvature="0"
            inkscape:path-effect="#path-effect4522-9"
            inkscape:original-d="m -739.27105,1254.5444 c -0.80143,5.0779 -1.60338,10.156 -2.40533,15.2344 2.8067,4.9445 5.61287,9.8887 8.41904,14.8335 3.83117,3.4297 7.66207,6.8596 11.49244,10.2898 6.23676,1.3807 12.47299,2.7616 18.70896,4.1427 3.69728,-1.4256 7.39483,-2.8511 11.09159,-4.2763 2.00475,-1.6037 4.0095,-3.2075 6.01372,-4.8108 0.44556,-0.4012 0.89111,-0.8021 1.33641,-1.2028 -0.21775,0.3774 -0.43604,0.7554 -0.65458,1.1335 -2.23335,3.5002 -4.46326,6.9949 -6.69555,10.4928 -5.07814,1.7371 -10.15576,3.4742 -15.23418,5.2117 -5.74648,-0.4457 -11.49244,-0.8912 -17.23892,-1.3363 -4.85537,-3.9204 -9.71048,-7.8402 -14.56611,-11.7599 -2.80617,-5.0784 -5.6126,-10.1565 -8.41904,-15.2343 0.71279,-4.7665 1.42557,-9.5329 2.1381,-14.299 1.06918,-1.9155 2.13836,-3.8311 3.20728,-5.7463 0.49001,-0.4456 0.98028,-0.8911 1.47002,-1.3363 0.0892,-0.1338 0.17833,-0.2675 0.26723,-0.4009 0.35587,-0.3114 0.71305,-0.6239 1.06892,-0.9355 z" />
         <path
            transform="matrix(0.4157528,0.03953334,-0.03953334,0.4157528,-351.30638,752.83661)"
            style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:3.48828936;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m -739.84989,1257.2391 c -0.22289,2.3832 -1.02467,7.4613 -0.0224,12.4728 1.0023,5.0116 3.80848,9.9557 7.12714,14.1431 3.31867,4.1873 7.14951,7.6173 12.18321,10.0227 5.0337,2.4054 11.26993,3.7863 16.23661,3.7639 4.96668,-0.022 8.6642,-1.4478 11.51494,-2.9623 2.85073,-1.5145 4.85551,-3.1183 6.08044,-4.1205 1.22493,-1.0022 1.67043,-1.4032 1.78411,-1.4149 0.11369,-0.012 -0.1046,0.3663 -1.33053,2.3055 -1.22593,1.9391 -3.45591,5.4338 -7.11101,8.0514 -3.6551,2.6176 -8.73273,4.3547 -14.14521,5.0007 -5.41248,0.646 -11.15845,0.2005 -16.45946,-1.9822 -5.30102,-2.1828 -10.15615,-6.1026 -13.98707,-10.6017 -3.83091,-4.4992 -6.63728,-9.5773 -7.68404,-14.4995 -1.04675,-4.9222 -0.33404,-9.6886 0.55686,-13.0294 0.8909,-3.3408 1.96009,-5.2564 2.73961,-6.4368 0.77952,-1.1803 1.26971,-1.6259 1.55917,-1.9154 0.28947,-0.2895 0.3786,-0.4232 0.60098,-0.6456 0.22237,-0.2224 0.57951,-0.535 0.35661,1.8482 z"
            id="path4520-8"
            inkscape:connector-curvature="0"
            inkscape:path-effect="#path-effect4522-3"
            inkscape:original-d="m -739.27105,1254.5444 c -0.80143,5.0779 -1.60338,10.156 -2.40533,15.2344 2.8067,4.9445 5.61287,9.8887 8.41904,14.8335 3.83117,3.4297 7.66207,6.8596 11.49244,10.2898 6.23676,1.3807 12.47299,2.7616 18.70896,4.1427 3.69728,-1.4256 7.39483,-2.8511 11.09159,-4.2763 2.00475,-1.6037 4.0095,-3.2075 6.01372,-4.8108 0.44556,-0.4012 0.89111,-0.8021 1.33641,-1.2028 -0.21775,0.3774 -0.43604,0.7554 -0.65458,1.1335 -2.23335,3.5002 -4.46326,6.9949 -6.69555,10.4928 -5.07814,1.7371 -10.15576,3.4742 -15.23418,5.2117 -5.74648,-0.4457 -11.49244,-0.8912 -17.23892,-1.3363 -4.85537,-3.9204 -9.71048,-7.8402 -14.56611,-11.7599 -2.80617,-5.0784 -5.6126,-10.1565 -8.41904,-15.2343 0.71279,-4.7665 1.42557,-9.5329 2.1381,-14.299 1.06918,-1.9155 2.13836,-3.8311 3.20728,-5.7463 0.49001,-0.4456 0.98028,-0.8911 1.47002,-1.3363 0.0892,-0.1338 0.17833,-0.2675 0.26723,-0.4009 0.35587,-0.3114 0.71305,-0.6239 1.06892,-0.9355 z" />
       </g>
     </g>`)
    
    icon_jquery.attr({id: 'icon_jquery'})
    icon_jquery_gr.attr({
        fill: '#de5211ff',
        id:     'icon_jquery_gr',
        width:  icon_jquery.bbox().width,
        height: icon_jquery.bbox().height,
        x:      (screen_width_in_px/2)/7,
        y:      -5
    })    
    icon_jquery_gr.scale(2.2)
    icon_jquery.addTo(icon_jquery_gr)
    //-----------------------------------------------------------------//
    var jquery_title = jquery_gr.text(function(text_element){
        text_element.tspan('jquery')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    jquery_title.attr({
        x: screen_width_in_px/2-jquery_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_jquery = jquery_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_jquery.attr({
        x: (screen_width_in_px/2)+paragraph_jquery.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var svg_js_gr   = technologies_gr.nested() 
    var rect_svg_js = svg_js_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    svg_js_gr.attr({
        id: "svg_js_gr",
        height: rect_height,
        y: rect_height*5+120
    })

    var icon_svg_js_gr = svg_js_gr.nested()
    var icon_svg_js = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-3.6450581,-1.2879153)">
    <g
        id="g932"
        transform="translate(49.892855,0.56696748)">
        <rect
            transform="rotate(45)"
            y="-12.853691"
            x="13.873265"
            height="92.131218"
            width="92.131218"
            id="rect890"
            style="opacity:0.95;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <g
            style="stroke:#467f8c;stroke-opacity:1"
            transform="translate(0.13415125,0.14243785)"
            id="g888">
        <circle
            style="opacity:0.95;fill:none;fill-opacity:1;stroke:#467f8c;stroke-width:1.89223754;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            id="path839"
            cx="-16.961679"
            cy="64.462799"
            r="2.6079931" />
        <circle
            style="opacity:0.95;fill:none;fill-opacity:1;stroke:#467f8c;stroke-width:1.89223754;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            id="path839-3"
            cx="54.491001"
            cy="67.039284"
            r="2.6079931" />
        <path
            style="fill:none;stroke:#467f8c;stroke-width:1.86500001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="M -14.649711,62.203719 19.828058,27.72595"
            id="path856"
            inkscape:connector-curvature="0" />
        <path
            style="fill:none;stroke:#467f8c;stroke-width:1.86500001;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="M 17.907059,103.6305 52.384828,69.152728"
            id="path856-7"
            inkscape:connector-curvature="0" />
        <path
            style="fill:none;stroke:#467f8c;stroke-width:5.56500006;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
            d="m 18.883118,28.576395 c -3.985431,4.484784 -7.970886,8.969595 -9.6494422,13.769279 -1.6785559,4.799683 -1.049592,9.912831 3.0955712,15.798796 4.145163,5.885965 11.80555,12.542947 14.940594,18.516742 3.135044,5.973796 1.744269,11.264377 -0.460153,15.519363 -2.204423,4.254987 -5.222668,7.474344 -8.241171,10.693975"
            id="path879"
            inkscape:connector-curvature="0"
            inkscape:path-effect="#path-effect881-5"
            inkscape:original-d="m 18.883118,28.576395 c -3.985415,4.484799 -7.97087,8.96961 -11.9570386,13.455191 0.6293332,5.113735 1.2582971,10.226883 1.8870995,15.341134 7.6614761,6.657433 15.3218631,13.314415 22.9823991,19.97202 -1.39051,5.290316 -2.781285,10.580897 -4.172324,15.871739 -3.01798,3.219091 -6.036226,6.438447 -9.054737,9.658071"
            sodipodi:nodetypes="cccccc" />
        </g>
    </g>
    </g>`)
    
    icon_svg_js.attr({id: 'icon_svg_js'})
    icon_svg_js_gr.attr({
        fill: '#de5211ff',
        id:     'icon_svg_js_gr',
        width:  icon_svg_js.bbox().width,
        height: icon_svg_js.bbox().height,
        x:      (screen_width_in_px/2)/6,
        y:      -25
    })    
    icon_svg_js_gr.scale(1.6)
    icon_svg_js.addTo(icon_svg_js_gr)
    //-----------------------------------------------------------------//
    var svg_js_title = svg_js_gr.text(function(text_element){
        text_element.tspan('svg.js')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    svg_js_title.attr({
        x: screen_width_in_px/2-svg_js_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_svg_js = svg_js_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_svg_js.attr({
        x: (screen_width_in_px/2)+paragraph_svg_js.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var p5_js_gr   = technologies_gr.nested()
    var rect_p5_js = p5_js_gr.rect(screen_width_in_px, rect_height)
    .attr({
        fill: "#ff6f3c",
        y:    0
    })
    p5_js_gr.attr({
        id: "p5_js_gr",
        height: rect_height,
        y: rect_height*6+140
    })

    var icon_p5_js_gr = p5_js_gr.nested()
    var icon_p5_js = SVG(`<g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(-0.52166735,-171.8538)">
        <path
            style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 51.359464,171.8538 h 28.72619 v 44.22321 L 122.23,203.22582 l 8.50446,25.5134 -42.144346,14.55208 26.269346,36.85267 -22.300596,16.25298 -27.40327,-36.47469 -27.0253,35.52976 L 16.774643,279.01005 42.855004,243.2913 0.52166735,227.79428 8.8371433,202.0919 51.548454,215.88803 Z"
            id="path951"
            inkscape:connector-curvature="0" />
    </g>`)
        
    icon_p5_js.attr({id: 'icon_p5_js'})
    icon_p5_js_gr.attr({
        fill: '#de5211ff',
        id:     'icon_p5_js_gr',
        width:  icon_p5_js.bbox().width,
        height: icon_p5_js.bbox().height,
        x:      (screen_width_in_px/2)/7,
        y:      -25
    })    
    icon_p5_js_gr.scale(1.8)
    icon_p5_js.addTo(icon_p5_js_gr)
    //-----------------------------------------------------------------//
    var p5_js_title = p5_js_gr.text(function(text_element){
        text_element.tspan('p5.js')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    p5_js_title.attr({
        x: screen_width_in_px/2-p5_js_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_p5_js = p5_js_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_p5_js.attr({
        x: (screen_width_in_px/2)+paragraph_p5_js.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var git_gr   = technologies_gr.nested()
    var rect_git = git_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    git_gr.attr({
        id: "git_gr",
        height: rect_height,
        y: rect_height*7+160
    })

    var icon_git_gr = git_gr.nested()
    var icon_git = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-37.42794,-110.20554)">
    <g
        style="fill:#030303;fill-opacity:1"
        id="g938"
        transform="matrix(0.32216093,0,0,0.32216093,-1.1052064,114.43929)" />
    <g
        id="g845">
        <path
            transform="matrix(0.32216093,0,0,0.32216093,-2.8272824,72.420636)"
            sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccc"
            inkscape:original-d="m 190.01472,208.11043 c 0,0 -8.62173,9.01504 -12.93515,13.52518 -1.39781,-0.45558 -2.79575,-0.91011 -4.19504,-1.36399 -16.82572,-16.64397 -33.64922,-33.28411 -50.47509,-49.92496 0.6239,-1.16924 1.24752,-2.33821 1.87089,-3.50692 11.13299,-10.93261 33.40869,-32.80734 33.40869,-32.80734 l 11.55941,11.62623 c 0,0 -0.99488,2.78277 -1.49291,4.1751 1.04194,1.73046 2.08303,3.4602 3.1242,5.19079 0.83742,0.21865 2.51138,0.65672 2.51138,0.65672 l -0.0668,27.79603 c 0,0 -2.55724,1.19796 -3.83627,1.79735 -0.61256,2.30527 -1.2253,4.6105 -1.83846,6.91658 1.6025,2.19576 3.20433,4.39123 4.8061,6.58724 3.04241,-0.31366 6.08446,-0.62705 9.12631,-0.94018 1.18993,-2.76047 2.37959,-5.52067 3.56899,-8.28061 -1.2653,-1.60595 -2.53115,-3.21198 -3.79712,-4.81757 -0.62719,-0.39893 -1.88236,-1.196 -1.88236,-1.196 l -0.0668,-27.39512 10.62396,10.62396 c 0,0 -1.03944,3.34342 -1.55972,5.01605 2.51217,2.6606 5.02301,5.32032 7.53414,7.98092 3.63677,-2.40413 7.27321,-4.80795 10.90942,-7.21153 -1.44969,-3.65361 -2.89963,-7.30694 -4.34984,-10.96003 -2.68549,0.23235 -8.05723,0.69783 -8.05723,0.69783 l -11.29214,-11.22533 c 0,0 0.8988,-3.83112 1.34781,-5.74629 -2.0749,-1.78206 -4.15006,-3.56386 -6.22548,-5.34539 -1.55883,0.46746 -4.67722,1.40316 -4.67722,1.40316 l -11.62622,-11.62622 c 0,0 7.48381,-8.01835 11.22532,-12.02713 1.64275,-0.27471 3.28555,-0.54874 4.92805,-0.82203 0.98773,1.03482 1.97367,2.06945 2.95957,3.10572 14.92892,15.36145 44.79018,46.08947 44.79018,46.08947 l 0.1273,4.69429 c 0,0 -7.33654,7.97539 -11.00594,11.96422 -4.12781,4.24032 -12.38253,12.72002 -12.38253,12.72002 z"
            inkscape:path-effect="#path-effect886-5"
            inkscape:connector-curvature="0"
            id="path884"
            d="m 190.01472,208.11043 c -4.31172,4.50839 -8.62175,9.01502 -11.47751,11.04281 -2.85577,2.02778 -4.25371,1.57325 -13.36646,-6.97576 -9.11276,-8.549 -25.93626,-25.18914 -34.03688,-34.09463 -8.10063,-8.90548 -7.477,-10.07445 -1.59877,-16.12508 5.87823,-6.05063 17.01769,-16.98959 28.15392,-27.92537 0,0 11.55941,11.62623 11.55941,11.62623 -0.49764,1.3917 -0.99503,2.78272 -0.72315,4.34423 0.27187,1.56152 1.31296,3.29126 2.25237,4.26594 0.93941,0.97468 1.77632,1.19353 2.61345,1.41244 0,0 -0.0668,27.79603 -0.0668,27.79603 -1.27876,0.59912 -2.55718,1.19808 -3.5031,2.65033 -0.94591,1.45224 -1.55865,3.75747 -1.06404,6.00852 0.49461,2.25106 2.09644,4.44653 4.41869,5.38771 2.32225,0.94118 5.3643,0.62779 7.48012,-0.90915 2.11581,-1.53695 3.30547,-4.29714 3.26744,-6.47995 -0.038,-2.1828 -1.30388,-3.78883 -2.25041,-4.79105 -0.94653,-1.00222 -1.57406,-1.40093 -2.20151,-1.7996 0,0 -0.0668,-27.39512 -0.0668,-27.39512 0,0 10.62396,10.62396 10.62396,10.62396 -0.51991,1.67202 -1.03961,3.34337 -0.0437,5.51014 0.99589,2.16677 3.50672,4.82649 6.58083,4.95463 3.07411,0.12813 6.71055,-2.27569 7.80363,-5.30425 1.09309,-3.02857 -0.35685,-6.6819 -2.42454,-8.39221 -2.06768,-1.71031 -4.7537,-1.47768 -7.43944,-1.24507 0,0 -11.29214,-11.22533 -11.29214,-11.22533 0.44927,-1.91543 0.89861,-3.83116 0.0856,-5.67962 -0.81297,-1.84845 -2.88813,-3.63025 -4.70511,-4.28734 -1.81698,-0.65709 -3.37635,-0.18928 -4.93542,0.27844 0,0 -11.62622,-11.62622 -11.62622,-11.62622 3.74177,-4.00904 7.4838,-8.01836 10.17599,-10.15976 2.69219,-2.14141 4.33499,-2.41544 5.64963,-2.03461 1.31464,0.38083 2.30058,1.41546 10.25828,9.61405 7.95769,8.19859 22.88916,23.56319 37.81922,38.92635 0,0 0.1273,4.69429 0.1273,4.69429 -3.66865,3.98807 -7.33657,7.97536 -11.23516,12.08995 -3.89859,4.11459 -8.0258,8.35428 -12.15331,12.59429 0,0 -12.6594,12.62978 -12.6594,12.62978 z"
            style="fill:#030303;fill-opacity:1;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
        <path
            sodipodi:nodetypes="ccccccccc"
            transform="matrix(-1,0,0,1,107.5829,-0.13198281)"
            inkscape:original-d="m 38.234547,128.33133 c -0.343813,-0.31321 -0.687643,-0.62642 -1.03149,-0.93962 0.0471,-0.44189 0.09439,-0.88277 0.141985,-1.32381 0.461915,-0.39006 0.924055,-0.77981 1.386461,-1.16931 -0.08378,0.18348 -0.167381,0.36739 -0.250567,0.55124 0.139676,0.52393 0.27867,1.04655 0.417608,1.57021 -0.06846,0.36995 -0.136648,0.74011 -0.204628,1.11084 -0.153466,0.0666 -0.305931,0.13312 -0.459369,0.20045 -2.65e-4,-2.6e-4 -2.65e-4,-2.6e-4 0,0 z"
            inkscape:path-effect="#path-effect823-3"
            inkscape:connector-curvature="0"
            id="path821"
            d="m 38.062636,128.17473 c -0.171911,-0.1566 -0.515743,-0.46981 -0.663965,-0.84734 -0.148223,-0.37754 -0.100936,-0.81842 0.153796,-1.23384 0.254732,-0.41542 0.716868,-0.80518 0.906219,-0.90826 0.189351,-0.10308 0.105754,0.0808 0.133684,0.43469 0.02793,0.35386 0.166925,0.87648 0.20247,1.32327 0.03554,0.4468 -0.03264,0.81696 -0.143449,1.03575 -0.110807,0.21879 -0.263268,0.28532 -0.340056,0.31882 -0.07679,0.0335 -0.07679,0.0335 -0.248699,-0.12309 z"
            style="fill:#030303;fill-opacity:1;stroke:none;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
    </g>
    </g>`)
    
    icon_git.attr({id: 'icon_git'})
    icon_git_gr.attr({
        fill: '#de5211ff',
        id:     'icon_git_gr',
        width:  icon_git.bbox().width,
        height: icon_git.bbox().height,
        x:      (screen_width_in_px/2)/22,
        y:      -5
    })    
    icon_git_gr.scale(6)
    icon_git.addTo(icon_git_gr)
    //-----------------------------------------------------------------//
    var git_title = git_gr.text(function(text_element){
        text_element.tspan('Git')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    git_title.attr({
        x: screen_width_in_px/2-git_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_git = git_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_git.attr({
        x: (screen_width_in_px/2)+paragraph_git.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var git_hub_gr   = technologies_gr.nested()
    var rect_git_hub = git_hub_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:   0
        })
    git_hub_gr.attr({
        id: "git_hub_gr",
        height: rect_height,
        y: rect_height*8+180 
    })

    var icon_git_hub_gr = git_hub_gr.nested()
    var icon_git_hub = SVG(`<g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1"
        transform="translate(-79.085997,-101.9384)">
       <path
          id="path817-9"
          d="m 91.009901,133.74021 c 0,0 0.01484,-3.89594 0.01484,-3.89594 -1.142087,0.14483 -2.283784,0.28961 -3.251634,-0.0683 -0.967851,-0.35796 -1.760801,-1.21843 -2.181929,-1.91587 -0.421129,-0.69744 -0.470293,-1.23154 -0.894775,-1.72505 -0.424482,-0.49352 -1.224332,-0.94663 -1.54494,-1.21729 -0.320608,-0.27066 -0.162088,-0.35868 0.299782,-0.38914 0.461869,-0.0305 1.227123,-0.003 1.861665,0.51021 0.634543,0.51368 1.138751,1.51449 1.711946,2.09225 0.573195,0.57775 1.215221,0.73247 1.989843,0.7477 0.774623,0.0152 1.681746,-0.10897 2.067579,-0.37563 0.385832,-0.26666 0.250604,-0.67572 0.413071,-0.98847 0.162467,-0.31276 0.622168,-0.52912 1.082081,-0.74559 -1.499985,-0.24459 -2.999669,-0.48912 -4.38796,-1.16643 -1.388291,-0.6773 -2.66433,-1.78705 -3.534034,-2.94222 -0.869703,-1.15516 -1.332886,-2.35551 -1.505103,-3.59866 -0.172217,-1.24315 -0.0553,-2.50973 0.439218,-3.55883 0.494519,-1.0491 1.337103,-1.81863 2.192687,-2.60003 -0.168149,-1.04846 -0.336322,-2.09706 -0.3066,-2.94774 0.02972,-0.85067 0.257144,-1.50327 0.484641,-2.15609 0.845693,0.17804 1.691519,0.35611 2.544588,0.70972 0.85307,0.35361 1.71355,0.88276 2.57408,1.41193 1.236394,-0.29179 2.472992,-0.58362 3.926957,-0.58111 1.453968,0.002 3.125431,0.29921 4.797034,0.59595 1.073182,-0.60336 2.146582,-1.20684 3.021942,-1.55298 0.87536,-0.34615 1.55271,-0.43514 2.23025,-0.52416 0.0989,1.30563 0.1978,2.61093 0.20525,3.46908 0.007,0.85814 -0.0767,1.26878 -0.16074,1.67926 0.7913,0.80613 1.58259,1.61225 2.01285,3.07112 0.43026,1.45886 0.49949,3.57044 -0.0272,5.28421 -0.52667,1.71378 -1.63524,3.01282 -3.05725,3.87161 -1.422,0.8588 -3.08745,1.23486 -3.99994,1.41294 -0.912486,0.17808 -1.051101,0.15332 -1.189578,0.1286 0.642925,0.55885 1.279088,1.11182 1.571448,2.37863 0.29236,1.26681 0.22874,3.19503 0.16444,5.14358 1.47873,-0.54401 2.95767,-1.0881 4.64394,-2.48017 1.68628,-1.39206 3.58071,-3.63274 4.67857,-5.73462 1.09785,-2.10187 1.39953,-4.06526 1.491,-6.08304 0.0915,-2.01778 -0.0272,-4.08997 -0.86056,-6.32779 -0.83334,-2.23781 -2.3813,-4.64135 -4.15177,-6.39947 -1.77047,-1.75811 -3.76349,-2.87083 -6.26597,-3.59292 -2.502472,-0.72208 -5.514098,-1.0534 -8.481561,-0.35859 -2.967462,0.69482 -5.889939,2.41567 -7.967283,4.49786 -2.077343,2.0822 -3.30758,4.52291 -3.970939,6.89648 -0.66336,2.37358 -0.757241,4.67118 -0.393728,6.87456 0.363512,2.20339 1.184378,4.30995 2.413415,6.18444 1.229037,1.87448 2.865931,3.51632 4.484071,4.63862 1.61814,1.1223 3.217145,1.72484 4.816279,2.32742 z"
          style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.17606473px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          inkscape:connector-curvature="0" />
       <g
          id="g835">
         <path
            id="path832"
            d="m 91.009901,133.74021 c 0,0 0.01484,-3.89594 0.01484,-3.89594 -1.142087,0.14483 -2.283784,0.28961 -3.251634,-0.0683 -0.967851,-0.35796 -1.760801,-1.21843 -2.181929,-1.91587 -0.421129,-0.69744 -0.470293,-1.23154 -0.894775,-1.72505 -0.424482,-0.49352 -1.224332,-0.94663 -1.54494,-1.21729 -0.320608,-0.27066 -0.162088,-0.35868 0.299782,-0.38914 0.461869,-0.0305 1.227123,-0.003 1.861665,0.51021 0.634543,0.51368 1.138751,1.51449 1.711946,2.09225 0.573195,0.57775 1.215221,0.73247 1.989843,0.7477 0.774623,0.0152 1.681746,-0.10897 2.067579,-0.37563 0.385832,-0.26666 0.250604,-0.67572 0.413071,-0.98847 0.162467,-0.31276 0.622168,-0.52912 1.082081,-0.74559 -1.499985,-0.24459 -2.999669,-0.48912 -4.38796,-1.16643 -1.388291,-0.6773 -2.66433,-1.78705 -3.534034,-2.94222 -0.869703,-1.15516 -1.332886,-2.35551 -1.505103,-3.59866 -0.172217,-1.24315 -0.0553,-2.50973 0.439218,-3.55883 0.494519,-1.0491 1.337103,-1.81863 2.192687,-2.60003 -0.168149,-1.04846 -0.336322,-2.09706 -0.3066,-2.94774 0.02972,-0.85067 0.257144,-1.50327 0.484641,-2.15609 0.845693,0.17804 1.691519,0.35611 2.544588,0.70972 0.85307,0.35361 1.71355,0.88276 2.57408,1.41193 1.236394,-0.29179 2.472992,-0.58362 3.926957,-0.58111 1.453968,0.002 3.125431,0.29921 4.797034,0.59595 1.073182,-0.60336 2.146582,-1.20684 3.021942,-1.55298 0.87536,-0.34615 1.55271,-0.43514 2.23025,-0.52416 0.0989,1.30563 0.1978,2.61093 0.20525,3.46908 0.007,0.85814 -0.0767,1.26878 -0.16074,1.67926 0.7913,0.80613 1.58259,1.61225 2.01285,3.07112 0.43026,1.45886 0.49949,3.57044 -0.0272,5.28421 -0.52667,1.71378 -1.63524,3.01282 -3.05725,3.87161 -1.422,0.8588 -3.08745,1.23486 -3.99994,1.41294 -0.912486,0.17808 -1.051101,0.15332 -1.189578,0.1286 0.642925,0.55885 1.279088,1.11182 1.571448,2.37863 0.29236,1.26681 0.22874,3.19503 0.16444,5.14358 1.47873,-0.54401 2.95767,-1.0881 4.64394,-2.48017 1.68628,-1.39206 3.58071,-3.63274 4.67857,-5.73462 1.09785,-2.10187 1.39953,-4.06526 1.491,-6.08304 0.0915,-2.01778 -0.0272,-4.08997 -0.86056,-6.32779 -0.83334,-2.23781 -2.3813,-4.64135 -4.15177,-6.39947 -1.77047,-1.75811 -3.76349,-2.87083 -6.26597,-3.59292 -2.502472,-0.72208 -5.514098,-1.0534 -8.481561,-0.35859 -2.967462,0.69482 -5.889939,2.41567 -7.967283,4.49786 -2.077343,2.0822 -3.30758,4.52291 -3.970939,6.89648 -0.66336,2.37358 -0.757241,4.67118 -0.393728,6.87456 0.363512,2.20339 1.184378,4.30995 2.413415,6.18444 1.229037,1.87448 2.865931,3.51632 4.484071,4.63862 1.61814,1.1223 3.217145,1.72484 4.816279,2.32742 z"
            style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.17606473px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            inkscape:connector-curvature="0" />
       </g>
     </g>`)
    
    icon_git_hub.attr({id: 'icon_git_hub'})
    icon_git_hub_gr.attr({
        fill: '#de5211ff',
        id:     'icon_git_hub_gr',
        width:  icon_git_hub.bbox().width,
        height: icon_git_hub.bbox().height,
        x:      (screen_width_in_px/2)/17.5,
        y:      -5
    })    
    icon_git_hub_gr.scale(5)
    icon_git_hub.addTo(icon_git_hub_gr)
    //-----------------------------------------------------------------//
    var git_hub_title = git_hub_gr.text(function(text_element){
        text_element.tspan('GitHub')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    git_hub_title.attr({
        x: screen_width_in_px/2-git_hub_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_git_hub = git_hub_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_git_hub.attr({
        x: (screen_width_in_px/2)+paragraph_git_hub.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var docker_gr   = technologies_gr.nested()
    var rect_docker = docker_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    docker_gr.attr({
        id: "docker_gr",
        height: rect_height,
        y: rect_height*9+200
    })

    var icon_docker_gr = docker_gr.nested()
    var icon_docker = SVG(`<g
        id="g818">
        <path
            id="path2"
            d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z" />
    </g>`)
    
    icon_docker.attr({id: 'icon_docker'})
    icon_docker_gr.attr({
        fill: '#000',
        id:     'icon_docker_gr',
        width:  icon_docker.bbox().width,
        height: icon_docker.bbox().height,
        x:      (screen_width_in_px/2)/1.6,
        y:      -35
    })    
    icon_docker_gr.scale(0.4)
    icon_docker.addTo(icon_docker_gr)
    //-----------------------------------------------------------------//
    var docker_title = docker_gr.text(function(text_element){
        text_element.tspan('docker')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    docker_title.attr({
        x: screen_width_in_px/2-docker_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_docker = docker_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_docker.attr({
        x: (screen_width_in_px/2)+paragraph_docker.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var inkscape_gr   = technologies_gr.nested()
    var rect_inkscape = inkscape_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    inkscape_gr.attr({
        id: "inkscape_gr",
        height: rect_height,
        y: rect_height*10+220
    })

    var icon_inkscape_gr = inkscape_gr.nested()
    var icon_inkscape = SVG(`<g
       inkscape:label="Layer 1"
       inkscape:groupmode="layer"
       id="layer1"
       transform="translate(-28.950926,46.840619)">
      <g
         id="g4600"
         transform="matrix(1.5655154,0,0,1.5655154,1016.4498,-1997.0176)"
         style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.67350304;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
        <path
           sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccc"
           inkscape:original-d="m -603.20212,1306.4632 c 0,0 1.37033,0.6848 2.05505,1.0276 1.48068,-0.048 2.96134,-0.095 4.44145,-0.1418 2.0156,-1.008 4.03199,-2.0161 6.04758,-3.0238 -0.0312,-0.4097 -0.0627,-0.8192 -0.0944,-1.2284 -0.5035,-0.1892 -1.0078,-0.3783 -1.5121,-0.567 -0.59822,-0.3783 -1.19671,-0.7562 -1.79519,-1.1339 0.28363,-0.4728 0.567,-0.9452 0.85037,-1.4174 1.16496,-0.8187 2.33098,-1.6382 3.4962,-2.4569 1.32292,-0.3152 2.6461,-0.6302 3.96875,-0.9449 0.91361,-0.2522 1.82721,-0.5043 2.74029,-0.756 0.53552,-0.8819 1.0713,-1.7641 1.60655,-2.6458 -0.34607,-0.5985 -0.69268,-1.1972 -1.03955,-1.7954 -1.76344,-0.8191 -3.52742,-1.6382 -5.29166,-2.4568 v -1.7009 c 2.70774,-0.9133 5.41787,-1.8272 8.12641,-2.7404 2.39395,-0.6616 4.78816,-1.3231 7.18158,-1.9843 1.41764,-1.3231 2.83528,-2.6461 4.25239,-3.9688 0.0317,-0.9135 0.0632,-1.8271 0.0945,-2.7403 -1.32238,-1.6062 -2.64556,-3.2131 -3.96875,-4.8192 -7.52766,-7.6542 -15.05585,-15.3083 -22.58404,-22.9621 -1.29116,-0.9767 -2.58259,-1.9531 -3.87429,-2.9293 -1.7952,0.4407 -3.59066,0.8817 -5.38612,1.3229 -1.57507,1.5749 -3.1496,3.1496 -4.72467,4.7247 -6.42646,6.6155 -12.85107,13.2289 -19.27701,19.8438 -0.81862,0.8817 -1.63751,1.7636 -2.45666,2.6458 -0.28336,1.2916 -0.56673,2.5826 -0.85063,3.8743 0.66199,0.7873 1.32318,1.5746 1.98437,2.3623 1.98491,0.4407 3.96902,0.8817 5.95313,1.3229 1.95315,0.5037 3.90604,1.0077 5.85867,1.512 0.18944,0.4406 0.37835,0.8816 0.567,1.3229 -2.23679,1.1024 -4.47252,2.2046 -6.70904,3.3073 v 1.4174 c 1.35546,0.5355 2.70907,1.0706 4.06321,1.6064 3.65363,1.291 7.30779,2.5825 10.96142,3.8742 v 0.8505 1.5119 c -0.81915,0.8191 -1.63777,1.6376 -2.45692,2.4568 -0.2204,0.6614 -0.4408,1.3227 -0.66146,1.9844 0.88265,0.2833 1.76424,0.5667 2.64583,0.8504 1.35441,0.2832 2.70907,0.5667 4.06321,0.8505 0.5043,0.7556 1.00833,1.5116 1.51183,2.2678 0.0712,0.492 0.2127,1.4766 0.2127,1.4766 z"
           inkscape:path-effect="#path-effect4557"
           id="path4555"
           inkscape:connector-curvature="0"
           d="m -603.20212,1306.4632 c 0.68502,0.3425 1.37016,0.6851 2.45296,0.8327 1.08279,0.1476 2.56344,0.1004 4.31133,-0.4272 1.74789,-0.5275 3.76424,-1.5357 4.75627,-2.2444 0.99204,-0.7088 0.96057,-1.1183 0.69303,-1.4173 -0.26754,-0.299 -0.77184,-0.4881 -1.32314,-0.7717 -0.55129,-0.2835 -1.14972,-0.6615 -1.30707,-1.0868 -0.15734,-0.4254 0.12606,-0.8978 0.85021,-1.5432 0.72415,-0.6455 1.89022,-1.4649 3.13428,-2.0318 1.24406,-0.5669 2.56724,-0.8819 3.68536,-1.1654 1.11813,-0.2835 2.03174,-0.5355 2.75601,-1.1024 0.72426,-0.5669 1.25997,-1.4492 1.35443,-2.1891 0.0945,-0.74 -0.25218,-1.3387 -1.30722,-2.0473 -1.05503,-0.7086 -2.81906,-1.5276 -3.70108,-1.9371 -0.88203,-0.4095 -0.88203,-2.1104 0.47187,-2.567 1.3539,-0.4565 4.06402,-1.3704 6.61526,-2.1579 2.55124,-0.7874 4.94544,-1.4489 6.85095,-2.4411 1.90552,-0.9922 3.32311,-2.3153 4.04744,-3.4333 0.72433,-1.1181 0.75584,-2.0317 0.11028,-3.2913 -0.64555,-1.2596 -1.96882,-2.8664 -6.39422,-7.4966 -4.4254,-4.6301 -11.95354,-12.2843 -16.36322,-16.5995 -4.40969,-4.3152 -5.7011,-5.2916 -7.24442,-5.5594 -1.54332,-0.2678 -3.33878,0.1732 -5.02403,1.1812 -1.68524,1.008 -3.25985,2.5826 -7.26064,6.6779 -4.00079,4.0953 -10.42535,10.7087 -14.04765,14.457 -3.6223,3.7483 -4.44117,4.6302 -4.99252,5.7171 -0.55136,1.0869 -0.8348,2.3778 -0.64581,3.4175 0.189,1.0397 0.85028,1.8269 2.17344,2.4412 1.32315,0.6143 3.30728,1.0552 5.27589,1.5277 1.96862,0.4724 3.92151,0.9764 4.99234,1.4488 1.07083,0.4724 1.25982,0.9134 0.23601,1.6852 -1.02381,0.7719 -3.25957,1.874 -4.37786,2.4253 -1.1183,0.5513 -1.1183,1.9687 -0.44064,2.2366 0.67767,0.2679 2.03126,0.8031 4.53517,1.7164 2.5039,0.9134 6.15806,2.2049 7.98493,2.8506 1.82687,0.6457 1.82687,1.4962 1.82687,1.4962 0,0 0,1.5119 -0.40957,1.9215 -0.40958,0.4095 -1.22815,1.228 -1.74798,1.9683 -0.51983,0.7403 -0.74026,1.4016 -0.40928,1.8743 0.33099,0.4727 1.21259,0.756 2.33061,1.0395 1.11802,0.2834 2.47267,0.5669 3.40172,1.0866 0.92906,0.5197 1.43306,1.2757 1.72046,1.8997 0.28741,0.6239 0.35833,1.1163 0.42923,1.6085 z"
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           transform="translate(-4.5833334e-5,-3.5416667e-6)" />
        <g
           id="g4590"
           style="fill:#467f8c;fill-opacity:1;stroke:#000000;stroke-width:1.67350304;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
          <path
             transform="translate(-4.5833334e-5,-3.5416667e-6)"
             style="fill:#467f8c;fill-opacity:1;stroke:#000000;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             d="m -610.53599,1284.8405 c 0.71267,0.5068 2.27182,1.4089 4.19277,2.1605 1.92095,0.7517 4.20404,1.3531 5.58497,1.5423 1.38093,0.1892 1.85981,-0.034 2.19373,-0.4065 0.33392,-0.373 0.52333,-0.8968 0.46229,-1.175 -0.0611,-0.2781 -0.3732,-0.3116 -2.56292,-0.7462 -2.18971,-0.4346 -6.25158,-1.2693 -8.35063,-1.6313 -2.09905,-0.3621 -2.23288,-0.2506 -1.52021,0.2562 z"
             id="path4559"
             inkscape:connector-curvature="0"
             inkscape:path-effect="#path-effect4561"
             inkscape:original-d="m -611.38258,1284.4452 c 1.55945,0.9018 3.11864,1.8038 4.6773,2.7061 2.28309,0.6011 4.56618,1.2025 6.84874,1.8041 0.47916,-0.223 0.95806,-0.4457 1.43669,-0.6682 0.18944,-0.5233 0.37888,-1.0471 0.56779,-1.5702 -0.31115,-0.034 -0.62335,-0.067 -0.9353,-0.1002 -4.06744,-0.8361 -8.12932,-1.6707 -12.19411,-2.5057 -0.13335,0.1111 -0.26723,0.2225 -0.40111,0.3341 z" />
          <path
             inkscape:original-d="m -587.02742,1261.8275 c 0.18944,0.1 0.37862,0.2002 0.56779,0.3007 0.12277,-0.6796 0.24527,-1.3586 0.36751,-2.0379 -0.13335,-0.2564 -0.26697,-0.5126 -0.40084,-0.7684 -3.32952,-3.3746 -6.6593,-6.749 -9.98935,-10.1229 -0.46725,-0.4011 -0.93504,-0.8021 -1.40308,-1.2026 -1.26921,-0.078 -2.53921,-0.1559 -3.80868,-0.2339 -0.75697,0.6679 -1.51421,1.3361 -2.27171,2.0045 -3.24036,3.207 -6.48229,6.4155 -9.72185,9.6217 -0.22252,0.7904 -0.4453,1.5811 -0.66834,2.372 0.41248,0.4563 0.82444,0.9129 1.23613,1.3698 2.01603,0.011 4.03168,0.022 6.04712,0.033 -0.0109,0.011 -0.022,0.022 -0.0334,0.033 1.08334,-1.8928 2.11615,-3.6975 3.17383,-5.5458 -0.022,0.1002 -0.0443,0.2007 -0.0668,0.3015 0.0338,-0.045 0.0671,-0.089 0.10023,-0.1337 -0.0108,-0.056 -0.022,-0.1121 -0.0334,-0.1678 0.66599,2.6629 1.33658,5.3456 2.00448,8.0189 0.0225,0.011 0.0448,0.022 0.0668,0.033 1.99526,-1.3192 4.0093,-2.6507 6.01356,-3.9757 0.0114,0.011 0.0225,0.022 0.0334,0.033 1.3032,0.7236 2.60614,1.4475 3.90882,2.1716 0.0225,-0.1896 0.0448,-0.3789 0.0668,-0.5679 0.20041,-1.6126 0.40117,-3.2298 0.60136,-4.8443 0.0225,-0.067 0.0448,-0.1339 0.0668,-0.2005 1.37462,1.1635 2.7621,2.3384 4.14276,3.5079 z"
             inkscape:path-effect="#path-effect4565"
             id="path4563"
             inkscape:connector-curvature="0"
             d="m -586.93277,1261.8776 c 0.0947,0.05 0.28384,0.1503 0.43977,-0.1393 0.15593,-0.2897 0.27838,-0.9687 0.2728,-1.4365 -0.006,-0.4677 -0.13923,-0.7239 -1.8709,-2.5391 -1.73166,-1.8151 -5.0615,-5.1895 -6.96013,-7.077 -1.89863,-1.8874 -2.36645,-2.2884 -3.23491,-2.5278 -0.86846,-0.2394 -2.13846,-0.3174 -3.15167,-0.023 -1.01321,0.295 -1.77047,0.9632 -3.7694,2.9009 -1.99894,1.9377 -5.24085,5.1462 -6.97198,7.1445 -1.73113,1.9983 -1.95392,2.7889 -1.8593,3.4128 0.0946,0.6238 0.50662,1.0803 1.72065,1.3141 1.21403,0.2338 3.22968,0.2448 4.23189,0.2557 1.00221,0.011 0.9911,0.022 1.5271,-0.9189 0.53599,-0.9408 1.56881,-2.7455 2.08659,-3.6196 0.51778,-0.874 0.49551,-0.7735 0.50122,-0.7456 0.006,0.028 0.0388,-0.016 0.0499,-0.067 0.0111,-0.05 -5e-5,-0.1063 0.32723,1.1973 0.32728,1.3036 0.99788,3.9863 1.34322,5.3284 0.34533,1.3422 0.36763,1.3532 1.3763,0.6991 1.00868,-0.6541 3.02271,-1.9857 4.03046,-2.6426 1.00775,-0.657 1.01886,-0.646 1.67589,-0.2786 0.65702,0.3674 1.95997,1.0913 2.62254,1.3584 0.66257,0.2671 0.68484,0.078 0.79605,-0.823 0.11121,-0.9008 0.31196,-2.518 0.42334,-3.3588 0.11138,-0.8408 0.13367,-0.9077 0.83195,-0.359 0.69828,0.5486 2.08578,1.7234 2.77622,2.3081 0.69043,0.5846 0.69049,0.5854 0.78514,0.6355 z"
             style="fill:#467f8c;fill-opacity:1;stroke:#000000;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        </g>
        <path
           inkscape:original-d="m -618.56523,1298.5437 c 0.52361,0.5677 1.04696,1.1356 1.57004,1.7038 0.69083,-0.067 1.38113,-0.1339 2.07142,-0.2004 0.7239,-0.3899 1.44807,-0.7798 2.17144,-1.1693 0.36777,-0.657 0.73528,-1.3144 1.10252,-1.9711 -0.15558,-0.2897 -0.31142,-0.5794 -0.46779,-0.8687 -1.19089,-0.1116 -2.38283,-0.2229 -3.57452,-0.334 -0.7239,0.4118 -1.44753,0.8238 -2.1717,1.2361 -0.24474,0.2782 -0.48974,0.5565 -0.73501,0.8352 0.0106,0.2561 0.0212,0.512 0.0336,0.7684 z"
           inkscape:path-effect="#path-effect4577"
           inkscape:connector-curvature="0"
           id="path4575"
           d="m -618.30916,1298.6994 c 0.26728,0.4122 0.79061,0.9802 1.39771,1.2307 0.60711,0.2506 1.29742,0.1838 2.00452,-0.044 0.7071,-0.2283 1.43124,-0.6183 1.9767,-1.1416 0.54546,-0.5233 0.91312,-1.1806 1.01882,-1.6537 0.10569,-0.4731 -0.0503,-0.7628 -0.72369,-0.9632 -0.67342,-0.2004 -1.86535,-0.3118 -2.82309,-0.1614 -0.95773,0.1503 -1.68141,0.5622 -2.16592,0.9074 -0.4845,0.3452 -0.72945,0.6235 -0.84649,0.8909 -0.11703,0.2674 -0.10584,0.5232 0.16144,0.9354 z"
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
           inkscape:original-d="m -578.44143,1293.7663 c -0.15584,-0.1451 -0.31168,-0.2899 -0.46778,-0.4344 0.66833,-0.7018 1.33667,-1.4034 2.00448,-2.1047 1.20253,-0.2452 2.40559,-0.4903 3.60812,-0.735 0.87974,0.4896 1.75975,0.9797 2.63922,1.47 0.25638,0.5787 0.51276,1.1579 0.76862,1.7372 -0.65696,0.2671 -1.31392,0.5343 -1.97115,0.8018 -1.16972,-0.023 -2.33839,-0.045 -3.50811,-0.067 -0.86836,-0.067 -1.73699,-0.1339 -2.60588,-0.2004 -0.15558,-0.1563 -0.31142,-0.3121 -0.46752,-0.4677 z"
           inkscape:path-effect="#path-effect4581"
           inkscape:connector-curvature="0"
           id="path4579"
           d="m -578.51944,1293.6939 c -0.078,-0.072 -0.2339,-0.2173 0.0223,-0.6405 0.25625,-0.4233 0.92451,-1.1249 1.85973,-1.5981 0.93522,-0.4731 2.13828,-0.7181 3.17931,-0.5957 1.04102,0.1225 1.92101,0.6126 2.48889,1.147 0.56788,0.5344 0.82416,1.1137 0.62382,1.5368 -0.20033,0.4232 -0.85728,0.6904 -1.77079,0.8129 -0.91351,0.1226 -2.08218,0.1002 -3.10122,0.056 -1.01905,-0.045 -1.88768,-0.1114 -2.40007,-0.2228 -0.51239,-0.1114 -0.66818,-0.2672 -0.74609,-0.3452 -0.0779,-0.078 -0.0779,-0.078 -0.15592,-0.1501 z"
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <path
           inkscape:original-d="m -580.71341,1298.7441 c 0.47916,0.3005 0.95806,0.6011 1.43669,0.9021 0.70168,-0.1116 1.40335,-0.223 2.10476,-0.3341 0.11166,-0.2563 0.22305,-0.5125 0.33417,-0.7684 -0.27781,-0.523 -0.55668,-1.0471 -0.83529,-1.5702 -0.69003,-0.3677 -1.3806,-0.7353 -2.07142,-1.1025 -0.13335,0.089 -0.26697,0.1779 -0.40085,0.2673 -0.27887,0.3122 -0.55668,0.6233 -0.83529,0.9354 0.0894,0.5571 0.1786,1.1134 0.26723,1.6704 z"
           inkscape:path-effect="#path-effect4585"
           inkscape:connector-curvature="0"
           id="path4583"
           d="m -580.51846,1298.616 c 0.28405,0.4289 0.7629,0.7295 1.35318,0.8242 0.59027,0.095 1.29195,-0.017 1.69838,-0.2006 0.40643,-0.1839 0.51785,-0.4401 0.43442,-0.8294 -0.0834,-0.3893 -0.36225,-0.9135 -0.84653,-1.3588 -0.48428,-0.4453 -1.17487,-0.8128 -1.58687,-0.9521 -0.41201,-0.1394 -0.54553,-0.05 -0.75191,0.1505 -0.20638,0.2007 -0.48419,0.5118 -0.57895,0.9464 -0.0948,0.4346 -0.006,0.991 0.27828,1.4198 z"
           style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1.67350304;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      </g>
    </g>`)
    
    icon_inkscape.attr({id: 'icon_inkscape'})
    icon_inkscape_gr.attr({
        fill: '#de5211ff',
        id:     'icon_inkscape_gr',
        width:  icon_inkscape.bbox().width,
        height: icon_inkscape.bbox().height,
        x:      (screen_width_in_px/2)/5.5,
        y:      -5
    })    
    icon_inkscape_gr.scale(1.6)
    icon_inkscape.addTo(icon_inkscape_gr)
    //-----------------------------------------------------------------//
    var inkscape_title = inkscape_gr.text(function(text_element){
        text_element.tspan('Inkscape')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    inkscape_title.attr({
        x: screen_width_in_px/2-inkscape_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_inkscape = inkscape_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_inkscape.attr({
        x: (screen_width_in_px/2)+paragraph_inkscape.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
    /////////////////////////////////////////////////////////////////////////////////////////
    var linux_gr   = technologies_gr.nested()
    var rect_linux = linux_gr.rect(screen_width_in_px, rect_height)
        .attr({
            fill: "#ff6f3c",
            y:    0
        })
    linux_gr.attr({
        id: "linux_gr",
        height: rect_height,
        y:  rect_height*11+240
    })

    var icon_linux_gr = linux_gr.nested()
    var icon_linux = SVG(`<g
            inkscape:label="Layer 1"
            inkscape:groupmode="layer"
            id="layer1"
            transform="translate(56.548351,149.12683)">
        <g
            id="g3572"
            transform="matrix(1.2777341,0,0,1.2777341,-1870.8058,-1302.468)"
            style="stroke-width:0.02853691;stroke-miterlimit:4;stroke-dasharray:none">
            <path
                transform="translate(77.416001,89.028401)"
                sodipodi:nodetypes="ccccccccccccccccccccccccccccccc"
                inkscape:original-d="m 1359.2671,893.56089 c 1.1628,0.18118 2.3254,0.36263 3.4877,0.54434 1.3172,-0.24887 2.6346,-0.49756 3.9515,-0.74594 0.5713,-1.10211 1.1427,-2.20447 1.7136,-3.30631 -0.033,-0.32274 -0.067,-0.6454 -0.1008,-0.9677 -0.134,-1.03441 -0.2685,-2.07007 -0.4032,-3.1047 -0.6313,-0.96104 -1.2631,-1.92223 -1.8951,-2.88294 -0.4768,-0.48409 -0.954,-0.96797 -1.4314,-1.45155 -0.6314,-0.90748 -1.2631,-1.8147 -1.895,-2.72166 -0.9338,-1.51892 -1.868,-3.03777 -2.8023,-4.55625 -0.4567,-0.87384 -0.9137,-1.7475 -1.371,-2.62086 -0.4297,-0.71252 -0.8599,-1.42493 -1.2902,-2.137 -1.142,-0.34967 -2.2846,-0.69916 -3.4273,-1.04834 -0.6987,0.47693 -1.3975,0.95399 -2.0967,1.43139 -0.5779,0.87373 -1.1556,1.74697 -1.7338,2.62085 -0.4031,0.42998 -0.8061,0.85991 -1.2096,1.29027 -1.3312,0.30233 -2.6609,0.60455 -3.9917,0.90722 -0.3762,0.69879 -0.7524,1.39752 -1.1291,2.09668 -0.067,0.18798 -0.1341,0.37606 -0.2015,0.56449 0.027,1.13063 0.054,2.2577 0.081,3.38695 0.1122,0.60093 0.2241,1.20168 0.3358,1.80322 -0.3268,0.89083 -0.6537,1.78134 -0.9809,2.6724 0.088,0.77286 0.1749,1.54536 0.262,2.31844 0.202,0.47029 0.4035,0.94056 0.6049,1.41123 0.4909,0.2955 0.9814,0.59111 1.4717,0.88706 0.4034,0.0804 0.8067,0.16102 1.2096,0.24193 1.0615,0.0266 2.1238,0.0535 3.1853,0.0806 1.4918,0.37597 2.984,0.75239 4.4757,1.12898 1.1895,0.49696 2.3791,0.99431 3.5684,1.49187 0.5378,0.22148 1.0754,0.44327 1.6128,0.66529 z"
                inkscape:path-effect="#path-effect3506"
                inkscape:connector-curvature="0"
                id="path3504"
                d="m 1359.8485,893.65163 c 0.5814,0.0907 1.744,0.27219 2.9837,0.23856 1.2398,-0.0336 2.5572,-0.28231 3.5013,-0.95768 0.944,-0.67537 1.5154,-1.77776 1.7841,-2.48998 0.2687,-0.71223 0.2351,-1.03493 0.1511,-1.71327 -0.084,-0.67835 -0.2184,-1.71401 -0.6014,-2.71176 -0.383,-0.99776 -1.0148,-1.95893 -1.5692,-2.6813 -0.5544,-0.72237 -1.0316,-1.20626 -1.586,-1.90182 -0.5544,-0.69556 -1.1861,-1.6028 -1.9689,-2.81574 -0.7829,-1.21295 -1.7171,-2.73182 -2.4126,-3.92797 -0.6955,-1.19616 -1.1525,-2.06981 -1.596,-2.86273 -0.4436,-0.79293 -0.8737,-1.50538 -1.6597,-2.03617 -0.7861,-0.53079 -1.9287,-0.88029 -2.8493,-0.81655 -0.9207,0.0637 -1.6195,0.54079 -2.2581,1.21631 -0.6386,0.67552 -1.2163,1.54877 -1.7069,2.20072 -0.4906,0.65195 -0.8936,1.08186 -1.7609,1.44832 -0.8674,0.36646 -2.1971,0.66867 -3.0506,1.16928 -0.8536,0.5006 -1.2298,1.1993 -1.4517,1.64289 -0.2218,0.4436 -0.2889,0.63167 -0.309,1.29122 -0.02,0.65955 0.01,1.78662 0.076,2.65174 0.069,0.86511 0.1813,1.46587 0.074,2.212 -0.1075,0.74612 -0.4343,1.63665 -0.5542,2.46866 -0.1199,0.83202 -0.033,1.60448 0.1119,2.22623 0.1445,0.62174 0.3461,1.09198 0.6923,1.47515 0.3462,0.38316 0.8367,0.6788 1.2836,0.86696 0.4469,0.18815 0.8502,0.26881 1.5825,0.32254 0.7322,0.0537 1.7945,0.0806 3.0711,0.28218 1.2766,0.20157 2.7688,0.57798 4.1094,1.01475 1.3406,0.43677 2.5302,0.93412 3.3937,1.29365 0.8636,0.35953 1.4012,0.5813 1.6699,0.69216 0.2688,0.11087 0.2684,0.11091 0.8498,0.20165 z"
                style="fill:none;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.008241)"
                inkscape:original-d="m 1391.2415,869.93289 c 0.01,0.61127 0.014,1.2228 0.02,1.83459 0.7264,0.69893 1.4518,1.39753 2.1773,2.09669 0.4707,0.13413 0.9411,0.26854 1.4113,0.4032 0.9407,-0.26225 1.8819,-0.52443 2.8224,-0.78625 0.84,-0.59816 1.6803,-1.19645 2.5201,-1.79428 0.1682,-0.67875 0.3363,-1.35773 0.504,-2.0362 -0.067,-0.32268 -0.1342,-0.6454 -0.2016,-0.9677 -0.6781,-0.63156 -1.3572,-1.26365 -2.0362,-1.89508 -1.1624,-0.43036 -2.3249,-0.86044 -3.4878,-1.29027 -0.8197,0.0468 -1.6394,0.0938 -2.4595,0.14113 -0.2956,0.18796 -0.5912,0.37606 -0.8871,0.56449 -0.1343,0.47736 -0.2685,0.95399 -0.4032,1.43139 0.014,0.55115 0.027,1.10184 0.04,1.65315 -0.01,0.21488 -0.013,0.42983 -0.02,0.64514 z"
                inkscape:path-effect="#path-effect3528"
                inkscape:connector-curvature="0"
                id="path3526"
                d="m 1391.2448,870.23854 c 0,0.30566 0.01,0.91716 0.3764,1.57266 0.3664,0.65551 1.0918,1.35408 1.69,1.77075 0.5982,0.41667 1.0686,0.55106 1.7741,0.48721 0.7056,-0.0639 1.6467,-0.32605 2.537,-0.7561 0.8902,-0.43004 1.7305,-1.02833 2.2344,-1.66667 0.5039,-0.63835 0.672,-1.31733 0.7223,-1.81786 0.05,-0.50053 -0.017,-0.82324 -0.3896,-1.30007 -0.3727,-0.47684 -1.0519,-1.1089 -1.9725,-1.63978 -0.9206,-0.53088 -2.0831,-0.96093 -3.0744,-1.15249 -0.9912,-0.19157 -1.8109,-0.14453 -2.3687,-0.027 -0.5578,0.11756 -0.8534,0.30566 -1.0686,0.63848 -0.2153,0.33283 -0.3495,0.80944 -0.4101,1.32375 -0.061,0.51432 -0.047,1.065 -0.044,1.44814 0,0.38314 -0,0.59798 -0.01,0.70564 -0,0.10766 -0,0.10766 3e-4,0.41331 z"
                style="fill:#000000;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccc"
                inkscape:original-d="m 1386.6852,892.87544 c 0.3498,0.40294 0.6992,0.80615 1.0484,1.20963 0.8202,0.32232 1.64,0.64486 2.4596,0.9677 0.8939,-0.0876 1.7878,-0.17499 2.6813,-0.26209 0.84,-0.30257 1.6803,-0.60508 2.5201,-0.90722 0.8802,-0.59141 1.7609,-1.18301 2.6409,-1.77412 1.0214,-1.38232 2.0432,-2.76528 3.0644,-4.14755 2.6492,-1.09451 5.2981,-2.18874 7.9467,-3.28269 0.1133,-0.83653 0.2265,-1.67283 0.3393,-2.50884 -0.4633,-0.90049 -0.9271,-1.80126 -1.3911,-2.7015 -0.5306,-0.36311 -1.0615,-0.72604 -1.5927,-1.08866 -0.3156,-1.22346 -0.6314,-2.4464 -0.9475,-3.66919 -0.1543,-0.87376 -0.3089,-1.74751 -0.4637,-2.62086 -0.8664,-0.40337 -1.7335,-0.80668 -2.6007,-1.20963 -0.6763,0.0196 -1.3528,0.0395 -2.0295,0.0596 -0.035,0.0104 -0.071,0.0211 -0.107,0.0321 -0.249,0.424 -0.4939,0.84081 -0.7412,1.26162 -0.832,0.47289 -1.6629,0.94535 -2.4948,1.41843 -0.5036,0.13283 -1.0071,0.26583 -1.5111,0.39915 -0.2802,0.008 -0.5604,0.0164 -0.841,0.0249 -0.2174,-0.0324 -0.4346,-0.0644 -0.6522,-0.0962 -0.2221,-0.0906 -0.4441,-0.18084 -0.6665,-0.27086 -0.3314,-0.27842 -0.6626,-0.55623 -0.9943,-0.83395 -0.1887,-0.25451 -0.3775,-0.50871 -0.5667,-0.76267 -0.147,-0.2592 -0.2943,-0.51822 -0.4419,-0.77693 -0.046,-0.1974 -0.092,-0.39467 -0.139,-0.59161 0,-0.22694 0,-0.45407 -0.01,-0.6807 0,-0.4028 0.01,-0.80625 0.013,-1.20898 -0.043,-0.004 -0.087,-0.007 -0.131,-0.0101 -0.1957,0.0132 -0.3895,0.0266 -0.5847,0.0403 -0.4372,0.29248 -0.8733,0.58438 -1.3104,0.87698 -0.3898,0.73274 -0.7793,1.46472 -1.1693,2.19748 -0.1981,1.79143 -0.3962,3.58157 -0.5948,5.37275 -0.02,1.20956 -0.04,2.41899 -0.06,3.62888 -0.4064,1.10208 -0.8129,2.20394 -1.2197,3.3063 -0.2553,1.18753 -0.5107,2.37464 -0.7665,3.56235 0.029,0.82677 0.057,1.65338 0.086,2.48047 0.1332,0.53926 0.266,1.07851 0.3986,1.61814 0.2766,0.31558 0.553,0.63145 0.829,0.94757 z"
                inkscape:path-effect="#path-effect3532"
                inkscape:connector-curvature="0"
                id="path3530"
                d="m 1386.7218,892.91913 c 0.3129,0.35953 0.6623,0.76271 1.2471,1.12565 0.5848,0.36294 1.4046,0.68548 2.2614,0.80304 0.8568,0.11757 1.7507,0.0302 2.6175,-0.16468 0.8668,-0.19487 1.7071,-0.49738 2.5671,-0.9442 0.8599,-0.44682 1.7406,-1.03845 2.6913,-2.0252 0.9506,-0.98676 1.9724,-2.36972 3.8077,-3.60802 1.8353,-1.23831 4.4842,-2.33254 5.865,-3.29785 1.3808,-0.96532 1.4939,-1.80163 1.3187,-2.66979 -0.1753,-0.86815 -0.6391,-1.7689 -1.1364,-2.40052 -0.4972,-0.63162 -1.0281,-0.99452 -1.4516,-1.78768 -0.4234,-0.79316 -0.7392,-2.0161 -0.9744,-3.06439 -0.2352,-1.04829 -0.3898,-1.92204 -0.9003,-2.56026 -0.5106,-0.63823 -1.3777,-1.04153 -2.1493,-1.23324 -0.7717,-0.19171 -1.4482,-0.17184 -1.804,-0.15666 -0.3559,0.0152 -0.3918,0.026 -0.5344,0.24336 -0.1426,0.21739 -0.3875,0.63421 -0.927,1.08113 -0.5396,0.44692 -1.3706,0.91935 -2.0383,1.22235 -0.6678,0.30301 -1.1713,0.43601 -1.5634,0.50673 -0.3921,0.0707 -0.6723,0.079 -0.9213,0.0671 -0.249,-0.0119 -0.4662,-0.0439 -0.6861,-0.10512 -0.2199,-0.0612 -0.4419,-0.15142 -0.7189,-0.33566 -0.2769,-0.18424 -0.6081,-0.46203 -0.8684,-0.72819 -0.2602,-0.26616 -0.449,-0.52032 -0.6171,-0.77693 -0.1681,-0.25661 -0.3154,-0.51562 -0.4123,-0.74373 -0.097,-0.22811 -0.1431,-0.4253 -0.1679,-0.63729 -0.025,-0.212 -0.028,-0.43908 -0.028,-0.75382 5e-4,-0.31474 0,-0.71825 -0.014,-0.92127 -0.019,-0.20302 -0.063,-0.20641 -0.1832,-0.20136 -0.1198,0.005 -0.3136,0.0184 -0.6298,0.17141 -0.3161,0.15301 -0.7523,0.44488 -1.1658,0.9575 -0.4135,0.51263 -0.803,1.24461 -1.0971,2.50671 -0.2941,1.26211 -0.4923,3.05224 -0.6014,4.55262 -0.1092,1.50039 -0.1292,2.70982 -0.3425,3.86578 -0.2132,1.15596 -0.6197,2.25783 -0.9508,3.40277 -0.3311,1.14495 -0.5865,2.33205 -0.7,3.33932 -0.1134,1.00727 -0.085,1.83386 -0,2.51708 0.081,0.68322 0.2136,1.22247 0.4182,1.65016 0.2046,0.42769 0.481,0.74359 0.7939,1.10312 z"
                style="fill:none;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.001856,89.438342)"
                inkscape:original-d="m 1367.9159,891.10132 c 2.191,-0.44373 4.3818,-0.88732 6.5723,-1.33058 0.7662,-0.16153 1.5325,-0.32284 2.2983,-0.48385 1.384,0.28186 2.7689,0.56422 4.153,0.84673 0.9007,0.14756 1.8013,0.29542 2.7015,0.44353 0.5378,-0.054 1.0754,-0.10773 1.6128,-0.16128 0.1164,0.0108 0.2325,0.0218 0.3485,0.0329 -0.096,-1.22039 -0.1915,-2.44035 -0.2876,-3.66055 0.4534,-1.32498 0.9052,-2.6455 1.3596,-3.97432 -0.01,-0.0525 -0.017,-0.10481 -0.026,-0.15688 -0.9585,0.79291 -1.9175,1.58627 -2.8762,2.37936 -0.8277,0.47915 -1.6558,0.95857 -2.4839,1.43807 -2.0654,0.5053 -4.1312,1.01086 -6.1968,1.51652 -1.5163,-0.40984 -3.0329,-0.81948 -4.5496,-1.2289 -1.3158,-1.15067 -2.6315,-2.30082 -3.9481,-3.45138 -0.087,-0.11351 -0.1741,-0.22682 -0.2615,-0.33991 0.8195,1.72548 1.639,3.45178 2.4578,5.17707 -0.1654,0.68833 -0.3311,1.37744 -0.4968,2.0656 -0.1255,0.29573 -0.2512,0.59164 -0.3772,0.88782 z"
                inkscape:path-effect="#path-effect3536"
                inkscape:connector-curvature="0"
                id="path3534"
                d="m 1369.0114,890.87953 c 1.0955,-0.22179 3.2863,-0.66533 4.7647,-0.96771 1.4783,-0.30239 2.2446,-0.46372 3.3195,-0.40324 1.0748,0.0605 2.4597,0.34283 3.6021,0.55787 1.1424,0.21504 2.043,0.3629 2.7621,0.40991 0.719,0.047 1.2566,-0.007 1.5835,-0.0281 0.3269,-0.0214 0.443,-0.0104 0.4531,-0.61514 0.01,-0.60472 -0.086,-1.82465 0.093,-3.09727 0.1787,-1.27262 0.6304,-2.59316 0.8533,-3.28389 0.223,-0.69074 0.2143,-0.74278 -0.2692,-0.37239 -0.4836,0.3704 -1.4426,1.16375 -2.3358,1.79989 -0.8932,0.63614 -1.7213,1.11557 -3.168,1.60802 -1.4468,0.49245 -3.5126,0.998 -5.3036,1.04597 -1.791,0.048 -3.3076,-0.36169 -4.7239,-1.14174 -1.4163,-0.78005 -2.732,-1.93021 -3.4338,-2.56227 -0.7018,-0.63207 -0.7889,-0.74535 -0.4229,0.0608 0.366,0.80616 1.1856,2.53244 1.5123,3.73918 0.3268,1.20674 0.161,1.89584 0.015,2.38778 -0.1455,0.49194 -0.2712,0.78784 -0.3342,0.93596 -0.063,0.14812 -0.063,0.14817 1.0325,-0.0736 z"
                style="fill:#000000;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                inkscape:original-d="m 1364.9322,881.48481 c 0.9209,0.0199 1.8415,0.04 2.7619,0.0605 0.222,-0.8602 0.4438,-1.72062 0.6653,-2.58054 -0.3826,-0.86013 -0.7658,-1.72062 -1.1491,-2.58053 -1.0412,-1.03502 -2.083,-2.07007 -3.1249,-3.1047 -1.0749,-0.74621 -2.1502,-1.49214 -3.2256,-2.23781 -0.571,-0.26236 -1.1422,-0.52444 -1.7137,-0.78626 -0.7189,-1.0421 -1.4378,-2.0835 -2.1571,-3.12486 -0.2215,-0.75288 -0.4433,-1.50558 -0.6653,-2.25797 0.034,-0.94759 0.067,-1.89534 0.1007,-2.84262 0.3094,-1.09533 0.6186,-2.19103 0.9274,-3.28615 0.6318,-1.48498 1.2637,-2.97056 1.8951,-4.45545 0.6587,-1.00135 1.3174,-2.00286 1.9757,-3.0039 0.014,0.0535 0.027,0.10726 0.04,0.16128 -0.8764,1.82722 -1.747,3.64205 -2.6209,5.46348 -0.3022,1.11547 -0.6045,2.23082 -0.9072,3.34663 -0.04,0.93409 -0.08,1.86793 -0.121,2.8023 0.1011,0.6585 0.2019,1.31688 0.3024,1.97572 0.3633,0.75263 0.7261,1.50504 1.0887,2.25796 0.1212,0.16776 0.2422,0.33574 0.3629,0.50401 0.01,-0.0608 0.014,-0.12123 0.02,-0.18144 -0.01,-1.13721 -0.013,-2.28511 -0.02,-3.42727 0.4168,-1.45148 0.8336,-2.90337 1.2499,-4.35465 0.6722,-1.47166 1.3443,-2.94369 2.0161,-4.41513 0.7124,-1.55228 1.4249,-3.10497 2.137,-4.65706 0.4369,-1.13574 0.8739,-2.27167 1.3104,-3.40711 0.3496,-1.0819 0.6992,-2.16415 1.0484,-3.24583 0.094,-0.57131 0.1884,-1.14269 0.2822,-1.71363 0.094,-0.71895 0.1884,-1.43838 0.2822,-2.15717 0.047,-0.0809 0.094,-0.16155 0.1412,-0.24192 0.087,-0.0538 0.1749,-0.10779 0.262,-0.16129 0.3284,0.22741 0.6589,0.45671 0.9879,0.68546 0.5445,0.47678 1.0889,0.95399 1.633,1.43139 0.5714,0.38949 1.1427,0.77927 1.7136,1.1693 0.3161,0.0333 0.632,0.0669 0.9476,0.1008 0.6516,-0.007 1.3039,-0.0137 1.9555,-0.0202 0.4033,-0.1279 0.8067,-0.25563 1.2097,-0.38305 1.0477,-0.66503 2.0969,-1.33085 3.145,-1.99588 0.2287,-0.0675 0.4572,-0.13467 0.6854,-0.2016 0.4902,-0.18817 0.9814,-0.37659 1.4718,-0.56449 0.5711,-0.64498 1.1426,-1.29054 1.7136,-1.9354 0.073,0.28009 0.1452,0.5607 0.2175,0.84145 0.3426,1.24554 0.6845,2.48971 1.0264,3.73496 0.6466,1.53005 1.2927,3.05993 1.9387,4.59029 0.7321,1.58699 1.4639,3.17398 2.1954,4.76136 1.0267,2.00517 2.053,4.0103 3.0792,6.01585 0.3519,1.35884 0.7035,2.7178 1.0549,4.07709 0.096,0.54082 0.1908,1.08177 0.2859,1.62304 0.296,0.10731 0.5916,0.21479 0.887,0.32257 0.3495,-2.6e-4 0.6992,-2.6e-4 1.0484,0 0.027,-0.24201 0.054,-0.48411 0.081,-0.72577 0.054,-1.47692 0.1078,-2.95713 0.1613,-4.43529 -0.3492,-1.31717 -0.6987,-2.63456 -1.0484,-3.95145 -0.8598,-1.2366 -1.7201,-2.47327 -2.5805,-3.70951 -0.4567,-0.4841 -0.9137,-0.96797 -1.3709,-1.45155 0.1347,-0.0272 0.2691,-0.054 0.4032,-0.0806 1.2339,1.20661 2.527,2.47274 3.7902,3.70951 0.8873,2.1233 1.7743,4.30063 2.6611,6.45134 -0.232,1.64719 -0.4644,3.29444 -0.697,4.94205 0.095,0.0425 0.1903,0.0853 0.2851,0.1283 1.0966,0.47432 2.1956,0.95011 3.2931,1.42556 0.5466,0.89773 1.0931,1.79594 1.6394,2.6943 -0.1851,0.5605 -0.3704,1.12118 -0.556,1.68216 0.1381,-2.6e-4 0.2758,-2.6e-4 0.4134,0 0.3797,0.0756 0.7605,0.15179 1.1404,0.22809 0.019,-0.0525 0.038,-0.10481 0.057,-0.15681 0.279,-0.76537 0.561,-1.53987 0.8411,-2.30941 0.01,-0.94549 0.01,-1.8915 0.014,-2.83685 -0.01,-1.01688 -0.019,-2.03406 -0.029,-3.05069 -0.2657,-1.22593 -0.5319,-2.45223 -0.7983,-3.67794 -1.3966,-2.83191 -2.7938,-5.66448 -4.1911,-8.49632 -1.0356,-1.12641 -2.0716,-2.25264 -3.1078,-3.37857 -1.0071,-1.14545 -2.0145,-2.29066 -3.0221,-3.43559 -0.3752,-0.73204 -0.7506,-1.46384 -1.1262,-2.19536 -0.3941,-0.88398 -0.7886,-1.76795 -1.1832,-2.65153 -0.1898,-0.7367 -0.3799,-1.47334 -0.5702,-2.20962 0,-0.81738 0,-1.6349 0,-2.45195 0,-1.9479 -0.01,-3.89679 -0.014,-5.84479 -0.2382,-1.73935 -0.4766,-3.4789 -0.7153,-5.21795 -0.3223,-1.08879 -0.6449,-2.17759 -0.9677,-3.26599 -0.8195,-1.05516 -1.6395,-2.11039 -2.4596,-3.16519 -0.7591,-0.45722 -1.5185,-0.9142 -2.2781,-1.37091 -0.4568,-0.32958 -0.9137,-0.65883 -1.3709,-0.98786 -1.9622,-0.0943 -3.9243,-0.18843 -5.8869,-0.28224 -1.8278,0.28202 -3.6555,0.56423 -5.4836,0.84673 -1.0751,1.12891 -2.1771,2.25771 -3.266,3.38695 -0.5778,0.94079 -1.1556,1.88138 -1.7338,2.82246 -0.2552,1.68033 -0.5105,3.35981 -0.7661,5.04011 0.175,2.64794 0.3497,5.2952 0.5242,7.9432 0,1.11538 0,2.23082 0,3.34663 -0.2686,1.51885 -0.5374,3.03724 -0.8064,4.55625 -1.1424,1.45158 -2.2846,2.90284 -3.4273,4.35465 -1.586,2.20439 -3.1716,4.40815 -4.7579,6.61262 -0.9272,1.78754 -1.8545,3.57485 -2.7821,5.36267 -0.6046,1.46499 -1.2094,2.92972 -1.8144,4.39497 -0.1073,1.59948 -0.2148,3.19853 -0.3226,4.79818 0.081,0.79285 0.1615,1.58569 0.2419,2.37893 0.081,0.0401 0.1616,0.0804 0.2419,0.12096 0.3761,-0.29556 0.753,-0.59163 1.129,-0.88706 0.6046,-0.0674 1.2099,-0.13466 1.8145,-0.2016 0.7928,0.33558 1.5862,0.67175 2.3789,1.00802 0.3496,0.56414 0.6992,1.12872 1.0483,1.69348 0.9413,1.54557 1.8819,3.091 2.8225,4.63689 0.7529,1.26319 1.5056,2.52651 2.258,3.79016 0.511,0.49034 1.0217,0.98088 1.5322,1.47171 z"
                inkscape:path-effect="#path-effect3544"
                inkscape:connector-curvature="0"
                id="path3542"
                d="m 1365.3926,881.4949 c 0.4605,0.0101 1.3811,0.0303 1.9522,-0.3898 0.5711,-0.42005 0.7929,-1.28046 0.7123,-2.14038 -0.081,-0.85993 -0.4638,-1.72043 -1.176,-2.66782 -0.7123,-0.9474 -1.7541,-1.98246 -2.8124,-2.87285 -1.0584,-0.89039 -2.1337,-1.63638 -2.9569,-2.14037 -0.8231,-0.504 -1.3943,-0.76607 -2.0396,-1.41808 -0.6453,-0.65201 -1.3642,-1.69342 -1.8346,-2.5906 -0.4704,-0.89718 -0.6922,-1.64989 -0.7863,-2.49993 -0.094,-0.85004 -0.061,-1.79776 0.1109,-2.81911 0.1713,-1.02134 0.4806,-2.11704 0.9509,-3.40708 0.4704,-1.29005 1.1022,-2.77564 1.7473,-4.01875 0.6451,-1.24311 1.3038,-2.24461 1.6397,-2.71828 0.3358,-0.47366 0.3491,-0.41998 -0.082,0.52057 -0.4316,0.94055 -1.3022,2.75538 -1.8903,4.22383 -0.5881,1.46845 -0.8904,2.58379 -1.0618,3.60876 -0.1714,1.02498 -0.2118,1.9588 -0.1815,2.75527 0.03,0.79648 0.131,1.45486 0.3629,2.16065 0.2319,0.70579 0.5947,1.45821 0.8366,1.91856 0.2419,0.46035 0.3629,0.62836 0.4268,0.6818 0.064,0.0534 0.071,-0.007 0.071,-0.60537 0,-0.59869 -0.01,-1.74657 0.1982,-3.04341 0.205,-1.29685 0.6218,-2.74876 1.1661,-4.21023 0.5442,-1.46147 1.2164,-2.93347 1.9085,-4.44533 0.6921,-1.51186 1.4046,-3.06455 1.9791,-4.40846 0.5745,-1.34391 1.0114,-2.47988 1.4045,-3.58853 0.3931,-1.10866 0.7426,-2.19092 0.9644,-3.01738 0.2217,-0.82647 0.3158,-1.3979 0.4098,-2.04282 0.094,-0.64492 0.1882,-1.36439 0.2588,-1.76417 0.071,-0.39978 0.1176,-0.4804 0.1847,-0.54746 0.067,-0.0671 0.1549,-0.12114 0.3625,-0.0341 0.2076,0.0871 0.5381,0.31638 0.9748,0.66912 0.4368,0.35275 0.9812,0.82995 1.5389,1.2634 0.5578,0.43345 1.1291,0.82327 1.5727,1.03494 0.4436,0.21166 0.7595,0.24526 1.2431,0.25869 0.4836,0.0134 1.1359,0.007 1.6634,-0.0606 0.5275,-0.0672 0.9309,-0.19496 1.6562,-0.59122 0.7254,-0.39626 1.7746,-1.0621 2.413,-1.4283 0.6384,-0.3662 0.8669,-0.4334 1.2261,-0.56097 0.3592,-0.12757 0.8504,-0.31597 1.3811,-0.7325 0.5307,-0.41653 1.1022,-1.06205 1.4239,-1.24437 0.3217,-0.18232 0.3942,0.0982 0.6017,0.86136 0.2074,0.76315 0.5493,2.00732 1.0435,3.395 0.4943,1.38768 1.1404,2.91754 1.8295,4.47623 0.689,1.55868 1.4208,3.14569 2.2999,4.94196 0.8791,1.79627 1.9054,3.80139 2.5945,5.48355 0.689,1.68217 1.0406,3.04112 1.2641,3.9912 0.2235,0.95009 0.3188,1.49095 0.5144,1.81537 0.1956,0.32442 0.4912,0.43191 0.8137,0.48565 0.3225,0.0537 0.6722,0.0537 0.8603,-0.0673 0.1881,-0.12101 0.2151,-0.36311 0.2555,-1.2224 0.04,-0.8593 0.094,-2.33951 -0.054,-3.73714 -0.1479,-1.39762 -0.4974,-2.71501 -1.1021,-3.99169 -0.6048,-1.27668 -1.4651,-2.51335 -2.1236,-3.3735 -0.6586,-0.86014 -1.1156,-1.34402 -1.2767,-1.5994 -0.161,-0.25538 -0.027,-0.28224 0.6571,0.30793 0.6837,0.59016 1.9771,1.85601 3.0475,3.53794 1.0705,1.68194 1.967,3.85535 2.2944,5.75422 0.3274,1.89887 0.095,3.54613 0.026,4.3913 -0.069,0.84518 0.027,0.88805 0.6223,1.14674 0.5957,0.25868 1.6947,0.73443 2.5167,1.42096 0.8219,0.68652 1.3685,1.58471 1.5491,2.31405 0.1807,0.72933 -0,1.29001 -0.028,1.57052 -0.024,0.28052 0.114,0.28052 0.3726,0.31849 0.2586,0.038 0.6394,0.11412 0.839,0.12589 0.1995,0.0118 0.2185,-0.0406 0.3673,-0.44929 0.1489,-0.40874 0.4309,-1.18321 0.5734,-2.04072 0.1425,-0.8575 0.1471,-1.80348 0.1446,-2.7846 -0,-0.98111 -0.012,-1.99829 -0.15,-3.11953 -0.1379,-1.12124 -0.404,-2.34755 -1.2355,-4.37633 -0.8315,-2.02878 -2.2287,-4.86132 -3.4452,-6.84039 -1.2164,-1.97907 -2.2524,-3.10532 -3.274,-4.24101 -1.0217,-1.1357 -2.0291,-2.28092 -2.7205,-3.21945 -0.6914,-0.93854 -1.0668,-1.67033 -1.4516,-2.47808 -0.3849,-0.80776 -0.7794,-1.69174 -1.0716,-2.5019 -0.2922,-0.81017 -0.4823,-1.54681 -0.5773,-2.32367 -0.095,-0.77687 -0.095,-1.59439 -0.097,-2.97686 -0,-1.38247 -0.01,-3.33137 -0.1286,-5.17503 -0.1215,-1.84366 -0.36,-3.5832 -0.6405,-4.9971 -0.2805,-1.4139 -0.6031,-2.5027 -1.1742,-3.57441 -0.5712,-1.07172 -1.3912,-2.12695 -2.1807,-2.88291 -0.7896,-0.75597 -1.549,-1.21296 -2.1572,-1.60611 -0.6082,-0.39316 -1.0651,-0.7224 -2.2747,-0.93409 -1.2096,-0.2117 -3.1717,-0.30577 -5.0669,-0.2117 -1.8952,0.0941 -3.7229,0.37629 -5.178,1.07851 -1.4551,0.70223 -2.5501,1.83778 -3.3835,2.87276 -0.8334,1.03499 -1.4112,1.97558 -1.8279,3.2863 -0.4168,1.31071 -0.6721,2.99019 -0.7124,5.15433 -0.04,2.16415 0.1344,4.81141 0.2217,6.69309 0.087,1.88168 0.087,2.99712 -0.047,4.31443 -0.1344,1.31731 -0.4031,2.83571 -1.1088,4.32101 -0.7056,1.48529 -1.8478,2.93655 -3.2122,4.76464 -1.3644,1.82809 -2.95,4.03183 -4.2068,6.02784 -1.2567,1.99601 -2.184,3.78334 -2.9501,5.40973 -0.7662,1.62639 -1.3709,3.09116 -1.7271,4.62353 -0.3562,1.53237 -0.4637,3.13142 -0.4772,4.3277 -0.014,1.19628 0.067,1.98911 0.1479,2.40592 0.081,0.41682 0.1613,0.45713 0.3896,0.32948 0.2283,-0.12764 0.6052,-0.42375 1.0955,-0.60506 0.4903,-0.1813 1.0956,-0.24855 1.7942,-0.11419 0.6987,0.13435 1.4921,0.47054 2.0631,0.92067 0.5711,0.45013 0.9206,1.01476 1.5658,2.06993 0.6452,1.05516 1.5859,2.60054 2.4327,4.00507 0.8467,1.40453 1.5994,2.66789 2.2311,3.54491 0.6318,0.87703 1.1425,1.36757 1.3978,1.61286 0.2554,0.24529 0.2559,0.24528 0.7163,0.25537 z"
                style="fill:#000000;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                sodipodi:nodetypes="ccccccccccccccccccccccccc"
                inkscape:original-d="m 1367.4614,839.1374 c 0,0 -0.4505,-0.59291 -0.6762,-0.88898 -0.057,-0.42791 -0.1138,-0.8556 -0.171,-1.283 0.095,-0.29472 0.1903,-0.58949 0.2851,-0.88384 0.2091,-0.19963 0.4184,-0.39942 0.6272,-0.59874 0.4748,-0.33246 0.9506,-0.66552 1.4256,-0.99789 0.6271,-0.69359 1.2547,-1.3878 1.8817,-2.08131 0.7698,-0.32326 1.5399,-0.64652 2.3094,-0.96938 0.6938,-0.01 1.3878,-0.0193 2.0813,-0.0285 0.9408,0.42724 1.882,0.85507 2.8226,1.283 0.4754,0.31332 0.9507,0.62698 1.4256,0.94087 1.1595,0.44635 2.3192,0.89308 3.4783,1.34002 0.2284,0.31332 0.4565,0.62698 0.6843,0.94087 0.095,0.2944 0.1904,0.58896 0.2851,0.88385 -0.1328,0.51321 -0.2658,1.02613 -0.3991,1.5396 -0.6274,0.57981 -1.2543,1.15918 -1.8818,1.73918 -0.6177,0.24694 -1.2352,0.49392 -1.8532,0.74128 -0.6939,0.43714 -1.3873,0.87408 -2.0813,1.31152 -0.6178,0.31349 -1.2352,0.62698 -1.8532,0.94087 -0.6559,0.0663 -1.3113,0.13278 -1.9673,0.19957 -0.5417,-0.0763 -1.0832,-0.15232 -1.6251,-0.22809 -0.5037,-0.37106 -1.0072,-0.74155 -1.5111,-1.11193 -0.6556,-0.55153 -1.3113,-1.1027 -1.9673,-1.65365 -0.1946,-0.1481 -0.5847,-0.44353 -0.5847,-0.44353 z"
                inkscape:path-effect="#path-effect3548"
                inkscape:connector-curvature="0"
                id="path3546"
                d="m 1367.4614,839.1374 c -0.2254,-0.29633 -0.4508,-0.59267 -0.592,-0.95478 -0.1412,-0.36211 -0.1982,-0.78977 -0.1792,-1.15083 0.019,-0.36107 0.1142,-0.6559 0.2662,-0.90287 0.152,-0.24696 0.3613,-0.44676 0.7031,-0.71261 0.3419,-0.26586 0.8177,-0.59891 1.3687,-1.11194 0.551,-0.51302 1.1786,-1.20722 1.877,-1.71555 0.6984,-0.50833 1.4686,-0.83158 2.2002,-0.99782 0.7316,-0.16624 1.4256,-0.17574 2.2427,0.0333 0.8171,0.20904 1.7583,0.63686 2.4662,1.00748 0.708,0.37061 1.1833,0.68429 2.0005,1.0644 0.8173,0.38011 1.977,0.82688 2.6706,1.20697 0.6937,0.38008 0.9218,0.69372 1.0833,0.99776 0.1616,0.30403 0.2566,0.5987 0.2376,1.00266 -0.019,0.40396 -0.1519,0.91689 -0.5321,1.46357 -0.3803,0.54667 -1.0072,1.12605 -1.6298,1.53957 -0.6226,0.41351 -1.24,0.66051 -1.896,1.00273 -0.6559,0.34222 -1.3493,0.77917 -2.0052,1.15465 -0.6559,0.37549 -1.2733,0.68895 -1.9103,0.87911 -0.637,0.19016 -1.2924,0.25665 -1.8913,0.25191 -0.5988,-0.005 -1.1403,-0.0808 -1.6632,-0.30417 -0.5229,-0.22342 -1.0264,-0.59391 -1.6062,-1.05487 -0.5797,-0.46095 -1.2354,-1.01212 -1.6607,-1.36163 -0.4253,-0.3495 -0.6203,-0.4974 -0.8152,-0.64524 0,0 -0.7349,-0.69179 -0.7349,-0.69179 z"
                style="fill:#467f8c;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                inkscape:original-d="m 1367.7143,836.99077 c 0.4236,0.53062 0.847,1.06151 1.2701,1.59267 0.8672,0.5441 1.7341,1.0884 2.6007,1.63299 0.7125,0.10053 1.4249,0.20134 2.137,0.30241 0.6654,-0.13463 1.3308,-0.26907 1.9959,-0.40321 0.7526,-0.28238 1.5056,-0.56476 2.258,-0.84674 0.8332,-0.59138 1.6668,-1.18301 2.4998,-1.77411 0.3496,-0.37646 0.6992,-0.75293 1.0484,-1.12899"
                inkscape:path-effect="#path-effect3552"
                inkscape:connector-curvature="0"
                id="path3550"
                d="m 1367.7143,836.99077 c 0.4233,0.53084 0.8467,1.06174 1.4919,1.59941 0.6452,0.53766 1.5121,1.08198 2.3017,1.40453 0.7897,0.32254 1.5021,0.42335 2.1908,0.40653 0.6888,-0.0168 1.3542,-0.15126 2.0631,-0.35955 0.7089,-0.2083 1.4619,-0.49067 2.2546,-0.92741 0.7928,-0.43673 1.6264,-1.02835 2.2177,-1.51216 0.5913,-0.48381 0.9409,-0.86028 1.2901,-1.23633"
                style="fill:#467f8c;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                inkscape:original-d="m 1368.6385,834.71304 c -0.3467,-0.24261 -0.6936,-0.48495 -1.0407,-0.72703 -0.3182,-0.90326 -0.6365,-1.80597 -0.9551,-2.70856 0.034,-0.76043 0.067,-1.52086 0.1,-2.28089 0.2045,-0.67478 0.4089,-1.34979 0.6129,-2.02429 0.6035,-0.35174 1.2073,-0.70354 1.8105,-1.05491 0.3042,0.0615 0.6085,0.12328 0.9124,0.18532 0.3896,0.17069 0.7795,0.34187 1.1689,0.5132 0.4278,0.65528 0.8556,1.31125 1.283,1.96727 0.072,0.77912 0.1428,1.55834 0.2139,2.33791 -0.047,0.28969 -0.095,0.57946 -0.1426,0.86959 -0.085,0.0188 -0.1708,0.0377 -0.2566,0.057 -0.3479,0.14758 -0.6935,0.29435 -1.0407,0.44193 -0.2185,0.18522 -0.4369,0.37038 -0.6557,0.55596 0.034,-0.17631 0.067,-0.3519 0.1,-0.52745 0.01,-0.65015 0.019,-1.30228 0.029,-1.95302 -0.2278,-0.39925 -0.4559,-0.79857 -0.6843,-1.19746 -0.1993,-0.0525 -0.3989,-0.10481 -0.5987,-0.15681 -0.209,0.0425 -0.4179,0.0853 -0.6273,0.1283 -0.1615,0.32809 -0.3228,0.65549 -0.4847,0.98363 0.015,0.5277 0.029,1.05465 0.043,1.58237 0.067,0.23744 0.1333,0.47492 0.1996,0.71278 0.181,0.25652 0.3614,0.51293 0.5417,0.7698 0.1619,0.17559 0.3234,0.35137 0.4847,0.52745 -0.1328,0.17557 -0.2659,0.35137 -0.3992,0.52746 -0.1663,0.12825 -0.3323,0.25633 -0.4989,0.3849 -0.038,0.0283 -0.076,0.0568 -0.114,0.0855 z"
                inkscape:path-effect="#path-effect3556"
                inkscape:connector-curvature="0"
                id="path3554"
                d="m 1368.4651,834.59187 c -0.1735,-0.12117 -0.5204,-0.36351 -0.8531,-0.93627 -0.3327,-0.57275 -0.651,-1.47546 -0.7935,-2.30703 -0.1425,-0.83158 -0.1091,-1.59199 0.01,-2.30942 0.1188,-0.71742 0.3232,-1.39244 0.7271,-1.90549 0.4038,-0.51305 1.0076,-0.86486 1.4613,-1.00969 0.4536,-0.14483 0.7579,-0.083 1.1047,0.0333 0.3467,0.11636 0.7366,0.28755 1.1451,0.7008 0.4085,0.41325 0.8363,1.06922 1.0858,1.78672 0.2495,0.71751 0.3208,1.49668 0.3327,2.03126 0.012,0.53458 -0.036,0.82443 -0.1019,0.97893 -0.066,0.15451 -0.152,0.17356 -0.3689,0.25695 -0.2168,0.0834 -0.5624,0.23015 -0.8453,0.3965 -0.2829,0.16636 -0.5013,0.35153 -0.594,0.35609 -0.093,0.005 -0.059,-0.17097 -0.038,-0.5838 0.021,-0.41283 0.031,-1.06494 -0.078,-1.58987 -0.1092,-0.52492 -0.3373,-0.9242 -0.5511,-1.14985 -0.2137,-0.22565 -0.4133,-0.27793 -0.6176,-0.28272 -0.2044,-0.005 -0.4133,0.038 -0.5988,0.22337 -0.1855,0.18543 -0.3469,0.51282 -0.4206,0.94079 -0.074,0.42797 -0.059,0.95491 -0.019,1.33755 0.04,0.38264 0.1069,0.62007 0.2305,0.86734 0.1237,0.24726 0.3041,0.50365 0.4752,0.71991 0.1711,0.21626 0.3326,0.39202 0.347,0.5677 0.014,0.17568 -0.1187,0.35151 -0.2685,0.5037 -0.1498,0.15219 -0.3158,0.28026 -0.418,0.35875 -0.1023,0.0785 -0.1403,0.10699 -0.1594,0.12127 -0.019,0.0143 -0.02,0.0143 -0.1935,-0.10683 z"
                style="fill:#467f8c;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
                transform="translate(77.416001,89.028401)"
                inkscape:original-d="m 1375.4811,831.60533 c -0.028,-0.96489 -0.057,-1.92952 -0.085,-2.89388 0.5893,-0.94563 1.1787,-1.89151 1.7677,-2.83686 0.803,-0.31378 1.6064,-0.62751 2.4092,-0.94087 0.5417,0.22299 1.0837,0.44641 1.6251,0.67001 0.8887,0.83111 1.7775,1.66289 2.6658,2.49473 0,1.03088 0,2.06204 0,3.09346 -0.1566,0.58436 -0.3134,1.16869 -0.4704,1.75343 -0.4134,0.59404 -0.8266,1.1877 -1.2403,1.78195 -0.081,-0.005 -0.1613,-0.01 -0.2423,-0.0143 -0.4955,-0.27672 -0.9881,-0.55148 -1.4826,-0.82683 -0.2706,-0.0906 -0.5414,-0.18083 -0.8126,-0.27085 0.2523,-0.0763 0.504,-0.15233 0.7556,-0.22809 0.2565,-0.29926 0.5135,-0.599 0.7698,-0.8981 0.01,-0.77409 0.019,-1.54937 0.029,-2.32366 -0.2467,-0.38978 -0.4939,-0.77957 -0.7413,-1.16895 -0.3228,-0.16181 -0.646,-0.3234 -0.9694,-0.48469 -0.3372,0.14233 -0.6745,0.28484 -1.0121,0.42766 -0.209,0.47537 -0.4179,0.95011 -0.6273,1.42556 -0.043,0.35161 -0.085,0.70301 -0.1283,1.05491 0.029,0.31837 0.057,0.63649 0.086,0.95512 0.034,0.0711 0.067,0.1423 0.1,0.21384 -0.1235,-0.0431 -0.2469,-0.0858 -0.3707,-0.1283 -0.3708,-0.18106 -0.741,-0.36141 -1.1119,-0.54172 -0.2422,-0.0763 -0.4844,-0.15232 -0.727,-0.22808 -0.052,-0.01 -0.1043,-0.0193 -0.1569,-0.0285 -0.01,-0.0193 -0.019,-0.0383 -0.029,-0.057 z"
                inkscape:path-effect="#path-effect3560"
                inkscape:connector-curvature="0"
                id="path3558"
                d="m 1375.4669,831.12289 c -0.014,-0.48244 -0.042,-1.44709 0.238,-2.40209 0.2805,-0.95501 0.8699,-1.90089 1.5659,-2.53036 0.6961,-0.62947 1.4995,-0.94322 2.1716,-0.98833 0.6722,-0.0451 1.2142,0.17835 1.9291,0.70569 0.715,0.52734 1.6038,1.35911 2.0481,2.29033 0.4443,0.93121 0.4443,1.96237 0.3659,2.77024 -0.078,0.80787 -0.2351,1.39221 -0.5203,1.9816 -0.2851,0.58939 -0.6984,1.18304 -0.9457,1.4778 -0.2473,0.29475 -0.3276,0.29001 -0.6159,0.14941 -0.2884,-0.14061 -0.781,-0.41533 -1.1635,-0.59829 -0.3825,-0.18296 -0.6533,-0.27321 -0.6627,-0.35648 -0.01,-0.0833 0.2424,-0.15925 0.4964,-0.34684 0.254,-0.1876 0.511,-0.48738 0.644,-1.02395 0.133,-0.53658 0.1426,-1.31186 0.024,-1.89378 -0.1186,-0.58193 -0.3658,-0.97173 -0.6509,-1.24726 -0.285,-0.27554 -0.6082,-0.43713 -0.9384,-0.44671 -0.3301,-0.01 -0.6674,0.13294 -0.9408,0.44193 -0.2735,0.30899 -0.4824,0.78373 -0.6084,1.19731 -0.126,0.41358 -0.1687,0.76489 -0.1758,1.10007 -0.01,0.33518 0.022,0.65324 0.053,0.84827 0.031,0.19502 0.064,0.2661 0.019,0.2804 -0.045,0.0143 -0.1685,-0.0284 -0.4158,-0.14019 -0.2474,-0.11177 -0.6176,-0.29213 -0.9241,-0.42045 -0.3065,-0.12832 -0.5487,-0.20431 -0.696,-0.24708 -0.1473,-0.0428 -0.1996,-0.0523 -0.2308,-0.0667 -0.031,-0.0145 -0.041,-0.0332 -0.045,-0.0426 -0,-0.009 -0.01,-0.009 -0.02,-0.49188 z"
                style="fill:#467f8c;fill-opacity:1;stroke:#030303;stroke-width:1.08316743;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        </g>
    </g>`)

    icon_linux.attr({id: 'icon_linux'})
    icon_linux_gr.attr({
        fill: '#de5211ff',
        id:     'icon_linux_gr',
        width:  icon_linux.bbox().width,
        height: icon_linux.bbox().height,
        x:      (screen_width_in_px/2)/6.5,
        y:      -15
    })    
    icon_linux_gr.scale(1.8)
    icon_linux.addTo(icon_linux_gr)
    //-----------------------------------------------------------------//
    var linux_title = linux_gr.text(function(text_element){
        text_element.tspan('Linux')
    })
        .font({
            opacity: 1.0,
            weight:  700,
            fill:    '#000',
            family:  'Quicksand',
            size:    44
        })    
    linux_title.attr({
        x: screen_width_in_px/2-linux_title.bbox().width,
        y: rect_height/2+10
    })
    //-----------------------------------------------------------------//
    var paragraph_linux = linux_gr.text(function(add){
        add.tspan('Measuring programming progress by').newLine()
        add.tspan('lines of code is like measuring').newLine()
        add.tspan('aircraft building progress by weight.').newLine()
    })
        .font({
            opacity: 1.0,
            weight:  400,
            fill:    '#000',
            family:  'Quicksand',
            size:    20
        })    
    paragraph_linux.attr({
        x: (screen_width_in_px/2)+paragraph_linux.bbox().width,
        y: rect_height/2-paragraph.bbox().height/2
    })  
}
