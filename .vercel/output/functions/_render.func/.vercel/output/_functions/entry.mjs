import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CC1W4Fdm.mjs';
import { manifest } from './manifest_CzK2188O.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/marcas/_marca_/_producto_/_sabor_.astro.mjs');
const _page2 = () => import('./pages/marcas/_marca_/_producto_.astro.mjs');
const _page3 = () => import('./pages/marcas/_marca_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/marcas/[marca]/[producto]/[sabor].astro", _page1],
    ["src/pages/marcas/[marca]/[producto].astro", _page2],
    ["src/pages/marcas/[marca].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c50b6cb4-5454-4ed1-8e0e-dc223f1217fe",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
