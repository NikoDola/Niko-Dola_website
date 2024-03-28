

function sendEmail(){
     // Fetching form values
     const emailInput = document.getElementById('email');
     const nameInput = document.getElementById('name');
     const messageInput = document.getElementById('message');
  
         const params = {
             name: nameInput.value,
             email: emailInput.value,
             message: messageInput.value
         };
 
         // Sending email
         emailjs.send("service_3r25scb", "template_7m9enxl", params)
             .then(function(response) {
                 console.log('SUCCESS!', response.status, response.text);
                 alert('Email sent successfully');
             }, function(error) {
                 console.log('FAILED...', error);
                 alert('Failed to send email: ' + error);
             });
}
    
  
