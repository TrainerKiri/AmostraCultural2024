function realizarLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Definindo usuário e senha esperados
    const usuarioEsperado = "aluado";
    const senhaEsperada = "juro solenemente";

    // Verificação simples
    if (username === usuarioEsperado && password === senhaEsperada) {
        alert("Login bem-sucedido!");
        // Redireciona para a página desejada após o login
        window.location.href = "index.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
    realizarLogin();
});