$(document).ready(function () {

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


    //首页轮播图 cb-slider-a
    var myslide = 1;
    $(".flex-prev").click(function () {
        var speed = 1140;
        $(".cb-slider-a .slide").animate({"left":-myslide*1140+"px"},1000,function(){
            myslide++;
            if(myslide == 3){
                $(".cb-slider-a .slide").css("left",0);
                myslide = 1;
            }
        });
    })
    


    //导航栏选项卡切换
    $(".main-nav-list>li").hover(function () {
        $(".main-nav-list>li").children(".cb-big-menu").hide();
        $(this).children(".cb-big-menu").slideDown();
    },function () {
        $(this).children(".cb-big-menu").hide();
    });

    $(".main-nav-list>li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });

    //cb-article 特色cb-featured 最近 中的图片鼠标移入有涂层效果 用鼠标移入降低图片透明度显示背景颜色实现
    $(".cb-article").mouseenter(function () {
        $(this).find("img").css({"transform": "scale(1.1)", "transition": "1s", "opacity": ".5"});
    });
    $(".cb-article").mouseleave(function () {
        $(this).find("img").css({"transform": "scale(1.0)", "transition": "1s", "opacity": "1"});
    });


    //导航栏旁边的列表图片鼠标移入添加紫色涂层
    // $(".cb-article").hover(function () {
    //     $(this).children().children("img").css("opacity", ".5");
    // }, function () {
    //     $(this).children().children("img").css("opacity", "1");
    // });

    $(".cb-recent .cb-mask").hover(function () {
        $(this).children().children("img").css("opacity", ".5");
    }, function () {
        $(this).children().children("img").css("opacity", "1");
    });
    
    //首页图片鼠标移入变大
    $(".cb-link").hover(function () {
        $(this).siblings(".cb-grid-img").find("img").css({"transform": "scale(1.1)", "transition": "1s", "opacity": ".9"});
    },function () {
        $(this).siblings(".cb-grid-img").find("img").css({"transform": "scale(1)", "transition": "1s", "opacity": "1"});
    });

    
    //导航栏下的notice栏滚动列表

    var n = 0;
    var len = $("#notice-con>ul>li").length;
    var timer = null;
    var $boxinUl = $("#notice-con>ul");
        //在ul的最后创建一个伪li:first 用于最后个li与第一个li之间的过渡
    $("#notice-con>ul li:first").clone().appendTo("#notice-con>ul");
        //设置定时器 timer li自动轮换 鼠标移入是清除定时器
    timer = setInterval(function () {
        up();
    }, 2000);

    $("#notice-con").mouseenter(function () {
        clearInterval(timer);
    });
    $("#notice-con").mouseleave(function () {
        timer = setInterval(function () {
            up();
        }, 2000)
    });
        //函数up实现移动ul 滚动显示li的功能
    function up() {
        if (n < len - 1) {
            n++;
            $boxinUl.animate({"top": -n * 35}, 1000)
        } else {
            $boxinUl.animate({"top": -len * 35}, 1000, function () {
                $boxinUl.css("top", 0);
                n = 0;
            });
        }
    }

    //导航栏定位方式切换
    $(window).scroll(function () {
        var width = document.body.clientWidth;
        //alert(width);
        var navFlag =  width > 1020 ? 112:216;
        var  $nav = $(".main-nav-list");
        if( $(window).scrollTop() >= navFlag){
            $nav.addClass("nav-fix");
        }else{
            $nav.removeClass("nav-fix");
        }

    })

});



