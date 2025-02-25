document.addEventListener("DOMContentLoaded", () => {
    const contador = document.getElementById("contador");
    let tempo = 10;

    const intervalo = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            contador.textContent = tempo;
            contador.classList.add("pulse");

            setTimeout(() => {
                contador.classList.remove("pulse");
            }, 200);
        } else {
            contador.textContent = "Tempo acabou!";
            contador.style.color = "green";
            clearInterval(intervalo);
        }
    }, 1000);
});
