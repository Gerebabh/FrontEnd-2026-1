import './style.css';

const form = document.getElementById('formLogin');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailErro = document.getElementById('emailErro');
    const senhaErro = document.getElementById('senhaErro');

    // Limpa erros
    emailErro.textContent = '';
    senhaErro.textContent = '';

    if (emailInput.value.trim() === '') {
        emailErro.textContent = 'E-mail é obrigatório';
        emailInput.focus();
        emailInput.select();
        return;
    }

    if (!emailInput.value.includes('@')) {
        emailErro.textContent = 'Digite um email válido';
        emailInput.focus();
        emailInput.select();
        return;
    }

    if (senhaInput.value.trim() === '') {
        senhaErro.textContent = 'A senha é obrigatória';
        senhaInput.focus();
        senhaInput.select();
        return;
    }

    if (senhaInput.value.length < 8) {
        senhaErro.textContent = 'A senha deve ter no mínimo 8 caracteres';
        senhaInput.focus();
        senhaInput.select();
        return;
    }

    // Sucesso
    window.location.href = './index.html';
});