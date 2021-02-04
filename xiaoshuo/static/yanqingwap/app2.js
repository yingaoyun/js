//百度统计
var _hmt = _hmt || [];
$(function () {
	// //站点统计
    // $.ajax({
        // url: "/api/getsitebaidu",
        // dataType: "json",
        // type: "get",
        // success: function (data) {
            // if (data.code == 0) {
                // //console.log(data.bid);
                // var hm = document.createElement("script");
                // hm.src = "https://hm.baidu.com/hm.js?" + data.bid;
                // var s = document.getElementsByTagName("script")[0];
                // s.parentNode.insertBefore(hm, s);
            // }
        // }
    // });
	$('#btnsearch').click(function(){
		window.location.href='/search?q='+$('#txtq').val();

	});

	if($('.sl-more').size()>0){
        $('.sl-more').click(function(){
		    var siteIdent='taozisocom';
            var bookID=$(this).data('bookid');
            var cpsUrl='https://flow.nzkong.com/jump?id='+siteIdent+'_'+bookID;
            window.open(cpsUrl);
        });
	}
	if($('#bookinfo').size()>0){
        $.each($('#bookinfo li'),function(i, val){  //遍历二维数组
            var siteIdent='taozisocom';
            var bookID=$(val).children('a').data('bookid');
            var cpsUrl='https://flow.nzkong.com/jump?id='+siteIdent+'_'+bookID;
            $(val).children('a').attr('href',cpsUrl)
        })
	}
});
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
window.lastread = new LastRead();