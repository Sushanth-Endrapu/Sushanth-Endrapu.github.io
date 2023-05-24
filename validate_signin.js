// Get references to the form elements
var emailInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var signInButton = document.querySelector('button[type="submit"]');
var signUpLink = document.querySelector('a[href="../signUpPage/signUp.xhtml"]');

// Add event listener for form submission
signInButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  // Validate email and password
  var email = emailInput.value;
  var password = passwordInput.value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var alertMsg = "";

  if (!email || !password) {
    alert("Please fill in all fields.");
    return;
  } else {
    if (!emailPattern.test(email)) {
      alertMsg += "You have entered an incorrect email pattern\n";
    }
    if (password.length < 8) {
      alertMsg += "Password must contain atleast eight characters";
    }
    if (!alertMsg) {
      alert(`${name}\nYou have successfully signed in!`);
      emailInput.value=''
      passwordInput.value=''
    } else {
      alert(alertMsg);
    }
  }

});

