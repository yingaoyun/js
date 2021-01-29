//百度统计
var _hmt = _hmt || [];

//先入为主的统计规则
function GetAdminID(id) {
    try {
        var name = "592wgcnaid";
        var refurl = document.referrer;
        var issearch = false;
        if (refurl) {
            refurl = refurl.toLowerCase();
            issearch = refurl.indexOf("google") > -1 || refurl.indexOf("sogou") > -1 || refurl.indexOf("baidu") > -1 || refurl.indexOf("sm.cn") > -1 || refurl.indexOf("so.com") > -1 || refurl.indexOf("haosou.com") > -1;
        }

        var resultArr = document.cookie.replace(/\s/g, "").split(";");
        for (var i = 0; i < resultArr.length; i++) {
            var nameArr = resultArr[i].split("=");
            if (nameArr[0] == name) {
                if (nameArr[1] != "undefined" && nameArr[1] != "0" && !issearch) {
                    var myregex = new RegExp(/^[-\+]?\d+$/);
                    if (myregex.test(nameArr[1]))
                        return parseInt(nameArr[1]);
                }
            }
        }
        var date = new Date();
        date.setTime(date.getTime() + 3600 * 1000);
        document.cookie = name + "=" + id + ";expires=" + date.toGMTString() + ";path=/";
    } catch (error) {
    }
    return id;
}

//编辑统计
function BaiDuEditTongji(id) {
    id = GetAdminID(id);
    if(id){
        $.ajax({
            url: "/api/getuserbaidu",
            dataType: "json",
            data: {adminid:id},
            type: "post",
            success: function (data) {
                //console.log(data);
                if (data.code == 0) {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?" + data.bid;
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                }
            }
        });
    }
}

