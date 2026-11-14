// ===== TYPEWRITER EFFECT ===== down to typeNextChar();
const canvas = document.getElementById("matrixRain");
const ctx = canvas.getContext("2d");
const fullText = "Security Researcher · Web Developer · Ai Enthusiast";


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const characters ="01//''?''H4c{3r?$#0123E}xPlo!t$&%#01010101@#$010100053(ur!7y010?110?001?"; //display characters
const fontSize =16;
let drops = Array(Math.floor(canvas.width / fontSize)).fill(1);

function drawRain() {
    // A slightly see black rectangle frames
    ctx.fillStyle = "rgba(2, 9, 64, 0.05)"; // Background Colour
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "#0aad43"; //text color
    ctx.font = fontSize + "px monospace";

    drops.forEach((x, i) => {
        const char = characters[Math.floor(Math.random() * characters.length)];

        ctx.fillText(char, i * fontSize, x * fontSize);

        if (x * fontSize > canvas.height && Math.random() > 0.975) drops[i]++;
    });
}

setInterval(drawRain, 50); // redraws 
let charIndex = 0;

const typedEl = document.getElementById("typedText");
function typeNextChar(){
    if (charIndex < fullText.length){
        typedEl.textContent += fullText[charIndex];
        charIndex++;
        setTimeout(typeNextChar, 70); //wait, then write

    }
}
typeNextChar();