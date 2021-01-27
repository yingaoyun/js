/*开发豆原创源码，唯一官网：www.kaifadou.com*/
if (typeof(pageClass) == "undefined") {
  pageClass = "0"  
};


$(function() {
	//本类下载排行
	$(".m-bl-list").each(function(){
		$(this).find("li:first").addClass("f-hover");    
	})

	$(".m-bl-list ul li").hover(function() {
		$(this).addClass("f-hover").siblings("li").removeClass("f-hover");  

	})

	//条数赋值
	var txt = $(".tsp_count i:first").html();
	$(".m-tith4 span b").html(txt);


if(pageClass==3){
	//隐藏源文件下载按钮提示大小js插入
	var dsize = $(".m-list-box li").eq(0).text();
	$(".m-down-btn a.m-a-link span").remove();
	$(".m-down-btn a.m-a-link").append('<span class="u-adddx">'+dsize+'</span>');

	//判断288,282分类下面无高速下载器
	var xid = _pageinfo.categroyId;
	if(xid == '288' || xid =='282'){
		$(".m-down-btn div.f-fl").hide();
		$(".u-down-list div.one ul h3.m-down-1").hide();
		$(".u-down-list div.one ul li.u-gs-btn").hide();
	}
}

	//软件截图轮播图标小于一张隐藏左右按钮
	var list = $(".m-previmg-show ul").find("li").length;
	if(list<=1)
	{
   		$(".m-previmg-fix").find("b").hide();
	}
	$(".g-news-tj").slide({titCell:".f-tj-dome li",mainCell:".g-tj-box",trigger:"click",titOnClassName:"m-hover"});//新品推荐 最新更新
	$(".m-tj-dome").slide({titCell:".f-dome-list li",mainCell:".g-tj-bottom",titOnClassName:"m-hover"});//软件推荐
	$(".g-bl-down").slide({titCell:".f-month li",mainCell:".g-bl-box",titOnClassName:"m-hover"});//本类下载排行
	$(".g-hot-rj").slide({titCell:".g-hot-top li",mainCell:".g-hot-bottom",titOnClassName:"f-hover"});//热门软件 关键词
	$(".m-like-box").slide({titCell:".m-title-dome li",mainCell:".m-bottom-box",titOnClassName:"m-hover"});//猜你喜欢
	$(".m-previmg-fix").slide({mainCell:".m-previmg-show ul",effect:"left",scroll:1});//软件截图
	$(".g-down-box").slide({titCell:".m-title-dome li",mainCell:".u-down-list",trigger:"click",titOnClassName:"m-hover"});//下载地址
	
	//展开关闭内容
	if($("#m-cont").height() <= 800){
		$(".f-cont-btn").hide();
		$("#m-cont").height("auto")
	}else{
		$("#m-cont").height(800);	
		$("#m-cont").addClass("f-cont800");	
		$(".f-cont-btn").click(function(){
			if($(this).text()=="展开内容"){
				$("#m-cont").height("auto");
				$(this).text("收起内容").addClass("m-click-bg");
				$("#m-cont").removeClass("f-cont800");	
			}else{
				$("#m-cont").height("800px");
				$(this).text("展开内容").removeClass("m-click-bg");
				$("#m-cont").addClass("f-cont800");	
			}
		})
		
	}	
	
	
	if(pageClass==3) //软件页
	{	
		if (_pageinfo.id != 29791) {//不为360指定id号
		//var All_600  ="<iframe marginwidth=0 marginheight=0 frameborder=0 bordercolor='#000000' scrolling=no src=\"/js/html/down_foot2018.html\" width=870 height=60></iframe>";
		//$("#szdz").after('<div style=\"clear:both;width:870px;padding: 0px 15px 15px 15px; background:#FFF;\"> '+All_600+' </div>');
		}
	
	// 诱导位结束 3-13 
	$(".keyText").prepend('<strong><i>i</i>软件特别说明</strong>');
	
	//截图垂直居中
	 var jtimg = $('.m-previmg-show').height(); 
	    $(".m-previmg-show img").each(function(){
		var strli="<i id='u-show-img'></i>";				
			$(this).wrapAll(strli);	
			
			$("#u-show-img").css("height", jtimg);
		})
		
	//判断无内容隐藏
	$('.f-jump-place').each(function(i){
		if (i > 0) {
			var judivlinum = $(this).find('li').length;
			if (judivlinum <1) {
				$('.m-ml-nav li').eq(i).css({'width':'0','overflow':'hide','font-size':'0','border':'0'});
				$('.f-jump-place').eq(i).css({'height':'0','overflow':'hide','margin':'0'});
			}
		}
	})
	// 处理无下载地址
	if ($('.u-link-list a').length < 1) {
		$('.m-a-link').css('background-color', '#ccc').find('p').text('暂无下载')
	}

	  var version = $(".g-version ul").find("li").length;
	  if(version < 1){
		  $(".g-version").remove()
		 
	  }
	 
  
	  //插入三张广告
	  $(".u-down-list").after("<div class=\"u-right-ban f-fr\"><a class=\"first-ban\" href=\"https://www.qqtn.com/down/29661.html\" target=\"_blank\"><img src=\"/skin/new2018/images/ban1.png\"></a><p><a href=\"https://www.qqtn.com/down/29791.html\" target=\"_blank\"><img src=\"/skin/new2018/images/ban2.png\"></a><a href=\"https://www.qqtn.com/down/34177.html\" target=\"_blank\"><img src=\"/skin/new2018/images/ban3.png\"></a></p></div> ")

	  $(function() {
//索引滚动
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

	//合集功能
	var titleName ="";
	$(".m-bottom-box .m-bottom-list").each(function(i) {
        titleName = '<li>'+$(this).find(" h4 a").text()+'<i></i>'+'</li>';	
		 $('#f-like-txt ul').append(titleName);
		 $('#f-like-txt ul li:first').addClass("m-hover");
		 $('#f-like-txt ul li').hover(function(){
		 	$(this).addClass("m-hover").siblings("li").removeClass("m-hover");  
		 	var n = $(this).index();	
		 	$(".m-bottom-box .m-bottom-list").eq(0).show();
			$(".m-bottom-box .m-bottom-list").eq(n).show().siblings(".m-bottom-list").hide();
		 })
    });
	}
})

	//详细页相关
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

	Array.prototype.in_array = function(e) {  //用法arr.in_array("a") 是否包含在数组中
	for(i=0;i<this.length;i++){ 
		
		if(this[i] == e)  return true;
	}   
 	return false;  
}

var cateAPK = [194,195,196,227,197,198,228,229,230,231,286,188,285,187,189,325,326,327,328,329,207,205,304,385,200,201,202,203,221,222,223,224,225,204,226,324];	 //安卓分类
var cateIOS = [209,210,211,212,213,214,215,216,217,218,219,220,318,292,293,294,295,296,297,298,299,300,301,302,303,306,307,308,309,310,311,312,313,314,315,316,317]; //苹果分类 
	$(".c_soft_same em").each(function(i){
			var data=$(this).attr("data");			 
			if ( cateAPK.in_array(data)	){ //如果安卓
				$(this).attr("class","m-android")
			}
			if ( cateIOS.in_array(data)	){ //如果苹果
				$(this).attr("class","m-ios");
			}
        });




	 		
  }
});

//下载详细页插入广告300*295
var d_a5=function(){
	var da5 = '<script type="text/javascript" src="//a1.qqtn.com/common/qydss.js?niaffeke=h"></script>';
document.write(da5)
	} 

