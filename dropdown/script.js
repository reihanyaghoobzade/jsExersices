const drop = document.querySelector(".dropdown");

twoCase("drop-menu", "hover");

function twoCase(id, mood) {
    mood = mood.toLowerCase();
    const dropMenu = document.querySelector(`#${id}`);
    if (mood === "hover") {
        drop.addEventListener("mouseover", () => {
            dropMenu.classList.add("active");
        });
        drop.addEventListener("mouseout", () => {
            dropMenu.classList.remove("active");
        })
    } else if (mood == "onclick" || mood == "click") {
        drop.addEventListener("click", () => {
            dropMenu.classList.add("active");
        });
        window.addEventListener("click", function(event) {
            if (event.target != drop) {
                dropMenu.classList.remove("active");
            }
        })
    } else {
        alert("invalid input! refresh and try again.");
    }
}