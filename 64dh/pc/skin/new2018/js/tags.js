/*开发豆原创源码，唯一官网：www.kaifadou.com*/
 $(function(){	
var startDate = new Date(tagspage.time.replace(/\-/g, "\/"));
	var endDate = new Date();
	var days=Math.floor((endDate-startDate)/(24*3600*1000));
	if(days>8){
		console.log('重新生成')
		huanCun("keyword=" + tagspage.name + "&ismake=1")//执行缓存
	}

 });

 function huanCun(dataCont) {	
	
	$.ajax({
		type: "Get",
		url: "/tags.asp",
		data: dataCont,
		success: function(msg){				
		},error:function(){
		}
	});	
} 
caipp3()

function caipp3(){
	//搜索列表专用
	var caipiaoMgc = ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
	var titname = tagspage.name;
	for(s=0;s<caipiaoMgc.length;s++){
		if (titname.indexOf(caipiaoMgc[s]) != -1) {	
			$('.g-font-tig').html('TAGES: <font color="red">0</font> 个结果已找到，<font color="red">1-100 </font>');
			$('.list_wrap').html('<p style="font-size:16px; text-align:center;line-height: 350px">暂无相关内容</p>')
			$('title').text('暂无相关内容');
			$('.g-nav').html('<span></span>当前位置：<a href="/">首页</a>  →  <font>Tags标签合集</font>')
			$('.g-on-link').html('<ul><li class="m-hover"><a href="javascript:void(0);"><span>所有软件</span></a></li>    </ul>')
		}
	}
}