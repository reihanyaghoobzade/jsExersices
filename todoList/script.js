const bodytheme = document.querySelector("body");
const themeSwitcher = document.querySelector("#theme-switcher");
const themeImg = themeSwitcher.children[0];
const addTodoBtn = document.querySelector("#add-btn");
const addTodo = document.querySelector("#addt");
const ul = document.querySelector("ul");
const filter = document.querySelector(".filter");
const clearCompleted = document.querySelector("#clear-completed");

function main() {
    //set theme switcher
    themeSwitcher.addEventListener("click", () => {
        bodytheme.classList.toggle("light");
        themeImg.setAttribute(
            "src",
            themeImg.getAttribute("src") === "images/icon-sun.svg" ?
            "images/icon-moon.svg" :
            "images/icon-sun.svg"
        );
    });

    makeTodoElement(JSON.parse(localStorage.getItem("todos")));

    addTodoBtn.addEventListener("click", () => {
        const item = addTodo.value.trim();
        if (item) {
            addTodo.value = "";
            const todos = !localStorage.getItem("todos") ? [] :
                JSON.parse(localStorage.getItem("todos"));

            const currentTodo = {
                item: item,
                isCompleted: false,
            };

            todos.push(currentTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            makeTodoElement([currentTodo]);
        }
    });

    addTodo.addEventListener("keydown", (event) => {
        if (event.key == "X") {
            addTodoBtn.click();
        }
    });

    filter.addEventListener("click", (event) => {
        const id = event.target.id;
        if (id) {
            document.querySelector(".on").classList.remove("on");
            document.querySelector(`#${id}`).classList.add("on");
            document.querySelector(".todos").className = `todos ${id}`;
        }
    });

    clearCompleted.addEventListener("click", () => {
        const deleteIndexes = [];
        const cards = [...document.querySelectorAll(".todos .card")];
        document.querySelectorAll(".card.checked").forEach((card) => {
            deleteIndexes.push(cards.indexOf(card));
            card.classList.add("fall");
            card.remove();
        });
        removeMultiTodos(deleteIndexes);
    });

    ul.addEventListener("dragover", (event) => {
        if (
            event.target.classList.contains("card") &&
            !event.target.classList.contains("dragging")
        ) {
            const draggingCard = document.querySelector(".dragging");
            const cards = [...document.querySelectorAll("ul > .card")];
            const currentPos = cards.indexOf(draggingCard);
            const newPos = cards.indexOf(event.target);
            if (currentPos > newPos) {
                ul.insertBefore(draggingCard, event.target);
            } else {
                ul.insertBefore(draggingCard, event.target.nextSibling);
            }

            const todos = JSON.parse(localStorage.getItem("todos"));
            const removedItem = todos.splice(currentPos, 1);
            todos.splice(newPos, 0, removedItem[0]);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    });
}

function makeTodoElement(todos) {
    if (!todos) {
        return null;
    }

    const todosNumber = document.querySelector("#items-left");

    todos.forEach((todoElement) => {
        //creat HTML elements
        const card = document.createElement("li");
        const cbContainer = document.createElement("div");
        const cbInput = document.createElement("input");
        const checkSpan = document.createElement("span");
        const item = document.createElement("p");
        const clearBtn = document.createElement("button");
        const crossImg = document.createElement("img");

        //add attributes
        card.setAttribute("draggable", true);
        cbInput.setAttribute("type", "checkbox");
        crossImg.setAttribute("src", "images/icon-cross.svg");
        crossImg.setAttribute("alt", "Clear it");
        item.innerHTML = todoElement.item;

        //add classes
        card.classList.add("card");
        cbContainer.classList.add("cb-container");
        cbInput.classList.add("cb-input");
        checkSpan.classList.add("check");
        item.classList.add("item");
        clearBtn.classList.add("clear");

        //set elements by parent child
        cbContainer.appendChild(cbInput);
        cbContainer.appendChild(checkSpan);
        clearBtn.appendChild(crossImg);
        card.appendChild(cbContainer);
        card.appendChild(item);
        card.appendChild(clearBtn);
        document.querySelector("ul").appendChild(card);

        //add eventListener
        card.addEventListener("dragstart", () => {
            card.classList.add("dragging");
        });

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
        });

        clearBtn.addEventListener("click", () => {
            const currentCard = clearBtn.parentElement;
            const indexOfCurrentCard = [
                ...document.querySelectorAll(".todos .card"),
            ].indexOf(currentCard);
            currentCard.classList.add("fall");
            removeTodo(indexOfCurrentCard);
            setTimeout(() => {
                currentCard.remove();
                todosNumber.innerHTML = document.querySelectorAll(
                    ".todos .card:not(.checked)"
                ).length;
            }, 200);
        });

        cbInput.addEventListener("click", () => {
            const currentCard = cbInput.parentElement.parentElement;
            const checked = cbInput.checked;
            const indexOfCurrentCard = [
                ...document.querySelectorAll(".todos .card"),
            ].indexOf(currentCard);
            stateTodo(indexOfCurrentCard, checked);
            checked
                ?
                currentCard.classList.add("checked") :
                currentCard.classList.remove("checked");

            todosNumber.innerHTML = document.querySelectorAll(
                ".todos .card:not(.checked)"
            ).length;
        });

        if (todoElement.isCompleted) {
            cbInput.checked = true;
            card.classList.add("checked");
        }
    });

    todosNumber.innerHTML = document.querySelectorAll(
        ".todos .card:not(.checked)"
    ).length;
}

function removeTodo(index) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function stateTodo(index, isComplete) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos[index].isCompleted = isComplete;
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeMultiTodos(completeIndexes) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter((item, index) => !completeIndexes.includes(index));
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("DOMContentLoaded", main);