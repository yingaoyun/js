/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function($) {
  !function(a){function b(a){a&&a.stopPropagation?a.stopPropagation():window.event&&(window.event.cancelBubble=!0)}function c(a){return a&&a.preventDefault?a.preventDefault():window.event.returnValue=!1,!1}function d(a,b){b?a.removeAttr("unselectable").removeAttr("onselectstart").css("-moz-user-select","").css("-webkit-user-select",""):a.attr("unselectable","on").attr("onselectstart","return false;").css("-moz-user-select","none").css("-webkit-user-select","none")}a.fn.scrollbar=function(e,f){"function"==typeof e?(f=e,e={}):(e=e||{},f=f||function(){});var g={contentCls:"content",trackCls:"track",direction:"y",step:50,touchable:!0,autoReset:!0,inEndEffect:!1,slide:0},h=a.extend({},g,e),i=a("body"),j=a(document);return this.each(function(){function e(a){if("none"!=o.css("display")){a=a||window.event;var d=-a.wheelDelta/120||a.detail/3,e="y"==h.direction?-n.position().top+d*h.step:-n.position().left+d*h.step;e>D?(e=D,h.inEndEffect||(b(a),c(a))):0>e?(e=0,h.inEndEffect||(b(a),c(a))):(b(a),c(a)),r.slide(e)}}function g(a){b(a),v={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},t="y"==h.direction?-n.position().top||0:-n.position().left||0}function k(a){b(a);var d={pageX:a.changedTouches[0].pageX,pageY:a.changedTouches[0].pageY},e="x"==h.direction?v.pageX-d.pageX:v.pageY-d.pageY;("x"==h.direction&&Math.abs(d.pageY-v.pageY)<Math.abs(e)||"y"==h.direction)&&(e+=t,c(a),0>e?e=0:e>D&&(e=D),C>0&&(p.css("y"==h.direction?"top":"left",e*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-e+"px")))}function l(a){b(a),isTouch=!1}var m=a(this),n=m.find("."+h.contentCls),o=m.find("."+h.trackCls),p=o.children(),q=this,r={},s=0,t=0,u=0,v={},w=!1;if(m.css({position:"relative",overflow:"hidden"}),n.css({position:"absolute"}),"x"==h.direction){var x=0;n.children().each(function(){var b=a(this);b.css({width:b.width()+"px"}),x+=b.outerWidth(!0)}),n.css({width:x+"px"})}p.css({position:"absolute"}),o.show();var y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=B=A/z*y,C=y-B,D=z-A;z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,r.slide=function(a){a>D?a=D:0>a&&(a=0),D>0&&(p.css("y"==h.direction?"top":"left",a*r.ratio+"px"),n.css("y"==h.direction?"top":"left",-a+"px"))},r.resize=function(){if("x"==h.direction){var b=0;n.children().each(function(){var c=a(this);c.removeAttr("style").css({width:c.width()+"px"}),b+=c.outerWidth(!0)}),n.css({width:b+"px"})}o.show(),y="y"==h.direction?o.height():o.width(),z="y"==h.direction?n.height():n.width(),A="y"==h.direction?m.height():m.width(),B=A/z*y,C=y-B,D=z-A,z>A?p.css("y"==h.direction?"height":"width",B+"px"):o.hide(),r.ratio=C/D,h.autoReset&&r.slide(0)},r.getRatio=function(){return r.ratio=C/D},r.slide(h.slide),o.on({mousedown:function(a){w=!0,s="y"==h.direction?o.offset().top:o.offset().left,u="y"==h.direction?a.pageY-s-p.position().top:a.pageX-s-p.position().left,d(i,!1)},mouseup:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}}}),j.on({mousemove:function(a){if(w){var b="y"==h.direction?a.pageY-s:a.pageX-s;u>0&&B>u&&(b-=u),r.slide(b/r.ratio)}},mouseup:function(){w=!1,u=0,d(i,!0)},resize:r.resize}),document.addEventListener&&q.addEventListener("DOMMouseScroll",e,!1),q.onmousewheel=e,q.addEventListener&&h.touchable&&(q.addEventListener("touchstart",g),q.addEventListener("touchmove",k),q.addEventListener("touchend",l)),f(r)})}}(jQuery);//滚动插件库
      //放大图片库
      var _LOOK_INDEX=0;(function($){$.fn.simpleSlide=function(options){var _i=_LOOK_INDEX;var _THIS=$(this);var _defaults={"opacity":0.8,"windowAction":"fadeIn","imageAction":"fadeIn","loadingImage":"/skin/new2018/images/loading.gif"};var _OPTIONS=$.extend(_defaults,options);var _ATTR=_OPTIONS;var _ALL_IMG_URL=[];var _I=0;_THIS.each(function(i){var _OBJ=$(this);_OBJ.attr("i")==undefined?_ALL_IMG_URL[i]=undefined:_ALL_IMG_URL[i]=_OBJ.attr("i");if(_OBJ.attr("i")==undefined){_I++}});if(_I==_THIS.size()){return false}function _GET_URL(){for(var i=0;i<_ALL_IMG_URL.length;i++){if(_ALL_IMG_URL[i]!=undefined){return i}}}_SET_WINDOWS();var _LOOK_BACK=$(".LookPicture_Background").eq(_i);_LOOK_BACK.fadeTo(0,_ATTR.opacity);var _LOOK_OBJ=$("#LookPicture_"+_i);var _LOOK_BEFORE=_LOOK_OBJ.find(".Look_before");var _LOOK_NEXT=_LOOK_OBJ.find(".Look_next");_THIS.css("cursor","pointer");_THIS.on("click",function(){$(document.body).addClass("none");var _IMG_INDEX=_THIS.index($(this));_IMG_INDEX=_ALL_IMG_URL[_IMG_INDEX]==undefined?_GET_URL():_IMG_INDEX;_LOOK_BACK.addClass("Look_Open");_LOOK_OBJ.addClass("Look_Open");_LOOK_OBJ.find(".Look_img").removeClass("Look_Show");_LOOK_OBJ.find(".Look_img").eq(_IMG_INDEX).addClass("Look_Show");_LOADING(_IMG_INDEX);_LOOK_SIZE()});_LOOK_OBJ.bind("mousewheel",function(event,delta){var dir=delta>0?"Up":"Down";if(dir=="Up"){_LOOK_BEFORE.click()}else{_LOOK_NEXT.click()}});
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
        //zksq();
		
      } 



    $('.f-bigimg').simpleSlide();//执行截图放大
})