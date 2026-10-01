const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');
const form = document.getElementById('quoteForm');
const status = document.getElementById('formStatus');

menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Demo form submitted — connect this form to the client’s email/CRM before launch.';
});

document.getElementById('year').textContent = new Date().getFullYear();
