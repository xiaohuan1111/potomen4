$(document).ready(function () {
    var nowimg = 0;
    var lis = $(".slides li").length;
    var $slides = $(".slides");
    var $div = $(".footer-right-widget");
    var timer = null;
    $(".slides li:first").clone().appendTo(".slides");
    console.log(lis)
    $(".footer-right-next").click(rightFunc)
    function rightFunc(event){
        if (nowimg < lis){
            nowimg++;
            $slides.animate({"left":nowimg*-336},100);
        }else {
            nowimg = 0;
            $slides.animate({"left":lis*-336}, 100, "linear", function () {
                $slides.css("left", 0);
                // $(".slides li:first").clone().appendTo(".slides");
            })
        }
    }
    $(".footer-right-prev").click(function (event) {
        if(nowimg > 0){
            nowimg--;
            $slides.animate({"left":nowimg*-336},100);
        }else {
            nowimg = lis;
            $slides.css({"left":lis*-336},100);
            $slides.animate({"left":nowimg*-336},100);
        }
    });

    timer = setInterval(rightFunc, 2000);
    $div.mouseenter(function (event) {
        clearInterval(timer)
    });
    $div.mouseleave(function (event) {
        clearInterval(timer);
        timer = setInterval(rightFunc, 2000);
    });

    //返回顶部
    $(window).scroll(function(){
        var sc=$(window).scrollTop();
        var rwidth=$(window).width()+$(document).scrollLeft();
        var rheight=$(window).height()+$(document).scrollTop();
        if(sc>0){
            $("#go-top").css("display","block");
            $("#go-top").css("left",(rwidth)+"px");
            $("#go-top").css("top",(rheight)+"px");
        }else{
            $("#go-top").css("display","none");
        }
    });
    $("#go-top").click(function(){
        $('body,html').animate({scrollTop:0},300);
    });

});



