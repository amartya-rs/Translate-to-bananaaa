const textArea = document.querySelector("#text-area");
const button = document.querySelector("#btn-translate");
const output = document.querySelector(".output-div");

const url = "https://api.funtranslations.com/translate/minion.json";


let serverUrl = text => `${url}?text=${text}`;


let clickEventHandler = () => {
    const textInput = textArea.value;

    fetch(serverUrl(textInput))
    .then(response => response.json())
    .then(json => {
        const tText = json.contents.translated;
        output.innerText = tText;
    })
    .catch(errorHandler)
}

button.addEventListener("click", clickEventHandler);

//error handling
let errorHandler = () => {
    alert("Something wrong with the server. Try after sometime.")
};


