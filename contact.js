 	document.body.style.backgroundColor ="grey";
document.getElementById("myForm").style.textAlign ="center";

 	var submit=document.getElementById("submit") ;
		submit.onclick=function Contact(first_name,second_name,phone_number,email,adress)
{
	var first_name=getElementById("first_name").value;
	var second_name=getElementById("second_name").value;
	var phone_number=getElementById("phone_number").value;
	var email= getElementById("email").value;
	var address=getElementById(["street","city","country"].value);

document.getElementById("outputfirst_name").innerText=first_name
document.getElementById("outputsecond_name").innerText=second_name
document.getElementById("outputphone_number").innerText=phone_number
document.getElementById("outputemail").innerText=email
document.getElementById("outputaddress").innerText=address
}
Contact.prototype.full_name = function() {
	return (this.first_name + " , " + this.second_name)
};
