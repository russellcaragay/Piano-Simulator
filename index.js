
// Created by Russell Caragay August 11 2022,
// Finished: August 14, 2022

// Initizalization of Piano Audio Keys
var pianoC = new Audio("sounds/c-key.wav");
var pianoD = new Audio("sounds/d-key.wav");
var pianoE = new Audio("sounds/e-key.wav");
var pianoF = new Audio("sounds/f-key.wav");
var pianoG = new Audio("sounds/g-key.wav");
var pianoA = new Audio("sounds/a-key.wav");
var pianoB = new Audio("sounds/b-key.wav");

// Function to identify the key pressed or clicked
function pianoKey(letter){
    switch (letter){
        case "C":
            pianoC.play();
            break;

        case "D":
            pianoD.play();
            break; 

        case "E":
            pianoE.play();
            break;
        
        case "F":
            pianoF.play();
            pianoF.stop();
        
        case "G":
            pianoG.play();
            pianoF.stop();
        
        case "A":
            pianoA.play();
            pianoF.stop();
        
        case "B":
            pianoB.play();
            

        default:
            console.log(letter);
    } 
}

// For Loop to check each buttons clicked
for(counter=0; counter < document.querySelectorAll(".piano-key").length; counter++ ){
    // Event Listener DOM query for each buttons
    document.querySelectorAll(".piano-key")[counter].addEventListener("click", function(){
        btnAnimation(this.innerHTML.toLowerCase());
        pianoKey(this.innerHTML);
        
});
}

//Event Listener for each keys pressed in the keyboard.
document.addEventListener("keypress", function(event){
    btnAnimation(event.key.toLowerCase());
    pianoKey(event.key.toUpperCase());
    
})

// Event Listener for dark mode
document.querySelector(".theme-mode").addEventListener("click",function(){
    
    if(this.innerHTML === "Click for Dark Mode 🌑"){
        this.innerHTML = "Click for Dark Mode ☀️";
    } else{
        this.innerHTML = "Click for Dark Mode 🌑";
    };

    this.classList.toggle("theme-light");
    document.querySelector("#title").classList.toggle("h1-dark");
    document.querySelector(".instruction").classList.toggle("instruction-dark");
    document.querySelector(".footer-paragraph").classList.toggle("footer-dark");
    document.querySelector("body").classList.toggle("body-dark");
})

// Function for buttons animation
function btnAnimation(key){
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}
