function mensagem() {
    window.alert("Obrigado pelo interesse! Entraremos em contato em breve!");
}

function verificarCampos() {
        const nome = document.getElementById('nome').value;
        const contato = document.getElementById('contato').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const checkbox = document.getElementById('checkbox').checked;
        
        const btnEnviar = document.getElementById('btnEnviar');
        if (nome && contato && dataNascimento && checkbox) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }

    document.getElementById('nome').addEventListener('input', verificarCampos);
    document.getElementById('contato').addEventListener('input', verificarCampos);
    document.getElementById('dataNascimento').addEventListener('input', verificarCampos);
    document.getElementById('checkbox').addEventListener('change', verificarCampos);