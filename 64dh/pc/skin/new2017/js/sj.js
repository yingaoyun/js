/*开发豆原创源码，唯一官网：www.kaifadou.com*/
if (typeof(_pageinfo) == "undefined") {
  _pageinfo = "0"  
};




$(function($) {

  // 公用部分JS
  gotop();
  //返回顶部结束
  
  //下载地址重复az隐藏
  if (pageClass == 3) { 
    var onetxt = $(".m-hovertab-btn span:eq(0)").text();
    $('.m-hovertab-btn span:gt(0)').each(function () {
      var boxtxt = $(this).text();
      var a="aBcD";
      var xonetxt = onetxt.toLowerCase();
      var xboxtxt = boxtxt.toLowerCase();
      if(xonetxt == xboxtxt){
        $(this).hide();
      }
    })
  }
  
  if (pageClass != 1) {  // 不是首页  
    navhover();//当前位置
  }

  if (_pageinfo.path == 'apkgame') {

    // 安卓下载页
    var pkurl = $(".m-downur a").attr('href');
    if (pkurl != undefined) {// 假如下载地址
    }else{
      // 没有下载地址的情况
      $('.m-ljdown').html('<p><i></i>暂无下载</p>');
    }
  
    !function(a){function b(a){a&&a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0)}function c(a){return a&&a.preventDefault?a.preventDefault():window.event.returnValue=!1,!1}function d(a,b){b?a.removeAttr("unselectable").removeAttr("onselectstart").css("-moz-user-select","").css("-webkit-user-select",""):a.attr("unselectable","on").attr("onselectstart","return false;").css("-moz-user-select","none").css("-webkit-user-select","none")}a.fn.scrollbar=function(e,f){"function"==typeof e?(f=e,e={}):(e=e||{},f=f||function(){});var g={contentCls:"content",trackCls:"track",direction:"y",step:50,touchable:!0,autoReset:!0,inEndEffect:!1,slide:0},h=a.extend({},g,e),i=a("body"),j=a(document);return this.each(function(){function e(a){if("none"!=o.css("display")){a=a||window.event;var d=-a.wheelDelta/120||a.detail/3,e="y"==h.direction?-n.position().top+d*h.step:-n.position().left+d*h.step;e>D?(e=D,h.inEndEffect||(b(a),c(a))):0>e?(e=0,h.inEndEffect||(b(a),c(a))):(b(a),c(a)),r.slide(e)}}function g(a){b(a),v={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},t="y"==h.direction?-n.position().top||0:-n.position().left||0}function k(a){b(a);var d={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},e="x"==h.direction?v.pageX-d.pageX:v.pageY-d.pageY;("x"==h.direction&&Math.abs(d.pageY-v.pageY)<Math.abs(e)||"y"==h.direction)&&(e+=t,c(a),0>e?e=0:e>D&&(e=D),C>0&&(p.css("y"==h.direction?"top":"left",e*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-e+"px")))}function l(a){b(a),isTouch=!1}var m=a(this),n=m.find("."+h.contentCls),o=m.find("."+h.trackCls),p=o.children(),q=this,r={},s=0,t=0,u=0,v={},w=!1;if(m.css({position:"relative",overflow:"hidden"}),n.css({position:"absolute"}),"x"==h.direction){var x=0;n.children().each(function(){var b=a(this);b.css({width:b.width()+"px"}),x+=b.outerWidth(!0)}),n.css({width:x+"px"})}p.css({position:"absolute"}),o.show();var y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=B=A/z*y,C=y-B,D=z-A;z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,r.slide=function(a){a>D?a=D:0>a&&(a=0),D>0&&(p.css("y"==h.direction?"top":"left",a*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-a+"px"))},r.resize=function(){if("x"==h.direction){var b=0;n.children().each(function(){var c=a(this);c.removeAttr("style").css({width:c.width()+"px"}),b+=c.outerWidth(!0)}),n.css({width:b+"px"})}o.show(),y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=A/z*y,C=y-B,D=z-A,z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,h.autoReset&&r.slide(0)},r.getRatio=function(){return r.ratio=C/D},r.slide(h.slide),o.on({mousedown:function(a){w=!0,s="y"==h.direction?o.offset().top:o.offset().left,u="y"==h.direction?a.pageY-s-p.position().top:a.pageX-s-p.position().left,d(i,!1)},mouseup:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}}}),j.on({mousemove:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}},mouseup:function(){w=!1,u=0,d(i,!0)},resize:r.resize}),document.addEventListener&&q.addEventListener("DOMMouseScroll",e,!1),q.onmousewheel=e,q.addEventListener&&h.touchable&&(q.addEventListener("touchstart",g),q.addEventListener("touchmove",k),q.addEventListener("touchend",l)),f(r)})}}(jQuery);//滚动插件库
      //放大图片库
      var _LOOK_INDEX=0;(function($){$.fn.simpleSlide=function(options){var _i=_LOOK_INDEX;var _THIS=$(this);var _defaults={"opacity":0.8,"windowAction":"fadeIn","imageAction":"fadeIn","loadingImage":"/skin/new2017/images/loading.gif"};var _OPTIONS=$.extend(_defaults,options);var _ATTR=_OPTIONS;var _ALL_IMG_URL=[];var _I=0;_THIS.each(function(i){var _OBJ=$(this);_OBJ.attr("i")==undefined?_ALL_IMG_URL[i]=undefined:_ALL_IMG_URL[i]=_OBJ.attr("i");if(_OBJ.attr("i")==undefined){_I++}});if(_I==_THIS.size()){return false}function _GET_URL(){for(var i=0;i<_ALL_IMG_URL.length;i++){if(_ALL_IMG_URL[i]!=undefined){return i}}}_SET_WINDOWS();var _LOOK_BACK=$(".LookPicture_Background").eq(_i);_LOOK_BACK.fadeTo(0,_ATTR.opacity);var _LOOK_OBJ=$("#LookPicture_"+_i);var _LOOK_BEFORE=_LOOK_OBJ.find(".Look_before");var _LOOK_NEXT=_LOOK_OBJ.find(".Look_next");_THIS.css("cursor","pointer");_THIS.on("click",function(){$(document.body).addClass("none");var _IMG_INDEX=_THIS.index($(this));_IMG_INDEX=_ALL_IMG_URL[_IMG_INDEX]==undefined?_GET_URL():_IMG_INDEX;_LOOK_BACK.addClass("Look_Open");_LOOK_OBJ.addClass("Look_Open");_LOOK_OBJ.find(".Look_img").removeClass("Look_Show");_LOOK_OBJ.find(".Look_img").eq(_IMG_INDEX).addClass("Look_Show");_LOADING(_IMG_INDEX);_LOOK_SIZE()});_LOOK_OBJ.bind("mousewheel",function(event,delta){var dir=delta>0?"Up":"Down";if(dir=="Up"){_LOOK_BEFORE.click()}else{_LOOK_NEXT.click()}});
        _LOOK_OBJ.find(".Look_Close,.f-addlose").click(function(){_LOOK_BACK.removeClass("Look_Open");_LOOK_OBJ.removeClass("Look_Open");$(document.body).removeClass("none");});
        
        _LOOK_BEFORE.click(function(){var _ID=_LOOK_OBJ.find(".Look_img").index(_LOOK_OBJ.find(".Look_Show"));_GET_ZQ_ID(_ID,0)});_LOOK_NEXT.click(function(){var _ID=_LOOK_OBJ.find(".Look_img").index(_LOOK_OBJ.find(".Look_Show"));_GET_ZQ_ID(_ID,1)});function _GET_ZQ_ID(id,num){if(num=="1"){id++;if(id>=_ALL_IMG_URL.length){id=0}_LOOK_OBJ.find(".Look_img").removeClass("Look_Show");_LOOK_OBJ.find(".Look_img").eq(id).addClass("Look_Show")}else{id--;if(id<0){id=_ALL_IMG_URL.length-1
      }_LOOK_OBJ.find(".Look_img").removeClass("Look_Show");_LOOK_OBJ.find(".Look_img").eq(id).addClass("Look_Show")

      
    }_LOADING(id);_LOOK_SIZE()}function _LOADING(i){var _showImg=_LOOK_OBJ.find(".Look_img").eq(i);var src=_showImg.attr("src");var iSrc=_showImg.attr("iSrc");src==_ATTR.loadingImage?_LOADING_IMAGE(_showImg,iSrc):!!0;_LOOK_SIZE()}function _LOADING_IMAGE(Img,src){var img=new Image();$(img).load(function(){Img.attr("src",src);_LOOK_SIZE()}).error(function(){console.log(src," - Url Error")}).attr("src",src)}function _SET_WINDOWS(){$(document.body).append("<div class='LookPicture_Background'></div>");$(document.body).append('<div class="LookPicture animated '+_ATTR.windowAction+'" id="LookPicture_'+_i+'"><div class="f-addlose"></div></div>');$("#LookPicture_"+_i).append('<span class="Look_Close"></span>');for(var i=0;i<_ALL_IMG_URL.length;i++){$("#LookPicture_"+_i).append('<img alt="No (i) attribute or URL error" class="Look_img animated '+_ATTR.imageAction+'" src="'+_ATTR.loadingImage+'" iSrc="'+_ALL_IMG_URL[i]+'"/>')}$("#LookPicture_"+_i).append('<span class="Look_before"></span>');$("#LookPicture_"+_i).append('<span class="Look_next"></span>')}_LOOK_INDEX++}})(jQuery);function _LOOK_SIZE(){$(".Look_Show").each(function(i){var _wi=$(this).width();var _he=$(this).height();$(this).css({"margin-top":-(_he/2)+"px","margin-left":-(_wi/2)+"px"})})}$(window).resize(function(){_LOOK_SIZE()});$(function(){_LOOK_SIZE()});(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports==="object"){module.exports=factory}else{factory(jQuery)}}}(function($){var toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind=("onwheel" in document||document.documentMode>=9)?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var i=toBind.length; i;){this.addEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=handler}$.data(this,"mousewheel-line-height",special.getLineHeight(this));$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=null}},getLineHeight:function(elem){return parseInt($(elem)["offsetParent" in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type="mousewheel";if("detail" in orgEvent){deltaY=orgEvent.detail*-1}if("wheelDelta" in orgEvent){deltaY=orgEvent.wheelDelta}if("wheelDeltaY" in orgEvent){deltaY=orgEvent.wheelDeltaY}if("wheelDeltaX" in orgEvent){deltaX=orgEvent.wheelDeltaX*-1}if("axis" in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0}delta=deltaY===0?deltaX:deltaY;if("deltaY" in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY}if("deltaX" in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1}}if(deltaY===0&&deltaX===0){return}if(orgEvent.deltaMode===1){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight}else{if(orgEvent.deltaMode===2){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight}}absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40}}if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40}delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta);
          deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta);deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout)}nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args)}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==="mousewheel"&&absDelta%120===0}}));

       var $showcase = $(".showcase");
      if ($showcase.length > 0) {
          var _showcase_top = $showcase.offset().top;
      } (function() {
          var $scrollbar = $showcase.find(".scrollbar");
          var $slider = $showcase.find(".slider");
          var _scrollbar_api;
          var _slider_api;
          function imageDownload($obj, callback) {
              var len = $obj.length;
              var num = 0;
              var list = [];
              $obj.each(function() {
                  if (this.complete && this.width) {
                      doSomething();
                  } else {
                      this.onload = doSomething;
                  }
                  function doSomething() {
                      num++;
                      list.push(this);
                      if (num == len) {
                          callback(list);
                      }
                      
               }
              });
          }
          imageDownload($scrollbar.find("li img"),
          function() {
              $scrollbar.scrollbar({
                  contentCls: "s-content",
                  direction: "x",
                  inEndEffect: true
              },
              function(api) {
                  _scrollbar_api = api;
              });
          });
      })(); 
      //截图滑动结束

      //全部的加载完再执行
      window.onload=function(){

        //加载完再执行，获取图片准确高度
        var jtheight = $('.s-content li:first img').height();
    
        if ( jtheight < 300 ) {
          $('.s-box,.s-box li').height(jtheight)
        }
        // 获取内容中图片进行展开收起
        zksq();
      } 



    $('.f-bigimg').simpleSlide();//执行截图放大
    hoverp();// 显示图标
    generalHoverTab(); //相关K页面的选项卡
    nodown();// 处理没下载地址
    xiajia();;//下架资源
    hovertop();

  caip2();// 彩票


    ngsEval(_pageinfo.id,"#good","#bad","#c_score","soft");
      BindDing("#comment_0 > dl > dd > p ,#comment_1 > dl > dd > p",_pageinfo.id,_pageinfo.commendid);//顶
    $(".m-move-link").click(function(){$("html,body").animate({scrollTop:$('.m-down').offset().top}, 500);});
    $('.f-num').each(function () {
            var fnum = $(this).find('li').length;
            if (fnum < 1) {
                $(this).hide();
            }
        });// 如果f-mun里的li为0则将该f-num隐藏
    


    $('.m-keyxh').each(function () {
            var fnum = $(this).find('ul li').length;
            if (fnum < 1) {
                $(this).hide();
            }
        });
    $(".keyText").prepend("<b>特别信息</b>");
    var biaoqian = $('.g-dwonin-label').html();  
    var tagsn = biaoqian.indexOf('</a>');
    if (tagsn == -1 ) {
      $('.g-dwonin-label').hide();
    }


  }
});



