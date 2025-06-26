document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });

  // Simple contact form submission handler (mock)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';

    // Fake async submission simulation
    setTimeout(() => {
      formStatus.textContent = 'Thank you for contacting me! I will get back to you soon.';
      form.reset();
    }, 1500);
  });
});
