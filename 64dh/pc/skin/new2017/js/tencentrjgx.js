/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function($) {

    tabase();
    hovertop();
    gotop();
    searchOver();

    $('.f-top3').each(function(){
        $(this).find('li:first').addClass('libk f-ii');
        $(this).find('li:first span:first').css({"background-position":"-35px 0 "})
    })

    
    $('.f-top3 li').mouseover(function(){

    $(this).addClass('libk').siblings().removeClass('libk');
    $(this).siblings().removeClass('f-ii').end().addClass('f-ii');
    $(this).find('span:first').css({"background-position":"-35px 0 "}).parents('.f-top3 li').siblings().find('span:first').css({"background-position":"-35px -23px "});

    })


});

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

function searchOver(){


    var moren = "软件";
    $("#topForm dl:first").click(function(){
        var liLast = $(this).children("dd").css("display");

        if(liLast=="none"){
            $(this).find("dd").show();
        }else{
            $(this).find("dd").hide();
        }
    })
    $("#topForm dl dd").click(function(){
        moren = $(this).attr("data-type");
        $("#topForm dl dt").html(moren+"<i></i>")
    })
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



            if(moren=="软件"){

                Insearch(0,keyFont,0,1)
                window.location.href="http://so.qqtn.com/search/d/"+keyFont+"_all_rank.html";
            }else{
                Insearch(0,keyFont,1,1)
                window.location.href="http://so.qqtn.com/search/w/"+keyFont+".html";
            }



        }else{
            window.location.href="so.qqtn.com";
        }
    }
}
function tabase(){//通用选项卡
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
function hovertop(){//鼠标经过改变样式

     $('.f-top li').mouseover(function(){
        $(this).siblings().removeClass('f-ix').end().addClass('f-ix');
        $(this).find('.f-title p:first').addClass('titlep').parents('.f-top li').siblings().find('.f-title p:first').removeClass('titlep');
       // $(this).find('.fr-download span').css({"background-position":"0 0 "}).parents('.f-top li').siblings().find('.fr-download span').css({"background-position":"0 -30px "});

    }).mouseout(function(){
         $(this).removeClass('f-ix');
        $(this).find('.f-title p:first').removeClass('titlep');
        // $(this).find('.fr-download span').css({"background-position":"0 -30px"});

     });


}





function gotop(){//返回顶部
    $("body").append('<div class="g-float"><a href="javascript:;" id="m-top-back"></a></div>');
    // 滚动监听显示隐藏并且返回顶部
    $(window).scroll(function(){
        if($(window).scrollTop()>60){
            $("#m-top-back").animate({height:60},10);
        }else{
            $("#m-top-back").animate({height:0},10);
        }
    });
    $("#m-top-back").mouseover(function(){
        $(this).css({'background-position':'-60px 0 '})
    }).mouseout(function(){
        $(this).css({'background-position':'0 0 '})
    });
    $("#m-top-back").click(function(){
        $("body,html").animate({scrollTop:0},300)
    });
}
