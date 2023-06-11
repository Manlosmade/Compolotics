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
let y = 0
if(y == 0) {
    Typewrite(typewriterContainer, message[y])
    y++
    setTimeout(Typewrite, 10000, typewriterContainer, message[2])
} 
