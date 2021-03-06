var pointsArray = document.getElementsByClassName('point');

//var animatePoints = function(points) {    
//    function revealPoint(i) {
//     points[i].style.opacity = 1;
//     points[i].style.transform = "scaleX(1) translateY(0)";
//     points[i].style.msTransform = "scaleX(1) translateY(0)";
//     points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
//    };
//    
//    for(var i = 0; i < points.length ; i++ ){
//        revealPoint(i);
//    }
//};

var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
             opacity: 1,
             transform: 'scaleX(1) translateY(0)'
         });
     };
            
    $.each($('.point'), revealPoint);
     
};

$(window).load(function() {
    
    if($(window).height() > 950){
        animatePoints(pointsArray);
    }
    
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    
    $(window).scroll(function(event) {
            if($(window).scrollTop() >= scrollDistance){
                 animatePoints(pointsArray);
            }    
    });     
});