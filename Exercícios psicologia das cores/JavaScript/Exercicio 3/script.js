document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const usuario = document.getElementById("usuario");
    const senha = document.getElementById("senha");
    const erroUsuario = document.getElementById("erroUsuario");
    const erroSenha = document.getElementById("erroSenha");

    form.addEventListener("submit", (event) => {
        let valido = true;

        if (usuario.value.trim() === "") {
            erroUsuario.textContent = "Usuário é obrigatório!";
            usuario.classList.add("erro-input");
            valido = false;
        } else {
            erroUsuario.textContent = "";
            usuario.classList.remove("erro-input");
        }

        if (senha.value.trim() === "") {
            erroSenha.textContent = "Senha é obrigatória!";
            senha.classList.add("erro-input");
            valido = false;
        } else {
            erroSenha.textContent = "";
            senha.classList.remove("erro-input");
        }

        if (!valido) {
            event.preventDefault(); // Impede o envio do formulário se houver erro
        }
    });
});
