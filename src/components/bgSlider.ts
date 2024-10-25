import { gsap } from 'gsap';

export const bgSlider = () => {
  class BGSlider {
    private component: HTMLElement;
    private images: HTMLElement[];
    private currentIndex: number;
    private autoRotateInterval: number;

    constructor() {
      this.images = [...document.querySelectorAll('.hero_bg-img')].map(
        (item) => item as HTMLElement
      );
      this.currentIndex = 0;
      this.component = document.querySelector('.hero_compoent') as HTMLElement;
      this.autoRotateInterval = parseInt(this.component.dataset.slideSpeed as string) * 1000;

      this.init();
      this.sliderControl();
    }

    private init() {
      this.images.forEach((image, index) => {
        gsap.set(image, { autoAlpha: index === 0 ? 1 : 0, ease: 'power2.out' });
      });
    }

    private switchSlide(nextIndex: number) {
      const totalSlides = this.images.length;

      // Wrap logic
      if (nextIndex >= totalSlides) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = totalSlides - 1;
      }

      if (nextIndex !== this.currentIndex) {
        const tl = gsap.timeline();

        tl.to(this.images[this.currentIndex], { autoAlpha: 0, duration: 0.5 }).to(
          this.images[nextIndex],
          { autoAlpha: 1, duration: 0.5 },
          '<'
        );

        this.currentIndex = nextIndex;
      }
    }

    private sliderControl() {
      setInterval(() => {
        this.switchSlide(this.currentIndex + 1);
      }, this.autoRotateInterval);
    }
  }
  new BGSlider();
};
export default bgSlider;
