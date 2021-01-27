/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function() {
	//图轮播图标小于一张隐藏左右按钮
	var list = $(".g-dome-box ul").find("li").length;
	if(list<=1){
		$(".g-dome-img").find("b").hide();
	}
	if($(".g-dome-box ul").find("li").length==0){
		$(".g-dome-box ul").append('<li><a href="javascript:;" ><img src="/skin/new2018/images/cp-k-img.jpg"></a></li>')
	}
	
	$(".g-dome-img").slide({mainCell:".g-dome-box ul",effect:"left",scroll:1});//第一屏left切换
	$(".m-new-dome").slide({titCell:".m-new-top li",mainCell:".m-new-bd",titOnClassName:"m-hover"});//最新游戏软件库

	 
	//阅读排行榜
	$(".g-rank ul li").each(function(){
		$(".g-rank ul li:first").addClass("m-hover"); 
		
	})
	$(".g-rank ul li a span").eq(0).css("background","#ee6255");
	$(".g-rank ul li a span").eq(1).css("background","#f5a843");
	$(".g-rank ul li a span").eq(2).css("background","#4ac4da");
	$(".g-rank ul li").hover(function() {
		$(this).addClass("m-hover").siblings("li").removeClass("m-hover");  
	})
		

	//苹果安卓下载悬二维码

	 $(".ios i").mouseover(function (){  
           $(".ios").addClass("m-hover")
        }).mouseout(function (){  
           $(".ios").removeClass("m-hover")
        });  
	 $(".android i").mouseover(function (){  
           $(".android").addClass("m-hover")
        }).mouseout(function (){  
           $(".android").removeClass("m-hover")
        });  
	
	
	
	//导航附加样式
    $(".g-box-nav p a").each(function(){  
      $(this).find("a:first").addClass("m-hover");    
        $this = $(this);  
        if($this[0].href==String(window.location)){  
            $this.addClass("m-hover");  
        }  
    })

	
	//游戏截图添加html
	$(".s-content img").each(function(){
		var strli="<li  class='picture'><div><a class='f-bigimg f-hov' href='javascript:;' i='"+this.src+" ' ></a></div></li>";				
		$(this).wrapAll(strli);				
		
	})
	
	//搜索
	$('#m-cancel').click(function(){
		var bdtxt = $("#keyword").val();
		var bd = "http://www.baidu.com/baidu?word=" + bdtxt;
	if (bdtxt != "") {
		$(this).attr("href", bd);
	}
	})
	
	//苹果版下载无连接
	var icolink = $(".ios a").attr('href');
	if(icolink ==""){
		$(".ios a").attr('href','javascript:void(0);');   
		$(".ios").addClass("no-link");  
	}
	
	//首页文章无数据隐藏
	var kulist = $("#m-ku-list ul").find("li").length;
	if(kulist ==""){
		$("#m-ku-list").hide();
	}
	
	

	
	
});



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