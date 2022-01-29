let btn = document.getElementById('btn');
const submitButton = document.getElementById('btn');
const allInput= document.getElementById('myForm'); 

const userInputs = allInput.querySelectorAll('input'); 

const submitButtonHandler = () => {
    const fName = userInputs[0].value;
  if (fName.trim === '') {
    console.log('empty');
    return;
  } else {
    console.log(fName); 
    return;
  }
};

submitButton.addEventListener('click', submitButtonHandler);
