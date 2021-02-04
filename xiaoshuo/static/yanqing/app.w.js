//百度统计
var _hmt = _hmt || [];

function getCpsUrl(cocc_bookid) {
    var siteIdent = '1';
    var URL = 'http://www.baidu.com';
    return URL + siteIdent + '_' + cocc_bookid;
}

$(function () {
    //新旧同时统计
    var bdid='1';
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
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?" + data.bid;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        }
    });
    //开始阅读按钮策略
    if ($('#bookinfo').size() > 0) {
        var chapterCount = $('#chapterlsit li').length;
        var bookID = $('#bookinfo').data('bookid');
        var goUrl = getCpsUrl(bookID);
        if (chapterCount > 0) {
            goUrl = $("#chapterlsit li:first").find('a').attr('href');
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

    // 搜索
    if($('#searchBox').size()>0){
        $('#searchBox').bind('keyup', function(event) {
            if (event.keyCode == "13") {
                $('#searchBtn').click();
            }
        });
        $('#searchBtn').click(function(){
            var txtq = $('#searchBox').val();
            if(txtq){
                var url = $('#searchBtn').data('url');
                window.open(url+'?q='+txtq);
            }
        });
    }


    if ($('#wgindex').length > 0) {
        //首页轮播1
        $('#Slide2 .zy-Slide').zySlide({ speed: 500,'txtids':'#Slide2 .c2lb-info li' }).css('border', '0px solid blue');
    }
    if ($('.wgbook').length > 0) {
        //点击切换
        $('.wgbx .wgbx-iem').hide().eq(0).show()
        $('.wcz > div').click(function(){
            var wg = $(this).index()
            $(this).addClass('on').siblings().removeClass('on')
            $('.wgbx .wgbx-iem').hide().eq(wg).show()
        })
    }
})
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
			bookhtml+='<li><a href="'+books[i][0]+'"><div class="photo"><img src="'+books[i][1]+'"></div><div class="info"><div class="name">'+books[i][2]+'</div><div class="type">'+books[i][4]+'&nbsp;|&nbsp;'+books[i][5]+'&nbsp;</div><div class="decs">《'+books[i][2]+'》是'+books[i][5]+'的热门小说，该书的作者是'+books[i][4]+'，欢迎收藏收看！</div><div class="date">更新&nbsp;'+books[i][3]+'</div></div></a></li>';
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