function nodown(){
  var dowsize = $('.m-ctop li b').html();
  if (dowsize ==  '0KB' || $(".m-downur a").length < 1) {
      //$('.m-down-ul').html('<li class="m-ljdown"><p><i></i>暂无下载</p></li>'); 
      $('.m-down-ul').html('<li><a class="m-yuyueok"><i></i>立即预约</a></li>');   
      $('.m-yuyueok').attr({ style: "background-color:#0af;", href: "javascript:;" })   ;
      $.get("//www.qqtn.com/ajax.asp?action=33&id=0", function(msg){
        var qqqun = '';
        var objson = eval("(" + msg + ")");
        if (objson.list.length >0 ) {
          //获取预约数据
            qqun = objson.list[0].qqgroup;
            weixinimg = objson.list[0].wximg;
            yuyue(qqun,weixinimg)
        }
      });
    }
}

function yuyue(qqun,weixinimg){
        
    //添加预约信息
    var yuyuecss = '<style>input:focus {  outline: 0; color: #000}.g-yuyuebg {z-index:+1000;background:#000;filter:alpha(opacity=50);-moz-opacity:.5;-khtml-opacity:.5;opacity:.5;position:fixed;left:0;top:0;width:100%;height:100%}.g-yuyue{width: 500px; position: fixed;  left: 50%;  margin-left: -250px;  height: 340px;  padding-bottom: 10px; top: 50%; margin-top: -180px; z-index: +1001; background: #fff; border-radius: 10px;  overflow: hidden}.m-yytit { background: #0af;  font: 18px/45px microsoft yahei;  color: #fff;  padding:0 5px 0 15px; margin-bottom:15px;}.m-yytit span { float: right; font-size: 30px;  cursor: pointer; padding:0 5px;}.m-yyinfo { margin-bottom: 15px;}.m-yyinfo span{ display: inline-block; width: 80px; text-align: right; font-size: 16px; padding-left: 30px; }.m-yyinfo input {border: #ccc 1px solid;     margin:0 0 0 0;    padding: 0 10px;    font: 14px/34px microsoft yahei;    border-radius: 3px; width: 300px;height:30px;line-height:30px}.m-yyinfo input:focus { border: #0095e0 1px solid}.m-yuyuenum { text-align: center;font-size: 16px; margin-bottom:10px; }.m-yuyuenum span { font-weight: bold; color:#f40; }.m-yyqdbtn {border-top: 1px solid #e5e5e5; text-align: center; line-height: 74px;}.m-yyqdbtn a {    padding: 10px 30px;    line-height: 20px;    border-radius: 5px; background-color: #0af; color:#fff; margin:0 10px; font-size: 16px;}.m-yyqdbtn a:hover { background-color: #009fef }.g-yuyue,.g-yuyuebg {display: none}.m-qqweixin {margin-bottom: 20px; width: 500px;}.m-qqweixin a{display: inline-block;padding:4px 15px 8px 10px; text-align: center; margin: 0 20px;background-color: #20aef0; color:#fff; text-decoration: none; border-radius: 5px;position: relative; font-size:14px;margin: 10px 0 0 20px; }.m-qqweixin a:hover { background-color: #20aecc}.m-qqweixin a span { display: inline-block; width: 20px; height: 20px; background-color: #f00; position: relative;top: 4px; margin-right: 5px }.m-qqweixin a.m-yyqq span { background:url(/images/yyqq.png) 3px 0 ;background-size: 17px; background-repeat: no-repeat; top: 5px}.m-qqweixin a.m-yyweixin { background-color: #50b674 }.m-qqweixin a.m-yyweixin span { background:url(yyweixin.png);background-size: 20px; }.m-qqweixin  img.weixin{width: 120px; float: left; margin-left: 50px;}.m-qqweixin p.wxtit{padding-top:10px}.m-qqweixin p.wxtit span{ margin:10px 0 0 20px; display: inline-block; font-size:16px}</style>';
    $('head').append(yuyuecss);
    var yuyuediv = '<div class="g-yuyue" data-click="0"><div class="m-yytit">请输入您的预约信息：<span class="f-fr f-yyclose">×</span></div><div class="m-yyinfo"><span>手机号：</span><input type="text" id="f-yyPhone" placeholder="输入手机号码" maxlength="11" autocomplete="off"></div><div class="m-yuyuenum">预约后可及时接受<span>活动，礼包，开测和开放下载</span>的提醒</div><div class="m-qqweixin clearfix" ><img src="'+weixinimg+'" class="weixin"><p><a target="_blank" href="'+qqun+'" class="m-yyqq"><span></span>加入预约QQ群</a></p><p class="wxtit"><span>微信扫描二维码预约</span></p></div><div class="m-yyqdbtn"><a href="javascript:;" class="m-yybtn f-yybtn">预约</a><a href="javascript:;" class="m-yycl f-yyclose">关闭</a></div></div><div class="g-yuyuebg f-yyclose"></div>';
    $('body').append(yuyuediv);
    $('.m-yuyueok').click(function(){// 打开
      var yyclinum = $('.g-yuyue').attr('data-click');
      if (yyclinum != 0) {
        alert('您已经预约过拉')
      }else{
        $('.g-yuyue,.g-yuyuebg').fadeIn();
      }
      
    });
    $('.f-yyclose').click(function(){// 关闭
      $('.g-yuyue,.g-yuyuebg').hide();
    });
    $('.f-yybtn').click(function(){// 提交

      var iputxt = ''
      $('.g-yuyue input').each(function(){
        iputxt += $(this).val();
      })
      
      if (iputxt == '') {// 为空
        alert('手机号不能为空')
        return false; 
      }
      var yyphone = $('#f-yyPhone').val();
      var yyqq = $('#f-QQ').val();
          var phonereg = /^1[\d]{10}$/; // 手机号段设置
          if (yyphone != '') {
            if(!phonereg.test(yyphone)){
                alert('请输入有效的手机号！');            
                return false;
            }
          }
          // 手机号验证结束
          $('.g-yuyue').attr('data-click',1);
          $('.m-yuyueok').html('<i></i>成功预约')
      alert('预约成功');     
          $('.g-yuyue,.g-yuyuebg').hide();
          var yuyuephome = $('#f-yyPhone').val();
          $.get("https://www.qqtn.com/ajax.asp?action=34&id="+_pageinfo.id+"&phone="+yuyuephome+"", function(msg){

      });

    });
  }

