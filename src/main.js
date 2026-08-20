import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';

const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-nav]');

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'メニューを開く';
  navigation.removeAttribute('data-open');
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'メニューを開く' : 'メニューを閉じる';
  navigation.toggleAttribute('data-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) closeMenu();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();
