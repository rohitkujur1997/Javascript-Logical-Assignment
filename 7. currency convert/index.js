function myFunction(){
    var dollar=parseInt(document.getElementById("dollar").value);
    document.getElementById("inr").innerHTML=dollar*74.28+" Inr";
    document.getElementById("yen").innerHTML=dollar*109.14+" Yen";
    document.getElementById("euro").innerHTML=dollar*0.84+" Euro";
    document.getElementById("pound").innerHTML=dollar*0.72+" Pound";
}