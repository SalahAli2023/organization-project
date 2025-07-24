console.log("بسم الله نبدأ");

//DOM ELEMENT
const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
    
// Initialize Functions when page loads
window.addEventListener('DOMContentLoaded', () => {

    loading();
    animateStats();
    navbarToggle();
    darkMode();
    formValidation();
    moveToUp();

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

//Button Move Up
function moveToUp(){
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.classList.add('back-to-top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}






function loading(){
    window.addEventListener('load', () => {
        document.querySelector('.loader').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    });
}







