var line1Obj = function(){	
	
	this.ar;  /*随机数字数组*/
	this.arr; /*去重数字数组*/
	this.ulWrap;
	
	this.uls=[]; /*行列表数组*/
	this.ulsLis=[]; /*行的每一项数组*/
	this.ulsLis1=[];/*第一行数组*/
}

line1Obj.prototype.init = function(){
	/*初始化数据*/
	this.ar=[];
	this.arr =[];
	this.ulWrap = document.getElementById("wrap");
	/*获得行数组*/
	this.uls =document.getElementsByTagName("ul");
	/*获得第一行的项数组*/
	this.ulsLis1 = this.uls[0].getElementsByTagName("li");
	/*获得每行每项*/
	for(var i =0;i<this.ulsLis1.length;i++){
		this.ulsLis[i] = this.uls[i].getElementsByTagName("li");
	}
	/*console.log(this.ulsLis1.length);*/
}

line1Obj.prototype.chooseNum = function(){
	var that = this;
	var sj;
	/*获得随机数组*/
    function randomNum(){
    	
       for(var i =0;i<that.ulsLis1.length;i++){
       	sj = Math.floor(Math.random()*that.ulsLis1.length)+1;
       	that.ar.push(sj);
       }
       /*console.log(that.ar);*/
       /*去重*/
       noRepeat();
    }
    randomNum();
    
  
    function noRepeat(){
    	/*去重*/
        that.ar.forEach(function(item,index){
        	that.arr.indexOf(item)===-1?that.arr.push(item):"";	      	     
        })
      /*console.log(that.arr.length+"  "+that.ulsLis1.length);*/
      /*去重后重填随机数*/
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
}

