/* eslint-disable */
!(function setDpr() {
    const meta = document.createElement('meta');
    const dpr = window.devicePixelRatio;
    const solt = document.getElementsByTagName('head')[0];
    const docEl = document.documentElement;
    docEl.setAttribute('dpr', dpr);
    meta.setAttribute('name', 'viewport');
    if (dpr === 2) {
        meta.setAttribute('content', 'initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
    }
    if (dpr === 3) {
        meta.setAttribute('content', 'initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
    }
    solt.appendChild(meta);
}());
