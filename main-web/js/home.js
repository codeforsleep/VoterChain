$(document).ready(function () {
    var width = $(window).width();
    var height = $(window).height();
    if (width <= 640) {
        //mobile screen
        mobile();
    } else {
        //desktop screen
        desktop();
    }
});
$(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    var position = $.scrollify.currentIndex();
    console.log(position);
    if (width <= 640) {
        //mobile screen
        mobile();
    } else {
        //desktop screen
        desktop();
    }
});

function mobile() {
    $.scrollify({
        section: ".mobile",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        touchScroll: true,
        updateHash: true,
        setHeights: false,
        easing: "easeOutExpo"
    });
}

function desktop() {
    $.scrollify({
        section: ".desktop",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        touchScroll: true,
        updateHash: true,
        setHeights: false,
        easing: 'easeOutExpo'
    });
}