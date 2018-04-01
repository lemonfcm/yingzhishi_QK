nie.define("Index",function(){

    'use strict';
    


    var Controller = {

       initShare:function(){
            var shareV5 = nie.require("nie.util.shareV5");
          /*  var shareUrl = $("#share_url").html();*/
            var sharePic = $("#share_pic").attr("data-src");
            var shareTxt = $("#share_desc").html();
            var shareTitle = $("#share_title").html();
            var share = shareV5({
                fat: "#NIE-share", 
                type: 6, 
                defShow: [23, 22, 2, 1,4], 
                title: shareTitle,  
                img: sharePic, 
                content: shareTxt 
            });
        },

        initScroll:function(){
        	$(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#backToTop").fadeIn(1000);
                }
                else
                {
                    $("#backToTop").fadeOut(1000);
                }
            });
    	    $("#backToTop").click(function(){
           		$('body,html').animate({scrollTop:0},1000);
        			      
     	    }); 
    	},

    	init:function(){
			this.initShare();
			this.initScroll();
    	}
  

    };

    Controller.init();


});