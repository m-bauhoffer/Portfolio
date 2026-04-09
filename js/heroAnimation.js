gsap.registerPlugin(ScrollTrigger);

gsap.from(".title__top__container, .title__bottom, .about", {
    y: "100%",
    opacity: 0,
    stagger: .2,
    delay: .5
})

gsap.from(".hero__header", {
    y: "-200%",
    opacity: 0
})


gsap.to(".title__top__left", {
scrollTrigger:{
    trigger: ".hero",
    start: "top top",
    end: "80% top",
    scrub: true,
    // markers: true
},
x: "-100%"
})
gsap.to(".title__top__right", {
scrollTrigger:{
    trigger: ".hero",
    start: "top top",
    end: "80% top",
    scrub: true,
    // markers: true
},
x: "100%"
})
gsap.to(".title__dash", {
scrollTrigger:{
    trigger: ".hero",
    start: "top top",
    end: "80% top",
    scrub: true,
    // markers: true
},
scaleX: 7
})