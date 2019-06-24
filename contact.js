 	document.body.style.backgroundColor ="grey";
document.getElementById("myForm").style.textAlign ="center";
var submit=document.getElementById("submit") ;
  submit.onclick=function Contact(first_name,second_name,phone_number,email,adress)
{
	var first_name=document.getElementById("first_name").value;
	var second_name=document.getElementById("second_name").value;
	var phone_number=document.getElementById("phone_number").value;
	var email=document.getElementById("email").value;
	var address=document.getElementById(["street","city","country"].value);

document.getElementById("first_name").innerText=first_name
document.getElementById("second_name").innerText=second_name
document.getElementById("phone_number").innerText=phone_number
document.getElementById("email").innerText=email
document.getElementById("address").innerText=address
		}

//(Contact.prototype.full_name = function() {return (this.first_name + " , " + this.second_name)};
