import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const smoothScroll = () => {
  const lenis = new Lenis({
    // duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(90, -2 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  });
  lenis.on('scroll', (e: Lenis) => {
    // console.log(e);
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
    ScrollTrigger.update();
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
};
