//添加登录界面
var denglu ="<div class='denglu'>"+
                "<div class='dl-wrapper'>"+
                    "<div class='dl-nav' id='tuodong'>"+
                        "<p>登录米虾音乐</p>"+
                        "<a class='close'></a>"+
                    "</div>"+
                "<div class='dl-con'>"+
                    "<div class='dl_c-left'>"+
                        "<h4>手机扫描</h4>"+
                            "<img src='../images/erweima.png' width='160' height='160'>"+
                            "<p>扫描二维码登录</p>"+
                    "</div>"+
                    "<div class='dl_c-right'>"+
                        "<form action='music.html' method='post' name='form_login' target='_top'>"+
                            "<div>"+
                                "<a href='javascript'>短信快捷登录</a>"+
                                "<i class='icon-mobile-phone'></i>"+
                                "<input type='text' name='name' id='name' required='required' placeholder='用户名' class='input_yh'>"+
                                "<input type='password' name='pass' id='pass' required='required' placeholder='密码' class='input_mm'>"+
                            "</div>"+
                            "<dd>"+
                                "<div><a href='javascript:'>忘记密码?</a></div>"+
                            "</dd>"+
                            "<div>"+
                                "<input type='submit' class='button' value='登录'>"+
                            "</div>"+
                        "</form>"+
                    "<div class='dl-more'>期待更多功能</div>"+
                "</div>"+
            "</div>"+
        "</div>"+
    "</div>"
$('.wrapper').prepend(denglu);
$('.denglu').css("height",$(".wrapper").height());
var box = $('.dl-wrapper');
$("#tuodong").mousedown(function (ev) {
    var oEvent = ev || event;
    var disX = oEvent.clientX - box.offset().left;
    var disY = oEvent.clientY - box.offset().top;
    $(document).mousemove(function (ev) {
        var oEvent = ev || event;
            $('.dl-wrapper').css({'left': oEvent.clientX - disX + "px", 'top': oEvent.clientY - disY + "px"});
    })
});
$(document).mouseup(function () {
    $(this).unbind("mousedown");
    $(this).unbind("mousemove");
});
$('.close').click(function () {
    $('.denglu').hide();
})
$('.show,.nav_btn').click(function () {
    var _left = ($(window).width() - box.width()) / 2;
    box.css({top: 200, left: _left});
    $('.denglu').show();
})