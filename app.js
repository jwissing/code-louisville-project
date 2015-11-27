$(".residential-left p").hide();
$(".commercial-left p").hide();


$(".residential-left").hover(function(){

$(".residential-left p").slideDown();

}, function(){

$(".residential-left p").slideUp();

});


$(".commercial-left").hover(function(){

$(".commercial-left p").slideDown();

}, function(){

$(".commercial-left p").slideUp();

});