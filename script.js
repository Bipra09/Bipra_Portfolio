// ===== CUSTOM CURSOR ===== 
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor animation
    function animateCursor() {
        // Main cursor - follows mouse directly
        cursorX += (mouseX - cursorX) * 0.3;
        cursorY += (mouseY - cursorY) * 0.3;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        // Follower cursor - follows with delay
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
});

// ===== ENHANCED THEME TOGGLE ===== 
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let isDarkTheme = true;

// Create dynamic theme styles
function createThemeStyles() {
    const existingStyles = document.getElementById('theme-styles');
    if (existingStyles) {
        existingStyles.remove();
    }

    const themeStyles = document.createElement('style');
    themeStyles.id = 'theme-styles';
    themeStyles.textContent = `
        /* ===== LIGHT THEME STYLES ===== */
        body.light-theme {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #2c3e50;
            transition: all 0.5s ease;
        }

        body.light-theme .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        body.light-theme .nav-logo a {
            color: #2c3e50;
        }

        body.light-theme .nav-logo span {
            color: #667eea;
        }

        body.light-theme .nav-link {
            color: #34495e;
        }

        body.light-theme .nav-link:hover,
        body.light-theme .nav-link.active {
            color: #667eea;
        }

        body.light-theme .nav-link::after {
            background: #667eea;
        }

        body.light-theme .hamburger span {
            background: #2c3e50;
        }

        /* Hero Section Light Theme */
        body.light-theme .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
        }

        body.light-theme .hero-title {
            color: #fff;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        body.light-theme .name {
            background: linear-gradient(135deg, #fff, #f093fb);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        body.light-theme .hero-subtitle {
            color: rgba(255, 255, 255, 0.9);
        }

        body.light-theme .hero-description {
            color: rgba(255, 255, 255, 0.8);
        }

        body.light-theme .btn-secondary {
            border: 2px solid rgba(255, 255, 255, 0.8);
            color: #fff;
        }

        body.light-theme .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
        }

        /* About Section Light Theme */
        body.light-theme .about {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }

        body.light-theme .section-title {
            color: #2c3e50;
        }

        body.light-theme .section-subtitle {
            color: #5d6d7e;
        }

        body.light-theme .about-text p {
            color: #34495e;
        }

        body.light-theme .about-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        body.light-theme .card-header h3 {
            color: #2c3e50;
        }

        body.light-theme .fact {
            color: #34495e;
        }

        body.light-theme .fact i {
            color: #667eea;
        }

        body.light-theme .stat {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.9);
        }

        body.light-theme .stat h3 {
            color: #667eea;
        }

        body.light-theme .stat p {
            color: #5d6d7e;
        }

        /* Projects Section Light Theme */
        body.light-theme .projects {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        body.light-theme .project-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        body.light-theme .project-card:hover {
            box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
        }

        body.light-theme .project-category {
            color: #667eea;
        }

        body.light-theme .project-title {
            color: #2c3e50;
        }

        body.light-theme .project-description {
            color: #34495e;
        }

        body.light-theme .category-btn {
            border: 2px solid rgba(102, 126, 234, 0.3);
            background: rgba(255, 255, 255, 0.7);
            color: #34495e;
        }

        body.light-theme .category-btn.active,
        body.light-theme .category-btn:hover {
            background: #667eea;
            border-color: #667eea;
            color: #fff;
        }

        /* Skills Section Light Theme */
        body.light-theme .skills {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }

        body.light-theme .skills-category h3 {
            color: #2c3e50;
        }

        body.light-theme .skills-category h3::after {
            background: linear-gradient(135deg, #667eea, #764ba2);
        }

        body.light-theme .skill-name {
            color: #34495e;
        }

        body.light-theme .skill-bar {
            background: rgba(255, 255, 255, 0.5);
        }

        body.light-theme .skill-progress {
            background: linear-gradient(135deg, #667eea, #764ba2);
        }

        /* Experience Section Light Theme */
        body.light-theme .experience {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        body.light-theme .experience-timeline::before {
            background: linear-gradient(135deg, #667eea, #764ba2);
        }

        body.light-theme .timeline-content {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        body.light-theme .timeline-content::before {
            background: #667eea;
            border: 4px solid #f5f7fa;
        }

        body.light-theme .timeline-header h3 {
            color: #2c3e50;
        }

        body.light-theme .timeline-date {
            color: #667eea;
        }

        body.light-theme .timeline-content h4 {
            color: #34495e;
        }

        body.light-theme .timeline-content p {
            color: #5d6d7e;
        }

        /* Contact Section Light Theme */
        body.light-theme .contact {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
        }

        body.light-theme .contact-icon {
            background: linear-gradient(135deg, #667eea, #764ba2);
        }

        body.light-theme .contact-details h4 {
            color: #2c3e50;
        }

        body.light-theme .contact-details p {
            color: #34495e;
        }

        body.light-theme .contact-form {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.9);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        body.light-theme .form-group input,
        body.light-theme .form-group textarea {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(102, 126, 234, 0.2);
            color: #2c3e50;
        }

        body.light-theme .form-group input:focus,
        body.light-theme .form-group textarea:focus {
            border-color: #667eea;
            background: rgba(255, 255, 255, 0.9);
        }

        body.light-theme .form-group input::placeholder,
        body.light-theme .form-group textarea::placeholder {
            color: #95a5a6;
        }

        /* Footer Light Theme */
        body.light-theme .footer {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        body.light-theme .footer-content {
            color: rgba(255, 255, 255, 0.8);
        }

        /* Cursor Light Theme */
        body.light-theme .cursor {
            background: #667eea;
            mix-blend-mode: normal;
        }

        body.light-theme .cursor-follower {
            border-color: rgba(102, 126, 234, 0.5);
        }

        body.light-theme .cursor.hover {
            background: #764ba2;
        }

        body.light-theme .cursor-follower.hover {
            border-color: rgba(118, 75, 162, 0.8);
        }

        /* Scroll Progress Light Theme */
        body.light-theme #scroll-progress {
            background: linear-gradient(135deg, #667eea, #764ba2) !important;
        }

        /* Tech Tags Light Theme */
        body.light-theme .tech-tag {
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
            border: 1px solid rgba(102, 126, 234, 0.3);
        }

        body.light-theme .live-tag {
            background: linear-gradient(135deg, #667eea, #764ba2) !important;
            color: #fff !important;
        }

        body.light-theme .tech-category {
            background: rgba(118, 75, 162, 0.1) !important;
            color: #764ba2 !important;
            border: 1px solid rgba(118, 75, 162, 0.3) !important;
        }

        /* Theme Toggle Animation */
        body.theme-transitioning * {
            transition: all 0.5s ease !important;
        }

        /* Glowing effects for light theme */
        body.light-theme .btn-primary:hover {
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        body.light-theme .hero-social a:hover {
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(15px);
            color: #fff;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        body.light-theme .contact-social a:hover {
            background: #667eea;
            color: #fff;
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* NEW REQUIREMENTS STYLES */
        /* 1. Reduce distance between "Hi, I'm" and name */
        .hero-title { 
            margin-bottom: -10px !important; 
            line-height: 1.1 !important; 
        }
        .name { 
            margin-top: 5px !important; 
        }
        
        /* 2. Reduce space between projects and skills */
        .projects { 
            margin-bottom: 30px !important; 
            padding-bottom: 30px !important; 
        }
        .skills { 
            margin-top: 30px !important; 
            padding-top: 30px !important; 
        }
        
        /* 3. Slimmer navbar */
        .navbar { 
            padding: 0.5rem 1rem !important; 
            min-height: 50px !important; 
        }
        .nav-logo a { 
            font-size: 1.1rem !important; 
        }
        .nav-link { 
            padding: 0.3rem 0.8rem !important; 
            font-size: 0.95rem !important; 
        }
        
        /* 4. Download dropdown styles */
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-menu {
            position: absolute;
            top: 100%;
            right: 0;
            min-width: 200px;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(20px);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .dropdown-menu.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .dropdown-item {
            display: block;
            padding: 12px 20px;
            color: #2c3e50;
            text-decoration: none;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .dropdown-item:hover {
            background: #f8f9fa;
            transform: translateX(5px);
        }
        
        .dropdown-item:last-child {
            border-bottom: none;
        }
        
        .dropdown-item i {
            margin-right: 8px;
            width: 16px;
        }
        
        /* 5. Language toggle button styles */
        .nav-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        #language-toggle {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            cursor: pointer;
        }
        
        #language-toggle:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            color: white;
        }
        
        /* Translation fade effect */
        .fade-transition {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .fade-transition.active {
            opacity: 1;
        }
        
        /* Dark theme adjustments for dropdowns */
        body.dark-theme .dropdown-menu {
            background: rgba(26,26,46,0.95);
            border: 1px solid rgba(0,255,136,0.2);
        }
        
        body.dark-theme .dropdown-item {
            color: #fff;
            border-color: rgba(255,255,255,0.1);
        }
        
        body.dark-theme .dropdown-item:hover {
            background: rgba(0,255,136,0.1);
        }
    `;

    document.head.appendChild(themeStyles);
}

