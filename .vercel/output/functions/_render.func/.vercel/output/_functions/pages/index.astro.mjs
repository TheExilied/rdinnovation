/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import { m as marcas, $ as $$Layout } from '../chunks/data_DmkjwO25.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$SliderMenu = createComponent(($$result, $$props, $$slots) => {
  const mango = "https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp";
  return renderTemplate`${maybeRenderHead()}<div class="swiper mySwiper mt-72" data-astro-cid-sxk3ees2> <div class="swiper-wrapper selector" data-astro-cid-sxk3ees2> <div${addAttribute(`background-image: url('${mango}');`, "style")} class="img-cont2 swiper-slide" data-astro-cid-sxk3ees2> <img class="object-contain" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="lorem" data-astro-cid-sxk3ees2> </div> <div${addAttribute(`background-image: url('${mango}');`, "style")} class="img-cont2 swiper-slide" data-astro-cid-sxk3ees2> <img class="object-contain" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="lorem" data-astro-cid-sxk3ees2> </div> <div${addAttribute(`background-image: url('${mango}');`, "style")} class="img-cont2 swiper-slide" data-astro-cid-sxk3ees2> <img class="object-contain" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="lorem" data-astro-cid-sxk3ees2> </div> <div${addAttribute(`background-image: url('${mango}');`, "style")} class="img-cont2 swiper-slide" data-astro-cid-sxk3ees2> <a href="./productos/1" data-astro-cid-sxk3ees2> <img class="object-contain" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="lorem" data-astro-cid-sxk3ees2> </a> </div> <div${addAttribute(`background-image: url('${mango}');`, "style")} class="img-cont2 swiper-slide" data-astro-cid-sxk3ees2> <img class="object-contain" src="https://suplementosalmayor.cl/wp-content/uploads/2023/04/QHUSH-RR1-IMG-OPT_2000x.webp" alt="lorem" data-astro-cid-sxk3ees2> </div> </div> <div class="swiper-button-next" data-astro-cid-sxk3ees2></div> <div class="swiper-button-prev" data-astro-cid-sxk3ees2></div> <div class="swiper-pagination" data-astro-cid-sxk3ees2></div> </div>  `;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full"> <section class="w-4/5 m-auto"> ${renderComponent($$result2, "SliderMenu", $$SliderMenu, {})} </section> <ul role="list" class="link-card-grid"> ${marcas.map((marca) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "href": marca.marca, "title": marca.marca, "body": marca.productos[0].descripcion })}`)} </ul> </main> ` })} `;
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
