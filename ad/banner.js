var randoms = {
	ads_codes: [
        'https://ae01.alicdn.com/kf/Hd646f36ea6a04ab0b17dc464bb831e957.gif',
        'https://ae01.alicdn.com/kf/H777516551b03408cbdccdbd47db6995bH.png',
        'https://ae01.alicdn.com/kf/Hf3cd5cbc62884a98959edd322a588b8dl.gif',
        'https://ae01.alicdn.com/kf/Hfb2b76d012d743929a853f0a1a4f6716o.png',
        'https://ae01.alicdn.com/kf/Hae3c6a7aad184ab88eda38e72ee42718X.gif',
        'https://ae01.alicdn.com/kf/H9952472ed94e48b6a39f696e6ed6deaem.png',
		'https://p.pstatp.com/origin/pgc-image/2f456c14a1024d8383fbbcbb4e1e1419',
		'https://p.pstatp.com/origin/pgc-image/e970b952d8c04b4890e7e0eddc5c97bc',
		'https://p.pstatp.com/origin/pgc-image/27ac983167ed4cf99c703be025d7a819',
		'https://p.pstatp.com/origin/pgc-image/1aa9c4862a60496aa59eb4e8dcbc0cad',
		'https://p.pstatp.com/origin/pgc-image/a79e2d46d780478c9e9d90db1acdef43',
		'https://p.pstatp.com/origin/pgc-image/b3689e8a3eb5408b85208433ba01a6df',
		'https://p.pstatp.com/origin/pgc-image/55dc1d8e405e43a7a450880850b51b76',
		'https://p.pstatp.com/origin/pgc-image/fcbf9b4561784a429a87acff8e98a67c',
		'https://p.pstatp.com/origin/pgc-image/bccf4a365baf424dbbc776a165b9e065'
    ],
	ads_weight: [10,10,10,10,10,10,10,10],

	get_random: function(weight) {
        var s = eval(weight.join('+'));
        console.log(s);
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {
		var rand = randoms.get_random(randoms.ads_weight);
		document.write('<div><a href="https://mtzb24.cc/?channelCode=ss06"><img src="'+randoms.ads_codes[rand]+'" style="width: 100%;height: auto;"></a></div>');
	}
}
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
    randoms.init();
}
