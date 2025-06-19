const form = document.getElementById('contactForm');
const resp = document.getElementById('response');
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Form Submission
form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  resp.textContent = "Thanks, " + name + "! I'll get back to you soon 😊";
  form.reset();
});

// Theme Toggle
const storedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', storedTheme);
toggle.textContent = storedTheme === 'light' ? '🌙' : '☀️';

toggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// Scroll Animations
const faders = document.querySelectorAll('.fade-up');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(el => io.observe(el));