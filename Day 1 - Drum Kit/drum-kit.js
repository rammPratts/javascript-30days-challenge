window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    let transitionDuration = getComputedStyle(key).transitionDuration.split("")
    transitionDuration.pop()
    transitionDuration =  parseFloat(transitionDuration.join("")) * 1000

    if(!audio) return
    
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing")
    
    setTimeout(() => {
        key.classList.remove("playing")
    }, transitionDuration)
})