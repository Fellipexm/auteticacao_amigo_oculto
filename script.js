const apiUrl = 'http://localhost:3000';

function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const accessToken = document.getElementById('accessToken').value;

  if (username && password && email && accessToken) {
    register(); // Chama a função de cadastro se todos os campos estiverem preenchidos
  } else {
    alert('Por favor, preencha todos os campos antes de cadastrar.');
  }
}

document.getElementById('registerButton').addEventListener('click', validateForm);

function register() {
  const formData = {
    name: document.getElementById('username').value, // Modifique 'username' para 'name'
    password: document.getElementById('password').value,
    email: document.getElementById('email').value,
    accessToken: document.getElementById('accessToken').value, // Modifique 'access_token' para 'accessToken'
  };

  fetch(`${apiUrl}/addParticipant`, { // Modifique a rota para '/addParticipant'
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    alert('Cadastro bem-sucedido');
    window.location.href = 'https://amigo-oculto-alpha.vercel.app/';
  })
  .catch(error => console.error('Erro:', error));
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch(`${apiUrl}/login/${username}`)
  .then(response => response.json())
  .then(data => {
    console.log('Resposta do servidor:', data);
    if (data && data.password === password) {
      alert('Login bem-sucedido');
      window.location.href = 'https://amigo-oculto-alpha.vercel.app/';
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  })
  .catch(error => console.error('Erro:', error));
}
