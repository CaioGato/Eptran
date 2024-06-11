function salvarDados() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;
  var nascimento = document.getElementById("nascimento").value;
  var matricula = document.getElementById("matricula").value;

  var usuario = {
    nome: nome,
    senha: senha,
    confirmarSenha: confirmarSenha,
    nascimento: nascimento,
    matricula: matricula,
  };

  document.getElementById("mostra-nome").textContent = nome;
  document.getElementById("mostra-senha").textContent = senha;
  document.getElementById("mostra-ConfirmarSenha").textContent = confirmarSenha;
  document.getElementById("mostra-nascimento").textContent = nascimento;
  document.getElementById("mostra-matricula").textContent = matricula;
  console.log(usuario);
}

function validarFormulario() {
  const processa = document.getElementById("processa");
  var nome = document.getElementById("nome").value.trim();
  var senha = document.getElementById("senha").value.trim();
  var confirmarSenha = document.getElementById("confirmarSenha").value.trim();
  var nascimento = document.getElementById("nascimento").value.trim();
  var matricula = document.getElementById("matricula").value.trim();

  if (nome == "") {
    alert("Por favor, insira seu nome.");
    nome.focus;
    return false;
  }

  if (nascimento == "") {
    alert("Por favor, insira sua data de nascimento.");
    return false;
  }

  if (matricula == "") {
    alert("Por favor, insira sua matricula.");
    return false;
  }

  if (senha == "") {
    alert("Por favor, insira sua senha.");
    return false;
  }

  if (confirmarSenha == "") {
    alert("Por favor, confirme sua senha.");
    return false;
  }

  if (confirmarSenha != senha) {
    alert("Senha incorreta.");
    return false;
  }

  window.location.href = "./inicio.html";
  return true;
}

document.addEventListener("DOMContentLoaded", function darkmode() {
  const toggleButton = document.getElementById("toggle-button");

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
  });
});
