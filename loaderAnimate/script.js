gsap.to(".dot", {
    y: -50,
    stagger : {
        each: .1,
        repeat: -1,
        yoyo: true
    }
})

gsap.to(".shadow", {
    y: 50,
    stagger : {
        each: .1,
        repeat: -1,
        yoyo: true
    },
    opacity: .1
})

const loader = document.querySelector(".loader")
window.addEventListener("load", () => {
    loader.style.display = "none"
})