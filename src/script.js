const line1 = "Temukan";
const phrases = [
    { text: "Mobil Impianmu", color: "bg-gradient-to-r from-yellow-400 to-yellow-400" },
    { text: "Harga Bersahabat", color: "bg-gradient-to-r from-orange-400 to-orange-500" },
    { text: "Siap Antar ke Mana Pun Tujuanmu", color: "bg-gradient-to-r from-yellow-400 to-yellow-400" }
];

const typingElement1 = document.getElementById("typing-line1");
const typingElement2 = document.getElementById("typing-line2");
const cursor = document.getElementById("cursor");

let index1 = 0;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

// Ketik "Temukan" sekali
function typeLine1() {
    if (index1 < line1.length) {
        typingElement1.textContent += line1.charAt(index1);
        index1++;
        setTimeout(typeLine1, typingSpeed);
    } else {
        setTimeout(typeEffect, 500);
    }
}

// Efek ketik untuk kalimat dinamis
function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    typingElement2.className = `text-transparent bg-clip-text ${currentPhrase.color}`;

    if (!isDeleting && charIndex < currentPhrase.text.length) {
        typingElement2.textContent += currentPhrase.text.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    }
    else if (isDeleting && charIndex > 0) {
        typingElement2.textContent = currentPhrase.text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    }
    else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, pauseTime);
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

// Cursor blinking
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);

window.addEventListener("DOMContentLoaded", typeLine1);
