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


function playSound1() {
  var clap = document.getElementById("clap");
  clap.play();

}

function playSound2() {
  var hihat = document.getElementById("hihat");
  hihat.play();
}

function playSound3() {
  var kick = document.getElementById("kick");
  kick.play();
}

function playSound4() {
  var openhat = document.getElementById("openhat");
  openhat.play();
}
function playSound5() {
  var boom = document.getElementById("boom");
  boom.play();
}
function playSound6() {
  var ride = document.getElementById("ride");
  ride.play();
}
function playSound7() {
  var snare = document.getElementById("snare");
  snare.play();
}

function playSound8() {
  var tom = document.getElementById("tom");
  tom.play();
}

function playSound9() {
  var pink = document.getElementById("pink");
  pink.play();
}