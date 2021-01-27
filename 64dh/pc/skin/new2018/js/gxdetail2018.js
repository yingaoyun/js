/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function(){
	//详细页导航点击
	$(".g-navlist ul li").each(function(){
		var navName = $(this).find("a").text();
		if(_pageinfo.pageName == navName){
			$(this).addClass("hover");	
		}
	})	
	
	//添加名称
	$("#u-name").each(function(){
		//var txtname = $("#wzname a:eq(2)").html();	
		$(".m-tith4 #u-name ").html(_pageinfo.pageName);				   
	})
	
	
	
	
})


//头像专用
$(function(){
	var touimgnum = $("#content img").length;
	var toutext = $("#content p").text();
	var imgurl = '';
	
	if(touimgnum>0){
		$("#content").wrapAll('<div class="m-touxiang m-imgul" style="padding:10px 20px 15px 20px"><div class="clearfix m-imgul"></div></div>');
		$(".m-touxiang").prepend('<div class="m-tabimg clearfix" id="m-tabs" style="padding:8px 0"><div class="f-fl img_menu"><a href="javascript:;" class="m-hover" id="b_pic">大图</a><a href="javascript:;" id="s_pic">小图</a></div><div class="f-fr img_menu"><a href="javascript:;" class="m-hover" id="f_pic">方图</a><a href="javascript:;" id="r_pic">圆图</a></div></div>');
		$('.m-imgul p').each(function (i) {
            // 将原始文字部分隐藏
            imgurl = $(this).find('img').length;
            if (imgurl < 1) {
                $(this).hide();
            }
        });
		$('.img_menu').each(function () {
            // 切换效果
            $(this).find('a').click(function () {
                $(this).siblings().removeClass('m-hover');
                $(this).addClass('m-hover');
            });
        });


		$("#content img").each(function(i){
			 imgurl = $(this).attr("src")
			 if(imgurl.indexOf('qqtn.com')!= -1){ 
			 var imguleft = imgurl.split(".")[2].split("_")[0].substr(11,36);
			 var imgu =  "https://pic.qqtn.com"+imguleft+"."+imgurl.split(".")[3];
			 var imgurt = imgurl.split("!")[0]
			 $(this).parent('p').attr('style','text-align: center;float:left;width:23%;padding:1%;margin:0;');
			 $(this).attr('style','max-width:100%');
			 //if(imgurl.split(".")[3] == "gif"){
			 	$(this).attr('data-original',imgurt);
			 	$(this).wrap('<a href="javascript:;" class="swipebox s-img" ></a>');
			 //}else{
			 	//$(this).attr('data-original',imgu)
			 	//$(this).wrap('<a href="'+imgu+'" class="swipebox s-img"></a>')
			 //}
			 
			
			}

		});
		$("#b_pic").click(function(){//大图操作
			$("#content p").css({ "width": "23%", "padding": "1%" });
		})
		$("#s_pic").click(function(){//小图操作
			$("#content p").css({ "width": "18%", "padding": "1%" });
		})
		$("#f_pic").click(function(){//方图操作
			$("#content p img").css("border-radius","6px");
		})
		$("#r_pic").click(function(){//圆图操作
			$("#content p img").css("border-radius","50%");
		})
		// 处理内容的文字
        $('.g-cont p:last').after('<div class="m-imgtxt" style="margin:0;padding:5px 1.2% 0">'+toutext+'</div>');
		
		
		$(".m_qmview img").each(function(){
		var strli="<li ></li>";				
		$(this).wrapAll(strli);				
	    })
	

	}		
})





