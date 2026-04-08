document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after revealing
                // revealOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal class and observe
    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    // 2. CSS Inject for Active State (to keep CSS file clean)
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal.active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 3. Simple Dynamic Greeting based on time
    const heroTitle = document.querySelector('.title-gradient');
    if(heroTitle && window.location.pathname.includes('index')) {
        const hour = new Date().getHours();
        console.log("Wizmn Hub Console: System running.");
    }
});
