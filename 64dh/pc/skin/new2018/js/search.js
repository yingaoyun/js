/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
	//返回顶部
  $("body").append('<div class="g-float"><a href="javascript:;" id="m-top-back"></a></div>')
  $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("#m-top-back").animate({height:60},10);            
            }else{
               $("#m-top-back").animate({height:0},10);                    
            }
    })
    $("#m-top-back").click(function(){
        $("body,html").animate({scrollTop:0},300)
    })
});



$(function($) {
  searchOver()
});

function searchOver(){	


	var moren = "软件";
	
	 $("#topForm dl:first").click(function(){	
	 	var liLast = $(this).children("dd").css("display");
	 	if(liLast=="none"){
	 		$(this).find("dd").show();
	 	}else{
	 		$(this).find("dd").hide();	
	 	}
	 })
	 $("#topForm dl dd").click(function(){
		moren = $(this).attr("data-type");	
	   $("#topForm dl dt").html(moren+"<i></i>")
	   if(moren=="文章"){
		   $('#bname').val('news');
		   $('#tid').val('1');
	   }else{
		   $('#bname').val('soft');
		   $('#tid').val('2');
	   }
	})

}

