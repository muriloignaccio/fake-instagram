const divUsername = document.querySelector('div.username')

divUsername.innerHTML = "<span>Nome Usuário</span>"

//EXERCÍCIO 2

// OPÇÃO 1
const spanUsername = document.createElement("span");
spanUsername.innerText = "Nome Usuário";
spanUsername.className = "username";
divUsername.parentNode.replaceChild(spanUsername, divUsername);



// OPÇÃO 2
// divUsername.replaceWith(spanUsername);


//OPÇÃO 3
// const divAvatar = document.querySelector('.avatar-content');

// divAvatar.removeChild(divUsername);

// divAvatar.innerHTML += "<span>Nome Usuário</span>"

const [ inputPrimeiroNome ] = document.getElementsByName('name');

inputPrimeiroNome.placeholder = "Digite seu primeiro nome";

//OPÇÃO 2
// inputPrimeiroNome.placeholder = inputPrimeiroNome.placeholder.replace("nome completo", "primeiro nome") 


// ATIVIDADE 2

// EX 1
const formInputs = document.querySelectorAll('.form-auth input');

formInputs.forEach(input => input.style.borderRadius = "4px");

// EX 3
const { body } = document;

body.style.backgroundColor = "#fafafa";

// EX 4
// body.style.cssText = "background-color: #666; color: red";

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

form.addEventListener('submit', function (event) {
  // const errors = [];

  // for (let i = 0; i < formElements.length; i ++) {
  //   checkIfEmpty(formElements[i], errors)
  // }

  // if(errors.length) {
  //   errors.forEach(error => {
  //     errorContainer.innerHTML += `<li>${error}</li>`
  //   });

  //   event.preventDefault();
  // }

  if(!validateEmailInput()) {
    event.preventDefault();
  }

  
});

