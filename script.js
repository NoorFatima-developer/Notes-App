const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    img.src = "./images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
});