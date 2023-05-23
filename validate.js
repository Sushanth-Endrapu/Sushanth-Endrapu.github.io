// Get references to the form elements
var emailInput = document.querySelector('input[type="text"]');
var passwordInput = document.querySelector('input[type="password"]');
var signInButton = document.querySelector('button[type="submit"]');
var signUpLink = document.querySelector('a[href="../signUpPage/signUp.xhtml"]');

// Add event listener for form submission
signInButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate email and password
  var email = emailInput.value;
  var password = passwordInput.value;

  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Perform further validations or submit the form
  // ...

  // Clear the form inputs
  emailInput.value = '';
  passwordInput.value = '';
});

// Add event listener for sign-up link
// signUpLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   // Perform any necessary actions when the sign-up link is clicked
//   // ...
// });
