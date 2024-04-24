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


// Login
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


// Carrinho e cupom
let carrinho = [];
    function adicionar(nome, preco) {
        carrinho.push({ nome: nome, preco: preco });
        alert("Item adicionado ao carrinho!");
    }
    function exibirCarrinho() {
        let total = 0;
        let mensagem = "Itens no carrinho:\n";

        carrinho.forEach(function (item, index) {
            mensagem += `${index + 1}. ${item.nome} - R$ ${item.preco}\n`;
            total += item.preco;
        });

        let desconto = 0;
    const cupom = prompt("Digite o cupom de desconto (se aplicável):");
    if (cupom === "FIAP2024") {
        desconto = total * 0.1; // 10% de desconto
    } 
    else if (mensagem) {
        alert('Nenhum cupom aplicado');
    }
    
    total -= desconto;

    mensagem += `\nSubtotal: R$ ${total.toFixed(2)}`;

    if (desconto > 0) {
        mensagem += `\nDesconto (Cupom FIAP2024): -R$ ${desconto.toFixed(2)}`;
    }

    mensagem += `\nTotal: R$ ${(total).toFixed(2)}`;
    alert(mensagem);
}


// Formulario de contato
function contato(){
    var contato = alert('Mensagem enviada com sucesso.')
}
