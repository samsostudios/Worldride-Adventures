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
      //   markers: true,
    },
  });
  st.from(sectionLabel, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' });
  st.from(bookContent, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' }, '<');
  st.from(bookImageWrap, { duration: dur, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.2');
  st.from(bookCharacters, { duration: dur, opacity: 0, ease: 'power4.out' }, '<0.5');

  bookComponent.addEventListener('mousemove', (e) => {
    const mX = e.movementX * 1.2;
    const mY = e.movementY * 1.2;

    gsap.to(bookImage, { x: mX, y: mY, ease: 'power2.out' });
  });
};

export const interactiveMotion = () => {
  const interactiveComponent = document.querySelector('.section_interactive') as HTMLElement;
  const interactiveButton = interactiveComponent.querySelector('a');

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: interactiveComponent,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });
  st.from(interactiveComponent, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' });

  const tl = gsap.timeline({
    onComplete: () => {
      setTimeout(() => {
        tl.restart();
      }, 2000);
    },
  });
  tl.to(interactiveButton, { duration: 0.5, scale: 1.1, ease: 'power4.inOut' });
  tl.to(interactiveButton, { duration: 0.5, scale: 1, ease: 'power4.inOut' });
  tl.to(interactiveButton, { duration: 0.5, scale: 1.1, ease: 'power4.inOut' });
  tl.to(interactiveButton, { duration: 0.5, scale: 1, ease: 'power4.inOut' });
};

export const storeMotion = () => {
  const storeComponent = document.querySelector('.section_shop') as HTMLElement;
  const backpackSection = storeComponent.querySelector('.shop_backpacks') as HTMLElement;
  const backHeader = backpackSection.children[0];
  const backContent = backpackSection.children[2];
  const storeSection = storeComponent.querySelector('.shop_store') as HTMLElement;
  const storeHeader = storeSection.children[0];
  const storeContent = storeSection.children[2];

  const stB = gsap.timeline({
    scrollTrigger: {
      trigger: backpackSection,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });
  stB.from([backHeader, backContent], {
    duration: 1,
    y: '2rem',
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out',
  });

  const stS = gsap.timeline({
    scrollTrigger: {
      trigger: storeSection,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });
  stS.from([storeHeader, storeContent], {
    duration: 1,
    y: '2rem',
    opacity: 0,
    stagger: 0.2,
    ease: 'power4.out',
  });
};

export const aboutMotion = () => {
  const aboutComponent = document.querySelector('.section_about') as HTMLElement;
  const aboutHeader = aboutComponent.querySelector('.about-author_header') as HTMLElement;
  const aboutStats = aboutComponent.querySelector('.about-author_stats') as HTMLElement;
  const aboutStatsChildren = [...aboutStats.childNodes];
  const aboutAuthorLeft = aboutComponent.querySelector('.about-author_main-left');
  const aboutAuthorRight = aboutComponent.querySelector('.about-author_main-right');

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: aboutComponent,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });

  st.from(aboutHeader, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' });
  st.from(
    aboutStats,
    { duration: 1, y: '2rem', opacity: 0, stagger: 0.2, ease: 'power4.out' },
    '<'
  );
  st.from(
    aboutStatsChildren,
    {
      duration: 1.5,
      y: '2rem',
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out',
    },
    '<0.5'
  );
  st.from(
    [aboutAuthorLeft, aboutAuthorRight],
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: 0.2,
      ease: 'power4.out',
    },
    '<'
  );
};

export const impactMotion = () => {
  const impactComponent = document.querySelector('.section_impact') as HTMLElement;
  const impactContent = impactComponent.querySelector('.impact_main-content');
  const impactMedia = impactComponent.querySelector('.impact_media');

  const st = gsap.timeline({
    scrollTrigger: {
      trigger: impactComponent,
      start: 'top 75%',
      end: 'top 75%',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });

  st.from(impactContent, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' });

  const st2 = gsap.timeline({
    scrollTrigger: {
      trigger: impactComponent,
      start: 'top 75%',
      end: 'bottom top',
      toggleActions: 'play none none reverse',
      scrub: true,
      // markers: true,
    },
  });
  st2.fromTo(
    impactMedia,
    {
      yPercent: 20,
      ease: 'none',
    },
    {
      yPercent: -20,
      ease: 'none',
    }
  );

  const tl = gsap.timeline({ repeat: -1 });
  setTimeout(() => {
    init();
  }, 2000);

  window.addEventListener('resize', () => {
    tl.pause();
    init();
    tl.restart();
  });

  function init() {
    const impactSlider = document.querySelector('.impact-media_list') as HTMLElement;
    const iChildren = [...impactSlider.children];

    const last = iChildren[iChildren.length - 1] as HTMLElement;
    const lastPos = last.getBoundingClientRect().right - impactSlider.getBoundingClientRect().width;

    const dur = 30;
    tl.to(impactSlider, { duration: dur, x: -lastPos, ease: 'linear' });
    tl.to(impactSlider, { duration: dur, x: 0, ease: 'linear' });
  }
};
