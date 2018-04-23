$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y < 297) {
        $('.logo_2').fadeIn(1000);
    } else {
        $('.logo_2').fadeOut(0000);
    }

});
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.logo_small').fadeIn(1000);
    } else {
        $('.logo_small').fadeOut(0000);
    }

});
