

function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName('*');
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
                arr.push(alls[i])
			}
		}
		return arr;
	}
}

function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	flag=false;
	for(var i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
		    flag=true;
		}
	}
	return flag;
}




/*function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname)
	}else{
		var arr[];
		var alls=obj.getElementsByTagName('*');
        for(var i=0;i<alls.length;i++){
        	if(checkbox(alls[i].className,classname)){
        		arr.push(alls[i])
        	}
        }
        return arr;
	}

}

function checkbox(newarr;oldarr){
	var chlist=newarr.split(" ");
	flag=false;
    for(var i=0;i<chlist.length;i++){
    	if(chlist[i]==oldarr){
    		flag=true;
    	}
    }
    return flag;
}*/



/*function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname)
	}else{
		var arr[];
		var alls=obj.getElementsByTagName('*');
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
				arr.push(alls[i])
			}
		}
		return arr;
	}
}
function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	flag=false;
	for(var i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
			flag=true;
		}
	}
	return flag;
}*/



/*function getClass(classname,obj){
	var obj=obj||document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(classname)
	}else{
		var arr[];
		var alls=obj.getElementsByTagName('*');
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
				arr.push(alls[i]);
			}
		}
		return arr;
	}
}
function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	flag=false;
	for(var i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
			flag=true;
		}
	}
	return flag;
}*/