function DoOne(key,method) {
	var v = getCookie(key);
	if (!v) {
		//method("do something");
        $("#tisxin").show();
        setTimeout(function(){
            $("#tisxin").hide();       
        },2000);
		//获取第二天凌晨到当前时间的秒数
		var tim_sec = 24 * 60 * 60 - (new Date().getHours() * 60 * 60 + new Date().getMinutes() * 60 + new Date().getSeconds());
		setCookie(key, "1", tim_sec);
	}
}
function dosome(msg){
	console.log(msg);
}
//写cookies 
function setCookie(name, value, second) {
	if (!second) {
		second = 7 * 24 * 60 * 60;//默认7天
	}
	var exp = new Date();
	exp.setTime(exp.getTime() + second * 1000);
	document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
//读取cookies 
function getCookie(name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(name + "=");//获取字符串的起点
		if (c_start != -1) {
			c_start = c_start + name.length + 1;//获取值的起点
			c_end = document.cookie.indexOf(";", c_start);//获取结尾处
			if (c_end == -1) c_end = document.cookie.length;//如果是最后一个，结尾就是cookie字符串的结尾
			return decodeURI(document.cookie.substring(c_start, c_end));//截取字符串返回
		}
	}
	return "";
}
DoOne("key", dosome);