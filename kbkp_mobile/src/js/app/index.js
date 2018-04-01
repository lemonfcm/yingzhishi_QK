nie.define("Index",function(){

    'use strict';

   var mbshare = nie.require("nie.util.mobiShare2");

    var Controller = {

        initAttention: function() {
            var $popAttention = $( '.attention-pop' );
            $( '#btn_attention' ).click(function() {
                $popAttention.show();
                setTimeout( function() {
                    $popAttention.addClass( 'show' );
                }, 100);
            });

            $popAttention.click(function() {
                $popAttention.removeClass( 'show' );

                setTimeout( function() {
                    $popAttention.hide();
                }, 300);

            });
        },

        initShare: function() {

            // 设置分享
            MobileShare.init({
                title       : $('#share_title').html(), //分享给朋友的分享标题
                desc        : $('#share_desc').html(), //分享给朋友的分享描述
                circleTitle : $('#share_timeline').html(), //分享到朋友圈的标题。不填则与title一致
                imgurl      : $('#share_pic').attr('data-src'), //分享图片
                guideText   : '不能让我一个人眼瞎<br />把魔爪伸向朋友圈', //微信中点分享按钮（参数button）显示的分享引导语
                qrcodeIcon  : ''//二维码图标
            });


            // 点击分享按钮，显示分享弹层
            $( '#btn_share' ).click(function() {
                MobileShare.showShare();
            });
        },

        initOriTip: function() {
            // 横屏提示
            var oriTip = {

                _elTpl: '<div style="display:none;position:fixed;width:100%;height:100%;left:0;top:0;right:0;bottom:0;z-index:9999;' +
                        'text-align:center;color:#fff;background:rgba(0,0,0,0.7);"><div style="'+
                        'position:absolute;left:50%;top:50%;font-size:0.7rem;height:0.7rem;line-height:0.7rem;width:6rem;margin-top:-0.35rem;margin-left:-3rem;">推荐使用竖屏浏览</div></div>',

                init: function() {
                    var that = this;

                    this.f = false;

                    var el = $(this._elTpl);

                    //$('body').append(el);

                    function judge() {
                        if (+window.orientation === 90 || +window.orientation === -90) {
                            if( !that.f ) {
                                $('body').append(el);
                                that.f = true;
                            }
                            el.show();
                            $(document).trigger('resize');
                        } else {
                            el.hide();
                        }
                    }

                    judge();
                    window.addEventListener('onorientationchange' in window ?
                            'orientationchange' : 'resize', judge, false);

                    return this;
                }
            };

            oriTip.init();
        },
        initSwiper:function(){
          var mySwiper = new Swiper ('.main3 .swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 2
        });
        },
        initPopSwiper:function(){
            var mySwiper = new Swiper ('.popSwiper', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });
            $(".jsjsPop").on("click", ".closePop", function(){
                 $(".jsjsPop").css("visibility","hidden");
                 $("body").css("overflow","auto");
                 $("body").css("height","auto");
            });
            $(".main3").on("click", ".swiper-slide img", function(){
                var num = $(this).attr("data_popIndex") ;
                mySwiper.slideTo(num,1,false);
                $(".jsjsPop").css("visibility","visible");
                $("body").css("overflow","hidden");
                $("body").css("height","100vh");
            });
            
        },
        
        bind: function() {
            var $body = $( 'body' );
           /* $( '.btn_toTop' ).click(function() {
                $body.scrollTop(0);
                return false;
            });*/
            $body.on("click", ".btn_toTop", function(){
                $body.scrollTop(0);
                return false;
            });
        },
        menuInit:function(){
            $(".topMenu").on("click", function(){
                if($(this).hasClass("topMenu_hover")){
                    $(this).removeClass("topMenu_hover");
                    $(".menuWrapper").css("visibility","hidden");
                }else{
                    $(this).addClass("topMenu_hover");
                    $(".menuWrapper").css("visibility","visible");
                }
            });
        },

        initNiceScroll: function() {
            $("#niceScroll").niceScroll({
                cursorcolor: '#c1aa8b',
                enablemousewheel: true
            });
        },

        init: function() {
            this.initShare();
            this.initAttention();
            this.bind();
            this.menuInit();
            this.initSwiper();
            this.initPopSwiper();
        }
    }

    Controller.init();
});
