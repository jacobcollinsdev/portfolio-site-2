$(".fa-chevron-down").click(function(){
    $('html, body').animate({
         scrollTop: $("#about-me").offset().top}, 200);
 })


$(window).scroll(()=>{
    if($(this).scrollTop() > 300){
        $(".topBtn").fadeIn();
    } else{
        $(".topBtn").fadeOut();
    }
});


$(".topBtn").click(()=>{
    $('html, body').animate({scrollTop : 0}, 800);
})