// Initialize theme
function initializeTheme() {
    createThemeStyles();
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        isDarkTheme = savedTheme === 'dark';
    }
    applyTheme();
    updateThemeToggle();
}

function applyTheme() {
    // Add transition class
    body.classList.add('theme-transitioning');
    
    if (isDarkTheme) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }

    // Remove transition class after animation
    setTimeout(() => {
        body.classList.remove('theme-transitioning');
    }, 500);
}

function updateThemeToggle() {
    if (!themeToggle) return;
    
    if (isDarkTheme) {
        themeToggle.innerHTML = '☀️ Light Mode';
        themeToggle.style.background = 'linear-gradient(135deg, #1a1a2e, #16213e)';
        themeToggle.style.color = '#fff';
        themeToggle.style.border = '2px solid rgba(0, 255, 136, 0.3)';
    } else {
        themeToggle.innerHTML = '🌙 Dark Mode';
        themeToggle.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
        themeToggle.style.color = '#fff';
        themeToggle.style.border = '2px solid rgba(102, 126, 234, 0.5)';
        themeToggle.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
    }
}

// Theme toggle event listener
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        isDarkTheme = !isDarkTheme;
        localStorage.setItem('portfolio-theme', isDarkTheme ? 'dark' : 'light');
        applyTheme();
        updateThemeToggle();
        
        // Show notification with theme-appropriate colors
        showNotification(
            isDarkTheme ? '🌙 Dark theme activated!' : '☀️ Light theme activated!', 
            'success'
        );

        // Add a subtle animation to the toggle button
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

