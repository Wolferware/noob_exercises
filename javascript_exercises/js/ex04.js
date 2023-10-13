function converteCelciusFahrenheit(){
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = celcius * 9 / 5 + 32;

    document.getElementById("fahrenheit").value = fahrenheit;
    return false;       //necessário para que o resultado se mantenha na página; para que o formulário não faça refresh
}