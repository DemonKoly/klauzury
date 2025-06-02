<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<script>
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#box", {
    scrollTrigger: {
      trigger: "#pinned-section",
      start: "top top",
      end: "+=1000", // ← long scroll distance (freezes scroll)
      scrub: true,
      pin: true,
      markers: true // shows where scroll trigger starts/ends
    },
    x: 500,
    rotation: 360,
    ease: "none"
  });
</script>
