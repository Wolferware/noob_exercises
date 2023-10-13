function ordenarNum(){
    let numeros = new Array();  //para armazenar os valores gerados
    let max = document.getElementById("max").value;

    if(max < 1 || max > 100){   //o html já tem min e max mas estamos aqui a repetir para reforçar
        alert("Insira um valor de 1 até 100!");
        return true;
    } else {
        document.getElementById("output").innerHTML = "";
        for(let i = max; i >= 1; i--) {   //para inicializar os índices do array
                numeros.push( i );
        }
        for(let i = 0; i < max; i++) {  //ordem crescente
            if(numeros[i] % 2 != 0) {     //só ímpares  (numeros cuja divisão não dão resto 0 são ímpares)
            document.getElementById("output").innerHTML += numeros[i] + " <br> ";
            }
        }
        return false;
    }
}

function clearResultado(){
    let div = document.getElementById('output');
    div.innerHTML = '';
}