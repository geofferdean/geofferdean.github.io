$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 2495) {
        $('.artreveal').fadeIn(1000);
    } else {
        $('.artreveal').fadeOut(1000);
    }

});
