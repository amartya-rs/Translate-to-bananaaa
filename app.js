var textArea = document.querySelector("#text-area");
var button = document.querySelector("#btn-translate");
var output = document.querySelector(".output-div");

button.addEventListener("click", clickEventHandler);



var url = "https://api.funtranslations.com/translate/minion.json";


function serverUrl (text) {
    return url + "?" + "text=" + text
}


function clickEventHandler() {
    var textInput = textArea.value;

    fetch(serverUrl(textInput))
    .then(response => response.json())
    .then(json => {
        var tText = json.contents.translated;
        output.innerText = tText;
    })
    
    
}



