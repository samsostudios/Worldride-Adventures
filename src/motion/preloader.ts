import { gsap } from 'gsap';

export const preloaderMotion = () => {
  const preloaderElement = document.querySelector('.preloader_component') as HTMLElement;
  const preloaderImage = preloaderElement.children[0];
  const lenisContainer = document.querySelector('html');

  const animation = gsap.timeline();
  animation.set(lenisContainer, { height: '100%' });
  animation.set(preloaderElement, { display: 'flex', opacity: 1 });
  animation.from(preloaderImage, {
    delay: 0.4,
    duration: 1,
    y: '2rem',
    opacity: 0,
    ease: 'power4.inOut',
  });
  animation.to(preloaderImage, {
    delay: 0.4,
    duration: 1,
    y: '-2rem',
    opacity: 0,
    ease: 'power4.inOut',
  });
  animation.to(preloaderElement, { duration: 1, y: '-100%', ease: 'expo.inOut' });
  animation.set(preloaderElement, { display: 'none' });
  animation.set(lenisContainer, { height: 'auto' });
};
