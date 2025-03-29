document.addEventListener('DOMContentLoaded', function() {
    const tapButton = document.getElementById('tap-button');
    const scoreDisplay = document.getElementById('score');
    const startButton = document.getElementById('start-button');

    let score = 0;
    let gameActive = false;

    tapButton.addEventListener('click', incrementScore);
    startButton.addEventListener('click', startGame);

    function incrementScore() {
        if (gameActive) {
            score++;
            scoreDisplay.innerText = `Score: ${score}`;
        }
    }

    function startGame() {
        score = 0;
        gameActive = true;
        scoreDisplay.innerText = `Score: ${score}`;
        startButton.disabled = true;

        const interval = setInterval(() => {
            tapButton.innerText = Math.floor(Math.random() * 100);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            gameActive = false;
            alert(`Game Over! Your score is: ${score}`);
            startButton.disabled = false;
            tapButton.innerText = "0";
        }, 5000);
    }
});