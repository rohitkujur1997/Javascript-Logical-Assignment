function myFunction() {
    var year=parseInt(document.getElementById("inputyear").value);
    var leapyear="";
    console.log(year);
    console.log(leapyear);
    var counter=20;
    while(counter>=0)
    {
        if((year%400===0) && (year%100===0)){
        leapyear+=String(year)+"<br>";
        //console.log("leapyear"+(year));
        counter--;
        }
        else if((year%4===0) && (year%100!=0)){
            leapyear+=String(year)+"<br>";
            //console.log("leapyear"+(year));
            counter--;
        }
        year++;
    }
    document.getElementById("output").innerHTML=leapyear;
}

