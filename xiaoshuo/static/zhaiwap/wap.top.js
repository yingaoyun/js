var isUser = getCookie('islogon'),storage=window.localStorage,isBaidu=0,isChrome=1;
window.onload = function(e){
	$('.bs').click(function(){
		console.log("isUser:"+isUser);
		if(isUser){location.href = "/user/bookcase/";}else{goLogin();}
	});
	if($('.book-img').length > 0){isload();}
	/*分类筛选*/
	if($('#sch-sel').length > 0){
		$('.pg-next').click(function(){location.href = $('.pg-next').attr('data-url');});
		$('#screen').click(function(){
			$('#sch-sel').show();
			var shuUrl = location.href.split('/')[4];
			var id = shuUrl.split('_')[0];
			var cid = shuUrl.split('_')[3];
			$('#subclass #c'+id).removeClass('hidden');
			$('#c'+id+' a').eq(cid).addClass('cur').siblings().removeClass('cur');;
		});
		$('.sch-sel a').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			id = $('#broad a[class="cur"]').attr('data-id') || 0;
			if(id > 0) $('#subclass #c'+id).removeClass('hidden').siblings().addClass('hidden');
		});
		$('.last-submit .submit').click(function(){
			var cid = $('#broad a[class="cur"]').attr('data-id');
			var cla = $('#c'+cid+' a[class="cur"]').attr('data-id') || 0;
			var sta = $('#state a[class="cur"]').attr('data-id');
			var word = $('#word a[class="cur"]').attr('data-id');
			var order = $('#order a[class="cur"]').attr('data-id');
			var jumpUrl = "/shuku/"+cid+"_"+sta+"_0_"+cla+"_"+order+"_1_"+word+"_0"
			console.log("shuku:"+jumpUrl);
			location.href = jumpUrl;
		});
	}
	/*列表部分*/
	if($('#chapter-list').length > 0){
		$('.scroll_bottom').click(function(){$('html,body').animate({scrollTop:$('.copyright').offset().top},800);});
		$('.pg-next').click(function(){location.href = $('.pg-next').attr('data-url');});
	}
	if($('.flt_setting').length > 0){
		 $('.ui_close').click(function(){$('.flt_setting').hide();});
		 if($('#qiushu').length > 0){
			 $('#qiushu').click(function(){
				 $('.qiushu').show();
				 $('.button').click(function(){
					 $('.flt_setting').unbind('click').hide();setQiushu();
				});
			});
		 }
	}
}
function init(type){
	var bid = $('body').attr('data-bid') || 0;
	if(bid > 0){
		$('.setErr').click(function(){
			if(isUser){
				$('.error').show();
				$('.setError a').click(function(){
					$(this).addClass('active').siblings().removeClass('active');
				});
			}else{goLogin();}
		});
		$('#topVote').unbind('click').click(function(){if(isUser){topVote(bid);}else{goLogin();}});
		if(type == 'chapter'){
			var cid = $('body').attr('data-cid') || 0,book = $('#book').text(),chapter = $('.chapter-name').text();
			$(window).one('scroll',function(){getDecode();});
			/*快捷翻页*/
			var nextUrl = $('.nextUrl').attr('data-url'),listUrl = $('.book_clist a').eq(1).attr('href');
			$('.nextUrl').click(function(){location.href = nextUrl;});
			/*预加载*/
			setTimeout(function(){$(window).scroll(presTrain);},120000);
			/*背景设置*/
			var _id = $('.chapter-box div').eq(2).attr('id');
			$('.chapter-box').click(function(){$('.layout-con').hide();});
			$('.setColor').click(function(){$('.layout-con').show();});
			$('.setstyle a').click(function(){setStyle($(this).attr('class'));});
			$('.setsize span').click(function(){
				if ($(this).hasClass('disabled')) return;
				setSize(parseInt($('#font-size').text()) + ($(this).hasClass('dec') ? -2 : 2));
			});
			$('.setsize .default').click(function(){setStyle('blue');setSize(16);});
			var setStyle = function(v){
				if (typeof v == 'undefined') v = storage.getItem('setStyle') || 'blue';
				$('body').attr('class', v);
				$('.setstyle a.'+v).addClass('active').siblings().removeClass('active');
				storage.setItem('setStyle', v);setCookie('setStyle',v,0);
			};
			var setSize = function(v){
				if (typeof v == 'undefined') v = parseInt(storage.getItem('setSize')) || 16;
				$('#'+_id).css('font-size', v);
				if (v<=12) $('.setsize .dec').addClass('disabled');
				if (v>=50) $('.setsize .inc').addClass('disabled');
				$('#font-size').text(v);
				storage.setItem('setSize', v);setCookie('setSize',v,0);
			};
			setStyle();setSize();
			if(cid > 0){
				$('#repair').unbind('click').click(function(){repair(bid,cid);});
				$('.addMark').unbind('click').click(function(){if(isUser){addMark(bid,cid);}else{goLogin();}});
				/*阅读记录*/
				var book = {name:book,author:author = $('.hidden').attr('data-author'),bid:bid,cid:cid,chapter:chapter,classn:classn = $('.hidden').attr('data-class')};
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
				storage.setItem('bookList',books);
			}
			if(/UCBrowser|XiaoMi|baidu/i.test(navigator.userAgent)){$("#"+_id).prepend("<p style=\"color:#3993d1;\">强烈推荐：Chrome浏览器阅读本站！</p>");}
		}
		if(type == "book"){
			$('#addBook').unbind('click').click(function(){if(isUser){addBook(bid);}else{goLogin();}});
			$('#downBook').click(function(){if(isUser){downBook(bid);}else{goLogin();}});
			if($('#show-more').length > 0){
				if($('.book-intro')[0].scrollHeight > 100){
					$('#show-more').css('display','block');
					$('#show-more em').click(function(){
						if ($(this).text() == '[+展开]') {
							$(this).text('[-收起]');
							$('.book-intro').height('auto');
							$('.book-intro').css('max-height','none');
						}else{
							$(this).text('[+展开]');
							$('.book-intro').height(96);
						}
					});
				}
			}
		}
	}
}
function isShow(str){
	var isw = $(window).width();
	var ish = ($(window).height() - 40)/2 + $(document).scrollTop();
	$('.show').html(str).show().css("top",ish + "px").css("left",(isw - $('.show').width())/2 - 15 + "px").fadeTo(2500,0.4,function(){
		$(this).removeAttr("style");
	});
}
function presTrain(){
	var _Height = $(document).height();
	var _Top = $(this).scrollTop();
	var _Url = '/login.html';
	if(_Top > (_Height - _Height/5)){
		var xhr = $.ajax({async: true,type: "GET",url: _Url,timeout: 10000});console.log('loading:'+_Url);
		$(window).unbind('scroll',presTrain) 
	} 
}
function diya(){
	setTimeout(function(){
		var _isTan = Number(getCookie('isTan')),_h;
		if($("qq").length > 0){
			var _id = $("qq").eq(0).attr('id');
			if(_id){
				$('#ascnoid').before("<a id='clnone'></a>");
				var _style = $("qq a").eq(0).css('z-index');
				if(_style == 2147483647){
					_h = parseInt($("qq a").eq(0).css("height"));
					if(_h > 10){
						if(_isTan > 0){$("qq a").eq(0).css({'height':'100px'});}else{setCookie('isTan',_isTan+1,1);}
						console.log(_isTan+'_'+_h);
					}
				}
				$('#clnone').click(function(){$("#"+_id).remove();$("#Coiuknl11_L").remove();});
			}
		}else if($('#fckkf').length > 0){
			_h = parseInt($('#fckkf').css("height"));
			if(_h > 10){
				if(_isTan > 0){$('#fckkf').css({'height':'100px'});}else{setCookie('isTan',_isTan+1,1);}
				console.log(_isTan+'_'+_h);
			}
			if($('#clksksf').length > 0) $('#clksksf').before("<div id='clnone'></div>");
			$('#clnone').click(function(){$("#fckkf").remove();$("#undefined").remove();$("#Coiuknl11_L").remove();});
		}else if($('.geretre').length > 0){
			_h = parseInt($('.geretre span').css("height"));
			console.log(_isTan+'_'+_h);
			if(_h > 10){
				if(_isTan > 0){$('.geretre span').css({'height':'100px'});}else{setCookie('isTan',_isTan+1,1);}
			}
		}else{
			var _style = $("div").eq(0).attr('class');
			if(_style.indexOf('_') > -1){
				var _val;
				$("."+_style+" a").each(function(){
					_val = $(this).css('z-index');
					if(_val == 1000){
						_h = parseInt($(this).css('height'));
						if(_h > 10){
							if(_isTan > 0){$(this).css({'height':'100px'});}else{setCookie('isTan',_isTan+1,1);}
							console.log(_isTan+'_'+_h);
						}
					}
					if(_val == 88899) $(this).before("<a id='clnone'></a>");
				});
				$('#clnone').click(function(){$("."+_style).remove();$("#baseHeight").remove();});
			}
		}
	},1300);
}
function diyb(){
	setTimeout(function(){
		var lid=$("div").last().attr('id');console.log("lid:"+lid);
		if(lid){$('img').last().before("<a id='clnonea'></a>");}
		$('#clnonea').click(function(){$("#"+lid).removeAttr("style").hide();$("#"+lid+"p").removeAttr("style").hide();});
	},1200);
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
function goLogin(){window.location.href = "/login.html?jump="+encodeURIComponent(window.location.href);}
function getLogin(){
	$.post("/user/login/",{
		action:"login",
		user:ToNative($("input[name='username']").val()),
		pass:ToNative($("input[name='password']").val()),
		jump:getQuery('jump')},
		function(data){$(".account").append(data);
	});
}
function getReg(){
	$.post("/user/login/",{
		action:"reg",
		user:ToNative($("input[name='username']").val()),
		pass:ToNative($("input[name='password']").val()),
		repass:ToNative($("input[name='repassword']").val()),
		email:ToNative($("input[name='email']").val()),
		jump:getQuery('jump')},
		function(data){$(".account").append(data);
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
function topVote(bid){
	$.post("/api/",{action:"groom",bid:bid},function(data){isShow(data);});
}
function addMark(bid,cid){
	$.post("/api/",{action:"user-marks",bid:bid,zid:cid},function(data){isShow(data);});
}
function addBook(bid){
	$.post("/api/",{action:"user-add",bid:bid},function(data){isShow(data);});
}
function setError(){
	$(".error").hide();
	$.post("/api/",{
		action:"reg",
		mold:$('a[class="active"]').attr('data-err'),
		bid:$('body').attr('data-bid'),
		book_a:ToNative($('#book').text()),
		book_b:ToNative($("textarea[name='error-info']").val()),
		book_c:ToNative($('.chapter-name').text())
	},
	function(data){isShow(data);});
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
			if(status == 'timeout'){xhr.abort();isShow("网络超时，请重试！");location.reload();}
		}
	});
}
function setCookie(name,value,day){
    var Then = new Date();
	if(day == 1){
		/*当天剩余时间*/
		Then.setTime(Then.getTime() + ((24 - Then.getHours())*60 - Then.getMinutes())*60*1000);
	}else{	
		Then.setTime(Then.getTime() + 30*24*3600*1000);
	}
    document.cookie = name + "="+ escape (value) + ";expires=" + Then.toGMTString()+ ";path=/;";
}
function getCookie(Name){
	var search = Name + "=",returnvalue = "",Cookies = document.cookie;
	if(Cookies.length > 0){
		offset = Cookies.indexOf(search);
		if(offset != -1){
			offset += search.length;
			end = Cookies.indexOf(';', offset);
			if(end == -1)
			end = Cookies.length;
			returnvalue = Cookies.substring(offset, end);
		}
	} 
	return returnvalue;
}
function getQuery(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return unescape(r[2]); return null;
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

function isload(){$('.book-img img').lazyload({original:'data-src',placeholder:'/images/ajax-loading.gif',threshold:0,effect:'fadeIn',effectspeed:'200',onerror:'/images/nopic.gif'});}
/*匿名函数
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(1($){8 2={k:\'y\',f:x,j:0,l:\'D\',v:\'C\',p:\'#\'};$.A.w=1(g){9(g){$.B(2,g||{})}8 5=3;5.t(1(){8 4=3;9(2.f){$(4).6(\'b\',2.f)}$(4).m(\'h\',1(){$(\'<c />\').m(\'E\',1(){$(4).z().6(\'b\',$(4).6(2.k))[2.l](2.v)}).6("b",$(4).6(2.k)).N(\'M\',1(){$(4).6(\'b\',2.p)});4.a=n});9(e(3)){$(3).q("h");3.a=n}L{3.a=Q}});5=d(5);7.P=1(){5.t(1(){9(e(3)){$(3).q("h")}});5=d(5)}};1 e(c){8 s=$(7).H()+$(7).G();8 r=$(7).F()+$(7).K();i s>=$(c).u().J-2.j&&r>=$(c).u().I-2.j};1 d(o){i $(o).d(1(){i!3.a})}})(O);',53,53,'|function|settings|this|self|elements|attr|window|var|if|loaded|src|img|filter|canload|placeholder|options|appear|return|threshold|original|effect|bind|true||onerror|trigger|hold_y|hold_x|each|offset|effectspeed|lazyload|undefined|_0|hide|fn|extend|300|fadeIn|load|height|scrollLeft|width|top|left|scrollTop|else|error|on|jQuery|onscroll|false'.split('|'),0,{}));
*/
function isClose(){
}
if(/baidu/i.test(navigator.userAgent)){isBaidu = 1;}
if(/UCBrowser|XiaoMi|baidu|MQQBrowser|Firefox|Sogou/i.test(navigator.userAgent)){isChrome = 0;}
var _isLun = Number(storage.getItem('isLun'));storage.setItem('isLun', _isLun+1);
function fixed_ba(){
	if(isBaidu === 1){
		baidufixed();
	}else{
		if(isChrome === 0){
			noChromefixed();
		}else{
			isChromefixed();
		}
	}
}
function fixed_bb(){
	if(isBaidu === 1){
		baidufixed();
	}else{
		isChromefixed();
	}
}
function fixed_bc(){
	if(isBaidu === 1){
		baidufixed();
	}else{
		if(isChrome === 0){
			noChromefixed();
		}else{
			isChromefixed();
		}
	}
}

function float_a(){
	
}

function baidufixed(){);}
function noChromefixed(){}
function isChromefixed(){}
/*var _isZhuan = Number(getCookie('isZhuan'));
if(_isZhuan < 6){setCookie('isZhuan',_isZhuan+1,1);}
if(_isZhuan == 5){window.location.href = "https://www.k3425.xyz/rocm?android=ro073&type=1&ios=ro073&all=";}*/
