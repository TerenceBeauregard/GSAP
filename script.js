// gsap.fromTo(".circle", {
//     y: -200,
    
// }, {
//     y: 200,
//     backgroundColor: "red",
//     duration: 5
// })

// gsap.to(".circle", {y: 200, duration: 5})

// gsap.to(".circle", {
//     y: 200,
//     duration : 1,
//     onUpdate : () => {
//         document.querySelector(".circle img").setAttribute("src", "./img/bob")
//     },
//     stagger : {
//         each : 0.1,
//         repeat : -1,
//         yoyo : true,
//         from : "center"
//     } 

// })

const timeline = gsap.timeline()

timeline.to(".circle", {x: 100})
timeline.to(".circle", {y: -250})
timeline.to(".circle", {x: 250})