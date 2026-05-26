export type Dish = {
  name: string;
  desc?: string;
  price?: string;
  variants?: { label: string; price: string }[];
  allergens?: string;
  badges?: string[];
};

export type Category = {
  id: string;
  label: string;
  intro?: string;
  dishes: Dish[];
};

export const karte: Category[] = [
  {
    id: "vegetarisch",
    label: "Vegetarisch",
    dishes: [
      {
        name: "Gerösteter Schafskäse",
        desc: "Schafskäsescheibchen gegrillt mit Tzatziki, Salatgarnitur und ofenfrischem Baguette",
        price: "10,80 €",
        allergens: "Mi, gl",
      },
      {
        name: "Überbackener Camembert",
        desc: "mit Preiselbeeren, Salatgarnitur und ofenfrischem Baguette",
        price: "11,80 €",
        allergens: "Mi, Ei, gl",
      },
      {
        name: "Vegetarische Käsespätzle",
        desc: "mit Salatgarnitur",
        price: "11,80 €",
        allergens: "Mi, Ei, gl",
      },
    ],
  },
  {
    id: "salate",
    label: "Salate",
    dishes: [
      {
        name: "Pak Choi Salat",
        desc: "mit Pak-Choi-Nudeln, Tomaten, Gurken, Paprika, Sprossen und ofenfrischem Baguette",
        price: "13,50 €",
        allergens: "Kr, Sn, gl",
      },
      {
        name: "Marktsalat",
        desc: "mit Hähnchenstreifen, Tomaten, Gurken, Ei und ofenfrischem Baguette",
        price: "12,30 €",
        allergens: "Ei, Mi, gl, Se",
      },
      {
        name: "Backstüble-Salat (Variante)",
        desc: "mit Schinken, Käse, Ei und ofenfrischem Baguette",
        price: "10,50 €",
        allergens: "4, 7, 8, Ei, Mi, gl, Se",
      },
      {
        name: "Griechischer Bauernsalat",
        desc: "mit Gurken, Tomaten, Schafskäse, Oliven, Tzatziki und ofenfrischem Baguette",
        price: "10,80 €",
        allergens: "Ei, Mi, gl, Se",
      },
      {
        name: "Salat-Pizza",
        desc: "mit Thunfisch, Oliven, Zwiebeln, Ei und ofenfrischem Baguette",
        price: "10,80 €",
        allergens: "4, 7, Ei, Mi, gl, Se, Fi",
      },
      {
        name: "Backstüble-Salat",
        desc: "mit gebratenen Rindfleischstreifen, Paprika, Sprossen und ofenfrischem Baguette",
        price: "13,50 €",
        allergens: "Sn, gl, Ei",
      },
      {
        name: "Mozzarella-Tomaten-Salat",
        desc: "mit Knoblauch-Oliven-Öl, Parmesansplittern und ofenfrischem Baguette",
        price: "10,20 €",
        allergens: "Mi, Sn, gl, Ei",
      },
      {
        name: "Beilagensalat",
        desc: "mit Joghurtdressing",
        price: "3,80 €",
        allergens: "Mi",
      },
      {
        name: "Kleiner grüner Salat",
        desc: "mit Joghurtdressing",
        price: "3,00 €",
        allergens: "Mi",
      },
      {
        name: "Baguette zusätzlich",
        price: "1,50 €",
        allergens: "gl",
      },
    ],
    intro:
      "Zu allen Salaten bieten wir Joghurtdressing (Mi) oder Essig-Öl-Dressing (Sn, Sw) an.",
  },
  {
    id: "fingerfood",
    label: "Fingerfood",
    dishes: [
      { name: "Schale Oliven", price: "3,50 €" },
      { name: "Schale Peperoni", price: "3,50 €" },
      { name: "Schale Schafskäse", price: "5,00 €", allergens: "Mi" },
      { name: "Wedges mit Sour Cream", price: "4,80 €", allergens: "Sn, Mi" },
      { name: "Pommes Frites", price: "4,00 €" },
      {
        name: "Ketchup oder Mayonnaise (extra)",
        price: "0,30 €",
        allergens: "Sn, Ei",
      },
      {
        name: "Sour Cream oder Tzatziki (extra)",
        price: "1,00 €",
        allergens: "Mi",
      },
    ],
  },
  {
    id: "flammkuchen",
    label: "Flammkuchen",
    dishes: [
      {
        name: "Normandie",
        desc: "mit Crème fraîche, Camembert und Preiselbeeren",
        price: "9,30 €",
        allergens: "gl, Mi",
      },
      {
        name: "Elsässer Art",
        desc: "mit Speck, Zwiebeln, Crème fraîche",
        price: "8,80 €",
        allergens: "gl, Mi, 4, 7",
      },
      {
        name: "Sylter Art",
        desc: "mit Lachsstreifen, Shrimps, Zwiebeln und Crème fraîche",
        price: "11,80 €",
        allergens: "gl, Mi, Se, Fi, Se",
      },
      {
        name: "Athener Art",
        desc: "mit Schafskäse, Oliven, Peperoni und Crème fraîche",
        price: "9,80 €",
        allergens: "gl, Mi",
      },
      {
        name: "Mailänder Art",
        desc: "mit Tomaten, Mozzarella, Zwiebeln und Crème fraîche",
        price: "9,80 €",
        allergens: "gl, Mi",
      },
    ],
  },
  {
    id: "burger",
    label: "Burger",
    intro: "Alle Burger aus Rindfleisch, ca. 180 g Rohgewicht.",
    dishes: [
      {
        name: "Hamburger XL",
        desc: "mit Salat, Ketchup, Mayonnaise, Zwiebeln, Gurken und Tomaten",
        allergens: "Sn, Ei, gl, Ss, Mi",
        variants: [
          { label: "Pur", price: "8,80 €" },
          { label: "mit Pommes Frites", price: "11,80 €" },
          { label: "mit Wedges und Sour Cream", price: "12,80 €" },
        ],
      },
      {
        name: "Cheeseburger XL",
        desc: "mit Käse, Salat, Ketchup, Mayonnaise, Zwiebeln, Gurken und Tomaten",
        allergens: "Sn, Ei, gl, Ss, Mi",
        variants: [
          { label: "Pur", price: "9,80 €" },
          { label: "mit Pommes Frites", price: "12,80 €" },
          { label: "mit Wedges und Sour Cream", price: "12,80 €" },
        ],
      },
      {
        name: "BBQ-Burger XL",
        desc: "mit Salat, BBQ-Sauce, Zwiebeln und Gurken",
        allergens: "Sn, Ei, gl, Ss, Mi",
        variants: [
          { label: "Pur", price: "9,80 €" },
          { label: "mit Pommes Frites", price: "12,80 €" },
          { label: "mit Wedges und Sour Cream", price: "12,80 €" },
        ],
      },
      {
        name: "Chili-Cheeseburger XL",
        desc: "mit Käse, Salat, Ketchup, Mayonnaise, Tomaten, Zwiebeln, Gurken und Jalapeños",
        allergens: "Sn, Ei, gl, Ss, Mi",
        variants: [
          { label: "Pur", price: "9,80 €" },
          { label: "mit Pommes Frites", price: "12,80 €" },
          { label: "mit Wedges und Sour Cream", price: "13,80 €" },
        ],
      },
      {
        name: "Bacon-Cheeseburger XL",
        desc: "mit Käse, Salat, Ketchup, Mayonnaise, Tomaten, Zwiebeln, Gurken und Bacon",
        allergens: "Sn, Ei, gl, Ss, Mi",
        variants: [
          { label: "Pur", price: "—" },
          { label: "mit Pommes Frites", price: "12,80 €" },
          { label: "mit Wedges und Sour Cream", price: "13,80 €" },
        ],
      },
      {
        name: "Extras",
        desc: "extra Bacon + 1,00 €  ·  doppelt Fleisch + 5,50 €  ·  extra Käse + 1,00 €",
      },
    ],
  },
  {
    id: "schnitzel",
    label: "Schnitzel",
    intro: "BEILAGEN: Pommes Frites, Kroketten (gl), Spätzle (gl, Ei) oder Salat.",
    dishes: [
      {
        name: "Klassisches Schnitzel",
        desc: "vom Schweinerücken",
        price: "12,80 €",
        allergens: "gl, Ei",
      },
      {
        name: "Jägerschnitzel",
        desc: "mit Spaghetti Bolognese und frischem Parmesan",
        price: "16,80 €",
        allergens: "gl, Ei, Mi",
      },
      {
        name: "Rahmschnitzel",
        desc: "mit Beilage und Käse überbacken",
        price: "13,80 €",
        allergens: "gl, Ei, Mi",
      },
      {
        name: "Cordon Bleu",
        desc: "mit Beilage und mit Schinken und Käse gefüllt",
        price: "15,20 €",
        allergens: "gl, Ei, Mi, 4, 7, 8",
      },
    ],
  },
  {
    id: "vom-grill",
    label: "Vom Grill",
    dishes: [
      {
        name: "Schwabenpfännle",
        desc: "Geschnetzeltes an Champignon-Rahmsoße mit Spätzle",
        price: "15,80 €",
        allergens: "Mi, gl, Ei",
      },
      {
        name: "Rumpsteak „Natur“",
        desc: "mit Kräuterbutter und Beilage",
        price: "14,80 €",
        allergens: "Mi, So",
      },
      {
        name: "Schweinerückensteak „Natur“",
        desc: "mit Kräuterbutter und Beilage",
        price: "13,80 €",
        allergens: "Mi, So",
      },
      {
        name: "Schweinerückensteak „Jäger Art“",
        desc: "mit Champignon-Rahmsoße und Beilage",
        price: "14,80 €",
        allergens: "Mi, Se",
      },
      {
        name: "Hüftensteak (ohne Fettrand)",
        desc: "mit frischem Baguette",
        price: "20,80 €",
        allergens: "Sn, Se, gl",
      },
      {
        name: "Hüftensteak (ohne Fettrand) – Variante",
        price: "22,20 €",
        allergens: "Sn, Se",
      },
      {
        name: "Rumpsteak „Classico“ (ohne Fettrand)",
        desc: "mit Kräuterbutter und Beilage",
        price: "22,20 €",
        allergens: "Mi, So",
      },
      {
        name: "Hüftensteak (ohne Fettrand)",
        desc: "mit Madagaskarpfeffersauce und Beilage",
        price: "22,80 €",
        allergens: "Mi, gl, Ei, gl",
      },
      {
        name: "Extras",
        desc:
          "BBQ-Sauce extra (hausgemacht) + 1,00 €  ·  Chili extra (hausgemacht) + 1,50 €  ·  Champignon-Rahmsoße extra + 2,00 €  ·  Kräuterbutter extra (hausgemacht) + 1,00 €  ·  100 g mehr Aufpreis + 8,50 €",
      },
    ],
  },
  {
    id: "wurst-mehr",
    label: "Wurst & Mehr",
    dishes: [
      {
        name: "Wurstsalat mit Baguette",
        desc: "kleine Portion abzüglich 1,00 €",
        price: "8,20 €",
        allergens: "4, 7, 8, gl, Ei",
      },
      {
        name: "Wurstsalat mit Pommes Frites",
        desc: "kleine Portion abzüglich 1,00 €",
        price: "9,20 €",
        allergens: "4, 7, 8",
      },
      {
        name: "Schweizer Wurstsalat mit Baguette",
        desc: "kleine Portion abzüglich 1,00 €",
        price: "9,20 €",
        allergens: "4, 7, 8, gl, Ei",
      },
      {
        name: "Schweizer Wurstsalat mit Pommes Frites",
        desc: "kleine Portion abzüglich 1,00 €",
        price: "10,20 €",
        allergens: "4, 7, 8",
      },
      {
        name: "Schinkennudeln",
        desc: "mit Ei und Salatbeilage",
        price: "10,80 €",
        allergens: "4, 7, 8, Ei, Mi",
      },
      {
        name: "Spaghetti Bolognese",
        desc: "mit frischem Parmesan",
        price: "9,80 €",
        allergens: "Mi",
      },
      {
        name: "Spaghetti Aglio e Olio (VEGAN)",
        desc: "mit Knoblauch, Olivenöl, Jalapeños",
        price: "9,30 €",
        badges: ["Vegan"],
      },
      {
        name: "Parmesan Extra",
        price: "1,00 €",
        allergens: "Mi",
      },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    dishes: [
      {
        name: "Kaiserschmarrn",
        desc: "mit Apfelmus",
        price: "8,80 €",
        allergens: "Mi, Ei, Sf, 3, So",
      },
      {
        name: "Schokoküchle",
        desc: "mit Vanilleeis und Sahne",
        price: "7,80 €",
        allergens: "Mi, Sf, Ei, gl, So",
      },
      {
        name: "Affogato al Caffè",
        desc: "heißer Espresso mit Vanilleeis und Sahne",
        price: "4,80 €",
        allergens: "Mi",
      },
    ],
  },
];

export const allergenInfo: { code: string; text: string }[] = [
  { code: "gl", text: "Glutenhaltiges Getreide" },
  { code: "gl1", text: "Weizen" },
  { code: "gl2", text: "Roggen" },
  { code: "gl3", text: "Gerste" },
  { code: "gl4", text: "Hafer" },
  { code: "gl5", text: "Dinkel" },
  { code: "gl6", text: "Kamut / Hybridstämme" },
  { code: "Kr", text: "Krebstiere und Krebstiererzeugnisse" },
  { code: "Ei", text: "Eier" },
  { code: "Fi", text: "Fisch und Fischerzeugnisse" },
  { code: "Er", text: "Erdnüsse" },
  { code: "So", text: "Soja und Sojaerzeugnisse" },
  { code: "Mi", text: "Milch und Milcherzeugnisse (Laktose)" },
  { code: "Sf", text: "Schalenfrüchte" },
  { code: "Sf1", text: "Haselnuss" },
  { code: "Sf2", text: "Walnuss" },
  { code: "Sf3", text: "Mandel" },
  { code: "Sf4", text: "Pistazie" },
  { code: "Sf5", text: "Cashew" },
  { code: "Sf6", text: "Pekannuss" },
  { code: "Sf7", text: "Macadamianuss / Queenslandnuss" },
  { code: "Se", text: "Sellerie und Sellerieerzeugnisse" },
  { code: "Sn", text: "Senf und Senferzeugnisse" },
  { code: "Ss", text: "Sesamsamen und Sesamsamenerzeugnisse" },
  { code: "Sw", text: "Schwefeldioxid und Sulfite" },
  { code: "Lu", text: "Lupinen" },
  { code: "Wt", text: "Weichtiere" },
];

export const zusatzstoffe: { code: string; text: string }[] = [
  { code: "1", text: "Coffeinhaltig" },
  { code: "2", text: "mit Farbstoff" },
  { code: "3", text: "mit Süßungsmittel" },
  { code: "4", text: "mit Antioxidationsmittel" },
  { code: "5", text: "Chininhaltig" },
  { code: "6", text: "Taurinhaltig" },
  { code: "7", text: "mit Konservierungsstoff" },
  { code: "8", text: "Nitritpökelsalz" },
  { code: "9", text: "enthält eine Phenylalaninquelle" },
];
