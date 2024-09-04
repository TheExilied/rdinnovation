/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import { m as marcas, $ as $$Layout } from '../chunks/data_DUtKDbtr.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$SliderMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="swiper mySwiper altura top-30" data-astro-cid-sxk3ees2> <div class="swiper-wrapper selector" data-astro-cid-sxk3ees2> <div class="swiper-slide" data-astro-cid-sxk3ees2><img class="object-contain mb-6" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53f59ee3-60ce-4d32-8885-c6f05457259c/dgahlii-2561436c-69ac-46b0-8660-6659d0cf5569.png/v1/fit/w_375,h_668/beer_glass_isolated_on_transparent_background__67__by_anavrin_ai_dgahlii-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvZGdhaGxpaS0yNTYxNDM2Yy02OWFjLTQ2YjAtODY2MC02NjU5ZDBjZjU1NjkucG5nIiwiaGVpZ2h0IjoiPD03MTIiLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzUzZjU5ZWUzLTYwY2UtNGQzMi04ODg1LWM2ZjA1NDU3MjU5Y1wvYW5hdnJpbi1haS00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.iwj2F4J67Y4gyQk3cGXHwjg5iHukSAM8mvnY1SM6nQA" alt="se me acabaron las ideas" data-astro-cid-sxk3ees2></div> <div class="swiper-slide selector" data-astro-cid-sxk3ees2> <img class="object-contain mb-6" src="https://www.rockstarenergy.co.uk/prod/s3fs-public/2022-04/punched-sour-apple-es.png" alt="un tragito de GTA" data-astro-cid-sxk3ees2></div> <div class="swiper-slide selector" data-astro-cid-sxk3ees2><img class="object-contain mb-6" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="calaca en una lata" data-astro-cid-sxk3ees2></div> <div class="swiper-slide selector" data-astro-cid-sxk3ees2> <a href="./productos/1" data-astro-cid-sxk3ees2> <img class="object-contain mb-6" src="../../public/bottle_polar_studio_drops_300px.png" alt="Erikson pasame una!" data-astro-cid-sxk3ees2> </a> </div> <div class="swiper-slide selector" data-astro-cid-sxk3ees2><img class="object-contain mb-6" src="https://212global.com/wp-content/uploads/2024/07/61a696f64f1abdd16726b63c_thumbnail-600x600.png" alt="Lata de Pepsi" data-astro-cid-sxk3ees2></div> </div> <div class="swiper-button-next" data-astro-cid-sxk3ees2></div> <div class="swiper-button-prev" data-astro-cid-sxk3ees2></div> <div class="swiper-pagination" data-astro-cid-sxk3ees2></div> </div>  `;
}, "C:/Development/projects/rdinnovation/src/components/SliderMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(`/marcas/${href}`, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Development/projects/rdinnovation/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full"> <h1>Experimento <span class="text-gradient">Innovation</span></h1> <section class="w-4/5 py-10 h-96 m-auto"> ${renderComponent($$result2, "SliderMenu", $$SliderMenu, {})} <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Botonazo
</span> </button> </section> <ul role="list" class="link-card-grid"> ${marcas.map((marca) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": marca.marca, "title": marca.marca, "body": marca.productos[0].descripcion })}`)} </ul> </main> ` })} `;
}, "C:/Development/projects/rdinnovation/src/pages/index.astro", void 0);

const $$file = "C:/Development/projects/rdinnovation/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
