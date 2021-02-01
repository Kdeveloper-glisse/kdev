$(document).ready(function() {
  $('#sendMail').submit(function (event) {
    event.preventDefault();
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
    
    var url = 'http://127.0.0.1:5000/sendmail';
    $('#result').html('<div style="color:#98c593"><br/>Enviando mensaje, espere por favor...</div>');
 
    $.ajax({
      url: url,
      type: 'POST',
      crossDomain: true,
      dataType:'json',
      headers: {  'Access-Control-Allow-Origin': '*' },
      success: function(jsondata){
        $('#result').html('<div style="color:#98c593">'+jsondata.message+'</div>');
      },
      error:function(xhr,status,error){
        alert(status);
      }
    });
  });
});