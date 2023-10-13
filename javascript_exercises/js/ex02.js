function gerarNum(){
    clearResultado();
    document.getElementById("num").value = Math.floor(Math.random() * 100) + 1;
}

function validar(){
    let num = document.getElementById("num").value;
    gerarNum(num);
    verificarParImpar(num);     
    return false;       //necessário para que o resultado se mantenha na página; para que o formulário não faça refresh
}