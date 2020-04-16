$(document).ready(function () {
    $('.slider-head__main').slick({
        arrows: true,
        dots: true,
        adaptiveHeigh: false,
        slidesToShow: 1,
        slidesToScrool: 1,
        speed: 2000,
        easing: '',/*animation*/
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidePerRow: 1,
        vertical: false,
        verticalSwiping: false,
        fade: false,
        /*asNavFor:"nameSlider"подключение еще одного слайдера*/
        responsive: [/*Настройки при адаптиве*/
            {
                breakpoint: 768,
                settings: {
                    autoplaySpeed: 4000,
                }
            }
        ],
        mobileFirst: false,



    });

    $('.slider-medium__wrapper').slick({
        arrows: true,
        /*appendArrows: $('.next', '.prev'),*/
        prevArrow: '<button class=" slider-medium-but prev">prev</button>',
        nextArrow: '<button class=" slider-medium-but next">next</button>',
        dots: false,
        adaptiveHeigh: true,
        slidesToShow: 4,
        slidesToScrool: 4,
        speed: 2000,
        easing: '',/*animation*/
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidePerRow: 1,
        vertical: false,
        verticalSwiping: false,
        fade: false,
        /*asNavFor:"nameSlider"подключение еще одного слайдера*/
        responsive: [/*Настройки при адаптиве*/
            {
                breakpoint: 1119,
                settings: {
                    autoplaySpeed: 4000,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    autoplaySpeed: 4000,
                    slidesToShow: 1,
                }
            }
        ],
        mobileFirst: false,



    });

    $('.foot-slider__body').slick({
        arrows: true,
        /*appendArrows: $('.next', '.prev'),*/
        prevArrow: '<button class=" slider-foot-but prev">prev</button>',
        nextArrow: '<button class=" slider-foot-but next">next</button>',
        dots: false,
        adaptiveHeigh: false,
        slidesToShow: 5,
        slidesToScrool: 4,
        speed: 2000,
        easing: '',/*animation*/
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        touchThreshold: 5,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        slidePerRow: 1,
        vertical: false,
        verticalSwiping: false,
        fade: false,
        /*asNavFor:"nameSlider"подключение еще одного слайдера*/
        responsive: [/*Настройки при адаптиве*/
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 474,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        mobileFirst: false,



    });



    $('.icon-menu').click(function (event) {
        $('.icon-menu, .head__menu').toggleClass('active');
        $('body, .head__menu').toggleClass('lock');
    });

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body, #head').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
})