import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, e as renderSlot, f as renderHead, d as addAttribute, b as createAstro } from './astro/server_B6mSkyqU.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="inline-flex items-center px-6 py-3 border-gradient-b-blue-green-fondo gradient-border-4 rounded-full text-gray-100 text-lg"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-5 p-1 "> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> <li> <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-yellow-300 block py-2 px-3  rounded md:bg-transparent  md:p-0" aria-current="page">Home</a> </li> <li> <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a> </li> <li> <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> </a> </li> <li> <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a> </li> <li> <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Development/projects/rdinnovation/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center my-6" data-astro-cid-3ef6ksr2> <!-- <nav class="w-1/2 justify-between text-white inline-flex items-center px-6 py-3 borde text-lg">
      <a href="#">
        Lorem Ipsum
      </a>
      <a href="#">
        Lorem Ipsum
      </a>
      <img src="#" alt="Logo de Pepsi">
      <a href="#" >
        Lorem Ipsum
      </a>
      <a href="#">
        Lorem Ipsum
      </a>
    </nav> --> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-3ef6ksr2": true })} </header> `;
}, "C:/Development/projects/rdinnovation/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- slider  --><link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"><link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"><!-- fin del slider --><meta name="generator"', "><title>", "</title>", "</head> <body> ", " ", ' <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"><\/script> <!-- slider  --> <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"><\/script> <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"><\/script> <script type="text/javascript" src="slick/slick.min.js"><\/script> <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"><\/script> <!-- fin del slider --> </body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Development/projects/rdinnovation/src/layouts/Layout.astro", void 0);

