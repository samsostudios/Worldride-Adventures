import { gsap } from 'gsap';

export const backpackComponent = () => {
  const backpackElements = [...document.querySelectorAll('.shop-backpacks_item')];

  init();

  for (const i in backpackElements) {
    const curElement = backpackElements[i] as HTMLElement;
    const mainMedia = curElement.querySelector('.backpacks-item_main-image');
    const featureMedia = [...curElement.querySelectorAll('.backpacks-item_image')];
    const featureToggles = [...curElement.querySelectorAll('.backpacks-item_features-link')];

    toggle360(curElement);

    let storeCurrent = 0;
    let firstClick = true;

    for (let j = 0; j < featureToggles.length; j++) {
      const curToggle = featureToggles[j] as HTMLElement;
      curToggle.addEventListener('click', () => {
        if (firstClick) {
          gsap.to(mainMedia, { zIndex: 0 });
        }

        const currentImage = featureMedia[storeCurrent];
        const curToggle = featureToggles[storeCurrent];
        const nextImage = featureMedia[j];
        const nextToggle = featureToggles[j];

        if (storeCurrent === j) {
          if (storeCurrent === 0 && j === 0) {
            gsap.to(currentImage, { zIndex: 1 });
            gsap.to(curToggle, {
              borderColor: '#C8102E',
              backgroundColor: '#f6f4ee',
              ease: 'power1.out',
            });
          }
        } else if (storeCurrent !== j) {
          const tl = gsap.timeline();
          tl.to(nextImage, { zIndex: 1 });
          tl.to(currentImage, { zIndex: 0 }, '<');
          tl.to(
            nextToggle,
            {
              borderColor: '#C8102E',
              backgroundColor: '#f6f4ee',
              ease: 'power1.out',
            },
            '<'
          );
          tl.to(
            curToggle,
            {
              borderColor: 'rgba(9, 11, 26, 0.3)',
              backgroundColor: 'transparent',
              ease: 'power1.out',
            },
            '<'
          );

          firstClick = false;
          storeCurrent = j;
        }
      });
    }
  }

  function init() {
    const featureMedia = [...document.querySelectorAll('.backpacks-item_image')];
    gsap.set(featureMedia, { zIndex: 0 });
  }

  function toggle360(parent: HTMLElement) {
    const toggleButton = parent.querySelector('.backpacks-item_360') as HTMLElement;
    const toggleOpen = toggleButton.children[0];
    const toggleClose = toggleButton.children[1];
    const hideContent = parent.querySelector('.backpacks-items_media-wrap');

    let isOpen = false;

    toggleButton.addEventListener('click', () => {
      isOpen = !isOpen;

      if (isOpen === true) {
        const tl = gsap.timeline();
        tl.to(hideContent, { opacity: 0, pointerEvents: 'none' });
        tl.to(toggleOpen, { opacity: 0 }, '<');
        tl.set(toggleOpen, { display: 'none' });
        tl.set(toggleClose, { display: 'block' });
        tl.set(toggleButton, { padding: '1.2rem' });
        tl.to(toggleClose, { opacity: 1 });
      } else {
        const tl = gsap.timeline();
        tl.to(hideContent, { opacity: 1, pointerEvents: 'auto' });
        tl.to(toggleClose, { opacity: 0 }, '<');
        tl.set(toggleClose, { display: 'none' });
        tl.set(toggleOpen, { display: 'block' });
        tl.set(toggleButton, { padding: '0.5rem' });
        tl.to(toggleOpen, { opacity: 1 });
      }
    });
  }
};
