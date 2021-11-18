const carousel = document.querySelectorAll(".carousel");
const dot = document.querySelectorAll(".dot");
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");

let index = 1;
show(index);

// prev.addEventListener("click", plus(-1));
// next.addEventListener("click", plus(1));

// prev.onclick = plus(-1);
// next.onclick = plus(1);

for (let i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", () => {
        current(i + 1);
    });
}

function plus(num) {
    show(index += num);
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