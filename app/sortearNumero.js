
const menorValor = 0;
const maiorValor = 1000;
const numeroSecreto = geraNumeroSecreto();

function geraNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número Secreto: ', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
