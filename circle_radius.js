function calaculare_area(){

    //console.log(parseInt(jQuery)("#x").val() * 22/7 )
    r = parseInt(jQuery("#x").val());
    jQuery('#p1').html(r * r * 22/7)
    
}

function setup() {
    jQuery('#calc').click(calaculare_area);
}
jQuery(document).ready(setup);
