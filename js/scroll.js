var i = -10;
var scrolldelay = null;
window.setInterval(function () {
    if ($('.scroll').position().top == 125) {
        $('.scroll').css({'top': '600px'});
    }
}, 100);
$(document).scroll(function () {
    if ($(window).scrollTop() < 200) {
        $('.scroll').hide("slow");
    } else {
        $('.scroll').show("slow");
    }
});
function pageScroll() {
    window.scrollBy(0, i);
    i -= 40;
    if ($(window).scrollTop() == 0) {
        clearInterval(scrolldelay);
    }
}
var temp = -147;
$('.scroll').bind({
    click: function () {
        $('.scroll').animate({'top': '-100px'}, 800);
        var timer = setInterval(function () {
            $('.scroll').css({'backgroundPosition': temp + 'px 0px'});
            temp -= 150;
            if (temp < -747) {
                temp = -147;
                clearInterval(timer);
            }
        }, 100);
        scrolldelay = setInterval(pageScroll, 100);
    },
    mouseover: function () {
        $(this).css({'backgroundPosition': '-147px 0px'});
    },
    mouseout: function () {
        $(this).css({'backgroundPosition': '0px 0px'});
    }
});