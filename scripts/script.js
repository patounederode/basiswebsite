// JavaScript Document
console.log("hi");


// Menu openen
var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;  // Voegt klik toe

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
}

// Menu sluiten
var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}