// ===== NAVIGATION ===== 
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// Ensure mobile nav is closed on page load
if (navMenu) navMenu.classList.remove('active');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const sectionTop = targetSection.offsetTop;
                const sectionHeight = targetSection.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        }
    });
});

// ===== CELEBRATION EFFECTS ===== 
let celebrationIndex = 0;

// 8 Different celebration themes
const celebrations = [
    // 1. Classic Confetti Rain
    () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#00ff88', '#00d4ff', '#ff6b6b', '#ffd93d', '#6bcf7f']
        });
        showCelebrationMessage("🎊 Amazing Choice! Thanks for downloading!", '#00ff88');
    },
    
    // 2. Fireworks Explosion
    () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        
        (function frame() {
            confetti({
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                zIndex: 0,
                particleCount: 5,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
            });
            
            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        }());
        showCelebrationMessage("🎆 Boom! Fireworks for you!", '#ff6b6b');
    },
    
    // 3. Side Cannons
    () => {
        const end = Date.now() + 2.5 * 1000;
        
        (function frame() {
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#00ff88', '#00d4ff']
            });
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff6b6b', '#ffd93d']
            });
            
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
        showCelebrationMessage("🎯 Double Cannon Blast!", '#00d4ff');
    },
    
    // 4. Heart Shapes
    () => {
        const scalar = 2;
        const heart = confetti.shapeFromText({ text: '❤️', scalar });
        
        confetti({
            shapes: [heart],
            scalar: scalar,
            particleCount: 50,
            spread: 100,
            startVelocity: 45,
            gravity: 0.8
        });
        showCelebrationMessage("💖 You're awesome! Hearts for you!", '#ff69b4');
    },
    
    // 5. Spiral Effect
    () => {
        const duration = 2.5 * 1000;
        const animationEnd = Date.now() + duration;
        let skew = 1;
        
        (function frame() {
            const timeLeft = animationEnd - Date.now();
            const ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);
            
            confetti({
                particleCount: 3,
                startVelocity: 0,
                ticks: ticks,
                gravity: 0.5,
                origin: {
                    x: Math.random(),
                    y: Math.random() * skew - 0.2
                },
                colors: ['#00ff88', '#00d4ff', '#ffd93d'],
                shapes: ['circle'],
                scalar: 0.8
            });
            
            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        }());
        showCelebrationMessage("🌀 Spiral Magic! Downloading...", '#00d4ff');
    },
    
    // 6. Stars and Sparkles
    () => {
        const star = confetti.shapeFromText({ text: '⭐', scalar: 2 });
        const sparkle = confetti.shapeFromText({ text: '✨', scalar: 1.5 });
        
        confetti({
            shapes: [star, sparkle],
            particleCount: 80,
            spread: 120,
            startVelocity: 50,
            gravity: 1.2,
            drift: 0,
            colors: ['#ffd700', '#ffffff', '#00ff88']
        });
        showCelebrationMessage("⭐ You're a star! Thanks for downloading!", '#ffd700');
    },
    
    // 7. Rainbow Cascade
    () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        
        (function frame() {
            confetti({
                particleCount: 5,
                startVelocity: 10,
                spread: 200,
                origin: { 
                    x: Math.random(),
                    y: 0
                },
                colors: ['#ff0000', '#ff8c00', '#ffd700', '#00ff00', '#00bfff', '#8a2be2'],
                gravity: 0.6,
                scalar: 1.2
            });
            
            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        }());
        showCelebrationMessage("🌈 Rainbow Cascade! Beautiful choice!", '#ff8c00');
    },
    
    // 8. Emoji Party
    () => {
        const emojis = ['🎉', '🎊', '🎈', '🎁', '🥳', '🌟', '💫', '🎭'];
        const shapes = emojis.map(emoji => confetti.shapeFromText({ text: emoji, scalar: 2 }));
        
        confetti({
            shapes: shapes,
            particleCount: 60,
            spread: 100,
            startVelocity: 30,
            gravity: 0.8,
            scalar: 1
        });
        showCelebrationMessage("🥳 Emoji Party Time! You rock!", '#ff6b6b');
    }
];

function triggerCelebration() {
    celebrations[celebrationIndex % celebrations.length]();
    celebrationIndex++;
}

function showCelebrationMessage(message, color) {
    const notification = document.createElement('div');
    notification.className = 'celebration-notification';
    notification.textContent = message;
    notification.style.background = `linear-gradient(135deg, ${color}, ${color}aa)`;
    notification.style.color = color === '#ffd700' || color === '#ffd93d' ? '#000' : '#fff';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'celebrationPulse 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2500);
}

