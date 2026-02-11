function convertText() {
    const text = document.getElementById("inputText").value;
    const elementText = text
        .toUpperCase()
        .split("")
        .map(letter => `<span class='element'>${letter}</span>`)
        .join("");
    document.getElementById("output").innerHTML = elementText;
}