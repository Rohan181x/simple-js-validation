//alert('prajwol is ');
function validation()
{
   // alert('prajwol i');
  // document.getElementById("trigger").addEventListener("click",validation);
var name = document.getElementById('name').value;
var address = document.getElementById('address').value;
 
if(name == ''){
  //  alert('address is required');
  document.getElementById('nameERR').innerHTML="name is required";
  document.getElementById('name').focus();
}
  if(address == ''){
    //  alert('address is required');
    document.getElementById('addressERR').innerHTML="address is required";
    document.getElementById('address').focus();
  }
}

document.getElementById("myform").addEventListener("submit",validation);


 