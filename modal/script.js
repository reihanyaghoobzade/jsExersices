let modal = document.querySelector(".modal");
let cls = document.querySelector(".close");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    modal.style.display = "block";
});
cls.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});