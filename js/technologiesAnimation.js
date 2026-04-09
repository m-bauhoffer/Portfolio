gsap.registerPlugin(ScrollTrigger);

const articles = document.querySelectorAll("#section-technologies article");

articles.forEach(article => {
  const items = article.querySelectorAll(".img_container");

  gsap.from(items, {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: article,
      start: "top 80%",
      toggleActions: "play none none none" 
    }
  });
});