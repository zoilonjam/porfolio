
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: "#ff7eb3" },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff7eb3",
      opacity: 0.4
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});


const text = [
  "Aspiring Web Developer",
  "Aspiring Network Administrator ",
  "Loves to learn new things"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){
  currentText = text[i];

  if(!isDeleting){
    document.querySelector(".typing").textContent =
      currentText.substring(0, j++);
    
    if(j > currentText.length){
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j--);
    
    if(j < 0){
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();