function operations(){
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    button_hide = "<button class='hide' type=button>"+'Hide This'+ "</button>"
    // ops = 
    

}

function addition() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"+"+b+"="+(a+b))
    old = jQuery("#history").html();
    button_hide = "<button class='hide' type=button>"+'Hide This'+ "</button>"
    jQuery("#history").html(old +"<div class='red'>"+a+"+"+b+"="+(a+b) + button_hide+"</div>");

}

function subtraction() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"-"+b+"="+(a-b))
    old = jQuery("#history").html();
    button_hide = "<button class='hide' type=button>"+'Hide This'+ "</button>" 
    jQuery("#history").html(old + "<div class='blue'>"+a+"-"+b+"="+(a-b)+ button_hide+"</div>");
}

function multiplication() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"*"+b+"="+(a * b))
    old = jQuery("#history").html();
    button_hide ="<button class='hide' type=button>"+'Hide This'+ "</button>" 
    jQuery("#history").html(old +"<div class='green'>"+a+"*"+b+"="+(a * b)+ button_hide+"</div>");
}

function division() {
    a = parseInt(jQuery("#a").val());
    b = parseInt(jQuery("#b").val());
    jQuery('#p1').html(a+"/"+b+"="+(a/b))
    old = jQuery("#history").html();
    button_hide ="<button class='hide' type=button>"+'Hide This'+ "</button>" 
    jQuery("#history").html(old + "<div class='pantone'>"+a+"/"+b+"="+(a/b) + button_hide+"</div>");
}

function increase() {
    S("#history").css("font-size","20px");
}

function hide_(){
    $(this).parent().remove();
}

function setup() {
    jQuery("#addition").click(addition);
    jQuery("#subtraction").click(subtraction);
    jQuery("#multiplication").click(multiplication);
    jQuery("#division").click(division);
    jQuery("#increase").click(increase);
    //jQuery("#decrease").click(decrease);

    // JQuery(".button").click(function(){  calc(this.id)  });  //shortens the code in operations button based on class //works for if/else statement 
    $('body').on("click",'.hide',hide_);
}
jQuery(document).ready(setup); //setup is a callback function

console.log("hi")