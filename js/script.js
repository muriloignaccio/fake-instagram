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
  if (!input.value.length) {
    errors.push(`Preenha o campo ${input.name}, noob`);
  }
};

form.addEventListener('submit', function (event) {
  const errors = [];

  for (let i = 0; i < formElements.length; i ++) {
    checkIfEmpty(formElements[i], errors)
  }

  if(errors.length) {
    errors.forEach(error => {
      errorContainer.innerHTML += `<li>${error}</li>`
    })
-
    event.preventDefault();
  }
});

