import { NationalityToCountryCode } from "./types";

export const teamColors = {
  red_bull: { from: "#1E41FF", to: "#1e293b" },
  mercedes: { from: "#00D2BE", to: "#115e59" },
  ferrari: { from: "#DC0000", to: "#991b1b" },
  mclaren: { from: "#FF8700", to: "#9a3412" },
  alpine: "#0090FF",
  aston_martin: "#006F62",
  alpha_tauri: "#002A72",
  haas: "#F1F1F1",
  williams: "#0056A0",
  alfa_romeo: "#900000",
};

export const nationalityToCountryCode: NationalityToCountryCode = {
  American: "us",
  British: "gb",
  Canadian: "ca",
  French: "fr",
  German: "de",
  Italian: "it",
  Japanese: "jp",
  Mexican: "mx",
  Russian: "ru",
  Spanish: "es",
  Australian: "au",
  Chinese: "cn",
  Brazilian: "br",
  Indian: "in",
  "South African": "za",
  "South Korean": "kr",
  Dutch: "nl",
  Swedish: "se",
  Swiss: "ch",
  Belgian: "be",
  Portuguese: "pt",
  Argentinian: "ar",
  Chilean: "cl",
  Colombian: "co",
  Turkish: "tr",
  Polish: "pl",
  Norwegian: "no",
  Danish: "dk",
  Finnish: "fi",
  Austrian: "at",
  Irish: "ie",
  Israeli: "il",
  "Saudi Arabian": "sa",
  UAE: "ae",
  Singaporean: "sg",
  Malaysian: "my",
  Thai: "th",
  "New Zealander": "nz",
  Hungarian: "hu",
  Czech: "cz",
  Slovak: "sk",
  Romanian: "ro",
  Bulgarian: "bg",
  Greek: "gr",
  Cypriot: "cy",
  Lithuanian: "lt",
  Latvian: "lv",
  Estonian: "ee",
  Serbian: "rs",
  Croatian: "hr",
  Slovenian: "si",
  Montenegrin: "me",
  Bosnian: "ba",
  Macedonian: "mk",
  Albanian: "al",
  Icelandic: "is",
  Luxembourgish: "lu",
  Liechtenstein: "li",
  Andorran: "ad",
  Monegasque: "mc",
  "San Marinese": "sm",
  Vatican: "va",
  Palestinian: "ps",
  Jordanian: "jo",
  Lebanese: "lb",
  Kuwaiti: "kw",
  Omani: "om",
  Yemeni: "ye",
  Libyan: "ly",
  Moroccan: "ma",
  Algerian: "dz",
  Tunisian: "tn",
  Sudanese: "sd",
  Ethiopian: "et",
  Kenyan: "ke",
  Nigerian: "ng",
  Ghanaian: "gh",
  "Ivory Coast": "ci",
  Senegalese: "sn",
  Malian: "ml",
  Burkinabe: "bf",
  Zambian: "zm",
  Zimbabwean: "zw",
  Angolan: "ao",
  Namibian: "na",
  Botswana: "bw",
  Mozambican: "mz",
  Swazi: "sz",
  Lesotho: "ls",
  Rwandan: "rw",
  Burundian: "bi",
  Congolese: "cd",
  "Central African": "cf",
  Gabonese: "ga",
  Chadian: "td",
  Cameroonian: "cm",
  Mauritian: "mu",
  Seychellois: "sc",
  Djiboutian: "dj",
  Eritrean: "er",
  "South Sudanese": "ss",
};

