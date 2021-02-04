//获取Cookies
var isUser = getCookie('islogon','',';'),storage=window.localStorage;
window.onload = function(e){
	login();
	if($('#content').length > 0) $(window).one('scroll',function(){getDecode();});
	$('#intro_win .btn_small').click(function(){$('#intro_win').addClass('hidden');});
	if($('.flt_setting').length > 0){
		 $('.ui_close').click(function(){$('.flt_setting').hide();});
	}
	if($('#qiushu').length > 0){
	   $('#qiushu').click(function(){
		   $('.qiushu').show();getXy('.qiushu','#qiushu',45);
		   $('.button').unbind('click').click(function(event){
			   $('.flt_setting').hide();setQiushu();
		  });
	  });
	}
	$('.logBtn').unbind('click').on('click',function(){getLogin();});
	$('#readerlist').on('click','#more-chapter',function(){getChapter();});
	if($('.lazyload').length > 0) isload();
}
function init(type){
	var bid = $('body').attr('data-bid') || 0;
	if(bid > 0){
		$('.setErr').click(function(){
			if(isUser){
				var isw = $('body').width() - 1000;
				$('.error').show();$('.flt_setting').css("top",$(this).offset().top+40 + "px").css("right",isw/2 + 30 +"px");
				$('.setError a').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
				});
			}else{goLogin();}
		});
		/*推荐票*/
		$('#topVote').unbind('click').click(function(){if(isUser){topVote(bid);}else{goLogin();}});
		$('.topVote').unbind('click').click(function(){if(isUser){topVote(bid);}else{goLogin();}});
		if(type == "book"){
			$('#addBook').unbind('click').click(function(){if(isUser){addBook(bid);}else{goLogin();}});
			$('#downBook').click(function(){if(isUser){downBook(bid);}else{goLogin();}});
			$('#showtip').click(function(){
				$('#intro_win').removeClass('hidden').css("top",$('#showtip').offset().top+50 + "px").css("left",($('body').width() - 990)/2 + 200 +"px");
			});
		}
		if(type == 'chapter'){
			var cid = $('body').attr('data-cid') || 0,book = $('#book').text(),chapter = $('.title h1 em').text();
			$('#repair').unbind('click').click(function(){repair(bid,cid);});
			/*快捷翻页*/
			var nextUrl = $('.jumptop a').eq(4).attr('href');
			var preview = $('.jumptop a').eq(0).attr('href');
			var listUrl = $('.jumptop a').eq(2).attr('href');
			$(document).keydown(function(event){
				if(event.keyCode == 37) document.location = preview;
				if(event.keyCode == 39) document.location = nextUrl;
				if(event.keyCode == 13) document.location = listUrl;
			});
			$('.addMark').unbind('click').click(function(){if(isUser){addMark(bid,cid);}else{goLogin();}});
			var book = {name:book,author:author = $('.author').text(),bid:bid,cid:cid,chapter:chapter,classn:classn = $('#nclass').text()};
			storage.setItem('book_'+bid, JSON.stringify(book));
			var books = storage.getItem('bookList');
			if(books==""||books==null){
				books=bid
			}else{
				if(books.indexOf(bid) !=-1){
					books="A"+books+"A";
					books=books.replace(bid,"").replace("$$","$").replace("$A","").replace("A$","").replace(/A/g,"");
				}
				if(books==""||books==null){books=bid}else{books=bid+"$"+books}
			}
			storage.setItem('bookList',books);initRead();
		}
	}
}
function getXy(a,b,x){$(a).css("top",$(b).offset().top+x + "px").css("left", $(b).offset().left+"px");}
function isShow(str){
	var isw = ($('body').width() - 990)/2 + 500;
	var ish = ($(window).height() - 60)/2 + $(document).scrollTop();
	$('.show').html(str).show().css("top",ish + "px").css("left",isw - ($('.show').width()/2) - 50 +"px").fadeTo(2000,0.4,function(){
		$(this).removeAttr("style");
	});
}
function getChapter(){
	var bid = $('body').attr('data-bid') || 0;
	var page = $('#more-chapter').attr('data-id') || 1;
	var xhr = $.ajax({
		async: true,
		type: "POST",
		url: "/api/",
		data:{action:"list",bid:bid,page:page},
		timeout: 15000,
		dataType : "json",
		beforeSend: function(xhr){$("#loading").show().css("top",$("#more-chapter").offset().top -50 + "px").css("left",($('body').width() - 1000)/2 + 500+"px");},
		success: function(data){
			var json = eval(data.data),html="";
			for(var i=0; i<json.length; i++){
				html += '<li><a href="/chapter/'+bid+'/'+(json[i].id - bid)+'" target="_blank">'+json[i].cN+'</a> '+json[i].uT+'</li>';
			}
			console.log("value:"+data.page);
			if(Number(data.page) > 1) html += '<div id="more-chapter" data-id="'+data.page+'">查看隐藏章节('+data.count+')</div>';
			$("#more-chapter").before(html).remove();
			$("#loading").hide();
		}
	});
}
function setError(){
	$(".error").hide();
	$.post("/api/",{
		action:"reg",
		mold:$('a[class="active"]').attr('data-err'),
		bid:$('body').attr('data-bid'),
		book_a:ToNative($('#book').text()),
		book_b:ToNative($("textarea[name='error-info']").val()),
		book_c:ToNative($('.title h1 em').text())
	},
	function(data){isShow(data);});
}
function topVote(bid){
	$.post("/api/",{action:"groom",bid:bid},function(data){isShow(data);});
}
function addMark(bid,cid){
	$.post("/api/",{action:"user-marks",bid:bid,zid:cid},function(data){isShow(data);});
}
function addBook(bid){
	$.post("/api/",{action:"user-add",bid:bid},function(data){isShow(data);});
}
function goLogin(){isShow('注册会员，享受下载，收藏等功能！');}
function getLogin(){
	$.post("/user/login/",{
		action:"login",
		user:ToNative($("input[name='username']").val()),
		pass:ToNative($("input[name='password']").val()),
		jump:unescape(location.href)},
		function(data){$("#login").append(data);
	});
}
function setQiushu(){
	$.post("/api/",{
		action:"reg",
		mold:3,
		book_a:ToNative($("input[name='book_a']").val()),
		book_b:ToNative($("input[name='book_b']").val()),
		book_c:ToNative($("input[name='book_c']").val())
	},
	function(data){isShow(data);});
}
function ToNative(str){
	var native = str.split(""),ascii = "";
	for (var i = 0; i < native.length; i++){
		var code = Number(native[i].charCodeAt(0));
		var charAscii = code.toString(16);
		charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
		ascii += "\\u" + charAscii;
	}
	return ascii;
}
function login(){
	var nickName=JSON.parse(storage.getItem('username'));
	var level=unescape(isUser).split('.')[2]-1,mss=Number(getCookie('mss','','; ')),isfont;
	if(mss>0){isfont="#ff0000"}else{isfont="#666"}
	if(nickName){
		$("#login").append("<li>Hi，"+nickName+"（<font color=\"red\">Lv"+level+"</font>） 积分 <font color=\"#3993d1\">"+getCookie('point','',';')+" </font>点 |</li><li><a href=\"/user/account/\" target=\"_blank\">个人中心</a> |</li><li><a href=\"/user/bookcase/\" target=\"_blank\">我的书架</a> |</li><li><a href=\"/user/message/\" target=\"_blank\">收信箱(<font color="+isfont+">"+mss+"</font>)</a> |</li><li><a href=\"/user/login/logout/\">退  出</a></li>");
	}else{
		$("#login").append("<form name=\"LoginFrom\" method=\"post\"><li>账号：<input class=\"input1\" type=\"text\" id=\"username\" name=\"username\" autocomplete=\"on\"></li><li>密码：<input class=\"input1\" id=\"password\" type=\"password\" name=\"password\" autocomplete=\"off\"></li><li><input type=\"button\" value=\"登 录\" class=\"logBtn\"></li><li><a href=\"/user/reg/\">免费注册</a></li><li><a href=\"/user/getpass/\">忘记密码</a></li></form>");
	}
}

