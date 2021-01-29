function gotop(){$('body,html').animate({scrollTop:0},600);}
function gofooter(){$('body,html').animate({scrollTop:$(document).height()},600);}
function menu_toggle() {
    $('nav, .search').slideToggle();
    $('#menu-btn').text() == '菜单' ? $('#menu-btn').text('关闭') : $('#menu-btn').text('菜单')
}
function setEcho(){$("img.lazy").lazyload({effect : "fadeIn"})}
function search(){
    document.write('<form class="flex" name="t_frmsearch" method="post" action="/search/"><input id="searchkey" type="text" name="searchkey" class="search_input" placeholder="书名或作者,请您少字也别错字" autocomplete="off"><button type="submit" name="Submit" class="search_btn" title="搜索"> 搜 索 </button></form>');
}

		var speaker = new window.SpeechSynthesisUtterance();
		var speakTimer,
		    stopTimer;
 
		// 开始朗读
		function speakText() {
		var context = document.getElementById('article');
		    clearTimeout(speakTimer);
		    window.speechSynthesis.cancel();
		    speakTimer = setTimeout(function () {
		    	speaker.volume = 0.9
		        speaker.text = context.innerHTML;
		        window.speechSynthesis.speak(speaker);
		    }, 200);
		}
 
		// 停止朗读
		function stopSpeak() {
		    clearTimeout(stopTimer);
		    clearTimeout(speakTimer);
		    stopTimer = setTimeout(function () {
		        window.speechSynthesis.cancel();
		    }, 20);
		}						
