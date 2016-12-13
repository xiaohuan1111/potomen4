(function($){"use strict";

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) { 
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) { 
    window.getComputedStyle = function(el, pseudo) {"use strict";
        this.el = el;
        this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
                prop = prop.replace(re, function () {
                    return arguments[2].toUpperCase();
                });
            }
            return el.currentStyle[prop] ? el.currentStyle[prop] : null;
        };
        return this;
    };
}

var cbMobileTablet = !!( (navigator.userAgent.match(/IEMobile/i) === true ) || ( navigator.userAgent.match(/Android/i) === true ) || ( navigator.userAgent.match(/BlackBerry/i) === true ) || ( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) );

var cbMobilePhone = !!( (navigator.userAgent.match(/IEMobile/i) === true ) || ( navigator.userAgent.match(/Android/i) === true ) || ( navigator.userAgent.match(/BlackBerry/i) === true ) || ( navigator.userAgent.match(/iPhone|iPod/i) ) );
    
// as the page loads, call these scripts
jQuery(document).ready(function($) { "use strict";

    var cbWindowWidth = $(window).width(),
        cbWindowHeight = $(window).height(),
        cbContainer = $('#cb-container'),
        cbNavBar = $('#cb-nav-bar');
        
   

    if (cbWindowWidth >= 768) {

                // Sticky Menu
                if(!$(cbNavBar).hasClass('stickyoff')) {
                
                    var cbNavOffset = $(cbNavBar).offset().top,
                        cbNavHeight = $(cbNavBar).height(),
                        cbLoggedIn = 0;
                        
                    if ($('#wpadminbar').length > 0) {  cbLoggedIn = 28; }
                    
                        $(window).scroll(function () {
                                if($(this).scrollTop() > cbNavOffset) {
                                    $(cbNavBar).addClass('cb-stuck');
                                    $('.cb-stuck').css('margin-top' , cbLoggedIn);
                                    $(cbContainer).css('margin-top', cbNavHeight);
                                    
                                } else { 
                                    $(cbNavBar).css('margin-top', 0).removeClass('cb-stuck'); 
                                    $(cbContainer).css('margin-top', 0);    
                                } 
                            });
                }
    }
    
    var cbWindow = $(window),
        cbRatingBars = $('.cb-overlay').find('span'),
        cbRatingStars = $('.cb-overlay-stars').find('span');
    
    $.each(cbRatingBars, function(i, value) {
        
        var cbValue = $(value);
        if ( cbValue.visible(true) ) {
            
            cbValue.removeClass('cb-zero-trigger'); 
            cbValue.addClass('cb-bar-ani'); 
       
        } 
    });
    
    $.each(cbRatingStars, function(i, value) {
         
        var cbValue = $(value);
        if ( cbValue.visible(true) ) {
          
            cbValue.removeClass('cb-zero-stars-trigger'); 
            cbValue.addClass('cb-bar-ani-stars'); 
       
        } 
    });
        
    cbWindow.scroll(function(event) {
      
        $.each(cbRatingBars, function(i, value) {
              
            var cbValue = $(value);
            if ( ( cbValue.visible(true) ) && ( cbValue.hasClass('cb-zero-trigger') ) ) {

              cbValue.removeClass('cb-zero-trigger'); 
              cbValue.addClass('cb-bar-ani'); 
            } 
        });
          
          $.each(cbRatingStars, function(i, value) {
              
            var cbValue = $(value);
            if ( ( cbValue.visible(true) ) && ( cbValue.hasClass('cb-zero-stars-trigger') ) ) {
                
                cbValue.removeClass('cb-zero-stars-trigger'); 
                cbValue.addClass('cb-bar-ani-stars'); 
            } 
        });
      
    });

    $('.hentry').find('a').has('img').each(function () {
        
        var cbImgTitle = $('img', this).attr( 'title' ),
            cbAttr = $(this).attr('href');

        if (typeof cbImgTitle !== 'undefined') {
            $(this).attr('title', cbImgTitle);
        }
        
        if(typeof cbAttr !== 'undefined') {
            var cbHref = cbAttr.split('.');
            var cbHrefExt = $(cbHref)[$(cbHref).length - 1];

            if ((cbHrefExt === 'jpg') || (cbHrefExt === 'jpeg') || (cbHrefExt === 'png') || (cbHrefExt === 'gif') || (cbHrefExt === 'tif')) {
                $(this).addClass('cb-lightbox');
            }
        }
        
    });
    
    $('.tiled-gallery').find('a').attr('rel', 'tiledGallery');
    $('.gallery').find('a').attr('rel', 'tiledGallery');

    var cbMain = $('#main');
    cbMain.find('iframe[src^="http://www.youtube"]').wrap('<div class="cb-video-frame"></div>');
    cbMain.find('iframe[src^="//player.vimeo"]').wrap('<div class="cb-video-frame"></div>');
    
    // Fire up LightBox 
    if (!!$.prototype.boxer) {
        $(".cb-lightbox").boxer({
                duration: 350
         });
    }
    
    // Toggle
    $('.cb-toggler').find('.cb-toggle').click(function(e) {
           $(this).next().stop().slideToggle();
           $(this).prev().stop().toggle();
           $(this).prev().prev().stop().toggle();
           e.preventDefault();
    });
   
    var cbBackgroundExists = $('body > .backstretch'),
        cbFirstGrid = $('#cb-content').first('.cb-grid-block'),
        cbStandardFeatured = $('#cb-standard-featured');
        
    if ( cbBackgroundExists.length ) {
        
        $(cbStandardFeatured).imagesLoaded( function() {
            cbStandardFeatured.find('.cb-fi-standard').delay( 1200 ).fadeIn('slow');
        });
        
    } else {
        
        $(cbStandardFeatured).imagesLoaded( function() {
            cbStandardFeatured.find('.cb-fi-standard').fadeIn('slow');
        });
       
    }
    
    $(cbFirstGrid).imagesLoaded( function() {
        cbFirstGrid.find('.cb-grid-img').fadeIn('slow');
    });

    $(window).load(function() {
        var cbTabber = $('.tabbernav'),
            cb_amount = cbTabber.children().length; 
        if ( cb_amount === 4 ) { cbTabber.addClass("cb-fourtabs"); }
        if ( cb_amount === 3 ) { cbTabber.addClass("cb-threetabs"); }
        if ( cb_amount === 2 ) { cbTabber.addClass("cb-twotabs"); }
        if ( cb_amount === 1 ) { cbTabber.addClass("cb-onetab"); }
        
    });

    // Clear half modules
    $('.cb-module-half:odd').each(function(){
        $(this).prev().addBack().wrapAll($('<div/>',{'class': 'cb-double-block clearfix'}));
    });
     
    // Sliders
    $('.flexslider-widget').flexslider({
            animation: "slide",
            controlNav: false,
            pauseOnAction: true
    });
      
    $('.flexslider-1').flexslider({
        animation: "slide",
        itemWidth: 210,
        itemMargin: 3,
        slideshowSpeed: 5000,
        maxItems: 3,
        minItems: 1,
        controlNav: false
    });
     $('.flexslider-1-fw').flexslider({
        animation: "slide",
        itemWidth: 280,
        itemMargin: 3,
        slideshowSpeed: 5000,
        maxItems: 4,
        minItems: 1,
        controlNav: false
    });
   
    $('#cb-carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        directionlNav: false,
        itemWidth: 150,
        itemMargin: 15,
       
        asNavFor: '#cb-gallery'
      });
        
    $('#cb-gallery').flexslider({
        animation: "slide",
        controlNav: false,
         smoothHeight: true,
        directionlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#cb-carousel"
    });
   
    $('.flexslider-1-menu').flexslider({
        animation: "slide",
        itemWidth: 210,
        itemMargin: 3,
        slideshow: false, 
        maxItems: 2,
        minItems: 1,
        controlNav: false
    });
     $('.flexslider-1-fw-menu').flexslider({
        animation: "slide",
        itemWidth: 210,
        itemMargin: 3,
        slideshow: false, 
        minItems: 2,
        maxItems: 2,
        controlNav: false
    });
    
    $('.flexslider-2').flexslider({
        animation: "slide",
        minItems: 1,
        maxItems: 1,
        slideshowSpeed: 5000,
        controlNav: false
    });
     $('.flexslider-2-fw').flexslider({
        animation: "slide",
        minItems: 1,
        maxItems: 1,
        slideshowSpeed: 5000,
        controlNav: false
    });
    
    // Reset Flexslider positions on resize
    var cbFlexFW = $('.flexslider-1-fw'),
        cbFlexSW = $('.flexslider-1');
    $( window ).resize(function() {
        if ( cbFlexFW.length ) {
              cbFlexFW.flexslider(1); 
        }
        if ( cbFlexSW.length ) {
                cbFlexSW.flexslider(1);
        }
    });

    $('#messages_search').removeAttr('placeholder');
    
    var cbMainNav = $('.main-nav li');
    
    // Show sub menus
    $('.main-nav > li').hoverIntent(function() {
    
        $(this).find('.cb-big-menu').stop().slideDown('fast');
        $(this).find('.cb-mega-menu').stop().slideDown('fast');

        if ( cbWindowWidth < 1030 ) {
            $(this).find('.cb-links-menu .cb-sub-menu').stop().fadeIn();
        } else {
            $(this).find('.cb-links-menu .cb-sub-menu').stop().slideDown('fast');
        }
        
    }, function() {
        
       $(this).find('.cb-big-menu').slideUp('fast');
       $(this).find('.cb-mega-menu').slideUp('fast');
       $(this).find('.cb-links-menu .cb-sub-menu').slideUp('fast');
        
    });
    
    cbMainNav.find('.cb-big-menu .cb-sub-menu li').hoverIntent(function(){
    
        $(this).find('.cb-grandchild-menu').stop().slideDown('fast');
        
    }, function() {
        
       $(this).find('.cb-grandchild-menu').slideUp('fast');
        
    });
    
    cbMainNav.find('.cb-links-menu .cb-sub-menu li').hoverIntent(function(){
    
        $(this).find('.cb-grandchild-menu').stop().slideDown('fast');
        
    }, function() {
        
       $(this).find('.cb-grandchild-menu').slideUp('fast');
        
    });

    var cbParallaxMain = $('#cb-parallax-featured'),
        cbParallaxImg = cbParallaxMain.find('.cb-image'),
        cbParallaxBG = $('#cb-parallax-bg'),
        cbFullWidthBg = $('.backstretch').find('#cb-media-bg'),
        cbFullWidth = $('#cb-full-background-featured'),
        cbFullCheck = true,
        cbWindowHeightTwo;
        
    if ( cbFullWidth.length === 0 ) { 
        cbFullWidth = $('#cb-full-width-featured');  
        cbFullCheck = false; 
    }

    if ( cbFullWidth.length === 0 ) { 
        cbFullWidth = $('#cb-parallax-featured');  
        cbFullCheck = true; 
    }
    
    var cbFullWidthTitle = cbFullWidth.find('.cb-title-fi'),
        cbFullWidthTitleHeight = cbFullWidthTitle.height();
   
    if ( ( cbParallaxImg.length !== 0 ) && ( cbMobileTablet === false ) ) {
        var cbParallaxMainOffTop = cbParallaxMain.offset().top;
            cbWindowHeightTwo =  (cbWindowHeight) - (cbParallaxMainOffTop) - 90;
            
        cbParallaxImg.animate({"height": cbWindowHeight}, 750);
        cbParallaxBG.animate({"height": cbWindowHeight}, 750);
        cbParallaxMain.animate({"height": cbWindowHeightTwo}, 500);   
        
        $(window).scroll(function() {
               var cbyPos = -( ($(window).scrollTop() - cbParallaxImg.offset().top) / 10),
                   cbCoords = cbyPos + 'px';
                          
               cbParallaxImg.animate({ "background-position-y": cbCoords, "background-position-x": "49%"  }, 35, 'linear');

            }); 
    } 
    
    var cbClickFlag = true;

    cbMediaIcon.click(function() {

            var cbSCHeight = cbSoundCloudFrame.attr('height'),
                cbMediaOverlayHeight = cbMediaOverlay.height(),
                cbMediaOverlayWidth = cbMediaOverlay.width(),
                cbMediaFrameHeight = ( cbMediaOverlayHeight - cbFullWidthTitleHeight ) * 0.8,
                cbMediaFrameTop = ( cbMediaOverlayHeight - cbMediaFrameHeight - cbFullWidthTitleHeight ) / 2,
                cbMediaFrameWidth = cbMediaFrameHeight * 560 / 315,
                cbMediaFrameTopSC = ( cbMediaOverlayHeight - cbFullWidthTitleHeight  - 160 ) / 2,
                cbMediaFrameMarginLeft;

            if ( cbMediaFrameWidth >  cbMediaOverlay.width() ) {
                cbMediaFrameWidth = cbMediaOverlay.width() - 20;
                cbMediaFrameMarginLeft = 10;
            }  else {
                cbMediaFrameMarginLeft = ( cbMediaOverlayWidth - cbMediaFrameWidth ) / 2;
            }

            if ( cbClickFlag === true ) {

                cbVimeoFrame.attr('src', (cbVimeoFrame.attr('src') + '?autoplay=1')); 
                cbSoundCloudFrame.css('height', cbSCHeight); 
                cbClickFlag = false;
            }

            cbMediaOverlay.animate({"opacity": 1});
            $(this).fadeOut();

            if ( ( cbFullWidth.length > 0 ) && ( cbFullCheck === true ) ) {
                cbFullWidthBg.fadeIn().css("display","block");
            }

            if ( ( cbMediaFrameTop !== 'undefined'  ) && ( cbSoundCloudFrame.length === 0 ) ) {
                cbParallaxBG.addClass('cb-parallax-media-bg');
                cbMediaFrame.css({'top' : cbMediaFrameTop, 'height' : cbMediaFrameHeight, 'width' : cbMediaFrameWidth, 'margin-left' : cbMediaFrameMarginLeft });

            } else if ( cbSoundCloudFrame.length > 0 ) {

                cbMediaFrame.css({'top' : cbMediaFrameTopSC, 'max-height' : '200px'});
            }

            if ( cbParallaxImg.length > 0 ) {
                cbParallaxImg.fadeTo('400', 0.1);

            } 
    });
     
    cbMediaOverlay.click(function() {
        
            var cbMediaFrame = $(this).find('#cb-media-frame');
            cbMediaFrame.css("top", "-9999px");
            $(this).animate({"opacity": 0});
            cbMediaIcon.fadeIn();

            if ( ( cbFullWidth.length > 0 ) && cbFullCheck === true ) {
                cbFullWidthBg.fadeOut();
            }
               
            if ( cbParallaxImg.length > 0 ) {
                cbParallaxImg.fadeTo('400', 1);
            } 
             cbParallaxBG.removeClass('cb-parallax-media-bg');
        
    });
         
    // Full-Width Featured Image
    var cbFeaturedMain = $('#cb-full-background-featured');
    if ( cbFeaturedMain.length > 0) {
        if ( cbMobilePhone === true ) { 
             cbWindowHeightTwo =  $(window).height() - ( cbFeaturedMain.offset().top);
        } else {
             cbWindowHeightTwo =  $(window).height() - ( cbFeaturedMain.offset().top) - 80;
        }
           
            cbFeaturedMain.animate({"height": cbWindowHeightTwo}, 500);   
    }
      
    var hideSpan = $('.cb-accordion > span').hide();
    $('.cb-accordion > a').click(function() {
        
        if ( $(this).next().css('display') == 'none') {
            hideSpan.slideUp('fast');
            $(this).next().slideDown('fast');
        } else {
            $(this).next().slideUp('fast');
        }
        return false;
        
    });
    
    var cbToTop = $('#cb-to-top');
    $(window).scroll(function () {

        if($(this).scrollTop () > 750) {
             cbToTop.fadeIn(300);
        } else { 
            cbToTop.fadeOut(300);
        } 
    });
        
    cbToTop.click(function(event) {
        $('html, body').animate({scrollTop:0}, 600);
        event.preventDefault();
    });
    
    $('.cb-video-frame').fitVids();
    
    cbNavBar.find('.cb-login-modal-closer').click(function(){
        cbNavBar.find('.cb-login-modal').fadeOut();
    });

 $(".cb-tabs").find('ul').tabs(".cb-panes .cb-tab-content");
 

$('img[data-retina-src]').retinaDisplay();
 


/*
 * jQuery Reveal Plugin 1.0
 * www.ZURB.com
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
   

(function($) {
    /*---------------------------
     Listener for data-reveal-id attributes
    ----------------------------*/
    $('a[data-reveal-id]').on('click', function(e) {
        e.preventDefault();
        var modalLocation = $(this).attr('data-reveal-id');

            if ( modalLocation === 'cb-search-modal' ) { 
                cbNavBar.find('#'+modalLocation).reveal($(this).data());
                $('#cb-search-modal').find('.cb-search-field').focus();

            } else {
                cbNavBar.find('.'+modalLocation).reveal($(this).data());
                cbNavBar.find('input[name="log"]').focus();
            }
        
    });
    
    /*---------------------------
     Extend and Execute
    ----------------------------*/
        $.fn.reveal = function(options) {
            
            var defaults = {  
                animation: 'fadeAndPop',
                animationspeed: 300, //how fast animtions are
                closeonbackgroundclick: true, //if you click background will modal close?
                dismissmodalclass: 'cb-close-modal', //the class of a button or element that will close an open modal
                modalbgclass : 'cb-dark-bg'
            }; 
            
            //Extend dem' options
            options = $.extend({}, defaults, options); 
        
            return this.each(function() {
            
    /*---------------------------
     Global Variables
    ----------------------------*/
                var modal = $(this),
                    topMeasure  = parseInt(modal.css('top'), 10),
                    topOffset = ( cbWindowHeight - modal.outerHeight() ) / 2,
                    locked = false,
                    modalBG = $('.'+options.modalbgclass);                          
     
    
    /*---------------------------
     Create Modal BG
    ----------------------------*/
                if ( modalBG.length === 0 ) {
                    modalBG = $('<div class="'+options.modalbgclass+'" />').insertAfter(modal);
                } else {
                    
                    $('<div class="'+options.modalbgclass+'" />').remove();
                }
              
    /*---------------------------
     Open & Close Animations
    ----------------------------*/
                //Entrance Animations
                modal.bind('reveal:open', function () {
                  modalBG.unbind('click.modalEvent');
                    $('.' + options.dismissmodalclass).unbind('click.modalEvent');
                    if(!locked) {
                        lockModal();
                        if(options.animation == "fadeAndPop") {
                            modal.css({'opacity' : 0, 'visibility' : 'visible', 'display':'block'});
                            modalBG.fadeIn(options.animationspeed/2);
                            modal.delay(options.animationspeed/2).animate({
                                "opacity" : 1
                            }, options.animationspeed,unlockModal());                   
                        }
                    }
                    modal.unbind('reveal:open');
                });     
    
                //Closing Animation
                modal.bind('reveal:close', function () {
                  if(!locked) {
                        lockModal();
                        if(options.animation == "fadeAndPop") {
                            modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                            modal.animate({ "opacity" : 0 }, options.animationspeed/2, function() {
                                modal.css({'opacity' : 1, 'visibility' : 'hidden'});
                                unlockModal();
                            });                 
                        }          
                    }
                    modal.unbind('reveal:close');
                });     
        
    /*---------------------------
     Open and add Closing Listeners
    ----------------------------*/
                //Open Modal Immediately
                modal.trigger('reveal:open');
                var cbLwaStatus = $('.lwa-status');
                //Close Modal Listeners
                var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
                  modal.trigger('reveal:close');
                  $(cbLwaStatus).delay(500).removeClass('lwa-status-invalid');
                  
                });
                
                if(options.closeonbackgroundclick) {
                    modalBG.bind('click.modalEvent', function () {
                      modal.trigger('reveal:close');
                      $(cbLwaStatus).delay(500).removeClass('lwa-status-invalid');
                    });
                }
                $('body').keyup(function(e) {
                    if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
                    $(cbLwaStatus).delay(500).removeClass('lwa-status-invalid');
                });
                
                
    /*---------------------------
     Animations Locks
    ----------------------------*/
                function unlockModal() { 
                    locked = false;
                }
                function lockModal() {
                    locked = true;
                }   
                
            });//each call
    }; //orbit plugin call

})(jQuery);


    $('.cb-breaking-news ul').totemticker({
            row_height  :   '33px',
            mousestop   :   true
            
    }); 


