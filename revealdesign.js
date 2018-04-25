$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 801) {
        $('.child').fadeIn(1000);
    } else {
        $('.child').fadeOut(1000);
    }

});