function xiajia(){//根据地址下架
 var durl =   $('.m-downur a').attr('href');
 if (durl != undefined) {
   if (durl.indexOf('tj.ad677.com') != -1) {

   }
 }
}

function hovertop(){//鼠标经过改变样式,第一个单独加样式，前三单独加样式
    $('.f-top li').mouseover(function(){
        $(this).siblings().removeClass('f-ix').end().addClass('f-ix');
    });
    $('.f-top3').each(function() {
        $(this).find('li:first').addClass('f-ix').end()
        .find('li:lt(3)').addClass('f-t3');

    })
}
function hoverp(){//鼠标经增加样式离开去掉用于显示隐藏

  $(".f-tw,.f-hov").mouseover(function(){
  $(this).addClass("f-hover");
  $(this).find(" .m-xcx-ys").hide();
  $(this).find(" span").show();
    }).mouseout(function(){
    $(this).removeClass("f-hover");
    $(this).find(" .m-xcx-ys").show();
   $(this).find(" span").hide();
  });
}
function gotop(){//返回顶部
  $("body").append('<div class="g-float"><a href="javascript:;" id="m-top-back"></a></div>')
  // 滚动监听显示隐藏并且返回顶部
  $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $("#m-top-back").animate({height:60},10);            
            }else{
               $("#m-top-back").animate({height:0},10);                    
            }
    })
    $("#m-top-back").click(function(){
        $("body,html").animate({scrollTop:0},300)
    })
}
function navhover(){
  var rootName = $(".g-jknav strong a").eq(1).text().replace(/\s+/g,'');
    $(".g-navlist ul li a").each(function(){
      var navName = $(this).text().replace(/\s+/g,'');
      if(navName==rootName){
        $(".g-navlist ul li ").removeClass("hover");
        $(this).parent("li").addClass("hover");
      }
    })
}
function tabase(){//通用选项卡
    console.log($(".f-hovertab-box").size())
    if($(".f-hovertab-box").length >0){

    $(".f-hovertab-box").each(function(){
      $(this).find(".f-hovertab-btn").children().first().addClass("f-hover");
      $(this).find(".f-hovertab-cont:gt(0)").hide();      
      if($(this).find(".f-hovertab-cont").length<=0){
        $(this).hide();
      }
    })
    $(".f-hovertab-btn").children().hover(function(){
      var tabSpeed = $(this).parents(".f-hovertab-box").attr("data-speed");
      var thisObj = $(this);  
      setTimer = setTimeout(function(){       
        thisObj.addClass("f-hover").siblings().removeClass("f-hover");
        var n = thisObj.index();
        thisObj.parents(".f-hovertab-box").find(".f-hovertab-cont").eq(n).show().siblings(".f-hovertab-cont").hide();     
      },tabSpeed) 
    },function(){
      clearTimeout(setTimer);
    })
  }
}


