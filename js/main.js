console.log("بسم الله نبدأ");

// Initialize Functions when page loads
window.addEventListener('DOMContentLoaded', () => {
    
    //DOM ELEMENT
    const toggleBtn = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    toggleBtn.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });
    
    animateStats();
});

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

// Animate Stats Counter
function animateStats() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            counter.innerText = target + '+';
        }
    });
}







