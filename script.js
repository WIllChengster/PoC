$(document).ready(function(){
    window.addEventListener("load", startAnimation);

    $(window).scroll(function() {
        if(isScrolledIntoView(".drink-display")){
            $("#drink-display-1").removeClass("no-opacity");
            setTimeout(function(){
                $("#drink-display-2").removeClass("no-opacity");
            }, 250)
            setTimeout(function(){
                $("#drink-display-3").removeClass("no-opacity");
            }, 500)
        }
    })
})

function startAnimation() {
    setTimeout(function(){
        $('.carousel-img').css("opacity", "0.6");
    }, 500);
    setTimeout(function(){
        $('#landing-page-text').removeClass('no-opacity');
    }, 1000);
    setTimeout(function(){
        $('#catch-phrase').removeClass('no-opacity');
    }, 1500);
    setTimeout(function(){
        $('#view-drinks-btn').removeClass('no-opacity');
    }, 2500);
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}