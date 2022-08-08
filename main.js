const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black", "blue", "green", "yellow", "gray", "pink", "orange"]

button.addEventListener("click", changeBackground);

let sira= 0;

function changeBackground() {
    
    // const rastgeleSayi = Math.floor (Math.random() * colors.length)
    // const secilenRenk = colors[rastgeleSayi];
    // body.style.backgroundColor = secilenRenk;


    if (sira==7) sira=0;
    const secilenRenk = colors[sira];
    sira++

    body.style.backgroundColor = secilenRenk;



}