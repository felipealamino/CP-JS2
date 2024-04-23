// Verificação da idade
function botao(){
    var idade = document.getElementById('idade').value;
    if (idade >= 18) {
        window.location.href = "login.html"
    }
    else {
        window.location.href = "https://site.mppr.mp.br/crianca/Pagina/Por-que-nao-se-deve-utilizar-o-termo-menor"
    }
}

// Alert do cardapio
function adicionar(){
    var adicionar = alert('Produto adicionado ao carrinho.')
}

function validarUsuario() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if (usuario === '1234' && senha === '1234') { 
        window.location.href = "home.html"
        alert('Logado com sucesso');
    } else {
        alert('Usuário ou senha incorretos');
    }
}
