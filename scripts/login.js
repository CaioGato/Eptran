function salvarDados() {
  var name = document.getElementById("name").value;
  var senha = document.getElementById("senha").value;

  var usuario = {
    name: name,
    senha: senha,
  };

  document.getElementById("mostra-name").textContent = name;
  document.getElementById("mostra-senha").textContent = senha;
  console.log(usuario);
}

function validarFormulario() {
  var name = document.getElementById("name").value.trim();
  var senha = document.getElementById("senha").value.trim();

  if (name === "") {
    alert("Por favor, insira sua matrícula.");
    return false;
  }

  if (senha === "") {
    alert("Por favor, insira sua senha.");
    return false;
  }

  window.location.href = "./login2.html";
  return true;
}

document.addEventListener("DOMContentLoaded", function darkmode() {
  const toggleButton = document.getElementById("toggle-button");

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
  });
});
