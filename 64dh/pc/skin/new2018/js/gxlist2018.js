/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
	 //导航点击附加背景
	$(".g-navlist ul li").each(function(){
		var navName = $(this).find("a").text();
		if(gexing.pageName == navName){
			$(this).addClass("hover");	
		}
	})	
	
	
	//添加数字
$(".m-ph-list").each(function(){
	var liSize = $(this).find("li").length;
	for(i=0;i<liSize;i++){
		$(this).find("li em").eq(i).append(i+1);
	}			
	
})
	
	
	
})