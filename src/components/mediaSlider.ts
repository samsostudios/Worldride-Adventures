import { gsap } from 'gsap';

export const mediaSlider = () => {
  class TestimonialSlider {
    private tItems: HTMLElement[];
    private indicators: HTMLElement[] = [];
    private currentIndex: number;
    private autoRotateInterval: number;
    private intervalId: number | undefined;
    // private prevButton: HTMLButtonElement;
    // private nextButton: HTMLButtonElement;

    constructor() {
      this.tItems = [...document.querySelectorAll('.testimonials_item')].map(
        (item) => item as HTMLElement
      );
      this.currentIndex = 0;
      this.autoRotateInterval = 5000;
      // this.prevButton = prevButton;
      // this.nextButton = nextButton;

      this.init();
    }

    private init() {
      this.showCurrentItem();
      // this.prevButton.addEventListener('click', () => this.showPreviousItem());
      // this.nextButton.addEventListener('click', () => this.showNextItem());

      const tParent = document.querySelector('.impact_testimonials') as HTMLElement;
      const tWrapper = tParent.querySelector('.testimonials_wrapper');
      this.indicators = [...document.querySelectorAll('.indicator_item')] as HTMLElement[];

      this.indicators[0].classList.add('is-active');

      // const prevButton = document.querySelector(
      //   '.testimonials_control.is-next'
      // ) as HTMLButtonElement;
      // const nextButton = document.querySelector(
      //   '.testimonials_control.is-prev'
      // ) as HTMLButtonElement;
      // const tItems = [...tParent.querySelectorAll('.testimonials_item')] as HTMLElement[];

      // new TestimonialSlider(tItems, prevButton, nextButton);

      gsap.set(tWrapper, { height: '38vh' });
      this.tItems.forEach((item) => gsap.set(item, { position: 'absolute' }));

      this.setAutoRotate();
    }

    private showCurrentItem() {
      gsap.to(this.tItems, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          this.tItems.forEach((item, index) => {
            item.style.display = index === this.currentIndex ? 'block' : 'none';
          });

          gsap.to(this.tItems[this.currentIndex], { opacity: 1, duration: 0.5 });

          this.updateIndicators();
        },
      });
    }

    private updateIndicators() {
      this.indicators.forEach((indicator, index) => {
        indicator.classList.toggle('is-active', index === this.currentIndex);
      });
    }

    private showPreviousItem() {
      this.currentIndex = (this.currentIndex - 1 + this.tItems.length) % this.tItems.length;
      this.showCurrentItem();
    }

    private showNextItem() {
      this.currentIndex = (this.currentIndex + 1) % this.tItems.length;
      this.showCurrentItem();
    }

    private setAutoRotate() {
      this.intervalId = window.setInterval(() => {
        this.showNextItem();
      }, this.autoRotateInterval);
    }
  }
  new TestimonialSlider();
};
