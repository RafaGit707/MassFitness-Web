document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById('password2');
    const lengthIcon = document.getElementById('length-icon');
    const lowercaseIcon = document.getElementById('lowercase-icon');
    const uppercaseIcon = document.getElementById('uppercase-icon');
    const numberIcon = document.getElementById('number-icon');
    const specialCharIcon = document.getElementById('special-char-icon');
    
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
    
      if (password.length < 8 || password.length > 16) {
        lengthIcon.src = 'img/X.png';
      } else {
        lengthIcon.src = 'img/tick.png';
      }
    
      if (!password.match(/[a-z]/)) {
        lowercaseIcon.src = 'img/X.png';
      } else {
        lowercaseIcon.src = 'img/tick.png';
      }
    
      if (!password.match(/[A-Z]/)) {
        uppercaseIcon.src = 'img/X.png';
      } else {
        uppercaseIcon.src = 'img/tick.png';
      }
    
      if (!password.match(/\d/)) {
        numberIcon.src = 'img/X.png';
      } else {
        numberIcon.src = 'img/tick.png';
      }
    
      if (!password.match(/[#$@!%&*?_]/)) {
        specialCharIcon.src = 'img/X.png';
      } else {
        specialCharIcon.src = 'img/tick.png';
      }
    });    

});
