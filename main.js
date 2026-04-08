document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const sideMenu = document.querySelector('.side-menu');
    
    // Toggle Sidebar
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

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "0.8s ease-out";
        observer.observe(el);
    });
});
