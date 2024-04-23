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