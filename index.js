
//Detect Button press
var numberofDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberofDrumButtons;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    let button = this.innerHTML;
    checkSound(button);
    buttonAnimation(button);
  });
}

//Detect Keyboard press
document.addEventListener("keypress", function(event){ //will listen for any keyboard strokes
let button = event.key;
  checkSound(button);
  buttonAnimation(button);
})

function checkSound(button){
  let soundPath = "";

  switch(button){
    case "w":
      soundPath = "sounds/crash.mp3"
      break;

    case "a":
      soundPath = "sounds/kick-bass.mp3"
      break;

    case "s":
      soundPath = "sounds/snare.mp3"
      break;

    case "d":
      soundPath = "sounds/tom-1.mp3"
      break;

    case "j":
    soundPath = "sounds/tom-2.mp3"
    break;

   case "k":
    soundPath = "sounds/tom-3.mp3"
    break;

   case "l":
    soundPath = "sounds/tom-4.mp3"
    break;

    default:
    console.log();
  }
  let sound = new Audio(soundPath); //create a new audio object
  sound.play();
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+ currentKey);

  activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);

}
