const myForm = document.getElementById('myForm');

const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const password = document.getElementById('password');
const email = document.getElementById('email');
//const emailPlaceholder = document.getElementsByName('email')[0];

const errorTextFname = document.getElementById('form__text-warning-fname');
const errorTextLname = document.getElementById('form__text-warning-lname');
const errorTextPassword = document.getElementById(
  'form__text-warning-password'
);
const errorTextEmail = document.getElementById('form__text-warning-email');

const errorIconFname = document.getElementById('form__error-icon-fname');
const errorIconLname = document.getElementById('form__error-icon-lname');
const errorIconPassword = document.getElementById('form__error-icon-password');
const errorIconEmail = document.getElementById('form__error-icon-email');

myForm.addEventListener('submit', (e) => {
  if (fName.value === '' || fName.value == null) {
    errorIconFname.classList.add('visible');
    e.preventDefault();
    errorTextFname.innerText = 'First Name cannot be empty';
    fName.classList.add('form__input--warning');
  }

  if (lName.value === '' || lName.value == null) {
    errorIconLname.classList.add('visible');
    e.preventDefault();
    errorTextLname.innerText = 'Last Name cannot be empty';
    lName.classList.add('form__input--warning');
  }

  if (email.value === '' || email.value == null) {
    errorIconEmail.classList.add('visible');
    e.preventDefault();
    errorTextEmail.innerText = 'Email cannot be empty';
    email.classList.add('form__input--warning');
  }

  if (password.value === '' || password.value == null) {
    errorIconPassword.classList.add('visible');
    e.preventDefault();
    errorTextPassword.innerText = 'Password cannot be empty';
    password.classList.add('form__input--warning');
  }
});

if (errorTextFname.value !== '' || errorTextFname.value != null) {
  fName.addEventListener('input', (e) => {
    errorIconFname.classList.remove('visible');
    errorTextFname.innerText = '';
    fName.classList.remove('form__input--warning');
  });
}
if (errorTextLname.value !== '' || errorTextLname.value != null) {
  lName.addEventListener('input', (e) => {
    errorIconLname.classList.remove('visible');
    errorTextLname.innerText = '';
    lName.classList.remove('form__input--warning');
  });
}

if (errorTextPassword.value !== '' || errorTextPassword.value != null) {
  password.addEventListener('input', (e) => {
    errorIconPassword.classList.remove('visible');
    errorTextPassword.innerText = '';
    password.classList.remove('form__input--warning');
  });
}

if (errorTextEmail.value !== '' || errorTextEmail.value != null) {
  // email.addEventListener('input', (e) => {
  //   errorIconEmail.classList.remove('visible');
  //   errorTextEmail.innerText = '';
  //   email.classList.remove('form__input--warning');
  // });

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.onkeydown = function () {
    if (!regex.test(email.value)) {
      //emailPlaceholder.placeholder = 'Invalid Email';
      errorTextEmail.innerText = 'Looks like this is not an email';
      console.log(errorTextEmail.value);
    } else {
      errorIconEmail.classList.remove('visible');
      errorTextEmail.innerText = '';
      email.classList.remove('form__input--warning');
    }
  };
}