var cbVote = $('#cb-vote').find('.cb-overlay');
var cbVoteStars = $('#cb-vote').find('.cb-overlay-stars');

if (cbVote.length) {
    
    $(cbVote).on('click', function() {
        $(cbVote).tipper({
            direction: "bottom"
        });
    });
} else if (cbVoteStars.length) {
    $(cbVoteStars).on('click', function() {
        $(cbVoteStars).tipper({
            direction: "bottom"
        });
    });
}


$(".cb-tip-bot").tipper({
    direction: "bottom"
});

$(".cb-tip-top").tipper({
    direction: "top"
});

$(".cb-tip-right").tipper({
    direction: "right"
});

$(".cb-tip-left").tipper({
    direction: "left"
});

        
}); /* end of as page load scripts */

var cbMediaOverlay = jQuery('#cb-media-overlay'),
    cbMediaFrame = cbMediaOverlay.find('#cb-media-frame'),
    cbMediaIcon = jQuery('.cb-entry-header, #cb-standard-featured, #cb-full-width-featured').find('.cb-media-icon'),
    cbYouTubeMediaFrame = jQuery('#cb-media-frame').find('iframe[src^="//www.youtube"]'),
    cbVimeoFrame = cbMediaFrame.find('iframe[src^="//player.vimeo"]'),
    cbSoundCloudFrame = cbMediaFrame.find('iframe[src^="https://w.so"]'),
    cbYTPlayer;

