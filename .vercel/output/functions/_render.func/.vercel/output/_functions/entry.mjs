import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CC1W4Fdm.mjs';
import { manifest } from './manifest_2mDUR5bP.mjs';
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
    "middlewareSecret": "d2b05303-8ee7-4f14-8740-932bcca50d75",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
