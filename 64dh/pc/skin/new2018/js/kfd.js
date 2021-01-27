/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
	gotoObj($(".m-ml-nav"),$(".m-ml-nav").height());	
	function gotoObj(thisObj,navHeight){	
		$(".m-down-link").click(function(){
			$("body,html").animate({scrollTop:$("#down-mian").offset().top-320},300)
		})
		var navTop = thisObj.offset().top;
	
	
	
	$(window).scroll(function(){		
		if($(window).scrollTop() > navTop){
			thisObj.addClass("f-float");
			$('.topForm').addClass("f-top-box");
			$("#m-cont").css("margin-top",navHeight)
		}else{
			thisObj.removeClass("f-float");
			$('.topForm').removeClass("f-top-box");
			$("#m-cont").css("margin-top",0)
		}
		for(i=0;i<thisObj.find("li").length-1;i++){
			if($(window).scrollTop() >= parseInt(($(".f-jump-place").eq(i).offset().top - navHeight))){
				thisObj.find("li").eq(i).addClass("f-hover").siblings().removeClass("f-hover")
			}
		}
	})
	thisObj.find("li").click(function(){
		var n = $(this).index();
		if(n<5){	
			var gotoTop = $(".f-jump-place").eq(n).offset().top - navHeight;
			$("body,html").animate({scrollTop:gotoTop},500)
		}else{
			var gotoTop = $("#down-mian").offset().top - navHeight;
			$("body,html").animate({scrollTop:gotoTop},500)	
		}
	})
	}
	
	
	
	$(".m-soft-relat").hover(function(){
		$(this).find(".icolst").css("height","auto");
		$(this).addClass("m-hover")
	},function(){
		$(this).find(".icolst").css("height","298px");
		$(this).removeClass("m-hover")
	});
	$(".m-soft-relat .icolst li h6 a span").each(function(){
		var liText = $(this).text();
		var sizeText = $(this).parents("li").find("p").text();
		if(sizeText.indexOf("M") <= -1 && sizeText.indexOf("K") <= -1){
			if(liText.indexOf("官方") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">官方版</font>")
			}else if(liText.indexOf("ios") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">IOS版</font>")
			}else if(liText.indexOf("绿色") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">绿色版</font>")
			}else if(liText.indexOf("破解") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">破解版</font>")
			}else if(liText.indexOf("免费") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">免费版</font>")
			}else if(liText.indexOf("安卓") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">安卓版</font>")
			}else if(liText.indexOf("Mac") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">Mac版</font>")
			}else if(liText.indexOf("ipa") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">IOS版</font>")
			}else if(liText.indexOf("中文") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">中文版</font>")
			}else if(liText.indexOf("安装") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">安装版</font>")
			}else if(liText.indexOf("谷歌") > -1){
				$(this).parents("li").find("p").prepend("<font color=\"red\">谷歌版</font>")
			}else{
				$(this).parents("li").find("p span:first").remove();
			}
		}
	})
	
})