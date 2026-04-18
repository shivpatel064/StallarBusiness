// Stellar Business Systems — Main Script
document.addEventListener('DOMContentLoaded', function () {

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // ---- Toast helper ----
  function showToast(msg, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.style.background = type === 'success' ? '#16A34A' : '#DC2626';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // ---- Contact form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate sending (replace with Formspree/Netlify endpoint)
      setTimeout(() => {
        showToast('Message sent! We\'ll get back to you within 24 hours.');
        contactForm.reset();
        btn.textContent = orig;
        btn.disabled = false;
      }, 1400);
    });
  }

  // ---- Scroll-reveal animation ----
  const revealEls = document.querySelectorAll('.service-card, .testimonial-card, .process-step, .about-point, .cert-item, .service-page-card, .team-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.animationDelay = (i % 4) * 0.08 + 's';
      observer.observe(el);
    });
  }

  // ---- Animated counters ----
  const counters = document.querySelectorAll('.metric-num[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(timer);
          }, 20);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cObs.observe(c));
  }
});
