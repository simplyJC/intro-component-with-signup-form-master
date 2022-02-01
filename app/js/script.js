const form = document.querySelector('.form__container form');
const inputs = document.querySelectorAll('.form__container input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add('error');
    } else {
      input.parentElement.classList.remove('error');
      if (input.type == 'email') {
        if (validateEmail(input.value)) {
          input.parentElement.classList.remove('error');
          alert('Sucess!');
        } else {
          input.parentElement.classList.add('error');
        }
      }
    }
  });
});

/* A function to check if user input is valid email type */
function validateEmail(email) {
  let emailCheck =


    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailCheck.test(String(email).toLowerCase());
}

//[1] Remove  error warning when user click input

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value) {
      input.parentElement.classList.remove('error'); /*1*/
    }
  });
});
