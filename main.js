// ============================================
// GESTIÓN DE TEMA (CLARO/OSCURO)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Cargar tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Cambiar tema
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

loadTheme();

// ============================================
// NAVEGACIÓN RESPONSIVE
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Abrir/cerrar menú
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// NAVBAR SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScrollTop = window.scrollY;
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validación básica
    if (!formData.name.trim()) {
        alert('Por favor, ingresa tu nombre');
        return;
    }

    if (!formData.email.trim()) {
        alert('Por favor, ingresa tu email');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, ingresa un email válido');
        return;
    }

    if (!formData.message.trim()) {
        alert('Por favor, ingresa un mensaje');
        return;
    }

    // Opción 1: Usar Formspree (descomenta y reemplaza YOUR_FORM_ID)
    // try {
    //     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData)
    //     });

    //     if (response.ok) {
    //         alert('¡Mensaje enviado con éxito!');
    //         contactForm.reset();
    //     } else {
    //         alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    // }

    // Opción 2: Usar mailto (por defecto)
    const mailtoLink = `mailto:macabrera@gmail.com?subject=${encodeURIComponent(formData.subject || 'Mensaje desde portafolio')}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    alert('Se abrirá tu cliente de email. Por favor, envía el mensaje.');
    contactForm.reset();
});

// ============================================
// ANIMACIONES AL SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.experience-card, .education-card, .skills-card, .highlight-card').forEach(el => {
    observer.observe(el);
});

// ============================================
// SMOOTH SCROLL PERSONALIZADO
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio cargado correctamente');
});

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Función para detectar si está en modo oscuro
function isDarkMode() {
    return document.body.classList.contains('dark-mode');
}

// Función para obtener el tema actual
function getCurrentTheme() {
    return isDarkMode() ? 'dark' : 'light';
}

// Función para cambiar a tema específico
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Función para hacer scroll a una sección
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Función para enviar email
function sendEmail(to, subject, body) {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// ============================================
// DETECCIÓN DE CAMBIOS EN PREFERENCIA DEL SISTEMA
// ============================================

if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeQuery.addEventListener('change', (e) => {
        if (e.matches && localStorage.getItem('theme') === null) {
            document.body.classList.add('dark-mode');
        } else if (!e.matches && localStorage.getItem('theme') === null) {
            document.body.classList.remove('dark-mode');
        }
    });
}
