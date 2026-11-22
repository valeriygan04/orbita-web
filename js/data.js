// Kopie data.json (zdroj pravdy). Needitovat ručně – po změně data.json spusť: python tools/check-data.py --sync
window.FESTIVAL_DATA = {
  "festival": {
    "nazev": "Orbita – festival sci-fi filmu a vědy",
    "zkratka": "Orbita",
    "rocnik": 2,
    "rok": 2027,
    "od": "2027-08-12",
    "do": "2027-08-15",
    "popis": "Čtyři dny sci-fi filmů, debat s tvůrci a vědci, přednášek a nočního pozorování oblohy v termínu maxima meteorického roje Perseidy.",
    "misto": {
      "nazev": "Pole pod kopulí",
      "obec": "Ondřejov",
      "psc": "251 65",
      "okres": "Praha-východ",
      "zeme": "CZ",
      "gps": {
        "lat": 49.9105,
        "lon": 14.779
      },
      "poznamka": "Fiktivní festivalový areál vedle hvězdárny. Festival ani pořadatel nejsou s hvězdárnou spojeni. GPS je orientační."
    },
    "web": "https://valeriygan04.github.io/orbita-web",
    "kontakt": {
      "email": "info@orbita-festival.example",
      "poradatel": "Orbita z. s. (fiktivní spolek)",
      "adresa": "Pole pod kopulí, 251 65 Ondřejov"
    },
    "casovePasmo": "Europe/Prague",
    "fiktivni": true
  },
  "sceny": [
    {
      "id": "kopule",
      "nazev": "Letní kino Kopule",
      "typ": "open-air",
      "kapacita": 1200,
      "popis": "Hlavní open-air scéna s velkým plátnem pod širým nebem. Večerní premiéry, slavnostní zahájení a půlnoční projekce.",
      "pristupnost": {
        "bezbarierova": "castecne",
        "popis": "Vyhrazená místa pro vozíky v první řadě na zpevněné ploše, přístup po dřevěném chodníku od hlavního vstupu. Zbytek hlediště je na trávě."
      },
      "vybaveni": [
        "plátno 18 × 8 m",
        "digitální projekce 4K",
        "lehátka a deky k zapůjčení"
      ]
    },
    {
      "id": "planeta",
      "nazev": "Sál Planeta",
      "typ": "kryta",
      "kapacita": 300,
      "popis": "Krytý nafukovací dóm s klimatizací. Projekce za každého počasí, soutěž krátkých filmů a rodinné projekce.",
      "pristupnost": {
        "bezbarierova": "ano",
        "popis": "Bezbariérový vstup po rampě, 6 míst pro vozíky, indukční smyčka pro nedoslýchavé."
      },
      "vybaveni": [
        "digitální projekce",
        "prostorový zvuk",
        "indukční smyčka"
      ]
    },
    {
      "id": "teorie",
      "nazev": "Stan Teorie",
      "typ": "stan",
      "kapacita": 200,
      "popis": "Debatní a přednáškový stan. Rozhovory s tvůrci po projekcích a přednášky vědců.",
      "pristupnost": {
        "bezbarierova": "ano",
        "popis": "Zpevněná podlaha bez prahů, místa pro vozíky v zadní řadě, přednášky s přepisem na obrazovce."
      },
      "vybaveni": [
        "projektor",
        "mikrofony pro publikum",
        "obrazovka s živým přepisem"
      ]
    },
    {
      "id": "pozorovatelna",
      "nazev": "Noční pozorovatelna",
      "typ": "pozorovatelna",
      "kapacita": null,
      "popis": "Pozorovací plošina s dalekohledy a lehátky pro sledování meteorů. Ve dne pozorování Slunce přes bezpečné filtry.",
      "pristupnost": {
        "bezbarierova": "castecne",
        "popis": "Plošina je přístupná rampou, jeden dalekohled má nízko položený okulár pro pozorování z vozíku. Okolí je travnaté, v noci jen tlumené červené osvětlení."
      },
      "vybaveni": [
        "6 dalekohledů",
        "2 dalekohledy se slunečním filtrem",
        "lehátka",
        "červené orientační osvětlení"
      ]
    },
    {
      "id": "louka",
      "nazev": "Raketová louka",
      "typ": "louka",
      "kapacita": null,
      "popis": "Denní program pro děti a rodiny: dílny, vodní rakety, pohádky o souhvězdích a hry.",
      "pristupnost": {
        "bezbarierova": "castecne",
        "popis": "Travnatý povrch, hlavní trasa a dílenský stan jsou na zpevněném chodníku. U louky je přebalovací a kojicí koutek."
      },
      "vybaveni": [
        "dílenský stan",
        "odpaliště vodních raket",
        "stín a pitná voda"
      ]
    }
  ],
  "ucinkujici": [
    {
      "id": "marta-vrbova",
      "jmeno": "Marta",
      "prijmeni": "Vrbová",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisérka komorních hard sci-fi příběhů, absolventka filmové režie. Její film Tichý horizont zahajuje druhý ročník Orbity.",
      "foto": null
    },
    {
      "id": "tomas-hajek",
      "jmeno": "Tomáš",
      "prijmeni": "Hájek",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisér a bývalý zvukový inženýr. Ve filmech pracuje s tím, co je ve vesmíru slyšet – a co ne.",
      "foto": null
    },
    {
      "id": "ingrid-solberg",
      "jmeno": "Ingrid",
      "prijmeni": "Sølberg",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "NO",
      "medailon": "Norská režisérka kosmických oper natáčených v arktické krajině. Na Orbitě uvede svůj čtvrtý celovečerní film.",
      "foto": null
    },
    {
      "id": "karel-dostal",
      "jmeno": "Karel",
      "prijmeni": "Dostál",
      "role": [
        "reziser",
        "scenarista"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisér a scenárista dystopických dramat. Před filmem se věnoval architektuře, což je vidět na jeho městech budoucnosti.",
      "foto": null
    },
    {
      "id": "lena-marsh",
      "jmeno": "Lena",
      "prijmeni": "Marsh",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "GB",
      "medailon": "Britská režisérka velkých vesmírných příběhů o rodinách na palubách generačních lodí.",
      "foto": null
    },
    {
      "id": "pavel-kriz",
      "jmeno": "Pavel",
      "prijmeni": "Kříž",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Dokumentarista, který deset let sledoval amatérské lovce meteoritů. Na Orbitě má světovou premiéru.",
      "foto": null
    },
    {
      "id": "zuzana-mikova",
      "jmeno": "Zuzana",
      "prijmeni": "Míková",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "SK",
      "medailon": "Slovenská režisérka rodinných filmů. Věří, že sci-fi je pro děti nejlepší cesta k vědě.",
      "foto": null
    },
    {
      "id": "jonas-weber",
      "jmeno": "Jonas",
      "prijmeni": "Weber",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "DE",
      "medailon": "Německý režisér, který před filmem programoval neuronové sítě. Natáčí dystopie o umělé inteligenci.",
      "foto": null
    },
    {
      "id": "elena-rusu",
      "jmeno": "Elena",
      "prijmeni": "Rusu",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "RO",
      "medailon": "Rumunská režisérka kosmických oper s důrazem na ženské postavy a politiku kolonií.",
      "foto": null
    },
    {
      "id": "ondrej-lasek",
      "jmeno": "Ondřej",
      "prijmeni": "Lásek",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Dokumentarista zaměřený na klimatickou krizi. Natáčel na výzkumných stanicích v Arktidě.",
      "foto": null
    },
    {
      "id": "hana-kostelecka",
      "jmeno": "Hana",
      "prijmeni": "Kostelecká",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisérka a bývalá oceánografka. Ve filmu Přílivová zóna propojila klimatickou vědu s dystopií.",
      "foto": null
    },
    {
      "id": "mateo-ferrer",
      "jmeno": "Mateo",
      "prijmeni": "Ferrer",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "ES",
      "medailon": "Španělský režisér hard sci-fi, který s vědci konzultuje každou scénu. Jeho film se odehrává pod ledem Jupiterova měsíce.",
      "foto": null
    },
    {
      "id": "aiko-tanabe",
      "jmeno": "Aiko",
      "prijmeni": "Tanabe",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "JP",
      "medailon": "Japonská animátorka a režisérka. Její papírové animace vznikají ručně, políčko po políčku.",
      "foto": null
    },
    {
      "id": "viktor-strnad",
      "jmeno": "Viktor",
      "prijmeni": "Strnad",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Klasik české sci-fi narozený roku 1941. Orbita uvádí jeho dva filmy v digitálně restaurovaných verzích.",
      "foto": null
    },
    {
      "id": "klara-benesova",
      "jmeno": "Klára",
      "prijmeni": "Benešová",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Dokumentaristka, která natočila film o radioastronomech naslouchajících vesmíru z obyčejného pole.",
      "foto": null
    },
    {
      "id": "samuel-okafor",
      "jmeno": "Samuel",
      "prijmeni": "Okafor",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "GB",
      "medailon": "Britsko-nigerijský režisér. Jeho debut Hranice atmosféry vypráví o pilotce stratosférického balonu.",
      "foto": null
    },
    {
      "id": "ema-kolarova",
      "jmeno": "Ema",
      "prijmeni": "Kolářová",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Studentka filmové akademie. Její krátký film Prach soutěží v hlavní soutěži krátkých filmů.",
      "foto": null
    },
    {
      "id": "filip-sedlak",
      "jmeno": "Filip",
      "prijmeni": "Sedlák",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisér a programátor. Krátký film Kód 47 natočil za jediný víkend s rozpočtem na pizzu.",
      "foto": null
    },
    {
      "id": "noor-haddad",
      "jmeno": "Noor",
      "prijmeni": "Haddad",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "JO",
      "medailon": "Jordánská režisérka, která natáčí poetické sci-fi v pouštní krajině.",
      "foto": null
    },
    {
      "id": "lukas-brenner",
      "jmeno": "Lukas",
      "prijmeni": "Brenner",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "AT",
      "medailon": "Rakouský režisér tragikomických krátkých filmů o lidech, které budoucnost předběhla.",
      "foto": null
    },
    {
      "id": "tereza-jirku",
      "jmeno": "Tereza",
      "prijmeni": "Jirků",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Režisérka a výtvarnice. Krátký film Kyslík vznikl jako její absolventská práce.",
      "foto": null
    },
    {
      "id": "marek-holub",
      "jmeno": "Marek",
      "prijmeni": "Holub",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "SK",
      "medailon": "Slovenský animátor rodinných krátkých filmů s retro-futuristickou výpravou.",
      "foto": null
    },
    {
      "id": "anna-lindqvist",
      "jmeno": "Anna",
      "prijmeni": "Lindqvist",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "SE",
      "medailon": "Švédská režisérka, jejíž Mezihvězdná pošta je dopisem o vzdálenosti mezi lidmi i hvězdami.",
      "foto": null
    },
    {
      "id": "jakub-pesina",
      "jmeno": "Jakub",
      "prijmeni": "Pešina",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Mladý režisér experimentálních filmů o čase. Nultý čas je jeho druhý krátký film.",
      "foto": null
    },
    {
      "id": "sofia-marino",
      "jmeno": "Sofia",
      "prijmeni": "Marino",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "IT",
      "medailon": "Italská režisérka a fyzička, která natáčí romantické sci-fi o gravitaci.",
      "foto": null
    },
    {
      "id": "adam-zeleny",
      "jmeno": "Adam",
      "prijmeni": "Zelený",
      "role": [
        "reziser"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Animátor loutkových filmů pro děti. Robotí zahradník je jeho první film pro festivaly.",
      "foto": null
    },
    {
      "id": "petra-vankova",
      "jmeno": "Petra",
      "prijmeni": "Vaňková",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Divadelní a filmová herečka. V Tichém horizontu hraje velitelku výzkumné stanice.",
      "foto": null
    },
    {
      "id": "jan-rehor",
      "jmeno": "Jan",
      "prijmeni": "Řehoř",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Herec, který v Městě pod kupolí ztvárnil inženýra rozhodujícího o osudu milionu lidí.",
      "foto": null
    },
    {
      "id": "ola-berg",
      "jmeno": "Ola",
      "prijmeni": "Berg",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "NO",
      "medailon": "Norský herec, hlavní hvězda kosmické opery Ledová orbita.",
      "foto": null
    },
    {
      "id": "nina-kalina",
      "jmeno": "Nina",
      "prijmeni": "Kalina",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "SK",
      "medailon": "Slovenská herečka. V Zahradě na Marsu hraje botaničku a mámu dvou dětí.",
      "foto": null
    },
    {
      "id": "richard-ashby",
      "jmeno": "Richard",
      "prijmeni": "Ashby",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "GB",
      "medailon": "Britský herec, kapitán generační lodi ve filmu Dlouhý drift.",
      "foto": null
    },
    {
      "id": "milena-tumova",
      "jmeno": "Milena",
      "prijmeni": "Tůmová",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Herečka, která v roce 1979 hrála hlavní roli v klasice Cesta k Proximě. Na Orbitě uvede restaurovanou verzi.",
      "foto": null
    },
    {
      "id": "ivo-lastovka",
      "jmeno": "Ivo",
      "prijmeni": "Laštovka",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Herec charakterních rolí, v Přílivové zóně hraje starostu zaplavovaného města.",
      "foto": null
    },
    {
      "id": "greta-hoff",
      "jmeno": "Greta",
      "prijmeni": "Hoff",
      "role": [
        "herec"
      ],
      "obor": null,
      "zeme": "DE",
      "medailon": "Německá herečka, která ve filmu Algoritmus snů hraje umělou inteligenci i její programátorku.",
      "foto": null
    },
    {
      "id": "vojtech-pazdera",
      "jmeno": "Vojtěch",
      "prijmeni": "Pazdera",
      "role": [
        "scenarista"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Scenárista a autor sci-fi povídek. Podepsán pod scénáři filmů Tichý horizont a Poslední signál.",
      "foto": null
    },
    {
      "id": "alena-rybova",
      "jmeno": "Alena",
      "prijmeni": "Rybová",
      "role": [
        "scenarista"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Scenáristka rodinných i dospělých příběhů, spoluautorka Zahrady na Marsu a Přílivové zóny.",
      "foto": null
    },
    {
      "id": "oskar-lind",
      "jmeno": "Oskar",
      "prijmeni": "Lind",
      "role": [
        "scenarista"
      ],
      "obor": null,
      "zeme": "SE",
      "medailon": "Švédský scenárista, spoluautor kosmické opery Ledová orbita.",
      "foto": null
    },
    {
      "id": "beata-sramkova",
      "jmeno": "Beáta",
      "prijmeni": "Šrámková",
      "role": [
        "scenarista"
      ],
      "obor": null,
      "zeme": "SK",
      "medailon": "Slovenská scenáristka a dramaturgyně. Napsala scénář filmu Sedm měsíců.",
      "foto": null
    },
    {
      "id": "radim-kostka",
      "jmeno": "Radim",
      "prijmeni": "Kostka",
      "role": [
        "scenarista"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Scenárista a lektor tvůrčího psaní. Spoluautor scénáře Hranice atmosféry.",
      "foto": null
    },
    {
      "id": "iveta-hruba",
      "jmeno": "Iveta",
      "prijmeni": "Hrubá",
      "role": [
        "producent"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Producentka nezávislých filmů, stojí za Tichým horizontem i dokumentem Lovci meteorů.",
      "foto": null
    },
    {
      "id": "miroslav-blaha",
      "jmeno": "Miroslav",
      "prijmeni": "Bláha",
      "role": [
        "producent"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Producent, který dokázal postavit kupoli pro celé filmové město.",
      "foto": null
    },
    {
      "id": "jitka-rozsypalova",
      "jmeno": "Jitka",
      "prijmeni": "Rozsypalová",
      "role": [
        "vedec"
      ],
      "obor": "exoplanety",
      "zeme": "CZ",
      "medailon": "Astrofyzička, která hledá planety u cizích hvězd. Vědeckou konzultantkou byla u filmu Tichý horizont.",
      "foto": null
    },
    {
      "id": "petr-dvornik",
      "jmeno": "Petr",
      "prijmeni": "Dvorník",
      "role": [
        "vedec"
      ],
      "obor": "gravitační vlny",
      "zeme": "CZ",
      "medailon": "Fyzik zabývající se detekcí gravitačních vln. Umí vysvětlit srážku černých děr pomocí trampolíny.",
      "foto": null
    },
    {
      "id": "lucie-trnkova",
      "jmeno": "Lucie",
      "prijmeni": "Trnková",
      "role": [
        "vedec"
      ],
      "obor": "umělá inteligence",
      "zeme": "CZ",
      "medailon": "Výzkumnice v oboru strojového učení. Zajímá ji, jak AI pomáhá v astronomii.",
      "foto": null
    },
    {
      "id": "adela-kovarova",
      "jmeno": "Adéla",
      "prijmeni": "Kovářová",
      "role": [
        "vedec"
      ],
      "obor": "klimatologie",
      "zeme": "CZ",
      "medailon": "Klimatoložka modelující budoucí scénáře oteplení. Říká, že nejlepší sci-fi jsou dnes klimatické modely.",
      "foto": null
    },
    {
      "id": "martin-brabec",
      "jmeno": "Martin",
      "prijmeni": "Brabec",
      "role": [
        "vedec"
      ],
      "obor": "planetární geologie",
      "zeme": "CZ",
      "medailon": "Planetární geolog, který zkoumá horniny z Marsu. Na Orbitu přiveze skutečné meteority.",
      "foto": null
    },
    {
      "id": "veronika-stastna",
      "jmeno": "Veronika",
      "prijmeni": "Šťastná",
      "role": [
        "vedec"
      ],
      "obor": "astrobiologie",
      "zeme": "CZ",
      "medailon": "Astrobioložka hledající stopy života v extrémních prostředích na Zemi i mimo ni.",
      "foto": null
    },
    {
      "id": "daniel-koubek",
      "jmeno": "Daniel",
      "prijmeni": "Koubek",
      "role": [
        "vedec"
      ],
      "obor": "kvantová fyzika",
      "zeme": "CZ",
      "medailon": "Kvantový fyzik a popularizátor. Jeho přednášky jsou známé tím, že se po nich nikdo nebojí rovnic.",
      "foto": null
    },
    {
      "id": "irena-pokorna",
      "jmeno": "Irena",
      "prijmeni": "Pokorná",
      "role": [
        "vedec"
      ],
      "obor": "kognitivní věda a etika AI",
      "zeme": "CZ",
      "medailon": "Kognitivní vědkyně, která se ptá, zda stroje mohou mít vědomí a co by to pro nás znamenalo.",
      "foto": null
    },
    {
      "id": "hugo-lambert",
      "jmeno": "Hugo",
      "prijmeni": "Lambert",
      "role": [
        "vedec"
      ],
      "obor": "raketová technika",
      "zeme": "FR",
      "medailon": "Francouzský inženýr, který navrhoval přistávací systémy opakovaně použitelných raket.",
      "foto": null
    },
    {
      "id": "yara-costa",
      "jmeno": "Yara",
      "prijmeni": "Costa",
      "role": [
        "vedec"
      ],
      "obor": "oceánografie a satelitní pozorování",
      "zeme": "PT",
      "medailon": "Portugalská oceánografka, která sleduje oceány z oběžné dráhy.",
      "foto": null
    },
    {
      "id": "stanislav-ruzicka",
      "jmeno": "Stanislav",
      "prijmeni": "Růžička",
      "role": [
        "vedec"
      ],
      "obor": "částicová fyzika",
      "zeme": "CZ",
      "medailon": "Částicový fyzik zkoumající kosmické záření. Ukáže, jak ho zachytit doma v mlžné komoře.",
      "foto": null
    },
    {
      "id": "kamila-fialova",
      "jmeno": "Kamila",
      "prijmeni": "Fialová",
      "role": [
        "vedec"
      ],
      "obor": "robotika",
      "zeme": "CZ",
      "medailon": "Robotička, která vyvíjí roboty pro průzkum planet a ráda je staví s dětmi.",
      "foto": null
    },
    {
      "id": "josef-hromadka",
      "jmeno": "Josef",
      "prijmeni": "Hromádka",
      "role": [
        "astronom"
      ],
      "obor": "meteory",
      "zeme": "CZ",
      "medailon": "Astronom, který pozoruje Perseidy přes třicet let. Průvodce nočním pozorováním na Orbitě.",
      "foto": null
    },
    {
      "id": "barbora-lenochova",
      "jmeno": "Barbora",
      "prijmeni": "Lenochová",
      "role": [
        "astronom"
      ],
      "obor": "proměnné hvězdy",
      "zeme": "CZ",
      "medailon": "Astronomka a popularizátorka. Na pozorovatelně učí najít souhvězdí bez aplikace.",
      "foto": null
    },
    {
      "id": "roman-sykora",
      "jmeno": "Roman",
      "prijmeni": "Sýkora",
      "role": [
        "astronom"
      ],
      "obor": "astrofotografie",
      "zeme": "CZ",
      "medailon": "Astrofotograf, jehož snímky Mléčné dráhy se objevily v řadě časopisů. Učí fotit oblohu mobilem.",
      "foto": null
    },
    {
      "id": "eva-blazkova",
      "jmeno": "Eva",
      "prijmeni": "Blažková",
      "role": [
        "astronom"
      ],
      "obor": "sluneční fyzika",
      "zeme": "CZ",
      "medailon": "Sluneční fyzička. Ve dne ukazuje skvrny na Slunci bezpečně přes speciální filtry.",
      "foto": null
    },
    {
      "id": "tomas-zednik",
      "jmeno": "Tomáš",
      "prijmeni": "Zedník",
      "role": [
        "astronom"
      ],
      "obor": "Měsíc a planety",
      "zeme": "CZ",
      "medailon": "Amatérský astronom a mapovač Měsíce. Na pozorovatelně má na starosti dalekohledy.",
      "foto": null
    },
    {
      "id": "klara-jelinkova",
      "jmeno": "Klára",
      "prijmeni": "Jelínková",
      "role": [
        "moderator"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Filmová publicistka a moderátorka debat s tvůrci.",
      "foto": null
    },
    {
      "id": "ondrej-cap",
      "jmeno": "Ondřej",
      "prijmeni": "Čáp",
      "role": [
        "moderator"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Moderátor a programový ředitel soutěže krátkých filmů.",
      "foto": null
    },
    {
      "id": "monika-sterbova",
      "jmeno": "Monika",
      "prijmeni": "Štěrbová",
      "role": [
        "moderator"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Vědecká novinářka, moderuje debaty o klimatu a vesmíru.",
      "foto": null
    },
    {
      "id": "filip-mracek",
      "jmeno": "Filip",
      "prijmeni": "Mráček",
      "role": [
        "moderator"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Hlas Letního kina Kopule. Uvádí zahájení, závěr a večerní projekce.",
      "foto": null
    },
    {
      "id": "simona-hlavacova",
      "jmeno": "Simona",
      "prijmeni": "Hlaváčová",
      "role": [
        "moderator"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Filmová kritička, moderuje rozhovory po projekcích v Sále Planeta.",
      "foto": null
    },
    {
      "id": "lenka-bartova",
      "jmeno": "Lenka",
      "prijmeni": "Bártová",
      "role": [
        "lektor"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Lektorka dětského programu na Raketové louce, autorka her o vesmíru.",
      "foto": null
    },
    {
      "id": "vit-sramek",
      "jmeno": "Vít",
      "prijmeni": "Šrámek",
      "role": [
        "lektor"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Raketový modelář a lektor. S dětmi staví a odpaluje vodní rakety.",
      "foto": null
    },
    {
      "id": "dana-pospisilova",
      "jmeno": "Dana",
      "prijmeni": "Pospíšilová",
      "role": [
        "lektor"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Loutkoherečka a vypravěčka pohádek o souhvězdích pro nejmenší.",
      "foto": null
    },
    {
      "id": "matej-patek",
      "jmeno": "Matěj",
      "prijmeni": "Pátek",
      "role": [
        "lektor"
      ],
      "obor": null,
      "zeme": "CZ",
      "medailon": "Lektor robotiky pro děti, vede robotí dílny a závody.",
      "foto": null
    }
  ],
  "filmy": [
    {
      "id": "f-tichy-horizont",
      "nazev": "Tichý horizont",
      "nazevOriginal": "Tichý horizont",
      "rok": 2026,
      "delkaMin": 112,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Posádka výzkumné stanice na okraji Sluneční soustavy zachytí signál, který nemá být slyšet. Komorní drama o tom, jak zní ticho vesmíru.",
      "stab": [
        {
          "ucinkujiciId": "marta-vrbova",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "vojtech-pazdera",
          "role": "scenar"
        },
        {
          "ucinkujiciId": "petra-vankova",
          "role": "herec"
        },
        {
          "ucinkujiciId": "iveta-hruba",
          "role": "produkce"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-posledni-signal",
      "nazev": "Poslední signál",
      "nazevOriginal": "Poslední signál",
      "rok": 2025,
      "delkaMin": 98,
      "zeme": [
        "CZ",
        "SK"
      ],
      "subzanr": [
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Technik pozemní stanice zachytí poslední zprávu sondy, která měla být dávno mrtvá.",
      "stab": [
        {
          "ucinkujiciId": "tomas-hajek",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "vojtech-pazdera",
          "role": "scenar"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-ledova-orbita",
      "nazev": "Ledová orbita",
      "nazevOriginal": "Isbane",
      "rok": 2026,
      "delkaMin": 121,
      "zeme": [
        "NO"
      ],
      "subzanr": [
        "kosmicka-opera"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "norština",
      "titulky": "čeština",
      "anotace": "Dvě znepřátelené kolonie na ledových měsících musí spolupracovat, když se jejich oběžné dráhy začnou křížit.",
      "stab": [
        {
          "ucinkujiciId": "ingrid-solberg",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "oskar-lind",
          "role": "scenar"
        },
        {
          "ucinkujiciId": "ola-berg",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-mesto-pod-kupoli",
      "nazev": "Město pod kupolí",
      "nazevOriginal": "Město pod kupolí",
      "rok": 2025,
      "delkaMin": 104,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "dystopie"
      ],
      "vekovaPristupnost": 15,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Milion lidí žije pod kupolí, která je chrání před zničenou atmosférou. Inženýr zjistí, že kupole netěsní záměrně.",
      "stab": [
        {
          "ucinkujiciId": "karel-dostal",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "karel-dostal",
          "role": "scenar"
        },
        {
          "ucinkujiciId": "jan-rehor",
          "role": "herec"
        },
        {
          "ucinkujiciId": "miroslav-blaha",
          "role": "produkce"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-dlouhy-drift",
      "nazev": "Dlouhý drift",
      "nazevOriginal": "The Long Drift",
      "rok": 2026,
      "delkaMin": 133,
      "zeme": [
        "GB"
      ],
      "subzanr": [
        "kosmicka-opera"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "angličtina",
      "titulky": "čeština",
      "anotace": "Generační loď letí k nové Zemi už 300 let. Kapitán, který se narodil na palubě, musí rozhodnout, zda let dokončit.",
      "stab": [
        {
          "ucinkujiciId": "lena-marsh",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "richard-ashby",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-lovci-meteoru",
      "nazev": "Lovci meteorů",
      "nazevOriginal": "Lovci meteorů",
      "rok": 2027,
      "delkaMin": 78,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "dokument"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Deset let s amatérskými hledači meteoritů. Dokument o trpělivosti, nočních polích a kamenech, které spadly z nebe. Světová premiéra.",
      "stab": [
        {
          "ucinkujiciId": "pavel-kriz",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "iveta-hruba",
          "role": "produkce"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-zahrada-na-marsu",
      "nazev": "Zahrada na Marsu",
      "nazevOriginal": "Záhrada na Marse",
      "rok": 2026,
      "delkaMin": 86,
      "zeme": [
        "SK",
        "CZ"
      ],
      "subzanr": [
        "rodinny"
      ],
      "vekovaPristupnost": 6,
      "jazyk": "slovenština",
      "titulky": "čeština",
      "anotace": "Desetiletá Ela se s rodinou stěhuje na Mars a snaží se tam vypěstovat první jabloň. Rodinný film o odvaze a trpělivosti.",
      "stab": [
        {
          "ucinkujiciId": "zuzana-mikova",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "alena-rybova",
          "role": "scenar"
        },
        {
          "ucinkujiciId": "nina-kalina",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-algoritmus-snu",
      "nazev": "Algoritmus snů",
      "nazevOriginal": "Traumalgorithmus",
      "rok": 2025,
      "delkaMin": 109,
      "zeme": [
        "DE"
      ],
      "subzanr": [
        "dystopie"
      ],
      "vekovaPristupnost": 15,
      "jazyk": "němčina",
      "titulky": "čeština",
      "anotace": "V městě, kde AI předpovídá zločiny ze snů obyvatel, se programátorka začne bát usnout.",
      "stab": [
        {
          "ucinkujiciId": "jonas-weber",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "greta-hoff",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-sedm-mesicu",
      "nazev": "Sedm měsíců",
      "nazevOriginal": "Șapte luni",
      "rok": 2026,
      "delkaMin": 118,
      "zeme": [
        "RO"
      ],
      "subzanr": [
        "kosmicka-opera"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "rumunština",
      "titulky": "čeština",
      "anotace": "Sedm kolonií na sedmi měsících jednoho plynného obra a jedna vyjednavačka, která má zabránit válce.",
      "stab": [
        {
          "ucinkujiciId": "elena-rusu",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "beata-sramkova",
          "role": "scenar"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-teplota-nula",
      "nazev": "Teplota nula",
      "nazevOriginal": "Teplota nula",
      "rok": 2026,
      "delkaMin": 82,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "dokument"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Dokument z arktických výzkumných stanic o lidech, kteří měří, jak rychle taje led.",
      "stab": [
        {
          "ucinkujiciId": "ondrej-lasek",
          "role": "rezie"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-prilivova-zona",
      "nazev": "Přílivová zóna",
      "nazevOriginal": "Přílivová zóna",
      "rok": 2027,
      "delkaMin": 101,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "dystopie"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Rok 2071. Přímořské město ustupuje moři ulici po ulici a jeho starosta musí rozhodnout, kdo odejde první.",
      "stab": [
        {
          "ucinkujiciId": "hana-kostelecka",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "alena-rybova",
          "role": "scenar"
        },
        {
          "ucinkujiciId": "ivo-lastovka",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-ozvena-z-europy",
      "nazev": "Ozvěna z Europy",
      "nazevOriginal": "Eco desde Europa",
      "rok": 2026,
      "delkaMin": 115,
      "zeme": [
        "ES"
      ],
      "subzanr": [
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "španělština",
      "titulky": "čeština",
      "anotace": "Robotická ponorka pod ledem Jupiterova měsíce Europa začne posílat data, která nikdo neumí vysvětlit.",
      "stab": [
        {
          "ucinkujiciId": "mateo-ferrer",
          "role": "rezie"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-papirovy-robot",
      "nazev": "Papírový robot",
      "nazevOriginal": "Kami no robotto",
      "rok": 2025,
      "delkaMin": 74,
      "zeme": [
        "JP"
      ],
      "subzanr": [
        "rodinny",
        "animovany"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "japonština",
      "titulky": "český dabing",
      "anotace": "Ručně animovaný příběh robota z papíru, který se bojí deště a vydá se hledat hvězdu, jež spadla do lesa.",
      "stab": [
        {
          "ucinkujiciId": "aiko-tanabe",
          "role": "rezie"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-cesta-k-proxime",
      "nazev": "Cesta k Proximě",
      "nazevOriginal": "Cesta k Proximě",
      "rok": 1979,
      "delkaMin": 96,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "klasika",
        "kosmicka-opera"
      ],
      "vekovaPristupnost": 6,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Klasika české sci-fi v digitálně restaurované verzi. Posádka lodi Vega letí k nejbližší hvězdě a objevuje, že cesta je důležitější než cíl.",
      "stab": [
        {
          "ucinkujiciId": "viktor-strnad",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "milena-tumova",
          "role": "herec"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-muz-z-kometarniho-mraku",
      "nazev": "Muž z kometárního mraku",
      "nazevOriginal": "Muž z kometárního mraku",
      "rok": 1972,
      "delkaMin": 88,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "klasika"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Do vesnice pod kopcem spadne kometa a s ní tajemný cizinec. Retro sci-fi komedie v restaurované verzi.",
      "stab": [
        {
          "ucinkujiciId": "viktor-strnad",
          "role": "rezie"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-signal-z-pole",
      "nazev": "Signál z pole",
      "nazevOriginal": "Signál z pole",
      "rok": 2026,
      "delkaMin": 64,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "dokument"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Skupina radioastronomů-amatérů postaví anténu na obyčejném poli a poslouchá vesmír.",
      "stab": [
        {
          "ucinkujiciId": "klara-benesova",
          "role": "rezie"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-hranice-atmosfery",
      "nazev": "Hranice atmosféry",
      "nazevOriginal": "Edge of Air",
      "rok": 2026,
      "delkaMin": 107,
      "zeme": [
        "GB",
        "NG"
      ],
      "subzanr": [
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "angličtina",
      "titulky": "čeština",
      "anotace": "Pilotka stratosférického balonu se pokouší o rekordní výstup, zatímco dole na Zemi se rozpadá její rodina.",
      "stab": [
        {
          "ucinkujiciId": "samuel-okafor",
          "role": "rezie"
        },
        {
          "ucinkujiciId": "radim-kostka",
          "role": "scenar"
        }
      ],
      "soutez": false
    },
    {
      "id": "f-prach",
      "nazev": "Prach",
      "nazevOriginal": "Prach",
      "rok": 2026,
      "delkaMin": 14,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "kratky",
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Astronautka sama na Měsíci uklízí prach, který nikdy nezmizí.",
      "stab": [
        {
          "ucinkujiciId": "ema-kolarova",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-kod-47",
      "nazev": "Kód 47",
      "nazevOriginal": "Kód 47",
      "rok": 2026,
      "delkaMin": 11,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "kratky",
        "dystopie"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Úředník mezi čísly objeví chybu, která by mohla zastavit svět.",
      "stab": [
        {
          "ucinkujiciId": "filip-sedlak",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-studna-svetla",
      "nazev": "Studna světla",
      "nazevOriginal": "Bi'r an-nur",
      "rok": 2026,
      "delkaMin": 17,
      "zeme": [
        "JO"
      ],
      "subzanr": [
        "kratky",
        "hard-scifi"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "arabština",
      "titulky": "čeština",
      "anotace": "Dívka v poušti najde studnu, ze které místo vody stoupá světlo vzdálené hvězdy.",
      "stab": [
        {
          "ucinkujiciId": "noor-haddad",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-posledni-astronaut",
      "nazev": "Poslední astronaut na nádraží",
      "nazevOriginal": "Der letzte Astronaut am Bahnhof",
      "rok": 2026,
      "delkaMin": 19,
      "zeme": [
        "AT"
      ],
      "subzanr": [
        "kratky"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "němčina",
      "titulky": "čeština",
      "anotace": "Vysloužilý astronaut každý den čeká na nádraží na vlak, který už nejezdí.",
      "stab": [
        {
          "ucinkujiciId": "lukas-brenner",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-kyslik",
      "nazev": "Kyslík",
      "nazevOriginal": "Kyslík",
      "rok": 2027,
      "delkaMin": 9,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "kratky",
        "dystopie"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "bez dialogů",
      "titulky": null,
      "anotace": "Animovaná vize města, kde se kyslík prodává na lístky.",
      "stab": [
        {
          "ucinkujiciId": "tereza-jirku",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-satelit-v-kredenci",
      "nazev": "Satelit v kredenci",
      "nazevOriginal": "Satelit v kredenci",
      "rok": 2026,
      "delkaMin": 12,
      "zeme": [
        "SK"
      ],
      "subzanr": [
        "kratky",
        "rodinny",
        "animovany"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "slovenština",
      "titulky": "čeština",
      "anotace": "Babička schovává v kredenci malý satelit a vnuk zjistí proč.",
      "stab": [
        {
          "ucinkujiciId": "marek-holub",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-mezihvezdna-posta",
      "nazev": "Mezihvězdná pošta",
      "nazevOriginal": "Interstellär post",
      "rok": 2026,
      "delkaMin": 15,
      "zeme": [
        "SE"
      ],
      "subzanr": [
        "kratky"
      ],
      "vekovaPristupnost": 6,
      "jazyk": "švédština",
      "titulky": "čeština",
      "anotace": "Pošťačka doručuje dopisy, které cestovaly světlem sto let.",
      "stab": [
        {
          "ucinkujiciId": "anna-lindqvist",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-nulty-cas",
      "nazev": "Nultý čas",
      "nazevOriginal": "Nultý čas",
      "rok": 2027,
      "delkaMin": 13,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "kratky",
        "hard-scifi"
      ],
      "vekovaPristupnost": 15,
      "jazyk": "čeština",
      "titulky": "angličtina",
      "anotace": "Experiment se zastavením času se nepovede tak, jak měl.",
      "stab": [
        {
          "ucinkujiciId": "jakub-pesina",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-gravitace",
      "nazev": "Gravitace",
      "nazevOriginal": "Gravità",
      "rok": 2026,
      "delkaMin": 16,
      "zeme": [
        "IT"
      ],
      "subzanr": [
        "kratky"
      ],
      "vekovaPristupnost": 12,
      "jazyk": "italština",
      "titulky": "čeština",
      "anotace": "Dva vědci na dvou koncích Země zjišťují, že je k sobě něco přitahuje.",
      "stab": [
        {
          "ucinkujiciId": "sofia-marino",
          "role": "rezie"
        }
      ],
      "soutez": true
    },
    {
      "id": "f-roboti-zahradnik",
      "nazev": "Robotí zahradník",
      "nazevOriginal": "Robotí zahradník",
      "rok": 2026,
      "delkaMin": 8,
      "zeme": [
        "CZ"
      ],
      "subzanr": [
        "kratky",
        "rodinny",
        "animovany"
      ],
      "vekovaPristupnost": 0,
      "jazyk": "bez dialogů",
      "titulky": null,
      "anotace": "Loutkový příběh robota, který se stará o poslední květinu na vesmírné stanici.",
      "stab": [
        {
          "ucinkujiciId": "adam-zeleny",
          "role": "rezie"
        }
      ],
      "soutez": true
    }
  ],
  "program": [
    {
      "id": "p-0812-01",
      "nazev": "Startovací rampa: rakety z PET lahví",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T16:00:00+02:00",
      "konec": "2027-08-12T17:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "vit-sramek",
          "role": "lektor"
        }
      ],
      "popis": "Postavíme a ozdobíme vlastní rakety z PET lahví, v sobotu je odpálíme.",
      "vekOd": 6,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-02",
      "nazev": "Poslední signál",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T16:30:00+02:00",
      "konec": "2027-08-12T18:10:00+02:00",
      "filmIds": [
        "f-posledni-signal"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "tomas-hajek",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Projekce s krátkým rozhovorem s režisérem.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-03",
      "nazev": "Jak se dívat na Perseidy: průvodce pro začátečníky",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T17:00:00+02:00",
      "konec": "2027-08-12T18:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "josef-hromadka",
          "role": "prednasejici"
        }
      ],
      "popis": "Kam se dívat, jak dlouho si zvykají oči na tmu a proč nepotřebujete dalekohled.",
      "vekOd": 10,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-04",
      "nazev": "Pohádky o souhvězdích",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T18:00:00+02:00",
      "konec": "2027-08-12T19:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "dana-pospisilova",
          "role": "lektor"
        }
      ],
      "popis": "Loutkové pohádky o tom, jak se hvězdy dostaly na nebe.",
      "vekOd": 4,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-05",
      "nazev": "Hard sci-fi: kolik fyziky snese film?",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T18:30:00+02:00",
      "konec": "2027-08-12T19:45:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "tomas-hajek",
          "role": "host"
        },
        {
          "ucinkujiciId": "petr-dvornik",
          "role": "host"
        },
        {
          "ucinkujiciId": "vojtech-pazdera",
          "role": "host"
        },
        {
          "ucinkujiciId": "klara-jelinkova",
          "role": "moderator"
        }
      ],
      "popis": "Režisér, scenárista a fyzik o tom, kde končí věda a začíná vyprávění.",
      "vekOd": 12,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-06",
      "nazev": "Algoritmus snů",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T18:45:00+02:00",
      "konec": "2027-08-12T20:35:00+02:00",
      "filmIds": [
        "f-algoritmus-snu"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "jonas-weber",
          "role": "host"
        },
        {
          "ucinkujiciId": "greta-hoff",
          "role": "host"
        },
        {
          "ucinkujiciId": "simona-hlavacova",
          "role": "moderator"
        }
      ],
      "popis": "Projekce s rozhovorem s režisérem a představitelkou hlavní role.",
      "vekOd": 15,
      "tagy": [
        "ai"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-07",
      "nazev": "Exoplanety, které by si zasloužily vlastní film",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T20:30:00+02:00",
      "konec": "2027-08-12T21:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "jitka-rozsypalova",
          "role": "prednasejici"
        }
      ],
      "popis": "Nejpodivnější planety u cizích hvězd, které známe – a jak bychom je natočili.",
      "vekOd": 10,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-08",
      "nazev": "Slavnostní zahájení a projekce: Tichý horizont",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T20:45:00+02:00",
      "konec": "2027-08-12T23:00:00+02:00",
      "filmIds": [
        "f-tichy-horizont"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "marta-vrbova",
          "role": "host"
        },
        {
          "ucinkujiciId": "petra-vankova",
          "role": "host"
        },
        {
          "ucinkujiciId": "vojtech-pazdera",
          "role": "host"
        },
        {
          "ucinkujiciId": "iveta-hruba",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "uvadi"
        }
      ],
      "popis": "Zahájení 2. ročníku a premiéra zahajovacího filmu za účasti tvůrců.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-09",
      "nazev": "Ledová orbita",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T21:30:00+02:00",
      "konec": "2027-08-12T23:40:00+02:00",
      "filmIds": [
        "f-ledova-orbita"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "ingrid-solberg",
          "role": "host"
        },
        {
          "ucinkujiciId": "oskar-lind",
          "role": "host"
        },
        {
          "ucinkujiciId": "ola-berg",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Česká premiéra norské kosmické opery za účasti tvůrců.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-10",
      "nazev": "Noc maxima Perseid",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T22:00:00+02:00",
      "konec": "2027-08-13T01:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "josef-hromadka",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "barbora-lenochova",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "tomas-zednik",
          "role": "prednasejici"
        }
      ],
      "popis": "Hlavní noc pozorování meteorického roje. Nejlepší podmínky po západu Měsíce.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-11",
      "nazev": "Po projekci: Tichý horizont – jak natočit ticho vesmíru",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T23:10:00+02:00",
      "konec": "2027-08-13T00:10:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "marta-vrbova",
          "role": "host"
        },
        {
          "ucinkujiciId": "petra-vankova",
          "role": "host"
        },
        {
          "ucinkujiciId": "jitka-rozsypalova",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "moderator"
        }
      ],
      "popis": "Debata tvůrců zahajovacího filmu s vědeckou konzultantkou.",
      "vekOd": 12,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0812-12",
      "nazev": "Půlnoční klasika: Muž z kometárního mraku",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-12",
      "zacatek": "2027-08-12T23:15:00+02:00",
      "konec": "2027-08-13T01:00:00+02:00",
      "filmIds": [
        "f-muz-z-kometarniho-mraku"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "viktor-strnad",
          "role": "uvadi"
        }
      ],
      "popis": "Restaurovaná retro komedie, kterou uvede sám režisér.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-01",
      "nazev": "Robotí dílna: první krok k robotovi",
      "typ": "workshop",
      "sceneId": "louka",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T09:30:00+02:00",
      "konec": "2027-08-13T11:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "matej-patek",
          "role": "lektor"
        },
        {
          "ucinkujiciId": "kamila-fialova",
          "role": "lektor"
        }
      ],
      "popis": "Děti sestaví jednoduchého robota a naučí ho jet po čáře. Nutná rezervace.",
      "vekOd": 8,
      "tagy": [
        "ai"
      ],
      "vstup": "rezervace"
    },
    {
      "id": "p-0813-02",
      "nazev": "Papírový robot (rodinná projekce)",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T10:30:00+02:00",
      "konec": "2027-08-13T11:50:00+02:00",
      "filmIds": [
        "f-papirovy-robot"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "aiko-tanabe",
          "role": "host"
        },
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "uvadi"
        }
      ],
      "popis": "Animovaný film s českým dabingem, po projekci si děti složí vlastního papírového robota.",
      "vekOd": 0,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-03",
      "nazev": "Planetárium v nafukovacím dómu",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T11:00:00+02:00",
      "konec": "2027-08-13T11:50:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "dana-pospisilova",
          "role": "lektor"
        }
      ],
      "popis": "Hvězdná obloha ve dne v malém nafukovacím planetáriu.",
      "vekOd": 4,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-04",
      "nazev": "Mars bez příkras: co víme o rudé planetě",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T11:00:00+02:00",
      "konec": "2027-08-13T12:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "martin-brabec",
          "role": "prednasejici"
        }
      ],
      "popis": "Co o Marsu víme z hornin, sond a meteoritů – a co filmy říkají špatně.",
      "vekOd": 10,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-05",
      "nazev": "Pošli vzkaz mimozemšťanům",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T12:00:00+02:00",
      "konec": "2027-08-13T13:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "lektor"
        }
      ],
      "popis": "Vymyslíme zprávu, které by porozuměl kdokoli ve vesmíru.",
      "vekOd": 6,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-06",
      "nazev": "Gravitační vlny: jak slyšet srážku černých děr",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T13:00:00+02:00",
      "konec": "2027-08-13T14:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "petr-dvornik",
          "role": "prednasejici"
        }
      ],
      "popis": "Jak se měří chvění prostoročasu menší než průměr protonu.",
      "vekOd": 12,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-07",
      "nazev": "Soutěž krátkých filmů – blok A",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T13:30:00+02:00",
      "konec": "2027-08-13T14:55:00+02:00",
      "filmIds": [
        "f-prach",
        "f-kod-47",
        "f-studna-svetla",
        "f-posledni-astronaut"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "ema-kolarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-sedlak",
          "role": "host"
        },
        {
          "ucinkujiciId": "noor-haddad",
          "role": "host"
        },
        {
          "ucinkujiciId": "lukas-brenner",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Čtyři soutěžní krátké filmy a rozhovor s tvůrci. Diváci hlasují o cenu publika.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-08",
      "nazev": "Raketové modelářství pro rodiny",
      "typ": "workshop",
      "sceneId": "louka",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T14:00:00+02:00",
      "konec": "2027-08-13T15:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "vit-sramek",
          "role": "lektor"
        }
      ],
      "popis": "Rodiče s dětmi postaví model rakety s padákem. Nutná rezervace.",
      "vekOd": 8,
      "tagy": [
        "fyzika"
      ],
      "vstup": "rezervace"
    },
    {
      "id": "p-0813-09",
      "nazev": "Umělá inteligence na plátně a v laboratoři",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T14:30:00+02:00",
      "konec": "2027-08-13T15:45:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lucie-trnkova",
          "role": "host"
        },
        {
          "ucinkujiciId": "irena-pokorna",
          "role": "host"
        },
        {
          "ucinkujiciId": "jonas-weber",
          "role": "host"
        },
        {
          "ucinkujiciId": "simona-hlavacova",
          "role": "moderator"
        }
      ],
      "popis": "Jak se liší filmová AI od té, kterou dnes vyvíjíme.",
      "vekOd": 12,
      "tagy": [
        "ai"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-10",
      "nazev": "Zahrada na Marsu",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T15:30:00+02:00",
      "konec": "2027-08-13T17:00:00+02:00",
      "filmIds": [
        "f-zahrada-na-marsu"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "zuzana-mikova",
          "role": "host"
        },
        {
          "ucinkujiciId": "nina-kalina",
          "role": "host"
        },
        {
          "ucinkujiciId": "alena-rybova",
          "role": "host"
        },
        {
          "ucinkujiciId": "klara-jelinkova",
          "role": "moderator"
        }
      ],
      "popis": "Rodinný film za účasti tvůrců.",
      "vekOd": 6,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-11",
      "nazev": "Astrobiologie: kde hledat život",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T16:15:00+02:00",
      "konec": "2027-08-13T17:15:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "veronika-stastna",
          "role": "prednasejici"
        }
      ],
      "popis": "Od horkých pramenů po ledové měsíce: kde má smysl hledat život.",
      "vekOd": 10,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-12",
      "nazev": "Sedm měsíců",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T17:30:00+02:00",
      "konec": "2027-08-13T19:30:00+02:00",
      "filmIds": [
        "f-sedm-mesicu"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "elena-rusu",
          "role": "host"
        },
        {
          "ucinkujiciId": "beata-sramkova",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Česká premiéra rumunské kosmické opery.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-13",
      "nazev": "Ženy za kamerou žánru",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T17:45:00+02:00",
      "konec": "2027-08-13T19:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "marta-vrbova",
          "role": "host"
        },
        {
          "ucinkujiciId": "ingrid-solberg",
          "role": "host"
        },
        {
          "ucinkujiciId": "lena-marsh",
          "role": "host"
        },
        {
          "ucinkujiciId": "ema-kolarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "klara-jelinkova",
          "role": "moderator"
        }
      ],
      "popis": "Čtyři režisérky o tom, jak se točí sci-fi a proč jich je za kamerou stále málo.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-14",
      "nazev": "Fotografujeme noční oblohu mobilem",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T19:30:00+02:00",
      "konec": "2027-08-13T20:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "roman-sykora",
          "role": "prednasejici"
        }
      ],
      "popis": "Praktické tipy, jak večer na pozorovatelně vyfotit meteor i Mléčnou dráhu.",
      "vekOd": 12,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-15",
      "nazev": "Město pod kupolí",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T20:00:00+02:00",
      "konec": "2027-08-13T21:45:00+02:00",
      "filmIds": [
        "f-mesto-pod-kupoli"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "karel-dostal",
          "role": "host"
        },
        {
          "ucinkujiciId": "jan-rehor",
          "role": "host"
        },
        {
          "ucinkujiciId": "miroslav-blaha",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Projekce za účasti tvůrců.",
      "vekOd": 15,
      "tagy": [
        "klima"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-16",
      "nazev": "Dlouhý drift",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T21:00:00+02:00",
      "konec": "2027-08-13T23:20:00+02:00",
      "filmIds": [
        "f-dlouhy-drift"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "lena-marsh",
          "role": "host"
        },
        {
          "ucinkujiciId": "richard-ashby",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "uvadi"
        }
      ],
      "popis": "Česká premiéra britské kosmické opery na velkém plátně.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-17",
      "nazev": "Perseidy a Měsíc: druhá noc",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T21:45:00+02:00",
      "konec": "2027-08-14T02:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "roman-sykora",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "tomas-zednik",
          "role": "prednasejici"
        }
      ],
      "popis": "Pozorování Měsíce dalekohledy a po jeho západu lov meteorů.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-18",
      "nazev": "Dystopie jako varování",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T22:00:00+02:00",
      "konec": "2027-08-13T23:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "karel-dostal",
          "role": "host"
        },
        {
          "ucinkujiciId": "adela-kovarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "irena-pokorna",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Má smysl strašit budoucností? Režisér, klimatoložka a kognitivní vědkyně.",
      "vekOd": 15,
      "tagy": [
        "klima",
        "ai"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-19",
      "nazev": "Lovci meteorů – světová premiéra",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T22:15:00+02:00",
      "konec": "2027-08-13T23:45:00+02:00",
      "filmIds": [
        "f-lovci-meteoru"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "pavel-kriz",
          "role": "host"
        },
        {
          "ucinkujiciId": "iveta-hruba",
          "role": "host"
        },
        {
          "ucinkujiciId": "simona-hlavacova",
          "role": "moderator"
        }
      ],
      "popis": "Světová premiéra dokumentu za účasti tvůrců.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0813-20",
      "nazev": "Půlnoční projekce: Ozvěna z Europy",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-13",
      "zacatek": "2027-08-13T23:45:00+02:00",
      "konec": "2027-08-14T01:45:00+02:00",
      "filmIds": [
        "f-ozvena-z-europy"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "mateo-ferrer",
          "role": "uvadi"
        }
      ],
      "popis": "Hard sci-fi pod ledem Jupiterova měsíce, uvádí režisér.",
      "vekOd": 12,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-01",
      "nazev": "Ranní rozcvička kosmonautů",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T09:00:00+02:00",
      "konec": "2027-08-14T09:45:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "lektor"
        }
      ],
      "popis": "Pohybové hry, které trénují i skuteční astronauti.",
      "vekOd": 4,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-02",
      "nazev": "Rodinný blok krátkých filmů",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T10:00:00+02:00",
      "konec": "2027-08-14T11:00:00+02:00",
      "filmIds": [
        "f-satelit-v-kredenci",
        "f-roboti-zahradnik"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "marek-holub",
          "role": "host"
        },
        {
          "ucinkujiciId": "adam-zeleny",
          "role": "host"
        },
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "moderator"
        }
      ],
      "popis": "Dva animované soutěžní filmy pro celou rodinu a povídání s tvůrci.",
      "vekOd": 0,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-03",
      "nazev": "Kosmické záření: neviditelný déšť",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T10:30:00+02:00",
      "konec": "2027-08-14T11:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "stanislav-ruzicka",
          "role": "prednasejici"
        }
      ],
      "popis": "Co nás zasahuje z vesmíru a jak to zviditelnit v mlžné komoře.",
      "vekOd": 12,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-04",
      "nazev": "Postav si vlastní satelit",
      "typ": "workshop",
      "sceneId": "louka",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T10:45:00+02:00",
      "konec": "2027-08-14T12:15:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "kamila-fialova",
          "role": "lektor"
        },
        {
          "ucinkujiciId": "matej-patek",
          "role": "lektor"
        }
      ],
      "popis": "Model satelitu se slunečními panely z kartonu a fólie. Nutná rezervace.",
      "vekOd": 6,
      "tagy": [
        "fyzika"
      ],
      "vstup": "rezervace"
    },
    {
      "id": "p-0814-05",
      "nazev": "Pozorování Slunce bezpečně",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T11:00:00+02:00",
      "konec": "2027-08-14T12:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "eva-blazkova",
          "role": "prednasejici"
        }
      ],
      "popis": "Sluneční skvrny a protuberance přes dalekohledy se speciálními filtry.",
      "vekOd": 6,
      "tagy": [
        "astronomie"
      ],
      "vstup": "zdarma"
    },
    {
      "id": "p-0814-06",
      "nazev": "Teplota nula",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T11:30:00+02:00",
      "konec": "2027-08-14T13:15:00+02:00",
      "filmIds": [
        "f-teplota-nula"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "ondrej-lasek",
          "role": "host"
        },
        {
          "ucinkujiciId": "adela-kovarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Dokument z Arktidy a rozhovor s režisérem a klimatoložkou.",
      "vekOd": 0,
      "tagy": [
        "klima"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-07",
      "nazev": "Rakety, které přistávají",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T12:30:00+02:00",
      "konec": "2027-08-14T13:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "hugo-lambert",
          "role": "prednasejici"
        }
      ],
      "popis": "Jak funguje opakovaně použitelná raketa a proč to trvalo tak dlouho.",
      "vekOd": 10,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-08",
      "nazev": "Malujeme mlhoviny",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T13:30:00+02:00",
      "konec": "2027-08-14T15:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "dana-pospisilova",
          "role": "lektor"
        }
      ],
      "popis": "Výtvarná dílna inspirovaná snímky z vesmírných teleskopů.",
      "vekOd": 4,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-09",
      "nazev": "Soutěž krátkých filmů – blok B",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T14:00:00+02:00",
      "konec": "2027-08-14T15:30:00+02:00",
      "filmIds": [
        "f-kyslik",
        "f-nulty-cas",
        "f-gravitace",
        "f-mezihvezdna-posta"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "tereza-jirku",
          "role": "host"
        },
        {
          "ucinkujiciId": "jakub-pesina",
          "role": "host"
        },
        {
          "ucinkujiciId": "sofia-marino",
          "role": "host"
        },
        {
          "ucinkujiciId": "anna-lindqvist",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Druhý soutěžní blok a rozhovor s tvůrci. Diváci hlasují o cenu publika.",
      "vekOd": 15,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-10",
      "nazev": "Klima 2100: sci-fi, nebo zpravodajství?",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T14:00:00+02:00",
      "konec": "2027-08-14T15:15:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "adela-kovarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "yara-costa",
          "role": "host"
        },
        {
          "ucinkujiciId": "hana-kostelecka",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-lasek",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Vědkyně a filmaři o tom, jak vyprávět o klimatu bez katastrofické únavy.",
      "vekOd": 12,
      "tagy": [
        "klima"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-11",
      "nazev": "Jak se píše věrohodná sci-fi",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T15:45:00+02:00",
      "konec": "2027-08-14T16:45:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "radim-kostka",
          "role": "prednasejici"
        }
      ],
      "popis": "Workshopová přednáška o worldbuildingu a práci s vědeckými konzultanty.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-12",
      "nazev": "Přílivová zóna",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T16:00:00+02:00",
      "konec": "2027-08-14T17:50:00+02:00",
      "filmIds": [
        "f-prilivova-zona"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "hana-kostelecka",
          "role": "host"
        },
        {
          "ucinkujiciId": "alena-rybova",
          "role": "host"
        },
        {
          "ucinkujiciId": "ivo-lastovka",
          "role": "host"
        },
        {
          "ucinkujiciId": "simona-hlavacova",
          "role": "moderator"
        }
      ],
      "popis": "Premiéra za účasti tvůrců.",
      "vekOd": 12,
      "tagy": [
        "klima"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-13",
      "nazev": "Velký start: odpalujeme vodní rakety",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T16:30:00+02:00",
      "konec": "2027-08-14T17:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "vit-sramek",
          "role": "lektor"
        },
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "lektor"
        }
      ],
      "popis": "Odpálíme rakety postavené během festivalu. Kdo doletí nejdál?",
      "vekOd": 6,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-14",
      "nazev": "Setkání s Martou Vrbovou",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T17:15:00+02:00",
      "konec": "2027-08-14T18:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "marta-vrbova",
          "role": "host"
        },
        {
          "ucinkujiciId": "klara-jelinkova",
          "role": "moderator"
        }
      ],
      "popis": "Otevřený rozhovor s režisérkou zahajovacího filmu, prostor pro otázky diváků.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-15",
      "nazev": "Hranice atmosféry",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T18:30:00+02:00",
      "konec": "2027-08-14T20:25:00+02:00",
      "filmIds": [
        "f-hranice-atmosfery"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "samuel-okafor",
          "role": "host"
        },
        {
          "ucinkujiciId": "radim-kostka",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Česká premiéra za účasti tvůrců.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-16",
      "nazev": "Kvantová fyzika pro neodborníky",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T19:00:00+02:00",
      "konec": "2027-08-14T20:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "daniel-koubek",
          "role": "prednasejici"
        }
      ],
      "popis": "Kvantová provázanost a teleportace bez rovnic – a co z toho ve filmech nefunguje.",
      "vekOd": 15,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-17",
      "nazev": "Cesta k Proximě (restaurovaná verze)",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T20:45:00+02:00",
      "konec": "2027-08-14T22:30:00+02:00",
      "filmIds": [
        "f-cesta-k-proxime"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "viktor-strnad",
          "role": "host"
        },
        {
          "ucinkujiciId": "milena-tumova",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "uvadi"
        }
      ],
      "popis": "Klasika české sci-fi na velkém plátně, uvádí režisér a představitelka hlavní role.",
      "vekOd": 6,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-18",
      "nazev": "Signál z pole",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T21:00:00+02:00",
      "konec": "2027-08-14T22:20:00+02:00",
      "filmIds": [
        "f-signal-z-pole"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "klara-benesova",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Dokument o radioastronomech-amatérech a rozhovor s režisérkou.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-19",
      "nazev": "Je někdo tam venku?",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T21:00:00+02:00",
      "konec": "2027-08-14T22:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "veronika-stastna",
          "role": "host"
        },
        {
          "ucinkujiciId": "jitka-rozsypalova",
          "role": "host"
        },
        {
          "ucinkujiciId": "mateo-ferrer",
          "role": "host"
        },
        {
          "ucinkujiciId": "simona-hlavacova",
          "role": "moderator"
        }
      ],
      "popis": "Astrobioložka, astrofyzička a režisér o hledání mimozemského života.",
      "vekOd": 12,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-20",
      "nazev": "Perseidy a dorůstající Měsíc",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T22:00:00+02:00",
      "konec": "2027-08-15T01:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "roman-sykora",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "tomas-zednik",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "barbora-lenochova",
          "role": "prednasejici"
        }
      ],
      "popis": "Pozorování Měsíce, planet a meteorů. Astrofotografický koutek.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-21",
      "nazev": "Noční talk: fyzika filmových výbuchů",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T22:30:00+02:00",
      "konec": "2027-08-14T23:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "petr-dvornik",
          "role": "host"
        },
        {
          "ucinkujiciId": "stanislav-ruzicka",
          "role": "host"
        },
        {
          "ucinkujiciId": "samuel-okafor",
          "role": "host"
        },
        {
          "ucinkujiciId": "ondrej-cap",
          "role": "moderator"
        }
      ],
      "popis": "Proč ve vesmíru nic nebouchá a proč to filmaři stejně dělají.",
      "vekOd": 12,
      "tagy": [
        "fyzika"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0814-22",
      "nazev": "Půlnoční kosmická opera: Sedm měsíců (repríza)",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-14",
      "zacatek": "2027-08-14T23:00:00+02:00",
      "konec": "2027-08-15T01:05:00+02:00",
      "filmIds": [
        "f-sedm-mesicu"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "beata-sramkova",
          "role": "uvadi"
        }
      ],
      "popis": "Repríza pro noční publikum, uvádí scenáristka.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-01",
      "nazev": "Pohádky o Měsíci",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T09:30:00+02:00",
      "konec": "2027-08-15T10:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "dana-pospisilova",
          "role": "lektor"
        }
      ],
      "popis": "Loutkové pohádky o Měsíci a jeho proměnách.",
      "vekOd": 4,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-02",
      "nazev": "Zahrada na Marsu (repríza)",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T10:00:00+02:00",
      "konec": "2027-08-15T11:30:00+02:00",
      "filmIds": [
        "f-zahrada-na-marsu"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "zuzana-mikova",
          "role": "uvadi"
        }
      ],
      "popis": "Rodinná repríza, uvádí režisérka.",
      "vekOd": 6,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-03",
      "nazev": "Robotí závody",
      "typ": "workshop",
      "sceneId": "louka",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T10:30:00+02:00",
      "konec": "2027-08-15T12:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "matej-patek",
          "role": "lektor"
        },
        {
          "ucinkujiciId": "kamila-fialova",
          "role": "lektor"
        }
      ],
      "popis": "Děti naprogramují robota a pošlou ho na závodní dráhu. Nutná rezervace.",
      "vekOd": 8,
      "tagy": [
        "ai"
      ],
      "vstup": "rezervace"
    },
    {
      "id": "p-0815-04",
      "nazev": "Meteority v ruce: co padá z nebe",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T10:30:00+02:00",
      "konec": "2027-08-15T11:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "josef-hromadka",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "martin-brabec",
          "role": "prednasejici"
        }
      ],
      "popis": "Skutečné meteority, které si můžete podržet, a jak je poznat od obyčejných kamenů.",
      "vekOd": 6,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-05",
      "nazev": "Slunce v dalekohledu",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T11:00:00+02:00",
      "konec": "2027-08-15T12:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "eva-blazkova",
          "role": "prednasejici"
        }
      ],
      "popis": "Bezpečné pozorování Slunce přes speciální filtry.",
      "vekOd": 6,
      "tagy": [
        "astronomie"
      ],
      "vstup": "zdarma"
    },
    {
      "id": "p-0815-06",
      "nazev": "Lovci meteorů (repríza)",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T12:00:00+02:00",
      "konec": "2027-08-15T13:20:00+02:00",
      "filmIds": [
        "f-lovci-meteoru"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "pavel-kriz",
          "role": "uvadi"
        }
      ],
      "popis": "Repríza dokumentu, uvádí režisér.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-07",
      "nazev": "Umělá inteligence v astronomii",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T12:30:00+02:00",
      "konec": "2027-08-15T13:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lucie-trnkova",
          "role": "prednasejici"
        }
      ],
      "popis": "Jak strojové učení hledá v datech supernovy a nové planety.",
      "vekOd": 12,
      "tagy": [
        "ai",
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-08",
      "nazev": "Kreslíme vlastní planetu",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T13:30:00+02:00",
      "konec": "2027-08-15T15:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "lektor"
        }
      ],
      "popis": "Vymyslíme planetu, její obyvatele a počasí.",
      "vekOd": 4,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-09",
      "nazev": "Mozek, stroj a vědomí",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T14:00:00+02:00",
      "konec": "2027-08-15T15:15:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "irena-pokorna",
          "role": "host"
        },
        {
          "ucinkujiciId": "lucie-trnkova",
          "role": "host"
        },
        {
          "ucinkujiciId": "daniel-koubek",
          "role": "host"
        },
        {
          "ucinkujiciId": "klara-jelinkova",
          "role": "moderator"
        }
      ],
      "popis": "Může mít stroj vědomí? A poznali bychom to?",
      "vekOd": 15,
      "tagy": [
        "ai"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-10",
      "nazev": "Algoritmus snů (repríza)",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T14:15:00+02:00",
      "konec": "2027-08-15T16:05:00+02:00",
      "filmIds": [
        "f-algoritmus-snu"
      ],
      "ucinkujici": [],
      "popis": "Repríza německé dystopie.",
      "vekOd": 15,
      "tagy": [
        "ai"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-11",
      "nazev": "Lety k Měsíci: příští dekáda",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T15:45:00+02:00",
      "konec": "2027-08-15T16:45:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "hugo-lambert",
          "role": "prednasejici"
        }
      ],
      "popis": "Které mise se chystají a co budou na Měsíci hledat.",
      "vekOd": 10,
      "tagy": [
        "fyzika",
        "astronomie"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-12",
      "nazev": "Kosmický průvod v kostýmech",
      "typ": "detsky",
      "sceneId": "louka",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T16:00:00+02:00",
      "konec": "2027-08-15T17:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "lenka-bartova",
          "role": "lektor"
        },
        {
          "ucinkujiciId": "vit-sramek",
          "role": "lektor"
        }
      ],
      "popis": "Rozloučení s Raketovou loukou: průvod v kostýmech astronautů a mimozemšťanů.",
      "vekOd": 0,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-13",
      "nazev": "Vyhlášení soutěže a projekce vítězných filmů",
      "typ": "projekce",
      "sceneId": "planeta",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T17:00:00+02:00",
      "konec": "2027-08-15T18:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "ema-kolarova",
          "role": "host"
        },
        {
          "ucinkujiciId": "noor-haddad",
          "role": "host"
        },
        {
          "ucinkujiciId": "jakub-pesina",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "moderator"
        }
      ],
      "popis": "Vyhlášení cen poroty a publika. Vítězné filmy budou oznámeny při vyhlášení.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-14",
      "nazev": "Kam dál, sci-fi?",
      "typ": "debata",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T17:15:00+02:00",
      "konec": "2027-08-15T18:15:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "tomas-hajek",
          "role": "host"
        },
        {
          "ucinkujiciId": "radim-kostka",
          "role": "host"
        },
        {
          "ucinkujiciId": "beata-sramkova",
          "role": "host"
        },
        {
          "ucinkujiciId": "monika-sterbova",
          "role": "moderator"
        }
      ],
      "popis": "Tvůrci a diváci o budoucnosti žánru v Česku a na Slovensku.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-15",
      "nazev": "Klima z oběžné dráhy: co vidí satelity",
      "typ": "prednaska",
      "sceneId": "teorie",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T20:00:00+02:00",
      "konec": "2027-08-15T21:00:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "yara-costa",
          "role": "prednasejici"
        }
      ],
      "popis": "Satelitní snímky oceánů, ledovců a lesů a co nám říkají o planetě.",
      "vekOd": 12,
      "tagy": [
        "klima"
      ],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-16",
      "nazev": "Slavnostní zakončení a projekce: Ledová orbita",
      "typ": "projekce",
      "sceneId": "kopule",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T20:45:00+02:00",
      "konec": "2027-08-15T22:50:00+02:00",
      "filmIds": [
        "f-ledova-orbita"
      ],
      "ucinkujici": [
        {
          "ucinkujiciId": "ingrid-solberg",
          "role": "host"
        },
        {
          "ucinkujiciId": "ola-berg",
          "role": "host"
        },
        {
          "ucinkujiciId": "filip-mracek",
          "role": "uvadi"
        }
      ],
      "popis": "Zakončení 2. ročníku a závěrečný film na velkém plátně.",
      "vekOd": 12,
      "tagy": [],
      "vstup": "v-cene"
    },
    {
      "id": "p-0815-17",
      "nazev": "Poslední noc pod Perseidami",
      "typ": "pozorovani",
      "sceneId": "pozorovatelna",
      "den": "2027-08-15",
      "zacatek": "2027-08-15T22:00:00+02:00",
      "konec": "2027-08-16T00:30:00+02:00",
      "filmIds": [],
      "ucinkujici": [
        {
          "ucinkujiciId": "tomas-zednik",
          "role": "prednasejici"
        },
        {
          "ucinkujiciId": "barbora-lenochova",
          "role": "prednasejici"
        }
      ],
      "popis": "Závěrečné pozorování, dozvuky roje Perseidy.",
      "vekOd": 0,
      "tagy": [
        "astronomie"
      ],
      "vstup": "v-cene"
    }
  ],
  "obloha": [
    {
      "datum": "2027-08-12",
      "zapadSlunce": "20:25",
      "konecObcanskehoSoumraku": "21:00",
      "konecAstronomickehoSoumraku": "22:25",
      "mesic": {
        "faze": "dorůstající, mezi první čtvrtí a úplňkem",
        "osvetleniProcent": 72,
        "zapad": "01:10"
      },
      "zacatekPozorovani": "22:00",
      "perseidyOdhadZHR": 100,
      "hodnoceni": "dobre",
      "poznamka": "Noc maxima roje. Měsíc ruší do 1:10, potom nejlepší podmínky až do svítání.",
      "overeno": false
    },
    {
      "datum": "2027-08-13",
      "zapadSlunce": "20:23",
      "konecObcanskehoSoumraku": "20:58",
      "konecAstronomickehoSoumraku": "22:22",
      "mesic": {
        "faze": "dorůstající",
        "osvetleniProcent": 81,
        "zapad": "01:50"
      },
      "zacatekPozorovani": "21:45",
      "perseidyOdhadZHR": 70,
      "hodnoceni": "dobre",
      "poznamka": "Den po maximu, stále vysoká aktivita. Meteory nejlépe po západu Měsíce.",
      "overeno": false
    },
    {
      "datum": "2027-08-14",
      "zapadSlunce": "20:21",
      "konecObcanskehoSoumraku": "20:56",
      "konecAstronomickehoSoumraku": "22:19",
      "mesic": {
        "faze": "dorůstající",
        "osvetleniProcent": 89,
        "zapad": "02:35"
      },
      "zacatekPozorovani": "22:00",
      "perseidyOdhadZHR": 40,
      "hodnoceni": "omezene",
      "poznamka": "Jasný Měsíc nad obzorem většinu noci. Vhodné spíš pro pozorování Měsíce a planet.",
      "overeno": false
    },
    {
      "datum": "2027-08-15",
      "zapadSlunce": "20:19",
      "konecObcanskehoSoumraku": "20:54",
      "konecAstronomickehoSoumraku": "22:16",
      "mesic": {
        "faze": "téměř úplněk",
        "osvetleniProcent": 95,
        "zapad": "03:25"
      },
      "zacatekPozorovani": "22:00",
      "perseidyOdhadZHR": 20,
      "hodnoceni": "omezene",
      "poznamka": "Dozvuky roje a téměř úplný Měsíc. Uvidíte jen nejjasnější meteory.",
      "overeno": false
    }
  ],
  "oblohaInfo": {
    "zdroj": "Orientační hodnoty pro Ondřejov odvozené odhadem, NEOVĚŘENO – před zveřejněním ověřit v astronomické ročence nebo efemeridovém kalkulátoru.",
    "vysvetlivky": {
      "ZHR": "Zenitová hodinová frekvence: kolik meteorů by bylo vidět za hodinu za ideálně tmavé oblohy s radiantem v nadhlavníku. Skutečný počet je nižší.",
      "astronomickySoumrak": "Okamžik, kdy je Slunce 18° pod obzorem a obloha je úplně tmavá."
    }
  },
  "faq": [
    {
      "id": "faq-01",
      "otazka": "Kdy a kde se Orbita koná?",
      "odpoved": "Orbita se koná od čtvrtka 12. do neděle 15. srpna 2027 v areálu Pole pod kopulí v Ondřejově (okres Praha-východ).",
      "kategorie": "obecne"
    },
    {
      "id": "faq-02",
      "otazka": "Jak se dostanu do Ondřejova bez auta?",
      "odpoved": "Po celou dobu festivalu jezdí festivalový kyvadlový autobus z Prahy, poslední spoj odjíždí z areálu po půlnoční projekci. Jízdní řád je v Praktických informacích v části Doprava.",
      "kategorie": "doprava"
    },
    {
      "id": "faq-03",
      "otazka": "Mohu přijet autem a kde zaparkuji?",
      "odpoved": "Ano, u areálu je placené festivalové parkoviště. Kapacita je omezená, proto doporučujeme festivalový autobus nebo spolujízdu.",
      "kategorie": "doprava"
    },
    {
      "id": "faq-04",
      "otazka": "Co když bude pršet?",
      "odpoved": "Projekce v Letním kině Kopule se za deště přesouvají do Sálu Planeta podle kapacity. Pozorování oblohy se za oblačnosti nahrazuje přednáškou ve Stanu Teorie.",
      "kategorie": "pocasi"
    },
    {
      "id": "faq-05",
      "otazka": "Kolik stojí vstupenky a co obsahují?",
      "odpoved": "Nabízíme permanentku na všechny čtyři dny, jednodenní vstupenku a rodinné vstupné. Vstupenka platí na všechny scény, workshopy vyžadují bezplatnou rezervaci. Ceny najdete na stránce Vstupenky.",
      "kategorie": "vstupenky"
    },
    {
      "id": "faq-06",
      "otazka": "Platí děti vstupné?",
      "odpoved": "Děti do 6 let mají vstup zdarma. Pro rodiny je výhodné rodinné vstupné pro dva dospělé a až tři děti.",
      "kategorie": "deti"
    },
    {
      "id": "faq-07",
      "otazka": "Je program vhodný pro děti?",
      "odpoved": "Ano. Na Raketové louce je každý den dětský program a u každé položky programu je uvedena doporučená věková hranice. V programu ji můžete vyfiltrovat.",
      "kategorie": "deti"
    },
    {
      "id": "faq-08",
      "otazka": "Jsou scény bezbariérové?",
      "odpoved": "Sál Planeta a Stan Teorie jsou plně bezbariérové. Letní kino Kopule, Noční pozorovatelna a Raketová louka jsou bezbariérové částečně – podrobnosti u každé scény na stránce Scény.",
      "kategorie": "pristupnost"
    },
    {
      "id": "faq-09",
      "otazka": "Má doprovod osoby se zdravotním postižením vstup zdarma?",
      "odpoved": "Ano, průvodce držitele průkazu ZTP/P má vstup zdarma. Na místě vám rádi pomůžou dobrovolníci u hlavního vstupu.",
      "kategorie": "pristupnost"
    },
    {
      "id": "faq-10",
      "otazka": "Potřebuji na pozorování Perseid dalekohled?",
      "odpoved": "Ne. Meteory se pozorují pouhým okem, nejlépe vleže. Dalekohledy na Noční pozorovatelně slouží k pozorování Měsíce a planet.",
      "kategorie": "pozorovani"
    },
    {
      "id": "faq-11",
      "otazka": "Kdy je nejlepší čas na pozorování Perseid?",
      "odpoved": "Nejvíc meteorů je vidět po půlnoci, kdy je radiant roje výše nad obzorem, a po západu Měsíce. Přesné časy pro každý večer najdete na stránce Dnešní obloha.",
      "kategorie": "pozorovani"
    },
    {
      "id": "faq-12",
      "otazka": "Mohu na festivalu stanovat?",
      "odpoved": "Ano, u areálu je festivalové tábořiště. Místo je třeba rezervovat spolu se vstupenkou.",
      "kategorie": "ubytovani"
    },
    {
      "id": "faq-13",
      "otazka": "Mohu si vzít psa?",
      "odpoved": "Psi na vodítku mohou do areálu, ne však do Sálu Planeta a na Noční pozorovatelnu.",
      "kategorie": "obecne"
    }
  ],
  "ciselniky": {
    "typ": {
      "projekce": "Projekce",
      "debata": "Debata",
      "prednaska": "Přednáška",
      "pozorovani": "Pozorování",
      "workshop": "Workshop",
      "detsky": "Dětský program"
    },
    "role": {
      "reziser": "Režie",
      "herec": "Herectví",
      "scenarista": "Scénář",
      "producent": "Produkce",
      "vedec": "Věda",
      "astronom": "Astronomie",
      "moderator": "Moderace",
      "lektor": "Lektorství"
    },
    "roleVeStabu": {
      "rezie": "Režie",
      "scenar": "Scénář",
      "herec": "Hraje",
      "produkce": "Produkce"
    },
    "roleVPolozce": {
      "host": "Host",
      "moderator": "Moderuje",
      "prednasejici": "Přednáší",
      "uvadi": "Uvádí",
      "lektor": "Vede"
    },
    "subzanr": {
      "hard-scifi": "Hard sci-fi",
      "kosmicka-opera": "Kosmická opera",
      "dystopie": "Dystopie",
      "dokument": "Dokument",
      "klasika": "Klasika",
      "kratky": "Krátký film",
      "rodinny": "Rodinný",
      "animovany": "Animovaný"
    },
    "tagy": {
      "astronomie": "Astronomie",
      "fyzika": "Fyzika",
      "ai": "Umělá inteligence",
      "klima": "Klima"
    },
    "vstup": {
      "v-cene": "V ceně vstupenky",
      "zdarma": "Zdarma",
      "rezervace": "V ceně, nutná rezervace"
    },
    "bezbarierova": {
      "ano": "Bezbariérová",
      "castecne": "Částečně bezbariérová",
      "ne": "Bez bezbariérového přístupu"
    },
    "hodnoceni": {
      "vyborne": "Výborné",
      "dobre": "Dobré",
      "omezene": "Omezené"
    },
    "typSceny": {
      "open-air": "Open-air",
      "kryta": "Krytá",
      "stan": "Stan",
      "pozorovatelna": "Pozorovatelna",
      "louka": "Louka"
    },
    "dny": {
      "2027-08-12": "Čtvrtek 12. 8.",
      "2027-08-13": "Pátek 13. 8.",
      "2027-08-14": "Sobota 14. 8.",
      "2027-08-15": "Neděle 15. 8."
    }
  }
};
