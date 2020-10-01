
$(function(){

    $("#slide").slick({dots:true});
    $(".btn").on("click",()=>{
        $("#slide").slideToggle();
    })
    $(".autoplay").slick({
        slidesToShow: 3,
        slidesToScroll: 1,    
        autoplay: true,
        autoplaySpeed: 2000,
    })
});

