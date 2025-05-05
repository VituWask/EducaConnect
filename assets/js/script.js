    
function initializeChart() {
    const ctx = document.getElementById('studentChart').getContext('2d');
    const notas = [7, 5, 8, 6];  // Notas de Matemática, Ciências, Português e História
    const disciplinas = ['Matemática', 'Ciências', 'Português', 'História'];
    const media = 6;

    const feedbackText = document.getElementById('feedback-text');
    const recommendationList = document.getElementById('recommendation-list');

    // Calcular a média do aluno
    const mediaAluno = notas.reduce((a, b) => a + b, 0) / notas.length;

    // Gerar o texto de feedback com base na média
    if (mediaAluno >= media) {
        feedbackText.innerHTML = `Parabéns! Sua média é ${mediaAluno.toFixed(2)}. Seu desempenho está bom, mas sempre há algo para melhorar!`;
    } else {
        feedbackText.innerHTML = `Sua média é ${mediaAluno.toFixed(2)}. Você pode melhorar! Foco nas matérias abaixo da média.`;
    }

    // Recomendações de estudo
    const recomendacoes = {
        'Matemática': {
            abaixo: 'Revisar conceitos de álgebra e geometria. Praticar exercícios de cálculo.',
            acima: 'Você tem bom conhecimento, mas pode melhorar resolvendo problemas mais avançados de cálculo e probabilidade.'
        },
        'Ciências': {
            abaixo: 'Estudar mais sobre os estados da matéria, biologia e também plantas e suas partes.',
            acima: 'Você tem bom entendimento de ciências, mas pode aprofundar seus estudos na parte de física moderna e biotecnologia.'
        },
        'Português': {
            abaixo: 'Ler mais livros e praticar interpretação de textos e gramática.',
            acima: 'Ótima compreensão! Para melhorar ainda mais, tente trabalhar em produção textual e escrever ensaios sobre temas variados.'
        },
        'História': {
            abaixo: 'Revisar os principais eventos históricos e suas implicações sociais.',
            acima: 'Excelente! Agora, que tal estudar mais sobre a Antiguidade Clássica, as grandes guerras, a colonização, a Revolução Francesa, entre outros?'
        }
    };

    // Exibir recomendações baseadas nas notas
    disciplinas.forEach((disciplina, index) => {
        const li = document.createElement('li');
        if (notas[index] < media) {
            li.innerHTML = `${disciplina}: ${recomendacoes[disciplina].abaixo}`;
        } else {
            li.innerHTML = `${disciplina}: ${recomendacoes[disciplina].acima}`;
        }
        recommendationList.appendChild(li);
    });

    // Criar o gráfico
    const studentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: disciplinas,
            datasets: [{
                label: 'Notas do Aluno',
                data: notas,
                backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'],
                borderColor: ['#388E3C', '#FF9800', '#1976D2', '#D32F2F'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,  // Torna o gráfico responsivo
            legend: {
                position: 'right', // Mover a legenda para a direita
                labels: {
                    fontSize: 14, // Ajustar o tamanho da fonte da legenda
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });
}