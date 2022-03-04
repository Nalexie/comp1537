function addition() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"+"+b+"="+(a+b))
    old = jQuery("#history").html();
    jQuery("#history").html(old +"<br>"+ "<span class='red'>"+a+"+"+b+"="+(a+b)+"<span>");

}

function subtraction() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"-"+b+"="+(a-b))
    old = jQuery("#history").html();
    jQuery("#history").html(old +"<br>"+ "<span class='blue'>"+a+"-"+b+"="+(a-b)+"<span>");
}

function multiplication() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"*"+b+"="+(a * b))
    old = jQuery("#history").html();
    jQuery("#history").html(old +"<br>"+ "<span class='green'>"+a+"*"+b+"="+(a * b)+"<span>");
}

function division() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"/"+b+"="+(a/b))
    old = jQuery("#history").html();
    jQuery("#history").html(old +"<br>"+ "<span class='pantone'>"+a+"/"+b+"="+(a/b)+"<span>");
}

function increase() {
    S("#history").css("font-size","20px");
}

function setup() {
    jQuery("#addition").click(addition);
    jQuery("#subtraction").click(subtraction);
    jQuery("#multiplication").click(multiplication);
    jQuery("#division").click(division);
    jQuery("#increase").click(increase);
    //jQuery("#decrease").click(decrease);
}
jQuery(document).ready(setup);

console.log("hi")