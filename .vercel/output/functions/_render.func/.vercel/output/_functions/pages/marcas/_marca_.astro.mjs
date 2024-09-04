/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import { m as marcas, $ as $$Layout } from '../../chunks/data_DUtKDbtr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return marcas.map((marca) => ({
    params: {
      marca: marca.marca
    }
  }));
}
const $$marca = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$marca;
  const { marca } = Astro2.params;
  const miMarca = marcas.find((miMarca2) => miMarca2.marca === marca);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Producto ${miMarca?.marca}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-screen flex flex-col justify-center items-center gap-10"> <h2 class="text-center text-3xl font-bold mb-6 text-zinc-200">${miMarca.marca}</h2> <div class="w-1/2 bg-slate-600 mx-auto flex justify-around"> ${miMarca?.productos.map((miProducto, index) => renderTemplate`<div${addAttribute(index, "key?")} class="bg-slate-950 text-zinc-200 text-lg p-4"> <h3>${miProducto.producto}</h3> <img0${addAttribute(`${miProducto.sabores[0].imagenes}`, "src")}${addAttribute(`Foto del producto ${miProducto.producto}`, "alt")} class="w-full h-auto mb-4"></img0> <p class="text-zinc-300 text-base"> ${miProducto.descripcion} </p> <a${addAttribute(`/marcas/${marca}/${miProducto.producto}`, "href")} class="py-3 w-full bg-pink-600 text-zinc-300 text-lg block text-center mt-4">
Ver ${miProducto.producto} </a> </div>`)} </div> </div> ` })}`;
}, "C:/Development/projects/rdinnovation/src/pages/marcas/[marca].astro", void 0);

const $$file = "C:/Development/projects/rdinnovation/src/pages/marcas/[marca].astro";
const $$url = "/marcas/[marca]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$marca,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