function generalHoverTab(){//猜你喜欢选项卡
  if($(".m-hovertab-box").length>0){
    var themeText = "";
    $(".m-klikecont dl").each(function(){
      themeText += '<a href="javascript:;">'+$(this).find("dd a").text()+'</a>';      
    });
    $(".m-klike .m-ktitle dd").append(themeText);
    $(".m-hovertab-box").each(function(){
      $(this).find(".m-hovertab-btn").children().first().addClass("m-hover");
      $(this).find(".m-hovertab-cont:gt(0)").hide();      
    })
    $(".m-hovertab-btn").children().hover(function(){
      var tabSpeed = $(this).parents(".m-hovertab-box").attr("data-speed");
      var thisObj = $(this);  
      setTimer = setTimeout(function(){       
        thisObj.addClass("m-hover").siblings().removeClass("m-hover");
        var n = thisObj.index();
        thisObj.parents(".m-hovertab-box").find(".m-hovertab-cont").eq(n).show().siblings(".m-hovertab-cont").hide();     
      },tabSpeed) 
    },function(){
      clearTimeout(setTimer);
    })
    $(".m-hovertab-box").each(function(){
      var childSize = $(this).find(".m-hovertab-cont").length;
      for(i=0;i<childSize;i++){
        var childhtml = $(this).find(".m-hovertab-cont").eq(i).html().replace(/\s+/g,""); 
        if(childhtml==""){    
          $(this).find(".m-hovertab-cont").eq(i).hide();  
          $(this).find(".m-hovertab-btn li").eq(i).hide();
        }
      }
      for(i=0;i<childSize;i++){
        var childhtml = $(this).find("div").eq(i).html().replace(/\s+/g,"");  
        if(childhtml != ""){      
          $(this).find(".m-hovertab-cont").eq(i).show().siblings("div.m-hovertab-cont").hide();           
          $(this).find(".m-hovertab-btn li").eq(i).addClass("m-hover").siblings("li").removeClass("m-hover");         
          return false;
        }else{
          $(this).hide(); 
        }
      }
    })
  }
}