window.onYouTubeIframeAPIReady = function() {"use strict";
   cbYTPlayer = new YT.Player('cbplayer');
}

function cbPlayYTVideo() {"use strict";
    cbYTPlayer.playVideo();
};

function cbPauseYTVideo() {"use strict";
    cbYTPlayer.pauseVideo();
};

if ( ( cbMobileTablet === false ) ) {


    cbYouTubeMediaFrame.attr({ id : 'cbplayer', src : (cbYouTubeMediaFrame.attr('src') + '?version=3&enablejsapi=1') }); 
   /* cbVimeoFrame.attr({ id : 'cbplayer', src : (cbVimeoFrame.attr('src') + '?api=1') }); */

    if ( cbYouTubeMediaFrame.length > 0 ) {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        cbMediaIcon.on('click', cbPlayYTVideo);
        cbMediaOverlay.on('click', cbPauseYTVideo);        
    }
}

var cbWindow = jQuery(window),
    cbWindowWidth = cbWindow.width(),
    cbOuterContainer = jQuery('#cb-outer-container'),
    cbInnerContainer = jQuery('#cb-content'),
    cbFooter = jQuery('#cb-footer'),
    cbSmallMenuEl = jQuery('#cb-small-menu.cb-sm-on'),
    cbParallaxFrame= jQuery('#cb-parallax-featured'),
    cbFullBgFrame = jQuery('#cb-full-background-featured'),
    cbFullWidthFrame = jQuery('#cb-full-width-featured'),
    cbMenuOut = false,
    cbHamburger = false;


