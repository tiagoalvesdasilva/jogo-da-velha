let jogador = "";
let vencedor = '';
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');

mudarJogador('X');

function escolherQuadrado (id){
    if(vencedor !== ''){
        return;

    }

    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador === 'X'){
        jogador = 'O'
    } else{
        jogador = 'X'
    };    

    mudarJogador(jogador);
    checaVencedor();
};

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

