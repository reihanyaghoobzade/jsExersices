const infoContainer = document.querySelector(".info-container");
const firstPlayer = document.querySelector(".first-player");
const secondPlayer = document.querySelector(".second-player");
const firstSign = document.querySelector(".first-player-sign");
const secondSign = document.querySelector(".second-player-sign");
const startBtn = document.querySelector(".start-btn");
const gameContainer = document.querySelector(".game-container");
const cells = document.querySelectorAll(".cell");
const modal = document.querySelector(".modal");
const firstName = document.querySelector(".first-player-name");
const secondName = document.querySelector(".second-player-name");
const firstPlayerScore = document.querySelector(".first-player-score");
const secondPlayerScore = document.querySelector(".second-player-score");
const playerTurn = document.querySelector(".player-turn");
const refreshGame = document.querySelector(".refresh");
const resetGame = document.querySelector(".reset");
const finishGame = document.querySelector(".finish");
const winplayer = document.querySelector(".show-winner .title");
let turn = 0;
let tie = true;
let wonPlayer;

function main() {
    gameInfo = {
        playerNames: [],
        PlayerSigns: [],
        playerScores: [0, 0],
    };

    firstPlayerScore.innerHTML = gameInfo.playerScores[0];
    secondPlayerScore.innerHTML = gameInfo.playerScores[1];



    startBtn.addEventListener("click", () => {
        const firstPlayerName = firstPlayer.value.trim();
        const secondPlayerName = secondPlayer.value.trim();
        const firstPlayerSign = firstSign.value.trim();
        const secondPlayerSign = secondSign.value.trim();
        if (firstPlayerName && secondPlayerName && firstPlayerSign && secondPlayerSign) {
            if (firstPlayerSign === secondPlayerSign) {
                modalHandler("Ops!!", "The signs must be different!!", "OK");
                firstSign.value = "";
                secondSign.value = "";
            } else {
                firstPlayer.value = "";
                secondPlayer.value = "";
                firstSign.value = "";
                secondSign.value = "";
                gameInfo.playerNames[0] = firstPlayerName;
                gameInfo.playerNames[1] = secondPlayerName;
                gameInfo.PlayerSigns[0] = firstPlayerSign;
                gameInfo.PlayerSigns[1] = secondPlayerSign;
                firstName.innerHTML = firstPlayerName;
                secondName.innerHTML = secondPlayerName;
                playerTurn.innerHTML = `It's ${firstPlayerName} turn.`;

                infoContainer.classList.add("hidden");
                gameContainer.classList.remove("hidden");
            }

        } else {
            modalHandler("Ops!!", "All fields are required!!", "OK");
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            startBtn.click();
        }
    });

    cells.forEach((cell) => {
        cell.addEventListener("click", function() {
            assign(cell);
        });
    });

    refreshGame.addEventListener("click", () => {
        refresh();
    });

    resetGame.addEventListener("click", () => {
        reset();
    });

    finishGame.addEventListener("click", () => {
        finish();
    })
}

function assign(cell) {
    if (cell.innerHTML === "") {
        if (turn % 2 === 0) {
            cell.innerHTML = gameInfo.PlayerSigns[0];
            playerTurn.innerHTML = `It's ${gameInfo.playerNames[1]} turn.`;
            turn++;
        } else {
            cell.innerHTML = gameInfo.PlayerSigns[1];
            playerTurn.innerHTML = `It's ${gameInfo.playerNames[0]} turn.`;
            turn++;
        }
        winner();
    }
}



function winner() {
    if (turn === 9) {
        logic();
        if (tie) {
            modalHandler("Tie", "No one won!", "Retry");
            refresh();
        }
    } else
        logic();
}

function logic() {
    if (
        cells[0].innerHTML === cells[1].innerHTML &&
        cells[1].innerHTML === cells[2].innerHTML &&
        cells[2].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[0].innerHTML);
    } else if (
        cells[3].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[5].innerHTML &&
        cells[3].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[3].innerHTML);
    } else if (
        cells[6].innerHTML === cells[7].innerHTML &&
        cells[7].innerHTML === cells[8].innerHTML &&
        cells[6].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[6].innerHTML);
    } else if (
        cells[0].innerHTML === cells[3].innerHTML &&
        cells[3].innerHTML === cells[6].innerHTML &&
        cells[0].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[0].innerHTML);
    } else if (
        cells[1].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[7].innerHTML &&
        cells[1].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[1].innerHTML);
    } else if (
        cells[2].innerHTML === cells[5].innerHTML &&
        cells[5].innerHTML === cells[8].innerHTML &&
        cells[2].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[2].innerHTML);
    } else if (
        cells[0].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[8].innerHTML &&
        cells[0].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[0].innerHTML);
    } else if (
        cells[2].innerHTML === cells[4].innerHTML &&
        cells[4].innerHTML === cells[6].innerHTML &&
        cells[2].innerHTML !== ""
    ) {
        tie = false;
        winnerHandler(cells[2].innerHTML);
    }
}

function winnerHandler(winner) {
    winner === gameInfo.PlayerSigns[0] ?
        (gameInfo.playerScores[0] += 1) :
        (gameInfo.playerScores[1] += 1);


    winner === gameInfo.PlayerSigns[0] ?
        wonPlayer = `${gameInfo.playerNames[0]} won!` :
        wonPlayer = `${gameInfo.playerNames[1]} won!`;

    modalHandler("Congratulations!", wonPlayer, "Continue");
    refresh();
}

function modalHandler(title, content, button) {
    const modaltitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");
    const cls = document.querySelector(".close");
    const modalBtn = document.querySelector(".continue");

    modaltitle.innerHTML = title;
    modalBody.innerHTML = content;
    modalBtn.innerHTML = button;

    modal.classList.add("active");

    cls.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modalBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.classList.remove("active");
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            cls.click();
        }
    });
}

function refresh() {
    turn = 0;
    tie = true;

    cells.forEach((cell) => {
        cell.innerHTML = "";
    });

    firstPlayerScore.innerHTML = gameInfo.playerScores[0];
    secondPlayerScore.innerHTML = gameInfo.playerScores[1];

    playerTurn.innerHTML = `It's ${gameInfo.playerNames[0]} turn.`;
}

function reset() {
    gameInfo.playerScores = [0, 0];

    refresh();
}

function finish() {
    gameInfo.playerScores[0] > gameInfo.playerScores[1] ?
        wonPlayer = `${gameInfo.playerNames[0]} won with ${gameInfo.playerScores[0]} score!` :
        wonPlayer = `${gameInfo.playerNames[1]} won with ${gameInfo.playerScores[1]} score!`;

    modalHandler("Congratulations!", wonPlayer, "Exit");

    infoContainer.classList.remove("hidden");
    gameContainer.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", main);