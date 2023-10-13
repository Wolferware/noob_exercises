const persons = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets');

fillCounters();

function fillCounters() {
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets')
    ])
    .then(data => {
        console.log(data);
        persons.style.fontSize = '5em';
        starships.style.fontSize = '5em';
        planets.style.fontSize = '5em';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log('Erro:', err))
}

function getData(param) {
	return fetch(`https://swapi.dev/api/${param}`)
		.then(res => res.json())
};


function randomValue() {
    min = Math.ceil(0);
    max = Math.floor(14);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function loadPhrase(numero){
    let phrase = document.getElementById('phrase');

    let sentence = [
        "Strike me down and I will become more powerful than you could possibly imagine. — Obi-Wan Kenobi",
        "I find your lack of faith disturbing. — Darth Vader",
        "Let the wookie win. — C-3PO",
        "Do or do not. There is no try. — Yoda",
        "Many of the truths that we cling to depend on our point of view. — Obi-Wan Kenobi",
        "Never tell me the odds! — Han Solo",
        "Many of the truths that we cling to depend on our point of view. — Obi-Wan Kenobi",
        "Ive found that what most people call luck is often little more than raw talent combined with the ability to make the most of opportunities. — Talon Karrde",
        "Reality doesnt care if you believe it. — Boba Fett",
        "Life is not without pain, but life concerns itself with how we handle that pain, or joy, or confusion, or triumph. Life is more than time passing before death; it is the sum and total of all we make of it. — Elegos AKla",
        "You cant stop the change, any more than you can stop the suns from setting. — Shmi Skywalker",
        "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering. — Yoda",
        "The ability to speak does not make you intelligent. — Qui-Gon Jinn",
        "Your focus determines your reality. — Qui-Gon Jinn",
        "You feel empty. You feel alone. Lonely. Almost frightened, but also strong, yes? The name for what you are feeling is freedom. How did you expect it to feel? You are free, and that can be lonely, and empty, and frightening. But it is also powerful. — Jedi Master Vergere",
    ];

    for (let i = 0; i < sentence.length; i++) {
        if(randomValue() == i){             //Se o valor gerado for igual ao índice [de 0 a 14]...
            phrase.innerHTML = sentence[i]; //Imprime o que está nesse índice
            return;
        }
    }
    return 0;
};
