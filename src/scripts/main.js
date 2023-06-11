console.log("Hello Alpha")


const typewriterContainer = document.getElementById("app")
const message = ["Testing alpha", "Testing beta", "Testing Delta"]

let i = 0
let speed = 100


function Typewrite(Alpha, Beta) {
    if(i < Beta.length) {
        Alpha.innerHTML += Beta.charAt(i);
        i++;
        setTimeout(Typewrite, speed, Alpha, Beta)

    } else {
        Alpha.innerHTML = Alpha.innerHTML.slice(0, -1);
        setTimeout(Typewrite, speed, Alpha, Beta)
    }
}


Typewrite(typewriterContainer, message[0])
const sleep = ms => new Promise(r => setTimeout(r, ms));
Typewrite(document.getElementById("app1"), message[1])
Typewrite(typewriterContainer, message[2])
 
