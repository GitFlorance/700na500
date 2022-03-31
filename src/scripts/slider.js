$(document).ready(()=>{
    $('.js-slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        variableHeight: true,
        prevArrow: document.querySelector('.js-prev-arrow'),
        nextArrow: document.querySelector('.js-next-arrow'),
    })
})