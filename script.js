const overlay=document.querySelector(".overlay")

// overlay.addEventListener("click", () => {
    TweenMax.to(".overlay .h1", 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    })
    
    TweenMax.to(".overlay span", 2, {
        delay: .3,
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    })
    
    TweenMax.to(".overlay", 2, {
        delay: 1,
        top: "-100%",
        ease: Expo.easeInOut
    })
    TweenMax.from(".weather", 2, {
        delay: 1.5,
        opacity:0,
        x: -60,
        ease: Expo.easeInOut
    })
    TweenMax.from(".exchange", 3, {
        delay: 1.5,
        opacity:0,
        x: -60,
        ease: Expo.easeInOut
    })
    TweenMax.from(".stringfly", 4, {
        delay: 1.5,
        opacity:0,
        x: -60,
        ease: Expo.easeInOut
    })
    TweenMax.from(".todo", 5, {
        delay: 1.5,
        opacity:0,
        x: -60,
        ease: Expo.easeInOut
    })
    
    TweenMax.from(".logo", 1, {
        delay: 2,
        opacity: 0,
        y: -100,
        ease: Expo.easeInOut
    })
    
    TweenMax.from(".contact", 2, {
        delay: 2,
        opacity: 0,
        y: 100,
        ease: Expo.easeInOut
    })
    
    TweenMax.from(".text", 2, {
        delay: 2,
        opacity: 0,
        y: 100,
        ease: Expo.easeInOut
    })

    TweenMax.from(".baloon-one", 1, {
        delay: 3.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".baloon-two", 2, {
        delay: 4,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".baloon-three", 2, {
        delay: 4.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".baloon-four", 2, {
        delay: 5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".info-one", 1, {
        delay: 3.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".info-two", 2, {
        delay: 4,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".info-three", 2, {
        delay: 4.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".info-four", 2, {
        delay: 5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box7", 2, {
        delay: 2.4,
        opacity: 0,
        ease: Expo.linear
    })

    TweenMax.from(".box8", 2, {
        delay: 2.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box9", 2, {
        delay: 2.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box5", 2, {
        delay: 2.5,
        opacity: 0,
        ease: Expo.easeInOut
    })
// })

const baloonOne = document.querySelector(".baloon-one");
const baloonTwo = document.querySelector(".baloon-two");
const baloonThree = document.querySelector(".baloon-three");
const baloonFour = document.querySelector(".baloon-four");
const infoOne = document.querySelector(".info-one");
const infoTwo = document.querySelector(".info-two");
const infoThree = document.querySelector(".info-three");
const infoFour = document.querySelector(".info-four");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");
const text4 = document.querySelector(".text4");
const logo = document.querySelector(".logo");
const hi = document.querySelector(".hi");
const who = document.querySelector(".who");
const note = document.querySelector(".note");
const boxColor = document.querySelector(".boxcolor");



infoOne.addEventListener("mouseenter", e=>{
    
        baloonOne.style.animation = "spin 3s linear 0s infinite"
        baloonOne.style.borderColor = "#02cf54"
        infoOne.style.background = "#ffffff"
        text1.style.display= "block"
        logo.style.fontFamily= "Nunito"
        logo.style.paddingTop= "5vw"
        hi.textContent = "Weather app"
        hi.style.fontSize = "6vh"
        who.textContent = "User techniques"
        who.style.fontSize = "4vh"
        note.innerText = "Local Storage\nAsync JS\nFetch API\nResposive Design\nSass"
        note.style.fontSize = "3vh"
        logo.style.backgroundColor ="#02cf54"

})

infoOne.addEventListener("mouseleave", e=>{
    baloonOne.style.animation = "None"
    baloonOne.style.borderColor = "#989898"
    infoOne.style.background= "url(./img/weather.png)"
    infoOne.style.backgroundPosition = "center"
    infoOne.style.backgroundSize = "55%"
    infoOne.style.backgroundRepeat = "no-repeat"
    text1.style.display= "none"
})


infoTwo.addEventListener("mouseenter", e=>{
    
        baloonTwo.style.animation = "spin 3s linear 0s infinite"
        baloonTwo.style.borderColor = "#02cf54"
        infoTwo.style.background = "#ffffff"
        text2.style.display= "block"
        logo.style.fontFamily= "Nunito"
        logo.style.paddingTop= "5vw"
        hi.textContent = "Exchange app"
        hi.style.fontSize = "6vh"
        who.textContent = "User techniques"
        who.style.fontSize = "4vh"
        note.innerText = "Async JS\nFetch API\nJSON Data"
        note.style.fontSize = "3vh"
        logo.style.backgroundColor ="#02cf54"

})

infoTwo.addEventListener("mouseleave", e=>{
    baloonTwo.style.animation = "None"
    baloonTwo.style.borderColor = "#989898"
    infoTwo.style.background= "url(./img/exchange.png)"
    infoTwo.style.backgroundPosition = "center"
    infoTwo.style.backgroundSize = "55%"
    infoTwo.style.backgroundRepeat = "no-repeat"
    text2.style.display= "none"
})


infoThree.addEventListener("mouseenter", e=>{
    
        baloonThree.style.animation = "spin 3s linear 0s infinite"
        baloonThree.style.borderColor = "#02cf54"
        infoThree.style.background = "#ffffff"
        text3.style.display= "block"
        logo.style.fontFamily= "Nunito"
        logo.style.paddingTop= "5vw"
        hi.textContent = "Chat app"
        hi.style.fontSize = "6vh"
        who.textContent = "User techniques"
        who.style.fontSize = "4vh"
        note.innerText = "Object Oriented Programming\nReal-time Database\nLocal Storage\nDOM Manipulation\nResponsive Design"
        note.style.fontSize = "3vh"
        logo.style.backgroundColor ="#02cf54"

})

infoThree.addEventListener("mouseleave", e=>{
    baloonThree.style.animation = "None"
    baloonThree.style.borderColor = "#989898"
    infoThree.style.background= "url(./img/stringifly.png)"
    infoThree.style.backgroundPosition = "center"
    infoThree.style.backgroundSize = "55%"
    infoThree.style.backgroundRepeat = "no-repeat"
    text3.style.display= "none"
})


infoFour.addEventListener("mouseenter", e=>{
    
        baloonFour.style.animation = "spin 3s linear 0s infinite"
        baloonFour.style.borderColor = "#02cf54"
        infoFour.style.background = "#ffffff"
        text4.style.display= "block"
        logo.style.fontFamily= "Nunito"
        logo.style.paddingTop= "5vw"
        hi.textContent = "Todo app"
        hi.style.fontSize = "6vh"
        who.textContent = "User techniques"
        who.style.fontSize = "4vh"
        note.innerText = "DOM Manipulation\nLocal Storage\nVanilla JavaScript"
        note.style.fontSize = "3vh"
        logo.style.backgroundColor ="#02cf54"

})

infoFour.addEventListener("mouseleave", e=>{
    baloonFour.style.animation = "None"
    baloonFour.style.borderColor = "#989898"
    infoFour.style.background= "url(./img/todo.png)"
    infoFour.style.backgroundPosition = "center"
    infoFour.style.backgroundSize = "55%"
    infoFour.style.backgroundRepeat = "no-repeat"
    text4.style.display= "none"
})