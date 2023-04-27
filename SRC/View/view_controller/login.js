

function logar(){

    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;


    if(cpf == "70383210135" && senha == "123"){
        alert('Sucesso !');
    }
        else {
            alert('Usuário ou senha Incorreto !');
        }
    }