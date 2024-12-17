import { gsap } from 'gsap';

export const modal = () => {
  class Modal {
    private element: HTMLElement;
    private openButton: HTMLElement;
    private closeButton: HTMLElement;

    constructor() {
      this.element = document.querySelector('.section_modal') as HTMLElement;
      this.openButton = document.querySelector('#modalOpen') as HTMLElement;
      this.closeButton = document.querySelector('.section_modal') as HTMLElement;

      this.setListeners();
    }

    private setListeners() {
      this.element.addEventListener('click', () => {
        this.closeModal();
      });
      this.openButton.addEventListener('click', () => {
        this.openModal();
      });
    }

    private openModal() {
      const tl = gsap.timeline();

      tl.fromTo(this.element, { display: 'none', opacity: 0 }, { display: 'block', opacity: 1 });
    }

    private closeModal() {
      const tl = gsap.timeline();

      tl.to(this.element, { display: 'none', opacity: 0 });
    }
  }

  new Modal();
};
export default modal;