// ===== DOWNLOAD DROPDOWN FUNCTIONALITY ===== 
function setupDownloadDropdown() {
    const resumeDropdown = document.getElementById('resume-dropdown');
    const resumeMenu = document.getElementById('resume-menu');
    
    if (resumeDropdown && resumeMenu) {
        resumeDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            resumeMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!resumeDropdown.contains(e.target) && !resumeMenu.contains(e.target)) {
                resumeMenu.classList.remove('show');
            }
        });
        
        // Handle dropdown item clicks - WITH CELEBRATIONS!
        const dropdownItems = resumeMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                resumeMenu.classList.remove('show');
                const fileName = item.textContent.trim();
                
                // 🎉 TRIGGER CELEBRATION FIRST
                triggerCelebration();
                
                // Then show the original notification
                showNotification(`Downloading ${fileName}...`, 'success');
            });
        });
    }
}

// ===== TRANSLATION SYSTEM =====
const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About', 
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-contact': 'Contact',
        
        // Resume & Controls
        'resume-download': 'Resume',
        'english-resume': 'English Resume',
        'japanese-resume': 'Japanese Resume', 
        'japanese-work-history': 'Japanese Work History',
        'toggle-theme': 'Toggle Theme',
        
        // Hero Section
        'greeting': 'Hi 👋, I\'m',
        'name': 'Bipra Biswas,',
        'hero-subtitle': 'Fullstack Developer & AI Enthusiast',
        'hero-description': '"Crafting innovative digital solutions with cutting-edge AI and fullstack technologies. From intelligent health systems to IoT innovations, I transform ideas into impactful realities."',
        'view-work': 'View My Work',
        'get-in-touch': 'Get In Touch',
        
        // About Section
        'about-title': 'About Me',
        'about-paragraph1': 'As a dedicated Computer Science graduate specializing in AI and Robotics from VIT, I bring a unique blend of academic excellence and practical experience to fullstack development. My journey spans from building intelligent health monitoring systems to developing IoT solutions with real-world impact.',
        'about-paragraph2': 'With permanent residency in Japan and experience collaborating with international teams, I combine technical expertise with cross-cultural communication skills. My passion lies in creating innovative solutions that bridge the gap between AI capabilities and user-centric applications.',
        'stat-cgpa': 'CGPA',
        'stat-projects': 'Major Projects',
        'stat-certifications': 'Certifications',
        'stat-languages': 'Languages',
        'quick-facts': 'Quick Facts',
        'fact-japan': 'Japan Permanent Resident',
        'fact-graduate': 'VIT Computer Science Graduate',
        'fact-specialist': 'AI & Fullstack Specialist',
        'fact-multilingual': 'Multi-lingual (EN/HI/BN/JP)',
        
        // Projects Section
        'projects-title': 'Featured Projects',
        'projects-subtitle': 'Fullstack & AI-Powered Solutions',
        'category-all': 'All',
        'category-fullstack': 'Fullstack',
        'category-ai': 'AI/ML',
        'category-iot': 'IoT',
        
        // Individual Projects
        'project1-category': 'Fullstack + AI',
        'project1-title': 'SafeOut: Smart Health Advisory',
        'project1-description': 'AI-powered health monitoring system with personalized wellness recommendations. Features real-time weather integration, hydration tracking, and UV exposure warnings.',
        
        'project2-category': 'AI + Backend',
        'project2-title': 'VisionX: AI Video Surveillance',
        'project2-description': 'Advanced video surveillance system for smart cities with real-time anomaly detection, motion tracking, and automated alert systems using OpenCV and Gemma.',
        
        'project3-category': 'Fullstack + ML',
        'project3-title': 'Virtual Whiteboard ML',
        'project3-description': 'Interactive virtual whiteboard with ML-powered handwriting recognition (90% accuracy), gesture controls, and multi-user collaboration features.',
        
        'project4-category': 'IoT + Fullstack',
        'project4-title': 'IoT Smart Lock System',
        'project4-description': 'Advanced digital lock with RFID, fingerprint, and keypad authentication. Features web dashboard, mobile app integration, and real-time monitoring.',
        
        'project5-category': 'Robotics + AI',
        'project5-title': 'ROS Obstacle Detection Bot',
        'project5-description': 'Autonomous robot using ROS for obstacle detection and navigation with 95% success rate. Advanced path planning and sensor fusion algorithms.',
        
        'project6-category': 'AI + Computer Vision',
        'project6-title': 'Facial Recognition & Emotion AI',
        'project6-description': 'Real-time facial recognition with emotion detection using deep learning. Applications in security, user engagement, and mental health assessment.',
        
        // Skills Section
        'skills-title': 'Technical Skills',
        'frontend-title': 'Frontend Development',
        'backend-title': 'Backend Development',
        'aiml-title': 'AI/ML & Tools',
        'skill-ml': 'Machine Learning',
        'skill-nn': 'Neural Networks',
        'skill-data': 'Data Analysis',
        
        // Experience Section
        'experience-title': 'Experience & Leadership',
        'exp1-title': 'TCS Japan Collaboration',
        'exp1-date': 'Oct - Nov 2023',
        'exp1-position': 'IoT Systems Development Intern',
        'exp1-description': 'Developed Digital Smart Lock System with IoT integration, implementing multi-factor authentication and optimizing hardware-software performance under TCS mentorship.',
        
        'exp2-title': 'NexSeed Venture Capital Club',
        'exp2-date': '2023 - 2024',
        'exp2-position': 'Head & Founder',
        'exp2-description': 'Led club growth by 25%, organized industry workshops, coordinated pitch competitions, and established partnerships with local startups and VC firms for mentorship opportunities.',
        
        'exp3-title': 'Aerospace Club VIT',
        'exp3-date': '2022 - 2024',
        'exp3-position': 'Core Member',
        'exp3-description': 'Collaborated on drone design and development, conducted testing sessions, and contributed to technical documentation while enhancing teamwork and communication skills.',
        
        // Contact Section
        'contact-title': 'Let\'s Work Together',
        'contact-subtitle': 'Ready to bring innovative ideas to life',
        'contact-email-label': 'Email',
        'contact-phone-label': 'Phone',
        'contact-location-label': 'Location',
        'contact-location-value': 'Japan (Permanent Resident)',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-subject': 'Subject',
        'form-message': 'Your Message',
        'send-message': 'Send Message',
        
        // Footer
        'footer-text': '© 2025 Bipra Biswas. Crafted with passion and code.'
    },
    
    ja: {
        // Navigation
        'nav-home': 'ホーム',
        'nav-about': 'について',
        'nav-projects': 'プロジェクト',
        'nav-skills': 'スキル',
        'nav-experience': '経験',
        'nav-contact': 'お問い合わせ',
        
        // Resume & Controls
        'resume-download': '履歴書',
        'english-resume': '英語履歴書',
        'japanese-resume': '日本語履歴書',
        'japanese-work-history': '日本語職歴書',
        'toggle-theme': 'テーマ切替',
        
        // Hero Section
        'greeting': 'こんにちは 👋、私は',
        'name': 'ビスワス ビップロ',
        'hero-subtitle': 'フルスタック開発者・AI愛好家',
        'hero-description': '「最先端のAIとフルスタック技術で革新的なデジタルソリューションを創造。インテリジェントヘルスシステムからIoTイノベーションまで、アイデアを影響力のある現実に変えます。」',
        'view-work': '作品を見る',
        'get-in-touch': 'お問い合わせ',
        
        // About Section
        'about-title': '私について',
        'about-paragraph1': 'VITでAIとロボティクスを専攻したコンピュータサイエンス卒業生として、学術的優秀性と実践経験のユニークな組み合わせをフルスタック開発に持ち込みます。私の旅路は、インテリジェント健康監視システムの構築から実世界に影響を与えるIoTソリューションの開発まで及びます。',
        'about-paragraph2': '日本の永住権を持ち、国際チームとの協力経験を持つ私は、技術的専門知識と異文化コミュニケーションスキルを組み合わせています。私の情熱は、AI能力とユーザー中心のアプリケーションの間のギャップを埋める革新的なソリューションの創造にあります。',
        'stat-cgpa': 'CGPA',
        'stat-projects': '主要プロジェクト',
        'stat-certifications': '認定資格',
        'stat-languages': '言語',
        'quick-facts': 'クイックファクト',
        'fact-japan': '日本永住者',
        'fact-graduate': 'VITコンピュータサイエンス卒業',
        'fact-specialist': 'AI・フルスタック専門家',
        'fact-multilingual': '多言語話者（英/ヒ/ベ/日）',
        
        // Projects Section
        'projects-title': '注目のプロジェクト',
        'projects-subtitle': 'フルスタック・AI駆動ソリューション',
        'category-all': 'すべて',
        'category-fullstack': 'フルスタック',
        'category-ai': 'AI/ML',
        'category-iot': 'IoT',
        
        // Individual Projects
        'project1-category': 'フルスタック + AI',
        'project1-title': 'SafeOut: スマート健康アドバイザー',
        'project1-description': 'パーソナライズされた健康推奨機能を持つAI駆動健康監視システム。リアルタイム天気統合、水分補給追跡、UV露出警告機能を備えています。',
        
        'project2-category': 'AI + バックエンド',
        'project2-title': 'VisionX: AI映像監視',
        'project2-description': 'OpenCVとGemmaを使用したリアルタイム異常検出、モーション追跡、自動アラートシステムを備えたスマートシティ向け高度映像監視システム。',
        
        'project3-category': 'フルスタック + ML',
        'project3-title': 'バーチャルホワイトボードML',
        'project3-description': 'ML駆動手書き認識（90%精度）、ジェスチャーコントロール、マルチユーザー協力機能を備えたインタラクティブバーチャルホワイトボード。',
        
        'project4-category': 'IoT + フルスタック',
        'project4-title': 'IoTスマートロックシステム',
        'project4-description': 'RFID、指紋、キーパッド認証を備えた高度デジタルロック。Webダッシュボード、モバイルアプリ統合、リアルタイム監視機能付き。',
        
        'project5-category': 'ロボティクス + AI',
        'project5-title': 'ROS障害物検出ボット',
        'project5-description': '95%成功率での障害物検出とナビゲーションにROSを使用する自律ロボット。高度パス計画とセンサー融合アルゴリズム。',
        
        'project6-category': 'AI + コンピュータビジョン',
        'project6-title': '顔認識・感情AI',
        'project6-description': 'ディープラーニングを使用したリアルタイム顔認識と感情検出。セキュリティ、ユーザーエンゲージメント、メンタルヘルス評価での応用。',
        
        // Skills Section
        'skills-title': '技術スキル',
        'frontend-title': 'フロントエンド開発',
        'backend-title': 'バックエンド開発',
        'aiml-title': 'AI/ML・ツール',
        'skill-ml': '機械学習',
        'skill-nn': 'ニューラルネットワーク',
        'skill-data': 'データ分析',
        
        // Experience Section
        'experience-title': '経験・リーダーシップ',
        'exp1-title': 'TCS日本コラボレーション',
        'exp1-date': '2023年10月 - 11月',
        'exp1-position': 'IoTシステム開発インターン',
        'exp1-description': 'TCSメンターシップの下で、IoT統合によるデジタルスマートロックシステムを開発し、多要素認証の実装とハードウェア・ソフトウェア性能の最適化を行いました。',
        
        'exp2-title': 'NexSeedベンチャーキャピタルクラブ',
        'exp2-date': '2023 - 2024',
        'exp2-position': 'ヘッド・創設者',
        'exp2-description': 'クラブの成長を25%牽引し、業界ワークショップを主催し、ピッチ競技会をコーディネートし、地元スタートアップやVC企業とのメンターシップ機会のためのパートナーシップを確立しました。',
        
        'exp3-title': '航空宇宙クラブVIT',
        'exp3-date': '2022 - 2024',
        'exp3-position': 'コアメンバー',
        'exp3-description': 'ドローン設計・開発に協力し、テストセッションを実施し、チームワークとコミュニケーションスキルを向上させながら技術文書に貢献しました。',
        
        // Contact Section
        'contact-title': '一緒に働きましょう',
        'contact-subtitle': '革新的なアイデアを実現する準備完了',
        'contact-email-label': 'メール',
        'contact-phone-label': '電話',
        'contact-location-label': '場所',
        'contact-location-value': '日本（永住者）',
        'form-name': 'お名前',
        'form-email': 'メールアドレス',
        'form-subject': '件名',
        'form-message': 'メッセージ',
        'send-message': 'メッセージを送信',
        
        // Footer
        'footer-text': '© 2025 ビプラ・ビスワス。情熱とコードで制作。'
    }
};

