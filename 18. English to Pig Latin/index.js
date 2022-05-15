function myFunction(){
    var textt=document.getElementById("inputtext").value;
    var wordintext=textt.split(" ");
    var o="";
    for(i=0;i<wordintext.length;i++){
        o=o+wordintext[i].slice(1,)+wordintext[i][0]+"ay ";
    }
    document.getElementById("output").innerHTML="<b>Pig Latin : </b>"+o;
}