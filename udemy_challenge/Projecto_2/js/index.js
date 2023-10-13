const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');
let forca = document.getElementById('forca');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue() {
        return Math.round(Math.random() * this.max); //gera um numero aleatório com base no parametro (10).
                                                     //Para não aceitar casas decimais, vai arredondar para o valor mais próximo.
    }
};

let numberDrawn = Guess.numberDrawn(); //armazena o valor gerado pela função Guess()

function updateAttempt(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value;
    let temp = value;
    if(temp == 1){
        document.getElementById('forca').src = "imgs/2.png";
    } else if(temp == 2){
        document.getElementById('forca').src = "imgs/3.png";
    } else if(temp == 3){
        document.getElementById('forca').src = "imgs/3.png";
    } else if(temp == 4){
        document.getElementById('forca').src = "imgs/4.png";
    } else if(temp == 5){
        document.getElementById('forca').src = "imgs/5.png";
    } else if(temp == 6){
        document.getElementById('forca').src = "imgs/6.png";
    } else if(temp => 7){
        document.getElementById('forca').src = "imgs/7.png";
        document.getElementById('btnRestart').style.display = 'flex';
    }
};

function handleSubmit(e) {
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick) {  //caso o utilizador não tenha inserido um valor, força-o a inserir algo
        alert('Digite um valor!');
        return;
    };

    updateAttempt(attempt, ++Guess.attemptsNumber); //actualiza com o valor correcto

    if(numberDrawn == kick) {   //se o utilizador acertar no número
        playAgain();
        status.innerHTML = 'Parabéns, acertaste!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick ) {          //se o utilizador errar e for maior
        status.innerHTML = 'O número é maior!';
        status.style.color = '#de4251';
        clear();
    } else if (numberDrawn < kick ) {          //se o utilizador errar e for menor
        status.innerHTML = 'O número é menor!';
        status.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart() {
    document.location.reload(true);
};

function clear() {
    document.getElementById('kick').value = '';
};