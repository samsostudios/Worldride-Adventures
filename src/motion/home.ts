import { clamp, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const heroMotion = () => {
  const heroComponent = document.querySelector('.section_hero') as HTMLElement;
  const heroTitle = heroComponent.querySelector('.hero-main_title-wrap');

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: heroComponent,
      start: 'top top',
      end: '30% top',
      scrub: true,
      //   markers: true,
    },
  });
  st.from(heroTitle, { scale: 1.25 });
};

export const bannerMotion = () => {
  const heroComponent = document.querySelector('.section_hero') as HTMLElement;
  const bannerComponent = heroComponent.querySelector('.book_banner') as HTMLElement;
  const bannerTextWrap = bannerComponent.querySelector('.book_banner-text-wrap');
  const bannerText = bannerComponent.querySelector('.book_banner-text') as HTMLElement;

  const movementSpeed = 25;

  const movementWidth = parseFloat(window.getComputedStyle(bannerText).width);

  const tl = gsap.to(bannerTextWrap, {
    duration: movementSpeed,
    x: -movementWidth,
    onReverseComplete() {
      this.totalTime(movementSpeed * 100);
    },
    repeat: -1,
    ease: 'none',
  });

  const clamp = gsap.utils.clamp(-5, 5);
  ScrollTrigger.create({
    onUpdate: (self) => {
      tl.timeScale(clamp(self.getVelocity() / 100));
      gsap.to(tl, { timeScale: 1, duration: 1, overwrite: true, ease: 'none' });
    },
  });
};

export const bookMotion = () => {
  const bookComponent = document.querySelector('.section_book') as HTMLElement;
  const sectionLabel = bookComponent.querySelector('.section_label');
  const bookContent = bookComponent.querySelector('.book-overview_main');
  const bookImageWrap = bookComponent.querySelector('.book-overview_secondary') as HTMLElement;
  const bookImage = bookImageWrap.children[0];
  const bookCharacters = bookComponent.querySelector('.charcters_component');

  const dur = 2;

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: bookComponent,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      //   scrub: true,
      //   markers: true,
    },
  });
  st.from(sectionLabel, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' });
  st.from(bookContent, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.5');
  st.from(bookImageWrap, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.2');
  st.from(bookCharacters, { duration: dur, opacity: 0, ease: 'power4.out' }, '<0.5');

  bookComponent.addEventListener('mousemove', (e) => {
    const mX = e.movementX * 1.2;
    const mY = e.movementY * 1.2;

    gsap.to(bookImage, { x: mX, y: mY, ease: 'power2.out' });
  });
};
