//with anonymous functions and "this" :

let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}



//slide down

let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].classList.toggle("active");
        let content = accordion[i].nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.padding = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "16px";
        }
    });
}



//with arrow functions and without "this":

/*let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", () => {
        accordion[i].classList.toggle("active");
        let content = accordion[i].nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}*/