/*$(document).ready(function(){
 var playnav=document.getElementById('playnav');
 var oNav=playnav.getElementsByTagName('li');

 var playcontainer=document.getElementById('playcontainer');
 var oDiv=playcontainer.getElementsByClassName('tab');
 for(var i=0;i<oNav.length;i++){
  oNav[i].index=i;
  oNav[i].onclick=function () {
  for(var i=0;i<oNav.length;i++){
   oNav[i].className='';
   oDiv[i].style.display="none";
  }
  this.className='act';
  oDiv[this.index].style.display="block"
  }
  for(var m=1;m<oNav.length;m++){
   oNav[m].className='';
   oDiv[m].style.display="none";
  }
 }
});
*/

$(document).ready(function(){
  	if(autofullScreen==1)Fs();
  	$("#Fs").bind("click",Fs);
  	$("#Efs").bind("click",Efs);
});
$(document).keyup(function(event){
	switch(event.keyCode) {
	case 27:Efs();
	case 96:Efs();
	}
});
function Fs(){
  delParam('autofullScreen');
  $("#Fs").hide();
  $("#Efs").show();
  $("#playerbox").css({
    "position":"fixed",
    "top":"0",
    "left":"0",
    "z-index":"1000",
    "width":"100%",
    "height":"100%",
  });
}
function Efs(){
  delParam('autofullScreen');
  $("#Efs").hide();
  $("#Fs").show();
  $("#playerbox").removeAttr("style");
}
if (pid !=="") {
    $.get('/vcount?id='+pid);
}


function delParam(paramKey) {
  var url = window.location.href;    //页面url
  var urlParam = window.location.search.substr(1);   //页面参数
  var beforeUrl = url.substr(0, url.indexOf("?"));   //页面主地址（参数之前地址）
  var nextUrl = "";

  var arr = new Array();
  if (urlParam !== "") {
    var urlParamArr = urlParam.split("&"); //将参数按照&符分成数组
    for (var i = 0; i < urlParamArr.length; i++) {
      var paramArr = urlParamArr[i].split("="); //将参数键，值拆开
      //如果键雨要删除的不一致，则加入到参数中
      if (paramArr[0] != paramKey) {
        arr.push(urlParamArr[i]);
      }
    }
  }
  if (arr.length > 0) {
    nextUrl = "?" + arr.join("&");
  }
  url = beforeUrl + nextUrl;
  //return url;
  var stateObject = {};
  history.pushState(stateObject,"",url);
}