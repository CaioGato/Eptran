function salvarDados(){

    var name = document.getElementById('name').value;
    var senha = document.getElementById('senha').value;

    var usuario ={
        name: name,
        senha: senha,
    }
    
    document.getElementById('mostra-nome').textContent = name
    document.getElementById('mostra-senha').textContent = senha
    console.log(usuario);
    
}

function validarFormulario() {
    var nome = document.getElementById('name').value.trim();
    var senha = document.getElementById('senha').value.trim();

    if (nome === '') {
        alert('Por favor, insira seu nome.');
        return false;
    }

    if (senha === '') {
        alert('Por favor, insira sua senha.');
        return false;
    }

    window.location.href = './index2.html'
    return true;
}

function salvarDados() {
    if (validarFormulario()) {
        var nome = document.getElementById('name').value.trim();
        var senha = document.getElementById('senha').value.trim();
        var data = {
            nome: nome,
            senha: senha
        };
    }
}