function getCpsUrl(cocc_bookid) {
    var siteIdent = '592wgcn';
    var URL = 'https://flow.nzkong.com/jump?id=';
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (sUserAgent.indexOf('baidu') > 0 || sUserAgent.indexOf("bidubrowser") > 0) {
        return '/jump?id=' + siteIdent + '_' + cocc_bookid;
    }
    return URL + siteIdent + '_' + cocc_bookid;
}
$(function(){
    //新旧同时统计
    var bdid='4d741e8c362592b952591e9a15255765';
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + bdid;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);

    //站点统计
    $.ajax({
        url: "/api/getsitebaidu",
        dataType: "json",
        type: "post",
        success: function (data) {
            if (data.code == 0) {
                //console.log(data.bid);
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?" + data.bid;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        }
    });

    // 搜索
    if($('#txtq').size()>0){
        $('#btnsearch').click(function(){
            var txtq = $('#txtq').val();
            if(!txtq)return;

            var url = $('#btnsearch').data('url');
            window.open(url+'?q='+txtq);
        });
    }

    //开始阅读按钮策略
    if ($('#bookinfo').size() > 0) {
        var chapterCount = $('#chapterlsit a').length;
        var bookID = $('#bookinfo').data('bookid');

        var goUrl = getCpsUrl(bookID);
        if (chapterCount > 0) {
            goUrl = $("#chapterlsit a:first").attr('href');
        }
        $('#btnread').attr('href', goUrl);
        if ($('#moreread').size() > 0) {
            $('#moreread').attr('href', goUrl);
        }
    }

    if ($('#chapterinfo').size() > 0) {
        var chapterAttr = $('#chapterinfo a').last().attr('href');
        var bookID = $('#chapterinfo').data('bookid');

        var goUrl = getCpsUrl(bookID);
        if (chapterAttr == 'javascript:;') {
            $('#chapterinfo a').last().attr('href', goUrl);
        }
    }

    if($('.search').size()>0){
        $('.mb-list .mb-item').hide().eq(0).show();
        $('.select-list li').on('click', function(){
            var sl = $(this).index()
            $(this).addClass('active').siblings().removeClass('active')
            $('.mb-list .mb-item').hide().eq(sl).show();
        })
    }
})
//历史记录
let bookmax = 20;
function LastRead(){this.bookList="bookList"} LastRead.prototype={ set:function(bid,uri,bookname,chaptername,author,img_url){ if(!(bid&&uri&&bookname&&chaptername&&author&&img_url))return; var v=bid+'#'+uri+'#'+bookname+'#'+chaptername+'#'+author+'#'+img_url; var aBooks = lastread.getBook(); var aBid = new Array(); for (i=0; i<aBooks.length;i++){aBid.push(aBooks[i][0]);} if($.inArray(bid, aBid) != -1){ lastread.remove(bid); }else{ while (aBooks.length >= bookmax) { lastread.remove(aBooks[0][0]); aBooks = lastread.getBook(); } } this.setItem(bid,v); this.setBook(bid) }, get:function(k){ return this.getItem(k)?this.getItem(k).split("#"):""; }, remove:function(k){ this.removeItem(k); this.removeBook(k) }, setBook:function(v){ var reg=new RegExp("(^|#)"+v); var books =	this.getItem(this.bookList); if(books==""){ books=v; } else{ if(books.search(reg)==-1){ books+="#"+v; } else{ books.replace(reg,"#"+v); } } this.setItem(this.bookList,books) }, getBook:function(){ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for(var i=0;i<v.length;i++){ var tem=this.getItem(v[i]).split('#'); if (tem.length>3)books.push(tem); } } return books }, removeBook:function(v){ var reg=new RegExp("(^|#)"+v); var books=this.getItem(this.bookList); if(!books){ books=""; } else{ if(books.search(reg)!=-1){ books=books.replace(reg,""); } } this.setItem(this.bookList,books) }, setItem:function(k,v){ if(!!window.localStorage){ localStorage.setItem(k,v); } else{ var expireDate=new Date(); var EXPIR_MONTH=30*24*3600*1000; expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH); document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/"; } }, getItem:function(k){ var value=""; var result=""; if(!!window.localStorage){ result=window.localStorage.getItem(k); value=result||""; } else{ var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)"); var result=reg.exec(document.cookie); if(result){ value=decodeURIComponent(result[2])||""; } } return value }, removeItem:function(k){ if(!!window.localStorage){ window.localStorage.removeItem(k); } else{ var expireDate=new Date(); expireDate.setTime(expireDate.getTime()-1000); document.cookie=k+"= "+";expires="+expireDate.toGMTString(); } }, removeAll:function(){ if(!!window.localStorage){ window.localStorage.clear(); } else{ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for( i in v ){ var tem=this.removeItem(v[k]); } } this.removeItem(this.bookList); } } }
function removebook(k){lastread.remove(k);showtempbooks();}function removeall(){lastread.removeAll();showtempbooks();}
function showtempbooks(){
	var books=lastread.getBook().reverse(); //倒序
	var cover = '';
	var bookhtml = '<p class="title jcc">阅读记录：'+books.length+' / '+bookmax+' &nbsp;&nbsp;<a href="javascript:removeall();" onclick="return confirm(\'确定要移除全部记录吗？\')"><i class="fa fa-trash-o fa-lg">&nbsp;</i>清空</a></p><p class="jcc s_gray">本机有效 最近阅读排在最前 到达上限删掉最后</p><ul>';
	if (books.length){
		for(var i=0 ;i<books.length;i++){
     		 if( i < bookmax ){
				bookhtml += '<li><a href="'+books[i][0]+'" data-bookid="536093"><div class="sl-img"><img src="'+books[i][5]+'" alt="'+books[i][2]+'"></div><div class="sl-info"><div class="sl-name"><p>'+books[i][2]+'</p><span>'+books[i][4]+'[著]</span> </div><div class="sl-cot"><span><i>分类：</i>'+books[i][5]+'</span></div></a><div class="sl-bi"><a href="'+books[i][1]+'"><span><i>读到：</i>'+books[i][3]+'</span><span><i>点击继续阅读</i></span></a></div></div>';
				} 
		}
		bookhtml += '</ul>';
   	}else{
	 	bookhtml += '<li><b style="color:red;padding:20px 0;">还没有阅读记录哦 ( ˙﹏˙ )( ˙﹏˙ )，去找找书看吧。</b></li></ul>';
   	}
	$("#tempBookcase").html(bookhtml);
}

function showbook(){
	var showbook=document.getElementById('showbook');
	var bookhtml='';
	var books=lastread.getBook();
	var books=books.reverse();
	if(books.length){
		for(var i=0 ;i<books.length;i++){
			bookhtml+='<li><a href="'+books[i][0]+'" data-bookid="536093"><div class="sl-img"><img src="'+books[i][5]+'" alt="'+books[i][2]+'"></div><div class="sl-info"><div class="sl-name"><p>'+books[i][2]+'</p><span>'+books[i][4]+'[著]</span> </div><div class="sl-cot"><span><i>分类：</i>'+books[i][5]+'</span></div></a><div class="sl-bi"><a href="'+books[i][1]+'"><span><i>读到：</i>'+books[i][3]+'</span><span><i>点击继续阅读</i></span></a></div></div>';
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