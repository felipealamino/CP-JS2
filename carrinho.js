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
        alert('Cupom inválido!');
        return;
    }
    
    total -= desconto;

    mensagem += `\nSubtotal: R$ ${total.toFixed(2)}`;

    if (desconto > 0) {
        mensagem += `\nDesconto (Cupom FIAP2024): -R$ ${desconto.toFixed(2)}`;
    }

    mensagem += `\nTotal: R$ ${(total).toFixed(2)}`;
    alert(mensagem);
}