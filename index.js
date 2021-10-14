const textArea = document.getElementById("txtid")
const wordCount = document.getElementById("count")


textArea.addEventListener("keyup", function wrdCount() {
    let text = textArea.value
    text = text.trim()
    const words = text.split(" ")
    wordCount.innerText = words.length

})