window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('Worldride Impact');

  function initComponent(selector: string, importModule: () => Promise<{ default: () => void }>) {
    const element = document.querySelector(selector);
    if (element) {
      importModule().then((module) => {
        module.default(); // Assuming the module has a default export
      });
    }
  }

  initComponent('.hero_compoent', () => import('$components/bgSlider'));
});
