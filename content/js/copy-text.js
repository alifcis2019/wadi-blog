function copyText() {
    // Get the text field
    const copyText = document.getElementById("copy-text");
    // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerHTML);
}

document.getElementById("copy-text").addEventListener('click',()=>{
    copyText()
})
document.querySelector(".share-icon").addEventListener('click',()=>{
    copyText()
})