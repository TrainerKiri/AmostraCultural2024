
// Aslam Vive
//só ver a senha logo abaixo mas dito isso,
//juro solenemente não fazer nada de bom
//tudo aqui faz referencia ao login queridos...
function realizarLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Lista de usuários e senhas válidos
    const usuarios = [
        { usuario: "aluado", senha: "juro solenemente" },
        { usuario: "rabicho", senha: "que se foda" },
        { usuario: "shadow", senha: "rock" },
        { usuario: "aluado", senha: "lua?" },
    ];

    // Verificação
    const usuarioValido = usuarios.find(u => u.usuario === username && u.senha === password);

    if (usuarioValido) {
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
//qualquer coisa aqui apagada, vai fazer virar um caminhão de merda e parar de funcionar