function myfunction(){
var x =document.getElementById("pass");
if(x.type== "password"){
   x.type = "text";
}
  else{
x.type = "password";
}
}

function validate(){
var password = document.getElementById("pass").value;
var name = document.getElementById("name").value;
var length = document.getElementById("length").value;
if(password== "FINN839999" && name=="deixon" || length >=15) {
alert("Tracking Successful");
alert("welcome deixon José rincón Urbina 
");
window.location.replace("Tracking_details.html");
}
else{
 alert("Login Failed");
return;
}
}
