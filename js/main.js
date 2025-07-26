console.log("بسم الله نبدأ");

//DOM ELEMENT
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

const newsletterForm = document.querySelector('.newsletter-form');

const contactForm=document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


// ErrorMsg elements
const errorMessage = document.querySelectorAll('.error-message');
const nameError= document.getElementById('nameError');
const emailError=document.getElementById('emailError');
const subjectError= document.getElementById('subjectError');
const messageError =document.getElementById('messageError');


// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[a-zA-Z\s]{3,60}$/;
const subjectRegex = /^[a-zA-Z\s]{5,350}$/;

    
// Initialize Functions when page loads
window.addEventListener('DOMContentLoaded', () => {

    loading();
    animateStats();
    navbarToggle();
    darkMode();
    formValidation();
    moveToUp();
    subscribeByNewsletterForm();

});

    formValidation();

// nav bar Toggle
function navbarToggle(){
    if(toggleBtn && navLinks){
        toggleBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

//dark Mode
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
    
    contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Reset errors
            errorMessage.forEach(el => {
            el.style.display = 'none';
        });

        // Validate Name
        if (!nameRegex.test(nameInput.value.trim()))
            {
                nameError.innerText = 'Please enter a valid name (letters only)';
                nameError.style.display = 'block';
                isValid = false;
            }
        else if(!nameInput.value.trim()) 
            {
                nameError.textContent = 'name must be more than 3 letters';
                nameError.style.display = 'block';
                isValid = false;
            }

        // Validate Email
        if (!emailRegex.test(email.value.trim())) {
            emailError.textContent = 'invalid email';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Validate Subject
        if (!subjectRegex.test(subject.value.trim())) {
            subjectError.textContent = 'subject is so short, please enter more then 5 letter';
            subjectError.style.display = 'block';
            isValid = false;
        }

        // Validate Message
        if (!message || message.length < 10) {
            messageError.textContent = ' the message is must be more than 10 letters';
            messageError.style.display = 'block';
            isValid = false;
        }

        // If valid, submit form
        if (isValid) {
            alert('your message is sent successfully');
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
    
}

   

    
    // Newsletter Form

function subscribeByNewsletterForm(){
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            
            if (email && email.includes('@')) {
                alert('Thank you for subscribing!');
                this.querySelector('input').value = '';
            } else {
                alert('Please enter a valid email address');
            }

             // when writing
    email.addEventListener('input', function() {
        if (this.value.length > 0) {
            if (!emailRegex.test(this.value).trim()) {
                emailError.textContent = 'invalid email';
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        }
    });
        });
    }

}

//Active projects cards 
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
            window.location.href = 'project-details.html'; // 
        }
    });
});






