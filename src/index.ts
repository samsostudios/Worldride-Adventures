import { backpackComponent } from '$components/backpacks';
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
  console.log('/// Worldride Adventures ///');

  const isEditor = enviornmentCheck();
  if (!isEditor) {
    smoothScroll();
  }

  const device = getDevice();
  if (device !== 'desktop') {
    mobileNav();
  }

  const windowLocation = window.location.pathname;

  if (windowLocation === '/') {
    // ----------
    // Motion
    heroMotion();
    bannerMotion();
    bookMotion();
    interactiveMotion();
    backpackComponent();
    storeMotion();
    aboutMotion();
    impactMotion();
  } else if (windowLocation.includes('checkout') || windowLocation.includes('confirmation')) {
    // const lenis = smoothScroll();
    // lenis.stop();
    // setTimeout(() => {
    //   lenis.start();
    // }, 200);
  }
});
