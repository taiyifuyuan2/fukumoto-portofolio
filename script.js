// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initStarfield();
    initTypewriter();
    initScrollReveal();
    initSmoothScroll();
    loadProjects();
    loadSkills();
    updateYear();
});

// Starfield Animation
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const stars = [];
    const numStars = 100;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random()
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;
            
            // Wrap around screen
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Typewriter Effect
function initTypewriter() {
    const element = document.getElementById('typewriter');
    const text = element.getAttribute('data-text');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Scroll Reveal Animation
function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Load Projects Data
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();
        
        const learningProjects = projects.filter(project => project.category === '学習');
        const originalProjects = projects.filter(project => project.category === 'オリジナル');
        
        renderProjects(learningProjects, 'learning-projects');
        renderProjects(originalProjects, 'original-projects');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Render Projects
function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

// Create Project Card Element
function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = project.featured ? 'card featured' : 'card';
    card.setAttribute('data-reveal', '');
    
    const technologies = project.technologies.split(',').map(tech => tech.trim());
    const primaryTech = technologies[0];
    
    card.innerHTML = `
        <div class="thumb" style="background-image:url('${project.image_url}')"></div>
        <div class="content">
            <span class="tag ${project.featured ? 'featured-tag' : ''}">${project.category} / ${primaryTech}</span>
            <div class="title">${project.title}</div>
            <p class="meta">${project.description}</p>
            <div class="actions">
                ${project.github_url ? `<a class="btn" href="${project.github_url}" target="_blank" rel="noopener">GitHub</a>` : ''}
                ${project.live_url ? `<a class="btn ${project.featured ? 'primary' : ''}" href="${project.live_url}" target="_blank" rel="noopener">Live</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Load Skills Data
async function loadSkills() {
    try {
        const response = await fetch('data/skills.json');
        const skills = await response.json();
        
        renderSkills(skills);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Render Skills
function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    
    skills.forEach(skill => {
        const skillElement = createSkillElement(skill);
        container.appendChild(skillElement);
    });
}

// Create Skill Element
function createSkillElement(skill) {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    
    const stars = '★'.repeat(skill.proficiency) + '☆'.repeat(5 - skill.proficiency);
    
    skillDiv.innerHTML = `
        <strong>${skill.icon} ${skill.name}</strong>
        <div>${skill.description}</div>
        <div class="proficiency mt-2 text-yellow-500">
            ${stars}
        </div>
    `;
    
    return skillDiv;
}

// Update Copyright Year
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Add CSS class for yellow text
const style = document.createElement('style');
style.textContent = `
    .text-yellow-500 {
        color: #f59e0b;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(style);
