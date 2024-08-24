
export interface Producto {
  id: string;
  titulo: string;
  descripcion: string;
  calorias: number;
  sweetener_system: string;
  additional_info: Array<Record<string, string>>;
  paises_disponibles: string[];
  imagenes: string[];
}

export const productos: Producto[] = [
    {
      "id": '1',
      "titulo": "Energy BY G",
      "descripcion": "Es una bebida energética diseñada para darte un impulso sin calorías.",
      "calorias": 0,
      "sweetener_system": "Sucralosa",
      "additional_info": [
        {"sodio": "44mg por cada 100ml"},
        {"potasio": "14mg por cada 100ml"},
        {"vitaminas": "A, B, C"},
        {"cafeina": "80mg por cada 250ml"}
      ],
      "paises_disponibles": ["USA", "MEX", "ESP", "ARG"],
      "imagenes": ["https://images.unsplash.com/photo-1625869014209-6f474d5ca1b0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1628200508115-3f23c3be57b3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
      "id": '2',
      "titulo": "Power Drink",
      "descripcion": "Una bebida isotónica que repone electrolitos.",
      "calorias": 50,
      "sweetener_system": "Stevia",
      "additional_info": [
        {"sodio": "100mg por cada 100ml"},
        {"potasio": "50mg por cada 100ml"},
        {"vitaminas": "B6, B12"}
      ],
      "paises_disponibles": ["BRA", "COL", "PER"],
      "imagenes": ["https://plus.unsplash.com/premium_photo-1664298401370-c9be81191ebf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
      "id": '3',
      "titulo": "Cola Max",
      "descripcion": "Refresco de cola sin azúcar, con un sabor intenso.",
      "calorias": 1,
      "sweetener_system": "Aspartame",
      "additional_info": [
        {"sodio": "20mg por cada 100ml"},
        {"potasio": "5mg por cada 100ml"},
        {"cafeina": "30mg por cada 330ml"},
        {"colorantes": "Caramelo E-150d"}
      ],
      "paises_disponibles": ["USA", "CAN", "MEX", "GBR"],
      "imagenes": ["https://images.unsplash.com/photo-1722660190908-d2cc47a82a23?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1696957024712-f478b2aa53a9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
      "id": '4',
      "titulo": "Limonada Fizz",
      "descripcion": "Refresco de limón con burbujas y sin calorías.",
      "calorias": 0,
      "sweetener_system": "Acesulfame K",
      "additional_info": [
        {"sodio": "10mg por cada 100ml"},
        {"potasio": "2mg por cada 100ml"},
        {"vitaminas": "C"},
        {"colorantes": "Ninguno"}
      ],
      "paises_disponibles": ["ESP", "FRA", "ITA", "DEU"],
      "imagenes": ["https://images.unsplash.com/photo-1681250919029-b322bf43e638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
      "id": '5',
      "titulo": "Naranja Burst",
      "descripcion": "Refresco de naranja con sabor natural y bajo en calorías.",
      "calorias": 30,
      "sweetener_system": "Stevia y Sucralosa",
      "additional_info": [
        {"sodio": "15mg por cada 100ml"},
        {"potasio": "8mg por cada 100ml"},
        {"vitaminas": "A, C"},
        {"azucares": "6g por cada 100ml"}
      ],
      "paises_disponibles": ["BRA", "ARG", "CHL", "URU"],
      "imagenes": ["https://plus.unsplash.com/premium_photo-1671014947847-ba033c6b9e19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    }
  ]
  