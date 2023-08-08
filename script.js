
    let currentPlayer = 1;
    let playerScores = [0, 0];
    let isGameOver = false;

    function rollDice(player) {
        if (isGameOver) return;

        const diceValue = Math.floor(Math.random() * 6) + 1;
        const diceImage = document.getElementById("diceImage");
        diceImage.src = `dice${diceValue}.png`;

        playerScores[player - 1] += diceValue;
        document.getElementById(`score${player}`).textContent = playerScores[player - 1];

        document.getElementById(`rollBtn${player}`).disabled = true;
        document.getElementById(`rollBtn${3 - player}`).disabled = false;

        if (playerScores[player - 1] >= 30) {
            isGameOver = true;
            document.getElementById("resetBtn").disabled = false;
            document.getElementById(`rollBtn${player}`).disabled = true;
            document.getElementById(`rollBtn${3 - player}`).disabled = true;
            // alert(`Player ${player} wins!`);
            const winnerMessage = `Player ${player} wins!`;
            const winnerElement = document.getElementById("winnerMessage");
            winnerElement.textContent = winnerMessage;
            winnerElement.style.display = "block";
        }
       const turnMessage = document.getElementById("turnMessage");
        if (player === 1) {
            turnMessage.textContent = "Player-2 To Play";
        } else {
            turnMessage.textContent = "Player-1 To Play";
        }
    }

    function resetGame() {
        currentPlayer = 1;
        playerScores = [0, 0];
        isGameOver = false;

        document.getElementById("score1").textContent = "0";
        document.getElementById("score2").textContent = "0";
        document.getElementById("diceImage").src = "dice.png";
        document.getElementById("rollBtn1").disabled = false;
        document.getElementById("rollBtn2").disabled = true;
        document.getElementById("resetBtn").disabled = true;
        location.reload();
        document.getElementById("winnerMessage").style.display = "none";
        const turnMessage = document.getElementById("turnMessage");
        turnMessage.textContent = "Player-1 To Play";
    }
