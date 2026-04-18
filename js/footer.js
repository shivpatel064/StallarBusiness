// Stellar Business Systems — Shared Footer
(function () {
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">
              <div class="logo-mark">S</div>
              <span class="logo-name">Stellar Business Systems</span>
            </a>
            <p>Certified Salesforce solutions built for startups. Fast delivery, strong ROI, and a scalable setup from day one.</p>
            <div class="social-row">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener" class="social-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="https://github.com" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="training.html">Training</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="services.html">Development</a></li>
              <li><a href="services.html">Configuration</a></li>
              <li><a href="services.html">Customization</a></li>
              <li><a href="services.html">Automation</a></li>
              <li><a href="services.html">Integration</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:hello@stellarbusiness.com"><i class="fas fa-envelope" style="margin-right:6px;"></i>hello@stellarbusiness.com</a></li>
              <li><a href="tel:+918770560198"><i class="fas fa-phone" style="margin-right:6px;"></i>+91 877 0560198</a></li>
              <li><a href="contact.html" class="btn-primary btn-small" style="display:inline-block;margin-top:6px;">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2026 Stellar Business Systems. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> &nbsp;&middot;&nbsp; <a href="#">Terms of Service</a></span>
        </div>
      </div>
    </footer>`;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
