window.setupSkillsAnimation = function() {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('#skills');
    if (!section) return;

    const title = section.querySelector('h2');
    const skillItems = section.querySelectorAll('.skill-item');

    gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: title,
            start: "top 80%",
            once: true
        }
    });

    skillItems.forEach(item => {
        gsap.from(item, {
            opacity: 0,
            scale: 0.7,
            x: () => gsap.utils.random(-200, 200), 
            y: () => gsap.utils.random(-150, 150), 
            rotation: () => gsap.utils.random(-30, 30), 
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                once: true
            }
        });
    });
};