/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
  $('.g-list-box ul').each(function(){
      $('li:lt(3)',this).addClass('fistClass');
      $('.g-list-box ul li').eq(0).addClass('one');
      $('.g-list-box ul li').eq(1).addClass('two');
      $('.g-list-box ul li').eq(2).addClass('three');
    
  });
   
  $(".g-collection-dome").slide({mainCell:".m-dome-scroll ul",autoPage:true,effect:"left",scroll:1,vis:4});//精选合集
	
	var numb = $(".g-list-box ul li").length;
	$("#m-num").append(numb+"个软件");
	
	$(".cell-img").mouseover(function(e){				
		var pimg = $(this).attr("preview");
		var tooltip = "<div id='tooltip'><img src='" + pimg + "' /></div>";
		$("body").append(tooltip);
		var x = e.pageX+20;
		var y = e.pageY+20;	
		var bwh = $(window).width();
		var pimgwh = $("#tooltip").find("img").width();
		var dif = bwh-x;
		$("#tooltip").css({"left":x,"top":y})
		if(pimgwh>dif){
				$("#tooltip").css({"left":x-pimgwh,"top":y})
			}
		
	});
	$(".cell-img").mouseout(function(){
			$("#tooltip").remove();
		})
	




});