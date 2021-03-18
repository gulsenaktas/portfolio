const baloonOne = document.querySelector(".baloon-one");
const baloonTwo = document.querySelector(".baloon-two");
const baloonThree = document.querySelector(".baloon-three");
const baloonFour = document.querySelector(".baloon-four");
const infoOne = document.querySelector(".info-one");
const infoTwo = document.querySelector(".info-two");
const infoThree = document.querySelector(".info-three");
const infoFour = document.querySelector(".info-four");
const textOne = document.querySelector(".text-one");
const textTwo = document.querySelector(".text-two");
const textThree = document.querySelector(".text-three");
const textFour = document.querySelector(".text-four");
const logo = document.querySelector(".logo");
const hi = document.querySelector(".hi");
const who = document.querySelector(".who");
const note = document.querySelector(".note");
const boxColor = document.querySelector(".boxcolor");
const logoTitle= document.querySelector(".logo-title");


infoOne.addEventListener("mouseenter", e=>{

    baloonOne.style.animation = "spin 3s linear 0s infinite"
    baloonOne.style.borderColor = "#1ad3d3"
    infoOne.style.background = "#ffffff"
    textOne.style.display= "block"

    logo.style.fontFamily= "Nunito"
    logo.style.paddingTop= "15px"
    logoTitle.style.paddingTop= "0px"
    hi.textContent = "Weather app"
    hi.style.fontSize = "30px"
    who.textContent = "Used Techniques"
    who.style.fontSize = "20px"
    note.innerText = "Local Storage\nAsync JS\nFetch API\nResposive Design\nSass"
    note.style.fontSize = "15px"

    gsap.from(".content",{
        duration: 1,
        opacity:0,
        y: -100,
        ease: Expo.easeInOut,
    })

})

infoOne.addEventListener("mouseleave", e=>{
    baloonOne.style.animation = "None"
    baloonOne.style.borderColor = "#989898"
    infoOne.style.background= "url(./img/weather.png)"
    infoOne.style.backgroundPosition = "center"
    infoOne.style.backgroundSize = "55%"
    infoOne.style.backgroundRepeat = "no-repeat"
    textOne.style.display= "none"
})


infoTwo.addEventListener("mouseenter", e=>{

    baloonTwo.style.animation = "spin 3s linear 0s infinite"
    baloonTwo.style.borderColor = "#1ad3d3"
    infoTwo.style.background = "#ffffff"
    textTwo.style.display= "block"

    logo.style.fontFamily= "Nunito"
    logo.style.paddingTop= "15px"
    logoTitle.style.paddingTop= "0px"
    hi.textContent = "Exchange app"
    hi.style.fontSize = "30px"
    who.textContent = "Used Techniques"
    who.style.fontSize = "20px"
    note.innerText = "Async JS\nFetch API\nJSON Data"
    note.style.fontSize = "15px"

    gsap.from(".content",{
        duration:1,
        y: -100,
        opacity:0,
        ease: Expo.easeInOut,
    })

})

infoTwo.addEventListener("mouseleave", e=>{
    baloonTwo.style.animation = "None"
    baloonTwo.style.borderColor = "#989898"
    infoTwo.style.background= "url(./img/exchange.png)"
    infoTwo.style.backgroundPosition = "center"
    infoTwo.style.backgroundSize = "55%"
    infoTwo.style.backgroundRepeat = "no-repeat"
    textTwo.style.display= "none"
})


infoThree.addEventListener("mouseenter", e=>{
    
    baloonThree.style.animation = "spin 3s linear 0s infinite"
    baloonThree.style.borderColor = "#1ad3d3"
    infoThree.style.background = "#ffffff"
    textThree.style.display= "block"

    logo.style.fontFamily= "Nunito"
    logo.style.paddingTop= "15px"
    logoTitle.style.paddingTop= "0px"
    hi.textContent = "Chat app"
    hi.style.fontSize = "30px"
    who.textContent = "Used Techniques"
    who.style.fontSize = "20px"
    note.innerText = "Object Oriented Programming\nReal-time Database\nLocal Storage\nDOM Manipulation\nResponsive Design"
    note.style.fontSize = "15px"

    gsap.from(".content",{
        duration:1,
        y: -100,
        opacity:0,
        ease: Expo.easeInOut,
    })

})

infoThree.addEventListener("mouseleave", e=>{
    baloonThree.style.animation = "None"
    baloonThree.style.borderColor = "#989898"
    infoThree.style.background= "url(./img/stringifly.png)"
    infoThree.style.backgroundPosition = "center"
    infoThree.style.backgroundSize = "55%"
    infoThree.style.backgroundRepeat = "no-repeat"
    textThree.style.display= "none"
})


infoFour.addEventListener("mouseenter", e=>{
    
    baloonFour.style.animation = "spin 3s linear 0s infinite"
    baloonFour.style.borderColor = "#1ad3d3"
    infoFour.style.background = "#ffffff"
    textFour.style.display= "block"

    logo.style.fontFamily= "Nunito"
    logo.style.paddingTop= "15px"
    logoTitle.style.paddingTop= "0px"
    hi.textContent = "Todo app"
    hi.style.fontSize = "30px"
    who.textContent = "Used Techniques"
    who.style.fontSize = "20px"
    note.innerText = "DOM Manipulation\nLocal Storage\nVanilla JavaScript"
    note.style.fontSize = "15px"

    gsap.from(".content",{
        duration:1,
        y: -100,
        opacity:0,
        ease: Expo.easeInOut,
    })
    
})

infoFour.addEventListener("mouseleave", e=>{
    baloonFour.style.animation = "None"
    baloonFour.style.borderColor = "#989898"
    infoFour.style.background= "url(./img/todo.png)"
    infoFour.style.backgroundPosition = "center"
    infoFour.style.backgroundSize = "55%"
    infoFour.style.backgroundRepeat = "no-repeat"
    textFour.style.display= "none"
})

function completed(info){
    info.style.pointerEvents = "auto"
}

// ANIMATIONS

// ---- OVERLAY ---- //
gsap.to(".overlay .h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

gsap.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

gsap.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
})

gsap.from(".logo", 1, {
    delay: 2,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})


gsap.from(".contact", 2, {
    delay: 2,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

gsap.from(".text", 2, {
    delay: 2,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})


// ---- BALOONS ---- //
gsap.from(".baloon-one, .info-one", 1, {
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete:completed,
    onCompleteParams:[infoOne]
})

gsap.from(".baloon-two, .info-two", 2, {
    delay: 4,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete:completed,
    onCompleteParams:[infoTwo]

})

gsap.from(".baloon-three, .info-three", 2, {
    delay: 4.5,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete:completed,
    onCompleteParams:[infoThree]
})

gsap.from(".baloon-four, .info-four", 2, {
    delay: 5,
    opacity: 0,
    ease: Expo.easeInOut,
    onComplete:completed,
    onCompleteParams:[infoFour]
})

// ---- ROADS ---- //
gsap.from(".box7", 2, {
    delay: 2.4,
    opacity: 0,
    ease: Expo.linear
})

gsap.from(".box8", 2, {
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".box9", 2, {
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInOut
})

gsap.from(".box5", 2, {
    delay: 2.5,
    opacity: 0,
    ease: Expo.easeInOut
})