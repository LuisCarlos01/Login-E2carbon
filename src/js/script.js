document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login && senha) {
        alert('Entrando...');
        // Aqui você pode adicionar a lógica para autenticação
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('senha');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash'); // Alterna o ícone
});