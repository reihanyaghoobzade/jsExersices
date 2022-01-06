const carousel = document.querySelectorAll(".carousel");
const dot = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 1;
show(index);

prev.addEventListener("click", function() {
    plus(-1);
});
next.addEventListener("click", function() {
    plus(1);
});

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
        current(i + 1);
    });
}

function plus(num) {
    show(index += num);
    console.log(1);
}

function current(num) {
    show(index = num);
}

function show(num) {
    if (num > carousel.length) {
        index = 1;
    } else if (num < 1) {
        index = carousel.length;
    }
    carousel.forEach(item => {
        item.classList.remove("active");
    });
    dot.forEach(item => {
        item.classList.remove("active-dot");
    });

    carousel[index - 1].classList.add("active");
    dot[index - 1].classList.add("active-dot");
}