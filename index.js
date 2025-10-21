// document.querySelector("h1").onload = alert("Is working!");

/* document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    alert("I got clicked!");
} */

for (var i = 0; i<document.querySelectorAll(".drum").length; i++) { 
/* the querySelectorAll 'sees' all the elements with the class .drum. Then, we need to select
each of them by [] index. I would need to select each button by index [0-6], which would be 
time consuming. Instead, I'm using a for-loop. The for-loop is used to select all the .drum 
elements from index [i = 0] until [i = 6].*/ 


/* The Event Listener/Function below is listening for a mouse click. 
It then saves this.innerHTML as a string.*/
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
// This is how you write an anonymous function. It doesn't need a name, and it works the same.
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);
    }); 
}

/* The Event Listener/Function below is doing two things. First, if a mouse-click 
from the above function is detected, it will pass that string.key into makeSound(key), and play
a sound based on that string.key.
Secondly, it is listening for a keyboard press made anywhere on the document. Once one is 
detected, it will take the event.key and pass it into makeSound(key) to play the appropriate
sound.*/
document.addEventListener("keydown", function(event) {
        makeSound(event.key);

        buttonAnimation(event.key);
    });

    function makeSound(key) {
        switch (key) {
            case "w":
                 var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                break;
            case "l":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                    kickBass.play();
                break;

            default:console.log(buttonInnerHTML);
                break;
        } 
        /* Switch statements work similarly to if statements, bar the syntax. Instead of 
    if (expression) {} else {}, it's switch (expression) { case "x":, followed by a break keyword
    instead of the semi-colons }. While it's functionally similar, the main difference is that
    you are able to specify what should happen for many, very specific cases. Hence, the name.*/
    }

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}