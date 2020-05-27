export var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
export var canUseWorkers = typeof Worker !== 'undefined';
export var canUseEventListeners = canUseDOM && !!(window.addEventListener || window.attachEvent);
export var canUseViewport = canUseDOM && !!window.screen;
