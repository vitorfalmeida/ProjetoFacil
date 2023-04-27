// Obtenha os elementos do formulário
const form = document.querySelector('form');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const nascimentoInput = document.getElementById('nascimento');
const senha1Input = document.getElementById('senha1');
const senha2Input = document.getElementById('senha2');
const botaoCadastrar = document.querySelector('button');

// Defina a função de cadastro
function cadastrarUsuario() {
  // Obtenha os valores dos campos do formulário
  const nome = nomeInput.value;
  const cpf = cpfInput.value;
  const email = emailInput.value;
  const nascimento = nascimentoInput.value;
  const senha1 = senha1Input.value;
  const senha2 = senha2Input.value;

  // Verifique se as senhas inseridas pelo usuário são iguais
  if (senha1 !== senha2) {
    alert('As senhas não coincidem. Tente novamente.');
    return;
  }

  // Crie um objeto com os valores dos campos do formulário
  const usuario = {
    nome: nome,
    cpf: cpf,
    email: email,
    nascimento: nascimento,
    senha: senha1,
  };

  // Converta o objeto em uma string JSON
  const usuarioJSON = JSON.stringify(usuario);

  // Armazene a string JSON em LocalStorage
  localStorage.setItem('usuario', usuarioJSON);

  // Exiba uma mensagem de sucesso
  alert('Cadastro realizado com sucesso!');

  // Limpe os campos do formulário
  form.reset();
}

// Defina a função que será executada ao clicar no botão "Cadastrar"
function botaoCadastrarClick(event) {
  event.preventDefault(); // previna o comportamento padrão de enviar o formulário
  cadastrarUsuario(); // chame a função de cadastro
}

// Adicione um ouvinte de eventos ao botão "Cadastrar"
botaoCadastrar.addEventListener('click', botaoCadastrarClick);
