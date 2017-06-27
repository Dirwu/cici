# 6宫格数独
本次练习的题目是数独，主要由以下几个步骤
1.生成宫格列表（本次做的是6位数独）
2.获得数字数组
3.筛选数组
4.填充数组
5.随机生成空格（时间关系，这一步还未做~~）
#####生成宫格列表
```
function init(){
	  /*生成列表*/
	 var key=document.getElementById("test").value,
         x=document.getElementById("wrap"),
         y=[],z=[];
              
       	for(var i=0;i<parseInt(key);i++)
       	{
       	   y[i]=document.createElement("ul");
       	   x.appendChild(y[i]);
       	 for(var j =0;j<parseInt(key);j++)
       	  {
       	    z[j]=document.createElement("li");
       	    y[i].appendChild(z[j]);
       	  }
        }
}
```
key表示生成几宫格，
简单生成(key) x (key)的ul li列表

#####获得数字数组
通过简单的random函数生成随机数

#####筛选数组
```
    function noRepeat(){
    	/*去重*/
        that.ar.forEach(function(item,index){
        	that.arr.indexOf(item)===-1?that.arr.push(item):"";	      	     
        })
      /*去重后重填*/
      if(that.arr.length<that.ulsLis1.length){
      	rePush();
      } 
    }
    
    function rePush() 
    {
      for(var i= 0;i<5;i++){
    	that.ar=[];
    	sj = Math.floor(Math.random()*that.ulsLis1.length)+1;
    	that.ar.push(sj);	
        /*去重*/
    	noRepeat();
    	/*console.log(that.arr);*/
    	}
    }
```
主要包括两步，首先去重，然后重填，重复着两个步骤，直至获得6个数

```
   getNum();
   function l5()
    {
       for(var i =0;i<5;i++)
       {
       	for(var k=0;k<count;k++)
       	{
          if(arrAll[i][k]===line10.arr[k])
          {
       	   getNum();
       	   l5();
       	   break;
       	  }else{
       	   arrAll[5]=line10.arr;
       	     }
       	 }
       }
     }
     l5();
```
筛选满足数独条件数组，并存储在一个新的数组。
#####填充数组
最后将新数组填充在之前的列表中。
#####随机生成空格
数独肯定要能玩才行，时间关系先搁置一下~~（跑路）

[页面入口](https://dirwu.github.io/javaScript/index.html)














