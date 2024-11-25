const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNodes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}

showNodes();
function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);

}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("P");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

notescontainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })

        document.addEventListener("keydown", event => {
            if(event.key === "Enter"){
                document.execCommand("insertLineBreak");
                event.preventDefault()
            }
        })
    }
});