
 window.onload= init;
 
	var deltaTime;
	var lastTime;
	 
	var x = [];
	var y = [];
	var z = [];
 //定义成员的容器
 	var box = document.getElementById('ims');
 	
 	//获得图片对象集合
 	var imgs = box.getElementsByTagName('img');
 	
 	//定义图片初始X坐标
 	var img_x = box.offsetWidth;
 	
 	//定义图片出事Y坐标
 	var img_y = box.offsetHeight;
 function init(){
 	//设置每张图片的初始位置
 for (var i = 0;i<13;i++){
 	   x[i] = 200+50*i;
 	    y[i] = 200-50*i;
 	    if(y[i]<0){
 	       y[i] = 50*i-200;
 		   }
 		//后面要加个字符串“px”才表示宽度
 		imgs[i].style.left = x[i] +'px'; 		
 		imgs[i].style.top = y[i]+ 'px';	
     }
 for (var i = 13; i<imgs.length;i++)
     {
      x[i] = 180+50*i;	
      y[i] = 1000-50*i;
      //后面要加个字符串“px”才表示宽度
 	  imgs[i].style.left = x[i] +'px'; 		
 	  imgs[i].style.top = y[i]+ 'px';	
     }
        imgs_location();
}
function imgs_location(){
	/*
	window.requestAnimationFrame(imgs_location);
	//获取两帧时间差
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	*/
	for(var i =0;i<imgs.length;i++)
	{
	 z[i] = document.getElementById("im"+i);
	 z[i].style.animationName = "my"+i;
	 z[i].style.animationDuration = Math.random()*2 +1+"s";
	}

}


