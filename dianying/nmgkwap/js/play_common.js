function refresh(){
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
		m = parseInt(m);
	let t;
	if(m<30){
		t = h+'00';
	}else{
		t = h+'30';
	}

	$('a').each(function(){
		let dfsa = $(this).attr('href');
		if(dfsa==undefined) return true;
		if(dfsa.indexOf('tags')>-1) return true;
		let href = dfsa+"?t="+t;
		$(this).attr('href',href);
	});
}


$(function(){
    $('.switch').on('click', function() {
        var $newsLists = $(this).parent().parent().find('.dianshi .slist');
        var $currentNews = $newsLists.filter('.show');
        var $nextNews = $currentNews.next();

        if($nextNews.length === 0) {
            $nextNews = $newsLists.eq(0);
        }

        $newsLists.removeClass('show');
        $nextNews.addClass('show');
    });
});
//选项卡切换
function onSelect(obj, ch) {
    var parentNodeObj = obj.parentNode;
    var s = 0;
    for (i = 0; i < parentNodeObj.childNodes.length; i++) {
        // alert("第" +i +"次")
        if (parentNodeObj.childNodes[i].nodeName == "#text") {
            continue;
        }
        parentNodeObj.childNodes[i].className = "tab_1";
        var newObj = document.getElementById(ch + "_" + s);

        if (newObj != null) {
            newObj.style.display = 'none';
            if (parentNodeObj.childNodes[i] == obj) {
                newObj.style.display = '';
            }
        }
        s += 1;
    }
    obj.className = "tab_2";
};

$(function() {
    var changduimg= $(".ji-list a").width()+10;
    var le = $(".xuanji-box").length;
    if(le){
        for(var i=0;i<le;i++){
            var con = $(".xuanji-box:eq("+i+")").find(".ji-list a").length;
            $(".xuanji-box:eq("+i+")").find(".jiji").html(con);
            var sisi = con*changduimg;
            $(".xuanji-box:eq("+i+")").find(".ji-list").width(sisi);
        }
    };
    var len = $(".new_sidetitle div").length;
    var lenimg= $(".new_sidetitle div").width()+44;
    var lena= $(".new_sidetitle div").length;
    var lenzong= lenimg*lena;
    if (len > 4 || lenzong > 350 + "px") {
        $(".new_sidetitle").width(lenzong);
    };

    $('.xj-qj').click(function(e){
        var sd = $(this).attr('data-value');
        $(".qh" + sd).slideToggle();
        e.stopPropagation();
    });

    $(".dialog-header i").click(function(){
        var sd = $(this).attr('data-value');
        $(".qh" + sd).slideToggle();
    });

    $('[name="sidetitle"] div').click(function(e){
        var sid = $(this).attr('data-value');
        var p = $(this).attr('data-p');
        $(".v_l_p"+p).hide();
        $(".v_l_" + sid).show();
        e.stopPropagation();
    });

    $('.new_sidetitle .new_side').click(function(){
        $(this).addClass("cur");
        $(this).siblings().removeClass('cur');
    });

    $(".statefixed").click(function() {
        $(".statefixed").toggleClass("close");
        $(".schfixed").slideToggle();
    })

    $(".schbtn").click(function() {
        $(".schbtn").toggleClass("submit");
    })

    $(".menuico").click(function() {
        $(".menuico").toggleClass("on");
        $(".menu").slideToggle();
    })

    $(".backtotop").hide();
    $(window).scroll(function() { //窗口滚动
        if ($(window).scrollTop() > 100) { //窗口滚动条大于顶部100时
            $(".backtotop").fadeIn(500); //大于100时渐出
        } else {
            $(".backtotop").fadeOut(500); //小于100是影藏
        }
    });

    $(".backtotop").click(function() { //当点击跳转链接后，
        $('body,html').animate({
            scrollTop: 0
        }, 100); //回到body和HTML的0（顶部）
        return false;
    });

});

function plat(){
	 var u = navigator.userAgent,
        app = navigator.appVersion;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (
        /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
        .test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                    return "0"
                } else {
                    return "1"
                }
            } catch (e) {}
        }
    } else {
        if (u.indexOf("iPad") > -1) {
            return "0"
        } else {
            return "1"
        }
    }
    
}

function rand(n)
   {
     return (Math.floor( Math.random() * n + 1 ));
   }






function close_err(){
    $('#report-container').remove();
    $(".mask").hide();
};
function qiupianErr(obj){
    $('#report-container').remove();
    $(".mask").show();
    $('body').append(qpi);
};
