const buttonsArray = document.querySelectorAll('.btnDisplay')
const resultado = document.querySelector('#resultado')
const btnLimpar = document.querySelector('.limpar')
const btnApagar = document.querySelector('.apagar')
const btnCalcular = document.querySelector('.calc')
let operacao = ''


resultado.innerHTML = ''

function acrescentarNum(valor) {
    if (resultado.innerHTML.includes('.') && valor === '.') return

    if (resultado.innerHTML === '' && (valor === '*' || valor === '/' || valor === "+" || valor === "-")) return

    if (valor === '/' && resultado.innerHTML.substr(-1).includes('/')) return
    
    if (valor === '+' && resultado.innerHTML.substr(-1).includes('+')) return

    if (valor === '*' && resultado.innerHTML.substr(-1).includes('*')) return

    if (valor === '-' && resultado.innerHTML.substr(-1).includes('-')) 

    if (resultado.innerHTML.length > 14) {
        resultado.innerHTML = 'error'
        return
    }
    
    if (resultado.innerHTML === 'error') {
        return
    } else {
        resultado.innerHTML += valor
    }
}

for (let button of buttonsArray) {
    button.addEventListener('click', () => {
        acrescentarNum(button.innerHTML)
    })
}

btnLimpar.addEventListener('click', () => {
    // opAntigo.innerHTML = ''
    resultado.innerHTML = ''
})

btnApagar.addEventListener('click', () => {
    let resultText = resultado.innerHTML;
    resultado.innerHTML = resultText.substring(0,resultText.length-1);
    resultado})

btnCalcular.addEventListener('click', () => {
    if (resultado.innerHTML) {
        resultado.innerHTML = eval(resultado.innerHTML)
    } else {
        resultado.innerHTML = ''
    }
})