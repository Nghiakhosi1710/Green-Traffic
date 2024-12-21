const offset = 64;

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Optional: add smooth scrolling
                });
            }
        });
    });
    const ctaBtn = document.querySelector('.cta-btn');
    const videoPopup = document.getElementById('videoPopup');
    const closePopup = document.getElementById('closePopup');

    ctaBtn.addEventListener('click', function (event) {
        event.preventDefault();
        videoPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', function () {
        videoPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
        }
    });
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });
    const menuItems = menu.querySelectorAll('li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
    const cards = document.querySelectorAll('.animate');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    }

    // Listen for scroll event
    window.addEventListener('scroll', checkVisibility);

    // Initial check
    checkVisibility();
    
});