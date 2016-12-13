/**
 * Created by aoyolo on 2016/12/12.
 */

//影廊轮播时间
$(document).ready(function (){

    var nowimg = 0;
    var $box = $(".flex-viewport");
    var $slides = $(".flex-viewport .slides");
    var lis = $(".flex-viewport .slides>li").length;
    var timer = null;

    w = $(".flex-viewport li").width();

    // haha();
    // $(window).resize(haha)
    // function haha() {
    //     var w = $(".flex-viewport li").width();
    //     console.log(w);
    // }


    // console.log(w);
    $(".slides li:first").clone().appendTo(".slides");
    $(".flex-next").click(rightfunc)
    function rightfunc(event){
        if(nowimg <  lis-1){
            nowimg++;
            $slides.animate({"left":nowimg*-w},500);
        }
        else{
            nowimg = 0;
            $slides.animate({"left":lis*-w},500,function () {
                $slides.css("left",0);
                }
            );

        }
    };
    $(".flex-prev").click(function(event){
        if(nowimg > 0){
            nowimg--;
            $slides.animate({"left":nowimg*-w},500);
        }else{
            nowimg = lis-1;
            $slides.css({"left":lis*-w},500);
            $slides.animate({"left":nowimg*-w},500);
        }
    });
    timer=setInterval(rightfunc,5000);
    $box.mouseenter(function(event){
        clearInterval(timer)
    });
    $box.mouseleave(function(event){
        clearInterval(timer);
        timer=setInterval(rightfunc,5000)
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

