document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".form-container");
  const errorMessage = document.getElementById("error_message");

  const passwordInput = document.getElementById('password2');
  const lengthIcon = document.getElementById('length-icon');
  const lowercaseIcon = document.getElementById('lowercase-icon');
  const uppercaseIcon = document.getElementById('uppercase-icon');
  const numberIcon = document.getElementById('number-icon');
  const specialCharIcon = document.getElementById('special-char-icon');
    
  function validatePassword() {
    const password = passwordInput.value;
    let isValid = true;
  
    if (password.length < 8 || password.length > 16) {
      lengthIcon.src = 'img/X.png';
      isValid = false;
    } else {
      lengthIcon.src = 'img/tick.png';
    }
  
    if (!password.match(/[a-z]/)) {
      lowercaseIcon.src = 'img/X.png';
      isValid = false;
    } else {
      lowercaseIcon.src = 'img/tick.png';
    }
  
    if (!password.match(/[A-Z]/)) {
      uppercaseIcon.src = 'img/X.png';
      isValid = false;
    } else {
      uppercaseIcon.src = 'img/tick.png';
    }
  
    if (!password.match(/\d/)) {
      numberIcon.src = 'img/X.png';
      isValid = false;
    } else {
      numberIcon.src = 'img/tick.png';
    }
  
    if (!password.match(/[#$@!%&*?_]/)) {
      specialCharIcon.src = 'img/X.png';
      isValid = false;
    } else {
      specialCharIcon.src = 'img/tick.png';
    }

    if (!isValid) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }

    return isValid;
  }

  passwordInput.addEventListener("input", validatePassword);

  form.addEventListener("submit", function (event) {
      if (!validatePassword()) {
          event.preventDefault();
      }
  });  

});
