function calculaIdade(){
    let dataNasc = document.getElementById("datanasc").value;  //recebe a data do formulário

    let idade = calcIdade(dataNasc);
    document.getElementById("idade").value = idade;

    if(idade <=0 || idade >120){
        alert("Insira uma idade válida!");
        return true;
    } else {
        return false;
    }
}

function calcIdade(data) {
    var hoje = new Date();
    var dataNasc = new Date(data);
    var idade = hoje.getFullYear() - dataNasc.getFullYear();
    var m = hoje.getMonth() - dataNasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    return idade;
}