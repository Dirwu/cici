var key=0;

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

function removeUl(){
	 /*移除列表*/
	 var x=document.getElementById("wrap"),
         y=x.getElementsByTagName("ul");
     for(var i =y.length-1;i>=0;i--){
     		x.removeChild(y[i]);
     	}
    	
}

function begin(){
    if(key===0){
     init();
	 main();
	 key=1;
    }else{
    	alert("Pleease click 'OVER' buttton");
    }
	     
}
function over(){
    if(key===1){
    removeUl();
    key=0;
    }else{
    	alert("Pleease click 'begin' buttton");
    }
}

function reset(){
	if(key===1){
		main();
	}else{
	   alert("Pleease click 'begin' buttton");	
	}
 }

function main(){
	/*获取数字*/
	var arrAll=[],
         line10 = new line1Obj;
         
    function getNum(){
       line10.init();
       line10.chooseNum();
    }
    getNum();
        
    var count = line10.arr.length;
    /*筛选1~6列的数字*/
    function l0(){
        arrAll[0]=[];
        arrAll[0]=line10.arr;
    }
    l0();
    getNum();
        
    function l1(){
        for(var i =0;i<count;i++)
        {
           if(arrAll[0][i]===line10.arr[i])
           {
            getNum();
            l1();
            break;
           }else{
            arrAll[1]=line10.arr;
        	}
        } 
      }
      l1();
      getNum();
      
    function l2()
    {
       for(var i =0;i<2;i++)
       {
       	  for(var k=0;k<count;k++)
       	  {
       		if(arrAll[i][k]===line10.arr[k])
       		{
       			getNum();
       			l2();
       			break;
       		}else{
       			arrAll[2]=line10.arr;
       		  }
          }
        }
    }
    l2();
    getNum();
      
    function l3()
    {
       for(var i =0;i<3;i++)
       {
       	for(var k=0;k<count;k++)
       	 {
       		if(arrAll[i][k]===line10.arr[k])
       		{
       			getNum();
       			l3();
       			break;
       		}else{
       			arrAll[3]=line10.arr;
       		  }
          }
        }
     }
     l3();
     getNum();
      
    function l4()
    {
       for(var i =0;i<4;i++)
       {
       	for(var k=0;k<count;k++)
       	{
       	   if(arrAll[i][k]===line10.arr[k])
       	   {
       	   getNum();
       	   l4();
       	   break;
       		}else{
       			arrAll[4]=line10.arr;
       		  }
       	 }
       }
    }
    l4();
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
     getNum();
                              
     function fillNum()
     {
     	/*将数字填入框中*/
        var ulWrap = document.getElementById("wrap"),
        uls =document.getElementsByTagName("ul"),
        ulsLis1 = uls[0].getElementsByTagName("li"),
        ulsLis =[];
        for(var i =0;i<ulsLis1.length;i++)
        {
        	ulsLis[i] = uls[i].getElementsByTagName("li");
        }
        
        for(var i =0;i<uls.length;i++)
        {
        	for(var j=0;j<ulsLis1.length;j++)
        	{
        		ulsLis[i][j].innerHTML = arrAll[i][j];
        	}
        }
    }
    fillNum();

}
 