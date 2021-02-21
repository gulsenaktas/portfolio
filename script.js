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

    TweenMax.from(".box2", 1, {
        delay: 3.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box6", 2, {
        delay: 4,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box7", 2, {
        delay: 3,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box8", 2, {
        delay: 3,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box9", 2, {
        delay: 3.5,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box5", 2, {
        delay: 3,
        opacity: 0,
        ease: Expo.easeInOut
    })

    TweenMax.from(".box7", 2, {
        delay: 2,
        opacity: 0,
        ease: Expo.linear
    })

    

    
// })



// TweenMax.from(".", 1, {
//     delay: 2,
//     opacity: 0,
//     ease: Expo.easeInOut
//   })

const boxs= document.querySelectorAll(".box")
const rightContain= document.querySelector(".right-contain")


boxs.forEach(box=>{
    box.addEventListener("mouseenter", () => {
        rightContain.classList.add("helper")
    })    
})
// boxs.forEach(box=>{
//     box.addEventListener("mouseleave", () => {
//         rightContain.classList.remove("helper")
//     })    
// })