const text = document.querySelector("#change");
text.addEventListener("click", () => {
    if(text.style.color === "" || text.style.color === "blue") {
        text.style.color = "red";
    } else {
        text.style.color = "blue";
    }
});
