document.addEventListener('DOMContentLoaded', function() {
    
    gsap.registerPlugin(ScrollTrigger);

    const hero = document.getElementById('hero');
    const pair1 = document.getElementById('hero-pair-1');
    const pair2 = document.getElementById('hero-pair-2');
    
    if (!hero || !pair1 || !pair2) return;

    const timeline = gsap.timeline();

    timeline
        .from(pair1, {
            opacity: 0,
            y: 30,
            duration: 1.0,
            ease: "power3.out"
        })
        .to(pair1, {
            opacity: 0.15,
            y: -150,
            scale: 0.85,
            rotation: -5,
            duration: 1.2,
            ease: "power2.inOut",
            delay: 1.0
        })
        .fromTo(pair2,
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0,
                duration: 1.2, 
                ease: "power3.out"
            }, 
            "-=0.8"
        );
});