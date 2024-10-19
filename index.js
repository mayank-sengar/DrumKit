

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
// var bajna =new Audio("./sounds/crash.mp3");
// bajna.play();

// this.style.color="white";

var buttonInnerHTML=this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

})


addEventListener("keydown",function(event){

   
    makeSound(event.key);
buttonAnimation(event.key);


})

function makeSound(key){


    switch (key) {
        case ("w" || "W"):
             var bajna =new Audio("./sounds/tom-1.mp3");
             bajna.play();
            break;
    
            case ("a" || "A"):
             var bajna =new Audio("./sounds/tom-2.mp3");
             bajna.play();
            break;
    
    
            case ("s" || "S"):
             var bajna =new Audio("./sounds/tom-3.mp3");
             bajna.play();
            break;
    
    
    
            case ("d" ||"D"):
             var bajna =new Audio("./sounds/tom-4.mp3");
             bajna.play();
            break;
    
    
    
            case ("j"|| "J"):
             var bajna =new Audio("./sounds/snare.mp3");
             bajna.play();
            break;
    
    
            case ("k" || "K"):
             var bajna =new Audio("./sounds/crash.mp3");
             bajna.play();
            break;
    
    
            case ("l" || "L"):
             var bajna =new Audio("./sounds/kick-bass.mp3");
             bajna.play();
            break;
    
        default:  console.log();
            break;
    }

}


function buttonAnimation(currentKey){


   var activeClass= document.querySelector("."+ currentKey)
   activeClass.classList.add("pressed");

    setTimeout(function(){
activeClass.classList.remove("pressed");
    }  ,100);

}

