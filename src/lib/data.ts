export interface InformacionAdicional {
  [key: string]: string; 
}

export interface Sabor {
  sabor: string;
  imagenes: string[];
  informacionAdicional: InformacionAdicional;
}

export interface InfoTech {
  carbonation: string;
  technology: string; 
  sanitationCat: string;
  waterClass: string;
}

export interface Producto {
  producto: string;
  descripcion: string;
  calorias: string; 
  sweetenerSystem: string;
  paises: string[];
  sabores: Sabor[];
  infoTech: InfoTech;
}

export interface Marca {
  id: string;
  marca: string;
  productos: Producto[];
}


export const marcas: Marca[] = [
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