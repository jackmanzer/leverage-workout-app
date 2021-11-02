const signUpBtn = document.querySelector('#signUpBtn');
const signInBtn =  document.querySelector('#signInBtn');

signInBtn.addEventListener('click', function() {
    document.getElementById('signInForm').style.display = "block";
    signUpBtn.style.display = "none";
    signInBtn.style.display = "none";
})

signUpBtn.addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = "block";
    signUpBtn.style.display = "none";
    signInBtn.style.display = "none";
})