const marcas = [
  {
    "id": "1",
    "marca": "Pepsi",
    "productos": [
      {
        "producto": "Pepsi Black",
        "descripcion": "Establish Black Can as core No Sugar Cola and scale up through flavor line extensions to drive sales, engage the next generation of cola drinkers, and deliver product centered awareness that can provide incremental sales. Flavors available: Lime, Cherry, Vanilla, Ginger, Raspberry, Cream Soda, Lime & Mint, Mango, Tropical, Orange Tangerine, Forrest Berries, Pineapple Mint & Pineapple Coconut",
        "calorias": "0 kcal (12oz)",
        "sweetenerSystem": "Aspartame & Acesulfame-K or Aspartame, Acesulfame-K & Sucralose",
        "paises": ["mx"],
        "sabores": [
          {
            "sabor": "Lime",
            "imagenes": ["https://212global.com/wp-content/uploads/2024/07/61a696f64f1abdd16726b63c_thumbnail-600x600.png"],
            "informacionAdicional": {
              "Cantidad de Mango": "Si"
            }
          }
        ],
        "infoTech": {
          "carbonation": "3,6",
          "technology": "Cold-Fill",
          "sanitationCat": "1",
          "waterClass": "A"
        }
      }
    ]
  },
  {
    "id": "2",
    "marca": "Mirinda",
    "productos": [
      {
        "producto": "Mirinda",
        "descripcion": "Variety & exciting different new flavors which will not only bring fruity taste & refreshment but also deliver unique taste experience at gathering together & snacking occasions.",
        "calorias": "0 kcal (12oz)",
        "sweetenerSystem": "Aspartame & Acesulfame-K",
        "paises": ["pol"],
        "sabores": [
          {
            "sabor": "Blueberry orange",
            "imagenes": ["urlimg"],
            "informacionAdicional": {}
          },
          {
            "sabor": "Pomengranate grape",
            "imagenes": ["urlimg"],
            "informacionAdicional": {}
          }
        ],
        "infoTech": {
          "carbonation": "2,6",
          "technology": "Cold-Fill",
          "sanitationCat": "1",
          "waterClass": "A"
        }
      }
    ]
  },
  {
    "id": "3",
    "marca": "7UP",
    "productos": [
      {
        "producto": "7UP Citrus",
        "descripcion": "7up Flavor platform that allows us to connect with the consumer through unique, fun and social connection experiences.",
        "calorias": "0 kcal (12oz)",
        "sweetenerSystem": "Aspartame & Acesulfame-K",
        "paises": ["mx"],
        "sabores": [
          {
            "sabor": "citrus",
            "imagenes": ["citrus"],
            "informacionAdicional": {}
          }
        ],
        "infoTech": {
          "carbonation": "3,4",
          "technology": "Cold-Fill",
          "sanitationCat": "1",
          "waterClass": "A"
        }
      },
      {
        "producto": "7UP Hard",
        "descripcion": "The 7UP Lemon-Lime flavor you love with with a kick of alcohol. Perfect for when you want to have a good time, reconnect and unwind after a long day. All naturally flavoured. Cheers to the good vibes, reconnecting and making the most of moments.",
        "calorias": "100 kcal (12oz)",
        "sweetenerSystem": "ASK/Sucralose 5% Alcohol",
        "paises": ["cr"],
        "sabores": [
          {
            "sabor": "7UP hard",
            "imagenes": ["urlimg"],
            "informacionAdicional": {}
          }
        ],
        "infoTech": {
          "carbonation": "3,4",
          "technology": "Cold-Fill",
          "sanitationCat": "1",
          "waterClass": "A"
        }
      }
    ]
  },
  {
    "id": "4",
    "marca": "H2OH",
    "productos": [
      {
        "producto": "H2OH Flavors",
        "descripcion": "H2OH! is a no sugar, lightly carbonated (2.0 CO2) beverage with true-to-fruit flavors launched in 2006 in Argentina under the 7UP brand, the brand expanded to other countries and organically developed as a healthier alternative to CSDs. Contains juice and vitamins B in Brazil and some Argentina formulas.",
        "calorias": "0 kcal (12oz)",
        "sweetenerSystem": "Aspartame & Acesulfame-K",
        "paises": ["col", "br"],
        "sabores": [
          {
            "sabor": "Coconut lemonade",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Formula Composition": ""
            }
          },
          {
            "sabor": "Pitaya Limón",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Formula Composition": "Vitamin B and 2.5% lemon juice."
            }
          },
          {
            "sabor": "Sandía Limon",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Formula Composition": "No juice, no vitamins."
            }
          }
        ],
        "infoTech": {
          "carbonation": "2",
          "technology": "Cold-Fill",
          "sanitationCat": "1 and 2",
          "waterClass": "A"
        }
      }
    ]
  },
  {
    "id": "5",
    "marca": "Gatorade",
    "productos": [
      {
        "producto": "Gatorlit",
        "descripcion": "Gatorade the hydration expert, created the new Glatorlit for you, to provide rapid and effective hydration, giving your body what it needs to recover. Gatorlit's formula combines a higher electrolyte load, less sugar, and a rich flavor. Get the rehydration your body needs with Gatorlit.",
        "calorias": "47 kcal per 591 mL",
        "sweetenerSystem": "Sucralose & Acesulfame-K",
        "paises": ["mex"],
        "sabores": [
          {
            "sabor": "Watermelon",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Sodium": "490 mg per 591 mL",
              "Potassium": "350 mg per 591 mL",
              "Calcium": "120 mg per 591 mL",
              "Magnesium": "105 mg per 591 mL",
              "Chloride": "1040 mg per 591 mL"
            }
          },
          {
            "sabor": "Cherry-lime",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Sodium": "490 mg per 591 mL",
              "Potassium": "350 mg per 591 mL",
              "Calcium": "120 mg per 591 mL",
              "Magnesium": "105 mg per 591 mL",
              "Chloride": "1040 mg per 591 mL"
            }
          }
        ],
        "infoTech": {
          "carbonation": "0",
          "technology": "Hot-Fill",
          "sanitationCat": "4",
          "waterClass": "D2"
        }
      },
      {
        "producto": "Energy by G",
        "descripcion": "From the creators of Gatorade, the world's #1 sports drink, comes ENERGY by Gatorade. The first energy drink in the world designed and developed for athletes. Energy by Gatorade gives you that boost of energy you need to start performing at your maximum from minute zero, thanks to it’s formula developed specifically for sports practitioners.",
        "calorias": "0",
        "sweetenerSystem": "Sucralose & Acesulfame-K",
        "paises": ["br", "jam"],
        "sabores": [
          {
            "sabor": "Orange",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Sodium": "46 mg per 100 mL",
              "Potassium": "14 mg per 100 mL",
              "Vitamin": "B3, B5 and B6",
              "Caffeine": "32 mg/ 100 mL"
            }
          },
          {
            "sabor": "Fierce Berry",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Sodium": "46 mg per 100 mL",
              "Potassium": "14 mg per 100 mL",
              "Vitamin": "B3, B5 and B6",
              "Caffeine": "32 mg/ 100 mL"
            }
          }
        ],
        "infoTech": {
          "carbonation": "0",
          "technology": "Hot-Fill",
          "sanitationCat": "4",
          "waterClass": "D2"
        }
      }
    ]
  },
  {
    "id": "6",
    "marca": "Rockstar",
    "productos": [
      {
        "producto": "HardWorking Hustle",
        "descripcion": "Rockstar helps you stay awake, perform and keep on going until the job is done, giving you the energy you need when you need it.",
        "calorias": "25 kcal",
        "sweetenerSystem": "SPLENDA®",
        "paises": ["rus", "us"],
        "sabores": [
          {
            "sabor": "Hustle-Mango",
            "imagenes": ["urlimg"],
            "informacionAdicional": {
              "Vitamin C": "5mg/100ml",
              "Caffeine": "32 mg/100ml",
              "Niacin": "8 mg/100ml"
            }
          }
        ],
        "infoTech": {
          "carbonation": "2.6",
          "technology": "Cold-Fill",
          "sanitationCat": "1",
          "waterClass": "A"
        }
      }
    ]
  }
];

export { $$Layout as $, marcas as m };
