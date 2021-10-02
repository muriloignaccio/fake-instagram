const form = document.querySelector('.form-auth');
const errorContainer = document.querySelector('.errors-container');

const { name: nameInput, email, password, surname, username, dateOfBirth } = form.elements;

const formElements = [nameInput, email, password, surname, username, dateOfBirth];
// form.addEventListener('submit', function(event) {
//   if (!nameInput.value.length) {
//     alert('Preencha o campo nome!')
//     event.preventDefault()
//   }
  
// })

function checkIfEmpty(input, errors) {
  if (!input.value.trim().length) {
    errors.push(`Preenha o campo ${input.name}, noob`);
  }
};

function validateEmailInput() {
  const isValidEmail = email.value.includes('@') && email.value.includes('.');
  const isEmailWithinLimit = email.value.trim().length >= 10 && email.value.trim().length <= 100

  const span = email.nextElementSibling;
  span.innerText = "";

  if(!isValidEmail){
    email.style.borderColor = "red";
    span.innerText = 'O email deve ser valido!';
    email.insertAdjacentElement('afterend', span);
    return false;
  }

  if(!isEmailWithinLimit){
    email.style.borderColor = "red";
    span.innerText = 'O email deve ter entre 10 e 100 caracteres!';
    email.insertAdjacentElement('afterend', span);
    return false;
  }

  email.style.borderColor = "green";

  return true;
}

email.onblur = validateEmailInput;

function validateNameInput() {
  const isNameWithinLimit = nameInput.value.trim().length >= 2 && nameInput.value.trim().length <= 80;

  const span = nameInput.nextElementSibling;
  span.innerText = "";

  if(!isNameWithinLimit){
    nameInput.style.borderColor = "red";
    span.innerText = 'O nome deve ter entre 2 e 80 caracteres!';
    nameInput.insertAdjacentElement('afterend', span);
    return false;
  }

  nameInput.style.borderColor = "green";

  return true;
}

nameInput.onblur = validateNameInput;

function validateDateOfBirth() {
  const yearOfBirth = Number(moment(dateOfBirth.value).format('YYYY'));
  const currentYear = Number(moment().format('YYYY'));
  const age = currentYear - yearOfBirth;
  const isAgeWithinLimit = age >= 16 && age <= 120;

  const span = dateOfBirth.nextElementSibling;
  span.innerText = "";

  if(!isAgeWithinLimit) {
    dateOfBirth.style.borderColor = "red";
    span.innerText = 'A idade deve estar entre 16 e 120 anos!';
    dateOfBirth.insertAdjacentElement('afterend', span);
    return false;
  }

  dateOfBirth.style.borderColor = "green";
  return true;
}

function validateDate(element){
  const v = element.value
  if (v.match(/^\d{2}$/) !== null) {
    element.value = v + '/';
  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
    element.value = v + '/';
  }    
}

dateOfBirth.onblur = validateDateOfBirth;
dateOfBirth.oninput = () => validateDate(dateOfBirth);

form.addEventListener('submit', function (event) {
  if(!validateEmailInput() || !validateNameInput() || !validateDateOfBirth()) {
    return event.preventDefault();
  }

  event.preventDefault();

  const formattedDate = moment(dateOfBirth.value).format();

  const user = {
    name: nameInput.value,
    surname: surname.value,
    username: username.value,
    email: email.value,
    password: password.value,
    dateOfBirth: formattedDate
  }

  fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  }).then(response => {
    if (response.status === 201) {
      location = './feed.html';
    } else if (response.status === 400) {
      alert('Deu erro se vira')
    }
    return response.json()
  })
});

