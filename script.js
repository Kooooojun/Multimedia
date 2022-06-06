const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if(window.scrollY > nav.offsetHeight + 25){
    nav.classList.add('active')
  }
  else{
    nav.classList.remove('active')
  }
}

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = '組員名單(可自行調整速度!!!)'
let idx = 1
let speed = 500 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
