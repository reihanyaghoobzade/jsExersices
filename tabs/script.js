const tabs = document.querySelectorAll(".tab-link");
const content = document.querySelectorAll(".tab-content");


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        tabs.forEach(function(item) {
            if (item !== this) {
                item.classList.remove("active");
            }
        });
        this.classList.add("active");
        content.forEach(function(txt) {
            if (txt !== content[i]) {
                txt.classList.remove("active");
            }
        });
        content[i].classList.add("active");

    });
}