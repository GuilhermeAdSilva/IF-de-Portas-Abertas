const botoes = document.querySelectorAll(".botaoAdotar");
const modal = document.getElementById("modal");
const inputAnimal = document.getElementById("animal");
const fechar = document.getElementById("fechar");
const form = modal.querySelector("form");

botoes.forEach(botao => {
    botao.addEventListener("click", function (e) {
        e.preventDefault();
        const nomeAnimal = this.getAttribute("data-animal");
        inputAnimal.value = nomeAnimal;
        modal.style.display = "block";
    });
});

fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Obrigado pelo interesse, entraremos em contato em breve!");
    modal.style.display = "none";
    form.reset();
});