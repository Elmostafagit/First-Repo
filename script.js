let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let add = document.getElementById("add");
let na9is = document.getElementById("na9is");
let result = document.getElementById("result");
let color = document.getElementById("color");
const container = document.getElementById("container")

add.addEventListener('click', function() {
  result.textContent = parseFloat(num1.value) + parseFloat(num2.value);
});

na9is.addEventListener('click', function() {
  result.textContent = parseFloat(num1.value) - parseFloat(num2.value);
});
color.addEventListener ("input", function() {
  container.style.backgroundColor = color.value;
})
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
    passResult.value = "Your password is strong";
    passTest.style.backgroundColor = 'green';
  } else if (isMedium) {
    passResult.value = "Your password is medium";
    passTest.style.backgroundColor = 'yellow';
  } else {
    passResult.value = "Your password is weak";
    passTest.style.backgroundColor = 'red';
  }
});
alert("JavaScript is working!");