let currentLanguage = 'en';

// ===== TRANSLATION FUNCTIONS =====
function setupLanguageToggle() {
    const languageToggle = document.getElementById('language-toggle');
    const currentLangSpan = document.getElementById('current-lang');
    
    if (languageToggle && currentLangSpan) {
        languageToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleLanguage();
        });
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ja' : 'en';
    translatePage();
    updateLanguageToggle();
    showNotification(
        currentLanguage === 'ja' ? '日本語に切り替えました！' : 'Switched to English!',
        'success'
    );
}

function translatePage() {
    // Add fade effect
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => el.classList.add('fade-transition'));
    
    setTimeout(() => {
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.textContent = translations[currentLanguage][key];
            }
        });
        
        // Handle placeholder translations
        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                element.placeholder = translations[currentLanguage][key];
            }
        });
        
        // Remove fade effect and show content
        setTimeout(() => {
            elements.forEach(el => {
                el.classList.remove('fade-transition');
                el.classList.add('active');
            });
            
            // Remove active class after animation
            setTimeout(() => {
                elements.forEach(el => el.classList.remove('active'));
            }, 300);
        }, 50);
    }, 150);
}

function updateLanguageToggle() {
    const currentLangSpan = document.getElementById('current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage === 'en' ? 'EN' : '日本';
    }
}

