window.setupApproachAnimation = function() {
    
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.approach-card');
    const container = document.querySelector('#approach .container');

    if (cards.length > 0 && container) {

        gsap.set(cards, {
            opacity: 0,
            y: 100,
            x: (i, target) => {
                const containerWidth = container.offsetWidth;
                const cardWidth = target.offsetWidth;
                const finalX = target.offsetLeft + (cardWidth / 2);
                const containerCenter = containerWidth / 2;
                return containerCenter - finalX;
            },
            rotation: (i, target, all) => {
                const middleIndex = (all.length / 2) - 0.5;
                return (i - middleIndex) * 8;
            }
        });

        ScrollTrigger.create({
            trigger: container,
            start: "top 70%",
            onEnter: () => {
                gsap.to(cards, {
                    opacity: 1, 
                    x: 0,
                    y: 0,
                    rotation: 0,
                    duration: 1.0,
                    ease: "back.out(1.7)",
                    stagger: 0.15,
                });
            },
            once: true 
        });
    }
}   