gsap.registerPlugin(ScrollTrigger);

const titlesEven = document.querySelectorAll(".t-even");
const titlesOdd = document.querySelectorAll(".t-odd");

// timeline controlado por UN solo scroll
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

titlesEven.forEach(el => {
  tl.fromTo(el, 
    { x: "25%" }, 
    { x: "-50%" }, 
    0 
  );
});

titlesOdd.forEach(el => {
  tl.fromTo(el, 
    { x: "-50%" }, 
    { x: "25%" }, 
    0
  );
});