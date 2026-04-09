const marquee = document.querySelector(".marquee__inner");
const container = document.querySelector(".contact__marquee");

const totalWidth = marquee.scrollWidth / 2; 
const tween = gsap.to(marquee, {
  x: -totalWidth,
  duration: 30,
  ease: "none",
  repeat: -1,
  paused: true
});

ScrollTrigger.create({
  trigger: container,
  start: "top bottom",
  end: "bottom top",

  onEnter: () => tween.resume(),
  onLeave: () => tween.pause(),
  onEnterBack: () => tween.resume(),
  onLeaveBack: () => tween.pause()
});

container.addEventListener("mouseenter", () => {
  tween.pause();
});

container.addEventListener("mouseleave", () => {
  tween.resume();
});