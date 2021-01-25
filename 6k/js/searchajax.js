function a(){
	$('#xdwwd')["focus"](function(){
		if($('#xdwwd')["val"]()=='请在此处输入影片片名或演员名称。'){
			$('#xdwwd')["val"]('')
		};
		if($('#xdwss')["html"]()==''){
			$('#xdwss')["html"]('请输入影片片名或演员名称')
		};
		$('#xdwss')["delay"](0xc8)["show"]('fast');
	});
	
	$('#xdwwd')["blur"](function(){
		if($('#xdwwd')["val"]()==''){
			$('#xdwwd')["val"]('请在此处输入影片片名或演员名称。')
		};
		$('#xdwss')["delay"](0x1f4)["hide"]('fast');
	});
	
	if($('#xdwwd')["val"]()=='请在此处输入影片片名或演员名称'){
		$('#xdwwd')["val"]('请在此处输入影片片名或演员名称');
	}
};
	
function b(){
	var c=$('#xdwwd')["val"]();
	c=c["replace"](/(^\s*)|(\s*$)/g,'');
	if(c==''){
		$('#xdwss')["html"]('请输入影片片名或演员名称');
		return;
	};
	var d=encodeURIComponent(c);
	$('#xdwss')["css"]('display','block');
	if(d["length"]>0x0){
		$["post"]('/index.php?s=search-ajaxsearch-wd-'+d,{by:'xdw'},function(e){
			(e!='')?$('#xdwss')["html"](e):$('#xdwss')["html"]('<a>没有精确结果</a>');
		});
	}else{
		$('#xdwss')["html"]('请输入影片片名或演员名称');
	}
};
	
$('#xdwwd')["keyup"](function(){b()});
$('#xdwwd p')["mouseover"](function(){
	$('#xdwwd p')["removeClass"]('check');
	$(this)["addClass"]('check');
});
a();