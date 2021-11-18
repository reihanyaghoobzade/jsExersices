const modal = document.querySelectorAll(".modal")[0];
const cls = document.querySelectorAll(".close")[0];
const btn = document.querySelectorAll(".btn")[0];

btn.addEventListener("click", () => {
    modal.classList.add("active");
});
cls.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.classList.remove("active");
    }
});