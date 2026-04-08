document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    
    // Toggle Sidebar
    if(menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            menuBtn.innerHTML = sideMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close Menu on Link Click
        document.querySelectorAll('.side-menu a').forEach(link => {
            link.addEventListener('click', () => {
                sideMenu.classList.remove('active');
                menuBtn.innerHTML = '☰';
            });
        });
    }

    // Reveal on Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .glass-card, .price-card').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        observer.observe(el);
    });
});