function zksq(){
   
    var conHeight = $(".m-center").outerHeight(true);
    if(conHeight>=500){
      $(".m-center").height(500);
      $(".m-zk").click(function(){
        $(".m-center").animate({"height":conHeight},300);
        $(this).hide().siblings().show();
      });
      $(".m-sq").click(function(){
        $(".m-center").animate({"height":500},300);
        $(this).hide().siblings().show();
      })
    }else{
      $(".m-fzk").hide();  
    }
  
}

$(function($) {
  searchsoft()
});



function searchsoft(){  
  //单软件
  $("#keyword").keyup(function(){
     if(event.keyCode == 13){
      keywordCont();

     }
  })
  $(".schbtn").click(function(){
    keywordCont();  
    
  })  

  function keywordCont(){
    var falseWords = ["_","+","破解","注册机","http:","https:"];
    var keyFont = $("#keyword").val();
    if(keyFont != ""){      
      for(i=0;i<falseWords.length;i++){
        if(keyFont.indexOf(falseWords[i]) != -1){
          alert("不允许有非法字符");
          return false;
        } 
      }   
            
      Insearch(0,keyFont,0,1)
      window.location.href="https://so.qqtn.com/search/d/"+keyFont+"_all_rank.html";  
    }else{
      window.location.href="https://so.qqtn.com"; 
    }   
  }
}

