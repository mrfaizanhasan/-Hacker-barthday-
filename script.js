script.jsconst text = [
    "Initializing system hack...",
    "Accessing secure database...",
    "Injecting payload...",
    "Compromising firewall...",
    "HACK SUCCESSFUL!",
    "HAPPY BIRTHDAY BRO! 🎉🎂",
    "May your happiness be unbreakable!"
];

let index = 0;
const speed = 1000;

function typeText() {
    if (index < text.length) {
        document.getElementById("hacking-text").innerHTML += text[index] + "<br>";
        index++;
        setTimeout(typeText, speed);
    }
}

window.onload = typeText;