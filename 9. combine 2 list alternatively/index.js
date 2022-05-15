var arr=["a","b","c"];
var brr=[1,2,3];
var len;
var newarr=[];
if(arr.length>brr.length){
    len=arr.length;
}
else{
    len=brr.length;
}

for(i=0;i<len;i++){
    newarr.push(arr[i]);
    newarr.push(brr[i]);
}
console.log(newarr);