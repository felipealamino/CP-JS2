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
        desconto = total * 0.1;
    } 
    else if (mensagem) {
        alert('Nenhum cupom aplicado');
    }
    
    total -= desconto;

    mensagem += `\nSubtotal: R$ ${total.toFixed(2)}`;

    if (desconto > 0) {
        mensagem += `\nDesconto (Cupom FIAP2024): -R$ ${desconto.toFixed(2)}`;
    }

    mensagem += `\nTotal: R$ ${(total - desconto).toFixed(2)}`;
    alert(mensagem);
}


// Formulario de contato
function contato(){
    var contato = alert('Mensagem enviada com sucesso.')
}


 // Receitas
 function sugerirComida(vinho) {
    if (vinho === 'vinho1') {
        return 'Aconselhamos experimentar camarões, vieiras ou peixe grelhado, temperados com ervas frescas e um toque de limão. O sabor leve dos frutos do mar complementa a frescura e a acidez do Chardonnay.';
    } else if (vinho === 'vinho2') {
        return 'Aconselhamos experimentar um suculento bife grelhado, como contrafilé ou filé mignon, servido com um molho de ervas frescas como tomilho, alecrim e alho é uma excelente escolha. Os taninos firmes do Cabernet Sauvignon complementam a carne, enquanto as ervas realçam os sabores do vinho.';
    } else if (vinho === 'vinho3') {
        return 'O Tannat é uma uva emblemática do Uruguai, e não há combinação melhor do que um churrasco uruguaio para acompanhá-lo. Carnes como assado de tira, costela de boi e chorizo são grelhadas lentamente e servidas com chimichurri e molhos diversos. Os sabores intensos da carne harmonizam-se perfeitamente com a estrutura e os taninos do Tannat.';
    } else if (vinho === 'vinho4') {
        return ' Um assado de cordeiro patagônico, marinado em ervas e temperos locais e assado lentamente na brasa, é uma opção sofisticada e saborosa. A carne macia e suculenta do cordeiro harmoniza-se bem com a riqueza e a intensidade do Malbec. Churrasco de carne bovina com molhos picantes: Um churrasco de carne bovina, como costelas ou fraldinha, servido com molhos picantes como chimichurri ou salsa criolla, é uma combinação perfeita com o Malbec. Os sabores intensos da carne e dos molhos destacam os sabores frutados e as especiarias do vinho.';
    } else if (vinho === 'vinho5') {
        return 'Uma paella tradicional, feita com arroz, frutos do mar, frango, linguiça e açafrão, é uma opção deliciosa para acompanhar o Cabernet-Malbec. Os sabores complexos e variados da paella complementam a diversidade de aromas e sabores do vinho.';
    } else if (vinho === 'vinho6') {
        return 'Um suculento bife de chorizo argentino grelhado na brasa, temperado com sal grosso, é uma escolha clássica. A carne grelhada complementa os taninos macios do Malbec, enquanto a simplicidade do tempero realça os sabores da fruta escura.';
    }
}
function mostrarSugestao() {
    var tipoDeVinho = document.getElementById('tipo-vinho').value;
    var sugestao = sugerirComida(tipoDeVinho);
    document.getElementById('resultado').innerText = sugestao;
}