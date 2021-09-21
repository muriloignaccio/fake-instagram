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

body.style.backgroundColor = "#666";

// EX 4
// body.style.cssText = "background-color: #666; color: red";