nie.define("Index",function(){

     'use strict';

     var Controller = {
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
     	/*initScroll:function(){
        	$(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#backToTop").css({"display":"block"},1000);
                }
                else
                {
                    $("#backToTop").css({"display":"none"},1000);
                }
            });
    	    $("#backToTop").click(function(){
           		//$('body,html').animate({scrollTop:0},1000);
        			      
     	    }); 
    	},*/
     	init:function(){
     		this.menuInit();
     		//this.initScroll();
     	}
     };
     Controller.init();
});