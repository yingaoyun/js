let bookmax = 30;
function LastRead(){this.bookList="bookList"} LastRead.prototype={ set:function(bid,url,bookname,chaptername,author,readtime,imgurl){ if(!(bid&&url&&bookname&&chaptername&&author&&readtime&&imgurl))return; var v=bid+'#'+url+'#'+bookname+'#'+chaptername+'#'+author+'#'+readtime+'#'+imgurl; 

var aBooks = lastread.getBook(); var aBid = new Array(); for (i=0; i<aBooks.length;i++){aBid.push(aBooks[i][0]);} if($.inArray(bid, aBid) != -1){ lastread.remove(bid); }else{ while (aBooks.length >= bookmax) { lastread.remove(aBooks[0][0]); aBooks = lastread.getBook(); } } this.setItem(bid,v); this.setBook(bid) }, get:function(k){ return this.getItem(k)?this.getItem(k).split("#"):""; }, remove:function(k){ this.removeItem(k); this.removeBook(k) }, setBook:function(v){ var reg=new RegExp("(^|#)"+v); var books =	this.getItem(this.bookList); if(books==""){ books=v; } else{ if(books.search(reg)==-1){ books+="#"+v; } else{ books.replace(reg,"#"+v); } } this.setItem(this.bookList,books) }, getBook:function(){ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for(var i=0;i<v.length;i++){ var tem=this.getItem(v[i]).split('#'); if (tem.length>3)books.push(tem); } } return books }, removeBook:function(v){ var reg=new RegExp("(^|#)"+v); var books=this.getItem(this.bookList); if(!books){ books=""; } else{ if(books.search(reg)!=-1){ books=books.replace(reg,""); } } this.setItem(this.bookList,books) }, setItem:function(k,v){ if(!!window.localStorage){ localStorage.setItem(k,v); } else{ var expireDate=new Date(); var EXPIR_MONTH=30*24*3600*1000; expireDate.setTime(expireDate.getTime()+12*EXPIR_MONTH); document.cookie=k+"="+encodeURIComponent(v)+";expires="+expireDate.toGMTString()+"; path=/"; } }, getItem:function(k){ var value=""; var result=""; if(!!window.localStorage){ result=window.localStorage.getItem(k); value=result||""; } else{ var reg=new RegExp("(^| )"+k+"=([^;]*)(;|\x24)"); var result=reg.exec(document.cookie); if(result){ value=decodeURIComponent(result[2])||""; } } return value }, removeItem:function(k){ if(!!window.localStorage){ window.localStorage.removeItem(k); } else{ var expireDate=new Date(); expireDate.setTime(expireDate.getTime()-1000); document.cookie=k+"= "+";expires="+expireDate.toGMTString(); } }, removeAll:function(){ if(!!window.localStorage){ window.localStorage.clear(); } else{ var v=this.getItem(this.bookList)?this.getItem(this.bookList).split("#"):Array(); var books=Array(); if(v.length){ for( i in v ){ var tem=this.removeItem(v[k]); } } this.removeItem(this.bookList); } } }
function removebook(k){lastread.remove(k);showtempbooks();}function removeall(){lastread.removeAll();showtempbooks();}
function showtempbooks(){
  var books=lastread.getBook().reverse(); //倒序
  let bookhtml = '';
  if (books.length){
    for(var i=0 ;i<books.length;i++){
      if( i < bookmax ){
        bookhtml += '<div class="item"><div class="image"><a href="'+books[i][1]+'"><img src="'+books[i][6]+'" onerror="src=\'/static/xbiquge/nocover.jpg\'" alt="'+books[i][2]+'" width="120" height="150"></a></div><dl><a href="'+books[i][1]+'" title="'+books[i][2]+'"><dt>'+books[i][2]+'</dt><dd>已读到：'+books[i][3]+'<br><a href="'+books[i][5]+'">继续阅读：点击继续</a></dd></a><div class="btm"><a href="/author/'+books[i][4]+'/" title="'+books[i][4]+'">'+books[i][4]+'</a><a id="del_temp" href="javascript:removebook(\''+books[i][0]+'\')" onclick="return confirm(\'确定要将本书移除吗？\')"><em class="orange">移除</em></a></div></dl><div class="clear"></div></div>';
      }
    }
  }else{
      bookhtml += '<div class="nobook">没有阅读记录。</div>';
  }
  $("#tempBookcase").html(bookhtml);
}
window.lastread = new LastRead();