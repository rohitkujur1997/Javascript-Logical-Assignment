function myFunction() {
    var n=parseInt(document.getElementById("inputBox").value);
    if(n%2==0||n==0){
        document.getElementById("output").innerHTML = n+" is even";
        //document.write(n+" is even");
    }
    else{
        document.getElementById("output").innerHTML = n+" is odd";
        //document.write(n+" is odd");
    }
}

myFunction();