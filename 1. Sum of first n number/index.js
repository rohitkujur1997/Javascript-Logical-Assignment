function myFunction() {
    var n=parseInt(document.getElementById("inputBox").value);
    var o=0;
    for(i=0;i<=n;i++){
        o+=i;
    }
    document.write(o);
    
    
}

myFunction();