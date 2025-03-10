document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    let errorMessage = '';

    if (!isValidCPF(login)) {
        errorMessage += 'CPF inválido.\n';
    }
    if (!isValidPhone(senha)) {
        errorMessage += 'Número de celular inválido. Deve ter 11 dígitos.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert('Entrando...');
        // Aqui você pode adicionar a lógica para autenticação
    }
});

const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('senha');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash'); // Alterna o ícone
});

// Adiciona evento de clique para recarregar a página ao clicar no logo iPass
document.querySelectorAll('.logo-ipass').forEach(logo => {
    logo.addEventListener('click', function() {
        location.reload();
    });
});

// Função para validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se tem 11 dígitos e não é uma sequência repetida

    const digits = cpf.split('').map(Number);
    const sum = (multiplier) => digits.slice(0, multiplier).reduce((acc, num, index) => acc + num * (multiplier + 1 - index), 0);
    
    const firstCheck = (sum(9) * 10) % 11 % 10;
    if (firstCheck !== digits[9]) return false;

    const secondCheck = (sum(10) * 10) % 11 % 10;
    return secondCheck === digits[10];
}

// Função para validar número de celular
function isValidPhone(phone) {
    phone = phone.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    const dddPattern = /^(?:[1-9][0-9])\d{8}$/; // Verifica se o celular tem 11 dígitos e começa com DDD válido
    return dddPattern.test(phone);
}