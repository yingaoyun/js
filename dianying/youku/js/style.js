function setTab(name,cursel,n){
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById("con_"+name+"_"+i);
menu.className=i==cursel?"active":"";
con.style.display=i==cursel?"block":"none";
}
}

function showDro(){
$(".header_search_dropdown").show()
}
function hideDro(){
$(".header_search_dropdown").hide()
}

$('.back_top').hide()
$(window).scroll(function(){
if ($(this).scrollTop() > 350){
$(".back_top").fadeIn();
}
else {
$(".back_top").fadeOut();
}
})

//置顶事件
function topBack() {
$('body,html').animate({ scrollTop: 0 }, 300);
}

$("#tips_close").click(function(){
  $(".hide").hide();
});

$(".icon_weixin").click(function(){
  $(".hide").show();
});

var swiper = new Swiper('.text_banner', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
	delay: 5000,
	disableOnInteraction: false,
  },
  pagination: {
	el: '.swiper-pagination',
	clickable: true,
  },
  navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
  },
});

var MyTheme = {
	'Browser': {
		url: document.URL,
		domain: document.domain,
		title: document.title,
		language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		canvas: function() {
			return !!document.createElement("canvas").getContext
		}(),
		useragent: function() {
			var a = navigator.userAgent;
			return {
				mobile: !! a.match(/AppleWebKit.*Mobile.*/),
				ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
				iPhone: -1 < a.indexOf("iPhone") || -1 < a.indexOf("Mac"),
				iPad: -1 < a.indexOf("iPad"),
				trident: -1 < a.indexOf("Trident"),
				presto: -1 < a.indexOf("Presto"),
				webKit: -1 < a.indexOf("AppleWebKit"),
				gecko: -1 < a.indexOf("Gecko") && -1 == a.indexOf("KHTML"),
				weixin: -1 < a.indexOf("MicroMessenger")
			}
		}()
	},
	'Cookie': {
		'Set':function(name,value,days){
	        var expires;
	        if (days) {
	            expires = days;
	        } else{
	            expires = "";
	        }
	        $.cookie(name,value,{expires:expires,path:'/'});
		},
		'Get':function(name){
			var styles = $.cookie(name);
		    return styles;
		},
		'Del':function(name,tips){
			if(window.confirm(tips)){
	            $.cookie(name,null,{expires:-1,path: '/'});
	            location.reload();
	       	}else{
	            return false;
	        }
		}
	},
	'Ajax':function(url,type,dataType,data,sfun,efun,cfun){
        type=type||'get';
        dataType=dataType||'json';
        data=data||'';
        efun=efun||'';
        cfun=cfun||'';

        $.ajax({
            url:url,
            type:type,
            dataType:dataType,
            data:data,
            timeout: 5000,
            beforeSend:function(XHR){
            },
            error:function(XHR,textStatus,errorThrown){
                if(efun) efun(XHR,textStatus,errorThrown);
            },
            success:function(data){
                sfun(data);
            },
            complete:function(XHR, TS){
                if(cfun) cfun(XHR, TS);
            }
        })
    },
	'Mobile': {	
		'Nav': {
			'Init': function() {
				if($(".nav-slide").length){
					$(".nav-slide").each(function(){
						var $that = $(this);
	                	MyTheme.Mobile.Nav.Set($that,$that.attr('data-align'));
	                });
				}
			},
			'Set': function(id,align) {
				$index = id.find('.active').index()*1;
				if($index > 3){
					$index = $index-3;
				}else{
					$index = 0;
				}
				id.flickity({
				  	cellAlign: align,
					freeScroll: true,
					contain: true,
					prevNextButtons: false,				
					pageDots: false,
					percentPosition: true,
					initialIndex: $index
				});	
			}	
		},
		'Mshare': function() {
			$(".open-share").click(function() {
				MyTheme.Browser.useragent.weixin ? $("body").append('<div class="mobile-share share-weixin"></div>') : $("body").append('<div class="mobile-share share-other"></div>');
				$(".mobile-share").click(function() {
					$(".mobile-share").remove();
					$("body").removeClass("modal-open");
				});
			});
		}
	},
	'Images': {
		'Lazyload': function() {
			$(".lazyload").lazyload({
				effect: "fadeIn",
				threshold: 200,
				failure_limit : 1,
				skip_invisible : false,
			});
		},
		'Qrcode': {
			'Init': function() {
				if($("#qrcode").length){
					var $that = $("#qrcode");
	                MyTheme.Images.Qrcode.Set($that.attr('data-link'),$that.attr('data-dark'),$that.attr('data-light'));
	                $that.attr("class","img-responsive");
				}
			},
			'Set':  function(url,dark,light) {
				url=0||location.href;
				var qrcode = new QRCode('qrcode', {
				  	text: url,
				  	width: 120,
				  	height: 120,
				  	colorDark : dark,
				  	colorLight : light,
				  	correctLevel : QRCode.CorrectLevel.H
				});
			}	
		},
		'Flickity': {
			'Init': function() {
				if($(".flickity").length){
					$(".flickity").each(function(){
						var $that = $(this);
	                	MyTheme.Images.Flickity.Set($that,$that.attr('data-align'),$that.attr('data-dots'),$that.attr('data-next'),$that.attr('data-play'));
						//MyTheme.Images.Lazyload();
	                });
				}
			},
			'Set': function(id,align,dots,next,play) {
				dots=dots||false;
				next=next||false;
				play=play||false;
				id.flickity({
				  	cellAlign: align,
				  	wrapAround: true,
				  	contain: true,
				  	pageDots: dots,
					autoPlay: play,
				  	percentPosition: true,
				  	prevNextButtons: next
				});	
			}	
		}
	},
	'Link': {
		'Copy': {
			'Init': function() {
				$(".myui-copy-link").each(function(){
					var links = $(this).attr("data-url");
					MyTheme.Link.Copy.Set(this,links);
				});
				$(".myui-copy-html").each(function(){
					var html = $(this).parent().find(".content").html();
					MyTheme.Link.Copy.Set(this,html);
				});
			},
			'Set': function(id,content) {
				var clipboard = new Clipboard(id, {
					text: function() {									
						return content;
					}
				});
				clipboard.on('success', function(e) {
					layer.msg('复制成功');
				});
				clipboard.on("error",function(e){
				    layer.msg('复制失败，请手动复制');
				});
			}
			
		},
		'Short': function(){
			$(".myui-short").each(function(){
				var codyId = this;
				var shortId = $(this);
				var shortUrl = shortId.val() || shortId.attr("data-url");
				var linkText = shortId.attr("data-text");
				if(myui.short==1){
					$.ajax({
						type : 'GET',
						url : myui.shortapi+encodeURIComponent(shortUrl),
						dataType : 'jsonp',
						success : function(r) {
							url_short = r.data.urls[0].url_short;
							if(shortId.val()){
								shortId.val(linkText+url_short);
							}else if(shortId.attr("data-url")){
								shortId.attr("data-url",url_short);
								MyTheme.Link.Copy.Set(codyId,linkText+url_short);
							}
						}
					});
				}else{
					if(shortId.val()){
						shortId.val(linkText+shortUrl);
					}else if(shortId.attr("data-url")){
						shortId.attr("data-url",shortUrl);
						MyTheme.Link.Copy.Set(codyId,linkText+shortUrl);
					}	
				}
			});
		}
	},
	'Layer': {
		'Img': function(title,src,text) {
			layer.open({
	   			type: 1,
		    	title: title,
		  		skin: 'layui-layer-rim',
		  		content: '<div class="col-pd"><p><img src="'+src+'" width="240" /></p><p class="text-center">'+text+'</p></div>'
		    });
		},
		'Html': function(title,html) {
			layer.open({
	   			type: 1,
		    	title: title,
		  		skin: 'layui-layer-rim',
		  		content: '<div class="col-pd">'+html+'</div>'
		    });
		},
		'Div': function(id) {
			layer.open({
				type: 1,
				title:false,
				skin: 'layui-layer-rim',
				content: $(id)
			});
		},
		'Text': function(title,text,wide,high) {
			layer.open({
				type: 1,
				title: title,
				skin: 'layui-layer-rim',
				area: [wide+'px', high+'px'],
				content: '<div class="col-pd">'+text+'</div>'
			});
		},
		'Popbody': function(name,title,html,day,wide,high) {
			var pop_is = MyTheme.Cookie.Get(name);
			var html = $(html).html();
			if(!pop_is){
				layer.open({
					type: 1,
					title: title,
					skin: 'layui-layer-rim',
					content: html,
					area: [wide+'px', high+'px'],
					cancel: function(){
						MyTheme.Cookie.Set(name,1,day);
					}
				});
			}
		}
	},
	'Other': {
		'Headroom': function() {
			if($("#header-top").length){
				var header = document.querySelector("#header-top");
	            var headroom = new Headroom(header, {
					tolerance: 5,
					offset: 205,
					classes: {
						initial: "top-fixed",
						pinned: "top-fixed-up",
						unpinned: "top-fixed-down"
					}
				});
				headroom.init();
			}
			
		},
		'Popup': function(id) {
			$(id).addClass("popup-visible");
			$("body").append('<div class="mask"></div>').addClass("hidden");
			$(".close-popup").click(function() {
				$(id).removeClass("popup-visible");
				$(".mask").remove();
				$("body").removeClass("hidden");
			});
			$(".mask").click(function() {
				$(id).removeClass("popup-visible");
				$(this).remove();
				$("body").removeClass("hidden");
			});
		},
		'Bootstrap': function() {
			$('a[data-toggle="tab"]').on("shown.bs.tab", function(a) {
				var b = $(a.target).text();
				$(a.relatedTarget).text();
				$("span.active-tab").html(b);
			});
		},
		'Skin': function() {
			var skinnum = 0,act;
		    var lengths = $("link[name='skin']").length;
		    $('.btnskin').click(function() {
		        skinnum+=1;
		        if(skinnum==lengths){skinnum=0;}
		        var skin = $("link[name='skin']").eq(skinnum).attr("href");
		        layer.msg("正在切换皮肤，请稍后...",{anim:5,time: 2000},function(){
		        	$("link[name='default']").attr({href:skin});
		        });
		        MyTheme.Cookie.Set('skinColor',skin,365);
		    });
		    var color = MyTheme.Cookie.Get('skinColor');
		    if(color){
		        $("link[name='default']").attr({href:color});
		    }  
		},
		'Sort': function() {
			$(".sort-button").each(function(){
				$(this).on("click",function(e){
					e.preventDefault();
					$(this).parent().parent().parent().find(".sort-list").each(function(){
					    var playlist=$(this).find("li");
					    for(let i=0,j=playlist.length-1;i<j;){
					        var l=playlist.eq(i).clone(true);
					        var r=playlist.eq(j).replaceWith(l);
					        playlist.eq(i).replaceWith(r);
					        ++i;
					        --j;
					    }
					});
				});
			});
		},
		'Search': function() {		    	
			$(".search-select p,.search-select li").click(function() {
	    		var action =$(this).attr("data-action");
	    		$("#search").attr("action",action);
	    		$(".search-select .text").text($(this).html());
		    });			
			$(".search_submit").click(function() {
	    		var value=$(".search_wd").val();
                if (!value) {
                    var wd=$(".search_wd").attr("placeholder");
                    $(".search_wd").val(wd);
                }
	    	});
	    	$(".open-search").click(function(){
				var seacrhBox=$(".search-box");
				seacrhBox.addClass("active").siblings().hide();
				seacrhBox.find(".form-control").focus();
				seacrhBox.find(".head-dropdown").toggle();
				$(".search-close").click(function(){
					seacrhBox.removeClass("active").siblings().show();
					seacrhBox.find(".dropdown-box").hide();
				});
			});	
		},
		'Collapse': function() {
			$(".text-collapse").each(function(){
				$(this).find(".details").on("click",function(){
					$(this).parent().find(".sketch").addClass("hide");
					$(this).parent().find(".data").css("display","");
					$(this).remove();
				});
			});
			$(".dropdown-hover").click(function(){
				$(this).find(".dropdown-box").toggle();
			});
		},
		'Scrolltop': function() {
			var a = $(window);
			$scrollTopLink = $("a.backtop");
			a.scroll(function() {
				500 < $(this).scrollTop() ? $scrollTopLink.css("display", "") : $scrollTopLink.css("display", "none");
			});
			$scrollTopLink.on("click", function() {
				$("html, body").animate({
					scrollTop: 0
				}, 400);
				return true;
			});
		},
		'Slidedown': function() {
			var display = $('.slideDown-box');
			$(".slideDown-btn").click(function() {
		  		if(display.css('display') == 'block'){
		  			display.slideUp("slow");
		  			$(this).html('展开  <i class="fa fa-angle-down"></i>');
					MyTheme.Mobile.Nav.Init();
				}else{
					display.slideDown("slow"); 
					$(this).html('收起   <i class="fa fa-angle-up"></i>');
					MyTheme.Mobile.Nav.Init();
				}
			});
		},
		
		'Player': function() {
			if($("#player-left").length){
				var PlayerLeft = $("#player-left");
		    	var PlayerSide = $("#player-sidebar");
				var LeftHeight = PlayerLeft.outerHeight();
				var Position = $("#playlist li.active").position().top;
				$("#player-sidebar-is").click(function() {
					PlayerSide.toggle();
					if(PlayerSide.css("display")==='none') {
						PlayerLeft.css("width","100%");
						$(this).html("<i class='fa fa-angle-left'></i>");
					}	
					if(PlayerSide.css("display")==='block') {
						PlayerLeft.css("width","");
						$(this).html("<i class='fa fa-angle-right'></i>");
					}
				});
				if(!MyTheme.Browser.useragent.mobile){
					PlayerSide.css({"height":LeftHeight,"overflow":"auto"});
					PlayerSide.scrollTop(Position);
				}
			}		
			if($(".player-fixed").length){
				if(!MyTheme.Browser.useragent.mobile){
					$(window).scroll(function(){
						if($(window).scrollTop()>window.outerHeight){
							$(".player-fixed").addClass("fixed fadeInDown");
							$(".player-fixed-off").show();
						}else if($(window).scrollTop()<window.outerHeight){
							$(".player-fixed").removeClass("fixed fadeInDown");
							$(".player-fixed-off").hide();
						}
					});
				}
				$(".player-fixed-off").click(function() {
					$(".player-fixed").removeClass("fixed fadeInDown");
				});
			}
		},
		'Close': function() {
			$(".close-btn").on("click",function(){
				$(this).parents(".close-box").remove();
			});
		},
		'Roll': function(obj,higt) {
			setInterval(function(){ 
				$(obj).find("ul").animate({
					marginTop : higt,
				},1000,function(){
					$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
				})
			}, 3000);
		},
		
	}	
};

