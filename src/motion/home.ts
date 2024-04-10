import { gsap } from 'gsap';
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
  console.log('move', movementWidth);

  //   const tl = gsap.timeline();
  const tl = gsap.to(bannerTextWrap, {
    duration: movementSpeed,
    x: -movementWidth,
    onReverseComplete() {
      this.totalTime(movementSpeed * 100); // loop in reverse
    },
    repeat: -1,
    ease: 'none',
  });

  const clamp = gsap.utils.clamp(-5, 5);
  ScrollTrigger.create({
    onUpdate: (self) => {
      console.log(self);
      tl.timeScale(clamp(self.getVelocity() / 100));
      gsap.to(tl, { timeScale: 1, duration: 1, overwrite: true, ease: 'none' });
    },
  });
};
