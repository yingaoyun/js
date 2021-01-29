function setCookies(cookieName,cookieValue,minutes){ let today = new Date(); let expire = new Date(); let exp=minutes*1000*60||1000*3600*24*365;expire.setTime(today.getTime() + exp); document.cookie = cookieName+'='+escape(cookieValue)+ ';expires='+expire.toGMTString()+'; path=/'; } 
function readCookies(cookieName){ let theCookie=''+document.cookie; let ind=theCookie.indexOf(cookieName); if (ind==-1 || cookieName=='') return ''; let ind1=theCookie.indexOf(';',ind); if (ind1==-1) ind1=theCookie.length; let rico_ret = theCookie.substring(ind+cookieName.length+1,ind1).replace(/%/g, '%25'); return unescape(decodeURI(rico_ret)); }


function login() {
    if ($.cookie('ss_username')) {
        document.writeln("<a href='/recentread/'>阅读历史</a> | <a href='/bookcase/' title='我的书架'>会员书架</a> | <a href='/logout/' title='退出登录'>退出</a>");
    } else {
        document.writeln("<a href='/recentread/'>阅读历史</a> | <a href='/login/'>登录</a> | <a href='/register'>注册</a>");
    }
}


// ie7以下的浏览器提示
var isIE = !!window.ActiveXObject;
var isIE6 = isIE && !window.XMLHttpRequest;
var isIE8 = isIE && !!document.documentMode;
var isIE7 = isIE && !isIE6 && !isIE8;
function tip_ie7() {
    if (isIE && (isIE6 || isIE7 || isIE8)) {
        document.writeln("<div class=\"tip-browser-upgrade\">");
        document.writeln("    你正在使用IE低级浏览器，如果你想有更好的阅读体验，<br />强烈建议您立即 <a class=\"blue\" href=\"http://windows.microsoft.com/zh-cn/internet-explorer/download-ie\" target=\"_blank\" rel=\"nofollow\">升级IE浏览器</a> 或者用更快更安全的 <a class=\"blue\" href=\"https://www.google.com/intl/zh-CN/chrome/browser/?hl=zh-CN\" target=\"_blank\" rel=\"nofollow\">谷歌浏览器Chrome</a> 。");
        document.writeln("</div>");
    }
}

//阅读页键盘操作事件
function ReadKeyEvent() {
    var index_page = $("#linkIndex").attr("href");
    var prev_page =  $("#linkPrev").attr("href");
    var next_page = $("#linkNext").attr("href");
    function jumpPage() {
        var event = document.all ? window.event : arguments[0];
        if (event.keyCode == 37) document.location = prev_page;
        if (event.keyCode == 39) document.location = next_page;
        if (event.keyCode == 13) document.location = index_page;
    }
    document.onkeydown = jumpPage;
}

//是否移动端
function is_mobile() {
    var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
    var u = navigator.userAgent;
    if (null == u) {
        return true;
    }
    var result = regex_match.exec(u);
    if (null == result) {
        return false
    } else {
        return true
    }
}


//历史记录
var _num = 100;

function LastRead(){
	this.bookList="bookList"
	}
LastRead.prototype={	
	set:function(bid,tid,title,texttitle,author,sortname){
		if(!(bid&&tid&&title&&texttitle&&author&&sortname))return;
		var v=bid+'#'+tid+'#'+title+'#'+texttitle+'#'+author+'#'+sortname;
		this.setItem(bid,v);
		this.setBook(bid)		
		},
	
	get:function(k){
		return this.getItem(k)?this.getItem(k).split("#"):"";						
		},
	
	remove:function(k){
		this.removeItem(k);
		this.removeBook(k)			
		},
	
	setBook:function(v){
		var reg=new RegExp("(^|#)"+v); 
		var books =	this.getItem(this.bookList);
		if(books==""){
			books=v
			}
		 else{
			 if(books.search(reg)==-1){
				 books+="#"+v				 
				 }
			 else{
				  books.replace(reg,"#"+v)
				 }	 
			 }	
			this.setItem(this.bookList,books)
		
		},
	
	getBook:function(){
		var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
		var books=Array();
		if(v.length){
			
			for(var i=0;i<v.length;i++){
				var tem=this.getItem(v[i]).split('#');	
				if(i>v.length-(_num+1)){
					if (tem.length>3)	books.push(tem);
				}
				else{
					lastread.remove(tem[0]);
				}
			}		
		}
		return books		
	},
	
	removeBook:function(v){		
	    var reg=new RegExp("(^|#)"+v); 
		var books =	this.getItem(this.bookList);
		if(!books){
			books=""
			}
		 else{
			 if(books.search(reg)!=-1){	
			      books=books.replace(reg,"")
				 }	 
			 
			 }	
			this.setItem(this.bookList,books)		
		
		},
	
	setItem:function(k,v){
		if(!!window.localStorage){		
			localStorage.setItem(k,v);		
		}
		else{
			var expireDate=new Date();
			  var EXPIR_MONTH=30*24*3600*1000;			
			  expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH)
			  document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/";		
			}			
		},
		
	getItem:function(k){
		var value=""
		var result=""				
		if(!!window.localStorage){
			result=window.localStorage.getItem(k);
			 value=result||"";	
		}
		else{
			var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)");
			var result=reg.exec(document.cookie);
			if(result){
				value=decodeURIComponent(result[2])||""}				
		}
		return value
		
		},
	
	removeItem:function(k){		
		if(!!window.localStorage){
		 window.localStorage.removeItem(k);		
		}
		else{
			var expireDate=new Date();
			expireDate.setTime(expireDate.getTime()-1000)	
			document.cookie=k+"= "+";expires="+expireDate.toGMTString()							
		}
		},	
	removeAll:function(){
		if(!!window.localStorage){
		 window.localStorage.clear();		
		}
		else{
		var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array();
		var books=Array();
		if(v.length){
			for( i in v ){
				var tem=this.removeItem(v[k])				
				}		
			}
			this.removeItem(this.bookList)				
		}
		}	
	}
