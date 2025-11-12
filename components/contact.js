window.setupContactAnimation = function() {
    gsap.registerPlugin(ScrollTrigger);

    const section = document.querySelector('#contact');
    if (!section) return;

    const title = section.querySelector('h2');
    const formGroups = section.querySelectorAll('.form-group');
    const button = section.querySelector('#send-message-btn');

    gsap.from(title, {
        opacity: 0, y: 50, duration: 0.8, ease: "back.out(1.7)",
        scrollTrigger: { trigger: title, start: "top 80%", once: true }
    });
    
    gsap.from(formGroups, {
        opacity: 0, x: -50, duration: 0.8, ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: { trigger: formGroups, start: "top 80%", once: true }
    });

    gsap.from(button, {
        opacity: 0, y: 50, scale: 0.8, duration: 0.8, ease: "elastic.out(1, 0.5)",
        delay: 0.6,
        scrollTrigger: { trigger: formGroups, start: "top 80%", once: true }
    });
};