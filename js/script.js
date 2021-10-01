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
document.querySelector("body").style.backgroundColor = "#fafafa";

// Atividade API

const form = document.querySelector(".form-auth");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = {
    name: form.name.value,
    surname: form.surname.value,
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
    dateOfBirth: form.dateOfBirth.value,
  };

  const settings = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch("http://localhost:8000/users", settings);
    const parsedResponse = await response.json();
    if (response.status === 201) {
      location = "feed.html";
    }
  } catch (error) {
    alert(error)
  }
});
