/* empty css                                          */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../../../chunks/astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import { m as marcas, $ as $$Layout } from '../../../../chunks/data_DmkjwO25.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const paths = [];
  marcas.forEach((marca) => {
    marca.productos.forEach((producto) => {
      producto.sabores.forEach((sabor) => {
        console.log("Marca:", marca.marca);
        console.log("Producto:", producto.producto);
        console.log("Sabor:", sabor.sabor);
        paths.push({
          params: {
            marca: marca.marca,
            producto: producto.producto,
            sabor: sabor.sabor
          }
        });
      });
    });
  });
  return paths;
}
const $$sabor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$sabor;
  const { marca, producto, sabor } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Informaci\xF3n Adicional ` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-6xl text-center font-semibold text-emerald-400 mt-12">Lo nuedo de ${marca} es ${producto} sabor a ${sabor}</h1> ` })}`;
}, "C:/Development/projects/rdinnovation/src/pages/marcas/[marca]/[producto]/[sabor].astro", void 0);

const $$file = "C:/Development/projects/rdinnovation/src/pages/marcas/[marca]/[producto]/[sabor].astro";
const $$url = "/marcas/[marca]/[producto]/[sabor]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$sabor,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
