/**
 * Created by MG on 2019/5/18.
 */
/*
$.getJSON("/api/play.php?type="+vtype+"&v="+vkey, function(result){
    if (result.url!=null) {
      	var webdata = {
		set:function(key,val){
			window.sessionStorage.setItem(key,val);
		},
		get:function(key){
			return window.sessionStorage.getItem(key);
		},
		del:function(key){
			window.sessionStorage.removeItem(key);
		},
		clear:function(key){
			window.sessionStorage.clear();
		}
	};
    var dp = new DPlayer({
        autoplay: vplay,
        container: document.getElementById('player'),
        video: {
            url: result.url,
        	type: 'auto',
        	pic: poster,
          },
          volume: 0.8,
          preload: 'auto',
          theme: '#28FF28'
    });
    if(sTime<webdata.get('pay'+vkey)) sTime=webdata.get('pay'+vkey);
	dp.seek(sTime);
	setInterval(function(){
		webdata.set('pay'+vkey,dp.video.currentTime);
	},1000);
      
    } else {
        //资源解析失败
    }
});
*/
if (vtype !="") {
  	$.post("/api/play.php",{type:vtype,v:vkey,uid:uid,country_id:returnIpCity.data.country_id},function(result){
      	if (poster=='')poster=result.poster;
        if (result.app=='dp') {
            var webdata = {
              set:function(key,val){
                  window.sessionStorage.setItem(key,val);
              },
              get:function(key){
                  return window.sessionStorage.getItem(key);
              },
              del:function(key){
                  window.sessionStorage.removeItem(key);
              },
              clear:function(key){
                  window.sessionStorage.clear();
              }
          };
    	  var pTime = webdata.get('pay'+vkey);
          var dp = new DPlayer({
              autoplay: result.autoplay,
              container: document.getElementById('player'),
              video: {
                  url: result.url,
                  type: 'auto',
                  pic: poster,
                },
                volume: 0.8,
                preload: 'auto',
                theme: '#28FF28'
          });
          var notice="视频加载中，请稍等！";
  		  if(sTime > pTime) notice="正在为您跳过片头广告，请稍等！";
          dp.on('loadstart', function () {
          	dp.notice(notice,5000);
          });
          dp.on('playing', function () {
            dp.notice(' ',500);
          });
          if(sTime < pTime ) sTime=pTime;
          dp.seek(sTime);
          setInterval(function(){
              webdata.set('pay'+vkey,dp.video.currentTime);
          },1000);  
  	var div = document.getElementById('player');
	div.addEventListener('dblclick', test);
  	function test(e) {
  		var full=jQuery("[name='full']").val();
      	if(full==0){
          var txt=1;
          jQuery("[name='full']").val(txt);
          dp.fullScreen.request('browser');
        }
      	if(full==1){
          var txt=0;
          jQuery("[name='full']").val(txt);
          dp.fullScreen.cancel('browser');
        }
    }
        }else if(result.app=='h5'){
          	$('#player').html('<video src="'+result.url+'" controls="controls" preload="preload" width="100%" height="99%" poster="'+poster+'" ></video>');
        }else if(result.app=='iframe'){
          	$('#player').html('<iframe class="play" id="vodplay" src="'+result.url+'" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no" allowfullscreen="" style="height: 100%;width: 100%;"></iframe>');
        }else{
            $('#player').html('<div class="errmsg"><p>'+result.msg+'</p></div>');
        }
    },"json");
}