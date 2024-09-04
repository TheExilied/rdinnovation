/* empty css                                       */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import { m as marcas, $ as $$Layout } from '../../../chunks/data_DUtKDbtr.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  const paths = [];
  marcas.forEach((marca) => {
    marca.productos.forEach((producto) => {
      producto.sabores.forEach((sabor) => {
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
const $$producto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$producto;
  const { marca, producto, sabor, index } = Astro2.params;
  const miMarca = marcas.find((m) => m.marca === marca);
  const miProducto = miMarca.productos.find((p) => p.producto === producto);
  const miSabor = miProducto.sabores.find((s) => s.sabor === sabor);
  miSabor?.imagenes[parseInt(index)];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Producto ${miProducto?.producto}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full h-screen flex justify-center items-center gap-10"> <div class="flex justify-center items-start flex-col"> <h1 class="text-2xl text-white font-bold">Producto: ${miProducto?.producto}</h1> <h2 class="text-white text-lg">Sabor: ${miSabor?.sabor}</h2> <p class="text-white text-base">${miProducto?.descripcion}</p> ${miProducto?.sabores.map((miSabor2, index2) => renderTemplate`<div${addAttribute(index2, "key?")} class="bg-slate-950 text-zinc-200 text-lg p-4"> <h3>${miSabor2.sabor}</h3>  <p class="text-zinc-300 text-base"> ${miSabor2.informacionAdicional[0]} </p> <a${addAttribute(`/marcas/${marca}/${miProducto.producto}/${miSabor2.sabor}`, "href")} class="py-3 w-full bg-pink-600 text-zinc-300 text-lg block text-center mt-4">
Ver ${miProducto.producto} sabor ${miSabor2.sabor} </a> </div>`)} </div> </section> ` })}`;
}, "C:/Development/projects/rdinnovation/src/pages/marcas/[marca]/[producto].astro", void 0);

const $$file = "C:/Development/projects/rdinnovation/src/pages/marcas/[marca]/[producto].astro";
const $$url = "/marcas/[marca]/[producto]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$producto,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
