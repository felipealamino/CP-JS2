// Verificação da idade
function botao(){
    var idade = document.getElementById('idade').value;
    if (idade >= 18) {
        window.location.href = "http://127.0.0.1:5500/CP-JS2/home.html"
    }
    else {
        window.location.href = "https://site.mppr.mp.br/crianca/Pagina/Por-que-nao-se-deve-utilizar-o-termo-menor"
    }
}

// Alert do cardapio
function adicionar(){
    var adicionar = alert('Produto adicionado ao carrinho.')
}

function usuario(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    if (usuario,senha === '1234'){
        alert('Logado com sucesso')
        window.location.href = "http://127.0.0.1:5500/CP-JS2/home.html"
    }
    else {
        alert('Usuario ou Senha incorreta')
        window.location.href = "https://support.google.com/youtube/answer/6009563?hl=pt-BR"
    }
}