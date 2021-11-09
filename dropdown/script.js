let input = prompt("Hover or Onclick?").toLowerCase();
let drop = document.querySelector(".dropdown");
let dropMenu = document.querySelector(".drop-menu");
if (input === "hover") {
    drop.addEventListener("mouseover", () => {
        dropMenu.style.display = "block";
    });
    drop.addEventListener("mouseout", () => {
        dropMenu.style.display = "none";
    })
} else if (input == "onclick") {
    drop.addEventListener("click", () => {
        dropMenu.style.display = "block";
    });
    window.addEventListener("click", function(event) {
        if (event.target != drop) {
            dropMenu.style.display = "none";
        }
    })
} else {
    alert("invalid input! refresh and try again.");
}