function formValidation () {

    var fname = document.getElementById('fname')
    var lname = document.getElementById('lname')
    var userName = document.getElementById('uname')
    var pass = document.getElementById('password')
    var pass2 = document.getElementById('confirmPass')
 
    var errorMessage = document.getElementById('error');

 
        var matches = false;

      let messages = [];

      if(fname.value.match(/^[A-Z]/)) {
        matches = true;
      }
      else {
        
      }
      if(lname.value.match(/^[A-Z]/)) {
        matches = true;
      }
      else {
        
      }

      if(userName.value === '' || userName.value === null) {
          messages.push("Username is required");
      }
      if(userName.value.length < 6) {
        messages.push("User Name must be longer than 6 characters");
      }
      
      if(pass.value.length < 6) {
        messages.push("Password must be longer than 6 characters");
      }
      if(pass.value.match(/[A-Z]/g)) {
        matches = true;
      }
      else {
        messages.push("Password must contain atleast 1 upper case letter");
      }
      if(pass.value.match(/[0-9]/g)) {
        matches = true;
      }
      else {
        messages.push("Password must contain atleast 1 number");
      }

      if (pass != pass2) {
        messages.push("Passwords do not match");
      } else {
        messages.push("Passwords Match!!");
      }



      if (messages.length > 0) {
 
      errorMessage.innerHTML = messages.join(' <br><br>')
      } else {
        messages.push("No errors found! Submitting form");
      }



}