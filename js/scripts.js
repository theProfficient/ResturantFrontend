function  initWanteat() {
    "use strict";
        TweenMax.to(".loader-wrap", 0.7, {
            force3D: true,
            delay: 0.7,
            ease: Power2.easeOut,
            opacity: "0",
            scale: "0",
            onComplete: function () {
                $(".main-loader").fadeOut(1300);
                $("#main").addClass("mainvis");
            }
        });
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    //   lightGallery------------------
    $(".image-popup , .single-popup-image").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });

    $(".lightgallery").lightGallery({
        selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: false,
        counter: false
    });
    $('#html5-videos , .inithtml5video').lightGallery({
        selector: 'this',
        counter: false,
        download: false,
        zoom: false
    });
    var vid_src = $(".popup_video").data("videolink");
    $(".lg-video-object").find("source").attr("src", vid_src);
    //   Isotope------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                singleMode: true,
                transformsEnabled: true,
                transitionDuration: "900ms"
            });
            a.imagesLoaded(function () {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click  ", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = $(this).attr("data-filter"),
                    d = $(this).text();
                    a.isotope({
                        filter: c
                    });
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
            });
        }
    }
    n();
    function postGrid() {
        if ($(".post-items").length) {
            var $grid2 = $(".post-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".post-item",
            });
            $grid2.imagesLoaded(function () {
                $grid2.isotope("layout");
            });
        }
    }
    postGrid();
    function csselem() {
        $(".anim-fw").css({
            height: $(".fw-carousel_hight").outerHeight(true)
        });
        $(".fs-slider-item").css({
            height: $(".hero_fsw").outerHeight(true)
        });
        $(".first-slide_wrap").css({
            height: $(".fw-carousel_hight").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $(".main-footer").outerHeight(true)
        });
        $(".reserv_modal-inner-box").css({
            top: ($(window).height() - $(".reserv_modal-inner-box").outerHeight(true)) / 2
        });
    }
    $(window).on("resize", function () {
        csselem();
    });
    csselem();
    $(".acc-item-header").on("click", function (a) {
        a.preventDefault();
        $(".acc-item-header").removeClass("actdetlink");
        $(this).addClass("actdetlink");
        if ($(this).next('div.acc-item-content').is(':visible')) {
            $(this).next('div.acc-item-content').slideUp(300);

        } else {
            $(".acc-item-header").next('div.acc-item-content').slideUp(300);
            $(this).next('div.acc-item-content').slideToggle(300);
        }
    });
    if ($(".clients-carousel").length > 0) {
        var ms2 = new Swiper(".clients-carousel .swiper-container", {
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 0,
            speed: 1400,
            mousewheel: false,
            navigation: {
                nextEl: '.cc_btn_next',
                prevEl: '.cc_btn_prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }
        });
    }
    if ($(".fs-slider").length > 0) {
        var hcarosel = new Swiper(".fs-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            parallax: true,
            speed: 1400,
            pagination: {
                el: '.hero-slider-pag',
                clickable: true,
            },
            navigation: {
                nextEl: '.hero-slider_btn_next',
                prevEl: '.hero-slider_btn_prev',
            },
        });
    }
    if ($(".single-slider").length > 0) {
        var j2 = new Swiper(".single-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
        });
    }
    if ($(".testimonilas-carousel").length > 0) {
        var ms1 = new Swiper(".testimonilas-carousel .swiper-container", {
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 1400,
            navigation: {
                nextEl: '.ts-next',
                prevEl: '.ts-prev',
            },
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }
        });
        var totalSlides2 = $(".testimonilas-carousel  .swiper-slide:not(.swiper-slide-duplicate)").length;
        $('.ts_total').html('0' + totalSlides2);
        ms1.on('slideChange', function () {
            var csli2 = ms1.realIndex + 1,
                curnum2 = $('.ts_current');
            curnum2.html('0' + csli2);
        });
    }
    if ($(".events-carousel").length > 0) {
        var ec = new Swiper(".events-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            navigation: {
                nextEl: '.ec-button-next',
                prevEl: '.ec-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
        var totalEvent = $(".events-carousel  .swiper-slide:not(.swiper-slide-duplicate)").length;
        $('.ec_total').html('0' + totalEvent);
        ec.on('slideChange', function () {
            var csli2 = ec.realIndex + 1,
                curnum2 = $('.ec_current');
            curnum2.html('0' + csli2);
        });


    }
    if ($(".singlefw-carousel").length > 0) {
        var j2 = new Swiper(".singlefw-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: true,
            autoHeight: false,
            grabCursor: true,
            centeredSlides: true,
            pagination: {
                el: '.hero-slider-pag',
                clickable: true,
            },
            navigation: {
                nextEl: '.ts-next',
                prevEl: '.ts-prev',
            },
        });
    }
    if ($(".slideshow-container_wrap").length > 0) {
        const ms1 = new Swiper(".slideshow-container_wrap .swiper-container", {
            preloadImages: false,
            loop: true,
            speed: 1400,
            spaceBetween: 0,
            effect: "fade",
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.ssh_pagination',
                clickable: true,
            },
        });

    }
    //   scrollToFixed ------------------	
    $(".scroll-fixed-column-content").scrollToFixed({
        zIndex: 112,
        bottom: 0,
        removeOffsets: true,
        limit: function () {
            const a = $(".limit-box").offset().top - $(".scroll-fixed-column-content").outerHeight(true);
            return a;
        }
    });
    $(".init-fix-column").scrollToFixed({
        minWidth: 768,
        marginTop: 150,
        removeOffsets: true,
        limit: function () {
            var a = $(".limit-box").offset().top - $(".init-fix-column").outerHeight(true);
            return a;
        }
    });
    $('.quantity-item').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus'),
            btnDown = spinner.find('.minus'),
            min = input.attr('data-min'),
            max = input.attr('data-max');
        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input.qty").val(newVal);
            spinner.find("input.qty").trigger("change");
        });
        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input.qty").val(newVal);
            spinner.find("input.qty").trigger("change");
        });
    });
    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    //   filters------------------	
    $(".blog-btn").on("click", function () {
        $(this).parent(".blog-btn-filter").find(".blog-filter-wrap").fadeToggle(500);
        return false;
    });
    $(".filter-btn").on("click", function () {
        $(".filter-container").toggleClass("vis-filter");
    });
    $(".dishes-nav_title").on("click", function () {
        $(this).toggleClass("dnt_tog");
        $(".dishes-nav").fadeToggle(300);
    });
    var textTitle = $(".hero-title h2").text();
    $(".dec-title span").text(textTitle);
    // Share   ------------------
    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'twitter', 'linkedin']
    });
    function hideShare() {
        $(".show-share").addClass("isShare");
        setTimeout(function () {
            $(".share-wrapper").removeClass("visshare");
        }, 400);
        $(".share-container a").each(function (a) {
            var b = $(this);
            setTimeout(function () {
                b.animate({
                    opacity: 0
                }, 500);
            }, 120 * a);
        });
    }
    function showShare() {
        $(".show-share").removeClass("isShare");
        $(".share-wrapper").addClass("visshare");
        setTimeout(function () {
            $(".share-container a").each(function (a) {
                var b = $(this);
                setTimeout(function () {
                    b.animate({
                        opacity: 1
                    }, 500);
                }, 120 * a);
            });
        }, 400);
        hideCart();
        hideHiddenmenu();
    }
    $(".show-share").on("click", function (a) {
        a.preventDefault();
        if ($(".show-share").hasClass("isShare")) showShare();
        else hideShare();
    });
    var wlwrp = $(".header-cart_wrap"),
        wllink = $(".sc_btn");
    function showCart() {
        wlwrp.fadeIn(1).addClass("vis-cart").removeClass("novis_cart")
        wllink.addClass("scwllink");
        hideShare();
        hideHiddenmenu();
    }
    function hideCart() {
        wlwrp.fadeOut(1).removeClass("vis-cart").addClass("novis_cart");
        wllink.removeClass("scwllink");
    }
    wllink.on("click", function () {
        if (wlwrp.hasClass("novis_cart")) showCart();
        else hideCart();
    });
    $(".close_cart-init").on("click", function () {
        hideCart();
    });
    //   Video------------------	
    if ($(".video-holder-wrap").length > 0) {
        function videoint() {
            var w = $(".background-vimeo").data("vim"),
                bvc = $(".background-vimeo"),
                bvmc = $(".media-container"),
                bvfc = $(".background-vimeo iframe "),
                vch = $(".video-container");
            bvc.append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
            $(".video-holder").height(bvmc.height());
            if ($(window).width() > 1024) {
                if ($(".video-holder").length > 0)
                    if (bvmc.height() / 9 * 16 > bvmc.width()) {
                        bvfc.height(bvmc.height()).width(bvmc.height() / 9 * 16);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            top: "-75px",
                            "margin-top": "0px"
                        });
                    } else {
                        bvfc.width($(window).width()).height($(window).width() / 16 * 9);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            "margin-top": -1 * $("iframe").height() / 2 + "px",
                            top: "50%"
                        });
                    }
            } else if ($(window).width() < 760) {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            } else {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            }
            vch.css("width", $(window).width() + "px");
            vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
            if (vch.height() < $(window).height()) {
                vch.css("height", $(window).height() + "px");
                vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
            }
        }
        videoint();
    }
    $(".custom-scroll-link").on("click", function () {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".to-top").on("click", function (a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //   Contact form------------------
    $(document).on('submit', '#contactform', function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit_cnt").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name2").val(),
                email: $("#email2").val(),
                phone: $("#phone2").val(),
                subject: $("#subject2").val(),
                comments: $("#comments2").val()

            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit_cnt").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $(document).on('keyup', '#contactform input, #contactform textarea', function () {
        $("#message").slideUp(1500);
    });
    // reservation form------------------
    $(document).on('submit', '#reservationform', function () {
        var a = $(this).attr("action");
        $("#reserv-message").slideUp(750, function () {
            $("#reserv-message").hide();
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                phone: $("#phone").val(),
                numperson: $("#persons").val(),
                resdate: $("#res_date").val(),
                restime: $("#resrv-time").val(),
                comments: $("#comments").val()
            }, function (a) {
                document.getElementById("reserv-message").innerHTML = a;
                $("#reserv-message").slideDown("slow");

                if (null != a.match("success")) {
                    $("#reserv-message").slideDown("slow");
                }
            });
        });
        return false;
    });
    $("#reservationform input, #reservationform textarea ").keyup(function () {
        $("#reserv-message").slideUp(1500);
    });
    function showResForm() {
        $(".reserv_modal-container").fadeIn(1);
        $(".reserv_modal_overlay").fadeIn(300);
        $(".reserv_modal-inner-box").addClass("vis_modiiner");
    }
    function hideResForm() {
        $(".reserv_modal_overlay").fadeOut(300);
        $(".reserv_modal-inner-box").removeClass("vis_modiiner");
        $(".reserv_modal-container").delay(300).fadeOut(1);
    }
    $(".show-rb").on("click", function (e) {
        e.preventDefault();
        showResForm();
    });
    $(".close-rf").on("click", function (e) {
        e.preventDefault();
        hideResForm();
    });
    function cardRaining() {
        $.fn.duplicate = function (a, b) {
            var c = [];
            for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
            return this.pushStack(c);
        };
        var cr = $(".star-rating");
        cr.each(function (cr) {
            var starcount = $(this).attr("data-starrating");
            $("<i class='fa-solid fa-star'></i>").duplicate(starcount).prependTo(this);
        });
    }
    cardRaining();
    //   tabs------------------
    $(".tabs-menu a").on("click", function (a) {
        TweenMax.to($(".hero-menu-item"), 0, {
            force3D: true,
            opacity: "0",
            left: "30px"
        });
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(this).parents(".tabs-act").find(".tab-content").not(b).css("display", "none");
        $(b).fadeIn(1500);
        setTimeout(function () {
            $(b).find(".hero-menu-item").each(function (a) {
                var boi = $(this);
                setTimeout(function () {
                    TweenMax.to(boi, 0.5, {
                        force3D: true,
                        opacity: "1",
                        left: "0"
                    });
                }, 130 * a);
            });
        }, 300);
    });
    //   menu js------------------
    $("#menu_init").menu();
    var hnh = $(".hiddenmenu"),
        nbw = $(".nav-button_wrap"),
        bodover = $(".body-ovelay"),
        hmc = $(".hidden_menu-container"),
        bot = $(".body-overlay-text");
    function showHiddenmenu() {
        hmc.addClass("rhmc");
        nbw.removeClass("isvis_hid_menu");
        hnh.addClass("hiddenmenu_vis");
        bodover.fadeIn(400);
        bot.addClass("body-overlay-text_vis");
        hideShare();
        hideCart();
    }
    function hideHiddenmenu() {
        hnh.removeClass("hiddenmenu_vis");
        nbw.addClass("isvis_hid_menu");
        bot.removeClass("body-overlay-text_vis");
        bodover.fadeOut(400);
        setTimeout(function () {
            hmc.removeClass("rhmc");
        }, 400)
    }
    nbw.on("click", function () {
        if (nbw.hasClass("isvis_hid_menu")) showHiddenmenu();
        else hideHiddenmenu();
    });
    bodover.on("click", function () {
        hideHiddenmenu();
    });
    $('.chosen-select').niceSelect();
    $('#res_date').daterangepicker({
        autoUpdateInput: false,
        parentEl: $(".date-container"),
        singleDatePicker: true,
        timePicker: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('#res_date').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY'));
    });
    $('#res_date').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
    var $window = $(window);
    $window.scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header.header_half , .logo-holder").addClass("scroll-sticky");
        } else {
            $("header.header_half , .logo-holder").removeClass("scroll-sticky");
        }
    });
    //   mailchimp------------------
    $("#subscribe").ajaxChimp({
        language: "eng",
        url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
    });
    //   scrollnav  ------------------
    $(".dishes-nav_init").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 130,
        threshold: 120,
        speed: 1200,
        currentClass: "act-dish"
    });
    $(".scroll-init ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 150,
        threshold: 120,
        speed: 1200,
        currentClass: "actscr-link"
    });
//   Parallax ------------------
         var b = new Scrollax();
        b.reload();
        b.init();	
}
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//   Init All ------------------
$(document).ready(function () {
    initWanteat();
});