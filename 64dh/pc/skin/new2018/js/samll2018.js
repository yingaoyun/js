/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
  $('.g-list-box ul').each(function(){
      $('li:lt(3)',this).addClass('fistClass');
      $('.g-list-box ul li').eq(0).addClass('one');
      $('.g-list-box ul li').eq(1).addClass('two');
      $('.g-list-box ul li').eq(2).addClass('three');
  });
	
	var numb = $(".g-list-box ul li").length;
	$("#m-num").append(numb+"款小程序");
	
	//游戏截图添加html
	$(".s-content img").each(function(){
		var strli="<li  class='picture'><div><a class='f-bigimg f-hov' href='javascript:;' i='"+this.src+" ' ></a></div></li>";				
		$(this).wrapAll(strli);				
		
	})
	
	jQuery(".g-banner").slide({titCell:".g-banner-ico ul",mainCell:".g-banner-bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,titOnClassName:"m-hover"});//banner
	
	//导航
	var navname = $(".g-introd-msg h4").text();
	$(".g-samll-nav ul li").each(function(i){
		var pagename = $(this).find("a").text();
		if(navname.indexOf(pagename) != -1){
			$(this).addClass('hover');
		}
											
	})	

});