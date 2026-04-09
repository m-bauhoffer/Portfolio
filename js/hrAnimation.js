gsap.registerPlugin(ScrollTrigger);

const lines = document.querySelectorAll(".hr-span");

lines.forEach((el, i) => {
  const isEven = i % 2 === 0;

  gsap.fromTo(el, 
    {
      scaleX: 0,
      transformOrigin: isEven ? "left center" : "right center"
    },
    {
      scaleX: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );
});