jQuery(function ($) {"use strict";

    $.event.special.swipe.horizontalDistanceThreshold = Math.min( cbWindowWidth * 0.5, 160 );        
        
    if ( ( cbWindowWidth < 768 ) ) {
            cbOuterContainer.addClass('cb-small-menu');

            jQuery('#cb-small-menu-trigger').on( 'click tap', cbTapHamburger );
            jQuery('#cb-small-menu-close').on( 'click tap', cbSwipeTapOffHandle );

            if ( cbSmallMenuEl.length > 0 ) {
                cbWindow.on( 'swiperight', cbSwipeRightHandle );
                cbInnerContainer.on( 'tap swipeleft touchend touchstart touchMove', cbSwipeTapOffHandle );
                cbFooter.on( 'tap swipeleft touchend touchstart touchMove', cbSwipeTapOffHandle );
                cbParallaxFrame.on( 'tap swipeleft touchend touchstart touchMove', cbSwipeTapOffHandle );
                cbFullBgFrame.on( 'tap swipeleft touchend touchstart touchMove', cbSwipeTapOffHandle );
                cbFullWidthFrame.on( 'tap swipeleft touchend touchstart touchMove', cbSwipeTapOffHandle );
            }
          
    } 

    cbWindow.resize(function() {
        if ( ( $( window ).width() < 768 ) ) {

            cbOuterContainer.addClass('cb-small-menu'); 
        
        } else {

            cbOuterContainer.removeClass('cb-small-menu');

        }
    });

});

