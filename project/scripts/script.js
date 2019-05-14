window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if ((document.body.scrollTop > 40 && document.body.scrollTop < 410) || (document.documentElement.scrollTop > 40 && document.documentElement.scrollTop < 410)) {
        document.querySelector("header").classList.add("black");
        document.querySelector("header").classList.remove("white");
        $(".top").addClass("black");
    } else if (document.body.scrollTop > 410 || document.documentElement.scrollTop > 410) {
        document.querySelector("header").classList.add("white");
        $(".top").addClass("black");
    } else {
        document.querySelector("header").classList.remove("black");
        document.querySelector("header").classList.remove("white");
        $(".top").removeClass("black");
    }

}

$('.top').on('click', function () {
    $("header").toggleClass("menu_show");
    $("header .logo").toggleClass("open");
    $(".menu_icon").toggleClass("close");
    if (!(document.body.scrollTop > 410 || document.documentElement.scrollTop > 410)) {
        $(".top").toggleClass("black");
    }
    if (!$('header').hasClass("menu_show")) {
        document.querySelector("header").classList.add("white");
    }
    document.querySelector("header").classList.remove("white");
});

$('section #topic p a').on('click', function (e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        if (!$('header').hasClass("menu_show")) {
            $('.top').addClass("down");
            $('header').addClass("down");
        }
    } else {
        $('header').removeClass("down");
        $('.top').removeClass("down");
    }
    lastScrollTop = st;
});

$("#nobar").on('click', function () {
    $(".search").addClass("open");
    $(".social-media").addClass("open");
});

$("#bar").on('click', function () {
    $(".search").removeClass("open");
    $(".social-media").removeClass("open");
})

function addDashes(f) {
    f_val = f.value.replace(/\D[^\.]/g, "");
    f.value = f_val.slice(0, 3) + "-" + f_val.slice(3, 6) + "-" + f_val.slice(6, 10);
}

function loginFunc() {
    alert("Please register first. Thank You!");
}