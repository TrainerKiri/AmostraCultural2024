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

let myChart;

function calcular() {
    var valor = document.getElementById('input-value').value;
    if (valor === '' || isNaN(valor)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    var necessidades = valor * 0.50;
    var desejos = valor * 0.30;
    var poupanca = valor * 0.20;

    document.getElementById('necessidades').innerHTML = 'Necessidades (50%): R$ ' + necessidades.toFixed(2);
    document.getElementById('desejos').innerHTML = 'Desejos (30%): R$ ' + desejos.toFixed(2);
    document.getElementById('poupanca').innerHTML = 'Poupança/Investimentos (20%): R$ ' + poupanca.toFixed(2);

    // Dados para o gráfico
    var data = [necessidades, desejos, poupanca];

    // Função para converter hex para RGBA
    function hexToRgba(hex, alpha = 1) {
        if (hex.length === 4) {
            hex = hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
        } else {
            hex = hex.slice(1);
        }
        
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Cores em hexadecimais
    const colors = ['#07fcff', '#36A2EB', '#FFCE56'];

    // Converter cores para RGBA
    const backgroundColors = colors.map(color => hexToRgba(color, 0.2));
    const borderColors = colors.map(color => hexToRgba(color, 1));

    // Atualizar o gráfico existente ou criar um novo
    if (myChart) {
        myChart.data.datasets[0].data = data;
        myChart.update();
    } else {
        var ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Necessidades (50%)', 'Desejos (30%)', 'Poupança/Investimentos (20%)'],
                datasets: [{
                    label: 'Distribuição de Valores',
                    data: data,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.label + ': R$ ' + tooltipItem.raw.toFixed(2);
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Categorias'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Valores em R$'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
