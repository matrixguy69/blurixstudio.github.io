document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    const sideLinks = document.querySelectorAll('.side-menu a');

    // Toggle Mobile Menu
    if (menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            menuBtn.innerHTML = sideMenu.classList.contains('active') ? '✕' : '☰';
            // Stop body scroll when menu is open
            document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when a link is clicked
        sideLinks.forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('active');
                menuBtn.innerHTML = '☰';
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Scroll Reveal Animation
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .price-card, .reveal').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "1s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    });
});
