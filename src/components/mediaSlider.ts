import { gsap } from 'gsap';

class TestimonialSlider {
  private tItems: HTMLElement[];
  private currentIndex: number;
  private prevButton: HTMLButtonElement;
  private nextButton: HTMLButtonElement;

  constructor(tItems: HTMLElement[], prevButton: HTMLButtonElement, nextButton: HTMLButtonElement) {
    this.tItems = tItems;
    this.currentIndex = 0;
    this.prevButton = prevButton;
    this.nextButton = nextButton;

    this.init();
  }

  private init() {
    this.showCurrentItem();
    this.prevButton.addEventListener('click', () => this.showPreviousItem());
    this.nextButton.addEventListener('click', () => this.showNextItem());
  }

  private showCurrentItem() {
    this.tItems.forEach((item, index) => {
      item.style.display = index === this.currentIndex ? 'block' : 'none';
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
}

export const mediaSlider = () => {
  const tParent = document.querySelector('.impact_testimonials') as HTMLElement;
  const tWrapper = tParent.querySelector('.testimonials_wrapper');

  const prevButton = document.querySelector('.testimonials_control.is-next') as HTMLButtonElement;
  const nextButton = document.querySelector('.testimonials_control.is-prev') as HTMLButtonElement;
  const tItems = [...tParent.querySelectorAll('.testimonials_item')] as HTMLElement[];

  new TestimonialSlider(tItems, prevButton, nextButton);

  gsap.set(tWrapper, { height: '30vh' });
  gsap.set(tItems, { position: 'absolute' });
};
