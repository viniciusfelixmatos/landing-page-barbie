$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false, 
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
