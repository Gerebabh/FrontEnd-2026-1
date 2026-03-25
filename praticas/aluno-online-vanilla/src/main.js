import './style.css'

const botao = document.querySelector("button");

botao.addEventListener('click', (e) => {
    const matriculaInput = document.querySelector('#matricula');
    const matriculaErro = document.querySelector('#matriculaErro');
    const senhaInput = document.querySelector('#senha');
    const senhaErro = document.querySelector('#senhaErro');

    matriculaErro.textContent = '';
    senhaErro.textContent = '';

    if (matriculaInput.value == '' ) {
        matriculaErro.textContent = "Matricula e obrigatoria";
        return;
    }

    if(parseInt(matriculaInput.value) <= 0) {
        matriculaErro.textContent = "Matricula deve ser um numero positivo";
        return;
    }

    if (matriculaInput.value.length != 8) {
        matriculaErro.textContent = 'A matricula deve ter 8 digitos'
        return;
    }

    if (senhaInput.value == '') {
        senhaErro.textContent = 'A senha e obrigatoria'
        return;
    }

        if (senhaInput.value.length != 8) {
        senhaErro.textContent = 'A senha deve ter no minimo 8 digitos'
        return;
    }
})