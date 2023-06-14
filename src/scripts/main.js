console.log("Hello Alpha")


const typewriterContainer = document.getElementById("app")
const message = ["Testing alpha", "Testing beta", "Testing Delta"]

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

let i = 0
let speed = 100


/*function Typewrite(Alpha, Beta, Beta1) {
    if(i < Beta.length) {
        Alpha.innerHTML += Beta.charAt(i);
        i++;
        setTimeout(Typewrite, speed, Alpha, Beta)
        console.log("TEST" + i)

    } else if(i == Beta.length) {
        Alpha.innerHTML = Alpha.innerHTML.slice(0, -1);
        setTimeout(Typewrite, speed, Alpha, Beta)
    } else if(i== 0 ) {
        Alpha.innerHTML += Beta1.charAt(i);
        i++;
        setTimeout(Typewrite, speed, Alpha, Beta)
        console.log("TEST" + i)
    }
}

Typewrite(typewriterContainer, message[0], message[1])
*/

async function Typewriter(containerElement, text) {
    for(let i = 0; i < text.length; i++) {
        containerElement.innerHTML += text.charAt(i);      
        await sleep(100)
    } 
    for(let i = 0; i != text.length; i++) {
        containerElement.innerHTML = containerElement.innerHTML.slice(0, -1) 
        await sleep(100)
    }

}

Typewriter(typewriterContainer, message[0])