document.addEventListener('DOMContentLoaded', () => {
  const menuWrap = document.querySelector('.menu-wrap');
  const toggle = document.querySelector('.menu-toggle');
  const panel = document.querySelector('.menu-panel');
  if (!menuWrap || !toggle || !panel) return;

  const closeMenu = () => {
    menuWrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    menuWrap.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (menuWrap.classList.contains('open')) closeMenu();
    else openMenu();
  });

  document.addEventListener('click', (e) => {
    if (!menuWrap.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });
});
