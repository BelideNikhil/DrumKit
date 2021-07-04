console.warn("running")

function player(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    if(!audio) return;
    audio.play()
    audio.currentTime=0;

    const key=document.querySelector(`div[data-key="${e.keyCode}"]`)
    key.classList.add("clicker")
}

function resetter(e){
    if(e.propertyName!="transform")return;
    this.classList.remove("clicker")
}



window.addEventListener("keydown",player)

const keys_div=document.querySelectorAll(".key_div")
console.log(keys_div)
keys_div.forEach((key)=>{
    key.addEventListener("transitionend",resetter)
})

