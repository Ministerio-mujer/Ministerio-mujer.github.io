document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (!menuToggle || !mainNav) return;

  // Abrir/cerrar menú
  menuToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('show');
    document.body.style.overflow = mainNav.classList.contains('show') ? 'hidden' : '';
  });

  // Cerrar menú al clicar un enlace
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (mainNav.classList.contains('show')) {
        mainNav.classList.remove('show');
        menuToggle.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      }
    });
  });

  // Cerrar menú al presionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('show')) {
      mainNav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }
  });

  // Cerrar menú al clicar fuera en mobile
  document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target) && mainNav.classList.contains('show')) {
      mainNav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }
  });
});

