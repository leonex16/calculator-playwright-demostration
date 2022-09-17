// @ts-check

const isLightSchemeActive = window.matchMedia('(prefers-color-scheme:light)').matches;

export const getPreferColorScheme = () => isLightSchemeActive ? 'light' : 'dark';
