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
    // Select all animated cards
    const cards = document.querySelectorAll('.animate');

    // Function to check visibility
    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Trigger khi card vào 80% chiều cao màn hình

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