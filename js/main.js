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
    loadProjects();
});




toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

// document.getElementById("hamburger").addEventListener("click", function () {
//     document.getElementById("nav-links").classList.toggle("show");
// });

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

// Load Projects Dynamically
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    // Example Projects Data
    const projects = [
        {title: "Food for every one project", location: "Yemen"},
        {title: "Clear Water", location: "Somalia"}
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.location}</p>
            <button>More..</button>
        `;
        projectsGrid.appendChild(projectCard);
    });
}






