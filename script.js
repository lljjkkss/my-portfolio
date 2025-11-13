window.enterSite = function() {
    const hero = document.getElementById('hero');
    const mainContent = document.getElementById('main-content');
    const navbar = document.querySelector('custom-navbar')?.shadowRoot.querySelector('nav');
    
    if (hero && mainContent) {
        hero.classList.add('hidden');
        mainContent.classList.remove('hidden');
        if (navbar) navbar.classList.add('visible');
        mainContent.style.paddingBottom = '106px';
        
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setTimeout(() => {

            if (typeof window.setupAboutAnimation === 'function') {
                window.setupAboutAnimation();
            }

            if (typeof window.setupSkillsAnimation === 'function') {
                window.setupSkillsAnimation();
            }

            if (typeof window.setupApproachAnimation === 'function') {
                window.setupApproachAnimation();
            }
            
            if (typeof window.setupContactAnimation === 'function') {
                window.setupContactAnimation();
            }

            initFooterVisibility();
            ScrollTrigger.refresh();
        },);
    }
};

function initFooterVisibility() {
    const customFooter = document.querySelector('custom-footer');
    if (!customFooter) return;

    window.addEventListener('scroll', () => {
        const scrollBottom = window.innerHeight + window.scrollY;
        const docHeight = document.body.offsetHeight;

        if (scrollBottom >= docHeight - 100) {
            customFooter.classList.add('visible');
        } else {
            customFooter.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    const wobbleElements = document.querySelectorAll('.wobble');
    wobbleElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(el, { rotation: "+=5", yoyo: true, repeat: 1, duration: 0.3, ease: "sine.inOut" });
        });
    });
    
    const paperTexture = document.createElement('div');
    paperTexture.className = 'fixed inset-0 pointer-events-none z-50 opacity-5';
    paperTexture.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/rice-paper-3.png")';
    paperTexture.style.animation = 'paperMove 20s linear infinite';
    document.body.appendChild(paperTexture);
    
    const style = document.createElement('style');
    style.textContent = `@keyframes paperMove { 0% { background-position: 0 0; } 100% { background-position: 100% 100%; } }`;
    document.head.appendChild(style);
});