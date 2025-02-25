document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector(".titulo");
    const botao = document.getElementById("botao");

    botao.addEventListener("click", () => mudarTitulo(titulo));
});

function mudarTitulo(elemento) {
    elemento.textContent = "Título alterado com sucesso!";
    elemento.style.color = "green";
}
