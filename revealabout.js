$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1648) {
        $('.areveal').fadeIn(1000);
    } else {
        $('.areveal').fadeOut(1000);
    }

});
