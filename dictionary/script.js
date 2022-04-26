const word = document.getElementById("word");
const search = document.getElementById("search");
const response = document.getElementById("response");
const partOfSpeech = document.getElementById("partOfSpeech");
const phonetics = document.getElementById("phonetics");
const audioDiv = document.getElementById("audio");
const meanings = document.getElementById("meaning");
const audioIcon = document.getElementById("audio");

word.addEventListener("keypress", (event) => {
    event && search.click();
});

search.addEventListener("click", () => {
    fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value.toLowerCase()}`
        )
        .then((response) => response.json())
        .then((data) => {
            showData(data[0]);
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

function showData(data) {
    response.classList.remove("hidden");
    response.classList.add("flex");
    partOfSpeech.innerHTML = data.meanings[0].partOfSpeech;
    phonetics.innerHTML = data.phonetics[1].text;
    data.meanings[0].definitions.forEach((element, index) => {
        const paragraph = document.createElement("p");
        paragraph.className = "my-4 px-4 py-1 text-md w-auto";
        paragraph.innerHTML = `${index + 1}) ${element.definition}`;
        meanings.appendChild(paragraph);
    });

    audioIcon.addEventListener("click", () => {
        const audio = new Audio(data.phonetics[0].audio);
        audio.play();
    });
}