export const circuitData = {
  albert_park: {
    description:
      "Located in Melbourne, Australia, this circuit is known for its mix of high-speed and technical corners. It is the venue for the Australian Grand Prix and has a reputation for being challenging due to its street circuit nature.",
    difficulty: "Medium",
  },
  sepang: {
    description:
      "Situated in Kuala Lumpur, Malaysia, Sepang International Circuit is known for its long straights and high-speed corners. It is famous for its humid conditions and varied elevation changes.",
    difficulty: "Medium",
  },
  bahrain: {
    description:
      "Located in Sakhir, Bahrain, this circuit features a mix of high-speed straights and technical corners. It is known for its challenging layout and the desert environment.",
    difficulty: "Medium",
  },
  catalunya: {
    description:
      "Situated in Montmeló, Spain, Circuit de Barcelona-Catalunya is known for its technical layout and frequent use for testing. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  istanbul: {
    description:
      "Located in Istanbul, Turkey, Istanbul Park is famous for its challenging Turn 8 and a layout that combines high-speed and technical sections. It is known for its elevation changes.",
    difficulty: "High",
  },
  monaco: {
    description:
      "Situated in Monte-Carlo, Monaco, this street circuit is known for its narrow layout and challenging corners. It is renowned for its glamorous setting and difficulty.",
    difficulty: "High",
  },
  villeneuve: {
    description:
      "Located in Montreal, Canada, Circuit Gilles Villeneuve is known for its mix of high-speed straights and technical corners. It is famous for the 'Wall of Champions' and its challenging layout.",
    difficulty: "Medium",
  },
  magny_cours: {
    description:
      "Situated in Magny Cours, France, Circuit de Nevers Magny-Cours is known for its technical layout with a mix of slow and fast corners. It was a regular fixture in the F1 calendar before its removal.",
    difficulty: "Medium",
  },
  silverstone: {
    description:
      "Located in Silverstone, UK, Silverstone Circuit is known for its high-speed corners and historic significance. It features a mix of fast and technical sections.",
    difficulty: "High",
  },
  hockenheimring: {
    description:
      "Situated in Hockenheim, Germany, Hockenheimring is known for its mix of long straights and technical sections. It provides a challenging layout with heavy braking zones.",
    difficulty: "Medium",
  },
  hungaroring: {
    description:
      "Located in Budapest, Hungary, Hungaroring is known for its tight and technical layout. It is often referred to as a 'Monaco without the buildings' due to its narrow nature.",
    difficulty: "High",
  },
  valencia: {
    description:
      "Situated in Valencia, Spain, Valencia Street Circuit is known for its street circuit layout with long straights and tight corners. It was known for being a challenging and visually appealing track.",
    difficulty: "Medium",
  },
  spa: {
    description:
      "Located in Spa, Belgium, Circuit de Spa-Francorchamps is known for its fast and flowing layout with significant elevation changes. It is one of the most famous and challenging circuits in F1.",
    difficulty: "High",
  },
  monza: {
    description:
      "Situated in Monza, Italy, Autodromo Nazionale di Monza is known for its high-speed layout and historic significance. It features long straights and tight chicanes.",
    difficulty: "Medium",
  },
  marina_bay: {
    description:
      "Located in Marina Bay, Singapore, Marina Bay Street Circuit is known for its night race and challenging layout. It features a mix of tight corners and is known for its humid conditions.",
    difficulty: "High",
  },
  fuji: {
    description:
      "Situated in Oyama, Japan, Fuji Speedway is known for its high-speed layout and scenic views of Mount Fuji. It features long straights and challenging corners.",
    difficulty: "High",
  },
  shanghai: {
    description:
      "Located in Shanghai, China, Shanghai International Circuit is known for its modern design and challenging layout. It features a mix of high-speed straights and technical sections.",
    difficulty: "Medium",
  },
  interlagos: {
    description:
      "Situated in São Paulo, Brazil, Autódromo José Carlos Pace (Interlagos) is known for its challenging layout and unpredictable weather. It features elevation changes and tight corners.",
    difficulty: "High",
  },
  indianapolis: {
    description:
      "Located in Indianapolis, USA, Indianapolis Motor Speedway is known for its iconic layout and historic significance. It features long straights and challenging corners.",
    difficulty: "Medium",
  },
  nurburgring: {
    description:
      "Situated in Nürburg, Germany, Nürburgring is known for its legendary Nordschleife and challenging layout. It features a mix of high-speed and technical sections with significant elevation changes.",
    difficulty: "High",
  },
  imola: {
    description:
      "Located in Imola, Italy, Autodromo Enzo e Dino Ferrari is known for its challenging layout and historic significance. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  suzuka: {
    description:
      "Situated in Suzuka, Japan, Suzuka Circuit is known for its unique figure-eight layout and challenging corners. It is one of the most technical and demanding circuits in F1.",
    difficulty: "High",
  },
  vegas: {
    description:
      "Located in Las Vegas, USA, Las Vegas Strip Street Circuit is known for its modern street circuit layout with long straights and tight corners. It features a challenging design in a glamorous setting.",
    difficulty: "Medium",
  },
  yas_marina: {
    description:
      "Situated in Abu Dhabi, UAE, Yas Marina Circuit is known for its modern design and night race. It features a mix of high-speed and technical sections with scenic views.",
    difficulty: "Medium",
  },
  galvez: {
    description:
      "Located in Buenos Aires, Argentina, Autódromo Juan y Oscar Gálvez is known for its historic significance and challenging layout. It features a mix of high-speed and technical corners.",
    difficulty: "Medium",
  },
  jerez: {
    description:
      "Situated in Jerez de la Frontera, Spain, Circuito de Jerez is known for its technical layout and frequent testing. It features a mix of fast and slow corners.",
    difficulty: "Medium",
  },
  estoril: {
    description:
      "Located in Estoril, Portugal, Autódromo do Estoril is known for its mix of technical and high-speed sections. It features a challenging layout with elevation changes.",
    difficulty: "Medium",
  },
  okayama: {
    description:
      "Situated in Okayama, Japan, Okayama International Circuit is known for its technical layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  adelaide: {
    description:
      "Located in Adelaide, Australia, Adelaide Street Circuit is known for its challenging layout and street circuit nature. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  kyalami: {
    description:
      "Situated in Midrand, South Africa, Kyalami is known for its challenging layout and elevation changes. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  donington: {
    description:
      "Located in Castle Donington, UK, Donington Park is known for its technical layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  rodriguez: {
    description:
      "Situated in Mexico City, Mexico, Autódromo Hermanos Rodríguez is known for its challenging layout and high-altitude conditions. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  phoenix: {
    description:
      "Located in Phoenix, USA, Phoenix Street Circuit is known for its challenging layout and street circuit nature. It features a mix of high-speed and technical corners.",
    difficulty: "Medium",
  },
  ricard: {
    description:
      "Situated in Le Castellet, France, Circuit Paul Ricard is known for its modern design and mix of high-speed and technical sections. It features a challenging layout with wide runoff areas.",
    difficulty: "Medium",
  },
  yeongam: {
    description:
      "Located in Yeongam County, Korea, Korean International Circuit is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  jacarepagua: {
    description:
      "Situated in Rio de Janeiro, Brazil, Autódromo Internacional Nelson Piquet is known for its challenging layout and historic significance. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  detroit: {
    description:
      "Located in Detroit, USA, Detroit Street Circuit is known for its challenging street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  brands_hatch: {
    description:
      "Situated in Kent, UK, Brands Hatch is known for its challenging layout and elevation changes. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  zandvoort: {
    description:
      "Located in Zandvoort, Netherlands, Circuit Park Zandvoort is known for its challenging layout and seaside location. It features a mix of high-speed and technical corners.",
    difficulty: "High",
  },
  zolder: {
    description:
      "Situated in Heusden-Zolder, Belgium, Zolder is known for its challenging layout and technical corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  dijon: {
    description:
      "Located in Dijon, France, Dijon-Prenois is known for its challenging layout and historic significance. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  dallas: {
    description:
      "Situated in Dallas, USA, Fair Park is known for its challenging street circuit layout. It features a mix of high-speed and technical corners.",
    difficulty: "Medium",
  },
  long_beach: {
    description:
      "Located in California, USA, Long Beach is known for its challenging street circuit layout. It features a mix of high-speed and technical corners.",
    difficulty: "Medium",
  },
  las_vegas: {
    description:
      "Situated in Nevada, USA, Las Vegas Street Circuit is known for its modern street circuit layout with long straights and tight corners.",
    difficulty: "Medium",
  },
  jarama: {
    description:
      "Located in Madrid, Spain, Jarama is known for its technical layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  watkins_glen: {
    description:
      "Situated in New York State, USA, Watkins Glen is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  anderstorp: {
    description:
      "Located in Anderstorp, Sweden, Scandinavian Raceway is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  mosport: {
    description:
      "Situated in Ontario, Canada, Mosport International Raceway is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  montjuic: {
    description:
      "Located in Barcelona, Spain, Montjuïc is known for its challenging street circuit layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  nivelles: {
    description:
      "Situated in Brussels, Belgium, Nivelles-Baulers is known for its challenging layout and technical corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  charade: {
    description:
      "Located in Clermont-Ferrand, France, Charade Circuit is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  tremblant: {
    description:
      "Situated in Quebec, Canada, Circuit Mont-Tremblant is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  essarts: {
    description:
      "Located in Rouen, France, Rouen-Les-Essarts is known for its challenging layout and technical corners. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  lemans: {
    description:
      "Situated in Le Mans, France, Le Mans is known for its historic layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  reims: {
    description:
      "Located in Reims, France, Reims-Gueux is known for its historic layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  george: {
    description:
      "Situated in Eastern Cape Province, South Africa, Prince George Circuit is known for its challenging layout and technical corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  zeltweg: {
    description:
      "Located in Styria, Austria, Zeltweg is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  aintree: {
    description:
      "Situated in Liverpool, UK, Aintree is known for its challenging layout and historic significance. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  boavista: {
    description:
      "Located in Oporto, Portugal, Circuito da Boavista is known for its challenging street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  riverside: {
    description:
      "Situated in California, USA, Riverside International Raceway is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  avus: {
    description:
      "Located in Berlin, Germany, AVUS is known for its challenging layout and high-speed sections. It features a mix of long straights and technical corners.",
    difficulty: "Medium",
  },
  monsanto: {
    description:
      "Situated in Lisbon, Portugal, Monsanto Park Circuit is known for its challenging layout and technical corners. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  sebring: {
    description:
      "Located in Florida, USA, Sebring International Raceway is known for its challenging layout and rough surface. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  ain_diab: {
    description:
      "Situated in Casablanca, Morocco, Ain Diab is known for its challenging street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  pescara: {
    description:
      "Located in Pescara, Italy, Pescara Circuit is known for its historic layout and challenging corners. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  bremgarten: {
    description:
      "Situated in Bern, Switzerland, Circuit Bremgarten is known for its challenging layout and historic significance. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  pedralbes: {
    description:
      "Located in Barcelona, Spain, Circuit de Pedralbes is known for its challenging layout and historic significance. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  buddh: {
    description:
      "Situated in Uttar Pradesh, India, Buddh International Circuit is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  americas: {
    description:
      "Located in Austin, USA, Circuit of the Americas is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  red_bull_ring: {
    description:
      "Situated in Spielberg, Austria, Red Bull Ring is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  sochi: {
    description:
      "Located in Sochi, Russia, Sochi Autodrom is known for its modern street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  baku: {
    description:
      "Situated in Baku, Azerbaijan, Baku City Circuit is known for its modern street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  portimao: {
    description:
      "Located in Portimão, Portugal, Autódromo Internacional do Algarve is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  mugello: {
    description:
      "Situated in Mugello, Italy, Autodromo Internazionale del Mugello is known for its challenging layout and elevation changes. It features a mix of high-speed and technical sections.",
    difficulty: "High",
  },
  jeddah: {
    description:
      "Located in Jeddah, Saudi Arabia, Jeddah Corniche Circuit is known for its modern street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  losail: {
    description:
      "Situated in Al Daayen, Qatar, Losail International Circuit is known for its modern design and challenging layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
  miami: {
    description:
      "Located in Miami, USA, Miami International Autodrome is known for its modern street circuit layout. It features a mix of high-speed and technical sections.",
    difficulty: "Medium",
  },
};

export const mapOptions = {
  zoomControl: false,
  scrollWheelZoom: false, // Disable zooming with the mouse wheel
  doubleClickZoom: false, // Disable zooming on double click
  touchZoom: false, // Disable zooming with pinch gestures
  dragging: false, // Optionally disable dragging
};
