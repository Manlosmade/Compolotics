const typewriterContainer = document.getElementById("app")
const message = ["Test alpha", "Test beta", "Test Delta"]
const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

let i = 0
let speed = 100



async function Typewriter(containerElement, text, sleepTime, speed, Bspeed) {
    TypewriteAlpha()
    await sleep(sleepTime)
    TypewriteBeta()
    async function TypewriteAlpha() {
    for(let i = 0; i < text.length; i++) {
        containerElement.innerHTML += text.charAt(i);      
        await sleep(speed)
    }
}
async function TypewriteBeta() {
    for(let i = 0; i != text.length; i++) {
        containerElement.innerHTML = containerElement.innerHTML.slice(0, -1) 
        await sleep(Bspeed)
    }}

}

while(true) {
Typewriter(typewriterContainer, message[0], 2300, 100, 50)
await sleep(3500)
Typewriter(typewriterContainer, message[1], 2300, 100, 50)
await sleep(3500)
Typewriter(typewriterContainer, message[2], 2300, 100, 50)
await sleep(3500)
}