const $btnPeticion = document.querySelector("#btnPeticion"),
	$inputUsername = document.querySelector("#username");
  $inputEmail = document.querySelector("#email");
  $inputSubject = document.querySelector("#subject");
  $inputMessage = document.querySelector("#message");

$btnPeticion.addEventListener("click", () => {
	const username = $inputUsername.value;
	const email = $inputEmail.value;
	const subject = $inputSubject.value;
	const message = $inputMessage.value;
  
  const objectSendMail = {
    username: username,
    sender: email,
    subject: subject,
    body: message
  };

  fetch("https://kdev-app.herokuapp.com/sendmail", {
		method: "POST", 
		body: JSON.stringify(objectSendMail),
	})
		.then(resultRaw => {
			return resultRaw.json();
		})
});