function converteKmMilhas(){
    let km = document.getElementById("km").value;
    let factor = 0.621371; //factor de conversão de Km para Milhas

    document.getElementById("milhas").value = km * factor;
    return false;       //necessário para que o resultado se mantenha na página; para que o formulário não faça refresh
}