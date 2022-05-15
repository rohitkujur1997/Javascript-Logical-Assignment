function myFunction(){
    var n=parseInt(document.getElementById("inputBox").value);
    var o=0;
    for(i=1;i<=n;i++){
        if(i%3==0||i%5==0){
            o+=i;
            console.log(i);
        }
    }
    document.write(o);
}