console.log("بسم الله نبدأ");

//DOM ELEMENT
const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
    
// Initialize Functions when page loads
window.addEventListener('DOMContentLoaded', () => {

    animateStats();
    navbarToggle();
    darkMode();

});

// navbarToggle
function navbarToggle(){
    toggleBtn.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });
}

//darkMode
function darkMode(){
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
        });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    document.body.classList.toggle('dark-mode', e.matches);
    if (themeToggle) themeToggle.checked = e.matches;
    });
}

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







