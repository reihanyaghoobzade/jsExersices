const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function(item) {

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            accordion.forEach(function(acc) {
                acc.classList.remove("active");
            });
        }

        this.classList.add("active");
    });
});