function cbSwipeRightHandle( event ){
    cbOuterContainer.attr('class','cb-small-menu cb-main-nav-on');
    event.preventDefault();
    cbMenuOut = true;
}

function cbTapHamburger( event ){
    cbOuterContainer.attr('class','cb-small-menu cb-main-nav-on');
    event.preventDefault();
    cbMenuOut = true;
    cbHamburger = true;
}

function cbSwipeTapOffHandle( event ){
    if ( ( cbMenuOut === true ) && ( cbHamburger === false ) ) {
        cbOuterContainer.attr('class','cb-small-menu cb-main-nav-off');
        event.preventDefault();
        cbMenuOut = false;
    }
    cbHamburger = false;     
}

/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){ "use strict";
    // This fix addresses an iOS bug, so return early if the UA claims it's something else.
    if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
    var doc = w.document;
    if( !doc.querySelector ){ return; }
    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
        x, y, z, aig;
    if( !meta ){ return; }
    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true; }
    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false; }
    function checkTilt( e ){
        aig = e.accelerationIncludingGravity;
        x = Math.abs( aig.x );
        y = Math.abs( aig.y );
        z = Math.abs( aig.z );
        // If portrait orientation and in one of the danger zones
        if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
            if( enabled ){ disableZoom(); } }
        else if( !enabled ){ restoreZoom(); } }
    w.addEventListener( "orientationchange", restoreZoom, false );
    w.addEventListener( "devicemotion", checkTilt, false );
})( this );