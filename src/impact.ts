window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Worldride Impact');

  function initComponent(selector: string, importModule: () => Promise<{ default: () => void }>) {
    const element = document.querySelector(selector);
    if (element) {
      importModule().then((module) => {
        module.default();
      });
    }
  }

  initComponent('.hero_compoent', () => import('$components/bgSlider'));
  initComponent('.section_modal', () => import('$components/modal'));
});