function downBook(bid){
	var xhr = $.ajax({
		async: true,
		type: "GET",
		url: "/ajax/down/",
		data:{id:bid},
		timeout: 60000,
		beforeSend: function(xhr){$("#loading").show();},
		success: function(data){
			$("#loading").hide();
			if(data === "ok"){
				window.location.href = "/ajax/down/?action=down&id="+bid;
			}else{
				isShow(data);
			}
		},
		complete: function (XMLHttpRequest,status){
			if(status == 'timeout'){
				xhr.abort();$("#loading").hide();
				isShow("生成中请稍后！");
			}
		}
	});
}

function repair(bid,cid){
	var xhr = $.ajax({
		async: true,
		type: "POST",
		url: "/api/repair/",
		data:{"id":cid,"bid":bid},
		timeout: 15000,
		beforeSend: function(xhr){$("#loading").show();},
		success: function(data){
			$("#loading").hide();isShow(data);
			if(data.indexOf("成功")>0){location.reload();}
		},
		complete: function (XMLHttpRequest,status){
			if(status == 'timeout'){xhr.abort();alert("网络超时，请重试！");location.reload();}
		}
	});
}


function getCookie(Name,Cookies,fei){
	var search = Name + "=",returnvalue = "";
	if(!Cookies){Cookies = document.cookie}
	if(Cookies.length > 0){
		offset = Cookies.indexOf(search);
		if(offset != -1){
			offset += search.length;
			end = Cookies.indexOf(fei, offset);
			if(end == -1)
			end = Cookies.length;
			returnvalue = Cookies.substring(offset, end);
		}
	} 
	return returnvalue;
}
function initRead(){
	var _self = this;
	var color = [{c:'#e5f1e5',t:'淡绿'},{c:'#f2e8c8',t:'蛋黄'},{c:'#f8f3e9',t:'卡其'},{c:'#f5e4e4',t:'粉红'},{c:'#dcdcdc',t:'冷灰'},{c:'#e1eef2',t:'碧云'},{c:'#cce8cf',t:'草绿'},{c:'#32373b',t:'夜间'}];
	var family = [{c:'宋体',t:'宋体'},{c:'黑体',t:'黑体'},{c:'楷体',t:'楷体'},{c:'微软雅黑',t:'雅黑'},{c:'方正启体简体',t:'启体'}];
	var size = [20,22,24,26,28,30,32,34];
	var cookie_color = parseInt(storage.getItem('read_color')) || 4;
	var cookie_font = parseInt(storage.getItem('read_font')) || 28;
	var cookie_family = parseInt(storage.getItem('read_family')) || 2;
	cookie_color = cookie_color-1;cookie_family=cookie_family-1;
	$('body').css('background',color[cookie_color].c);
	if(cookie_color == 7){
		$('#content').css("color","#999");$('.comments_r').css("border","1px solid #747576");
		$('.comments_r .h3').css({"background":"#32373b","border-top":"2px solid #404e57","border-bottom":"1px solid #4d4d4d"});
		$('.jump a').css("background","#c1c1c1");
	}
	$('#content').css({"font-size":cookie_font+"px","font-family":family[cookie_family].c});
	$(document).bind('click',function(e){
		var tid = e.target.id;
		if(tid == "select_color" || tid== "select_size" || tid== "select_family"){	
		}else{
			$('.text_bg,.text_bg2,.text_bg3').addClass('hidden');
		}
	});
	$('#select_color_txt em').text(color[cookie_color].t);
	var _tmp1 = [];
	for(var i =0;i<color.length;i++){
		var sel = cookie_color==i?"class=selected":"";
		_tmp1.push('<li '+sel+'><span class="square" style="background-color:'+color[i].c+';"></span>'+color[i].t+'</li>');
	}
	$('.text_bg ul').append(_tmp1.join(""));
	$('#select_color').click(function(){$(".text_bg").toggleClass('hidden');$(".text_bg2").addClass('hidden');$(".text_bg3").addClass('hidden');});
	$('.text_bg li').hover(function(){$(this).addClass('hover');},
	function(){$(this).removeClass('hover');
	});
	$('.text_bg li').bind('click',function(){
		var index = $(this).index();
		$('.text_bg li').removeClass('selected');
		$(this).addClass('selected');
		$(".text_bg").addClass('hidden');
		$('#select_color_txt em').text(color[index].t);
		$('body').css('background-color',color[index].c);
		if(index == 7){$('#content').css('color',"#999");}else{$('#content').css('color',"");}
		storage.setItem('read_color', index+1);
	});
	$('#select_size_txt em').text(cookie_font+'号文字');
	var _tmp2 = [];
	for(var i =0;i<size.length;i++){
		var sel = cookie_font==size[i]?"class=selected":"";
		_tmp2.push('<li '+sel+'><span class="square_size" style="font-size:'+size[i]+'px;">Α</span>'+size[i]+'号</li>');
	}
	$('.text_bg2 ul').append(_tmp2.join(""));
	$('#select_size').click(function(){$(".text_bg2").toggleClass('hidden');$(".text_bg").addClass('hidden');$(".text_bg3").addClass('hidden');});
	$('.text_bg2 li').hover(function(){$(this).addClass('hover');},
	function(){$(this).removeClass('hover');});
	$('.text_bg2 li').bind('click',function(){
		var index = $(this).index();
		$('.text_bg2 li').removeClass('selected');
		$(this).addClass('selected');
		$(".text_bg2").addClass('hidden');
		$('#select_size_txt em').text(size[index]+'号文字');
		$('#content').css('font-size',size[index]+"px");
		storage.setItem('read_font', size[index]);
	});	
	$('#select_family_txt em').text(family[cookie_family].t);
	var _tmp3 = [];
	for(var i =0;i<family.length;i++){
		var sel = cookie_family==i?"class=selected":"";
		_tmp3.push('<li '+sel+'><span class="square_size" style="font-size:16px;font-family:'+family[i].c+';">妙</span>'+family[i].t+'</li>');
	}
	$('.text_bg3 ul').append(_tmp3.join(""));
	$('#select_family').click(function(){$(".text_bg3").toggleClass('hidden');$(".text_bg2").addClass('hidden');$(".text_bg").addClass('hidden');});
	$('.text_bg3 li').hover(function(){$(this).addClass('hover');},
	function(){$(this).removeClass('hover');});
	$('.text_bg3 li').bind('click',function(){
		var index = $(this).index();
		$('.text_bg3 li').removeClass('selected');
		$(this).addClass('selected');
		$(".text_bg3").addClass('hidden');
		$('#select_family_txt em').text(family[index].t);
		$('#content').css('font-family',family[index].c);
		storage.setItem('read_family',index+1);
	});
}
function isload(){$('.lazyload').lazyload({original:'_src',placeholder:'/images/ajax-loading.gif',threshold:0,effect:'fadeIn',effectspeed:'200',onerror:'/images/nopic.gif'});}
var _hmt = _hmt || [];
(function(){
	var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?token...";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);
	var bp = document.createElement('script');bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp, s);
})();

