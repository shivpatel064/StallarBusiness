// Stellar Business Systems — Shared Navigation
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <a href="index.html" class="nav-logo">
          <div class="logo-mark">S</div>
          <div>
            <span class="logo-text">Stellar Business</span>
            <span class="logo-sub">Salesforce Solutions</span>
          </div>
        </a>
        <ul class="nav-menu" id="navMenu">
          <li><a href="index.html" class="nav-link" data-page="index.html">Home</a></li>
          <li><a href="services.html" class="nav-link" data-page="services.html">Services</a></li>
          <li><a href="about.html" class="nav-link" data-page="about.html">About</a></li>
          <li><a href="contact.html" class="nav-link" data-page="contact.html">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <a href="contact.html" class="btn-ghost">Get in Touch</a>
          <a href="contact.html" class="btn-primary">Schedule a Call</a>
          <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
        </div>
      </div>
    </nav>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Active link
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');
  ham.addEventListener('click', () => {
    menu.classList.toggle('active');
    ham.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove('active');
        ham.classList.remove('active');
      }
    });
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
})();
