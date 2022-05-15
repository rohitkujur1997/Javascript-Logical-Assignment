var arr=[1,2,3,4,5,6];
var sol1=0;
var sol2=0;
var sol3=0;
var l=arr.length;

for(i=0;i<l;i++){
    sol1+=arr[i];
}
console.log("For-loop sum: "+sol1);

while(l){
    sol2+=arr[l-1];
    l--;
}
console.log("while-loop sum: "+sol2);

do{
    sol3+=arr[l];
    l++;
}while(l<arr.length);
console.log("do-while-loop sum: "+sol3);