var nameInput = document.querySelector('input[type="text"]');
var emailInput = document.querySelector('input[type="email"]');
var passwordInput = document.querySelector('input[type="password"]');
var signUpButton = document.querySelector('button[type="submit"]');
emailList = [];
passwordList = [];
signUpButton.addEventListener("click", function (event) {
  // alert(`${emailList}\n\n${passwordList}`)
  event.preventDefault();
  var email = emailInput.value;
  var password = passwordInput.value;
  var name = nameInput.value;
  var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var alertMsg=""
  if (!email || !name || !password) {
    alert("Please fill in all fields.");
    return;
  } else {
    if (name.length > 15) {
    //   alert("name exceeds 15 characters");
    alertMsg+='name exceeds 15 characters\n'
    } 
    if (!emailPattern.test(email)){
        alertMsg+='You have entered an incorrect email pattern\n'
    }
    if(password.length<8){
        alertMsg+='Password must contain atleast eight characters'
    }
    if(!alertMsg){
      alert(`${name}\nYou have successfully signed up!`);
    }
    else{
        alert(alertMsg)
    }
  }
});