$(function(){
	if(MyTheme.Browser.useragent.mobile){
		MyTheme.Mobile.Nav.Init();
		MyTheme.Mobile.Mshare();
	}
	MyTheme.Images.Lazyload();
	MyTheme.Images.Flickity.Init();	
	MyTheme.Link.Copy.Init();
	MyTheme.Link.Short();
	MyTheme.Other.Bootstrap();
	MyTheme.Other.Sort();
	MyTheme.Other.Search();
	MyTheme.Other.Collapse();
	MyTheme.Other.Slidedown();
	MyTheme.Other.Scrolltop();
	MyTheme.Other.History.Init();
	MyTheme.Other.Player();
	MyTheme.Other.Close();
	MyTheme.Other.Xunlei();
});

var WidthScreen = true;
function series(div,n1,n2){     //更多剧集方法
	var len = div.find("a").length;
	var n = WidthScreen ? n1:n2;
	if(len>100){    //超过100集时的方法
		var Nps = Math.ceil(len/100);    //得出百的倍数
		for(var i=0;i<Nps;i++){    //添加节点n个百集节点
			div.append("<div class='fortab'></div>");
		}
		for(var j=1;j<=Nps;j++){    //将所有剧集移到对应的fortab节点
			var ln = j==Nps ? len-Nps*100+100:100;
			div.find("a:lt("+ln+")").appendTo(div.find(".fortab").eq(j-1));
		}
		if(typeof TooLength != "undefined"){TooLength++;}    //增加太长id号
		else{window.TooLength = 1;}    //未定义id号是设为1
		$("body").append("<div class='Df' id='TooLength"+TooLength+"' style='display:none'></div>");    //添加id节点，将移入div用来默认显示
		div.find("a:lt("+(n2+18)+")").clone().appendTo($("#TooLength"+TooLength));    //添加前面集数
		div.find("a:gt("+(len-((n1/2)-2)/2-1)+")").clone().appendTo($("#TooLength"+TooLength));    //添加后面几集
		$("#TooLength"+TooLength).prependTo(div);    //默认显示id移入div
		div.find(".Df").show();
		var opBtn = "<a target='_self' href='javascript:void(0)' class='btn more open'>更多剧集</a>";    //给默认显示盒加个open按钮
		div.find(".Df a").eq(n2+17).after(opBtn);    //添加open按钮
		var closeBtn = "<a target='_self' href='javascript:void(0)' class='btn more close1'>收起剧集</a>";
		for(var k=0;k<Nps;k++){div.find(".fortab").eq(k).append(closeBtn);}    //给所有fortab盒子加close按钮
		var Navs = "<div class='play-ji clearfix' style='display:none;'>";    //创建第n-n+100的导航栏节点
		for(var l=0;l<Nps;l++){
			var min = l*100+1;
			var max = l==Nps-1 ? len:(l+1)*100;
			if(l==0){Navs += "<a target='_self' href='javascript:void(0)' class='btn more active'>"+min+"-"+max+"</a>";}
			else{Navs += "<a target='_self' href='javascript:void(0)' class='btn more'>"+min+"-"+max+"</a>";}
		}
		Navs += "</div>";
		div.find(".Df").after(Navs);    //添加导航节点，html结构到此完善
		var showPg = 0;    //默认页为0,即第一页，下面的是方法
		var DfBox = div.find(".Df");
		var navBox = div.find(".play-ji");
		var tabBox = div.find(".fortab");
		div.find(".open").click(function(){
			DfBox.hide();
			navBox.show();
			tabBox.eq(showPg).show();
		});
		div.find(".close1").click(function(){
			DfBox.show();
			navBox.hide();
			tabBox.eq(showPg).hide();
		});
		div.find(".play-ji a").click(function(){
			if($(this).hasClass("active")) return;
			var _i = $(this).index();
			tabBox.eq(showPg).hide();
			tabBox.eq(_i).show();
			$(this).addClass("active").siblings(".active").removeClass("active");
			showPg = _i;
		})
		div.css("height","auto");
	}
	else if(len>40){
		for(var i=n2+18;i<len-((n1/2)-2)/2;i++){div.find("a").eq(i).addClass("hide");}
		var t_m = "<a target='_self' href='javascript:void(0)' class='btn more open'>更多剧集</a>";
		div.find("a").eq(n2+18).after(t_m);
		var more = div.find(".more");
		var _open = false;
		div.css("height","auto");
		more.click(function(){
			if(_open){
				div.find(".hide").hide();
				$(this).html("更多剧集");
				$(this).removeClass("close1");
				$(this).addClass("open");
				$(this).insertAfter(div.find("a").eq(n2+17));
				_open = false;
			}
			else{
				div.find(".hide").show();
				$(this).html("收起剧集");
				$(this).removeClass("open");
				$(this).addClass("close1");
				$(this).insertAfter(div.find("a:last"));
				_open = true;
			}
		})
	}
}