// ===== SMOOTH SCROLLING ===== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS ===== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .about-card, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== GITHUB REPOSITORIES DATA ===== 
const githubUsername = 'Bipra09';
const repositories = [
    { 
        name: 'Gen-er-ater', 
        description: 'AI-powered content generator tool with modern UI and multiple generation modes', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Gen-er-ater/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'Text-er', 
        description: 'Advanced text processing and manipulation tool with real-time editing features', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Text-er/',
        categories: ['fullstack']
    },
    { 
        name: 'MindMesh', 
        description: 'AI-powered mind mapping and knowledge organization tool for enhanced productivity', 
        language: 'JavaScript', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/MindMesh/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'Covid19-Vaccination', 
        description: 'COVID-19 vaccination tracking and analytics system with data visualization', 
        language: 'Python', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/Covid19-Vaccination/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'StockG', 
        description: 'Stock market analysis and prediction tool with real-time data and ML algorithms', 
        language: 'Python', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/StockG/',
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'meat-a-dora', 
        description: 'Innovative food discovery and recommendation platform with smart filtering', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/meat-a-dora/',
        categories: ['fullstack']
    },
    { 
        name: 'digital_moonshine', 
        description: 'Creative digital art and visualization project with interactive elements', 
        language: 'HTML', 
        isWebsite: true, 
        demo: 'https://bipra09.github.io/digital_moonshine/',
        categories: ['fullstack']
    },
    { 
        name: 'Anomaly-Detection-in-smart-cities', 
        description: 'Advanced anomaly detection system for smart city surveillance and monitoring', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai']
    },
    { 
        name: 'Attendance-Management-System', 
        description: 'Automated attendance tracking system with facial recognition and ML algorithms', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai', 'fullstack']
    },
    { 
        name: 'Crop-Health-Management', 
        description: 'ML-based crop health monitoring and disease detection system for agriculture', 
        language: 'Jupyter Notebook', 
        isWebsite: false,
        categories: ['ai']
    },
    { 
        name: 'RealTime-Virtual-Whiteboard', 
        description: 'Collaborative virtual whiteboard with real-time synchronization and ML features', 
        language: 'Python', 
        isWebsite: false,
        categories: ['fullstack', 'ai']
    },
    { 
        name: 'facial-recognition', 
        description: 'Advanced facial recognition system with emotion detection and real-time processing', 
        language: 'Python', 
        isWebsite: false,
        categories: ['ai']
    }
];

