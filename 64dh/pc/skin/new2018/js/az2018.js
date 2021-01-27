/*开发豆原创源码，唯一官网：www.kaifadou.com*/
//列表页热门最新跳转链接
$(document).ready(function(){  
    $(".wzaa a").each(function(){  
      $(this).find("a:first").addClass("m-hover");    
        $this = $(this);  
        if($this[0].href==String(window.location)){  
            $this.addClass("m-hover");  
        }  
    });  
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
	
	//安卓首页 游戏 软件排行榜
	$(".m-rank-list").each(function(){
		$(this).find("li:first").addClass("m-hover");   
	})
	$(".g-rank-ul").each(function(){
		$(this).find("li i:lt(3)").css("background","#19b5fe");
	})
	$(".m-rank-list ul li").hover(function() {
		$(this).addClass("m-hover").siblings("li").removeClass("m-hover"); 
	
});
	
	
jQuery(".g-box-tab").slide({titCell:".g-top-tab li",mainCell:".g-bottom-tab",titOnClassName:"m-hover"});//腾讯手游
jQuery(".g-tab-dome").slide({mainCell:".g-content ul",autoPage:true,effect:"left",scroll:1,vis:5});//推荐
jQuery(".g-ar-recomd").slide({titCell:".f-game-doem li",mainCell:".g-game-box",titOnClassName:"m-hover"});//安卓游戏
jQuery(".g-gm-rank").slide({titCell:".f-rank-doem li",mainCell:".g-rank-box",titOnClassName:"m-hover"});//游戏排行榜
jQuery(".g-special-box").slide({mainCell:".m-rp-scroll ul",autoPage:true,effect:"left",scroll:1,vis:4});//软件专题
	
	
});


//本类排行
$(function() {
  $(".m-sjph").each(function(){
    $(this).find("li:first").addClass("f-ix");    
  })
  $(".m-sjph ul").each(function(){
    $(this).find("li:lt(3)").addClass('f-t3');
  })
  $(".m-sjph ul li").hover(function() {
    $(this).addClass("f-ix").siblings("li").removeClass("f-ix");  ;
    
  });
  caip()
});





function caip(){

    //彩票敏感词 
    var caipiaoMgc = ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
    for(s=0;s<caipiaoMgc.length;s++){
      var contentText = $(".m-center p").text().replace(/\s+/g,'');
      if(contentText.indexOf(caipiaoMgc[s]) != -1){
        //影藏版块
        var hideBox = '.m-down,.m-keyxh,.m-xgnews,.m-jietu,.m-center img,.g-info-tag';
        console.log(hideBox)
        mgcHide(hideBox);
        
        //替换内容
        var recomdHtml = ''; //编辑推荐html    
        
        var noDownBtnHtml = '<li><a class="m-xiajia" style="background-color:#c8c8c8;" href="javascript:;"><i></i>应用已下架</a></li>'; //下载按钮html

        var replaceDiv = ['','.m-down-ul'];
        var replaceHtml = [recomdHtml,noDownBtnHtml]
        mgcHtml(replaceDiv,replaceHtml);

        //return false;
      }             
      //通过正文处理结束
      //列表屏蔽
      $('.m-softlist li,.m-sjph li,.m-sjhj,.g-hotico li').each(function(){
        var txt = $(this).text();
        if (txt.indexOf(caipiaoMgc[s]) != -1) {
          
          $(this).hide()
        }
      })
        
        //处理屏蔽之后的排序
        $('.m-sjph li').each(function(i){
          $(this).find('i').text(i+1)
        })

    }

}

function mgcHide(objdiv){ //版块影藏,objdiv = 对象
    $(objdiv).hide();
  }

function mgcHtml(objArray,divhtml){ //替换内容,objArray=替换对象[数组]，divhtml=替换内容[数组]
  for(var i = 0; i < objArray.length; i++){
    $(objArray[i]).html(divhtml[i]);

  }
  
}