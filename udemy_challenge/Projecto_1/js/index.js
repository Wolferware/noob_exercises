//função que modifica as propriedades CSS de 3 elementos, através do seu ID, ao clicar nos mesmos (onclick)
function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.style.display === 'none'){
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';
    }
};

//valida o email
function validateEmail() {
   var mail = document.getElementById('field-email').value;
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { 
    //optei por este regex mesmo para testar se ele aceita, por exemplo: exemplo@gmail.exem (com 4 caracteres depois do ponto)
    //foi testado e, como esperado, não foi aceite.
        return true;
    }
    else {
        alert("Insira um email válido! (exemplo@exemplo.com)");
        return false;
    }
}

//valida o tamanho da password e se está vazio
function validatePass() {
    var pass = document.getElementById('field-password').value;
    if(pass == ""){
        alert("O campo da password não pode estar vazio!");
        return false;
    }
    if (pass.length < 8) {
        alert("Insira uma password válida! (O mínimo é 8 caracteres)");
        return false;
    } else {
        return true;
    }
}

//cria um evento para o botão com id "#btn-login" usando as funções anteriores
document.getElementById('btn-login').addEventListener('click', function(e){
    if (!validateEmail()) {
        e.preventDefault();
        return false;
    } else if(!validatePass()) {
        e.preventDefault();
        return false;
    } else {
        alert('Email e password aceites. :)');
    }
    
    e.preventDefault();
});