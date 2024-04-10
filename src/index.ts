import { mobileNav } from '$components/mobileNav';
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
});
