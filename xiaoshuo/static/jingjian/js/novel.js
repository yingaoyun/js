
//内容页用户设置
function nr_setbg(intype){
	var huyandiv = document.getElementById("bgmode-huyan");
	var light = document.getElementById("bgmode-light");
	if(intype == "huyan"){
		if(huyandiv.className == "btn-setbg"){
			document.cookie="light=huyan;path=/"; 
			set("light","huyan");
		}
		else{
			document.cookie="light=no;path=/"; 
			set("light","no");
		}
	}
	if(intype == "light"){
		if(light.innerHTML == "关灯"){
			document.cookie="light=yes;path=/";
			set("light","yes");
		}
		else{
			document.cookie="light=no;path=/"; 
			set("light","no");
		}
	}
	if(intype == "big"){
		document.cookie="font=big;path=/";
		set("font","big");
	}
	if(intype == "middle"){
		document.cookie="font=middle;path=/"; 
		set("font","middle");
	}
	if(intype == "small"){
		document.cookie="font=small;path=/"; 
		set("font","small");
	}		
}

//内容页读取设置
function getset(){ 
	var strCookie=document.cookie; 
	var arrCookie=strCookie.split("; ");  
	var light;
	var font;

	for(var i=0;i<arrCookie.length;i++){ 
		var arr=arrCookie[i].split("="); 
		if("light"==arr[0]){ 
			light=arr[1]; 
			break; 
		} 
	} 

	//light
	if(light == "yes"){
		set("light","yes");
	}
	else if(light == "no"){
		set("light","no");
	}
	else if(light == "huyan"){
		set("light","huyan");
	}
}


//内容页读取设置
function getset1(){ 
	var strCookie=document.cookie; 
	var arrCookie=strCookie.split("; ");  
	var light;
	var font;

	for(var j=0;j<arrCookie.length;j++){ 
		var arr=arrCookie[j].split("="); 
		if("font"==arr[0]){ 
			font=arr[1]; 
			break; 
		} 
	} 

	//font
	if(font == "big"){
		set("font","big");
	}
	else if(font == "middle"){
		set("font","middle");
	}
	else if(font == "small"){
		set("font","small");
	}
	else{
		set("font","middle");	
	}
}

//内容页应用设置
function set(intype,p){
	var nr_body = document.getElementById("container");//页面body
	var huyandiv = document.getElementById("bgmode-huyan");//护眼div
	var lightdiv = document.getElementById("bgmode-light");//灯光div	
	var fontbig = document.getElementById("fontbig");//大字体div
	var fontmiddle = document.getElementById("fontmiddle");//中字体div
	var fontsmall = document.getElementById("fontsmall");//小字体div
	var nr1 =  document.getElementById("content");//内容div
	

	
	//灯光
	if(intype == "light"){
		if(p == "yes"){	
			//关灯
			lightdiv.innerHTML = "开灯";
            lightdiv.className = "btn-setbg active";
            nr_body.className = "container nightmode";
			huyandiv.className = "btn-setbg";
		}
		else if(p == "no"){
			//开灯
			lightdiv.innerHTML = "关灯";
            lightdiv.className = "btn-setbg";
            nr_body.className = "container";
			huyandiv.className = "btn-setbg";
		}
		else if(p == "huyan"){
			//护眼
			lightdiv.innerHTML = "关灯";
            lightdiv.className="btn-setbg";
			huyandiv.className="btn-setbg active";
            nr_body.className = "container huyanmode";
		}
	}
	//字体
	if(intype == "font"){
		fontbig.className="";
		fontmiddle.className="";
		fontsmall.className="";
		if(p == "big"){
			fontbig.className="active";
			nr1.style.fontSize="25px";
		}
		if(p == "middle"){
			fontmiddle.className="active";
			nr1.style.fontSize = "20px";
		}
		if(p == "small"){
			fontsmall.className="active";
			nr1.style.fontSize = "14px";
		}
	}
}


