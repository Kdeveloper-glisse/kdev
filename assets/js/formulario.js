$(document).ready(function() {
  $('#formulario').submit(function (event) {
    
  });

  $("#formulario").validate({
    errorClass: "state-error",
    validClass: "state-success",
    errorElement: "em",
    highlight: function (element, errorClass, validClass) {
        $(element).closest('.field').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).closest('.field').removeClass(errorClass).addClass(validClass);
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element.parent());
    },
    submitHandler: function(form) {
     var $form = $(this),
      username = $form.find('#username').val(),
      email = $form.find('#email').val(),
      subject = $form.find('#subject').val(),
      message = $form.find('#message').val();
    
    var data = {
      username: username,
      sender: email,
      subject: subject,
      body: message
    };
    
    var url = 'https://kdev-app.herokuapp.com/sendmail';
    $('#result').html('<div style="color:#98c593"><br/>Enviando mensaje, espere por favor...</div>');
 
    $.ajax({
      url: url,
      type: 'POST',
      crossDomain: true,
      dataType:'json',
      data: data,
      headers: {  'Access-Control-Allow-Origin': '*' },
      success: function(jsondata){
        $('#result').html('<div style="color:#98c593">'+jsondata.message+'</div>');
        $form[0].reset();
      },
      error:function(xhr,status,error){
        alert(status);
      }
    });
    }

});
});