//搜索的keys 
function Insearch(sid,keys,typeclass,linum){

  var dataCont="action=31&urlclass=search&locationclass=search&typeclass="+typeclass+"&keyword="+escape(keys)+"&sid="+sid+"&stype=pc&linum="+linum

  
    $.ajax({
      type: "Get",
      url: "/ajax.asp",
      data: dataCont,
      success: function(msg){
        console.log("成功") 
        //alert(msg)
        

      },error:function(){
        console.log("失败")
      }
    }); 

}


function caip(){

    //彩票敏感词 
    var caipiaoMgc = ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
    for(s=0;s<caipiaoMgc.length;s++){
      var contentText = $(".m-center p").text().replace(/\s+/g,'');
      if(contentText.indexOf(caipiaoMgc[s]) != -1){
        //影藏版块
        var hideBox = '.m-down,.m-keyxh,.m-xgnews,.m-jietu,.m-center img,.g-info-tag,.m-sjph';
 
        mgcHide(hideBox);
        
        //替换内容
        var recomdHtml = ''; //编辑推荐html    
        
        var noDownBtnHtml = '<li><a class="m-xiajia" style="background-color:#c8c8c8;" href="javascript:;"><i></i>应用已下架</a></li>'; //下载按钮html

        var replaceDiv = ['','.m-down-ul'];
        var replaceHtml = [recomdHtml,noDownBtnHtml]
        mgcHtml(replaceDiv,replaceHtml);

        //return false;
      }             
      //通过正文处理结束
      //列表屏蔽
      $('.m-add-hover li,.m-sjhj li').each(function(){
        var txt = $(this).text();
        if (txt.indexOf(caipiaoMgc[s]) != -1) {
          
          $(this).hide()
        }
      })

        
        //处理屏蔽之后的排序
        // $('.m-add-hover li').each(function(i){
        //   $(this).find('i').text(i+1)
        // })

    }

}



