gsap.registerPlugin(ScrollTrigger);

const iPhone = gsap.timeline({
    scrollTrigger: {
        trigger: ".img-wrapper",
        start: "top top",
        end: "center top",
        scrub: 3,
        pin: true,
    }
});

iPhone.to('.screenshot', {
    yPercent: -63,
    duration: 1
});