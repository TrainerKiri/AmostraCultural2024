
//"No dia mais claro, na noite mais densa, o mal sucumbirá ante a minha presença. Todo aquele que venera o mal há de penar, quando o poder do Lanterna Verde enfrentar
//SE APAGAR ALGUMA COISA, MEXER EM UM PONTO TUDO EXPLODE E PARA DE FUNCIONAR (É SERIO)

let myChart;


// CALCULA O VALOR INSERIDO USANDO OS MULTIPLOS INSERIDOS A BAIXO
function calcular() {
    var valor = document.getElementById('input-value').value;
    if (valor === '' || isNaN(valor)) {
        alert('Por favor, insira um valor válido.');
        return;
    }

    var necessidades = valor * 0.50;
    var desejos = valor * 0.30;
    var poupanca = valor * 0.20;

    document.getElementById('necessidades').textContent = 'Necessidades (50%): R$ ' + necessidades.toFixed(2);
    document.getElementById('desejos').textContent = 'Desejos (30%): R$ ' + desejos.toFixed(2);
    document.getElementById('poupanca').textContent = 'Poupança/Investimentos (20%): R$ ' + poupanca.toFixed(2);

    // Dados para o gráfico
    var data = [necessidades, desejos, poupanca];

    // Atualizar o gráfico existente ou criar um novo
    if (myChart) {
        myChart.data.datasets[0].data = data;
        myChart.update();
    } else {
        var ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar', // Tipo de gráfico de barras
            data: {
                labels: ['Necessidades', 'Desejos', 'Poupança/Investimentos'],
                datasets: [{
                    label: 'Distribuição de Gastos',
                    data: data,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
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
                    y: {
                        beginAtZero: true // Começar o eixo Y no zero
                    }
                }
            }
        });

        // Aplicar estilo de background branco ao canvas do gráfico
        document.getElementById('myChart').style.backgroundColor = 'white';
        document.getElementById('myChart').style.borderRadius = '10px'; // arredondar as bordas do gráfico
        document.getElementById('myChart').style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; //adicionar sombra ao gráfico
    }
}

