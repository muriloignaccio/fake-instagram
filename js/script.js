const divUsername = document.querySelector("div.username");
const spanUsername = document.createElement("span");
spanUsername.innerText = "Nome Usuário";
spanUsername.className = "username";
// divUsername.parentNode.replaceChild(spanUsername, divUsername);

divUsername.replaceWith(spanUsername);

const inputPrimeiroNome = document.querySelector('input[name="name"]');
inputPrimeiroNome.placeholder = "Digite seu primeiro nome";

// Atividade II - Exercício 1
const inputsFormCadastro = document.querySelectorAll(
  "form.form-auth.card > input"
);

inputsFormCadastro.forEach((input) => {
  input.style.borderRadius = "4px";
});

// Atividade II - Exercício 3
document.querySelector("body").style.backgroundColor = "#fafafa"
