// For the password part
const passTest = document.getElementById("passTest");
let pass = document.getElementById("passInput");
let passResult = document.getElementById("passResult");

pass.addEventListener("input", function() {
  let password = pass.value;
  let isStrong = false;
  let isMedium = false;

  // Check if password is at least 8 characters long
  if (password.length >= 8) {
    isMedium = true;
  }

  // Check for numbers, letters, and special characters
  let hasNumber = /\d/.test(password);
  let hasLetter = /[a-zA-Z]/.test(password);
  let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Password is strong if it has numbers, letters, special characters
  if (isMedium && hasNumber && hasLetter && hasSpecialChar) {
    isStrong = true;
  }

  // Display password strength
  if (isStrong) {
    passResult.textContent = "Your password is strong";
    passTest.style.backgroundColor = 'green';
  } else if (isMedium) {
    passResult.textContent = "Your password is medium";
    passTest.style.backgroundColor = 'yellow';
  } else {
    passResult.textContent = "Your password is weak";
    passTest.style.backgroundColor = 'red';
  }
});