// ===== PROJECT FILTERING WITH GITHUB INTEGRATION ===== 
let githubProjectsLoaded = false;

function createGitHubProjectCard(repo) {
    const techColors = {
        'HTML': '#e34c26',
        'JavaScript': '#f1e05a',
        'Python': '#3572a5',
        'Jupyter Notebook': '#da5b0b',
        'CSS': '#1572b6'
    };

    const categoryString = repo.categories.join(' ');

    return `
        <div class="project-card github-project" data-category="${categoryString}">
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        ${repo.isWebsite ? `
                            <a href="${repo.demo}" target="_blank" class="project-link" title="Live Demo">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        ` : ''}
                        <a href="https://github.com/${githubUsername}/${repo.name}" target="_blank" class="project-link" title="View Code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="github-placeholder">
                    <i class="fab fa-github"></i>
                    <span>${repo.language}</span>
                </div>
            </div>
            <div class="project-content">
                <div class="project-category">GitHub ${repo.isWebsite ? '• Live Project' : '• Repository'}</div>
                <h3 class="project-title">${repo.name.replace(/-/g, ' ')}</h3>
                <p class="project-description">${repo.description}</p>
                <div class="project-tech">
                    <span class="tech-tag" style="background-color: ${techColors[repo.language] || '#666'}; color: #fff;">
                        ${repo.language}
                    </span>
                    ${repo.isWebsite ? '<span class="tech-tag live-tag">🌐 Live Demo</span>' : '<span class="tech-tag">📂 Repository</span>'}
                    ${repo.categories.map(cat => `<span class="tech-tag tech-category">${cat.toUpperCase()}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function loadGitHubProjects() {
    if (githubProjectsLoaded) return;
    
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    repositories.forEach((repo, index) => {
        const projectCard = createGitHubProjectCard(repo);
        projectsGrid.insertAdjacentHTML('beforeend', projectCard);
        
        // Animate in the new cards
        setTimeout(() => {
            const newCard = projectsGrid.lastElementChild;
            if (newCard) {
                newCard.style.opacity = '0';
                newCard.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    newCard.style.opacity = '1';
                    newCard.style.transform = 'translateY(0)';
                }, 50);
            }
        }, index * 100);
    });
    
    githubProjectsLoaded = true;
    
    // Re-apply effects to new cards
    setTimeout(() => {
        addTiltEffect();
        addMagneticEffect();
        updateCursorEffects();
    }, 500);
}

// Show skills section after GitHub projects are loaded
setTimeout(() => {
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        skillsSection.classList.add('show');
    }
}, 1000);

function updateCursorEffects() {
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            if (cursor) cursor.classList.add('hover');
            if (cursorFollower) cursorFollower.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            if (cursor) cursor.classList.remove('hover');
            if (cursorFollower) cursorFollower.classList.remove('hover');
        });
    });
}

// Enhanced Project Filtering
function initializeProjectFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Load GitHub projects if not already loaded
            if (!githubProjectsLoaded) {
                loadGitHubProjects();
            }
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-category');
            const allProjectCards = document.querySelectorAll('.project-card');
            
            allProjectCards.forEach((card, index) => {
                const cardCategories = card.getAttribute('data-category');
                const shouldShow = filterValue === 'all' || cardCategories.includes(filterValue);
                
                if (shouldShow) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== SKILL BARS ANIMATION ===== 
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
	});
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PARALLAX EFFECTS ===== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .about, .projects');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// ===== CONTACT FORM ===== 
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        this.reset();
    });
}

// ===== NOTIFICATION SYSTEM ===== 
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Theme-aware colors
    const isLightTheme = document.body.classList.contains('light-theme');
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' 
            ? (isLightTheme ? '#667eea' : '#00ff88') 
            : (isLightTheme ? '#e74c3c' : '#ff6b6b')};
        color: ${isLightTheme ? '#fff' : '#000'};
        padding: 1rem 2rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, ${isLightTheme ? '0.2' : '0.3'});
        font-weight: 600;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(notificationStyles);

// ===== SCROLL PROGRESS INDICATOR ===== 
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #00ff88, #00d4ff);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// ===== TEXT REVEAL ANIMATION ===== 
function revealText() {
    const textElements = document.querySelectorAll('.hero-title, .section-title');

    textElements.forEach(element => {
        const nodes = Array.from(element.childNodes);
        element.innerHTML = '';

        nodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.textContent.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.style.cssText = `
                        opacity: 0;
                        transform: translateY(20px);
                        display: inline-block;
                        animation: revealChar 0.5s ease forwards;
                        animation-delay: ${index * 0.05}s;
                    `;
                    element.appendChild(span);
                });
            } else {
                element.appendChild(node); // keep emoji and other HTML intact
            }
        });
    });
}

