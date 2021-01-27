//点击展开导航
function clickNav(){
	$(".m-navshow-btn").click(function(){
		var navText = $(this).text().replace(/\s+/g,"");
		if(navText=="展开"){
			$(this).addClass("m-hover");
			$(".m-navshow-ul,.m-black").stop().fadeIn("fast");
			$(this).text("收起");
			$("header").addClass("m-float");
			$("body").css("padding-top",45)
		}else{
			$(this).removeClass("m-hover");
			$(".m-navshow-ul,.m-black").stop().fadeOut("fast")
			$(this).text("展开");
			$("header").removeClass("m-float");
			$("body").css("padding-top",0)
		}
	})
	$(".m-black").click(function(){
		$(".m-navshow-btn").removeClass("m-hover");
		$(".m-navshow-ul,.m-black").stop().fadeOut("fast")
		$(".m-navshow-btn").text("展开");
		$("header").removeClass("m-float");
		$("body").css("padding-top",0)
	})
}

clickNav()

//上下结构的选项卡
function Tab(){
	$(".m-tab-box").each(function() {
        $(this).find(".m-tab-cont:gt(0)").hide();
		$(this).find(".m-tab-btn li:first").addClass("m-hover");
    });
	$(".m-tab-btn b").click(function(){
		$(this).addClass("m-hover").siblings().removeClass("m-hover");
		var indexNumb = $(this).index();
		$(this).parents(".m-tab-btn").next(".m-tab-box").find(".m-tab-cont").eq(indexNumb).fadeIn("fast").siblings(".m-tab-cont").hide()
	})
	$(".m-tab-btn li").click(function(){
		$(this).addClass("m-hover").siblings().removeClass("m-hover");
		var indexNumb = $(this).index();
		$(this).parents(".m-tab-box").find(".m-tab-cont").eq(indexNumb).fadeIn("fast").siblings(".m-tab-cont").hide()
	})
}
Tab()

$(function(){
	//文章内容推广
	isImgLoad(function(){	// 判断图片加载状况，加载完成后回调
		if(typeof(cmsList) == "undefined"){
			window.setInterval(function(){
				$(".plist").each(function() {

					if($(this).find("ul span").css("position")=="absolute"){
							var allHeight = $(this).find("ul img").outerHeight(true);
							var ulTop = Math.ceil($(this).find("ul").css("top").substr(0,$(this).find("ul").css("top").indexOf("px")));
							$(this).height(allHeight+ulTop+10)
					}else if($(this).find("ul img").length>0){
						var allHeight = $(this).find("ul img").outerHeight(true) + $(this).find("ul strong").outerHeight(true) + $(this).find("ul span").outerHeight(true) + $(this).find("ul b").outerHeight(true);
						$(this).height(allHeight)
					}



				});
			},100)
		}

		$(".g-index-tab .g-index-tab-game").each(function() {
            var allHeight = $(this).find("ul img").outerHeight(true) + $(this).find("ul strong").outerHeight(true) + $(this).find("ul span").outerHeight(true) + $(this).find("ul b").outerHeight(true)+10;
			$(this).height(allHeight)
			$(this).find("ul,ul li").height(allHeight);
        });
       
	});
	



		// 快速获取图片宽高
      var jietuh = $('.g-cont img:last').attr('src');
      backTop();//返回顶部
      // 记录当前时间戳
      var start_time = new Date().getTime();
      // 图片地址
      var img_url = jietuh +'?' + start_time;
      // 创建对象
      var simg = new Image();
      // 改变图片的src
      simg.src = img_url;
      // 定时执行获取宽高
      var check = function(){
       if(simg.width>0 || simg.height>0){
       var diff = new Date().getTime() - start_time;
       //console.log('from:check : width:'+img.width+',height:'+img.height+', time:'+diff+'ms')
       clearInterval(set);

       $(".g-cont h3").wrapInner("<span></span>")//处理H3;
		// 要获取图片高度，需要等加载完再执行
	    var contentHeight = $(".g-cont").height();
	    $(".g-cont").height(680);
	    $(".g-cont").addClass("on-hover");
	    $(".m-showload p").click(function(){
	      var btnText = $(this).text().replace(/\s+/g,"")
	      if(btnText=="加载全部内容" || btnText=="点击查看更多"){
	        $(".g-cont").animate({height:contentHeight},300);
	        $(".g-cont").removeClass("on-hover");
	        $(this).text("点击收起内容").append('<b class="u-up"></b>')
	      }else{
	        $(".g-cont").animate({height:680},300);
	        $(this).text("加载全部内容").append('<b></b>');
	        $(".g-cont").addClass("on-hover");
	      }
		})

		 }
      };
      var set = setInterval(check,40);   


})
//判断图片加载完成
function isImgLoad(callback){
	var t_img; // 定时器
	var isLoad = true; // 控制变量
	// 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
	// 查找所有封面图，迭代处理
	$(".plist img").each(function(){
		// 找到为0就将isLoad设为false，并退出each
		if(this.height === 0){
			isLoad = false;
			return false;
		}
	});
	// 为true，没有发现为0的。加载完毕
	if(isLoad){
		clearTimeout(t_img); // 清除定时器
		// 回调函数
		callback();
	// 为false，因为找到了没有加载完成的图，将调用定时器递归
	}else{
		isLoad = true;
		t_img = setTimeout(function(){
			isImgLoad(callback); // 递归扫描
		},100); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	}
}

//返回顶部
function backTop(){
	$("body").append("<b class=\"m-backTop\"></b>");
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$(".m-backTop").fadeIn("fast");
		}else if($(window).scrollTop()<300){
			$(".m-backTop").fadeOut("fast");
		}
	});
	$(".m-backTop").click(function(){
		$("html,body").animate({scrollTop:0},300)
	})
}
backTop()