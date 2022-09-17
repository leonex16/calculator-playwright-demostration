import { getPreferColorScheme } from '../utils/prefers-color-schema';

(() => {
  const $html = window.document.documentElement;
  const currentPreferColorScheme = getPreferColorScheme();

  $html.classList.add(currentPreferColorScheme);
})();
