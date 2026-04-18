// Stellar Business Systems — Main Script
document.addEventListener('DOMContentLoaded', function () {

  // ---- Smooth scroll ----
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
  function showToast(msg, type) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg;
    toast.style.background = type === 'error' ? '#DC2626' : '#16A34A';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }

  // ---- Show inline error ----
  function showError(msg) {
    const el = document.getElementById('formError');
    const msgEl = document.getElementById('formErrorMsg');
    if (!el || !msgEl) return;
    msgEl.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 6000);
  }

  // ---- Contact Form ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const firstName = (document.getElementById('firstName') || {}).value || '';
      const lastName  = (document.getElementById('lastName')  || {}).value || '';
      const email     = (document.getElementById('email')     || {}).value || '';
      const message   = (document.getElementById('message')   || {}).value || '';

      if (!firstName.trim() || !lastName.trim()) { showError('Please enter your full name.'); return; }
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('Please enter a valid email address.'); return; }
      if (!message.trim()) { showError('Please tell us about your project.'); return; }

      const btn     = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const spinner = document.getElementById('btnSpinner');
      if (btn) btn.disabled = true;
      if (btnText) btnText.style.display = 'none';
      if (spinner) spinner.style.display = 'inline';

      // Web3Forms key — replace with your own from https://web3forms.com (free)
      const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

      try {
        if (WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY_HERE') {
          const payload = new FormData();
          payload.append('access_key', WEB3FORMS_KEY);
          payload.append('subject', 'New enquiry from ' + firstName + ' ' + lastName + ' — Stellar Website');
          payload.append('name', firstName + ' ' + lastName);
          payload.append('email', email);
          payload.append('phone',   (document.getElementById('phone')   || {}).value || '');
          payload.append('company', (document.getElementById('company') || {}).value || '');
          payload.append('service', (document.getElementById('service') || {}).value || '');
          payload.append('message', message);

          const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: payload });
          const data = await res.json();
          if (!data.success) throw new Error(data.message || 'Submission failed');
        } else {
          // Demo: simulate delay
          await new Promise(r => setTimeout(r, 1200));
        }

        contactForm.style.display = 'none';
        const successEl = document.getElementById('formSuccess');
        if (successEl) successEl.style.display = 'block';
        showToast("Message sent! We'll reply within one business day.", 'success');

      } catch (err) {
        console.error('Form error:', err);
        showError('Something went wrong. Please email us at hello@stellarbusiness.com');
        if (btn) btn.disabled = false;
        if (btnText) btnText.style.display = 'inline';
        if (spinner) spinner.style.display = 'none';
      }
    });
  }

  // ---- Scroll-reveal ----
  const revealEls = document.querySelectorAll(
    '.service-card,.testimonial-card,.process-step,.about-point,.cert-item,.service-page-card,.team-card,.contact-item'
  );
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.animationDelay = (i % 4) * 0.08 + 's';
      obs.observe(el);
    });
  }

  // ---- Animated counters ----
  document.querySelectorAll('.metric-num[data-count]').forEach(el => {
    if (!('IntersectionObserver' in window)) return;
    const cObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let current  = 0;
        const step   = Math.ceil(target / 60);
        const timer  = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(timer);
        }, 20);
        cObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    cObs.observe(el);
  });
});
