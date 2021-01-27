/*开发豆原创源码，唯一官网：www.kaifadou.com*/
function backTop(){
	$("body").append('<div class="g-float"><a href="javascript:;" id="m-top-back"></a></div>')
  // 滚动监听显示隐藏并且返回顶部
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
}

backTop()