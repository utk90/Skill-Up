const onFormSubmit = (e) => {
    e.preventDefault();
    emailErrEl.innerText = '';
    passlErrEl.innerText = '';
    const email = emailEl.value;
    const password = passwordEl.value;

    if (!email.includes('@')){
        emailErrEl.innerText = 'Email should contain @';
    }
    if (password.length<8){
        passlErrEl.innerText = 'Password should be greater than or 8 characters'
    }

    displayData.innerHTML = { email, password };

    if (emailErrEl.textContent.length || passlErrEl.textContent.length){
        return;
    }

    console.log('FORM SUCCESSFULLY SUBMITTED!!');
    emailEl.value = '';
    passwordEl.value = '';
}

const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const formEl = document.getElementById('form-element');
const displayData = document.getElementById('display-data');
const emailErrEl = document.getElementById('email-error');
const passlErrEl = document.getElementById('password-error');
formEl.addEventListener('submit', onFormSubmit);