function showbook(){
	var showbook=document.getElementById('showbook');
	var bookhtml='';
	var books=lastread.getBook();
	var books=books.reverse();
	if(books.length){
		for(var i=0 ;i<books.length;i++){
			bookhtml+='<div class="bookbox"><div class="p10"><span class="num">'+(i+1)+'</span><div class="bookinfo"><h4 class="bookname"><a href="'+books[i][0]+'">'+books[i][2]+'</a></h4><div class="cat">分类：'+books[i][5]+'</div><div class="author">作者：'+books[i][4]+'</div><div class="update"><span>已读到：</span><a href="'+books[i][1]+'">'+books[i][3]+'</a></div></div><div class="delbutton"><a class="del_but" href="javascript:removebook(\''+books[i][0]+'\')">删除</a></div></div></div>';
		}
	}else{
		bookhtml+='<div style="height:100px;line-height:100px; text-align:center">还木有任何书籍( ˙﹏˙ )</div>'
	}
	showbook.innerHTML=bookhtml;
}
function removebook(k){
	lastread.remove(k);
	showbook()
}
window.lastread = new LastRead();

function reloadcode() {
    newcode = $('#showcode').prop("src") + '?' + Math.random();
    $('#showcode').prop("src", newcode);
}


function register_check() {

    if($('#regname').val() == '' || $('#regpass').val() == '' || $('#repass').val() == '' || $('#email').val() == '' || $('#authcode').val() == '') {
        alert('每项都必须填写');
        return false;
    };

    if($('#regpass').val() !== $('#repass').val()){
        alert('两次输入的密码不一致');
        return false;
    }
    return true;

}
//addbookcase
function addbookcase(aid,name,cid,cname){
	if($.cookie('ss_userid') && $.cookie('PHPSESSID') != -1) {
        rico_data = {
            articleid: aid,
            articlename: name,
            chapterid: cid,
            chaptername: cname
        }

        $.ajax({
            type: "post",
            url: "/addbookcase/",
            data: rico_data,
            success: function(data){
                alert(data);
            }
        })       

	}else{
		if (window.confirm("\n永久书架需要登录才能使用，转到登录页面吗？")) {
			window.location.href = "/login/";
		}else{
			return;
		}
	}
}

//delbookcase
function delbookcase(aid){
    if (window.confirm("\n确定要删除吗？")) {
        if($.cookie('ss_userid') && $.cookie('PHPSESSID') != -1) {
            rico_data = {
                articleid: aid,
            },
    
            $.ajax({
                type: "post",
                url: "/delbookcase/",
                data: rico_data,
                success: function(data){
                    alert(data);
                    window.location.reload();
                }
            })       
        }
    }else{
        return;
    }
}


var checkbg = "#ccc";
//内容页用户设置
function nr_setbg(intype) {
    var huyandiv = document.getElementById("huyandiv");
    var light = document.getElementById("lightdiv");
    if (intype == "huyan") {
        if (huyandiv.style.backgroundColor == "") {
            set("light", "huyan");
            document.cookie = "light=huyan;path=/";
        } else {
            set("light", "no");
            document.cookie = "light=no;path=/";
        }
    }
    if (intype == "light") {
        if (light.innerHTML == "关灯") {
            set("light", "yes");
            document.cookie = "light=yes;path=/";
        } else {
            set("light", "no");
            document.cookie = "light=no;path=/";
        }
    }
    if (intype == "big") {
        set("font", "big");
        document.cookie = "font=big;path=/";
    }
    if (intype == "middle") {
        set("font", "middle");
        document.cookie = "font=middle;path=/";
    }
    if (intype == "small") {
        set("font", "small");
        document.cookie = "font=small;path=/";
    }
}

