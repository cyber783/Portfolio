// ===== SHARED: DOES THIS VISITOR PREFER LESS MOTION? ===== 
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduced)").matches;

// ===== BOOT SEQUENCE =====
const bootScreen =document.getElementById("bootScreen");
const bootText = document.getElementById("bootText");
const bootLines = [
    "booting assistant core ...",
    "loading profile: Kaushal Rana",
    "security modules: OK",
    "render engine: OK",
    "WELCOME."
];

function runBootSequence() {
 if (reducedMotion) { bootScreen.classList.add("hide"); 
    return;
 }
 let lineIndex = 0;
 let charIndex = 0;

 function typeLine() {
    if (lineIndex >= bootLines.length) {
        setTimeout(() => bootScreen.classList.add("hide"), 500);
        return;
        }
        const currentLine = bootLines[lineIndex];
        if (charIndex < currentLine.length) {
        bootText.textContent += curentLine[charIndex];
        charIndex++;
        setTimeout(typeLine, 30);
        } else {
            bootText.textContent += "\n";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 200);
        }
    }
    typeLine();
}
runBootSequence();

// ===== BACKGROUND MATRIX RAIN EFFECT =====

const canvas = document.getElementById("matrixRain");
const ctx = canvas.getContext("2d");
const characters ="01//''?''H4c{3r?$#0123E}xPlo!t$&%#01010101@#$010100053(ur!7y010?110?001?"; //display characters
const fontSize =16;
let drops = [];


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops = Array(Math.floor(canvas.width / fontSize)).fill(1);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


function drawRain() {
  ctx.fillStyle = "rgba(6, 19, 15, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0aad43";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const char = characters[Math.floor(Math.random() * characters.length)];
    ctx.fillText(char, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;     // reset this column back to the top
      drops[i]++;         // always move down one step, every frame
    }
  });
}
if (!reduceMotion) setInterval (drawRain, 50);

// ==== TYPEERITER SUBTITLE ====
const typedEl = document.getElementById("typedText");
const fullText = "Security Researcher · Web Developer · Ai Enthusiast";
if (reduceMotion) {
    typedEl.textContent = fullText;
}else {
    let charIndex = 0;
    function typeNextChar(){
        if (charIndex < fullText.length){
        typedEl.textContent += fullText[charIndex];
        charIndex++;
        setTimeout(typeNextChar, 70); //wait, then write
        }
    }
    typeNextChar();
}


// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => 
    navLinks.classList.toggle("open"));
navLinks.addEventListener("click", () => navLinks.
    classList.remove("open")); //close menu on link click
