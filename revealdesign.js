$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 816) {
        $('.child').fadeIn(1000);
    } else {
        $('.child').fadeOut(1000);
    }

});
