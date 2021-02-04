!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

function reloadcode() {
    newcode = $('#showcode').prop("src") + '?' + Math.random();
    $('#showcode').prop("src", newcode);
}
function register_check() {
    if($('#regname').val() == '' || $('#regpass').val() == '' || $('#repass').val() == '' || $('#email').val() == '' ) {
        alert('每项都必须填写');
        return false;
    };
    if($('#regpass').val() !== $('#repass').val()){
        alert('两次输入的密码不一致');
        return false;
    }
    return true;
}
function addbookcase(aid,name,cid,cname){
	if($.cookie('ss_userid') && $.cookie('PHPSESSID') != -1) {
        rico_data = {
            articleid: aid,
            articlename: name,
            chapterid: cid,
            chaptername: cname
        }

        $.ajax({
            type: "post",
            url: "/addbookcase/",
            data: rico_data,
            success: function(data){
                alert(data);
            }
        })       

	}else{
		if (window.confirm("\n永久书架需要登录才能使用，转到登录页面吗？")) {
			window.location.href = "/login/";
		}else{
			return;
		}
	}
}
function delbookcase(aid){
    if (window.confirm("\n确定要删除吗？")) {
        if($.cookie('ss_userid') && $.cookie('PHPSESSID') != -1) {
            rico_data = {
                articleid: aid,
            },
            $.ajax({
                type: "post",
                url: "/delbookcase/",
                data: rico_data,
                success: function(data){
                    alert(data);
                    window.location.reload();
                }
            })       
        }
    }else{
        return;
    }
}

var Audio = new Audio();
var audios = [];

function playAll()
{
    var content = document.getElementById("booktxt").innerHTML.trim()
    .replace("\n", "。")
    .replace("\r\n", "。")
    .replace(" ", "，")
    .replace(/&nbsp;/ig, "，")
    .replace(/http:\/\//ig, "")
    .replace(/<.+?>/g, "");

    var p = Math.ceil(content.length / 500);

    for(i = p; i > 0; i --)
    {
        var curText = content.substring(((i-1)*500), i*500).trim();
        //if(i == p) curText += "";
        curText = encodeURI(encodeURI(curText));
        audios.push("https://tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&per=4&pdt=311&tex=" + curText);
    }

    Audio.controls = true;
    Audio.preload = true;
    Audio.loop = false;

    if(audios.length > 1)
      Audio.addEventListener('ended', playNext, false); 

    Audio.src = audios.pop();

    Audio.style.position = "relative";
    //Audio.style.left = "15%";
    Audio.style.zIndex = "9999999";

    var c = document.getElementById("play");
    c.insertBefore(Audio, c.childNodes[0]);
}

function playNext()
{
    Audio.src = audios.pop();
    Audio.play();
    !audios.length && Audio.removeEventListener('ended',playNext,false);
}