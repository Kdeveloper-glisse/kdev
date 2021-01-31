$(document).ready(function(){
	var username = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;
  var subject = document.querySelector("#subject").value;
	var message = document.querySelector("#message").value;
	
	$('#btnSendMail').click(function(){
		$.post("https://kdev-app.herokuapp.com/sendmail"),
		{
			username: username,
			sender: email,
			subject: subject,
			body: message
		}, function(data, status){
			alert("Data: " + data + "\nStatus: " + status);
		}
	})
});