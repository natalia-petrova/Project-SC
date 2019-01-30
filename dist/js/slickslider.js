$(document).ready(function () {
    $('.slider__auto').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: function(slider, i) {
return '<a href="javascript:void(0)"><img src="./img/slider_dot.png"/><img src="./img/cherry_dot.png"></a>';},
    });
});
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: function(slider, i) {
return '<a href="javascript:void(0)"><img src="./img/slider_dot.png"/><img src="./img/cherry_dot.png"></a>';},
    });
});