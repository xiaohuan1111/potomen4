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
    $(".cb-article").hover(function () {
        $(this).children().children("img").css("opacity", ".5");
    }, function () {
        $(this).children().children("img").css("opacity", "1");
    });

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
    //首页轮播中的图片变大
    $(".slide>li").hover(function () {
        $(this).children("a").children("img").css({"transform": "scale(1.1)", "transition": "1s", "opacity": ".9"});
    },function () {
        $(this).children("a").children("img").css({"transform": "scale(1)", "transition": "1s", "opacity": "1"});
    });

    
    //导航栏下的notice栏滚动列表
    var noticeN = 0;
    var noticeLen = $("#notice-con>ul>li").length;
    var noticeTimer = null;
    var $boxinUl = $("#notice-con>ul");
        //在ul的最后创建一个伪li:first 用于最后个li与第一个li之间的过渡
    $("#notice-con>ul li:first").clone().appendTo("#notice-con>ul");
        //设置定时器 timer li自动轮换 鼠标移入是清除定时器
    noticeTimer = setInterval(function () {
        up();
    }, 2000);

    $("#notice-con").mouseenter(function () {
        clearInterval(noticeTimer);
    });
    $("#notice-con").mouseleave(function () {
        noticeTimer = setInterval(function () {
            up();
        }, 2000)
    });
        //函数up实现移动ul 滚动显示li的功能
    function up() {
        if (noticeN < noticeLen - 1) {
            noticeN++;
            $boxinUl.animate({"top": -noticeN * 35}, 1000)
        } else {
            $boxinUl.animate({"top": -noticeLen * 35}, 1000, function () {
                $boxinUl.css("top", 0);
                noticeN = 0;
            });
        }
    }

    //导航栏定位方式切换
    var width = document.body.clientWidth;
    $(window).scroll(function () {
        var navFlag =  width > 1020 ? 112:216;
        var  $nav = $(".main-nav-list");
        if( $(window).scrollTop() >= navFlag){
            $nav.addClass("nav-fix");
        }else{
            $nav.removeClass("nav-fix");
        }

    })

    //小屏幕下显示侧边栏
    $("#nav-btn").click(function () {
        $("#cb-outer-container").animate({"left":220},500);
    })
    $(".side-nav-close").click(function () {
        $("#cb-outer-container").animate({"left":0},100);
    })

    //首页轮播图cb-slide-a
    var myslide = 0;
    var myspeed = 1140;
    var mySlideTimer = null;
    var $cbSlideA = $(".cb-slider-a .slide");
    var doslide3 = function(){
        myslide++;
        if(myslide == 3){
            $cbSlideA.animate({"left":0},1000);
            myslide = 0;
        }
        $cbSlideA.animate({"left":-myslide*myspeed+"px"},1000);

    };
    var doslide3s = function(){
        if(myslide == 0){
            myslide = 3;
            $cbSlideA.animate({"left":-(myslide-1)*myspeed+"px"},1000,function(){
                myslide--;
            });
        }else{
            $cbSlideA.animate({"left":-(myslide-1)*myspeed+"px"},1000);
            myslide--;
        };

    };

    $(".flex-prev").click(function () {
        if(!$cbSlideA.is(":animated")){
            doslide3();
        }
    });
    $(".flex-next").click(function () {
        if(!$cbSlideA.is(":animated")){
            doslide3s();
        }
    })
    //首页轮播图定时器
    mySlideTimer = setInterval(function () {
        doslide3();
    },4000);
    $(".flexslider-1-fw").hover(function () {
        clearInterval(mySlideTimer);
    },function () {
        mySlideTimer = setInterval(function () {
            doslide3();
        },4000);
    })
});



