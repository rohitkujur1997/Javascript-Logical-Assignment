function myFunction(){
    var rowss=prompt("Enter number of rows:");
    var columnss=prompt("Enter number of columns:");
    console.log(rowss);
    console.log(columnss);
    var o="";
    for(i=0;i<rowss;i++){
        o+="<tr>";
        for(j=0;j<columnss;j++){
            o+="<td>"+"Row:"+String(i)+" Column:"+String(j)+"</td>";
        }
        o+="</tr><br>";
    }
    document.getElementById("table").innerHTML=o;
}