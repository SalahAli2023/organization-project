console.log("بسم الله نبدأ");

//DOM ELEMENT
const toggleBtn = document.querySelector(".menu-toggle");
// const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
    
// Initialize Functions when page loads
window.addEventListener('DOMContentLoaded', () => {

    loading();
    animateStats();
    navbarToggle();
    darkMode();
   // formValidation();
    moveToUp();

});




// navbarToggle
function navbarToggle(){
    if(toggleBtn && navLinks){
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
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

// For loading
function loading(){
    window.addEventListener('load', () => {
        document.querySelector('.loader').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    });
}

function formValidation(){
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });

        // Validate Name
        const name = document.getElementById('name').value;
        if (!name || name.length < 3) {
            document.getElementById('nameError').textContent = 'name must be more than 3 letters';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'invalid email';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        // Validate Subject
        const subject = document.getElementById('subject').value;
        if (!subject || subject.length < 5) {
            document.getElementById('subjectError').textContent = 'subject is so short';
            document.getElementById('subjectError').style.display = 'block';
            isValid = false;
        }

        // Validate Message
        const message = document.getElementById('message').value;
        if (!message || message.length < 10) {
            document.getElementById('messageError').textContent = ' the message is must be more than 10 letters';
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        // If valid, submit form
        if (isValid) {
            // Simulate form submission
            const submitBtn = document.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('your message is sent successfully');
                this.reset();
                submitBtn.textContent = 'Send';
                submitBtn.disabled = false;
            }, 1500);
        }
    });

    //when writing
    document.getElementById('email').addEventListener('input', function() {
        if (this.value.length > 0) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.value)) {
                document.getElementById('emailError').textContent = 'invalid email';
                document.getElementById('emailError').style.display = 'block';
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
        }
    });
}

//Active projects cards 
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
            window.location.href = 'project-details.html'; // 
        }
    });
});






