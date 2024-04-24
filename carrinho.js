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

        mensagem += `\nTotal: R$ ${total.toFixed(2)}`;
        alert(mensagem);
    }