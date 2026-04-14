document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initContactForm();
    initYear();
});

function initHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
}

function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    menu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu.classList.contains('active')) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.service-card, .project-card, .section-header, .contact-link-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

const W3F_KEY = '468a7128-e3f0-4901-9b0b-72bd80b2e7da';

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const service = form.service?.value ?? '';
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showToast('Completá todos los campos requeridos.', 'error');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('Email inválido.', 'error');
            return;
        }

        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: W3F_KEY,
                    subject: `Nuevo contacto de ${name} — rodrantho.com`,
                    from_name: 'rodrantho.com',
                    name,
                    email,
                    service: service || 'No especificado',
                    message,
                }),
            });

            const data = await res.json();

            if (data.success) {
                showToast('¡Mensaje enviado! Te contacto pronto.', 'success');
                form.reset();
            } else {
                throw new Error(data.message ?? 'Error desconocido');
            }
        } catch (err) {
            console.error('[contactForm]', err);
            showToast('Error al enviar. Escribime a hola@rodrantho.com', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showToast(message, type = 'info') {
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#6366f1'};
        color: white;
        padding: 14px 20px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        font-family: inherit;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        z-index: 9999;
        transform: translateY(20px);
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 360px;
    `;

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
    });

    setTimeout(() => {
        toast.style.transform = 'translateY(20px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function initYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
}
