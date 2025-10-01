const botoes = document.querySelectorAll(".botaoAdotar");
const modal = document.getElementById("modal");
const inputAnimal = document.getElementById("animal");
const fechar = document.getElementById("fechar");
const form = modal.querySelector("form");

// Abrir modal ao clicar em "Adotar"
botoes.forEach(botao => {
    botao.addEventListener("click", function (e) {
        e.preventDefault();
        const nomeAnimal = this.getAttribute("data-animal");
        inputAnimal.value = nomeAnimal;
        modal.style.display = "block";
    });
});

// Fechar modal ao clicar no X
fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Interceptar envio do formulário
form.addEventListener("submit", (e) => {
    e.preventDefault(); // impede envio real
    alert("Obrigado pelo interesse, entraremos em contato em breve!"); // mensagem para o usuário
    modal.style.display = "none"; // fecha o modal
    form.reset(); // limpa os campos
});