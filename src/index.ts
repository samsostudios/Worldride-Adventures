import { mobileNav } from '$components/mobileNav';
import {
  aboutMotion,
  bannerMotion,
  bookMotion,
  heroMotion,
  impactMotion,
  interactiveMotion,
  storeMotion,
} from '$motion/home';
import { enviornmentCheck } from '$utils/enviornmentCheck';
import { getDevice } from '$utils/getDevice';
import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// mainJS ///');

  const isEditor = enviornmentCheck();
  if (!isEditor) {
    smoothScroll();
  }

  const device = getDevice();
  if (device !== 'desktop') {
    mobileNav();
  }

  const windowLocation = window.location.href;

  if (windowLocation === '/') {
    // ----------
    // Motion
    heroMotion();
    bannerMotion();
    bookMotion();
    interactiveMotion();
    storeMotion();
    aboutMotion();
    impactMotion();
  } else if (windowLocation.includes('checkout')) {
    const lenis = smoothScroll();

    lenis.stop();
    setTimeout(() => {
      lenis.start();
    }, 200);
  }
});
