window.addEventListener("scroll", function () {
  const progressBar = document.getElementById("overflow");
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / documentHeight) * 98;
  progressBar.style.height = scrollPercent + "%";
});

window.addEventListener("scroll", function () {
  const tb1 = document.getElementById("textbox1");
  const tb2 = document.getElementById("textbox2");
  const tb3 = document.getElementById("textbox3");
  const heroimg = document.getElementById("heroimg");

  if (window.scrollY > 800) {
    tb1.classList.add("textscrolled");
    heroimg.classList.add("heroimgscrolled");
  } else {
    tb1.classList.remove("textscrolled");
    heroimg.classList.remove("heroimgscrolled");
  }

  if (window.scrollY > 1100) {
    tb2.classList.add("textscrolled");
  } else {
    tb2.classList.remove("textscrolled");
  }

  if (window.scrollY > 1400) {
    tb3.classList.add("textscrolled");
  } else {
    tb3.classList.remove("textscrolled");
  }
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "#aboutme",
  start: "top top",
  end: "+=1000",
  pin: true,
  pinSpacing: true,
  clearProps: "all",
overwrite: "auto",


});

const panels = document.querySelectorAll(".panel");
const totalPanels = panels.length;
const scrollLength = window.innerWidth * (totalPanels - 1);

gsap.to("#h-wrapper", {
  x: () => `-${scrollLength}`,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-container",
    start: "top top",
    end: () => `+=${scrollLength}`,
    scrub: true,
    pin: true,
    invalidateOnRefrest:true,
  },
});
