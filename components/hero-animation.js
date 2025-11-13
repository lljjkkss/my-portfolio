function wrapTextInSpans(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
        const childNodes = Array.from(elem.childNodes);
        let newContent = '';

        childNodes.forEach(node => {
            if (node.nodeType === 3) {
                newContent += node.textContent.split('').map(char =>
                    char.trim() === '' ? ' ' : `<span><i>${char}</i></span>`
                ).join('');
            } else if (node.nodeType === 1) {
                const innerText = node.textContent;
                const nodeClasses = node.getAttribute('class') || ''; 
                
                const wrappedInner = innerText.split('').map(char =>
                    char.trim() === '' ? ' ' : `<span class="${nodeClasses}"><i>${char}</i></span>`
                ).join('');
                
                newContent += wrappedInner; 
            } else {
                newContent += node.outerHTML || node.textContent;
            }
        });
        elem.innerHTML = newContent;
    });
}


document.addEventListener('DOMContentLoaded', function() {
    
    wrapTextInSpans('.swift-up-text');
    
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
            duration: 1,
            ease: "power3.out"
        })
        .to("#hero-h1 i", {
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.04
        }, "-=0.5") 
        
        .to(pair1, {
            opacity: 0.095,
            scale: 0.85,
            rotation: -8, 
            duration: 1.0,
            ease: "power2.inOut",
            delay: 0.3
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
        )
        .to("#hero-h2 i", {
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.05
        }, "-=1.2");
});