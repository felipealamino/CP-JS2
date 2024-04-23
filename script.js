function botao(){
    var idade = document.getElementById('idade').value;
    if (idade >= 18) {
        window.location.href = "http://127.0.0.1:5501/index.html"
    }
    else {
        window.location.href = "https://site.mppr.mp.br/crianca/Pagina/Por-que-nao-se-deve-utilizar-o-termo-menor"
    }
}
