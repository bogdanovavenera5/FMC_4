$(document).ready(function(){
    $('.main-slider').slick({
        centerMode: true,
        dots: true,
        speed: 1000,
        infinite: true, 
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/up_left_small.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/up_right_small.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    $('.provides-slider').slick({
        centerMode: true,        
        dots: false,
        speed: 1000,          
        arrows: true,       
        infinite: true,
        adaptiveHeight: true, 
        variableWidth: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/up_left.png"></button>',
		nextArrow:'<button type="button" class="slick-next"><img src="icons/up_right.png"></button>',       
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
    $('.provides__tabs').on('click', 'li', function(){
        const lindex = $(this).index();
        $(".provides-slider" ).slick('slickGoTo', parseInt(lindex));
        $('.provides__tabs li').removeClass('active');
        $(this).addClass('active');
    });

    $('.provides-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        const slideIndex = $(this).index();
        $('.provides__tabs  li').removeClass('active');
        $('.provides__tabs  li').eq(currentSlide).addClass('active')
    });
        
});