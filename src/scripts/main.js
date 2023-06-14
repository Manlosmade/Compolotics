console.log("Hello Alpha")


const typewriterContainer = document.getElementById("app")
const message = ["Testing alpha", "Testing beta", "Testing Delta"]

const sleep = (milliseconds) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

let i = 0
let speed = 100



async function Typewriter(containerElement, text) {
    TypewriteAlpha()
    await sleep(1350)
    TypewriteBeta()
    async function TypewriteAlpha() {
    for(let i = 0; i < text.length; i++) {
        containerElement.innerHTML += text.charAt(i);      
        await sleep(100)
    }
}
async function TypewriteBeta() {
    for(let i = 0; i != text.length; i++) {
        containerElement.innerHTML = containerElement.innerHTML.slice(0, -1) 
        await sleep(50)
    }}

}

Typewriter(typewriterContainer, message[0])
await sleep(2500)
Typewriter(typewriterContainer, message[1])
await sleep(2500)
Typewriter(typewriterContainer, message[2])