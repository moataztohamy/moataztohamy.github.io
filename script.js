
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Message sent successfully!';
    form.reset();
  });
});
