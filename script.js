function nextQuestion(answer, questionNumber) {
    const quiz = document.getElementById('quiz');
    const calculation = document.getElementById('calculation');

    if (answer === 'demissao') {
        // Pular direto para a terceira pergunta
        document.getElementById('question1').style.display = 'none';
        document.getElementById('question3').style.display = 'block';
    } else if (questionNumber === 3 && answer === 'yes') {
        quiz.classList.add('fade-out');
        setTimeout(() => {
            quiz.style.display = 'none';
            calculation.classList.add('fade-in');
            calculation.style.display = 'block';
        }, 300); // Tempo da transição em milissegundos
    } else if (questionNumber < 3) {
        document.getElementById('question' + questionNumber).style.display = 'none';
        document.getElementById('question' + (questionNumber + 1)).style.display = 'block';
    } else {
        window.location.href = 'https://wa.me/5531993174804?text=Olá%2C+gostaria+de+falar+sobre+minha+rescisão';
    }
}


function calculate() {
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    const value3 = parseFloat(document.getElementById('value3').value);
    const value5 = parseFloat(document.getElementById('value5').value);

    // Exemplo de cálculo, ajustado conforme necessário
    const result = value1 * (value2 + (value3 / 12)) - (value5 * 100);
    document.getElementById('result').innerText = 'Resultado da Rescisão: R$ ' + result.toFixed(2);

    // Mostrar o botão de contato no WhatsApp
    document.getElementById('contactBtn').style.display = 'inline-block';
}

function contactWhatsApp() {
    const encodedMessage = encodeURIComponent("Olá, gostaria de falar sobre minha rescisão.");
    const url = `https://wa.me/5531993174804?text=${encodedMessage}`;
    window.open(url, '_blank');
}