function caip2(){

    //彩票敏感词 
    var caipiaoMgc = ['彩票','时时彩','福彩','体彩','双色球','购彩','足彩','六合彩'];
   var downurl = $('.m-ljdown a').attr('href')
if(downurl != undefined){
  if (  downurl.indexOf('tj.qqtj99.com') != -1  ) {
        //影藏版块
        var hideBox = '.m-down,.m-keyxh,.m-xgnews,.m-jietu,.m-center img,.g-info-tag,.m-sjph';
 
        mgcHide(hideBox);
        
        //替换内容
        var recomdHtml = ''; //编辑推荐html    
        
        var noDownBtnHtml = '<li><a class="m-xiajia" style="background-color:#c8c8c8;" href="javascript:;"><i></i>应用已下架</a></li>'; //下载按钮html

        var replaceDiv = ['','.m-down-ul'];
        var replaceHtml = [recomdHtml,noDownBtnHtml]
        mgcHtml(replaceDiv,replaceHtml);

        //return false;
      }             
    }
      //通过正文处理结束
      //列表屏蔽
      for(s=0;s<caipiaoMgc.length;s++){
      $('.m-add-hover li,.m-sjhj li').each(function(){
        var txt = $(this).text();
        if (txt.indexOf(caipiaoMgc[s]) != -1) {
          
          $(this).hide()
        }
      })
    }
        

    

}





function mgcHide(objdiv){ //版块影藏,objdiv = 对象
    $(objdiv).hide();
  }

function mgcHtml(objArray,divhtml){ //替换内容,objArray=替换对象[数组]，divhtml=替换内容[数组]
  for(var i = 0; i < objArray.length; i++){
    $(objArray[i]).html(divhtml[i]);

  }
  
}