function verificaSeOChuteEValido() {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML +='<div>Valor Inválido</div>'
        return
    }

    if (numeroForaDoEscopo(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido precisar estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Parabéns Você Acertou!!</h2>
        <h3>O Numero Secreto era: ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForaDoEscopo(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente'){
        window.location.reload();
    }
})
