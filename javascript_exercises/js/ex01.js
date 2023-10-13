function clearResultado(){
    let div = document.getElementById('output');
    div.innerHTML = '';
}

function verificarParImpar(num){
    let div = document.getElementById('output');
    if(num % 2 === 0) {
        div.innerHTML += '<p>Resultado: O número é par!</p>';
    } else {
        div.innerHTML += '<p>Resultado: O número é ímpar!</p>';
    }
}
function validarNum() {
    let num = document.forms["formulario"]["num"].value;
    clearResultado();

    if(isNaN(num)){     //inNaN() é uma função que já existe no Javascript e que permite verificar se um determnado input não é numérico
       alert("Erro! Insira um número.");
    }else{

    verificarParImpar(num);     
    return false;       //necessário para que o resultado se mantenha na página; para que o formulário não faça refresh
    }
}
