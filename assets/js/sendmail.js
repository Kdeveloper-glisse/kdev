$(document).ready(function(){
	$('#sendMail').submit(function(event){
		event.preventDefault();
		var $form = $( this ),
    username = $form.find("#username").val(),
  	email = $form.find("#email").val(),
  	subject = $form.find("#subject").val(),
		message = $form.find("#message").val();
    url = "https://kdev-app.herokuapp.com/sendmail";
		var sendmail = $.post(url,
		{
			username: username,
			sender: email,
			subject: subject,
			body: message
		});
		sendmail.done(function(data) {
			alert("Mensaje enviado");
		});
	});
});