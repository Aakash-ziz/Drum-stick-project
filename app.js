window.addEventListener('keydown',(e)=>{
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`.bu1[data-key="${e.keyCode}"]`)
console.log(key)
if(!audio) return
audio.currentTime = 0
audio.play()
key.classList.add('playing')
setTimeout(() => {
  key.classList.remove('playing')
}, 200); // Change style back after 2 seconds

})
