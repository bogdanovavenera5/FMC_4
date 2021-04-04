$(document).ready(function(){
    $('.main-slider').slick({
        centerMode: true,        
        dots: true,
        speed: 1200,
        infinite: true, 
        variableWidth: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/up_right_small.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="icons/up_left_small.png"></button>',       
        responsive: [
            {
                breakpoint: 767,
                settings: {                             
                arrows: false,
                infinite: true, 
                variableWidth: true,
                }
            },
        ]
    });
    $('.provides-slider').slick({
        centerMode: true,        
        dots: false,
        speed: 1200,
        arrows: true,
        infinite: true, 
        variableWidth: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/up_right.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="icons/up_left.png"></button>',       
        responsive: [
            {
                breakpoint: 767,               
                settings: {                             
                arrows: false,
                infinite: true, 
                variableWidth: true,
                dots: true,
                }
            },
        ]
    });
        
});