//内容页读取设置
function getset() {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    var light;
    var font;

    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if ("light" == arr[0]) {
            light = arr[1];
            break;
        }
    }
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if ("font" == arr[0]) {
            font = arr[1];
            break;
        }
    }

    //light
    if (light == "yes") {
        set("light", "yes");
    } else if (light == "no") {
        set("light", "no");
    } else if (light == "huyan") {
        set("light", "huyan");
    }
    //font
    if (font == "big") {
        set("font", "big");
    } else if (font == "middle") {
        set("font", "middle");
    } else if (font == "small") {
        set("font", "small");
    } else {
        set("", "");
    }
}

//内容页应用设置
function set(intype, p) {
    var nr_body = document.getElementById("nr_body"); //页面body
    var huyandiv = document.getElementById("huyandiv"); //护眼div
    var lightdiv = document.getElementById("lightdiv"); //灯光div
    var fontfont = document.getElementById("fontfont"); //字体div
    var fontbig = document.getElementById("fontbig"); //大字体div
    var fontmiddle = document.getElementById("fontmiddle"); //中字体div
    var fontsmall = document.getElementById("fontsmall"); //小字体div
    var nr1 = document.getElementById("nr1"); //内容div
    var nr_title = document.getElementById("nr_title"); //文章标题
    var nr_title = document.getElementById("nr_title"); //文章标题
    var shuqian_2 = document.getElementById("shuqian"); //书签链接

    var pt_mulu = document.getElementById("pt_mulu");
    var pt_index = document.getElementById("pt_index");
    var pt_bookcase = document.getElementById("pt_bookcase");
    var pb_prev = document.getElementById("pb_prev");
    var pb_mulu = document.getElementById("pb_mulu");
    var pb_next = document.getElementById("pb_next");

    //初始化
    //document.getElementsByName("page_nr")[1].style.color = "#000";

    //灯光
    if (intype == "light") {
        if (p == "yes") {
            var cssText = "background-color:#666;color:#ccc;border:1px solid #444";
            //关灯
            lightdiv.innerHTML = "开灯";
            nr_body.style.backgroundColor = "#444";
            huyandiv.style.backgroundColor = "";
            nr_title.style.color = "#ddd";
            nr1.style.color = "#999";
            shuqian_2.style.cssText = cssText;
            pt_mulu.style.cssText = cssText;
            pt_index.style.cssText = cssText;
            pt_bookcase.style.cssText = cssText;
            pb_prev.style.cssText = cssText;
            pb_mulu.style.cssText = cssText;
            pb_next.style.cssText = cssText;
        } else if (p == "no") {
            //开灯
            lightdiv.innerHTML = "关灯";
            nr_body.style.backgroundColor = "rgb(251, 246, 236)";
            nr1.style.color = "#000";
            nr_title.style.color = "#000";
            huyandiv.style.backgroundColor = "";
            shuqian_2.style.cssText = "";
            pt_mulu.style.cssText = "";
            pt_index.style.cssText = "";
            pt_bookcase.style.cssText = "";
            pb_prev.style.cssText = "";
            pb_mulu.style.cssText = "";
            pb_next.style.cssText = "";
        } else if (p == "huyan") {
            var cssText = "background-color:rgb(204, 226, 191);color:green;border:1px solid rgb(187, 214, 170)";
            //护眼
            lightdiv.innerHTML = "关灯";
            huyandiv.style.backgroundColor = checkbg;
            nr_body.style.backgroundColor = "rgb(220, 236, 210)";
            nr1.style.color = "#333";
            shuqian_2.style.cssText = cssText;
            pt_mulu.style.cssText = cssText;
            pt_index.style.cssText = cssText;
            pt_bookcase.style.cssText = cssText;
            pb_prev.style.cssText = cssText;
            pb_mulu.style.cssText = cssText;
            pb_next.style.cssText = cssText;
        }
    }
    //字体
    if (intype == "font") {
        //alert(p);
        fontbig.style.backgroundColor = "";
        fontmiddle.style.backgroundColor = "";
        fontsmall.style.backgroundColor = "";
        if (p == "big") {
            fontbig.style.backgroundColor = checkbg;
            nr1.style.fontSize = "24px";
        }
        if (p == "middle") {
            fontmiddle.style.backgroundColor = checkbg;
            nr1.style.fontSize = "20px";
        }
        if (p == "small") {
            fontsmall.style.backgroundColor = checkbg;
            nr1.style.fontSize = "16px";
        }
    }
}

//分类显示隐藏
function toggleSort() {
    $('#submenu').slideToggle();
}
