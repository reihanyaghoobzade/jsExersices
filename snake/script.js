const cellContainer = document.querySelector(".cell-container");
let num = 30;
for (let i = 0; i < num * 60; i++) {
    let div = document.createElement("div");
    cellContainer.appendChild(div);
    div.classList.add("cell");
}