window.setupAboutAnimation = function() {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('#about');
    if (!section) return;

    const elements = section.querySelectorAll('h2, p, img, .image-container');
    const animProps = { 
        opacity: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)", 
        stagger: 0.1,
        scale: 0.8,
        rotation: -5,
        y: 100
    };

    ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        onEnter: () => {
            gsap.from(elements, animProps);
        },
        once: true
    });
};