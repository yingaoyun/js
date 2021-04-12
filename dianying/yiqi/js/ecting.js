//跟随浮动
    window.onload=
        function(){
            var oDiv = document.getElementById("fixPara"),
                H = 0,
                Y = oDiv        
            while (Y) {
                H += Y.offsetTop; 
                Y = Y.offsetParent;
            }
            window.onscroll = function()
            {
                var s = document.body.scrollTop || document.documentElement.scrollTop
                if(s>H) {
                    oDiv.style = "position:fixed;top:80px;background-color:#fff;border-radius: 8px;"
                } else {
                    oDiv.style = "background-color:#fff;"
                }
            }
        }
	
$(function(){
    $("#tagaContent #bbbe").eq(0).show();
    $("#tag li").click(
        function(){
            $(this).addClass("current").siblings().removeClass("current");
            index = $("#tag li").index(this);
            $("#tagaContent #bbbe").eq(index).fadeIn(800).siblings().hide();
        } 
    )
})
$(function(){
    $("#tagb li").click(
        function(){
            $(this).addClass("current").siblings().removeClass("current");
            index = $("#tagb li").index(this);
            $("#tagbContent div").eq(index).fadeIn(800).siblings().hide();
        } 
    )
})
$(function(){
    $("#tagc li").click(
        function(){
            $(this).addClass("current").siblings().removeClass("current");
            index = $("#tagc li").index(this);
            $("#tagcContent div").eq(index).fadeIn(800).siblings().hide();
        } 
    )
})