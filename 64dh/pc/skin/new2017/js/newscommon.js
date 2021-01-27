/*开发豆原创源码，唯一官网：www.kaifadou.com*/
$(function($) {
  searchOver();
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