// Add text reveal styles
const textRevealStyles = document.createElement('style');
textRevealStyles.textContent = `
    @keyframes revealChar {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(textRevealStyles);

// ===== MAGNETIC EFFECT FOR BUTTONS ===== 
function addMagneticEffect() {
    const magneticElements = document.querySelectorAll('.btn, .project-link, .contact-social a, .category-btn');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== TILT EFFECT FOR CARDS ===== 
function addTiltEffect() {
    const tiltElements = document.querySelectorAll('.project-card, .about-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ===== LOADING ANIMATION ===== 
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Bipra<span>.dev</span></div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .loader-content {
            text-align: center;
        }
        
        .loader-logo {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 2rem;
        }
        
        .loader-logo span {
            color: #00ff88;
        }
        
        .loader-bar {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto;
        }
        
        .loader-progress {
            height: 100%;
            background: linear-gradient(135deg, #00ff88, #00d4ff);
            width: 0%;
            animation: loadProgress 2s ease-in-out forwards;
        }
        
        @keyframes loadProgress {
            to { width: 100%; }
        }
    `;
    
    document.head.appendChild(loaderStyles);
    document.body.appendChild(loader);
    
    // Remove loader after animation
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
                loaderStyles.parentNode.removeChild(loaderStyles);
            }
        }, 500);
    }, 2500);
}

// ===== EASTER EGG - KONAMI CODE ===== 
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode = konamiCode.slice(-konamiSequence.length);
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Add rainbow effect to the entire page
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        * {
            animation: rainbow 2s linear infinite !important;
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    
    document.head.appendChild(rainbowStyle);
    showNotification('🎉 Konami Code Activated! Rainbow Mode ON!', 'success');
    
    // Remove effect after 10 seconds
    setTimeout(() => {
        if (rainbowStyle.parentNode) {
            rainbowStyle.parentNode.removeChild(rainbowStyle);
        }
        showNotification('Rainbow Mode OFF!', 'success');
    }, 10000);
}

// ===== PERFORMANCE OPTIMIZATION ===== 
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-dependent functions here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== MOUSE TRAIL EFFECT ===== 
class MouseTrail {
    constructor() {
        this.dots = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        // Create trail dots
        for (let i = 0; i < 12; i++) {
            const dot = document.createElement('div');
            dot.className = 'trail-dot';
            dot.style.cssText = `
                position: fixed;
                width: ${6 - i * 0.3}px;
                height: ${6 - i * 0.3}px;
                background: #00ff88;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                opacity: ${1 - i * 0.08};
                transition: all 0.1s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(dot);
            this.dots.push({ element: dot, x: 0, y: 0 });
        }
        
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        
        this.animate();
    }
    
    animate() {
        let x = this.mouse.x;
        let y = this.mouse.y;
        
        this.dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * (0.3 - index * 0.02);
            dot.y += (y - dot.y) * (0.3 - index * 0.02);
            dot.element.style.left = dot.x + 'px';
            dot.element.style.top = dot.y + 'px';
            
            x = dot.x;
            y = dot.y;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== AUTO-LOAD GITHUB PROJECTS ON SCROLL ===== 
const projectsSection = document.querySelector('#projects');
const projectsSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !githubProjectsLoaded) {
            setTimeout(() => {
                loadGitHubProjects();
            }, 500);
        }
    });
}, { threshold: 0.3 });

if (projectsSection) {
    projectsSectionObserver.observe(projectsSection);
}

// ===== CONSOLE EASTER EGG ===== 
console.log(`
%c
╔══════════════════════════════════════╗
║                                      ║
║         Welcome to Bipra's           ║
║        Portfolio Website!            ║
║                                      ║
║    🚀 Built with passion & code      ║
║    💡 Powered by creativity          ║
║    🎯 Designed for impact            ║
║                                      ║
║    Try the Konami Code! ↑↑↓↓←→←→BA   ║
║                                      ║
╚══════════════════════════════════════╝
`, 
'color: #00ff88; font-family: monospace; font-size: 12px; background: #0a0a0a; padding: 10px;'
);

console.log('%cLooking for a fullstack developer? Let\'s connect! 💬', 'color: #00d4ff; font-size: 16px; font-weight: bold;');

// ===== INITIALIZE ALL EFFECTS ===== 
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();
    
    // Setup new functionalities
    setupDownloadDropdown();
    setupLanguageToggle();
    
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize effects after loading
    setTimeout(() => {
        revealText();
        addMagneticEffect();
        addTiltEffect();
        initializeProjectFiltering();
        
        // Load GitHub projects automatically when page loads
        setTimeout(() => {
            loadGitHubProjects();
        }, 1000);
    }, 1000);
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, (index + 1) * 200);
    });
});

// Initialize mouse trail (optional - can be disabled for performance)
// new MouseTrail();

console.log('%c✨ Portfolio loaded successfully!', 'color: #00ff88; font-weight: bold;');
