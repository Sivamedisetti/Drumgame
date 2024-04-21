
//detecting button press
var drumsLength=document.querySelectorAll(".drum").length;
for(var i=0;i<drumsLength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonIs = this.innerHTML;
        makeosound(buttonIs);
        buttonAnimation(buttonIs)
    });

}
//Dectecting keypress
document.addEventListener( "keydown" , function(event){
    makeosound(event.key);
    buttonAnimation(event.key);
} ); 

function makeosound(key){
    
    switch (key) {
        case "w":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            // mouseOut();
            break;
        case "a":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;      
        case "d":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;    
        case "k":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;     
        case "l":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
    
}
function buttonAnimation(currentkey){
    var activButton=document.querySelector("."+currentkey);
    activButton.classList.add("pressed");
   setTimeout(function (){
    activButton.classList.remove("pressed")
   }, 100);

}
    

