const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");

const cellContainer = document.querySelector(".cell-container");
let num = 3;
for (let i = 0; i < num ** 2; i++) {
    let div = document.createElement(`div`);
    cellContainer.appendChild(div);
    div.classList.add("cell");
}
const cells = document.querySelectorAll(".cell");
const initState = [""];
const state = [];
const finalState = [];

for (let i = 1; i < num ** 2; i++) {
    initState.push(i);
    finalState.push(i);
}

finalState.push("");

for (let i = num ** 2; i > 0; i--) {
    randIndex = getRandomInt(0, i - 1);
    state.push(initState[randIndex]);
    initState.splice(randIndex, 1);
}

cells.forEach((cell, index) => {
    cell.innerHTML = state[index];
    cell.addEventListener("click", () => {
        logic(index);
    });
});

function logic(index) {
    if (cells[index].innerHTML !== "") {
        if (index % num == 0) {
            if (cells[index - num] && cells[index - num].innerHTML === "") {
                cells[index - num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index + num] && cells[index + num].innerHTML === "") {
                cells[index + num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index + 1] && cells[index + 1].innerHTML === "") {
                cells[index + 1].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            }
        } else if (index % num === num - 1) {
            if (cells[index - num] && cells[index - num].innerHTML === "") {
                cells[index - num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index + num] && cells[index + num].innerHTML === "") {
                cells[index + num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index - 1] && cells[index - 1].innerHTML === "") {
                cells[index - 1].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            }
        } else {
            if (cells[index - 1] && cells[index - 1].innerHTML === "") {
                cells[index - 1].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index + 1] && cells[index + 1].innerHTML === "") {
                cells[index + 1].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index - num] && cells[index - num].innerHTML === "") {
                cells[index - num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            } else if (cells[index + num] && cells[index + num].innerHTML === "") {
                cells[index + num].innerHTML = cells[index].innerHTML;
                cells[index].innerHTML = "";
            }
        }
    }
    checkEnd();
}

function checkEnd() {
    let check = true;
    cells.forEach((cell, index) => {
        if (!(cell.innerHTML == finalState[index])) {
            check = false;
        }
    });
    if (check) {
        cells[(num ** 2) - 1].innerHTML = num ** 2;
        cellContainer.classList.add("won");
        clearInterval(timer);
    }
}
//getrandom number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//set timer
let second = 0;

function setMinute(value) { return value > 9 ? value : "0" + value; }
const timer = setInterval(function() {
    seconds.innerHTML = setMinute(++second % 60);
    minutes.innerHTML = setMinute(parseInt(second / 60, 10));
}, 1000);