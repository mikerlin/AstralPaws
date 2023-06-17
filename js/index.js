

function navMenu() {
  let btnMenu = document.querySelector('.header_navbar-menu');
  let navbar = document.querySelector('.header_navbar-items');

  btnMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('navbar-active');
    btnMenu.classList.toggle('img2');
  }) 
}

navMenu()

function changeColor() {
  document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('.link');

    let elementoActivo = localStorage.getItem('elementoActivo');
    if (elementoActivo) {
      document.getElementById(elementoActivo).classList.add('active');
    }

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {

        for (let j = 0; j < links.length; j++) {
          links[j].classList.remove('active');
        }
        
        this.classList.add('active');
        localStorage.setItem('elementoActivo', this.id);
      });
    }
  });
}

changeColor();


const typewriterElement = document.querySelector(".typewriter-text");
const lines = typewriterElement.innerHTML.split("<br>");

let lineIndex = 0;
const speed = 150; // Velocidad de escritura en milisegundos

typewriterElement.innerHTML = "";

function typeWriter() {
  if (lineIndex < lines.length) {
    const lineText = lines[lineIndex];
    let charIndex = 0;
    const lineElement = document.createElement("span");
    typewriterElement.appendChild(lineElement);

    function typeLine() {
      if (charIndex < lineText.length) {
        const char = lineText.charAt(charIndex);
        lineElement.innerHTML += char;
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        lineIndex++;
        typewriterElement.innerHTML += "<br>";
        setTimeout(typeWriter, speed);
      }
    }
    typeLine();
  }
}

typeWriter();


let audio = document.getElementById("myAudio");
let toggleButton = document.getElementById("toggleButton");

function togglePlayback() {
  if (audio.paused) {
    audio.play();
    toggleButton.textContent = "Pause";
  } else {
    audio.pause();
    toggleButton.textContent = audio.currentTime > 0 ? "Continue" : "Play song";
  }
}

audio.addEventListener("play", function() {
  toggleButton.textContent = "Pause";
});

audio.addEventListener("pause", function() {
  toggleButton.textContent = audio.currentTime > 0 ? "Continue" : "Play song";
});
















