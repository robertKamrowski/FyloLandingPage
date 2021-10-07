const form = document.getElementById('form');
const email = document.getElementById('email');
const formBtn = document.getElementById('form__btn');
const errorMessage = document.getElementById('form__error-message');

// error class: access__error-msg--visible

// Handle form send with checking email regex:
function handleFormSubmit(e) {
  e.preventDefault();
  const validateResult = validateForm(email.value);

  if (validateResult) {
    errorMessage.classList.remove('access__error-msg--visible');
    form.submit();
  } else {
    errorMessage.classList.add('access__error-msg--visible');
  }
}

function validateForm(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTestValue = regex.test(email);

  if (regexTestValue) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', handleFormSubmit);
