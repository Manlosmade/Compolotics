const typewriterContainer = document.getElementById("app")
const message = ["This is a computing blog?", "This is a politics blog?", "No, This is a compolotics blog."]
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
Typewriter(typewriterContainer, message[0], 3200, 124, 51)
await sleep(5000)
Typewriter(typewriterContainer, message[1], 3200, 104, 42)
await sleep(5000)
Typewriter(typewriterContainer, message[2], 3200, 94, 59)
await sleep(5000)
}