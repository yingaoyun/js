function show_history(cookie_name) {
    var history = $.cookie("mac_history_dianying");
    var history_data = [];
    var history_html = '';
    if ((history != undefined) && (history != '')) {
        history_data = eval(history);
    }
    if (history_data.length > 0) {
        for (var $i = 0; $i < history_data.length; $i++) {
            history_html += '<li class="list-item"><a href="' + history_data[$i].vod_url + '" title="' + history_data[$i].vod_name + '" class="list-item-link"><i class="icon-play"></i><span>' + history_data[$i].vod_part + '</span>' + history_data[$i].vod_name + '</a></li>';
        }
    } else {
        history_html = '<li class="drop-tips">暂无观影历史</li>';
    }
    $("#history").append(history_html);
}

function show_tip(text) {
    $('.shortcuts-box').show();
    $('#shortcuts-info').html(text);
    setTimeout(function () {
        $('.shortcuts-box').fadeOut(1000);
    }, 2000);
}
$(function () {
    if ($('.swiper-container').length > 0) {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            speed: 500,
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop: true
        });
    }
    show_history();
    $(".lazyload").lazyload({
        effect: "fadeIn",
        skip_invisible: false,
        event: 'sporty',
        threshold: 500
    });
    $("#txtKeywords").focus(function () {
        $(".ac_wd,.search-btn").addClass("search-focus");
        $(".ac_hot").removeClass("none");
        $("body").addClass("mobile-open");
    });
    $(document).click(function (e) {
        if ($(e.target).closest("#txtKeywords,.search-box").length == 0 || $(e.target).closest(".cancel-btn").length != 0) {
            $(".ac_hot").addClass("none");
            $(".ac_wd,.search-btn").removeClass("search-focus");
            $("body").removeClass("mobile-open");
        }
    });
    $(".tab-item").click(function () {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".tab-list").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
            $(".tab-list").eq($(this).index()).find(".lazyload").lazyload();
        }
        $(".module-tab-drop").removeClass("module-tab-drop");
        $(this).parents(".module-tab-items").siblings(".module-tab-name").children(".module-tab-value").text($(this).attr("data-dropdown-value"));
    });
    $(".downtab-item").click(function () {
        if (!$(this).hasClass("selected")) {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".downtab-list").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
            $(this).parents(".module-tab-items").siblings(".module-tab-name").children(".module-tab-value").text($(this).attr("data-dropdown-value"));
        }
        $(".module-tab-drop").removeClass("module-tab-drop");
    });
    $(".close-btn").click(function () {
        $(".tips-box").addClass("up");
    });
    $(".btn-screen").click(function () {
        $(".popup-tips").removeClass("none").addClass("open");
    });
    $(".btn-report").click(function () {
        $(".popup-report").removeClass("none").addClass("open");
    });




    $(".slogan").click(function () {
        $(".popup-notice").removeClass("none").addClass("open");
    });
    $(".close-popup,.close-popup2").click(function () {
        $(".popup").removeClass("open").addClass("none");
    });
    $(".module-tab .module-tab-name").click(function () {
        $(this).parent(".module-tab").addClass("module-tab-drop");
    });
    $(".shortcuts-mobile-overlay,.close-drop").click(function () {
        $(".module-tab-drop").removeClass("module-tab-drop");
    });
    $(".module-sorttab .module-tab-name").click(function () {
        $(this).parents(".module-sorttab").addClass("module-tab-drop");
    });
    $(".sort-button").click(function () {
        $(this).toggleClass("desc asc");
        $($(this).attr("to")).html($($(this).attr("to")).children().get().reverse());
    });
    $(".more-content").click(function () {
        $(".content-text,.blurb-text,.more-content").toggleClass("none");
    });
    $('.shortcuts-box').click(function () {
        $('.shortcuts-box').hide();
        $('#shortcuts-info').html('');
    });
    $(".gbook_submit").click(function () {
        MAC.Ajax(maccms.path + '/index.php/gbook/saveData', 'post', 'json', $('.gbook_form').serialize(), function (r) {
            if (r.code == 1) {
                $(".popup-report").removeClass("open").addClass("none");
            } else {
                if (MAC.Gbook.Verify == 1) {
                    MAC.Verify.Refresh();
                }
                show_tip(r.msg);
            }
        });
    });
    $(".historyclean").on("click",function(){
        $.cookie("mac_history_dianying",null,{expires:-1,path: '/'});
    });
    if ($('.qrcode-img').length > 0) {
        $('.qrcode-img').qrcode({
            text: location.href, //设置二维码内容，必须
            render: "canvas", //设置渲染方式 （有两种方式 table和canvas，默认是canvas）
            width: 90, //设置宽度
            height: 90, //设置高度
        });
    }
    if ($('.share-btn').length > 0) {
        var clipboard = new ClipboardJS('.share-btn');
        clipboard.on('success', function (e) {
            show_tip('分享信息复制成功，分享给好朋友一起看～');
        });
        clipboard.on('error', function (e) {
            console.log(e);
        });
    }
    if ($('.copy').length > 0) {
        var down_clipboard = new ClipboardJS('.copy');
        down_clipboard.on('success', function (e) {
            show_tip('下载地址复制成功');
        });
        down_clipboard.on('error', function (e) {
            console.log(e);
        });
    }

    //返回顶部
    var $body = $(document.body);
    $(window).scroll(function () {
        let scrollHeight = $(document).height();
        let scrollTop = $(window).scrollTop();
        let $footerHeight = $('.page-footer').outerHeight(true);
        let $windowHeight = $(window).innerHeight();
        scrollTop > 50 ? $("#scrollUp").fadeIn(200).css("display","block") : $("#scrollUp").fadeOut(200);
    });
    $('#scrollUp').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop:0});
    });

    //请保留作者版权
    console.log('电影先生开源版v1.0.1，本源码永久免费更新，作者QQ：602524950，模板交流群：872882160，源码只可用于学习交流禁止从事违法行为');

});


