$('.shop-sidebar__title').on('click', function () {
    var title_parent = $(this).closest('.shop-sidebar__item');
    if (title_parent.hasClass('shop-sidebar__item--active')) {
        title_parent.removeClass('shop-sidebar__item--active');
    } else {
        $('.shop-sidebar__item--active').removeClass('shop-sidebar__item--active');
        title_parent.addClass('shop-sidebar__item--active');
    }
});

$('.checkbox-filter__item').on('click', function () {
    $(this).toggleClass('checkbox-filter__item--active');
});


$(document).ready(function () {

    $('.catalog-sorting__item').on('click', function () {
        $('.catalog-sorting__item--active').removeClass('catalog-sorting__item--active');
        $(this).addClass('catalog-sorting__item--active');
        var sort_text = $(this).text();
        $('.catalog-sorting__button').text(sort_text);
        $('catalog-sorting').toggleClass('.catalog-sorting--active');
    });

    $('.catalog-sorting').on('mouseover', function () {
        $('.catalog-sorting').addClass('catalog-sorting--active');
    });

    $('.catalog-sorting').on('mouseleave', function () {
        $('.catalog-sorting').removeClass('catalog-sorting--active');
    });
});

$('.catalog-sorting__item').on('click', function () {
    $('.catalog-sorting').removeClass('catalog-sorting--active');
});


$('body').mouseup(function (e) {
    var block = $(".shop-sidebar");
    var block2 = $(".shop-sidebar__open-btn");
    if (!block.is(e.target) &&
        block.has(e.target).length === 0) {
        if (!block2.is(e.target) &&
            block2.has(e.target).length === 0) {
            $('body').removeClass('body--filters');
            $('.checkbox-filter__item-btn').removeClass("active");
        }
    }
});

$('.shop-sidebar__open-btn').on('click', function () {
    $('body').toggleClass('body--filters');
});

$('.shop-sidebar__title').click(function () {
    $('.checkbox-filter__item-btn').removeClass("active");
});

$('.body--filterse').click(function () {
    $('.checkbox-filter__item-btn').removeClass("active");
});

$('.catalog-sorting__button').on('click', function () {
    $('body').toggleClass('body--sort');
});

$('body').mouseup(function (e) {
    var block = $(".catalog-sorting__button");
    if (!block.is(e.target) &&
        block.has(e.target).length === 0) {
        $('body').removeClass('body--sort');
    }
});

$('.checkbox-filter__item').on('click', function () {
    var button = $('.checkbox-filter__item-btn');
    var filtr_top = $(this).offset().top;
    button.css('top', filtr_top);
});

$('.checkbox-filter__item').click(function () {
    $(".checkbox-filter__item-btn")
        .addClass("active")
        .siblings()
        .removeClass("active")
});

$('.shop-sidebar__mobile-close').click(function () {
    $('body').removeClass("body--filters");
    $('.checkbox-filter__item-btn').removeClass("active");
});

$('.partners-popup__accept').click(function () {
    $(this).toggleClass('partners-popup__accept--active');
});

$('.tell-popup__accept').click(function () {
    $(this).toggleClass('tell-popup__accept--active');
});

$('.partners-popup__open').click(function () {
    $(".partners-popup").addClass("partners-popup--active");
    $("body").addClass("body-popup");
    document.body.style.overflowY = "hidden";
});

$('.partners-popup__btn-close').click(function () {
    $('.partners-popup').removeClass("partners-popup--active");
    document.body.style.overflowY = "scroll";
});

$('.tell-popup__open').click(function () {
    $(".tell-popup").addClass("tell-popup--active");
    document.body.style.overflowY = "hidden";
});

$('.tell-popup__btn-close').click(function () {
    $('.tell-popup').removeClass("tell-popup--active");
    document.body.style.overflowY = "scroll";
});

$('.product-details__info-mobile-open').click(function () {
    $(".product-details__info-mobile").addClass("product-details__info-mobile--active");
    document.body.style.overflowY = "hidden";
});

$('.product-details__info-mobile--close').click(function () {
    $('.product-details__info-mobile').removeClass("product-details__info-mobile--active");
    document.body.style.overflowY = "scroll";
});

$('.js-open-main-menu').click(function () {
    $(".js-main-menu").addClass("main-menu--active");
    document.body.style.overflowY = "hidden";
});

$('.js-close-main-menu').click(function () {
    $('.js-main-menu').removeClass("main-menu--active");
    document.body.style.overflowY = "scroll";
});

$('.city-search__input').click(function () {
    $(".city-search__wrap").toggleClass("city-search__wrap--active");
    $(".city-search__wrap").toggleClass("city-search__region--active");
    $(".city-search__wrap").removeClass("city-search__city--active");
});

$('.city-search__city-btn').click(function () {
    $(".city-search__wrap").addClass("city-search__city--active");
    $(".city-search__wrap").removeClass("city-search__region--active");
});

$('.city-search__region-btn').click(function () {
    $(".city-search__wrap").addClass("city-search__region--active");
    $(".city-search__wrap").removeClass("city-search__city--active");
});


$(document).ready(function () {
    $('.city-search__input').click(function () {
        $(".city-search__mobile").toggleClass("city-search__mobile--active");
        $(".where-by__bottom").toggleClass("where-by__bottom--active");
    });

    $('.city-search__region-btn').click(function () {
        $(".city-search__region-btn").toggleClass("city-search__region-btn--active");
        $(".city-search__region-list").toggleClass("city-search__region-list--active");
    });

    $('.city-search__city-btn').click(function () {
        $(".city-search__city-btn").toggleClass("city-search__city-btn--active");
        $(".city-search__city-list").toggleClass("city-search__city-list--active");
    });

    $('.city-search__mobile-cancel').click(function () {
        $(".city-search__mobile").removeClass("city-search__mobile--active");
        $(".where-by__bottom").removeClass("where-by__bottom--active");
        $(".city-search__mobile").removeClass("city-search__mobile--active");
        $(".city-search__region-btn").removeClass("city-search__region-btn--active");
        $(".city-search__region-list").removeClass("city-search__region-list--active");
        $(".city-search__city-btn").removeClass("city-search__city-btn--active");
        $(".city-search__city-list").removeClass("city-search__city-list--active");
    });
});

var mySwiper1 = new Swiper('.product-details__slider>.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    autoHeight: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

$(document).ready(function () {
    var mySwiper2 = new Swiper('.swiper-container.about-us__mobile-slider', {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        speed: 500,
        loop: true,
        autoHeight: true,

        autoplay: {
            delay: 5000,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});
