import { gsap } from 'gsap';

export const mobileNav = () => {
  const navParent = document.querySelector('.nav_component') as HTMLElement;
  const buttonParent = navParent.querySelector('.menu_buttons');
  const navOpenIcon = navParent.querySelector('.menu_icon.is_menu');
  const navCloseIcon = navParent.querySelector('.menu_icon.is_close');

  let menuOpen = false;

  buttonParent?.addEventListener('click', () => {
    menuOpen = !menuOpen;

    if (menuOpen === true) {
      gsap.to(navOpenIcon, { duration: 1, opacity: 0, ease: 'power4.out' });
      gsap.set(navOpenIcon, { display: 'none' });
      gsap.set(navCloseIcon, { display: 'block' });
      gsap.to(navCloseIcon, { duration: 1, opacity: 1, ease: 'power4.out' });
    } else {
      gsap.to(navCloseIcon, { duration: 1, opacity: 0, ease: 'power4.out' });
      gsap.set(navCloseIcon, { display: 'none' });
      gsap.set(navOpenIcon, { display: 'block' });
      gsap.to(navOpenIcon, { duration: 1, opacity: 1, ease: 'power4.out' });
    }
  });
};
