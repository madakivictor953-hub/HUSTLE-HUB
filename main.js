// main.js for HustleHUB
// Navbar menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
let menuIcon = null;
if (menuToggle) {
    menuIcon = menuToggle.querySelector('i');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (menuIcon) {
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        }
    });
}

if (navLinks) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (navLinks.classList.contains('active') && menuIcon) {
                navLinks.classList.remove('active');
                menuIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    });
}
// Contact form submission
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const payload = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        try {
            const res = await fetch('contact.php', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.ok) {
                contactStatus.textContent = 'Message sent. Thank you!';
                contactForm.reset();
            } else {
                contactStatus.textContent = 'Failed to send message.';
            }
        } catch (err) {
            contactStatus.textContent = 'Network error.';
        }
    });
}
// Search bar demo
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchinput');
const resultDiv = document.getElementById('result');
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        resultDiv.textContent = `Searching for "${searchInput.value}"... (demo only)`;
    });
}
