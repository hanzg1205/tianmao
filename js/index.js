window.onload=function(){
    var as=getClass('bannerTu')[0].getElementsByTagName('a');
    var lis=getClass('banner4')[0].getElementsByTagName('li');
    var index=0;
    var t=setInterval(move,2000)
    function move(){
    	index++;
    	if(index>as.length-1){
    		index=0;
    	}
    	for(var i=0;i<as.length;i++){
    		as[i].style.display="none";
    		lis[i].style.background="#999"
    	}
    	as[index].style.display="block";
    	lis[index].style.background="#fff"
    }

    for(var i=0;i<lis.length;i++){
    	lis[i].aa=i;
    	lis[i].onmouseover=function(){
    		for(var j=0;j<as.length;j++){
    			as[j].style.display="none";
    			lis[j].style.background="#999"
    		}
    		as[this.aa].style.display="block"
    		lis[this.aa].style.background="#fff"
    	}
    }

    var boxs=getClass('bannerTu')[0];
	boxs.onmouseover=function(){
		clearInterval(t);    
	}
	boxs.onmouseout=function(){
		t=setInterval(move,2000); 
	}



	var xzs=getClass('xz')[0].getElementsByTagName('a');
    var rmpp=getClass('rmpptu')[0];
    var rmpps=getClass('rmppright',rmpp);
    for(i=0;i<xzs.length;i++){
		xzs[i].bb=i;
		xzs[i].onclick=function(){
			for(j=0;j<rmpps.length;j++){
				rmpps[j].style.display="none";
				xzs[j].style.color="";
				xzs[j].style['border-bottom']=""
			}
			rmpps[this.bb].style.display="block";
			xzs[this.bb].style.color="#000";
			xzs[this.bb].style['border-bottom']="2px solid #000"
		}
	}
}