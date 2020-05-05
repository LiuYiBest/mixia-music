var a = "<a></a>";
for (var x = 0; x < $('.banner ul li').size(); x++) {
    $('.menu').append(a);
}
$(function () {
    var time = null;
    var i = 0;
    $('.banner li').each(function () {
        $(this).parent().css({'width': $('.banner li').size() * $(window).width() + 'px'});
        $(this).children().css({'width': $(window).width() + 'px'});
        $('.banner ,.banner_wrap').css({'width': $(window).width() + 'px'});
    });
    $('.menu a').mouseover(function () {
        var _this = this;
        $(_this).addClass('active').siblings('a').removeClass('active');
        i = $(_this).index();
        $('.banner ul').animate({'margin-left': -$(window).width() * i + 'px'}, 200);
        clearInterval(time);
        gun();
    });
    function gun() {
        time = setInterval(function () {
            $('.banner ul').animate({'margin-left': -$(window).width() * i + 'px'}, 300);
            $('.menu a').eq(i).addClass('active').siblings().removeClass('active');
            i++;
            if (i >= $('.banner li').size()) {
                i = 0;
            }
        }, 2000);
    }
    gun();
})