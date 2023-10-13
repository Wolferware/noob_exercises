function ordenarNum(){
    let numeros = new Array();  //para armazenar os valores gerados
    let min = document.getElementById("min").value;

    if(min < 1 || min > 100){   //o html já tem min e max mas estamos aqui a repetir para reforçar
        alert("Insira um valor de 1 até 100!");
        return true;
    } else {
        document.getElementById("output").innerHTML = "";
        for(let i = 0; i <= 100; i++) {   //para inicializar os índices do array
            numeros.push( i );
        }
        for(let i = min; i <= 100; i++) {  //ordem crescente
            document.getElementById("output").innerHTML += numeros[i] + " <br> ";
        }
        return false;
    }
}

function clearResultado(){
    let div = document.getElementById('output');
    div.innerHTML = '';
}