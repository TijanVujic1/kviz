const QUESTIONS = [
  {
    id: 1,
    category: "uvod",
    difficulty: "medium",
    question: "Katera opredelitev najbolje opisuje psihologijo?",
    options: [
      "Veda, ki preučuje duševne motnje in njihovo zdravljenje.",
      "Znanost o delovanju možganov in živčnega sistema.",
      "Znanstveno proučevanje vedenja in duševnih procesov.",
      "Veda, ki preučuje osebnostne lastnosti posameznika.",
    ],
    answer: 2,
    explanation:
      "Psihologija preučuje vedenje in duševne procese. Ostali odgovori opisujejo le posamezna področja psihologije.",
  },

  {
    id: 2,
    category: "uvod",
    difficulty: "hard",
    question:
      "Kateri cilj psihologije pomeni ugotavljanje dejavnikov, ki povzročajo določeno vedenje?",
    options: [
      "Opisovanje vedenja.",
      "Napovedovanje vedenja.",
      "Vplivanje na vedenje.",
      "Razlaganje vedenja.",
    ],
    answer: 3,
    explanation:
      "Razlaganje pomeni iskanje vzrokov in mehanizmov, ki vodijo do vedenja.",
  },

  {
    id: 3,
    category: "uvod",
    difficulty: "hard",
    question:
      "Kateri cilj psihologije je povezan s predvidevanjem prihodnjega vedenja posameznika?",
    options: ["Opisovanje.", "Razlaganje.", "Napovedovanje.", "Vplivanje."],
    answer: 2,
    explanation:
      "Napovedovanje pomeni oceniti, kako se bo posameznik verjetno vedel v določenih okoliščinah.",
  },

  {
    id: 4,
    category: "uvod",
    difficulty: "medium",
    question: "Katera trditev najbolje opisuje neodvisno spremenljivko?",
    options: [
      "Spremenljivka, katere spremembe raziskovalec meri.",
      "Spremenljivka, ki jo raziskovalec načrtno spreminja.",
      "Spremenljivka, ki ostane nespremenjena.",
      "Spremenljivka, ki nastane zaradi naključja.",
    ],
    answer: 1,
    explanation:
      "Neodvisna spremenljivka je tista, ki jo raziskovalec nadzoruje ali spreminja.",
  },

  {
    id: 5,
    category: "uvod",
    difficulty: "medium",
    question: "Katera trditev najbolje opisuje odvisno spremenljivko?",
    options: [
      "Predstavlja rezultat, ki ga raziskovalec meri.",
      "Je dejavnik, ki ga raziskovalec spreminja.",
      "Predstavlja hipotezo raziskave.",
      "Je vedno nespremenjena.",
    ],
    answer: 0,
    explanation:
      "Odvisna spremenljivka je rezultat oziroma učinek, ki ga raziskovalec meri.",
  },

  {
    id: 6,
    category: "uvod",
    difficulty: "hard",
    question:
      "Zakaj velja eksperiment za najprimernejšo metodo pri ugotavljanju vzročno-posledičnih povezav?",
    options: [
      "Ker omogoča uporabo večjega vzorca.",
      "Ker raziskovalec nadzoruje pogoje in spremenljivke.",
      "Ker udeleženci odgovarjajo anonimno.",
      "Ker je izvedba cenejša od drugih metod.",
    ],
    answer: 1,
    explanation:
      "Eksperiment omogoča nadzor nad pogoji in s tem sklepanje o vzročnosti.",
  },

  {
    id: 7,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj pomeni, da je psihološki test veljaven?",
    options: [
      "Da daje podobne rezultate pri ponovnem merjenju.",
      "Da vsebuje dovolj veliko število nalog.",
      "Da meri tisto lastnost, ki jo želi meriti.",
      "Da je primeren za vse starostne skupine.",
    ],
    answer: 2,
    explanation:
      "Veljavnost pomeni, da test dejansko meri predvideni konstrukt.",
  },

  {
    id: 8,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj pomeni zanesljivost psihološkega testa?",
    options: [
      "Da meri pravilno psihološko lastnost.",
      "Da daje stabilne rezultate ob ponovnem merjenju.",
      "Da ima standardizirana navodila.",
      "Da vsebuje normativne podatke.",
    ],
    answer: 1,
    explanation: "Zanesljivost pomeni doslednost in stabilnost rezultatov.",
  },

  {
    id: 9,
    category: "uvod",
    difficulty: "medium",
    question:
      "Katera raziskovalna metoda temelji predvsem na neposrednem pogovoru z udeležencem?",
    options: ["Eksperiment.", "Anketa.", "Intervju.", "Opazovanje."],
    answer: 2,
    explanation:
      "Intervju je metoda zbiranja podatkov s strukturiranim ali nestrukturiranim pogovorom.",
  },

  {
    id: 10,
    category: "uvod",
    difficulty: "hard",
    question:
      "Katera trditev najbolje opisuje objektivnost v psihološkem raziskovanju?",
    options: [
      "Raziskovalec uporablja velik vzorec.",
      "Rezultati niso odvisni od osebnih prepričanj raziskovalca.",
      "Raziskava poteka v laboratoriju.",
      "V raziskavi sodeluje kontrolna skupina.",
    ],
    answer: 1,
    explanation:
      "Objektivnost pomeni, da osebna stališča raziskovalca ne vplivajo na interpretacijo rezultatov.",
  },

  {
    id: 11,
    category: "uvod",
    difficulty: "hard",
    question: "Katera kombinacija predstavlja štiri osnovne cilje psihologije?",
    options: [
      "Opazovati, diagnosticirati, zdraviti, svetovati.",
      "Meriti, analizirati, zdraviti, preprečevati.",
      "Opisati, razložiti, napovedati in vplivati na vedenje.",
      "Raziskovati, eksperimentirati, opazovati in svetovati.",
    ],
    answer: 2,
    explanation: "To so štirje temeljni cilji psihologije.",
  },

  {
    id: 12,
    category: "uvod",
    difficulty: "medium",
    question: "Katera izjava o psihologiji je najbolj pravilna?",
    options: [
      "Psihologija preučuje izključno duševne motnje.",
      "Psihologija preučuje vedenje, čustva, mišljenje in druge duševne procese.",
      "Psihologija se ukvarja samo z delovanjem možganov.",
      "Psihologija je veja medicine.",
    ],
    answer: 1,
    explanation:
      "Psihologija zajema široko področje duševnih procesov in vedenja.",
  },

  {
    id: 13,
    category: "zaznavanje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje zaznavanje?",
    options: [
      "Proces sprejemanja dražljajev s čutili.",
      "Proces organiziranja in interpretiranja čutilnih informacij.",
      "Proces shranjevanja informacij v spomin.",
      "Proces usmerjanja pozornosti na pomembne dražljaje.",
    ],
    answer: 1,
    explanation:
      "Zaznavanje ni le sprejemanje informacij, ampak njihova organizacija in interpretacija.",
  },

  {
    id: 14,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Katero Gestalt načelo pravi, da elemente, ki so si podobni, zaznavamo kot celoto?",
    options: [
      "Načelo bližine.",
      "Načelo zaključenosti.",
      "Načelo podobnosti.",
      "Načelo kontinuitete.",
    ],
    answer: 2,
    explanation:
      "Po načelu podobnosti skupaj zaznavamo elemente, ki imajo skupne lastnosti.",
  },

  {
    id: 15,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Katero Gestalt načelo opisuje težnjo, da dopolnimo manjkajoče dele slike?",
    options: [
      "Načelo podobnosti.",
      "Načelo zaključenosti.",
      "Načelo bližine.",
      "Načelo kontinuitete.",
    ],
    answer: 1,
    explanation:
      "Načelo zaključenosti pomeni, da nepopolne oblike zaznavamo kot celote.",
  },

  {
    id: 16,
    category: "zaznavanje",
    difficulty: "medium",
    question: "Kaj pomeni razlikovanje med likom in ozadjem?",
    options: [
      "Da razlikujemo med pomembnimi in nepomembnimi čutili.",
      "Da ločimo predmet zaznavanja od okolice.",
      "Da zaznavamo globino prostora.",
      "Da dopolnjujemo nepopolne informacije.",
    ],
    answer: 1,
    explanation:
      "Lik je predmet naše pozornosti, ozadje pa okolica, iz katere izstopa.",
  },

  {
    id: 17,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje iluzijo?",
    options: [
      "Gre za zaznavo brez zunanjega dražljaja.",
      "Gre za vsiljivo misel brez realne osnove.",
      "Gre za napačno interpretacijo dejanskega dražljaja.",
      "Gre za lažno prepričanje, ki ga ni mogoče spremeniti.",
    ],
    answer: 2,
    explanation:
      "Pri iluziji je zunanji dražljaj prisoten, vendar ga interpretiramo napačno.",
  },

  {
    id: 18,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kako se halucinacija razlikuje od iluzije?",
    options: [
      "Pri halucinaciji ni zunanjega dražljaja.",
      "Pri halucinaciji gre za napačno interpretacijo dražljaja.",
      "Pri halucinaciji gre za motnjo spomina.",
      "Pri halucinaciji gre za lažno prepričanje.",
    ],
    answer: 0,
    explanation:
      "Halucinacija nastane brez zunanjega dražljaja, iluzija pa temelji na dejanskem dražljaju.",
  },

  {
    id: 19,
    category: "zaznavanje",
    difficulty: "medium",
    question:
      "Katera zaznavna konstanta nam omogoča prepoznavanje predmeta kljub spremembi oddaljenosti?",
    options: [
      "Konstanca oblike.",
      "Konstanca velikosti.",
      "Konstanca barve.",
      "Konstanca globine.",
    ],
    answer: 1,
    explanation:
      "Predmet zaznavamo kot enako velik, tudi če se njegova slika na mrežnici spreminja.",
  },

  {
    id: 20,
    category: "zaznavanje",
    difficulty: "medium",
    question:
      "Katera zaznavna konstanta omogoča, da predmet prepoznamo ne glede na zorni kot?",
    options: [
      "Konstanca velikosti.",
      "Konstanca barve.",
      "Konstanca oblike.",
      "Konstanca svetlosti.",
    ],
    answer: 2,
    explanation:
      "Predmet prepoznamo kot iste oblike tudi ob spremembi perspektive.",
  },

  {
    id: 21,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Banano zaznavamo kot rumeno tudi pod različnimi svetlobnimi pogoji. To imenujemo:",
    options: [
      "Konstanca oblike.",
      "Konstanca velikosti.",
      "Konstanca barve.",
      "Načelo podobnosti.",
    ],
    answer: 2,
    explanation:
      "Konstanca barve omogoča stabilno zaznavanje barv kljub spremembam osvetlitve.",
  },

  {
    id: 22,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Ko plašč na stolu ponoči zaznamo kot osebo, gre za:",
    options: ["Halucinacijo.", "Blodnjo.", "Iluzijo.", "Obsesijo."],
    answer: 2,
    explanation:
      "Prisoten je dejanski dražljaj (plašč), ki ga interpretiramo napačno.",
  },

  {
    id: 23,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Katero Gestalt načelo pravi, da elemente, ki so si prostorsko blizu, zaznavamo kot povezane?",
    options: [
      "Načelo bližine.",
      "Načelo podobnosti.",
      "Načelo kontinuitete.",
      "Načelo zaključenosti.",
    ],
    answer: 0,
    explanation: "Elemente, ki so si blizu, zaznavamo kot skupino.",
  },

  {
    id: 24,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Katero Gestalt načelo pomeni, da zaznavamo neprekinjene vzorce in linije?",
    options: [
      "Načelo bližine.",
      "Načelo podobnosti.",
      "Načelo kontinuitete.",
      "Načelo zaključenosti.",
    ],
    answer: 2,
    explanation:
      "Kontinuiteta pomeni, da imamo raje gladke in neprekinjene zaznavne poti.",
  },

  {
    id: 25,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Katera trditev o zaznavanju je najbolj pravilna?",
    options: [
      "Zaznavanje je pasivno sprejemanje informacij iz okolja.",
      "Zaznavanje je izključno odvisno od čutil.",
      "Zaznavanje vključuje organizacijo in interpretacijo informacij.",
      "Zaznavanje poteka brez vpliva predhodnih izkušenj.",
    ],
    answer: 2,
    explanation:
      "Na zaznavanje vplivajo tudi izkušnje, pričakovanja in interpretacija.",
  },

  {
    id: 26,
    category: "zaznavanje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje pozornost?",
    options: [
      "Proces organiziranja čutilnih informacij.",
      "Sposobnost dolgotrajnega shranjevanja informacij.",
      "Usmerjanje duševne dejavnosti na izbrane dražljaje.",
      "Proces oblikovanja novih spominov.",
    ],
    answer: 2,
    explanation:
      "Pozornost pomeni usmerjanje duševnih procesov na pomembne informacije iz okolja.",
  },

  {
    id: 27,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Katera lastnost pozornosti nam omogoča spremljanje več nalog hkrati?",
    options: ["Selektivnost.", "Trajanje.", "Obseg.", "Deljivost."],
    answer: 3,
    explanation:
      "Deljivost pozornosti pomeni, da lahko pozornost razdelimo med več dejavnosti.",
  },

  {
    id: 28,
    category: "zaznavanje",
    difficulty: "medium",
    question:
      "Katera lastnost pozornosti pomeni osredotočanje na pomembne dražljaje?",
    options: ["Obseg.", "Selektivnost.", "Trajanje.", "Deljivost."],
    answer: 1,
    explanation:
      "Selektivnost pomeni izbiro pomembnih informacij in zanemarjanje nepomembnih.",
  },

  {
    id: 29,
    category: "spomin",
    difficulty: "medium",
    question: "Kateri trije procesi sestavljajo delovanje spomina?",
    options: [
      "Pozornost, zaznavanje in mišljenje.",
      "Kodiranje, shranjevanje in priklic.",
      "Organizacija, elaboracija in pozabljanje.",
      "Sprejemanje, obdelava in pozabljanje.",
    ],
    answer: 1,
    explanation:
      "Spomin temelji na kodiranju, shranjevanju in priklicu informacij.",
  },

  {
    id: 30,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni kodiranje v procesu spomina?",
    options: [
      "Ponovno obujanje informacij.",
      "Pretvorbo informacij v obliko, primerno za shranjevanje.",
      "Dolgotrajno ohranjanje informacij.",
      "Izgubo informacij iz spomina.",
    ],
    answer: 1,
    explanation:
      "Kodiranje pomeni pretvorbo zaznanih informacij v spominsko sled.",
  },
  {
    id: 31,
    category: "spomin",
    difficulty: "medium",
    question: "Kateri tip spomina vsebuje splošno znanje o svetu?",
    options: [
      "Epizodični spomin.",
      "Proceduralni spomin.",
      "Semantični spomin.",
      "Senzorni spomin.",
    ],
    answer: 2,
    explanation: "Semantični spomin vsebuje dejstva, pojme in splošno znanje.",
  },

  {
    id: 32,
    category: "spomin",
    difficulty: "hard",
    question: "Spomin na svoj prvi šolski dan je primer:",
    options: [
      "Semantičnega spomina.",
      "Proceduralnega spomina.",
      "Epizodičnega spomina.",
      "Kratkoročnega spomina.",
    ],
    answer: 2,
    explanation: "Epizodični spomin vsebuje osebne dogodke in izkušnje.",
  },

  {
    id: 33,
    category: "spomin",
    difficulty: "hard",
    question: "Vožnja kolesa je primer:",
    options: [
      "Semantičnega spomina.",
      "Epizodičnega spomina.",
      "Proceduralnega spomina.",
      "Senzornega spomina.",
    ],
    answer: 2,
    explanation: "Proceduralni spomin vsebuje naučene spretnosti in navade.",
  },

  {
    id: 34,
    category: "spomin",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje deklarativni spomin?",
    options: [
      "Gre za nezavedni spomin na spretnosti.",
      "Vključuje semantični in epizodični spomin.",
      "Traja le nekaj sekund.",
      "Je omejen na senzorne informacije.",
    ],
    answer: 1,
    explanation:
      "Deklarativni spomin je zavedni spomin, ki vključuje dejstva in osebne dogodke.",
  },

  {
    id: 35,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni proaktivna interferenca?",
    options: [
      "Novo znanje ovira priklic starega.",
      "Staro znanje ovira učenje novega.",
      "Informacije izginejo iz spomina.",
      "Spomin postane trajnejši.",
    ],
    answer: 1,
    explanation:
      "Pri proaktivni interferenci staro znanje moti učenje ali priklic novega.",
  },

  {
    id: 36,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni retroaktivna interferenca?",
    options: [
      "Novo znanje ovira priklic starega.",
      "Staro znanje ovira novo znanje.",
      "Gre za izgubo proceduralnega spomina.",
      "Gre za izboljšanje spominske uspešnosti.",
    ],
    answer: 0,
    explanation:
      "Pri retroaktivni interferenci novo znanje moti priklic starega.",
  },

  {
    id: 37,
    category: "spomin",
    difficulty: "hard",
    question: "Novo geslo ti povzroča težave, ker se spomniš starega. Gre za:",
    options: [
      "Retroaktivno interferenco.",
      "Proaktivno interferenco.",
      "Elaboracijo.",
      "Senzorni spomin.",
    ],
    answer: 1,
    explanation: "Staro znanje (staro geslo) ovira učenje novega.",
  },

  {
    id: 38,
    category: "spomin",
    difficulty: "hard",
    question:
      "Ne spomniš se stare telefonske številke, ker si si zapomnil novo. Gre za:",
    options: [
      "Retroaktivno interferenco.",
      "Proaktivno interferenco.",
      "Proceduralni spomin.",
      "Semantični spomin.",
    ],
    answer: 0,
    explanation: "Novo znanje (nova številka) ovira priklic starega.",
  },

  {
    id: 39,
    category: "spomin",
    difficulty: "medium",
    question: "Kaj pomeni elaboracija kot strategija izboljšanja spomina?",
    options: [
      "Ponavljanje informacij brez razumevanja.",
      "Razdeljevanje informacij v skupine.",
      "Povezovanje novih informacij z obstoječim znanjem.",
      "Zapisovanje informacij brez razlage.",
    ],
    answer: 2,
    explanation:
      "Elaboracija pomeni globljo obdelavo informacij s povezovanjem.",
  },

  {
    id: 40,
    category: "spomin",
    difficulty: "medium",
    question: "Kaj pomeni organizacija pri učenju?",
    options: [
      "Ponavljanje informacij.",
      "Združevanje informacij v smiselne skupine.",
      "Pozabljanje nepomembnih podatkov.",
      "Hitro branje učnega gradiva.",
    ],
    answer: 1,
    explanation:
      "Organizacija izboljša priklic z urejanjem informacij v strukture.",
  },

  {
    id: 41,
    category: "ucenje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje učenje?",
    options: [
      "Vsaka sprememba vedenja zaradi zorenja.",
      "Trajna sprememba vedenja ali znanja zaradi izkušenj.",
      "Vsaka sprememba razpoloženja.",
      "Prirojena sposobnost prilagajanja okolju.",
    ],
    answer: 1,
    explanation:
      "Učenje pomeni relativno trajno spremembo vedenja ali znanja kot posledico izkušenj.",
  },

  {
    id: 42,
    category: "ucenje",
    difficulty: "hard",
    question: "Kdo velja za utemeljitelja klasičnega pogojevanja?",
    options: [
      "B. F. Skinner.",
      "Albert Bandura.",
      "Ivan Pavlov.",
      "Edward Thorndike.",
    ],
    answer: 2,
    explanation:
      "Ivan Pavlov je s poskusi na psih pokazal principe klasičnega pogojevanja.",
  },

  {
    id: 43,
    category: "ucenje",
    difficulty: "hard",
    question: "Pri klasičnem pogojevanju pogojni dražljaj predstavlja:",
    options: [
      "Dražljaj, ki naravno sproži odziv.",
      "Naučen dražljaj, ki po povezovanju sproži odziv.",
      "Vsak neprijeten dražljaj.",
      "Končni vedenjski odziv.",
    ],
    answer: 1,
    explanation:
      "Pogojni dražljaj je prvotno nevtralen dražljaj, ki po učenju sproži odziv.",
  },

  {
    id: 44,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj predstavlja pogojni odziv?",
    options: [
      "Prirojeni refleks.",
      "Naučeni odziv na pogojni dražljaj.",
      "Nevtralni dražljaj.",
      "Kaznovalni odziv.",
    ],
    answer: 1,
    explanation:
      "Pogojni odziv je naučena reakcija, ki nastane po pogojevanju.",
  },

  {
    id: 45,
    category: "ucenje",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje pozitivno okrepitev?",
    options: [
      "Odstranimo neprijeten dražljaj in povečamo vedenje.",
      "Dodamo prijeten dražljaj in povečamo vedenje.",
      "Dodamo neprijeten dražljaj in zmanjšamo vedenje.",
      "Odstranimo prijeten dražljaj in zmanjšamo vedenje.",
    ],
    answer: 1,
    explanation:
      "Pozitivna okrepitev pomeni dodajanje prijetne posledice za povečanje vedenja.",
  },

  {
    id: 46,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj pomeni negativna okrepitev?",
    options: [
      "Odstranitev neprijetnega dražljaja, kar poveča vedenje.",
      "Dodajanje neprijetnega dražljaja za zmanjšanje vedenja.",
      "Odstranitev prijetnega dražljaja za zmanjšanje vedenja.",
      "Ignoriranje vedenja.",
    ],
    answer: 0,
    explanation:
      "Negativna okrepitev ne pomeni kazni, ampak odstranitev neprijetnega dražljaja.",
  },

  {
    id: 47,
    category: "ucenje",
    difficulty: "hard",
    question: "Katera je glavna razlika med okrepitvijo in kaznijo?",
    options: [
      "Okrepitev vedno vključuje nagrado.",
      "Kazen vedno pomeni fizično kaznovanje.",
      "Okrepitev poveča verjetnost vedenja, kazen pa jo zmanjša.",
      "Med njima ni bistvene razlike.",
    ],
    answer: 2,
    explanation: "Okrepitve vedenje utrjujejo, kazni pa ga oslabijo.",
  },

  {
    id: 48,
    category: "ucenje",
    difficulty: "medium",
    question: "Kdo je izvedel znameniti eksperiment z Bobo lutko?",
    options: [
      "Ivan Pavlov.",
      "Albert Bandura.",
      "B. F. Skinner.",
      "Sigmund Freud.",
    ],
    answer: 1,
    explanation:
      "Bandura je pokazal, da se ljudje učimo z opazovanjem modelov.",
  },

  {
    id: 49,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj najbolje opisuje socialno učenje?",
    options: [
      "Učenje izključno preko nagrad.",
      "Učenje preko poskusov in napak.",
      "Učenje z opazovanjem vedenja drugih.",
      "Učenje s ponavljanjem informacij.",
    ],
    answer: 2,
    explanation:
      "Socialno učenje temelji na opazovanju in posnemanju drugih ljudi.",
  },

  {
    id: 50,
    category: "ucenje",
    difficulty: "hard",
    question:
      "Otrok opazuje starša, ki vedno uporablja varnostni pas, in ga začne uporabljati tudi sam. Gre za:",
    options: [
      "Klasično pogojevanje.",
      "Operantno pogojevanje.",
      "Socialno učenje.",
      "Vpogled.",
    ],
    answer: 2,
    explanation: "Otrok prevzame vedenje z opazovanjem modela.",
  },

  {
    id: 51,
    category: "ucenje",
    difficulty: "medium",
    question: "Kaj pomeni generalizacija pri klasičnem pogojevanju?",
    options: [
      "Izginjanje naučenega odziva.",
      "Prenos odziva na podobne dražljaje.",
      "Ponavljanje vedenja.",
      "Kaznovanje neustreznega vedenja.",
    ],
    answer: 1,
    explanation:
      "Generalizacija pomeni, da podobni dražljaji sprožijo podoben odziv.",
  },

  {
    id: 52,
    category: "ucenje",
    difficulty: "hard",
    question: "Otrok se po ugrizu enega psa boji vseh psov. To je primer:",
    options: [
      "Diskriminacije.",
      "Generalizacije.",
      "Vpogleda.",
      "Modeliranja.",
    ],
    answer: 1,
    explanation: "Odziv se prenese na podobne dražljaje.",
  },

  {
    id: 53,
    category: "ucenje",
    difficulty: "medium",
    question: "Kaj pomeni diskriminacija pri klasičnem pogojevanju?",
    options: [
      "Razlikovanje med podobnimi dražljaji.",
      "Prenos odziva na vse dražljaje.",
      "Kaznovanje vedenja.",
      "Ponavljanje odziva.",
    ],
    answer: 0,
    explanation:
      "Diskriminacija pomeni, da se odziv pojavi le pri določenem dražljaju.",
  },

  {
    id: 54,
    category: "ucenje",
    difficulty: "hard",
    question: "Katera trditev o negativni okrepitvi je pravilna?",
    options: [
      "Vedno zmanjša vedenje.",
      "Gre za vrsto kazni.",
      "Poveča vedenje z odstranitvijo neprijetnega dražljaja.",
      "Pomeni ignoriranje neustreznega vedenja.",
    ],
    answer: 2,
    explanation: "Negativna okrepitev poveča verjetnost vedenja.",
  },

  {
    id: 55,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj je glavna ugotovitev Bandurovega eksperimenta?",
    options: [
      "Vedenje je izključno prirojeno.",
      "Ljudje se učimo tudi z opazovanjem drugih.",
      "Kazen je učinkovitejša od nagrade.",
      "Pogojevanje temelji na refleksih.",
    ],
    answer: 1,
    explanation: "Bandura je dokazal pomen opazovalnega učenja.",
  },

  {
    id: 56,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje mišljenje?",
    options: [
      "Proces zaznavanja dražljajev iz okolja.",
      "Proces kodiranja in shranjevanja informacij.",
      "Duševni proces obdelave informacij, reševanja problemov in sprejemanja odločitev.",
      "Proces usmerjanja pozornosti.",
    ],
    answer: 2,
    explanation:
      "Mišljenje vključuje uporabo informacij za reševanje problemov in sprejemanje odločitev.",
  },

  {
    id: 57,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj najbolje opisuje deduktivno sklepanje?",
    options: [
      "Sklepanje od posameznih primerov k splošnemu pravilu.",
      "Sklepanje od splošnega pravila k posameznemu primeru.",
      "Sklepanje na podlagi intuicije.",
      "Naključno povezovanje informacij.",
    ],
    answer: 1,
    explanation:
      "Dedukcija pomeni prehod od splošnega pravila do konkretnega zaključka.",
  },

  {
    id: 58,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj najbolje opisuje induktivno sklepanje?",
    options: [
      "Sklepanje od splošnega k posameznemu.",
      "Sklepanje na podlagi pravil logike.",
      "Sklepanje od posameznih primerov k splošnemu pravilu.",
      "Sklepanje brez uporabe izkušenj.",
    ],
    answer: 2,
    explanation:
      "Indukcija pomeni oblikovanje splošnih pravil iz posameznih opazovanj.",
  },

  {
    id: 59,
    category: "misljenje",
    difficulty: "hard",
    question:
      "Učitelj opazi, da večina študentov zamuja, zato sklepa, da študenti pogosto zamujajo. Gre za:",
    options: [
      "Deduktivno sklepanje.",
      "Induktivno sklepanje.",
      "Funkcionalno fiksacijo.",
      "Vpogled.",
    ],
    answer: 1,
    explanation: "Iz posameznih primerov oblikuje splošen zaključek.",
  },

  {
    id: 60,
    category: "misljenje",
    difficulty: "hard",
    question:
      "Če vemo, da vsi ljudje dihajo in da je Ana človek, sklepamo, da Ana diha. To je primer:",
    options: [
      "Induktivnega sklepanja.",
      "Hevrističnega sklepanja.",
      "Deduktivnega sklepanja.",
      "Vpogleda.",
    ],
    answer: 2,
    explanation: "Iz splošnega pravila sklepamo na posamezen primer.",
  },

  {
    id: 61,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni funkcionalna fiksacija?",
    options: [
      "Vztrajanje pri prvotni rešitvi problema.",
      "Nezmožnost uporabe predmeta na nov način.",
      "Osredotočanje na eno nalogo.",
      "Pretirano analiziranje problema.",
    ],
    answer: 1,
    explanation:
      "Funkcionalna fiksacija pomeni, da predmet vidimo le v njegovi običajni funkciji.",
  },

  {
    id: 62,
    category: "misljenje",
    difficulty: "hard",
    question: "Kateri primer najbolje ponazarja funkcionalno fiksacijo?",
    options: [
      "Uporaba kovanca kot izvijača.",
      "Uporaba škatle samo za shranjevanje predmetov.",
      "Iskanje več možnih rešitev problema.",
      "Reševanje matematične naloge po formuli.",
    ],
    answer: 1,
    explanation:
      "Pri funkcionalni fiksaciji težko vidimo alternativne uporabe predmetov.",
  },

  {
    id: 63,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj pomeni vpogled pri reševanju problemov?",
    options: [
      "Postopno reševanje s poskusi in napakami.",
      "Nenadno razumevanje rešitve problema.",
      "Naključno ugibanje.",
      "Sledenje naučenemu algoritmu.",
    ],
    answer: 1,
    explanation: "Vpogled pomeni nenaden 'aha' trenutek.",
  },

  {
    id: 64,
    category: "misljenje",
    difficulty: "hard",
    question: "Divergentno mišljenje je povezano predvsem z:",
    options: [
      "Iskanjem ene pravilne rešitve.",
      "Logičnim preverjanjem dejstev.",
      "Ustvarjanjem več možnih idej in rešitev.",
      "Uporabo naučenih pravil.",
    ],
    answer: 2,
    explanation:
      "Divergentno mišljenje spodbuja ustvarjalnost in več možnih odgovorov.",
  },

  {
    id: 65,
    category: "misljenje",
    difficulty: "hard",
    question: "Konvergentno mišljenje pomeni:",
    options: [
      "Oblikovanje novih idej brez omejitev.",
      "Iskanje ene najbolj ustrezne rešitve.",
      "Povezovanje nepovezanih pojmov.",
      "Uporabo intuicije brez logike.",
    ],
    answer: 1,
    explanation:
      "Konvergentno mišljenje vodi k eni pravilni ali najbolj ustrezni rešitvi.",
  },

  {
    id: 66,
    category: "misljenje",
    difficulty: "hard",
    question:
      "Katera trditev o divergentnem in konvergentnem mišljenju je pravilna?",
    options: [
      "Obe vrsti mišljenja vedno vodita do ene rešitve.",
      "Divergentno išče več rešitev, konvergentno pa eno.",
      "Konvergentno mišljenje spodbuja ustvarjalnost bolj kot divergentno.",
      "Med njima ni bistvenih razlik.",
    ],
    answer: 1,
    explanation:
      "Divergentno ustvarja možnosti, konvergentno pa izbira najboljšo.",
  },

  {
    id: 67,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj je glavna funkcija mišljenja?",
    options: [
      "Sprejemanje čutilnih informacij.",
      "Dolgoročno shranjevanje znanja.",
      "Obdelava informacij in reševanje problemov.",
      "Usmerjanje pozornosti.",
    ],
    answer: 2,
    explanation: "Mišljenje nam omogoča razumevanje, sklepanje in odločanje.",
  },

  {
    id: 68,
    category: "misljenje",
    difficulty: "hard",
    question:
      "Študent pri reševanju naloge uporabi točno določen postopek, ki se ga je naučil pri vajah. Gre predvsem za:",
    options: [
      "Vpogled.",
      "Divergentno mišljenje.",
      "Konvergentno mišljenje.",
      "Funkcionalno fiksacijo.",
    ],
    answer: 2,
    explanation:
      "Konvergentno mišljenje uporablja pravila za dosego ene pravilne rešitve.",
  },

  {
    id: 69,
    category: "misljenje",
    difficulty: "hard",
    question: "Katera trditev o deduktivnem sklepanju je najbolj pravilna?",
    options: [
      "Zaključek je lahko logično nujen, če so premise pravilne.",
      "Vedno temelji na intuiciji.",
      "Temelji izključno na osebnih izkušnjah.",
      "Nikoli ne vodi do zanesljivih zaključkov.",
    ],
    answer: 0,
    explanation:
      "Dedukcija vodi do logično veljavnih zaključkov, če so premise resnične.",
  },

  {
    id: 70,
    category: "misljenje",
    difficulty: "hard",
    question: "Katera trditev o induktivnem sklepanju je najbolj pravilna?",
    options: [
      "Zaključek je vedno logično nujen.",
      "Iz posameznih primerov oblikujemo verjeten splošen zaključek.",
      "Temelji na matematičnih pravilih.",
      "Ne uporablja opazovanj.",
    ],
    answer: 1,
    explanation:
      "Induktivni zaključki so verjetni, ne pa nujno popolnoma zanesljivi.",
  },

  {
    id: 71,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj najbolje opisuje motivacijo?",
    options: [
      "Proces zaznavanja in interpretacije informacij.",
      "Proces, ki aktivira, usmerja in vzdržuje vedenje.",
      "Sposobnost dolgotrajnega pomnjenja.",
      "Prirojena osebnostna lastnost.",
    ],
    answer: 1,
    explanation: "Motivacija je proces, ki sproži, usmerja in ohranja vedenje.",
  },

  {
    id: 72,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje intrinzično motivacijo?",
    options: [
      "Vedenje zaradi zunanjih nagrad ali kazni.",
      "Vedenje zaradi notranjega zadovoljstva in interesa.",
      "Vedenje zaradi socialnega pritiska.",
      "Vedenje zaradi strahu pred neuspehom.",
    ],
    answer: 1,
    explanation:
      "Intrinzično motivirani smo, ko nekaj počnemo, ker nam je dejavnost sama po sebi v zadovoljstvo.",
  },

  {
    id: 73,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje ekstrinzično motivacijo?",
    options: [
      "Vedenje zaradi osebnega interesa.",
      "Vedenje zaradi zunanjih posledic, kot so nagrade ali kazni.",
      "Vedenje zaradi samoaktualizacije.",
      "Vedenje brez vpliva okolja.",
    ],
    answer: 1,
    explanation: "Ekstrinzična motivacija temelji na zunanjih spodbudah.",
  },

  {
    id: 74,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Študent se uči psihologijo, ker ga predmet iskreno zanima. To je primer:",
    options: [
      "Ekstrinzične motivacije.",
      "Izogibanja neuspehu.",
      "Intrinzične motivacije.",
      "Konflikta motivov.",
    ],
    answer: 2,
    explanation: "Motivacija izvira iz notranjega interesa za dejavnost.",
  },

  {
    id: 75,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Študent se uči predvsem zato, da dobi visoko oceno. Gre predvsem za:",
    options: [
      "Intrinzično motivacijo.",
      "Ekstrinzično motivacijo.",
      "Samoaktualizacijo.",
      "Pripadnost.",
    ],
    answer: 1,
    explanation: "Ocena predstavlja zunanjo nagrado.",
  },

  {
    id: 76,
    category: "motivacija",
    difficulty: "hard",
    question: "Katera potreba se po Maslowu nahaja na najnižji ravni piramide?",
    options: [
      "Potreba po spoštovanju.",
      "Potreba po pripadnosti.",
      "Fiziološke potrebe.",
      "Samoaktualizacija.",
    ],
    answer: 2,
    explanation: "Maslow je fiziološke potrebe postavil na osnovo hierarhije.",
  },

  {
    id: 77,
    category: "motivacija",
    difficulty: "hard",
    question: "Katera potreba po Maslowu sledi fiziološkim potrebam?",
    options: [
      "Potreba po pripadnosti.",
      "Potreba po varnosti.",
      "Potreba po spoštovanju.",
      "Samoaktualizacija.",
    ],
    answer: 1,
    explanation:
      "Po zadovoljitvi fizioloških potreb postanejo pomembne potrebe po varnosti.",
  },

  {
    id: 78,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj pomeni samoaktualizacija?",
    options: [
      "Doseganje družbenega statusa.",
      "Uresničevanje lastnih potencialov in ciljev.",
      "Iskanje socialne podpore.",
      "Zadovoljevanje fizioloških potreb.",
    ],
    answer: 1,
    explanation:
      "Samoaktualizacija pomeni razvoj in uresničitev svojih sposobnosti.",
  },

  {
    id: 79,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Kateri konflikt motivov nastane, ko moramo izbirati med dvema zaželenima možnostma?",
    options: [
      "Približevanje–izogibanje.",
      "Izogibanje–izogibanje.",
      "Približevanje–približevanje.",
      "Dvojno izogibanje.",
    ],
    answer: 2,
    explanation:
      "Pri konfliktu približevanje–približevanje sta obe možnosti privlačni.",
  },

  {
    id: 80,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Kateri konflikt motivov nastane, ko moramo izbirati med dvema neprijetnima možnostma?",
    options: [
      "Približevanje–približevanje.",
      "Približevanje–izogibanje.",
      "Izogibanje–izogibanje.",
      "Dvojno približevanje.",
    ],
    answer: 2,
    explanation:
      "Pri konfliktu izogibanje–izogibanje nobena možnost ni zaželena.",
  },

  {
    id: 81,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Kateri konflikt motivov opisuje situacijo, ko ima isti cilj tako pozitivne kot negativne lastnosti?",
    options: [
      "Približevanje–približevanje.",
      "Izogibanje–izogibanje.",
      "Približevanje–izogibanje.",
      "Dvojni konflikt.",
    ],
    answer: 2,
    explanation: "Pri tem konfliktu nas isti cilj hkrati privlači in odbija.",
  },

  {
    id: 82,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Ponudijo ti dobro plačano delo, vendar bi se moral preseliti daleč od družine. To je primer:",
    options: [
      "Približevanje–približevanje.",
      "Izogibanje–izogibanje.",
      "Približevanje–izogibanje.",
      "Ekstrinzične motivacije.",
    ],
    answer: 2,
    explanation: "Isti cilj ima prijetne in neprijetne posledice.",
  },

  {
    id: 83,
    category: "motivacija",
    difficulty: "medium",
    question:
      "Katera potreba po Maslowu je povezana z občutkom sprejetosti in medosebnimi odnosi?",
    options: [
      "Potreba po varnosti.",
      "Potreba po pripadnosti in ljubezni.",
      "Potreba po spoštovanju.",
      "Samoaktualizacija.",
    ],
    answer: 1,
    explanation:
      "Ta raven zajema prijateljstvo, ljubezen in pripadnost skupini.",
  },

  {
    id: 84,
    category: "motivacija",
    difficulty: "medium",
    question:
      "Katera potreba po Maslowu je povezana s samospoštovanjem in priznanjem drugih?",
    options: [
      "Fiziološke potrebe.",
      "Potreba po varnosti.",
      "Potreba po spoštovanju.",
      "Samoaktualizacija.",
    ],
    answer: 2,
    explanation: "Spoštovanje zajema samozavest, dosežke in priznanje.",
  },

  {
    id: 85,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Katera trditev o Maslowovi hierarhiji potreb je najbolj pravilna?",
    options: [
      "Višje potrebe so vedno pomembnejše od nižjih.",
      "Ljudje morajo popolnoma zadovoljiti nižje potrebe, preden se pojavijo višje.",
      "Nižje potrebe imajo praviloma prednost pred višjimi.",
      "Vse potrebe so enako pomembne v vseh situacijah.",
    ],
    answer: 2,
    explanation:
      "Maslow je predpostavljal, da imajo nižje potrebe praviloma prednost, čeprav ni nujno, da so popolnoma zadovoljene.",
  },

  {
    id: 86,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj najbolje opisuje osebnost?",
    options: [
      "Skupek trenutnih čustvenih stanj posameznika.",
      "Edinstven in trajen vzorec mišljenja, čustvovanja in vedenja posameznika.",
      "Prirojene telesne značilnosti posameznika.",
      "Sposobnost prilagajanja družbenim normam.",
    ],
    answer: 1,
    explanation:
      "Osebnost predstavlja razmeroma trajne značilnosti, ki vplivajo na naše mišljenje, čustvovanje in vedenje.",
  },

  {
    id: 87,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Katera trditev najbolje opisuje razliko med temperamentom in osebnostjo?",
    options: [
      "Temperament je pridobljen, osebnost pa prirojena.",
      "Temperament se nanaša na prirojene značilnosti, osebnost pa se razvija tudi skozi izkušnje.",
      "Temperament in osebnost pomenita isto.",
      "Osebnost je prirojena, temperament pa naučen.",
    ],
    answer: 1,
    explanation:
      "Temperament je bolj biološko pogojen, osebnost pa nastaja v prepletu dednosti in okolja.",
  },

  {
    id: 88,
    category: "osebnost",
    difficulty: "medium",
    question:
      "Kateri psiholog je poudarjal pomen realnega in idealnega sebstva?",
    options: [
      "Sigmund Freud.",
      "Carl Rogers.",
      "Hans Eysenck.",
      "Albert Bandura.",
    ],
    answer: 1,
    explanation: "Carl Rogers je razlikoval med realnim in idealnim sebstvom.",
  },

  {
    id: 89,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj predstavlja realno sebstvo po Rogersu?",
    options: [
      "To, kakšni bi želeli biti.",
      "To, kako nas vidijo drugi.",
      "To, kakršni dejansko smo.",
      "Naš nezavedni del osebnosti.",
    ],
    answer: 2,
    explanation: "Realno sebstvo predstavlja našo dejansko predstavo o sebi.",
  },

  {
    id: 90,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj predstavlja idealno sebstvo po Rogersu?",
    options: [
      "Našo dejansko osebnost.",
      "Podobo, kakršni bi si želeli postati.",
      "Nezavedne želje.",
      "Mnenje družbe o nas.",
    ],
    answer: 1,
    explanation:
      "Idealno sebstvo predstavlja posameznikove ideale in cilje glede samega sebe.",
  },

  {
    id: 91,
    category: "osebnost",
    difficulty: "hard",
    question: "Katera izmed spodnjih lastnosti NI del modela Big Five?",
    options: ["Vestnost.", "Odprtost.", "Sprejemljivost.", "Impulzivnost."],
    answer: 3,
    explanation:
      "Big Five sestavljajo odprtost, vestnost, ekstravertnost, sprejemljivost in nevroticizem.",
  },

  {
    id: 92,
    category: "osebnost",
    difficulty: "medium",
    question:
      "Katera osebnostna dimenzija Big Five je povezana z družabnostjo in energičnostjo?",
    options: ["Vestnost.", "Nevroticizem.", "Ekstravertnost.", "Odprtost."],
    answer: 2,
    explanation:
      "Ekstravertnost opisuje družabnost, aktivnost in usmerjenost navzven.",
  },

  {
    id: 93,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj predstavlja ID v Freudovi teoriji osebnosti?",
    options: [
      "Načelo morale in vesti.",
      "Načelo realnosti.",
      "Načelo ugodja.",
      "Zavestni del osebnosti.",
    ],
    answer: 2,
    explanation:
      "ID deluje po načelu ugodja in teži k takojšnji zadovoljitvi potreb.",
  },

  {
    id: 94,
    category: "osebnost",
    difficulty: "hard",
    question: "Kateri del osebnosti po Freudu deluje po načelu realnosti?",
    options: ["ID.", "SUPEREGO.", "EGO.", "Nezavedno."],
    answer: 2,
    explanation: "EGO posreduje med zahtevami ID-ja, SUPEREGA in realnostjo.",
  },

  {
    id: 95,
    category: "osebnost",
    difficulty: "hard",
    question: "SUPEREGO predstavlja:",
    options: [
      "Biološke nagone.",
      "Načelo ugodja.",
      "Moralna pravila in vest.",
      "Nezavedne spomine.",
    ],
    answer: 2,
    explanation:
      "SUPEREGO vsebuje ponotranjene družbene norme in moralna načela.",
  },

  {
    id: 96,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni potlačevanje kot obrambni mehanizem?",
    options: [
      "Pripisovanje lastnih lastnosti drugim.",
      "Zanikanje obstoja težave.",
      "Nezavedno izrinjanje neprijetnih vsebin iz zavesti.",
      "Pretvarjanje negativnih čustev v pozitivna.",
    ],
    answer: 2,
    explanation: "Pri potlačevanju neprijetne vsebine postanejo nezavedne.",
  },

  {
    id: 97,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni projekcija?",
    options: [
      "Pripisovanje lastnih nesprejemljivih misli in občutkov drugim.",
      "Pretvarjanje jeze v prijaznost.",
      "Pozabljanje neprijetnih dogodkov.",
      "Zavračanje realnosti.",
    ],
    answer: 0,
    explanation:
      "Pri projekciji svoje lastne težave pripisujemo drugim ljudem.",
  },

  {
    id: 98,
    category: "osebnost",
    difficulty: "medium",
    question: "Katera vrsta navezanosti velja za najbolj prilagojeno?",
    options: [
      "Izogibajoča navezanost.",
      "Dezorganizirana navezanost.",
      "Tesnobna navezanost.",
      "Varna navezanost.",
    ],
    answer: 3,
    explanation: "Varna navezanost je povezana z zaupanjem in zdravimi odnosi.",
  },

  {
    id: 99,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Otrok želi bližino starša, vendar ga hkrati močno skrbi zapustitev. To je značilno za:",
    options: [
      "Varno navezanost.",
      "Tesnobno navezanost.",
      "Izogibajočo navezanost.",
      "Dezorganizirano navezanost.",
    ],
    answer: 1,
    explanation:
      "Tesnobno navezani posamezniki pogosto doživljajo strah pred zavrnitvijo.",
  },

  {
    id: 100,
    category: "osebnost",
    difficulty: "hard",
    question: "Katera trditev o osebnosti je najbolj pravilna?",
    options: [
      "Osebnost je popolnoma prirojena.",
      "Osebnost je popolnoma posledica okolja.",
      "Osebnost nastaja v prepletu dednosti in izkušenj.",
      "Osebnost se po otroštvu ne spreminja več.",
    ],
    answer: 2,
    explanation: "Na osebnost vplivajo tako biološki kot okoljski dejavniki.",
  },

  {
    id: 101,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je nevron?",
    options: [
      "Osnovna mišična celica.",
      "Celica, odgovorna za tvorbo hormonov.",
      "Osnovna živčna celica, specializirana za prenos informacij.",
      "Celica imunskega sistema.",
    ],
    answer: 2,
    explanation: "Nevron je osnovna funkcionalna enota živčnega sistema.",
  },

  {
    id: 102,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri del nevrona sprejema informacije od drugih nevronov?",
    options: ["Akson.", "Sinapsa.", "Dendriti.", "Mielinska ovojnica."],
    answer: 2,
    explanation: "Dendriti sprejemajo živčne impulze iz drugih nevronov.",
  },

  {
    id: 103,
    category: "zivcni",
    difficulty: "hard",
    question:
      "Katera struktura nevrona prenaša živčni impulz stran od telesa celice?",
    options: ["Dendriti.", "Sinapsa.", "Akson.", "Receptorji."],
    answer: 2,
    explanation: "Akson vodi impulz od telesa celice proti drugim celicam.",
  },

  {
    id: 104,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je sinapsa?",
    options: [
      "Del možganov, ki uravnava ravnotežje.",
      "Stik med nevronoma, kjer poteka prenos informacij.",
      "Zaščitna ovojnica aksona.",
      "Vrsta nevrotransmiterja.",
    ],
    answer: 1,
    explanation: "Sinapsa je prostor med nevronoma, kjer se prenašajo signali.",
  },

  {
    id: 105,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj pomeni načelo »vse ali nič«?",
    options: [
      "Nevron vedno odda enako močan impulz ali pa ga sploh ne odda.",
      "Impulz se lahko prenaša z različno močjo.",
      "Nevroni delujejo samo v skupinah.",
      "Živčni sistem se odziva le na močne dražljaje.",
    ],
    answer: 0,
    explanation:
      "Če prag vzdraženja ni dosežen, impulza ni; če je dosežen, nastane impulz v celoti.",
  },

  {
    id: 106,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje vlogo dopamina?",
    options: [
      "Uravnava strjevanje krvi.",
      "Povezan je z motivacijo, nagrajevanjem in občutkom ugodja.",
      "Uravnava prebavo.",
      "Odgovoren je predvsem za bolečino.",
    ],
    answer: 1,
    explanation:
      "Dopamin ima pomembno vlogo pri sistemu nagrajevanja in motivaciji.",
  },

  {
    id: 107,
    category: "zivcni",
    difficulty: "hard",
    question: "Serotonin je najbolj povezan z:",
    options: [
      "Ravnotežjem in koordinacijo.",
      "Spominom in učenjem.",
      "Razpoloženjem in spanjem.",
      "Delovanjem mišic.",
    ],
    answer: 2,
    explanation:
      "Serotonin vpliva na razpoloženje, spanje in čustveno stabilnost.",
  },

  {
    id: 108,
    category: "zivcni",
    difficulty: "hard",
    question:
      "Katera skupina psihoaktivnih snovi upočasnjuje delovanje živčnega sistema?",
    options: ["Stimulansi.", "Halucinogeni.", "Depresanti.", "Amfetamini."],
    answer: 2,
    explanation:
      "Depresanti zmanjšujejo aktivnost centralnega živčnega sistema.",
  },

  {
    id: 109,
    category: "zivcni",
    difficulty: "hard",
    question:
      "Katera skupina psihoaktivnih snovi pospešuje delovanje živčnega sistema?",
    options: ["Depresanti.", "Stimulansi.", "Halucinogeni.", "Sedativi."],
    answer: 1,
    explanation: "Stimulansi povečajo budnost, energijo in aktivnost.",
  },

  {
    id: 110,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je značilno za halucinogene?",
    options: [
      "Upočasnjujejo dihanje.",
      "Povzročajo spremembe zaznavanja in doživljanja.",
      "Izključno povečujejo koncentracijo.",
      "Zmanjšujejo občutek bolečine.",
    ],
    answer: 1,
    explanation:
      "Halucinogeni lahko povzročijo popačeno zaznavanje in halucinacije.",
  },

  {
    id: 111,
    category: "zivcni",
    difficulty: "hard",
    question: "LSD in psilocibinske gobe sodijo med:",
    options: ["Depresante.", "Stimulanse.", "Halucinogene.", "Opioide."],
    answer: 2,
    explanation: "LSD in psilocibin spadata med halucinogene snovi.",
  },

  {
    id: 112,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera trditev o dopaminu in serotoninu je najbolj pravilna?",
    options: [
      "Oba sta hormona prebavnega sistema.",
      "Dopamin je povezan z nagrajevanjem, serotonin pa z razpoloženjem.",
      "Serotonin povzroča halucinacije, dopamin pa spanje.",
      "Med njima ni funkcionalnih razlik.",
    ],
    answer: 1,
    explanation:
      "Dopamin je pomemben za motivacijo, serotonin pa za razpoloženje in spanje.",
  },

  {
    id: 113,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri primer najbolje ponazarja delovanje stimulansa?",
    options: [
      "Posameznik postane bolj zaspan in umirjen.",
      "Posameznik doživlja spremembe zaznavanja.",
      "Posameznik postane bolj buden in energičen.",
      "Posameznik izgubi zavest.",
    ],
    answer: 2,
    explanation: "Stimulansi povečajo budnost in aktivnost organizma.",
  },

  {
    id: 114,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera trditev o depresantih je najbolj pravilna?",
    options: [
      "Vedno povzročajo halucinacije.",
      "Povečujejo hitrost živčnih impulzov.",
      "Upočasnjujejo delovanje centralnega živčnega sistema.",
      "Izboljšujejo dolgoročni spomin.",
    ],
    answer: 2,
    explanation: "Depresanti zmanjšujejo aktivnost živčnega sistema.",
  },

  {
    id: 115,
    category: "zivcni",
    difficulty: "medium",
    question: "Katera zaporedna pot prenosa informacij po nevronu je pravilna?",
    options: [
      "Akson → dendriti → telo celice.",
      "Dendriti → telo celice → akson.",
      "Sinapsa → dendriti → akson.",
      "Telo celice → sinapsa → dendriti.",
    ],
    answer: 1,
    explanation:
      "Informacija potuje od dendritov preko telesa celice do aksona.",
  },

  {
    id: 116,
    category: "spanje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje zavest?",
    options: [
      "Sposobnost dolgotrajnega pomnjenja.",
      "Zavedanje sebe in okolja.",
      "Sposobnost logičnega mišljenja.",
      "Proces zaznavanja dražljajev.",
    ],
    answer: 1,
    explanation:
      "Zavest pomeni zavedanje lastnega doživljanja in dogajanja v okolju.",
  },

  {
    id: 117,
    category: "spanje",
    difficulty: "hard",
    question: "Kaj je cirkadijski ritem?",
    options: [
      "Približno 90-minutni cikel spanja.",
      "24-urni biološki cikel budnosti in spanja.",
      "Faza globokega spanja.",
      "Nenadni napadi spanja.",
    ],
    answer: 1,
    explanation:
      "Cirkadijski ritem uravnava izmenjavanje budnosti in spanja v približno 24 urah.",
  },

  {
    id: 118,
    category: "spanje",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje REM spanje?",
    options: [
      "Gre za najglobljo fazo NREM spanja.",
      "Značilni so hitri gibi oči in žive sanje.",
      "V tej fazi ni možganske aktivnosti.",
      "Pojavi se samo enkrat na noč.",
    ],
    answer: 1,
    explanation: "REM spanje je povezano z živimi sanjami in hitrimi gibi oči.",
  },

  {
    id: 119,
    category: "spanje",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje NREM spanje?",
    options: [
      "Povezano je predvsem z regeneracijo telesa.",
      "Zanj so značilne najbolj žive sanje.",
      "Vključuje hitre gibe oči.",
      "Gre za stanje hipnoze.",
    ],
    answer: 0,
    explanation: "NREM spanje je pomembno za telesno obnovo in regeneracijo.",
  },

  {
    id: 120,
    category: "spanje",
    difficulty: "hard",
    question: "Katera je glavna razlika med REM in NREM spanjem?",
    options: [
      "REM vključuje regeneracijo, NREM pa sanje.",
      "REM vključuje sanje in hitre gibe oči, NREM pa predvsem regeneracijo.",
      "REM je globlje od NREM.",
      "Med njima ni bistvenih razlik.",
    ],
    answer: 1,
    explanation:
      "REM je povezan s sanjami, NREM pa predvsem z obnovo organizma.",
  },

  {
    id: 121,
    category: "spanje",
    difficulty: "hard",
    question: "Kaj je narkolepsija?",
    options: [
      "Kronična nespečnost.",
      "Motnja, pri kateri oseba nenadoma zaspi.",
      "Motnja, povezana z nočnimi morami.",
      "Motnja zaznavanja.",
    ],
    answer: 1,
    explanation: "Za narkolepsijo so značilni nenadni napadi spanja.",
  },

  {
    id: 122,
    category: "spanje",
    difficulty: "hard",
    question:
      "Posameznik med predavanjem nenadoma zaspi, čeprav je ponoči dovolj spal. To lahko kaže na:",
    options: ["REM spanje.", "Nespečnost.", "Narkolepsijo.", "Hipnozo."],
    answer: 2,
    explanation: "Nenadni napadi spanja so značilni za narkolepsijo.",
  },

  {
    id: 123,
    category: "spanje",
    difficulty: "hard",
    question: "Katera trditev o hipnozi je najbolj pravilna?",
    options: [
      "Pod hipnozo posameznik izgubi popoln nadzor nad seboj.",
      "Hipnoza omogoča nadzor nad osebo proti njeni volji.",
      "Hipnoza je spremenjeno stanje zavesti, pri katerem sodelovanje posameznika ostaja pomembno.",
      "Hipnoza pomeni globoko fazo REM spanja.",
    ],
    answer: 2,
    explanation:
      "Hipnoza zahteva sodelovanje posameznika in ne omogoča popolnega nadzora.",
  },

  {
    id: 124,
    category: "spanje",
    difficulty: "hard",
    question: "Ali je mogoče osebo hipnotizirati proti njeni volji?",
    options: [
      "Da, če je hipnotizer dovolj izkušen.",
      "Da, če je oseba utrujena.",
      "Ne, sodelovanje posameznika je nujno.",
      "Da, vendar le med REM spanjem.",
    ],
    answer: 2,
    explanation: "Hipnoza proti volji posameznika ni mogoča.",
  },

  {
    id: 125,
    category: "spanje",
    difficulty: "medium",
    question: "Katera trditev o spanju je najbolj pravilna?",
    options: [
      "Sanje se pojavljajo izključno v NREM spanju.",
      "REM in NREM spanje se med nočjo večkrat izmenjujeta.",
      "NREM spanje ni pomembno za zdravje.",
      "Odrasli med spanjem nimajo ciklov.",
    ],
    answer: 1,
    explanation: "Spanje je sestavljeno iz več ciklov REM in NREM faz.",
  },

  {
    id: 126,
    category: "custva",
    difficulty: "medium",
    question: "Kaj najbolje opisuje čustva?",
    options: [
      "Izključno fiziološke spremembe v telesu.",
      "Psihološki in fiziološki odzivi na pomembne dogodke ali situacije.",
      "Trajne osebnostne lastnosti.",
      "Naučena vedenja brez biološke osnove.",
    ],
    answer: 1,
    explanation:
      "Čustva vključujejo subjektivno doživljanje, fiziološke odzive in vedenjske izraze.",
  },

  {
    id: 127,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni adaptivna funkcija čustev?",
    options: [
      "Čustva vedno izboljšajo razpoloženje.",
      "Čustva pomagajo posamezniku pri prilagajanju na okolje.",
      "Čustva so posledica izključno socialnega učenja.",
      "Čustva služijo le izražanju osebnosti.",
    ],
    answer: 1,
    explanation:
      "Čustva imajo prilagoditveno vlogo, saj usmerjajo vedenje v pomembnih situacijah.",
  },

  {
    id: 128,
    category: "custva",
    difficulty: "hard",
    question:
      "Katera izmed spodnjih možnosti vsebuje tri glavne sestavine čustev?",
    options: [
      "Zaznavna, motivacijska in socialna.",
      "Fiziološka, vedenjska in subjektivna.",
      "Biološka, kognitivna in osebnostna.",
      "Refleksna, čustvena in racionalna.",
    ],
    answer: 1,
    explanation:
      "Čustva vključujejo telesne odzive, izražanje in subjektivno doživljanje.",
  },

  {
    id: 129,
    category: "custva",
    difficulty: "hard",
    question: "Kakšna je glavna vloga amigdale?",
    options: [
      "Uravnavanje ravnotežja.",
      "Shranjevanje proceduralnega spomina.",
      "Hitri čustveni odzivi, predvsem povezani s strahom.",
      "Nadzor govora.",
    ],
    answer: 2,
    explanation:
      "Amigdala je del limbičnega sistema, pomemben za zaznavanje nevarnosti in strah.",
  },

  {
    id: 130,
    category: "custva",
    difficulty: "hard",
    question: "Amigdala je del:",
    options: [
      "Možganske skorje.",
      "Limbičnega sistema.",
      "Malih možganov.",
      "Možganskega debla.",
    ],
    answer: 1,
    explanation:
      "Limbični sistem ima pomembno vlogo pri čustvovanju in motivaciji.",
  },

  {
    id: 131,
    category: "custva",
    difficulty: "hard",
    question:
      "Katero izmed spodnjih čustev NI med Ekmanovimi univerzalnimi čustvi?",
    options: ["Gnus.", "Presenečenje.", "Ljubosumje.", "Strah."],
    answer: 2,
    explanation:
      "Ekman je opisal veselje, žalost, jezo, strah, gnus in presenečenje.",
  },

  {
    id: 132,
    category: "custva",
    difficulty: "medium",
    question: "Katero čustvo je Paul Ekman uvrstil med univerzalna čustva?",
    options: ["Krivda.", "Ponos.", "Presenečenje.", "Zavist."],
    answer: 2,
    explanation: "Presenečenje je eno izmed šestih univerzalnih čustev.",
  },

  {
    id: 133,
    category: "custva",
    difficulty: "hard",
    question: "Kaj najbolje opisuje empatijo?",
    options: [
      "Sposobnost nadzorovanja lastnih čustev.",
      "Sposobnost razumevanja in doživljanja čustev drugih.",
      "Pretirano izražanje čustev.",
      "Nagnjenost k hitrim čustvenim odzivom.",
    ],
    answer: 1,
    explanation: "Empatija pomeni vživljanje v čustveno stanje druge osebe.",
  },

  {
    id: 134,
    category: "custva",
    difficulty: "hard",
    question: "Kaj najbolje opisuje avtomatsko ocenjevanje situacije?",
    options: [
      "Počasno in premišljeno analiziranje.",
      "Hitro in nezavedno vrednotenje.",
      "Logično sklepanje brez vpliva čustev.",
      "Dolgotrajno primerjanje možnosti.",
    ],
    answer: 1,
    explanation:
      "Avtomatsko ocenjevanje poteka hitro in pogosto brez zavestnega nadzora.",
  },

  {
    id: 135,
    category: "custva",
    difficulty: "hard",
    question: "Kaj najbolje opisuje reflektivno ocenjevanje situacije?",
    options: [
      "Takojšnjo čustveno reakcijo.",
      "Nezavedno interpretacijo dražljajev.",
      "Premišljeno in zavedno vrednotenje.",
      "Refleksni odziv na nevarnost.",
    ],
    answer: 2,
    explanation:
      "Reflektivno ocenjevanje vključuje zavestno razmišljanje in presojo.",
  },

  {
    id: 136,
    category: "custva",
    difficulty: "hard",
    question: "Katera trditev o čustvih je najbolj pravilna?",
    options: [
      "Čustva so vedno iracionalna.",
      "Čustva nimajo prilagoditvene funkcije.",
      "Čustva vplivajo na vedenje in odločanje.",
      "Čustva so izključno posledica kulture.",
    ],
    answer: 2,
    explanation: "Čustva pomembno vplivajo na naše odločitve in vedenje.",
  },

  {
    id: 137,
    category: "custva",
    difficulty: "medium",
    question:
      "Posameznik se ob pogledu na nevarno situacijo še preden premisli instinktivno prestraši. To ponazarja:",
    options: [
      "Reflektivno ocenjevanje.",
      "Avtomatsko ocenjevanje.",
      "Empatijo.",
      "Samoaktualizacijo.",
    ],
    answer: 1,
    explanation:
      "Avtomatsko ocenjevanje omogoča hitre odzive na potencialno nevarnost.",
  },

  {
    id: 138,
    category: "custva",
    difficulty: "hard",
    question:
      "Katera sestavina čustev vključuje telesne spremembe, kot sta pospešen srčni utrip in potenje?",
    options: ["Subjektivna.", "Vedenjska.", "Fiziološka.", "Kognitivna."],
    answer: 2,
    explanation:
      "Fiziološka komponenta vključuje odzive avtonomnega živčnega sistema.",
  },

  {
    id: 139,
    category: "custva",
    difficulty: "hard",
    question:
      "Katera sestavina čustev vključuje izraze obraza in telesno govorico?",
    options: ["Subjektivna.", "Fiziološka.", "Vedenjska.", "Nezavedna."],
    answer: 2,
    explanation: "Vedenjska komponenta vključuje opazne izraze čustev.",
  },

  {
    id: 140,
    category: "custva",
    difficulty: "hard",
    question:
      "Katera sestavina čustev predstavlja notranje doživljanje posameznika?",
    options: ["Fiziološka.", "Vedenjska.", "Subjektivna.", "Socialna."],
    answer: 2,
    explanation: "Subjektivna komponenta predstavlja osebno izkušnjo čustva.",
  },

  {
    id: 141,
    category: "lazi",
    difficulty: "medium",
    question: "Kako uspešni so ljudje pri prepoznavanju laži?",
    options: [
      "Večina ljudi pravilno prepozna več kot 90 % laži.",
      "Ljudje so pri prepoznavanju laži le malo uspešnejši od naključnega ugibanja.",
      "Ljudje skoraj vedno zaznajo, kdaj nekdo laže.",
      "Uspešnost je odvisna izključno od inteligentnosti.",
    ],
    answer: 1,
    explanation:
      "Raziskave kažejo, da ljudje laži prepoznavajo le nekoliko bolje od naključja.",
  },

  {
    id: 142,
    category: "lazi",
    difficulty: "hard",
    question:
      "Ali so policisti bistveno uspešnejši pri odkrivanju laži kot splošna populacija?",
    options: [
      "Da, saj imajo posebno usposabljanje.",
      "Da, vendar le pri hudih kaznivih dejanjih.",
      "Ne, njihova uspešnost ni bistveno višja.",
      "Ne, pri prepoznavanju laži so celo slabši.",
    ],
    answer: 2,
    explanation:
      "Policisti praviloma niso bistveno uspešnejši od drugih ljudi pri prepoznavanju laži.",
  },

  {
    id: 143,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj so mikroizrazi?",
    options: [
      "Namerni izrazi obraza za zavajanje drugih.",
      "Dolgotrajni obrazni izrazi, ki jih posameznik težko nadzoruje.",
      "Kratki, težko nadzorovani obrazni izrazi, ki lahko razkrivajo čustva.",
      "Izrazi, ki jih opazimo le med spanjem.",
    ],
    answer: 2,
    explanation:
      "Mikroizrazi trajajo zelo kratek čas in jih je težko zavestno nadzorovati.",
  },

  {
    id: 144,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj meri poligraf?",
    options: [
      "Neposredno zaznava laž.",
      "Možgansko aktivnost, povezano z laganjem.",
      "Fiziološke odzive, kot so srčni utrip in potenje.",
      "Čustveno inteligentnost posameznika.",
    ],
    answer: 2,
    explanation: "Poligraf meri telesne odzive, ne pa laži same.",
  },

  {
    id: 145,
    category: "lazi",
    difficulty: "hard",
    question: "Ali poligraf zazna laž?",
    options: [
      "Da, z več kot 95 % natančnostjo.",
      "Da, če ga uporablja strokovnjak.",
      "Ne, zazna le fiziološke spremembe.",
      "Ne, ker sploh ne deluje.",
    ],
    answer: 2,
    explanation:
      "Poligraf ne meri laganja, ampak spremembe v fizioloških odzivih.",
  },

  {
    id: 146,
    category: "lazi",
    difficulty: "hard",
    question: "Katera trditev o poligrafu v Sloveniji je najbolj pravilna?",
    options: [
      "Ima polno dokazno vrednost na sodišču.",
      "Uporablja se kot edini dokaz pri obsodbah.",
      "Nima dokazne vrednosti v sodnih postopkih.",
      "Dovoljen je le pri mladoletnikih.",
    ],
    answer: 2,
    explanation: "Rezultati poligrafa v Sloveniji nimajo dokazne vrednosti.",
  },

  {
    id: 147,
    category: "lazi",
    difficulty: "hard",
    question: "Katera trditev o mikroizrazih je najbolj pravilna?",
    options: [
      "Vedno pomenijo, da oseba laže.",
      "Lahko razkrivajo pristna čustva, vendar sami po sebi niso dokaz laži.",
      "Pojavljajo se le pri osebah z duševnimi motnjami.",
      "Trajajo več minut.",
    ],
    answer: 1,
    explanation:
      "Mikroizrazi lahko razkrivajo čustva, vendar niso neposreden dokaz laganja.",
  },

  {
    id: 148,
    category: "lazi",
    difficulty: "hard",
    question: "Zakaj poligraf ni zanesljiv pokazatelj laganja?",
    options: [
      "Ker meri odzive, ki se lahko pojavijo tudi zaradi stresa ali strahu.",
      "Ker ne deluje pri ženskah.",
      "Ker ga ni mogoče uporabljati več kot 10 minut.",
      "Ker meri le telesno temperaturo.",
    ],
    answer: 0,
    explanation:
      "Povišan srčni utrip ali potenje lahko povzročijo tudi druga čustvena stanja.",
  },

  {
    id: 149,
    category: "lazi",
    difficulty: "medium",
    question: "Katera izjava najbolje povzema raziskave o odkrivanju laži?",
    options: [
      "Večina ljudi je zelo uspešna pri prepoznavanju laži.",
      "Ljudje in strokovnjaki pogosto precenjujejo svojo sposobnost prepoznavanja laži.",
      "Mikroizrazi omogočajo popolnoma zanesljivo zaznavanje laži.",
      "Poligraf neposredno zazna neresnico.",
    ],
    answer: 1,
    explanation:
      "Raziskave kažejo, da ljudje pogosto precenjujejo svoje sposobnosti odkrivanja laži.",
  },

  {
    id: 150,
    category: "lazi",
    difficulty: "hard",
    question:
      "Posameznik med zaslišanjem kaže znake nervoze in pospešen srčni utrip. Kaj lahko zanesljivo sklepamo?",
    options: [
      "Da zagotovo laže.",
      "Da doživlja fiziološko vzburjenje, vzroka pa ne moremo zanesljivo določiti.",
      "Da skriva kaznivo dejanje.",
      "Da bo poligraf potrdil laganje.",
    ],
    answer: 1,
    explanation: "Fiziološki odzivi sami po sebi ne dokazujejo laganja.",
  },

  {
    id: 151,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj najbolje opisuje konformizem?",
    options: [
      "Sledenje ukazom avtoritete.",
      "Prilagajanje vedenja ali mnenja skupini.",
      "Pomoč ljudem v stiski.",
      "Zagovarjanje lastnih prepričanj ne glede na skupino.",
    ],
    answer: 1,
    explanation:
      "Konformizem pomeni prilagajanje skupinskim normam in pritisku večine.",
  },

  {
    id: 152,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj je pokazal Aschev eksperiment?",
    options: [
      "Da ljudje brezpogojno ubogajo avtoriteto.",
      "Da večina ljudi ne podleže skupinskemu pritisku.",
      "Da se ljudje pogosto prilagodijo večini, čeprav vedo, da nima prav.",
      "Da ljudje vedno pomagajo drugim v stiski.",
    ],
    answer: 2,
    explanation: "Asch je pokazal moč skupinskega pritiska in konformizma.",
  },

  {
    id: 153,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj najbolje opisuje ubogljivost?",
    options: [
      "Prilagajanje vrstnikom.",
      "Sledenje navodilom avtoritete.",
      "Posnemanje vedenja drugih.",
      "Prilagajanje družbenim normam.",
    ],
    answer: 1,
    explanation:
      "Ubogljivost pomeni izvajanje dejanj na podlagi ukazov avtoritete.",
  },

  {
    id: 154,
    category: "socialna",
    difficulty: "hard",
    question: "Kateri eksperiment je povezan z raziskovanjem ubogljivosti?",
    options: [
      "Bandurov eksperiment z Bobo lutko.",
      "Pavlov eksperiment.",
      "Milgramov eksperiment.",
      "Aschev eksperiment.",
    ],
    answer: 2,
    explanation:
      "Milgram je raziskoval, do katere mere ljudje ubogajo avtoriteto.",
  },

  {
    id: 155,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj je bila glavna ugotovitev Milgramovega eksperimenta?",
    options: [
      "Večina ljudi zavrne ukaze avtoritete.",
      "Ljudje redko sledijo navodilom.",
      "Veliko ljudi uboga avtoriteto tudi takrat, ko jim je neprijetno.",
      "Skupinski pritisk nima vpliva na vedenje.",
    ],
    answer: 2,
    explanation:
      "Presenetljivo veliko udeležencev je sledilo navodilom avtoritete do konca.",
  },

  {
    id: 156,
    category: "socialna",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje konformizem in ubogljivost?",
    options: [
      "Konformizem vključuje avtoriteto, ubogljivost pa vrstnike.",
      "Konformizem pomeni prilagajanje skupini, ubogljivost pa sledenje avtoriteti.",
      "Gre za enak pojav.",
      "Ubogljivost je vedno prostovoljna, konformizem pa ne.",
    ],
    answer: 1,
    explanation:
      "Pri konformizmu je vpliv skupine, pri ubogljivosti pa vpliv avtoritete.",
  },

  {
    id: 157,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj je kognitivna disonanca?",
    options: [
      "Stanje popolnega notranjega miru.",
      "Neprijetno stanje zaradi neskladja med vedenjem in prepričanji.",
      "Nezmožnost sprejemanja odločitev.",
      "Strah pred socialnimi situacijami.",
    ],
    answer: 1,
    explanation:
      "Kognitivna disonanca nastane, ko si naše misli in vedenje nasprotujejo.",
  },

  {
    id: 158,
    category: "socialna",
    difficulty: "hard",
    question:
      "Kadilec ve, da kajenje škoduje zdravju, vendar še naprej kadi in išče opravičila za svoje vedenje. To je primer:",
    options: [
      "Konformizma.",
      "Kognitivne disonance.",
      "Diskriminacije.",
      "Ubogljivosti.",
    ],
    answer: 1,
    explanation:
      "Posameznik zmanjšuje neprijetno napetost med vedenjem in prepričanji.",
  },

  {
    id: 159,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj najbolje opisuje predsodek?",
    options: [
      "Neenako vedenje do določene skupine.",
      "Negativno ali pozitivno stališče do skupine ljudi.",
      "Sledenje družbenim normam.",
      "Nadzorovanje drugih ljudi.",
    ],
    answer: 1,
    explanation: "Predsodek je odnos ali prepričanje o določeni skupini.",
  },

  {
    id: 160,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj najbolje opisuje diskriminacijo?",
    options: [
      "Negativno mišljenje o skupini.",
      "Stereotipno prepričanje.",
      "Neenako vedenje do posameznikov zaradi njihove pripadnosti skupini.",
      "Prilagajanje skupinskim normam.",
    ],
    answer: 2,
    explanation:
      "Diskriminacija pomeni dejansko vedenje, ki posameznike postavlja v neenak položaj.",
  },

  {
    id: 161,
    category: "socialna",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje predsodek in diskriminacijo?",
    options: [
      "Predsodek je vedenje, diskriminacija pa čustvo.",
      "Predsodek je mišljenje ali stališče, diskriminacija pa vedenje.",
      "Gre za popolnoma enak pojem.",
      "Diskriminacija vedno temelji na zakonodaji.",
    ],
    answer: 1,
    explanation: "Predsodek se nanaša na odnos, diskriminacija pa na dejanja.",
  },

  {
    id: 162,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni učinek opazovalca?",
    options: [
      "Več ljudi kot je prisotnih, večja je verjetnost pomoči.",
      "Prisotnost drugih nima vpliva na pomoč.",
      "Več ljudi kot je prisotnih, manjša je verjetnost, da bo nekdo pomagal.",
      "Ljudje pomagajo le prijateljem.",
    ],
    answer: 2,
    explanation:
      "Odgovornost se porazdeli med prisotne ljudi, zato posameznik manj pogosto ukrepa.",
  },

  {
    id: 163,
    category: "socialna",
    difficulty: "hard",
    question:
      "Oseba ne pomaga poškodovancu, ker predvideva, da bo to storil nekdo drug. To ponazarja:",
    options: [
      "Konformizem.",
      "Kognitivno disonanco.",
      "Učinek opazovalca.",
      "Ubogljivost.",
    ],
    answer: 2,
    explanation:
      "Gre za razpršitev odgovornosti, značilno za učinek opazovalca.",
  },

  {
    id: 164,
    category: "socialna",
    difficulty: "hard",
    question: "Kateri pojav je neposredno povezan z Aschevim eksperimentom?",
    options: [
      "Učinek opazovalca.",
      "Kognitivna disonanca.",
      "Konformizem.",
      "Diskriminacija.",
    ],
    answer: 2,
    explanation: "Asch je raziskoval vpliv večine na posameznikovo presojo.",
  },

  {
    id: 165,
    category: "socialna",
    difficulty: "hard",
    question: "Kateri pojav je neposredno povezan z Milgramovim eksperimentom?",
    options: [
      "Predsodki.",
      "Ubogljivost avtoriteti.",
      "Konformizem.",
      "Empatija.",
    ],
    answer: 1,
    explanation:
      "Milgramov eksperiment je eden najbolj znanih primerov raziskovanja ubogljivosti.",
  },

  {
    id: 166,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj je psihopatologija?",
    options: [
      "Veda o delovanju živčnega sistema.",
      "Veda, ki proučuje duševne motnje, njihove vzroke in simptome.",
      "Veda o osebnostnih lastnostih.",
      "Veda o razvoju inteligentnosti.",
    ],
    answer: 1,
    explanation:
      "Psihopatologija proučuje duševne motnje, njihove vzroke, simptome in potek.",
  },

  {
    id: 167,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje ICD in DSM?",
    options: [
      "ICD uporablja le psihiatrija, DSM pa psihologija.",
      "ICD je mednarodna klasifikacija bolezni, DSM pa diagnostični priročnik za duševne motnje, ki izvira iz ZDA.",
      "DSM se uporablja po vsem svetu, ICD pa le v ZDA.",
      "Med njima ni bistvenih razlik.",
    ],
    answer: 1,
    explanation:
      "ICD je mednarodni sistem klasifikacije bolezni, DSM pa ameriški diagnostični priročnik za duševne motnje.",
  },

  {
    id: 168,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje iluzijo in halucinacijo?",
    options: [
      "Iluzija nastane brez dražljaja, halucinacija pa ob prisotnem dražljaju.",
      "Iluzija je napačna interpretacija dejanskega dražljaja, halucinacija pa zaznava brez dražljaja.",
      "Gre za sopomenki.",
      "Halucinacija je vrsta blodnje.",
    ],
    answer: 1,
    explanation: "Pri iluziji dražljaj obstaja, pri halucinaciji pa ne.",
  },

  {
    id: 169,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj so konfabulacije?",
    options: [
      "Pretirane vsiljive misli.",
      "Lažna prepričanja o resničnosti.",
      "Zapolnjevanje vrzeli v spominu z izmišljenimi podatki.",
      "Ponavljajoča vedenja.",
    ],
    answer: 2,
    explanation:
      "Konfabulacije predstavljajo nezavedno dopolnjevanje manjkajočih spominov.",
  },

  {
    id: 170,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za formalne motnje mišljenja?",
    options: [
      "Motena je vsebina mišljenja.",
      "Moten je potek in organizacija mišljenja.",
      "Prisotne so blodnje.",
      "Prisotne so obsesije.",
    ],
    answer: 1,
    explanation: "Pri formalnih motnjah je moten način mišljenja.",
  },

  {
    id: 171,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za vsebinske motnje mišljenja?",
    options: [
      "Moten je tok mišljenja.",
      "Prisotne so težave z govorom.",
      "Motena je vsebina mišljenja, npr. blodnje.",
      "Motena je pozornost.",
    ],
    answer: 2,
    explanation:
      "Pri vsebinskih motnjah je problem v tem, o čem oseba razmišlja.",
  },

  {
    id: 172,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje blodnje?",
    options: [
      "Kratkotrajne zaznavne napake.",
      "Lažna prepričanja, ki jih oseba kljub dokazom ne opusti.",
      "Vsiljive misli, ki povzročajo tesnobo.",
      "Motnje spomina.",
    ],
    answer: 1,
    explanation: "Blodnje so trdna, nerealna prepričanja.",
  },

  {
    id: 173,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj so obsesije?",
    options: [
      "Ponavljajoča vedenja.",
      "Pretirane vsiljive misli.",
      "Halucinacije.",
      "Blodnje.",
    ],
    answer: 1,
    explanation: "Obsesije so neželene in vsiljive misli.",
  },

  {
    id: 174,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje delirij in demenco?",
    options: [
      "Delirij nastaja postopno, demenca pa nenadno.",
      "Delirij je nenaden in pogosto prehoden, demenca pa postopna in kronična.",
      "Gre za isto motnjo.",
      "Demenca je vedno ozdravljiva.",
    ],
    answer: 1,
    explanation: "Delirij nastopi hitro, demenca pa se razvija postopoma.",
  },

  {
    id: 175,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev o shizofreniji je najbolj pravilna?",
    options: [
      "Gre za motnjo z več osebnostmi.",
      "Gre za psihotično motnjo, za katero so značilne blodnje, halucinacije in dezorganizirano mišljenje.",
      "Gre za obliko depresije.",
      "Gre za motnjo spanja.",
    ],
    answer: 1,
    explanation: "Shizofrenija je resna psihotična motnja.",
  },

  {
    id: 176,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Ali shizofrenija pomeni dvojno osebnost?",
    options: [
      "Da.",
      "Da, vendar le v hujših primerih.",
      "Ne.",
      "Le pri otrocih.",
    ],
    answer: 2,
    explanation: "Shizofrenija ni motnja več osebnosti.",
  },

  {
    id: 177,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kateri simptom NI značilen za shizofrenijo?",
    options: [
      "Blodnje.",
      "Halucinacije.",
      "Dezorganizirano mišljenje.",
      "Povišano razpoloženje brez potrebe po spanju.",
    ],
    answer: 3,
    explanation: "To je značilneje za manijo.",
  },

  {
    id: 178,
    category: "psihopatologija",
    difficulty: "medium",
    question:
      "Koliko časa morajo praviloma trajati simptomi depresije za postavitev diagnoze?",
    options: ["Vsaj 3 dni.", "Vsaj 1 teden.", "Vsaj 2 tedna.", "Vsaj 1 mesec."],
    answer: 2,
    explanation: "Depresivni simptomi morajo trajati najmanj dva tedna.",
  },

  {
    id: 179,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni anhedonija?",
    options: [
      "Pretirana energičnost.",
      "Nezmožnost občutenja veselja in ugodja.",
      "Strah pred ljudmi.",
      "Izguba spomina.",
    ],
    answer: 1,
    explanation: "Anhedonija je eden ključnih simptomov depresije.",
  },

  {
    id: 180,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje bipolarno motnjo?",
    options: [
      "Izmenjevanje obsesij in kompulzij.",
      "Izmenjevanje depresivnih in maničnih obdobij.",
      "Kronično pomanjkanje spanja.",
      "Postopno propadanje spomina.",
    ],
    answer: 1,
    explanation: "Za bipolarno motnjo so značilna obdobja depresije in manije.",
  },
  {
    id: 181,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje manijo?",
    options: [
      "Obdobje izrazite žalosti in brezupa.",
      "Stanje povečane energije, zmanjšane potrebe po spanju in pretirane zgovornosti.",
      "Nenadni napadi intenzivnega strahu.",
      "Postopno slabšanje spomina.",
    ],
    answer: 1,
    explanation:
      "Za manijo so značilni povišano razpoloženje, energičnost in zmanjšana potreba po spanju.",
  },

  {
    id: 182,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje opisuje panično motnjo?",
    options: [
      "Trajen strah pred socialnimi situacijami.",
      "Ponavljajoči se nepričakovani panični napadi.",
      "Pretirane vsiljive misli.",
      "Kronično depresivno razpoloženje.",
    ],
    answer: 1,
    explanation:
      "Panična motnja vključuje nenadne in ponavljajoče se panične napade.",
  },

  {
    id: 183,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje kompulzije?",
    options: [
      "Vsiljive misli, ki povzročajo tesnobo.",
      "Lažna prepričanja o resničnosti.",
      "Ponavljajoča vedenja, namenjena zmanjševanju tesnobe.",
      "Nenadne zaznavne motnje.",
    ],
    answer: 2,
    explanation:
      "Kompulzije so vedenja, s katerimi posameznik skuša zmanjšati tesnobo, ki jo povzročajo obsesije.",
  },

  {
    id: 184,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje obsesije in kompulzije?",
    options: [
      "Obsesije so vedenja, kompulzije pa misli.",
      "Obsesije so vsiljive misli, kompulzije pa ponavljajoča vedenja.",
      "Gre za sopomenki.",
      "Obsesije so značilne le za depresijo.",
    ],
    answer: 1,
    explanation: "Obsesije predstavljajo misli, kompulzije pa dejanja.",
  },

  {
    id: 185,
    category: "psihopatologija",
    difficulty: "hard",
    question:
      "Posameznik si zaradi strahu pred okužbo več desetkrat na dan umiva roke. Umivanje rok predstavlja:",
    options: ["Obsesijo.", "Blodnjo.", "Kompulzijo.", "Halucinacijo."],
    answer: 2,
    explanation:
      "Ponavljajoče umivanje rok je značilen primer kompulzivnega vedenja.",
  },

  {
    id: 186,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni kratica PTSM?",
    options: [
      "Psihotična travmatska stresna motnja.",
      "Posttravmatska stresna motnja.",
      "Ponavljajoča travmatična spominska motnja.",
      "Psihološka travmatska somatska motnja.",
    ],
    answer: 1,
    explanation: "PTSM pomeni posttravmatsko stresno motnjo.",
  },

  {
    id: 187,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kdaj se lahko razvije PTSM?",
    options: [
      "Izključno po prometnih nesrečah.",
      "Po izpostavljenosti hudim travmatičnim dogodkom.",
      "Le pri otrocih.",
      "Samo po izgubi spomina.",
    ],
    answer: 1,
    explanation: "PTSM se lahko razvije po različnih travmatičnih izkušnjah.",
  },

  {
    id: 188,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje anoreksijo?",
    options: [
      "Ponavljajoče prenajedanje brez kompenzacijskih vedenj.",
      "Omejevanje hranjenja in izrazit strah pred pridobivanjem telesne mase.",
      "Izguba apetita zaradi okužbe.",
      "Pretirana telesna aktivnost brez sprememb hranjenja.",
    ],
    answer: 1,
    explanation:
      "Za anoreksijo sta značilna omejevanje vnosa hrane in strah pred debelostjo.",
  },

  {
    id: 189,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje bulimijo?",
    options: [
      "Popolna izguba apetita.",
      "Prenajedanje, ki mu pogosto sledijo kompenzacijska vedenja.",
      "Izogibanje vsem vrstam hrane.",
      "Postopno zmanjševanje telesne teže brez skrbi glede videza.",
    ],
    answer: 1,
    explanation:
      "Bulimija vključuje epizode prenajedanja in vedenja za preprečevanje pridobivanja telesne mase.",
  },

  {
    id: 190,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev najbolje razlikuje anoreksijo in bulimijo?",
    options: [
      "Pri anoreksiji prevladuje omejevanje hranjenja, pri bulimiji pa prenajedanje.",
      "Gre za isto motnjo.",
      "Bulimija ne vključuje skrbi glede telesne mase.",
      "Anoreksija se pojavlja le pri ženskah.",
    ],
    answer: 0,
    explanation: "Osnovna razlika je v prevladujočem vzorcu hranjenja.",
  },

  {
    id: 191,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni toleranca pri odvisnosti?",
    options: [
      "Sposobnost nadzorovanja uporabe snovi.",
      "Potrebo po večji količini snovi za enak učinek.",
      "Neprijetne simptome po prenehanju uporabe.",
      "Izgubo zanimanja za snov.",
    ],
    answer: 1,
    explanation:
      "Sčasoma organizem za enak učinek potrebuje večjo količino snovi.",
  },

  {
    id: 192,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni odtegnitev?",
    options: [
      "Povečanje tolerance.",
      "Neprijetne telesne in psihične simptome po prenehanju uporabe snovi.",
      "Zmanjšanje potrebe po snovi.",
      "Uspešno zdravljenje odvisnosti.",
    ],
    answer: 1,
    explanation:
      "Odtegnitveni simptomi se pojavijo po prekinitvi uporabe snovi.",
  },

  {
    id: 193,
    category: "psihopatologija",
    difficulty: "hard",
    question:
      "Posameznik za enak učinek alkohola potrebuje vedno večje količine. To ponazarja:",
    options: ["Odtegnitev.", "Toleranco.", "Kompulzijo.", "Anhedonijo."],
    answer: 1,
    explanation: "Gre za razvoj tolerance.",
  },

  {
    id: 194,
    category: "psihopatologija",
    difficulty: "hard",
    question:
      "Posameznik po prenehanju uporabe droge doživlja tresenje, tesnobo in razdražljivost. To predstavlja:",
    options: ["Manijo.", "Odtegnitev.", "Blodnjo.", "Konfabulacijo."],
    answer: 1,
    explanation: "To so značilni odtegnitveni simptomi.",
  },

  {
    id: 195,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev o duševnih motnjah je najbolj pravilna?",
    options: [
      "Vsaka nenavadna izkušnja pomeni duševno motnjo.",
      "Duševne motnje običajno povzročajo pomembno stisko ali ovirajo posameznikovo delovanje.",
      "Duševne motnje so vedno posledica šibkega značaja.",
      "Vse duševne motnje imajo enak vzrok.",
    ],
    answer: 1,
    explanation:
      "Pomemben kriterij duševnih motenj je vpliv na posameznikovo vsakodnevno delovanje.",
  },

  {
    id: 196,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj predstavlja g-faktor?",
    options: [
      "Posebno vrsto ustvarjalnosti.",
      "Splošno inteligentnost, ki vpliva na uspešnost pri različnih miselnih nalogah.",
      "Sposobnost socialnega prilagajanja.",
      "Prirojeno sposobnost pomnjenja.",
    ],
    answer: 1,
    explanation:
      "Spearman je predlagal obstoj splošnega faktorja inteligentnosti (g-faktorja).",
  },

  {
    id: 197,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj najbolje opisuje fluidno inteligentnost?",
    options: [
      "Znanje, pridobljeno z izobraževanjem in izkušnjami.",
      "Sposobnost reševanja novih problemov z uporabo logičnega mišljenja.",
      "Sposobnost učinkovite komunikacije.",
      "Sposobnost dolgoročnega pomnjenja dejstev.",
    ],
    answer: 1,
    explanation:
      "Fluidna inteligentnost omogoča reševanje novih problemov neodvisno od predhodnega znanja.",
  },

  {
    id: 198,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj najbolje opisuje kristalizirano inteligentnost?",
    options: [
      "Sposobnost hitrega sklepanja v novih situacijah.",
      "Prirojeno sposobnost abstraktnega mišljenja.",
      "Znanje in spretnosti, pridobljeni skozi izkušnje in učenje.",
      "Sposobnost ustvarjalnega mišljenja.",
    ],
    answer: 2,
    explanation:
      "Kristalizirana inteligentnost temelji na izkušnjah, učenju in znanju.",
  },

  {
    id: 199,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Katera situacija najbolje ponazarja fluidno inteligentnost?",
    options: [
      "Reševanje popolnoma nove logične uganke.",
      "Poznavanje glavnih mest evropskih držav.",
      "Znanje slovničnih pravil.",
      "Spominjanje zgodovinskih datumov.",
    ],
    answer: 0,
    explanation:
      "Fluidna inteligentnost se kaže pri reševanju novih in neznanih problemov.",
  },

  {
    id: 200,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Katera situacija najbolje ponazarja kristalizirano inteligentnost?",
    options: [
      "Reševanje nove prostorske naloge.",
      "Ugotavljanje pravilnosti neznanega zaporedja.",
      "Odgovarjanje na vprašanja iz splošnega znanja.",
      "Iskanje ustvarjalnih rešitev.",
    ],
    answer: 2,
    explanation:
      "Kristalizirana inteligentnost temelji na že pridobljenem znanju.",
  },

  {
    id: 201,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Katera lastnost psihološkega testa pomeni, da test meri tisto, kar naj bi meril?",
    options: [
      "Zanesljivost.",
      "Standardiziranost.",
      "Veljavnost.",
      "Normiranost.",
    ],
    answer: 2,
    explanation: "Veljavnost pomeni ustreznost merjenja želenega konstrukta.",
  },

  {
    id: 202,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Katera lastnost psihološkega testa pomeni, da test daje stabilne rezultate ob ponovnem merjenju?",
    options: ["Veljavnost.", "Normiranost.", "Zanesljivost.", "Objektivnost."],
    answer: 2,
    explanation:
      "Zanesljiv test daje podobne rezultate v podobnih okoliščinah.",
  },

  {
    id: 203,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj pomeni, da je psihološki test standardiziran?",
    options: [
      "Da je prilagojen posamezniku.",
      "Da se izvaja in ocenjuje po enotnih postopkih.",
      "Da vsebuje veliko vprašanj.",
      "Da meri inteligentnost.",
    ],
    answer: 1,
    explanation:
      "Standardiziranost pomeni uporabo enakih pravil za vse udeležence.",
  },

  {
    id: 204,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj pomeni normiranost psihološkega testa?",
    options: [
      "Da se rezultati primerjajo z referenčno skupino.",
      "Da test vedno meri inteligentnost.",
      "Da test nima napak.",
      "Da se izvaja individualno.",
    ],
    answer: 0,
    explanation:
      "Norme omogočajo primerjavo posameznikovega rezultata z rezultati drugih.",
  },

  {
    id: 205,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Katera izmed spodnjih možnosti vsebuje vse štiri pomembne lastnosti dobrega psihološkega testa?",
    options: [
      "Veljavnost, ustvarjalnost, hitrost, objektivnost.",
      "Zanesljivost, veljavnost, standardiziranost, normiranost.",
      "Objektivnost, občutljivost, ekonomičnost, ustvarjalnost.",
      "Veljavnost, inteligentnost, normiranost, prilagodljivost.",
    ],
    answer: 1,
    explanation:
      "To so štiri temeljne značilnosti kakovostnega psihološkega testa.",
  },

  {
    id: 206,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni IQ 100?",
    options: [
      "Nadpovprečno inteligentnost.",
      "Povprečno inteligentnost glede na populacijo.",
      "Podpovprečno inteligentnost.",
      "Izjemno nadarjenost.",
    ],
    answer: 1,
    explanation:
      "IQ 100 predstavlja približno povprečen rezultat v populaciji.",
  },

  {
    id: 207,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Katera trditev o IQ je najbolj pravilna?",
    options: [
      "IQ meri vse vidike človekove sposobnosti.",
      "IQ je nespremenljiv skozi vse življenje.",
      "IQ predstavlja rezultat na standardiziranem testu inteligentnosti.",
      "IQ določa posameznikov uspeh v življenju.",
    ],
    answer: 2,
    explanation:
      "IQ je rezultat na testu inteligentnosti in ne predstavlja celotne osebnosti ali uspešnosti posameznika.",
  },

  {
    id: 208,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Katera trditev najbolje razlikuje fluidno in kristalizirano inteligentnost?",
    options: [
      "Fluidna temelji na znanju, kristalizirana pa na logičnem sklepanju.",
      "Fluidna je povezana z reševanjem novih problemov, kristalizirana pa z uporabo pridobljenega znanja.",
      "Med njima ni bistvene razlike.",
      "Kristalizirana je prirojena, fluidna pa pridobljena.",
    ],
    answer: 1,
    explanation:
      "Fluidna inteligentnost se kaže pri novih nalogah, kristalizirana pa pri uporabi naučenega znanja.",
  },

  {
    id: 209,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Študent uspešno rešuje nove logične naloge, vendar ima malo splošnega znanja. Katera sposobnost je pri njem verjetno bolj izražena?",
    options: [
      "Kristalizirana inteligentnost.",
      "Socialna inteligentnost.",
      "Fluidna inteligentnost.",
      "Čustvena inteligentnost.",
    ],
    answer: 2,
    explanation:
      "Uspešno reševanje novih problemov kaže na dobro razvito fluidno inteligentnost.",
  },

  {
    id: 210,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Katera trditev o psiholoških testih je najbolj pravilna?",
    options: [
      "Dober test mora biti le veljaven.",
      "Dober test mora biti le zanesljiv.",
      "Za kakovost testa je pomembna kombinacija več lastnosti.",
      "Vsi psihološki testi merijo inteligentnost.",
    ],
    answer: 2,
    explanation:
      "Kakovosten psihološki test mora biti zanesljiv, veljaven, standardiziran in normiran.",
  },

  {
    id: 211,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj najbolj razlikuje psihologijo od psevdoznanosti?",
    options: [
      "Psihologija preučuje le vedenje.",
      "Psihologija uporablja znanstvene metode in preverljive dokaze.",
      "Psihologija temelji na intuiciji.",
      "Psihologija ne uporablja raziskav.",
    ],
    answer: 1,
    explanation:
      "Psihologija uporablja znanstvene metode, psevdoznanosti pa nimajo preverljivih dokazov.",
  },

  {
    id: 212,
    category: "uvod",
    difficulty: "medium",
    question: "Zakaj Wilhelma Wundta imenujemo očeta moderne psihologije?",
    options: [
      "Ker je razvil psihoanalizo.",
      "Ker je ustanovil prvi psihološki laboratorij.",
      "Ker je ustvaril prvi IQ test.",
      "Ker je raziskoval učenje.",
    ],
    answer: 1,
    explanation:
      "Leta 1879 je ustanovil prvi psihološki laboratorij v Leipzigu.",
  },

  {
    id: 213,
    category: "uvod",
    difficulty: "hard",
    question: "Katero leto štejemo za začetek znanstvene psihologije?",
    options: ["1859", "1879", "1899", "1905"],
    answer: 1,
    explanation:
      "Leta 1879 je Wilhelm Wundt ustanovil prvi psihološki laboratorij.",
  },

  {
    id: 214,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj pomeni trditev, da korelacija ne pomeni vzročnosti?",
    options: [
      "Da pojava nista povezana.",
      "Da en pojav vedno povzroča drugega.",
      "Da povezanost med pojavoma še ne dokazuje vzročno-posledične zveze.",
      "Da korelacijska metoda ni uporabna.",
    ],
    answer: 2,
    explanation:
      "Tudi če sta pojava povezana, še ne pomeni, da eden povzroča drugega.",
  },

  {
    id: 215,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj je pokazal eksperiment Sam Stone?",
    options: [
      "Da otroci nikoli ne lažejo.",
      "Da sugestivna vprašanja lahko ustvarijo lažne spomine.",
      "Da imajo odrasli boljši spomin kot otroci.",
      "Da priče vedno pravilno pričajo.",
    ],
    answer: 1,
    explanation:
      "Sugestivna vprašanja lahko popačijo spomin in povzročijo lažne izjave.",
  },

  {
    id: 216,
    category: "uvod",
    difficulty: "medium",
    question:
      "Katero področje psihologije proučuje vpliv skupin in družbe na posameznika?",
    options: [
      "Razvojna psihologija.",
      "Klinična psihologija.",
      "Socialna psihologija.",
      "Psihologija dela.",
    ],
    answer: 2,
    explanation:
      "Socialna psihologija proučuje vpliv drugih ljudi na naše vedenje.",
  },

  {
    id: 217,
    category: "uvod",
    difficulty: "medium",
    question:
      "Katero področje psihologije se ukvarja z učenjem in poučevanjem?",
    options: [
      "Pedagoška psihologija.",
      "Kriminološka psihologija.",
      "Kognitivna psihologija.",
      "Klinična psihologija.",
    ],
    answer: 0,
    explanation: "Pedagoška psihologija proučuje procese učenja in poučevanja.",
  },

  {
    id: 218,
    category: "uvod",
    difficulty: "medium",
    question: "Kaj povezuje forenzična psihologija?",
    options: [
      "Psihologijo in biologijo.",
      "Psihologijo, pravo in kriminalistiko.",
      "Psihologijo in medicino.",
      "Psihologijo in ekonomijo.",
    ],
    answer: 1,
    explanation:
      "Forenzična psihologija pomaga pri reševanju pravnih vprašanj.",
  },

  {
    id: 219,
    category: "uvod",
    difficulty: "hard",
    question: "Kaj je namen kognitivnega intervjuja?",
    options: [
      "Povečanje stresa priče.",
      "Izboljšanje priklica spomina pri pričah.",
      "Preverjanje inteligentnosti.",
      "Merjenje osebnosti.",
    ],
    answer: 1,
    explanation:
      "Kognitivni intervju pomaga pričam priklicati čim več točnih informacij.",
  },

  {
    id: 220,
    category: "uvod",
    difficulty: "medium",
    question: "Kaj pomeni informirano soglasje?",
    options: [
      "Da raziskovalec odloča namesto udeleženca.",
      "Da udeleženec pozna namen, potek in tveganja raziskave.",
      "Da sodelovanje ni prostovoljno.",
      "Da rezultati niso anonimni.",
    ],
    answer: 1,
    explanation: "Udeleženec mora biti pred sodelovanjem ustrezno obveščen.",
  },

  {
    id: 221,
    category: "uvod",
    difficulty: "hard",
    question: "Kdaj je uporaba zavajanja v raziskavi etično sprejemljiva?",
    options: [
      "Vedno.",
      "Nikoli.",
      "Če je nujna in ni druge možnosti izvedbe raziskave.",
      "Samo pri otrocih.",
    ],
    answer: 2,
    explanation: "Po raziskavi mora raziskovalec pojasniti resnični namen.",
  },

  {
    id: 222,
    category: "zaznavanje",
    difficulty: "medium",
    question: "Kaj najbolje opisuje čutenje?",
    options: [
      "Interpretacijo dražljajev.",
      "Sprejemanje dražljajev iz okolja.",
      "Shranjevanje informacij.",
      "Usmerjanje pozornosti.",
    ],
    answer: 1,
    explanation: "Čutenje predstavlja osnovni sprejem dražljajev.",
  },

  {
    id: 223,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj je absolutni prag?",
    options: [
      "Največja jakost dražljaja.",
      "Najmanjša razlika med dražljajema.",
      "Najmanjša jakost dražljaja, ki jo še zaznamo.",
      "Povprečna jakost dražljaja.",
    ],
    answer: 2,
    explanation: "Absolutni prag predstavlja spodnjo mejo zaznavanja.",
  },

  {
    id: 224,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj pomeni diferencialni prag?",
    options: [
      "Največjo razliko med dražljaji.",
      "Najmanjšo razliko med dražljajema, ki jo še zaznamo.",
      "Najnižjo zaznavno frekvenco.",
      "Izgubo občutljivosti.",
    ],
    answer: 1,
    explanation: "Gre za najmanjšo opazno razliko med dražljajema.",
  },

  {
    id: 225,
    category: "zaznavanje",
    difficulty: "medium",
    question: "Kaj pomeni čutno prilagajanje?",
    options: [
      "Povečanje občutljivosti.",
      "Zmanjšanje občutljivosti ob dolgotrajnem dražljaju.",
      "Izgubo čutila.",
      "Hitrejše zaznavanje.",
    ],
    answer: 1,
    explanation: "Po določenem času isti dražljaj zaznavamo manj intenzivno.",
  },

  {
    id: 226,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj pravi modularna hipoteza prepoznavanja obrazov?",
    options: [
      "Da obraze prepoznavamo zaradi učenja.",
      "Da imajo možgani poseben sistem za prepoznavanje obrazov.",
      "Da so obrazi nepomembni.",
      "Da dojenčki ne prepoznavajo obrazov.",
    ],
    answer: 1,
    explanation:
      "Po modularni hipotezi so določeni deli možganov specializirani za obraze.",
  },

  {
    id: 227,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj pomeni verbalno zasenčenje?",
    options: [
      "Hitrejše prepoznavanje obrazov.",
      "Opisovanje obraza izboljša prepoznavo.",
      "Opisovanje obraza lahko poslabša kasnejšo prepoznavo.",
      "Pozabljanje imen.",
    ],
    answer: 2,
    explanation:
      "Podrobno opisovanje neznanca lahko zmanjša uspešnost prepoznave.",
  },

  {
    id: 228,
    category: "zaznavanje",
    difficulty: "hard",
    question:
      "Zakaj pri identifikaciji osumljencev posebne značilnosti prikrijejo?",
    options: [
      "Da je postopek hitrejši.",
      "Da policija ne vpliva na pričo.",
      "Da osumljenec ni prepoznaven.",
      "Zaradi varovanja zasebnosti.",
    ],
    answer: 1,
    explanation: "Tako zmanjšajo možnost napačne identifikacije.",
  },

  {
    id: 229,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj je fi fenomen?",
    options: [
      "Navidezno gibanje zaradi hitrega menjavanja slik.",
      "Premikanje svetlobe v temi.",
      "Sled slike po opazovanju.",
      "Geometrična iluzija.",
    ],
    answer: 0,
    explanation: "Na fi fenomenu temeljijo filmi in animacije.",
  },

  {
    id: 230,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj je avtokinetični učinek?",
    options: [
      "Sled slike po opazovanju.",
      "Navidezno premikanje nepremične svetlobe v temi.",
      "Premikanje predmetov zaradi paralakse.",
      "Dvoumna iluzija.",
    ],
    answer: 1,
    explanation: "Nepremična svetloba se v temi zdi premikajoča.",
  },

  {
    id: 231,
    category: "zaznavanje",
    difficulty: "hard",
    question: "Kaj sta ugotovila Allport in Postman glede pričanja?",
    options: [
      "Priče si dogodke popolnoma zapomnijo.",
      "Priče pogosto dopolnjujejo informacije in delajo napake.",
      "Čustva ne vplivajo na pričanje.",
      "Stereotipi ne vplivajo na spomin.",
    ],
    answer: 1,
    explanation: "Na pričanje vplivajo stereotipi, pričakovanja in čustva.",
  },

  {
    id: 232,
    category: "spomin",
    difficulty: "hard",
    question:
      "Kaj je pokazal eksperiment Simonsa in Chabrisa z 'nevidno gorilo'?",
    options: [
      "Da lahko hkrati obdelujemo vse dražljaje iz okolja.",
      "Da je pozornost neomejena.",
      "Da zaradi osredotočenosti pogosto spregledamo očitne dražljaje.",
      "Da kratkoročni spomin nima omejitev.",
    ],
    answer: 2,
    explanation:
      "Eksperiment je pokazal omejenost pozornosti in pojav nepozornostne slepote.",
  },

  {
    id: 233,
    category: "spomin",
    difficulty: "medium",
    question: "Kaj pomeni zadržana pozornost?",
    options: [
      "Sposobnost osredotočanja na več nalog hkrati.",
      "Sposobnost dolgotrajnega ohranjanja pozornosti.",
      "Izbiranje pomembnih dražljajev.",
      "Preusmerjanje pozornosti med nalogami.",
    ],
    answer: 1,
    explanation:
      "Zadržana pozornost omogoča ohranjanje pozornosti skozi daljše časovno obdobje.",
  },

  {
    id: 234,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj opisuje Millerjevo pravilo 7 ± 2?",
    options: [
      "Povprečno trajanje senzornega spomina.",
      "Kapaciteto kratkoročnega spomina.",
      "Število ponovitev za utrjevanje.",
      "Dolžino dolgoročnega spomina.",
    ],
    answer: 1,
    explanation:
      "Kratkoročni spomin lahko hkrati zadrži približno 5 do 9 elementov.",
  },

  {
    id: 235,
    category: "spomin",
    difficulty: "medium",
    question: "Kaj pomeni utrjevanje v procesu spomina?",
    options: [
      "Izgubo nepotrebnih informacij.",
      "Prenos informacij iz kratkoročnega v dolgoročni spomin.",
      "Povezovanje pojmov v skupine.",
      "Priklic že shranjenih informacij.",
    ],
    answer: 1,
    explanation: "Utrjevanje omogoča dolgoročno ohranjanje informacij.",
  },

  {
    id: 236,
    category: "spomin",
    difficulty: "hard",
    question:
      "Kako so informacije običajno organizirane v dolgoročnem spominu?",
    options: [
      "Naključno in brez povezav.",
      "Po kronološkem zaporedju.",
      "V mreže medsebojno povezanih pojmov.",
      "Izključno po pomembnosti.",
    ],
    answer: 2,
    explanation:
      "Aktivacija enega pojma lahko sproži aktivacijo povezanih pojmov.",
  },

  {
    id: 237,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni učinek konteksta pri priklicu?",
    options: [
      "Da se bolje spomnimo informacij v okolju, kjer smo se jih učili.",
      "Da se vedno bolje učimo doma.",
      "Da je priklic odvisen samo od inteligentnosti.",
      "Da kontekst nima vpliva na spomin.",
    ],
    answer: 0,
    explanation: "Priklic je pogosto uspešnejši v podobnem okolju kot učenje.",
  },

  {
    id: 238,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni skladnost razpoloženja pri spominu?",
    options: [
      "Da si lažje zapomnimo nove informacije.",
      "Da lažje prikličemo spomine, ki ustrezajo našemu trenutnemu razpoloženju.",
      "Da čustva nimajo vpliva na spomin.",
      "Da dobro razpoloženje vedno izboljša spomin.",
    ],
    answer: 1,
    explanation: "Razpoloženje vpliva na to, katere spomine lažje prikličemo.",
  },

  {
    id: 239,
    category: "spomin",
    difficulty: "medium",
    question: "Kaj je spomin bliskavice?",
    options: [
      "Spomin na vsakdanje dogodke.",
      "Zelo živ in podroben spomin na pomemben dogodek.",
      "Spomin na sanje.",
      "Spomin na proceduralne spretnosti.",
    ],
    answer: 1,
    explanation: "Gre za zelo podrobne spomine na čustveno pomembne dogodke.",
  },

  {
    id: 240,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj je ugotovil Hermann Ebbinghaus?",
    options: [
      "Da pozabljanje poteka enakomerno.",
      "Da največ pozabimo kmalu po učenju.",
      "Da spomina ni mogoče izboljšati.",
      "Da ponavljanje nima vpliva na spomin.",
    ],
    answer: 1,
    explanation: "Njegova krivulja pozabljanja kaže hitro začetno pozabljanje.",
  },

  {
    id: 241,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni supresija?",
    options: [
      "Nezavedno potiskanje neprijetnih spominov.",
      "Zavestno izogibanje določenim spominom.",
      "Izgubo vseh spominov po poškodbi.",
      "Težave pri priklicu zaradi interferenc.",
    ],
    answer: 1,
    explanation: "Supresija pomeni zavestno potiskanje spominov.",
  },

  {
    id: 242,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni represija?",
    options: [
      "Zavestno potiskanje spominov.",
      "Nezavedno potiskanje neprijetnih spominov.",
      "Izgubo kratkoročnega spomina.",
      "Izgubo proceduralnega spomina.",
    ],
    answer: 1,
    explanation: "Represija poteka nezavedno.",
  },

  {
    id: 243,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj je značilno za retrogradno amnezijo?",
    options: [
      "Nezmožnost tvorjenja novih spominov.",
      "Izguba spominov na dogodke pred poškodbo.",
      "Izguba proceduralnih spretnosti.",
      "Nezmožnost priklica semantičnih informacij.",
    ],
    answer: 1,
    explanation:
      "Retrogradna amnezija prizadene spomine iz obdobja pred poškodbo.",
  },

  {
    id: 244,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj je značilno za anterogradno amnezijo?",
    options: [
      "Izguba spominov pred poškodbo.",
      "Težave pri zaznavanju dražljajev.",
      "Nezmožnost ustvarjanja novih spominov po poškodbi.",
      "Izguba proceduralnih spretnosti.",
    ],
    answer: 2,
    explanation:
      "Posameznik po poškodbi ne more učinkovito tvoriti novih spominov.",
  },

  {
    id: 245,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni učinek napačnih informacij?",
    options: [
      "Da se spomin izboljša z dodatnimi informacijami.",
      "Da lahko kasnejše informacije spremenijo prvotni spomin.",
      "Da napačnih spominov ni mogoče ustvariti.",
      "Da se nanaša samo na otroke.",
    ],
    answer: 1,
    explanation:
      "Kasneje prejete informacije lahko popačijo spomin na dogodek.",
  },

  {
    id: 246,
    category: "spomin",
    difficulty: "hard",
    question: "Kaj pomeni zamenjava vira informacij?",
    options: [
      "Pozabimo vsebino informacije.",
      "Informacijo si zapomnimo, ne pa njenega izvora.",
      "Zamenjamo kratkoročni in dolgoročni spomin.",
      "Prikličemo napačno čustvo.",
    ],
    answer: 1,
    explanation: "Gre za napako pri določanju izvora informacije.",
  },

  {
    id: 247,
    category: "spomin",
    difficulty: "hard",
    question: "Katera tehnika NI del kognitivnega intervjuja?",
    options: [
      "Miselna obnovitev okoliščin.",
      "Sprememba perspektive.",
      "Sugestivna vprašanja.",
      "Drugo časovno zaporedje.",
    ],
    answer: 2,
    explanation: "Sugestivna vprašanja zmanjšujejo zanesljivost pričanja.",
  },

  {
    id: 248,
    category: "spomin",
    difficulty: "hard",
    question: "Katera dejavnika med drugim vplivata na kakovost pričanja?",
    options: [
      "Barva oči in telesna višina.",
      "Starost in sugestibilnost.",
      "Krvna skupina in telesna masa.",
      "Poklic in hobiji.",
    ],
    answer: 1,
    explanation:
      "Starost, spol, sugestibilnost in življenjska zgodovina vplivajo na pričanje.",
  },

  {
    id: 249,
    category: "spomin",
    difficulty: "hard",
    question: "Na katere dogodke pogosto usmerimo več pozornosti?",
    options: [
      "Na popolnoma običajne dogodke.",
      "Na nevarne ali nenavadne dogodke.",
      "Na vse dogodke enako.",
      "Le na dogodke brez čustvene vrednosti.",
    ],
    answer: 1,
    explanation:
      "Pozornost pogosto pritegnejo nevarni, nenavadni ali osebno pomembni dogodki.",
  },

  {
    id: 250,
    category: "ucenje",
    difficulty: "medium",
    question: "Kaj pomeni pogojevanje?",
    options: [
      "Učenje z opazovanjem drugih ljudi.",
      "Učenje povezave med dražljajem in reakcijo.",
      "Reševanje problemov z vpogledom.",
      "Pridobivanje znanja brez izkušenj.",
    ],
    answer: 1,
    explanation:
      "Pogojevanje pomeni učenje povezave med dražljajem in odzivom.",
  },

  {
    id: 251,
    category: "ucenje",
    difficulty: "hard",
    question: "Kateri dejavnik poveča uspešnost klasičnega pogojevanja?",
    options: [
      "Čim manj ponovitev.",
      "Čim daljši časovni razmik med dražljaji.",
      "Večkratno povezovanje dražljajev.",
      "Naključno pojavljanje dražljajev.",
    ],
    answer: 2,
    explanation:
      "Pogostost povezovanja okrepi povezavo med dražljajem in odzivom.",
  },

  {
    id: 252,
    category: "ucenje",
    difficulty: "hard",
    question: "Zakaj je časovna bližina pomembna pri klasičnem pogojevanju?",
    options: [
      "Ker se dražljaja lažje povežeta, če si sledita hitro.",
      "Ker zmanjšuje generalizacijo.",
      "Ker preprečuje diskriminacijo.",
      "Ker nadomesti ponavljanje.",
    ],
    answer: 0,
    explanation: "Dražljaj in odziv morata časovno tesno slediti drug drugemu.",
  },

  {
    id: 253,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj sta pokazala Watson in Rayner s poskusom 'Little Albert'?",
    options: [
      "Da se agresivnost naučimo z opazovanjem.",
      "Da se lahko strah naučimo s klasičnim pogojevanjem.",
      "Da nagrada poveča vedenje.",
      "Da živali uporabljajo kognitivne zemljevide.",
    ],
    answer: 1,
    explanation:
      "Strah se lahko razvije s povezovanjem nevtralnega dražljaja z neprijetno izkušnjo.",
  },

  {
    id: 254,
    category: "ucenje",
    difficulty: "hard",
    question:
      "Pred katerimi predmeti je Little Albert po pogojevanju pokazal strah?",
    options: [
      "Le pred belo podgano.",
      "Pred vsemi živalmi.",
      "Tudi pred zajci, krznom in drugimi belimi predmeti.",
      "Le pred glasnimi zvoki.",
    ],
    answer: 2,
    explanation:
      "Strah se je razširil na podobne dražljaje zaradi generalizacije.",
  },

  {
    id: 255,
    category: "ucenje",
    difficulty: "medium",
    question: "Kdo je razvil teorijo poskusa in napake?",
    options: [
      "Ivan Pavlov.",
      "Edward Thorndike.",
      "Albert Bandura.",
      "Edward Tolman.",
    ],
    answer: 1,
    explanation: "Thorndike je razvil teorijo učenja s poskusi in napakami.",
  },

  {
    id: 256,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj pravi Thorndikeov zakon učinka?",
    options: [
      "Vedenje se utrjuje ne glede na posledice.",
      "Prijetne posledice povečajo verjetnost vedenja.",
      "Kazen vedno odpravi vedenje.",
      "Učenje poteka brez vpliva izkušenj.",
    ],
    answer: 1,
    explanation: "Vedenja s prijetnimi posledicami se pogosteje ponavljajo.",
  },

  {
    id: 257,
    category: "ucenje",
    difficulty: "hard",
    question: "Kdaj je kaznovanje najbolj učinkovito?",
    options: [
      "Če je redko in nepredvidljivo.",
      "Če sledi vedenju hitro in dosledno.",
      "Če se uporablja samo občasno.",
      "Če je čim strožje.",
    ],
    answer: 1,
    explanation: "Kazen mora slediti vedenju takoj in dosledno.",
  },

  {
    id: 258,
    category: "ucenje",
    difficulty: "medium",
    question: "Kdo je uvedel pojem kognitivnega zemljevida?",
    options: [
      "Edward Tolman.",
      "B. F. Skinner.",
      "Ivan Pavlov.",
      "John Watson.",
    ],
    answer: 0,
    explanation:
      "Tolman je pokazal, da si organizmi ustvarijo miselne predstave prostora.",
  },

  {
    id: 259,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj je pokazal Tolman s poskusi na podganah?",
    options: [
      "Da živali delujejo le po načelu nagrad.",
      "Da si ustvarijo kognitivne zemljevide okolja.",
      "Da uporabljajo klasično pogojevanje.",
      "Da posnemajo druge živali.",
    ],
    answer: 1,
    explanation: "Podgane so znale poiskati nove poti do cilja.",
  },

  {
    id: 260,
    category: "ucenje",
    difficulty: "hard",
    question: "Koga ljudje pogosteje posnemamo po Banduri?",
    options: [
      "Izključno vrstnike.",
      "Le družinske člane.",
      "Ljudi, ki so nagrajeni ali imajo višji status.",
      "Samo osebe iste starosti.",
    ],
    answer: 2,
    explanation:
      "Večja verjetnost posnemanja je pri nagrajenih in uglednih modelih.",
  },

  {
    id: 261,
    category: "ucenje",
    difficulty: "hard",
    question: "Katera trditev o socialnem učenju je pravilna?",
    options: [
      "Ojačevanje je nujno za učenje.",
      "Ljudje se lahko naučimo vedenja že samo z opazovanjem.",
      "Posnemamo le ljudi istega spola.",
      "Socialno učenje temelji izključno na kaznovanju.",
    ],
    answer: 1,
    explanation:
      "Bandura je pokazal, da se lahko naučimo brez neposredne nagrade.",
  },

  {
    id: 262,
    category: "ucenje",
    difficulty: "medium",
    question: "Kdo je raziskoval učenje z vpogledom?",
    options: [
      "Edward Thorndike.",
      "Wolfgang Köhler.",
      "Albert Bandura.",
      "B. F. Skinner.",
    ],
    answer: 1,
    explanation: "Köhler je proučeval vpogled pri šimpanzih.",
  },

  {
    id: 263,
    category: "ucenje",
    difficulty: "hard",
    question: "Kaj najbolje opisuje učenje z vpogledom?",
    options: [
      "Postopno učenje s poskusi in napakami.",
      "Ponavljanje že naučenega vedenja.",
      "Nenadno razumevanje rešitve problema.",
      "Učenje preko nagrajevanja.",
    ],
    answer: 2,
    explanation:
      "Vpogled pomeni nenaden 'aha' trenutek pri reševanju problema.",
  },

  {
    id: 264,
    category: "ucenje",
    difficulty: "hard",
    question: "Kateri dejavnik običajno izboljša učenje?",
    options: [
      "Pomanjkanje spanja.",
      "Visoka motivacija.",
      "Dolgotrajna bolezen.",
      "Popolna odsotnost predznanja.",
    ],
    answer: 1,
    explanation: "Večja motivacija je pogosto povezana z boljšim učenjem.",
  },

  {
    id: 265,
    category: "ucenje",
    difficulty: "hard",
    question: "Zakaj prejšnje znanje pogosto olajša učenje?",
    options: [
      "Ker zmanjša potrebo po pozornosti.",
      "Ker novo znanje lažje povežemo z obstoječim.",
      "Ker preprečuje interferenco.",
      "Ker nadomesti motivacijo.",
    ],
    answer: 1,
    explanation:
      "Novo snov lažje razumemo, če jo lahko povežemo s predhodnim znanjem.",
  },

  {
    id: 266,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj so pojmi?",
    options: [
      "Pravila za reševanje problemov.",
      "Miselne kategorije, ki predstavljajo skupine predmetov, dogodkov ali dejavnosti.",
      "Strategije odločanja v negotovih situacijah.",
      "Vrste ustvarjalnega mišljenja.",
    ],
    answer: 1,
    explanation: "Pojmi nam omogočajo razvrščanje in organizacijo informacij.",
  },

  {
    id: 267,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj najbolje opisuje formalne pojme?",
    options: [
      "Temeljijo na osebnih izkušnjah.",
      "Nimajo jasnih meja.",
      "Temeljijo na natančno določenih pravilih.",
      "Vedno vključujejo prototipe.",
    ],
    answer: 2,
    explanation:
      "Formalni pojmi imajo jasne kriterije, ki morajo biti izpolnjeni.",
  },

  {
    id: 268,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj je značilno za naravne pojme?",
    options: [
      "Temeljijo izključno na matematičnih pravilih.",
      "Vedno imajo natančno določene meje.",
      "Oblikujejo se na podlagi izkušenj in nimajo vedno jasnih meja.",
      "Ne vsebujejo prototipov.",
    ],
    answer: 2,
    explanation:
      "Naravni pojmi so bolj fleksibilni in izhajajo iz vsakodnevnih izkušenj.",
  },

  {
    id: 269,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj je prototip?",
    options: [
      "Najbolj značilen predstavnik neke kategorije.",
      "Postopek za reševanje problemov.",
      "Vrsta hevristike.",
      "Miselna ovira.",
    ],
    answer: 0,
    explanation: "Prototip predstavlja tipičen primer določene kategorije.",
  },

  {
    id: 270,
    category: "misljenje",
    difficulty: "hard",
    question: "Kateri primer najbolje ponazarja prototip pojma PTICA?",
    options: ["Pingvin.", "Noj.", "Vrabec.", "Netopir."],
    answer: 2,
    explanation: "Vrabec je za večino ljudi bolj tipičen predstavnik ptic.",
  },

  {
    id: 271,
    category: "misljenje",
    difficulty: "medium",
    question: "Kdaj govorimo o problemu?",
    options: [
      "Ko nimamo nobenega cilja.",
      "Ko imamo cilj, vendar ne poznamo takojšnje poti do njega.",
      "Ko uporabljamo algoritme.",
      "Ko rešitev že poznamo.",
    ],
    answer: 1,
    explanation:
      "Problem nastane, ko želimo doseči cilj, vendar ne poznamo rešitve.",
  },

  {
    id: 272,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj je glavna prednost algoritmov?",
    options: [
      "So zelo hitri.",
      "Vedno vodijo do pravilne rešitve, če jih pravilno uporabimo.",
      "Spodbujajo ustvarjalnost.",
      "Temeljijo na intuiciji.",
    ],
    answer: 1,
    explanation:
      "Algoritmi predstavljajo natančne postopke za reševanje problemov.",
  },

  {
    id: 273,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj je glavna pomanjkljivost hevristik?",
    options: [
      "Nikoli ne vodijo do rešitve.",
      "So zelo počasne.",
      "Povečajo verjetnost napak pri presoji.",
      "Zahtevajo veliko matematičnega znanja.",
    ],
    answer: 2,
    explanation:
      "Hevristike omogočajo hitro odločanje, vendar povečajo možnost napak.",
  },

  {
    id: 274,
    category: "misljenje",
    difficulty: "hard",
    question: "Kateri korak reševanja problemov sledi opredelitvi problema?",
    options: [
      "Akcija.",
      "Izbira strategije.",
      "Iskanje rešitev.",
      "Vrednotenje.",
    ],
    answer: 2,
    explanation: "Po opredelitvi problema razmišljamo o možnih rešitvah.",
  },

  {
    id: 275,
    category: "misljenje",
    difficulty: "medium",
    question: "Kaj pomeni vrednotenje pri reševanju problemov?",
    options: [
      "Izvedbo rešitve.",
      "Izbiro strategije.",
      "Preverjanje uspešnosti rešitve.",
      "Prepoznavo problema.",
    ],
    answer: 2,
    explanation: "Na koncu ocenimo, ali je bila rešitev uspešna.",
  },

  {
    id: 276,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj je značilno za model ene lastnosti pri odločanju?",
    options: [
      "Ocenjujemo vse lastnosti enako.",
      "Odločitev temelji na eni najpomembnejši lastnosti.",
      "Možnosti postopoma izločamo.",
      "Uporabljamo hevristike.",
    ],
    answer: 1,
    explanation: "Pri tem modelu odločitev temelji na enem ključnem kriteriju.",
  },

  {
    id: 277,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni model dodajanja pri odločanju?",
    options: [
      "Možnosti izločamo eno za drugo.",
      "Vsaki lastnosti pripišemo vrednost in jih seštejemo.",
      "Odločamo se naključno.",
      "Temeljimo na eni lastnosti.",
    ],
    answer: 1,
    explanation: "Skupna ocena temelji na seštevku različnih lastnosti.",
  },

  {
    id: 278,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni model izločanja?",
    options: [
      "Izberemo prvo možnost.",
      "Možnosti postopoma odstranjujemo glede na kriterije.",
      "Uporabimo algoritem.",
      "Temeljimo na intuiciji.",
    ],
    answer: 1,
    explanation: "Neustrezne možnosti izločamo, dokler ne ostane najboljša.",
  },

  {
    id: 279,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj je hevristika razpoložljivosti?",
    options: [
      "Presojanje na podlagi podobnosti.",
      "Presojanje glede na prvo informacijo.",
      "Ocenjevanje verjetnosti glede na to, kako hitro se nečesa spomnimo.",
      "Odločanje na podlagi algoritmov.",
    ],
    answer: 2,
    explanation: "Dogodki, ki se jih hitro spomnimo, se nam zdijo pogostejši.",
  },

  {
    id: 280,
    category: "misljenje",
    difficulty: "hard",
    question:
      "Po poročilih o letalski nesreči se nam zdi letenje bolj nevarno. Gre za:",
    options: [
      "Hevristiko ujemanja.",
      "Hevristiko razpoložljivosti.",
      "Potrditveno pristranskost.",
      "Funkcionalno fiksacijo.",
    ],
    answer: 1,
    explanation:
      "Nedavni in čustveno močni dogodki vplivajo na presojo verjetnosti.",
  },

  {
    id: 281,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni hevristika ujemanja?",
    options: [
      "Presojanje na podlagi podobnosti z značilnim primerom.",
      "Odločanje po algoritmu.",
      "Uporabo starih rešitev.",
      "Vrednotenje različnih možnosti.",
    ],
    answer: 0,
    explanation: "Ljudje sklepamo na podlagi podobnosti s prototipom.",
  },

  {
    id: 282,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni miselni set?",
    options: [
      "Nenadno razumevanje problema.",
      "Vztrajanje pri uporabi stare rešitve za nov problem.",
      "Nezmožnost uporabe predmeta na nov način.",
      "Odločanje po intuiciji.",
    ],
    answer: 1,
    explanation: "Miselni set nas lahko ovira pri iskanju boljših rešitev.",
  },

  {
    id: 283,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni potrditvena pristranskost?",
    options: [
      "Iskanje informacij, ki potrjujejo naša prepričanja.",
      "Uporaba algoritmov.",
      "Vztrajanje pri enem načinu uporabe predmetov.",
      "Naključno odločanje.",
    ],
    answer: 0,
    explanation:
      "Pogosto iščemo dokaze, ki podpirajo naše mnenje, in zanemarjamo nasprotne.",
  },

  {
    id: 284,
    category: "misljenje",
    difficulty: "hard",
    question: "Kaj pomeni precenjevanje pri presojanju?",
    options: [
      "Podcenjevanje lastnih sposobnosti.",
      "Pretirano zaupanje v svoje znanje ali sposobnosti.",
      "Odločanje na podlagi podobnosti.",
      "Uporabo miselnih bližnjic.",
    ],
    answer: 1,
    explanation: "Ljudje pogosto precenjujemo pravilnost svojih presoj.",
  },

  {
    id: 285,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje instinkt?",
    options: [
      "Naučeno vedenje.",
      "Prirojen biološki vzorec vedenja.",
      "Želja po dosežkih.",
      "Zunanja nagrada.",
    ],
    answer: 1,
    explanation: "Instinkt je prirojen in podedovan vzorec vedenja.",
  },

  {
    id: 286,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj pomeni gon?",
    options: [
      "Kratkotrajno čustveno stanje.",
      "Trajna psihološka motivacijska sila.",
      "Vrsta nagrade.",
      "Oblika kazni.",
    ],
    answer: 1,
    explanation: "Gon posameznika spodbuja k zadovoljitvi potrebe.",
  },

  {
    id: 287,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj po teoriji gonov neposredno sledi potrebi?",
    options: ["Motivacija.", "Vedenje.", "Psihična napetost.", "Nagrada."],
    answer: 2,
    explanation: "Potreba povzroči psihično napetost, ki vodi v nastanek gona.",
  },

  {
    id: 288,
    category: "motivacija",
    difficulty: "hard",
    question: "Kateri goni sodijo med primarne gone?",
    options: [
      "Uspeh in ugled.",
      "Moč in denar.",
      "Lakota, žeja in spanje.",
      "Pripadnost in ljubezen.",
    ],
    answer: 2,
    explanation: "Primarni goni so povezani s preživetjem.",
  },

  {
    id: 289,
    category: "motivacija",
    difficulty: "hard",
    question: "Kateri primer predstavlja sekundarni gon?",
    options: ["Dihanje.", "Žeja.", "Spanje.", "Doseganje ugleda."],
    answer: 3,
    explanation: "Sekundarni goni nastanejo z učenjem.",
  },

  {
    id: 290,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj je osnovna ideja teorije vzburjenja?",
    options: [
      "Ljudje si želimo popolne umirjenosti.",
      "Ljudje težimo k optimalni ravni vzburjenosti.",
      "Motivira nas le nagrada.",
      "Motivirajo nas le potrebe.",
    ],
    answer: 1,
    explanation: "Ljudje iščemo ravnovesje med premalo in preveč vzburjenja.",
  },

  {
    id: 291,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj se pogosto pojavi pri prenizki vzburjenosti?",
    options: ["Evforija.", "Agresivnost.", "Dolgčas in monotonost.", "Panika."],
    answer: 2,
    explanation:
      "Prenizka vzburjenost nas spodbuja k iskanju novih dražljajev.",
  },

  {
    id: 292,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj je značilno za previsoko vzburjenost?",
    options: [
      "Povečana ustvarjalnost.",
      "Stres in tesnoba.",
      "Večja motivacija za dosežke.",
      "Izboljšan spomin.",
    ],
    answer: 1,
    explanation:
      "Previsoka vzburjenost lahko povzroči stres in preobremenjenost.",
  },

  {
    id: 293,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj poudarja teorija pričakovanja?",
    options: [
      "Da nas motivirajo samo potrebe.",
      "Da nas motivirajo pričakovani rezultati in nagrade.",
      "Da vedenje določajo instinkti.",
      "Da motivacija ni povezana z okoljem.",
    ],
    answer: 1,
    explanation: "Pričakovana nagrada lahko sproži motivacijo.",
  },

  {
    id: 294,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj pomeni psihosocialna motivacija?",
    options: [
      "Motive, povezane z biološkim preživetjem.",
      "Motive, povezane z odnosi med ljudmi.",
      "Motive, povezane z nagrajevanjem.",
      "Motive, povezane z instinkti.",
    ],
    answer: 1,
    explanation: "Psihosocialna motivacija vključuje povezanost in dosežke.",
  },

  {
    id: 295,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj pomeni navezanost?",
    options: [
      "Potrebo po dosežkih.",
      "Najzgodnejšo potrebo po medosebnih odnosih.",
      "Potrebo po moči.",
      "Potrebo po priznanju.",
    ],
    answer: 1,
    explanation: "Navezanost se pojavi že pri dojenčku.",
  },

  {
    id: 296,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj pomeni pripadnost?",
    options: [
      "Potrebo po samouresničitvi.",
      "Potrebo po fizični varnosti.",
      "Potrebo biti del skupine.",
      "Potrebo po moči.",
    ],
    answer: 2,
    explanation: "Pripadnost pomeni občutek sprejetosti in povezanosti.",
  },

  {
    id: 297,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj je pogosto posledica nezadovoljene potrebe po povezanosti?",
    options: [
      "Povečana ustvarjalnost.",
      "Osamljenost.",
      "Večja samozavest.",
      "Povečana agresivnost.",
    ],
    answer: 1,
    explanation:
      "Nezadovoljena potreba po povezanosti lahko vodi v osamljenost.",
  },

  {
    id: 298,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj je značilno za ljudi z visoko motivacijo za dosežke?",
    options: [
      "Izogibajo se izzivom.",
      "Hitro odnehajo.",
      "Postavljajo si cilje in vztrajajo.",
      "Ne prevzemajo odgovornosti.",
    ],
    answer: 2,
    explanation: "Takšni posamezniki pogosto iščejo izzive in vztrajajo.",
  },

  {
    id: 299,
    category: "motivacija",
    difficulty: "hard",
    question: "Kako se pogosto vedejo ljudje z nizko motivacijo za dosežke?",
    options: [
      "Vztrajajo pri zahtevnih nalogah.",
      "Postavljajo si visoke cilje.",
      "Pogosteje odlašajo in hitreje odnehajo.",
      "Iščejo dodatne izzive.",
    ],
    answer: 2,
    explanation:
      "Nizka motivacija za dosežke je pogosto povezana z odlašanjem.",
  },

  {
    id: 300,
    category: "motivacija",
    difficulty: "medium",
    question: "Kaj je agresivnost?",
    options: [
      "Vsako tekmovalno vedenje.",
      "Vedenje, namenjeno povzročanju škode.",
      "Vsaka oblika jeze.",
      "Potreba po dosežkih.",
    ],
    answer: 1,
    explanation: "Agresivnost vključuje namero povzročiti škodo.",
  },

  {
    id: 301,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj najbolje opisuje konstruktivno agresivnost?",
    options: [
      "Povzročanje škode brez razloga.",
      "Zaščito ali reševanje problema.",
      "Nasilje nad šibkejšimi.",
      "Impulzivno vedenje.",
    ],
    answer: 1,
    explanation: "Konstruktivna agresivnost je lahko usmerjena v obrambo.",
  },

  {
    id: 302,
    category: "motivacija",
    difficulty: "hard",
    question: "Katera oblika NI navedena med oblikami nasilja?",
    options: [
      "Fizično nasilje.",
      "Psihično nasilje.",
      "Verbalno nasilje.",
      "Digitalno nasilje.",
    ],
    answer: 3,
    explanation:
      "V zapiskih so navedene fizična, psihična, verbalna in ekonomska oblika nasilja.",
  },

  {
    id: 303,
    category: "motivacija",
    difficulty: "hard",
    question: "Kateri hormon je najpogosteje povezan z agresivnim vedenjem?",
    options: ["Insulin.", "Testosteron.", "Melatonin.", "Oksitocin."],
    answer: 1,
    explanation:
      "Androgeni hormoni, zlasti testosteron, lahko povečajo verjetnost agresivnosti.",
  },

  {
    id: 304,
    category: "motivacija",
    difficulty: "hard",
    question: "Kateri dejavnik okolja lahko poveča agresivnost?",
    options: [
      "Meditacija.",
      "Nasilje v medijih.",
      "Dovolj spanja.",
      "Telesna aktivnost.",
    ],
    answer: 1,
    explanation: "Posnemanje nasilnih vzorcev lahko vpliva na vedenje.",
  },

  {
    id: 305,
    category: "motivacija",
    difficulty: "hard",
    question: "Katero čustvo pogosto poveča verjetnost agresivnega vedenja?",
    options: ["Veselje.", "Ponos.", "Jeza.", "Presenečenje."],
    answer: 2,
    explanation: "Jeza, frustracija in sovražnost lahko povečajo agresivnost.",
  },

  {
    id: 306,
    category: "motivacija",
    difficulty: "hard",
    question:
      "Katera možganska struktura sodeluje pri nadzoru vedenja in moralni presoji?",
    options: [
      "Mali možgani.",
      "Hipokampus.",
      "Prefrontalni korteks.",
      "Talamus.",
    ],
    answer: 2,
    explanation: "Prefrontalni korteks pomembno vpliva na samonadzor.",
  },

  {
    id: 307,
    category: "motivacija",
    difficulty: "hard",
    question:
      "V katerem obdobju so nasilna vedenja in vpliv vrstnikov pogosto izrazitejši?",
    options: [
      "Pri starostnikih.",
      "V adolescenci.",
      "V zgodnjem otroštvu.",
      "V odraslosti.",
    ],
    answer: 1,
    explanation: "V adolescenci imajo vrstniki in skupine večji vpliv.",
  },

  {
    id: 308,
    category: "motivacija",
    difficulty: "hard",
    question: "Kaj lahko prispeva k nasilnemu vedenju v odraslosti?",
    options: [
      "Socialno učenje in zloraba substanc.",
      "Dobra socialna opora.",
      "Redna telesna dejavnost.",
      "Visoka intrinzična motivacija.",
    ],
    answer: 0,
    explanation:
      "Pomembni dejavniki so med drugim alkohol, druge substance in socialno učenje.",
  },

  {
    id: 309,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj najbolje opisuje osebnost?",
    options: [
      "Skupek prirojenih refleksov.",
      "Edinstven in dolgotrajen vzorec mišljenja, čustvovanja in vedenja.",
      "Izključno temperament posameznika.",
      "Trenutno razpoloženje posameznika.",
    ],
    answer: 1,
    explanation:
      "Osebnost zajema značilne načine mišljenja, čustvovanja in vedenja.",
  },

  {
    id: 310,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Katera trditev najbolje opisuje razliko med osebnostjo in temperamentom?",
    options: [
      "Gre za sopomenki.",
      "Temperament nastaja z učenjem, osebnost pa je prirojena.",
      "Temperament je bolj prirojen, osebnost pa vključuje tudi okolje in izkušnje.",
      "Temperament se razvije šele v odraslosti.",
    ],
    answer: 2,
    explanation:
      "Temperament je bolj biološko pogojen, osebnost pa širši pojem.",
  },

  {
    id: 311,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj so osebnostne poteze?",
    options: [
      "Trenutna čustvena stanja.",
      "Relativno trajne značilnosti posameznika.",
      "Prirojeni refleksi.",
      "Nezavedni konflikti.",
    ],
    answer: 1,
    explanation:
      "Osebnostne poteze predstavljajo stabilne značilnosti posameznika.",
  },

  {
    id: 312,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj pomeni samopodoba?",
    options: [
      "Ocena lastne vrednosti.",
      "Predstava, ki jo imamo o sebi.",
      "Potreba po dosežkih.",
      "Nezavedna vsebina.",
    ],
    answer: 1,
    explanation: "Samopodoba vključuje misli, občutke in zaznave o sebi.",
  },

  {
    id: 313,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj pomeni samospoštovanje?",
    options: [
      "Primerjanje z drugimi.",
      "Vrednotenje samega sebe.",
      "Željo po uspehu.",
      "Zanikanje napak.",
    ],
    answer: 1,
    explanation: "Samospoštovanje pomeni, kako cenimo samega sebe.",
  },

  {
    id: 314,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj poudarjajo humanistične teorije osebnosti?",
    options: [
      "Nezavedne nagone.",
      "Vlogo dednosti.",
      "Svobodno voljo in osebno odgovornost.",
      "Vedenje kot posledico pogojevanja.",
    ],
    answer: 2,
    explanation: "Humanisti poudarjajo možnost izbire in osebno rast.",
  },

  {
    id: 315,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj pomeni samoaktualizacija po Maslowu?",
    options: [
      "Doseganje družbenega statusa.",
      "Uresničevanje lastnih potencialov.",
      "Pripadnost skupini.",
      "Zadovoljevanje fizioloških potreb.",
    ],
    answer: 1,
    explanation: "Samoaktualizacija pomeni postati najboljša različica sebe.",
  },

  {
    id: 316,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je po Rogersu realno sebstvo?",
    options: [
      "Kakšni bi radi bili.",
      "Kako nas vidijo drugi.",
      "Kakšni smo v resnici.",
      "Kako smo bili v otroštvu.",
    ],
    answer: 2,
    explanation: "Realno sebstvo predstavlja našo dejansko predstavo o sebi.",
  },

  {
    id: 317,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je po Rogersu idealno sebstvo?",
    options: [
      "Kakšni smo v resnici.",
      "Kakšni bi radi postali.",
      "Kako nas ocenjuje družba.",
      "Nezavedni del osebnosti.",
    ],
    answer: 1,
    explanation:
      "Idealno sebstvo predstavlja podobo osebe, kakršna želimo biti.",
  },

  {
    id: 318,
    category: "osebnost",
    difficulty: "hard",
    question: "Kdaj je psihološko počutje po Rogersu najboljše?",
    options: [
      "Ko je razlika med realnim in idealnim sebstvom velika.",
      "Ko ni razlik med ljudmi.",
      "Ko je razlika med realnim in idealnim sebstvom čim manjša.",
      "Ko prevladuje superego.",
    ],
    answer: 2,
    explanation:
      "Majhna razlika med obema oblikama sebstva je povezana z boljšim počutjem.",
  },

  {
    id: 319,
    category: "osebnost",
    difficulty: "hard",
    question: "Katere poteze je Allport označil kot najpomembnejše?",
    options: [
      "Sekundarne poteze.",
      "Skupne poteze.",
      "Centralne poteze.",
      "Biološke poteze.",
    ],
    answer: 2,
    explanation: "Centralne poteze najbolj določajo osebnost posameznika.",
  },

  {
    id: 320,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je primer sekundarne poteze?",
    options: ["Vestnost.", "Poštenost.", "Način oblačenja.", "Družabnost."],
    answer: 2,
    explanation: "Sekundarne poteze so manj pomembne in manj stalne.",
  },

  {
    id: 321,
    category: "osebnost",
    difficulty: "hard",
    question: "Koliko osebnostnih faktorjev je opisal Cattell?",
    options: ["5", "8", "12", "16"],
    answer: 3,
    explanation: "Cattell je razvil model 16 osebnostnih faktorjev.",
  },

  {
    id: 322,
    category: "osebnost",
    difficulty: "medium",
    question: "Kateri model danes velja za najpomembnejši model osebnosti?",
    options: [
      "Freudova topika.",
      "Big Five.",
      "Cattellov model.",
      "Behaviorizem.",
    ],
    answer: 1,
    explanation: "Model velikih pet opisuje osebnost s petimi dimenzijami.",
  },

  {
    id: 323,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Katera dimenzija Big Five vključuje tesnobo in čustveno nestabilnost?",
    options: ["Vestnost.", "Ekstraverzija.", "Nevroticizem.", "Odprtost."],
    answer: 2,
    explanation: "Visok nevroticizem pomeni večjo čustveno nestabilnost.",
  },

  {
    id: 324,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je značilno za visoko ekstraverzijo?",
    options: [
      "Zadržanost.",
      "Družabnost in energičnost.",
      "Tekmovalnost.",
      "Tesnobnost.",
    ],
    answer: 1,
    explanation: "Ekstravertirani posamezniki so bolj družabni in energični.",
  },

  {
    id: 325,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni visoka odprtost za izkušnje?",
    options: [
      "Neorganiziranost.",
      "Tradicionalnost.",
      "Radovednost in ustvarjalnost.",
      "Čustveno nestabilnost.",
    ],
    answer: 2,
    explanation: "Odprtost vključuje zanimanje za nove ideje in izkušnje.",
  },

  {
    id: 326,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je značilno za visoko vestnost?",
    options: [
      "Impulzivnost.",
      "Organiziranost in odgovornost.",
      "Tekmovalnost.",
      "Nezaupanje.",
    ],
    answer: 1,
    explanation:
      "Vestni posamezniki so bolj samodisciplinirani in organizirani.",
  },

  {
    id: 327,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj menijo behavioristi o osebnosti?",
    options: [
      "Da jo določajo nezavedni konflikti.",
      "Da je rezultat naučenih navad in odzivov.",
      "Da temelji na genih.",
      "Da je odvisna od sebstva.",
    ],
    answer: 1,
    explanation: "Po behavioristih osebnost nastane skozi učenje.",
  },

  {
    id: 328,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj poudarjajo socialni kognitivisti?",
    options: [
      "Izključno dednost.",
      "Opazovanje drugih in lastna pričakovanja.",
      "Nagone in nezavedno.",
      "Moralna pravila.",
    ],
    answer: 1,
    explanation:
      "Socialni kognitivisti poudarjajo vpliv okolja in pričakovanj.",
  },

  {
    id: 329,
    category: "osebnost",
    difficulty: "medium",
    question: "Kdo je ustanovitelj psihoanalize?",
    options: [
      "Carl Rogers.",
      "Abraham Maslow.",
      "Sigmund Freud.",
      "Gordon Allport.",
    ],
    answer: 2,
    explanation: "Freud velja za ustanovitelja psihoanalize.",
  },

  {
    id: 330,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni princip ugodja?",
    options: [
      "Upoštevanje pravil in posledic.",
      "Iskanje takojšnjega zadovoljstva.",
      "Odlašanje zadovoljstva.",
      "Samodisciplino.",
    ],
    answer: 1,
    explanation: "Princip ugodja teži k hitremu zmanjšanju napetosti.",
  },

  {
    id: 331,
    category: "osebnost",
    difficulty: "medium",
    question: "Kaj predstavlja zavestno po Freudovi prvi topiki?",
    options: [
      "Potlačene želje in konflikte.",
      "Informacije, ki jih lahko prikličemo.",
      "Kar trenutno zaznavamo in se zavedamo.",
      "Nezavedne obrambne mehanizme.",
    ],
    answer: 2,
    explanation: "Zavestno vključuje vsebine, ki se jih trenutno zavedamo.",
  },

  {
    id: 332,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj najbolje opisuje predzavestno?",
    options: [
      "Vsebine, ki niso dostopne zavesti.",
      "Informacije, ki jih lahko prikličemo v zavest.",
      "Trenutno zaznavanje okolja.",
      "Potlačene travmatične izkušnje.",
    ],
    answer: 1,
    explanation:
      "Predzavestno vsebuje informacije, ki niso v zavesti, vendar jih lahko prikličemo.",
  },

  {
    id: 333,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj vsebuje nezavedno?",
    options: [
      "Le prijetne spomine.",
      "Trenutne misli in občutke.",
      "Potlačene želje, spomine in konflikte.",
      "Informacije iz kratkoročnega spomina.",
    ],
    answer: 2,
    explanation: "Freud je nezavednemu pripisoval velik vpliv na vedenje.",
  },

  {
    id: 334,
    category: "osebnost",
    difficulty: "hard",
    question: "Kateri del osebnosti deluje po principu ugodja?",
    options: ["Ego.", "Superego.", "Id.", "Sebstvo."],
    answer: 2,
    explanation: "Id želi takojšnjo zadovoljitev potreb.",
  },

  {
    id: 335,
    category: "osebnost",
    difficulty: "hard",
    question: "Kateri del osebnosti deluje po principu realnosti?",
    options: ["Id.", "Ego.", "Superego.", "Nezavedno."],
    answer: 1,
    explanation: "Ego usklajuje zahteve ida in realnosti.",
  },

  {
    id: 336,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj predstavlja superego?",
    options: [
      "Nagonske želje.",
      "Trenutne zaznave.",
      "Moralo, pravila in vest.",
      "Spominske procese.",
    ],
    answer: 2,
    explanation: "Superego predstavlja ponotranjene moralne vrednote.",
  },

  {
    id: 337,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni zanikanje kot obrambni mehanizem?",
    options: [
      "Iskanje logičnih razlag.",
      "Nezavedno potlačevanje spominov.",
      "Nesprejemanje realnosti.",
      "Preusmerjanje čustev.",
    ],
    answer: 2,
    explanation: "Pri zanikanju oseba ne sprejme dejanskega stanja.",
  },

  {
    id: 338,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni racionalizacija?",
    options: [
      "Pripisovanje lastnosti drugim.",
      "Iskanje navidezno logične razlage za neuspeh.",
      "Preusmerjanje čustev.",
      "Vrnitev na otroško vedenje.",
    ],
    answer: 1,
    explanation: "Racionalizacija zmanjšuje neprijetne občutke z razlagami.",
  },

  {
    id: 339,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni projekcija?",
    options: [
      "Preusmerjanje agresije.",
      "Potlačevanje spominov.",
      "Pripisovanje lastnih nezaželenih lastnosti drugim.",
      "Vrnitev v zgodnejšo razvojno fazo.",
    ],
    answer: 2,
    explanation: "Pri projekciji svoje lastnosti vidimo pri drugih.",
  },

  {
    id: 340,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni premeščanje?",
    options: [
      "Preusmerjanje čustev na manj nevaren cilj.",
      "Potlačevanje konfliktov.",
      "Posnemanje drugih.",
      "Idealiziranje sebe.",
    ],
    answer: 0,
    explanation: "Čustva izrazimo na varnejšem objektu.",
  },

  {
    id: 341,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni regresija?",
    options: [
      "Napredovanje v razvoju.",
      "Vrnitev na bolj otroško vedenje.",
      "Iskanje racionalnih razlag.",
      "Prevzemanje lastnosti drugih.",
    ],
    answer: 1,
    explanation: "Regresija pomeni vračanje k vedenju iz zgodnejšega obdobja.",
  },

  {
    id: 342,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj pomeni sublimacija?",
    options: [
      "Zanikanje težav.",
      "Potlačevanje čustev.",
      "Preusmerjanje nesprejemljivih impulzov v družbeno sprejemljivo obliko.",
      "Izogibanje odgovornosti.",
    ],
    answer: 2,
    explanation: "Na primer preusmerjanje agresivnosti v šport.",
  },

  {
    id: 343,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Katera faza psihoseksualnega razvoja poteka približno med 0. in 1. letom?",
    options: ["Analna faza.", "Oralna faza.", "Falična faza.", "Latenca."],
    answer: 1,
    explanation: "V oralni fazi so usta glavni vir zadovoljstva.",
  },

  {
    id: 344,
    category: "osebnost",
    difficulty: "hard",
    question: "S katero razvojno nalogo je povezana analna faza?",
    options: [
      "Učenje hoje.",
      "Navajanje na čistočo.",
      "Razvoj govora.",
      "Razvoj navezanosti.",
    ],
    answer: 1,
    explanation: "Analna faza je povezana z nadzorom izločanja.",
  },

  {
    id: 345,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je značilno za fazo latence?",
    options: [
      "Povečan interes za spolnost.",
      "Začasna oslabitev spolnih interesov.",
      "Navajanje na čistočo.",
      "Raziskovanje spolnih razlik.",
    ],
    answer: 1,
    explanation: "Latenca traja približno od 6. leta do pubertete.",
  },

  {
    id: 346,
    category: "osebnost",
    difficulty: "medium",
    question: "Kdo je razvil teorijo navezanosti?",
    options: [
      "Carl Rogers.",
      "John Bowlby.",
      "Sigmund Freud.",
      "Gordon Allport.",
    ],
    answer: 1,
    explanation: "Bowlby je poudarjal prirojeno potrebo po navezovanju.",
  },

  {
    id: 347,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj je značilno za varno navezanost?",
    options: [
      "Otrok se izogiba bližini.",
      "Otrok zaupa skrbniku.",
      "Otrok se pretirano boji ločitve.",
      "Otrok kaže nepredvidljivo vedenje.",
    ],
    answer: 1,
    explanation: "Varna navezanost temelji na zaupanju v skrbnika.",
  },

  {
    id: 348,
    category: "osebnost",
    difficulty: "hard",
    question: "Katera oblika navezanosti velja za najbolj problematično?",
    options: [
      "Varna navezanost.",
      "Tesnobna navezanost.",
      "Izogibajoča navezanost.",
      "Dezorganizirana navezanost.",
    ],
    answer: 3,
    explanation: "Dezorganizirana navezanost je povezana z največ težavami.",
  },

  {
    id: 349,
    category: "osebnost",
    difficulty: "hard",
    question: "Kaj najbolje opisuje vpliv dednosti in okolja na osebnost?",
    options: [
      "Osebnost določa izključno dednost.",
      "Osebnost določa izključno okolje.",
      "Osebnost nastaja zaradi vpliva dednosti in okolja.",
      "Osebnost ni povezana z nobenim od teh dejavnikov.",
    ],
    answer: 2,
    explanation: "Večina raziskav kaže, da osebnost oblikujeta oba dejavnika.",
  },

  {
    id: 350,
    category: "osebnost",
    difficulty: "hard",
    question:
      "Katera trditev o osebnosti in kriminaliteti je najbolj pravilna?",
    options: [
      "Kriminaliteto povzroča ena sama osebnostna lastnost.",
      "Med osebnostjo in kriminaliteto ni preproste povezave.",
      "Vsi storilci imajo enak osebnostni profil.",
      "Inteligentnost nima nobenega vpliva.",
    ],
    answer: 1,
    explanation: "Na kriminaliteto vpliva več dejavnikov, ne le osebnost.",
  },

  {
    id: 351,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj najbolje opisuje živčni sistem?",
    options: [
      "Sistem za prebavo hrane.",
      "Komunikacijsko omrežje telesa.",
      "Sistem za uravnavanje hormonov.",
      "Sistem za proizvodnjo krvi.",
    ],
    answer: 1,
    explanation:
      "Živčni sistem sprejema informacije, jih obdeluje in pošilja ukaze telesu.",
  },

  {
    id: 352,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera naloga NI med osnovnimi nalogami živčnega sistema?",
    options: [
      "Sprejemanje informacij.",
      "Obdelava informacij.",
      "Proizvodnja hormonov.",
      "Pošiljanje ukazov telesu.",
    ],
    answer: 2,
    explanation:
      "Živčni sistem ne proizvaja hormonov, temveč usklajuje delovanje telesa.",
  },

  {
    id: 353,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je nevron?",
    options: [
      "Podporna celica živčnega sistema.",
      "Osnovna živčna celica.",
      "Vrsta nevrotransmiterja.",
      "Del možganske skorje.",
    ],
    answer: 1,
    explanation: "Nevron je osnovna funkcionalna enota živčnega sistema.",
  },

  {
    id: 354,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri del nevrona sprejema informacije?",
    options: ["Akson.", "Sinapsa.", "Dendriti.", "Živčni končiči."],
    answer: 2,
    explanation: "Dendriti sprejemajo informacije iz drugih nevronov.",
  },

  {
    id: 355,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera naloga je značilna za akson?",
    options: [
      "Sprejemanje informacij.",
      "Prehranjevanje celice.",
      "Prenos impulza naprej.",
      "Tvorba nevrotransmiterjev.",
    ],
    answer: 2,
    explanation: "Akson prenaša živčni impulz proti naslednji celici.",
  },

  {
    id: 356,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj je sinapsa?",
    options: [
      "Jedro nevrona.",
      "Stik med dvema nevronoma.",
      "Vrsta glia celice.",
      "Električni impulz.",
    ],
    answer: 1,
    explanation: "Sinapsa omogoča prenos signala med nevroni.",
  },

  {
    id: 357,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je glavna naloga glia celic?",
    options: [
      "Prenos impulzov.",
      "Proizvodnja hormonov.",
      "Zaščita in podpora nevronom.",
      "Shranjevanje spominov.",
    ],
    answer: 2,
    explanation: "Glia celice hranijo, ščitijo in podpirajo nevrone.",
  },

  {
    id: 358,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj pomeni načelo 'vse ali nič'?",
    options: [
      "Impulz nastane delno.",
      "Impulz nastane v celoti ali pa sploh ne.",
      "Impulz se vedno okrepi.",
      "Impulz je odvisen od volje.",
    ],
    answer: 1,
    explanation: "Živčni impulz nima vmesnih stopenj.",
  },

  {
    id: 359,
    category: "zivcni",
    difficulty: "medium",
    question: "Kako se informacije prenašajo po nevronih?",
    options: [
      "S hormoni.",
      "S kemičnimi impulzi.",
      "Z električnimi impulzi.",
      "S krvnim obtokom.",
    ],
    answer: 2,
    explanation: "Po nevronih potujejo električni impulzi.",
  },

  {
    id: 360,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj so nevrotransmiterji?",
    options: [
      "Vrsta nevronov.",
      "Kemične snovi za prenos signalov.",
      "Deli aksona.",
      "Električni impulzi.",
    ],
    answer: 1,
    explanation: "Nevrotransmiterji omogočajo komunikacijo med nevroni.",
  },

  {
    id: 361,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj pomeni ekscitatorni učinek?",
    options: [
      "Zmanjšanje možnosti novega impulza.",
      "Spodbujanje nastanka novega impulza.",
      "Upočasnitev prenosa.",
      "Prekinitev komunikacije.",
    ],
    answer: 1,
    explanation: "Ekscitatorni učinek poveča verjetnost impulza.",
  },

  {
    id: 362,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj pomeni inhibitorni učinek?",
    options: [
      "Povečanje impulza.",
      "Pospeševanje zaznavanja.",
      "Zmanjšanje možnosti nastanka impulza.",
      "Povečanje dopamina.",
    ],
    answer: 2,
    explanation: "Inhibitorni učinek zavira delovanje nevrona.",
  },

  {
    id: 363,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri nevrotransmiter je povezan z učenjem in spominom?",
    options: ["Serotonin.", "Dopamin.", "Acetilholin.", "Endorfini."],
    answer: 2,
    explanation: "Acetilholin sodeluje pri učenju, spominu in gibanju mišic.",
  },

  {
    id: 364,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj je glavna vloga endorfinov?",
    options: [
      "Povečanje budnosti.",
      "Izboljšanje spomina.",
      "Zmanjševanje bolečine.",
      "Uravnavanje spanja.",
    ],
    answer: 2,
    explanation: "Endorfini delujejo kot naravni analgetiki.",
  },

  {
    id: 365,
    category: "zivcni",
    difficulty: "hard",
    question: "S čim je najbolj povezan dopamin?",
    options: ["Spanjem.", "Nagrajevanjem in motivacijo.", "Prebavo.", "Vidom."],
    answer: 1,
    explanation: "Dopamin sodeluje v sistemu nagrajevanja.",
  },

  {
    id: 366,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri nevrotransmiter vpliva na razpoloženje in spanje?",
    options: ["Serotonin.", "Acetilholin.", "Dopamin.", "Endorfini."],
    answer: 0,
    explanation: "Serotonin vpliva na čustveno stabilnost in spanje.",
  },

  {
    id: 367,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj pomeni zavest?",
    options: [
      "Sanje med spanjem.",
      "Zavedanje sebe, okolja in misli.",
      "Sposobnost učenja.",
      "Refleksno vedenje.",
    ],
    answer: 1,
    explanation: "Zavest pomeni doživljanje sebe in okolja.",
  },

  {
    id: 368,
    category: "zivcni",
    difficulty: "medium",
    question: "Katero stanje je primer spremenjenega stanja zavesti?",
    options: ["Budnost.", "Meditacija.", "Refleks.", "Učenje."],
    answer: 1,
    explanation: "Meditacija spada med spremenjena stanja zavesti.",
  },

  {
    id: 369,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj so psihoaktivne snovi?",
    options: [
      "Snovi za krepitev mišic.",
      "Snovi, ki spreminjajo delovanje živčnega sistema in zavesti.",
      "Vitamini.",
      "Hormoni.",
    ],
    answer: 1,
    explanation:
      "Psihoaktivne snovi vplivajo na zavest in delovanje živčnega sistema.",
  },

  {
    id: 370,
    category: "zivcni",
    difficulty: "hard",
    question:
      "Katera skupina psihoaktivnih snovi upočasnjuje delovanje živčnega sistema?",
    options: ["Stimulansi.", "Halucinogeni.", "Depresanti.", "Amfetamini."],
    answer: 2,
    explanation: "Depresanti zmanjšujejo aktivnost živčnega sistema.",
  },

  {
    id: 371,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri primer spada med depresante?",
    options: ["Kokain.", "LSD.", "Alkohol.", "Kofein."],
    answer: 2,
    explanation: "Alkohol je najpogosteje uporabljen depresant.",
  },

  {
    id: 372,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri znak lahko kaže na odvisnost od alkohola?",
    options: [
      "Pitje le ob praznikih.",
      "Jutranje pitje.",
      "Pitje vode.",
      "Redna telesna vadba.",
    ],
    answer: 1,
    explanation: "Jutranje pitje je eden od opozorilnih znakov odvisnosti.",
  },

  {
    id: 373,
    category: "zivcni",
    difficulty: "medium",
    question: "Kaj je značilno za stimulanse?",
    options: [
      "Upočasnijo odzive.",
      "Povečajo budnost in energijo.",
      "Zmanjšajo pozornost.",
      "Povzročijo zaspanost.",
    ],
    answer: 1,
    explanation: "Stimulansi povečajo aktivnost živčnega sistema.",
  },

  {
    id: 374,
    category: "zivcni",
    difficulty: "hard",
    question: "Kateri stimulans uporabljamo najpogosteje?",
    options: ["Kokain.", "Amfetamine.", "Kofein.", "Nikotin."],
    answer: 2,
    explanation: "Kofein je najpogosteje uporabljan stimulans.",
  },

  {
    id: 375,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera nevarnost je povezana z amfetamini?",
    options: ["Hipnoza.", "Psihoza.", "Izguba sluha.", "Paraliza."],
    answer: 1,
    explanation: "Dolgotrajna uporaba lahko povzroči psihozo.",
  },

  {
    id: 376,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj so halucinacije?",
    options: [
      "Napačne interpretacije dražljajev.",
      "Zaznave brez zunanjega dražljaja.",
      "Vrsta spomina.",
      "Oblika pozornosti.",
    ],
    answer: 1,
    explanation: "Pri halucinacijah zunanji dražljaj ni prisoten.",
  },

  {
    id: 377,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera snov močno spremeni zaznavanje?",
    options: ["Nikotin.", "LSD.", "Alkohol.", "Kofein."],
    answer: 1,
    explanation: "LSD je eden najbolj znanih halucinogenov.",
  },

  {
    id: 378,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj lahko povzroči PCP?",
    options: [
      "Izboljšan spomin.",
      "Paranojo in psihotične simptome.",
      "Boljšo koncentracijo.",
      "Zmanjšano budnost.",
    ],
    answer: 1,
    explanation: "PCP lahko povzroči resne psihične težave.",
  },

  {
    id: 379,
    category: "zivcni",
    difficulty: "hard",
    question: "MDMA ima lastnosti:",
    options: [
      "Depresanta in opiata.",
      "Stimulansa in halucinogena.",
      "Le stimulansa.",
      "Le halucinogena.",
    ],
    answer: 1,
    explanation: "Ekstazi združuje učinke obeh skupin.",
  },

  {
    id: 380,
    category: "zivcni",
    difficulty: "hard",
    question: "Kaj je značilno za narkotike (opiate)?",
    options: [
      "Povečajo budnost.",
      "Zmanjšajo občutek bolečine.",
      "Izboljšajo spomin.",
      "Povečajo koncentracijo.",
    ],
    answer: 1,
    explanation: "Opiati zmanjšujejo bolečino in povzročajo sproščenost.",
  },

  {
    id: 381,
    category: "zivcni",
    difficulty: "hard",
    question: "Katera nevarnost je posebej značilna za opiate?",
    options: [
      "Izguba vida.",
      "Močna odvisnost in predoziranje.",
      "Izguba sluha.",
      "Nespečnost.",
    ],
    answer: 1,
    explanation: "Opiati imajo veliko tveganje za odvisnost.",
  },

  {
    id: 382,
    category: "zivcni",
    difficulty: "medium",
    question: "Kateri učinek je pogosto povezan z marihuano?",
    options: [
      "Povečana agresivnost.",
      "Evforija in sproščenost.",
      "Hitra budnost.",
      "Popolna odsotnost čustev.",
    ],
    answer: 1,
    explanation: "Marihuana pogosto povzroči sproščenost in evforijo.",
  },

  {
    id: 383,
    category: "zivcni",
    difficulty: "hard",
    question: "Na katero področje lahko marihuana negativno vpliva?",
    options: [
      "Usmerjanje pozornosti.",
      "Barvo oči.",
      "Telesno višino.",
      "Krvno skupino.",
    ],
    answer: 0,
    explanation: "Lahko poslabša pozornost, presojo in reševanje problemov.",
  },

  {
    id: 384,
    category: "zavest",
    difficulty: "medium",
    question: "Zakaj je zavest pomembna za vsakodnevno delovanje?",
    options: [
      "Omogoča proizvodnjo hormonov.",
      "Omogoča načrtovanje, odločanje in razumevanje okolja.",
      "Uravnava telesno temperaturo.",
      "Nadzira reflekse.",
    ],
    answer: 1,
    explanation:
      "Zavest nam omogoča načrtovanje, sprejemanje odločitev in razumevanje okolja.",
  },

  {
    id: 385,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je značilno za zavest budnega stanja?",
    options: [
      "Povečana sugestibilnost.",
      "Močno zavrte mišice.",
      "Organizirano mišljenje in zavedanje okolice.",
      "Pojavljanje sanj.",
    ],
    answer: 2,
    explanation:
      "Pri budnem stanju je pozornost usmerjena v okolje, mišljenje pa je organizirano.",
  },

  {
    id: 386,
    category: "zavest",
    difficulty: "medium",
    question: "Kaj najbolje opisuje spanje?",
    options: [
      "Popolno prenehanje delovanja možganov.",
      "Naravno, periodično stanje zmanjšane zavesti.",
      "Oblika hipnoze.",
      "Stanje brez sanj.",
    ],
    answer: 1,
    explanation:
      "Med spanjem možgani še vedno delujejo in opravljajo pomembne funkcije.",
  },

  {
    id: 387,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je cirkadijski ritem?",
    options: [
      "90-minutni cikel REM spanja.",
      "Približno 24-urni biološki cikel.",
      "Obdobje globokega spanja.",
      "Vrsta EEG valov.",
    ],
    answer: 1,
    explanation:
      "Cirkadijski ritem uravnava spanje, budnost in druge telesne procese.",
  },

  {
    id: 388,
    category: "zavest",
    difficulty: "hard",
    question: "Katera funkcija NI povezana s cirkadijskim ritmom?",
    options: [
      "Uravnavanje budnosti.",
      "Uravnavanje telesne temperature.",
      "Izločanje hormonov.",
      "Prenos impulzov po nevronih.",
    ],
    answer: 3,
    explanation: "Prenos impulzov ni funkcija cirkadijskega ritma.",
  },

  {
    id: 389,
    category: "zavest",
    difficulty: "medium",
    question: "Katera telesna funkcija spanja je posebej pomembna?",
    options: [
      "Povečanje agresivnosti.",
      "Regeneracija organizma.",
      "Zmanjšanje imunosti.",
      "Upočasnitev metabolizma.",
    ],
    answer: 1,
    explanation: "Spanje omogoča obnovo tkiv in krepitev imunskega sistema.",
  },

  {
    id: 390,
    category: "zavest",
    difficulty: "medium",
    question: "Kako spanje vpliva na učenje?",
    options: [
      "Povzroča pozabljanje.",
      "Nima vpliva na spomin.",
      "Prispeva k utrjevanju spomina.",
      "Onemogoča organizacijo znanja.",
    ],
    answer: 2,
    explanation:
      "Med spanjem se utrjujejo spomini in organizira naučeno gradivo.",
  },

  {
    id: 391,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj pomeni deprivacija spanja?",
    options: [
      "Prekomerno spanje.",
      "Pomanjkanje ali odvzem spanja.",
      "Spanje v REM fazi.",
      "Pojav nočnih mor.",
    ],
    answer: 1,
    explanation: "Deprivacija pomeni nezadostno količino spanja.",
  },

  {
    id: 392,
    category: "zavest",
    difficulty: "hard",
    question: "Katera psihološka posledica je značilna za deprivacijo spanja?",
    options: [
      "Izboljšan spomin.",
      "Boljša koncentracija.",
      "Slabše odločanje.",
      "Povečana ustvarjalnost.",
    ],
    answer: 2,
    explanation: "Pomanjkanje spanja vpliva na koncentracijo in presojo.",
  },

  {
    id: 393,
    category: "zavest",
    difficulty: "medium",
    question: "Kateri dve glavni vrsti spanja ločimo?",
    options: [
      "REM in alfa.",
      "NREM in REM.",
      "Theta in delta.",
      "Globoko in površinsko.",
    ],
    answer: 1,
    explanation: "Spanje delimo na NREM in REM obdobja.",
  },

  {
    id: 394,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je značilno za NREM spanje?",
    options: [
      "Hitro gibanje oči.",
      "Močna mišična paraliza.",
      "Globlji počitek in obnova telesa.",
      "Največ sanj.",
    ],
    answer: 2,
    explanation: "NREM spanje je pomembno za telesno regeneracijo.",
  },

  {
    id: 395,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je značilno za REM spanje?",
    options: [
      "Možganska aktivnost se zmanjša.",
      "Mišice so popolnoma aktivne.",
      "Pojavi se hitro gibanje oči in večina sanj.",
      "Ni EEG aktivnosti.",
    ],
    answer: 2,
    explanation: "REM faza je povezana z intenzivnim sanjanjem.",
  },

  {
    id: 396,
    category: "zavest",
    difficulty: "hard",
    question: "Kateri EEG valovi so značilni za globoko spanje?",
    options: ["Alfa.", "Beta.", "Theta.", "Delta."],
    answer: 3,
    explanation: "Delta valovi so značilni za najgloblje faze spanja.",
  },

  {
    id: 397,
    category: "zavest",
    difficulty: "hard",
    question: "Kateri EEG valovi prevladujejo v 1. in 2. fazi spanja?",
    options: ["Beta.", "Alfa.", "Theta.", "Delta."],
    answer: 2,
    explanation: "Rahlo spanje spremljajo theta valovi.",
  },

  {
    id: 398,
    category: "zavest",
    difficulty: "medium",
    question: "Kaj so sanje?",
    options: [
      "Električni impulzi v možganih.",
      "Zaporedje podob, misli in občutkov med spanjem.",
      "Vrsta hipnoze.",
      "Motnja spanja.",
    ],
    answer: 1,
    explanation: "Sanje vključujejo različne miselne in čustvene vsebine.",
  },

  {
    id: 399,
    category: "zavest",
    difficulty: "hard",
    question: "V kateri fazi spanja se pojavi največ sanj?",
    options: ["1. faza NREM.", "2. faza NREM.", "Globoko NREM.", "REM."],
    answer: 3,
    explanation: "Večina sanj se pojavlja v REM spanju.",
  },

  {
    id: 400,
    category: "zavest",
    difficulty: "medium",
    question: "Kaj je nespečnost (insomnija)?",
    options: [
      "Nenadno uspavanje.",
      "Težave z uspavanjem ali vzdrževanjem spanja.",
      "Prekomerno sanjanje.",
      "Motnja dihanja.",
    ],
    answer: 1,
    explanation: "Insomnija pomeni motnje v kakovosti ali količini spanja.",
  },

  {
    id: 401,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je značilno za narkolepsijo?",
    options: [
      "Pogoste nočne more.",
      "Težave z uspavanjem.",
      "Nenadni napadi spanja.",
      "Prekomerna aktivnost ponoči.",
    ],
    answer: 2,
    explanation: "Pri narkolepsiji posameznik težko nadzoruje budnost.",
  },

  {
    id: 402,
    category: "zavest",
    difficulty: "medium",
    question: "Kaj najbolje opisuje hipnozo?",
    options: [
      "Vrsto globokega spanja.",
      "Socialno interakcijo s povečano odzivnostjo na sugestije.",
      "Obliko meditacije.",
      "Izgubo zavesti.",
    ],
    answer: 1,
    explanation: "Hipnoza temelji na sugestibilnosti in usmerjeni pozornosti.",
  },

  {
    id: 403,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj so posthipnotične sugestije?",
    options: [
      "Sanje med hipnozo.",
      "Navodila, izvedena po končani hipnozi.",
      "Spremembe EEG valov.",
      "Vrsta meditacije.",
    ],
    answer: 1,
    explanation: "Gre za vedenje, ki ga posameznik izvede po hipnozi.",
  },

  {
    id: 404,
    category: "zavest",
    difficulty: "hard",
    question: "Katera trditev o hipnozi je pravilna?",
    options: [
      "Hipnoza deluje proti volji posameznika.",
      "Hipnoza lahko ustvari nove talente.",
      "Hipnoza ne povzroči vedenja v nasprotju z vrednotami posameznika.",
      "Hipnoza človeka fizično okrepi.",
    ],
    answer: 2,
    explanation: "Hipnoza ima omejitve in ne premaga posameznikovih vrednot.",
  },

  {
    id: 405,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj pomeni hipermnezija?",
    options: [
      "Popolna izguba spomina.",
      "Izboljšan priklic nekaterih spominov.",
      "Pretirano sanjanje.",
      "Strah pred spanjem.",
    ],
    answer: 1,
    explanation: "Hipermnezija pomeni okrepljen priklic določenih spominov.",
  },

  {
    id: 406,
    category: "zavest",
    difficulty: "medium",
    question: "Kaj je meditacija?",
    options: [
      "Oblika hipnoze.",
      "Skupek tehnik za osredotočeno pozornost in umiritev.",
      "Vrsta REM spanja.",
      "Motnja zavesti.",
    ],
    answer: 1,
    explanation: "Meditacija poveča zavedanje in umirjenost.",
  },

  {
    id: 407,
    category: "zavest",
    difficulty: "hard",
    question: "Kaj je značilno za transcendentalno meditacijo?",
    options: [
      "Hitro gibanje oči.",
      "Ponavljanje mantre.",
      "Globoko NREM spanje.",
      "Hipnotične sugestije.",
    ],
    answer: 1,
    explanation: "Transcendentalna meditacija temelji na ponavljanju mantre.",
  },

  {
    id: 408,
    category: "custva",
    difficulty: "medium",
    question: "Kaj najbolje opisuje čustvo?",
    options: [
      "Izključno telesno reakcijo.",
      "Psihološko in fiziološko reakcijo na pomembne dogodke.",
      "Le trenutno razpoloženje.",
      "Vrsto motivacije.",
    ],
    answer: 1,
    explanation:
      "Čustva vključujejo psihološke in telesne odzive na pomembne situacije.",
  },

  {
    id: 409,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni adaptivna funkcija čustev?",
    options: [
      "Da čustva vedno povzročajo težave.",
      "Da pomagajo preživeti in se prilagoditi okolju.",
      "Da so čustva izključno prirojena.",
      "Da jih ni mogoče nadzorovati.",
    ],
    answer: 1,
    explanation: "Čustva imajo pomembno prilagoditveno vlogo.",
  },

  {
    id: 410,
    category: "custva",
    difficulty: "medium",
    question: "Katera sestavina čustev vključuje spremembe v telesu?",
    options: ["Vedenjska.", "Subjektivna.", "Fiziološka.", "Kognitivna."],
    answer: 2,
    explanation: "Fiziološka sestavina vključuje telesne odzive.",
  },

  {
    id: 411,
    category: "custva",
    difficulty: "medium",
    question: "Katera sestavina čustev vključuje jok, smeh in kričanje?",
    options: ["Fiziološka.", "Subjektivna.", "Vedenjska.", "Reflektivna."],
    answer: 2,
    explanation: "Vedenjski del predstavlja izražanje čustev.",
  },

  {
    id: 412,
    category: "custva",
    difficulty: "medium",
    question: "Kaj pomeni subjektivna izkušnja čustev?",
    options: [
      "Notranje doživljanje čustev.",
      "Spremembe srčnega utripa.",
      "Obrazne izraze.",
      "Telesne gibe.",
    ],
    answer: 0,
    explanation: "Subjektivna sestavina pomeni, kako čustvo doživljamo.",
  },

  {
    id: 413,
    category: "custva",
    difficulty: "hard",
    question: "Kateri živčni sistem se aktivira pri močnih čustvih?",
    options: ["Somatski.", "Parasimpatični.", "Simpatični.", "Centralni."],
    answer: 2,
    explanation: "Simpatični živčni sistem pripravi telo na odziv.",
  },

  {
    id: 414,
    category: "custva",
    difficulty: "hard",
    question: "Kaj je reakcija boj ali beg?",
    options: [
      "Vrsta meditacije.",
      "Priprava telesa na soočenje ali umik pred nevarnostjo.",
      "Oblika spanja.",
      "Način učenja.",
    ],
    answer: 1,
    explanation: "Gre za prilagoditveni odziv na nevarnost.",
  },

  {
    id: 415,
    category: "custva",
    difficulty: "hard",
    question: "Kaj je glavna vloga amigdale?",
    options: [
      "Uravnavanje prebave.",
      "Prepoznavanje nevarnosti in čustveni odzivi.",
      "Shranjevanje proceduralnega spomina.",
      "Nadzor govora.",
    ],
    answer: 1,
    explanation: "Amigdala sodeluje pri strahu in čustvenem odzivanju.",
  },

  {
    id: 416,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni, da amigdala lahko obide korteks?",
    options: [
      "Da ustavi delovanje možganov.",
      "Da se čustveni odziv pojavi pred zavestno analizo.",
      "Da izboljša spomin.",
      "Da povzroči spanje.",
    ],
    answer: 1,
    explanation: "Najprej reagiramo, šele nato situacijo zavestno ocenimo.",
  },

  {
    id: 417,
    category: "custva",
    difficulty: "medium",
    question: "Kaj uravnava avtonomni živčni sistem?",
    options: [
      "Le gibanje mišic.",
      "Srčni utrip, dihanje in potenje.",
      "Učenje matematike.",
      "Sanje.",
    ],
    answer: 1,
    explanation: "Avtonomni živčni sistem deluje neodvisno od naše volje.",
  },

  {
    id: 418,
    category: "custva",
    difficulty: "medium",
    question: "Kateri način izražanja čustev je najpomembnejši?",
    options: ["Pisanje.", "Obrazni izrazi.", "Hoja.", "Dihanje."],
    answer: 1,
    explanation: "Obrazni izrazi pomembno prispevajo k sporazumevanju.",
  },

  {
    id: 419,
    category: "custva",
    difficulty: "hard",
    question: "Kdo je raziskoval univerzalnost obraznih izrazov?",
    options: [
      "Sigmund Freud.",
      "Albert Bandura.",
      "Paul Ekman.",
      "Carl Rogers.",
    ],
    answer: 2,
    explanation: "Ekman je dokazoval univerzalnost osnovnih čustev.",
  },

  {
    id: 420,
    category: "custva",
    difficulty: "hard",
    question: "Katero čustvo NI med Ekmanovimi osnovnimi čustvi?",
    options: ["Gnus.", "Presenečenje.", "Ljubosumje.", "Strah."],
    answer: 2,
    explanation: "Ljubosumje ni med šestimi osnovnimi čustvi.",
  },

  {
    id: 421,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni univerzalnost čustev?",
    options: [
      "Da vsi ljudje doživljajo in prepoznavajo osnovna čustva.",
      "Da vsi izražajo čustva enako.",
      "Da čustva niso prirojena.",
      "Da kulture nimajo vpliva.",
    ],
    answer: 0,
    explanation: "Osnovne izraze čustev prepoznavajo ljudje po vsem svetu.",
  },

  {
    id: 422,
    category: "custva",
    difficulty: "medium",
    question: "Kaj vpliva na način izražanja čustev?",
    options: [
      "Le genetika.",
      "Le starost.",
      "Kultura in družbena pričakovanja.",
      "Samo inteligentnost.",
    ],
    answer: 2,
    explanation: "Kultura vpliva predvsem na izražanje čustev.",
  },

  {
    id: 423,
    category: "custva",
    difficulty: "medium",
    question: "Kaj pomeni kognitivni element čustvovanja?",
    options: [
      "Telesni odziv.",
      "Način, kako si dogodek razlagamo.",
      "Izraz na obrazu.",
      "Možganske valove.",
    ],
    answer: 1,
    explanation: "Interpretacija dogodka vpliva na čustveni odziv.",
  },

  {
    id: 424,
    category: "custva",
    difficulty: "hard",
    question: "Kaj je avtomatsko ocenjevanje?",
    options: [
      "Počasna analiza situacije.",
      "Hitro in nezavedno vrednotenje dogodkov.",
      "Vrsta meditacije.",
      "Spomin na dogodke.",
    ],
    answer: 1,
    explanation: "Avtomatsko ocenjevanje poteka brez zavestnega razmišljanja.",
  },

  {
    id: 425,
    category: "custva",
    difficulty: "hard",
    question: "Kaj je reflektivno ocenjevanje?",
    options: [
      "Hitra reakcija brez razmisleka.",
      "Počasnejše in zavestno tehtanje situacije.",
      "Vrsta spanja.",
      "Samodejno vrednotenje.",
    ],
    answer: 1,
    explanation: "Reflektivno ocenjevanje vključuje premišljen odziv.",
  },

  {
    id: 426,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni pogojevanje strahu?",
    options: [
      "Da se strahu ne moremo naučiti.",
      "Da se strah lahko razvije preko izkušenj.",
      "Da je strah vedno prirojen.",
      "Da je strah vedno racionalen.",
    ],
    answer: 1,
    explanation: "Strah se lahko naučimo s povezovanjem izkušenj.",
  },

  {
    id: 427,
    category: "custva",
    difficulty: "medium",
    question: "Kako močna čustva pogosto vplivajo na spomin?",
    options: [
      "Poslabšajo vse oblike spomina.",
      "Izboljšajo zapomnitev pomembnih dogodkov.",
      "Izbrišejo stare spomine.",
      "Nimajo vpliva.",
    ],
    answer: 1,
    explanation: "Čustveno pomembni dogodki ostanejo bolj v spominu.",
  },

  {
    id: 428,
    category: "custva",
    difficulty: "medium",
    question: "Kaj je empatija?",
    options: [
      "Sposobnost vplivanja na druge.",
      "Sposobnost razumeti čustva drugih.",
      "Pomanjkanje čustev.",
      "Nadzor vedenja.",
    ],
    answer: 1,
    explanation: "Empatija pomeni vživljanje v doživljanje drugih.",
  },

  {
    id: 429,
    category: "custva",
    difficulty: "medium",
    question: "Kako čustva vplivajo na učenje?",
    options: [
      "Nimajo vpliva.",
      "Vplivajo na pozornost, motivacijo in spomin.",
      "Vplivajo le na spomin.",
      "Vedno izboljšajo učenje.",
    ],
    answer: 1,
    explanation: "Čustva pomembno vplivajo na učni proces.",
  },

  {
    id: 430,
    category: "custva",
    difficulty: "hard",
    question: "Kaj pomeni potrditvena pristranskost pri čustvovanju?",
    options: [
      "Iščemo informacije, ki potrjujejo naša prepričanja.",
      "Vedno spreminjamo mnenje.",
      "Odločamo se naključno.",
      "Pozabljamo neprijetne dogodke.",
    ],
    answer: 0,
    explanation: "Ljudje pogosto iščemo potrditve svojih pogledov.",
  },

  {
    id: 431,
    category: "custva",
    difficulty: "hard",
    question: "Kako lahko psihoterapija pomaga pri čustvih?",
    options: [
      "Odstrani vsa čustva.",
      "Pomaga prepoznati napačne interpretacije in spremeniti odzive.",
      "Izboljša inteligentnost.",
      "Prepreči nastanek stresa.",
    ],
    answer: 1,
    explanation:
      "Psihoterapija pomaga pri boljšem razumevanju sebe in svojih odzivov.",
  },

  {
    id: 432,
    category: "lazi",
    difficulty: "medium",
    question: "Kaj najbolje opisuje laž?",
    options: [
      "Vsaka napačna informacija.",
      "Namerno podajanje napačne ali zavajajoče informacije.",
      "Vsako prikrivanje čustev.",
      "Vsak dvoumen odgovor.",
    ],
    answer: 1,
    explanation:
      "Laž vključuje namen, da druga oseba verjame nekaj, kar ni res.",
  },

  {
    id: 433,
    category: "lazi",
    difficulty: "hard",
    question: "Katera trditev o zavajanju je pravilna?",
    options: [
      "Vsako zavajanje je laganje.",
      "Zavajanje je mogoče tudi z molkom ali izpuščanjem informacij.",
      "Zavajanje je vedno nezavedno.",
      "Zavajanje pomeni le neposredno laganje.",
    ],
    answer: 1,
    explanation: "Nekdo lahko zavaja tudi brez izrečene laži.",
  },

  {
    id: 434,
    category: "lazi",
    difficulty: "medium",
    question: "Kako uspešni so ljudje pri prepoznavanju laži?",
    options: [
      "Skoraj vedno pravilno prepoznajo laž.",
      "Veliko bolje od naključja.",
      "Njihova uspešnost ni bistveno boljša od naključja.",
      "Uspešni so le psihologi.",
    ],
    answer: 2,
    explanation: "Raziskave kažejo, da večina ljudi ni posebej uspešna.",
  },

  {
    id: 435,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj so pokazale raziskave o policistih in prepoznavanju laži?",
    options: [
      "So skoraj nezmotljivi.",
      "Veliko uspešnejši so od drugih ljudi.",
      "Niso bistveno uspešnejši od začetnikov.",
      "Nikoli ne naredijo napake.",
    ],
    answer: 2,
    explanation: "Izkušeni policisti niso bistveno boljši pri odkrivanju laži.",
  },

  {
    id: 436,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj pomeni ugotovitev 'samozaupanje ≠ dejanska uspešnost'?",
    options: [
      "Samozavestni ljudje vedno lažejo.",
      "Prepričanje v svojo uspešnost ne pomeni, da smo res uspešni.",
      "Samozaupanje izboljša prepoznavanje laži.",
      "Policisti niso samozavestni.",
    ],
    answer: 1,
    explanation: "Ljudje pogosto precenjujejo svoje sposobnosti.",
  },

  {
    id: 437,
    category: "lazi",
    difficulty: "hard",
    question: "Zakaj je prepoznavanje laži težavno?",
    options: [
      "Ker lažnivci ne kažejo čustev.",
      "Ker nihče ne zna lagati.",
      "Ker ni mogoče nadzorovati vseh znakov vedenja.",
      "Ker poligraf vedno odkrije laž.",
    ],
    answer: 2,
    explanation: "Lažnivec lahko nadzoruje le del svojega vedenja.",
  },

  {
    id: 438,
    category: "lazi",
    difficulty: "hard",
    question: "Zakaj nervoza ni zanesljiv znak laganja?",
    options: [
      "Ker lažnivci niso nervozni.",
      "Ker so lahko nervozni tudi nedolžni ljudje.",
      "Ker nervoza kaže na inteligentnost.",
      "Ker nervoza pomeni agresivnost.",
    ],
    answer: 1,
    explanation: "Stres in strah lahko doživljajo tudi pošteni posamezniki.",
  },

  {
    id: 439,
    category: "lazi",
    difficulty: "medium",
    question: "Kaj moramo vedno upoštevati pri ocenjevanju laganja?",
    options: [
      "Le izraz obraza.",
      "Le ton glasu.",
      "Kontekst in okoliščine.",
      "Le telesne gibe.",
    ],
    answer: 2,
    explanation: "Pomembni so situacija, osebnost in okoliščine.",
  },

  {
    id: 440,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj pomeni izraz 'spillage of inappropriate emotion'?",
    options: [
      "Pretirano izražanje veselja.",
      "Uhajanje prikritih čustev.",
      "Nezmožnost izražanja čustev.",
      "Namerno pretvarjanje.",
    ],
    answer: 1,
    explanation: "Čustva se lahko nehote pokažejo kljub poskusom prikrivanja.",
  },

  {
    id: 441,
    category: "lazi",
    difficulty: "medium",
    question: "Kdo je raziskoval uhajanje čustev in laganje?",
    options: [
      "Sigmund Freud.",
      "Albert Bandura.",
      "Paul Ekman.",
      "Carl Rogers.",
    ],
    answer: 2,
    explanation: "Ekman je proučeval obrazne izraze in mikroizraze.",
  },

  {
    id: 442,
    category: "lazi",
    difficulty: "hard",
    question: "Kateri govorni znak je lahko povezan z laganjem?",
    options: [
      "Popolnoma tekoč govor.",
      "Pavze in zatikanje.",
      "Bogat besedni zaklad.",
      "Glasno smejanje.",
    ],
    answer: 1,
    explanation: "Pri laganju se lahko pojavijo govorne napake.",
  },

  {
    id: 443,
    category: "lazi",
    difficulty: "hard",
    question: "Katera sprememba glasu je lahko pokazatelj laganja?",
    options: [
      "Globlji glas.",
      "Višji glas.",
      "Tišji govor.",
      "Počasnejše dihanje.",
    ],
    answer: 1,
    explanation: "Stres lahko povzroči višji ton glasu.",
  },

  {
    id: 444,
    category: "lazi",
    difficulty: "hard",
    question: "Kateri fiziološki znak se lahko pojavi pri laganju?",
    options: [
      "Zmanjšano potenje.",
      "Požiranje sline.",
      "Izguba zavesti.",
      "Upočasnjen srčni utrip.",
    ],
    answer: 1,
    explanation: "Požiranje sline je eden od možnih pokazateljev.",
  },

  {
    id: 445,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj velja za najpomembnejši možni pokazatelj laganja?",
    options: ["Drža telesa.", "Obrazni izrazi.", "Višina glasu.", "Gibi rok."],
    answer: 1,
    explanation: "Kratkotrajni obrazni izrazi lahko razkrijejo prava čustva.",
  },

  {
    id: 446,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj velja za posamezne znake laganja?",
    options: [
      "Vsak znak dokazuje laž.",
      "Znaki so le možni pokazatelji.",
      "Obrazni izrazi nikoli ne pomagajo.",
      "Potenje pomeni laganje.",
    ],
    answer: 1,
    explanation: "Noben posamezen znak ni dokaz laganja.",
  },

  {
    id: 447,
    category: "lazi",
    difficulty: "medium",
    question: "Kaj je poligraf?",
    options: [
      "Naprava za odkrivanje resnice.",
      "Naprava za merjenje fizioloških odzivov.",
      "Vrsta psihološkega testa.",
      "Računalniški program.",
    ],
    answer: 1,
    explanation: "Poligraf meri telesne odzive, ne laži.",
  },

  {
    id: 448,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj poligraf v resnici meri?",
    options: ["Resnico.", "Laž.", "Fiziološke spremembe.", "Spomin."],
    answer: 2,
    explanation: "Poligraf zazna telesne odzive na stres ali vzburjenje.",
  },

  {
    id: 449,
    category: "lazi",
    difficulty: "hard",
    question: "Kateri fiziološki odziv meri poligraf?",
    options: ["Barvo oči.", "Krvni tlak.", "Velikost zenic.", "Reflekse."],
    answer: 1,
    explanation: "Krvni tlak je ena od merjenih spremenljivk.",
  },

  {
    id: 450,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj še meri poligraf?",
    options: [
      "IQ posameznika.",
      "Hitrost hoje.",
      "Dihanje in potenje dlani.",
      "Hitrost govora.",
    ],
    answer: 2,
    explanation: "Meri hitrost dihanja, globino dihanja in potenje.",
  },

  {
    id: 451,
    category: "lazi",
    difficulty: "medium",
    question: "Kaj vključuje predtestni intervju pri poligrafskem testiranju?",
    options: [
      "Le merjenje pulza.",
      "Razlago postopka in pregled vprašanj.",
      "Izrek sodbe.",
      "Hipnozo.",
    ],
    answer: 1,
    explanation: "Predtestni intervju pripravi osebo na test.",
  },

  {
    id: 452,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj sledi po izvedenem poligrafskem testu?",
    options: [
      "Takojšnja obsodba.",
      "Posttestna analiza rezultatov.",
      "Hipnoza.",
      "Prekinitev preiskave.",
    ],
    answer: 1,
    explanation: "Po testu sledi analiza in dodaten pogovor.",
  },

  {
    id: 453,
    category: "lazi",
    difficulty: "medium",
    question: "Kakšen pozitiven učinek ima lahko poligraf?",
    options: [
      "Vedno odkrije laž.",
      "Odvrača storilce in spodbuja priznanja.",
      "Nadomesti sodišče.",
      "Odpravi stres.",
    ],
    answer: 1,
    explanation: "Nekateri priznajo dejanje že zaradi pričakovanja testa.",
  },

  {
    id: 454,
    category: "lazi",
    difficulty: "hard",
    question: "Kaj je negativna stran uporabe poligrafa?",
    options: [
      "Povzroča izgubo spomina.",
      "Lahko ustvari lažen občutek varnosti.",
      "Poveča inteligentnost.",
      "Zmanjša empatijo.",
    ],
    answer: 1,
    explanation: "Ljudje lahko preveč zaupajo rezultatom poligrafa.",
  },

  {
    id: 455,
    category: "lazi",
    difficulty: "hard",
    question: "Kakšen status ima poligraf v Sloveniji?",
    options: [
      "Je dokaz na sodišču.",
      "Uporablja se le v psihologiji.",
      "Ni dokaz na sodišču.",
      "Je obvezen pri vseh preiskavah.",
    ],
    answer: 2,
    explanation: "V Sloveniji poligraf nima dokazne vrednosti.",
  },

  {
    id: 456,
    category: "lazi",
    difficulty: "medium",
    question: "Za kaj se poligraf v Sloveniji uporablja?",
    options: [
      "Za izrek kazni.",
      "Kot usmerjevalno orodje pri preiskovanju.",
      "Za psihoterapijo.",
      "Za ocenjevanje inteligentnosti.",
    ],
    answer: 1,
    explanation:
      "Poligraf pomaga usmerjati preiskavo, ne pa dokazovati krivde.",
  },

  {
    id: 457,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj proučuje socialna psihologija?",
    options: [
      "Delovanje živčnega sistema.",
      "Kako prisotnost drugih vpliva na naše mišljenje, čustvovanje in vedenje.",
      "Izključno osebnostne lastnosti.",
      "Biološke osnove čustev.",
    ],
    answer: 1,
    explanation:
      "Socialna psihologija preučuje vpliv drugih ljudi na posameznika.",
  },

  {
    id: 458,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni socialni vpliv?",
    options: [
      "Vpliv hormonov na vedenje.",
      "Vpliv drugih ljudi na naše vedenje in prepričanja.",
      "Pritisk vrstnikov v adolescenci.",
      "Učinek množičnih medijev.",
    ],
    answer: 1,
    explanation:
      "Socialni vpliv zajema različne načine vplivanja drugih ljudi.",
  },

  {
    id: 459,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni konformizem?",
    options: [
      "Sledenje ukazom avtoritete.",
      "Prilagajanje vedenja ali mnenja skupini.",
      "Nudenje pomoči drugim.",
      "Oblikovanje stereotipov.",
    ],
    answer: 1,
    explanation: "Konformizem pomeni usklajevanje s skupino.",
  },

  {
    id: 460,
    category: "socialna",
    difficulty: "hard",
    question: "Kdo je izvedel znameniti eksperiment o konformizmu?",
    options: [
      "Stanley Milgram.",
      "Paul Ekman.",
      "Solomon Asch.",
      "Leon Festinger.",
    ],
    answer: 2,
    explanation: "Asch je proučeval vpliv skupine na posameznika.",
  },

  {
    id: 461,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj je pokazal Aschev eksperiment?",
    options: [
      "Da ljudje nikoli ne sledijo večini.",
      "Da se ljudje pogosto prilagodijo skupini, čeprav vedo, da nima prav.",
      "Da avtoriteta vedno vpliva na vedenje.",
      "Da stereotipi nastanejo zaradi učenja.",
    ],
    answer: 1,
    explanation: "Veliko udeležencev je sledilo napačnim odgovorom skupine.",
  },

  {
    id: 462,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni normativni vpliv?",
    options: [
      "Sledimo drugim, ker mislimo, da imajo prav.",
      "Sledimo drugim, da bi bili sprejeti.",
      "Poslušamo avtoriteto.",
      "Pomagamo drugim brez koristi.",
    ],
    answer: 1,
    explanation: "Normativni vpliv temelji na želji po sprejetosti.",
  },

  {
    id: 463,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni informacijski vpliv?",
    options: [
      "Sledimo drugim, ker verjamemo, da imajo pravilne informacije.",
      "Prilagodimo se zaradi strahu pred kaznijo.",
      "Sledimo družbenim normam.",
      "Pomagamo drugim zaradi empatije.",
    ],
    answer: 0,
    explanation: "Informacijski vpliv je pogost v negotovih situacijah.",
  },

  {
    id: 464,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj so socialne norme?",
    options: [
      "Pravni predpisi.",
      "Nenapisana pravila vedenja v družbi.",
      "Osebnostne poteze.",
      "Kazni za neprimerno vedenje.",
    ],
    answer: 1,
    explanation: "Socialne norme usmerjajo naše vedenje.",
  },

  {
    id: 465,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni skupinsko mišljenje (groupthink)?",
    options: [
      "Razprava z veliko idejami.",
      "Težnja po soglasju, ki zmanjša kritično razmišljanje.",
      "Tekmovanje med skupinami.",
      "Povečana ustvarjalnost.",
    ],
    answer: 1,
    explanation:
      "Skupina lahko zaradi želje po enotnosti sprejema slabe odločitve.",
  },

  {
    id: 466,
    category: "socialna",
    difficulty: "hard",
    question: "Katera posledica je značilna za skupinsko mišljenje?",
    options: [
      "Boljše odločanje.",
      "Več ustvarjalnosti.",
      "Prezrta tveganja in slabe odločitve.",
      "Povečana empatija.",
    ],
    answer: 2,
    explanation: "Groupthink zmanjšuje kakovost odločitev.",
  },

  {
    id: 467,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni ubogljivost?",
    options: [
      "Prilagajanje večini.",
      "Sledenje ukazom avtoritete.",
      "Pomaganje drugim.",
      "Ustvarjanje stereotipov.",
    ],
    answer: 1,
    explanation: "Ubogljivost pomeni poslušanje avtoritete.",
  },

  {
    id: 468,
    category: "socialna",
    difficulty: "hard",
    question: "Kdo je proučeval ubogljivost avtoriteti?",
    options: [
      "Solomon Asch.",
      "Stanley Milgram.",
      "Leon Festinger.",
      "Paul Ekman.",
    ],
    answer: 1,
    explanation: "Milgram je raziskoval poslušnost avtoriteti.",
  },

  {
    id: 469,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj je pokazal Milgramov eksperiment?",
    options: [
      "Da ljudje nikoli ne škodujejo drugim.",
      "Da ljudje pogosto ubogajo avtoriteto tudi v škodo drugih.",
      "Da skupine vedno sprejemajo dobre odločitve.",
      "Da stereotipi zmanjšujejo predsodke.",
    ],
    answer: 1,
    explanation: "Presenetljivo veliko ljudi je sledilo navodilom do konca.",
  },

  {
    id: 470,
    category: "socialna",
    difficulty: "hard",
    question: "Kateri dejavnik poveča ubogljivost?",
    options: [
      "Prisotnost neubogljivih ljudi.",
      "Oddaljenost avtoritete.",
      "Ugled avtoritete.",
      "Pomanjkanje pravil.",
    ],
    answer: 2,
    explanation: "Ugledna avtoriteta poveča verjetnost uboganja.",
  },

  {
    id: 471,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj proučuje socialna kognicija?",
    options: [
      "Spomin.",
      "Kako razmišljamo o drugih ljudeh.",
      "Biološke osnove vedenja.",
      "Delovanje čustev.",
    ],
    answer: 1,
    explanation: "Socialna kognicija proučuje socialno mišljenje.",
  },

  {
    id: 472,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni drža (attitude)?",
    options: [
      "Trenutno razpoloženje.",
      "Relativno trajna pozitivna ali negativna naravnanost.",
      "Način hoje.",
      "Oblika stereotipa.",
    ],
    answer: 1,
    explanation: "Drže vplivajo na naše vedenje in odločitve.",
  },

  {
    id: 473,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni kognitivna disonanca?",
    options: [
      "Usklajenost med vedenjem in prepričanji.",
      "Neprijetno stanje zaradi neskladja med vedenjem in prepričanji.",
      "Nezmožnost odločanja.",
      "Prilagajanje skupini.",
    ],
    answer: 1,
    explanation: "Kognitivna disonanca povzroča psihološko napetost.",
  },

  {
    id: 474,
    category: "socialna",
    difficulty: "hard",
    question: "Kdo je razvil teorijo kognitivne disonance?",
    options: [
      "Stanley Milgram.",
      "Leon Festinger.",
      "Solomon Asch.",
      "Gordon Allport.",
    ],
    answer: 1,
    explanation: "Festinger je razložil neskladje med vedenjem in prepričanji.",
  },

  {
    id: 475,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni socialna kategorizacija?",
    options: [
      "Razvrščanje ljudi v skupine.",
      "Kaznovanje drugih.",
      "Oblikovanje zakonov.",
      "Pomaganje neznancem.",
    ],
    answer: 0,
    explanation: "Ljudi pogosto razvrščamo v različne socialne kategorije.",
  },

  {
    id: 476,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj so stereotipi?",
    options: [
      "Negativna čustva.",
      "Poenostavljena prepričanja o skupinah ljudi.",
      "Vrsta diskriminacije.",
      "Oblika altruizma.",
    ],
    answer: 1,
    explanation: "Stereotipi poenostavljajo informacije o skupinah.",
  },

  {
    id: 477,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomenijo implicitne teorije osebnosti?",
    options: [
      "Nezavedni konflikti.",
      "Domneve o tem, katere lastnosti se pojavljajo skupaj.",
      "Vrsta predsodkov.",
      "Oblika diskriminacije.",
    ],
    answer: 1,
    explanation: "Ljudje sklepamo, da so določene lastnosti povezane.",
  },

  {
    id: 478,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni atribucija?",
    options: [
      "Prilagajanje skupini.",
      "Razlaga vzrokov vedenja.",
      "Oblikovanje stereotipov.",
      "Pomaganje drugim.",
    ],
    answer: 1,
    explanation: "Atribucija pomeni pojasnjevanje vedenja.",
  },

  {
    id: 479,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni notranja atribucija?",
    options: [
      "Vzrok pripišemo okoliščinam.",
      "Vzrok pripišemo osebnosti posameznika.",
      "Vzrok pripišemo skupini.",
      "Vzrok pripišemo naključju.",
    ],
    answer: 1,
    explanation: "Notranja atribucija poudarja osebnostne dejavnike.",
  },

  {
    id: 480,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni temeljna atribucijska napaka?",
    options: [
      "Podcenjujemo vpliv osebnosti.",
      "Precenjujemo vpliv situacije.",
      "Precenujemo vpliv osebnosti in podcenjujemo okoliščine.",
      "Vedno krivimo sebe.",
    ],
    answer: 2,
    explanation: "Pogosto spregledamo vpliv situacijskih dejavnikov.",
  },

  {
    id: 481,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj so predsodki?",
    options: [
      "Negativna stališča do določene skupine.",
      "Neenako vedenje.",
      "Vrsta stereotipa.",
      "Pravne sankcije.",
    ],
    answer: 0,
    explanation: "Predsodki vključujejo predvsem negativna stališča.",
  },

  {
    id: 482,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni diskriminacija?",
    options: [
      "Negativno prepričanje.",
      "Neenako obravnavanje ljudi zaradi pripadnosti skupini.",
      "Nezavedna pristranskost.",
      "Vrsta atribucije.",
    ],
    answer: 1,
    explanation: "Diskriminacija pomeni vedenje, ne le stališče.",
  },

  {
    id: 483,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni teorija grešnega kozla?",
    options: [
      "Prevzemanje odgovornosti.",
      "Usmerjanje frustracije na šibkejšo skupino.",
      "Oblikovanje altruizma.",
      "Sledenje avtoriteti.",
    ],
    answer: 1,
    explanation: "Ljudje lahko za svoje težave krivijo druge skupine.",
  },

  {
    id: 484,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni prosocialno vedenje?",
    options: [
      "Vedenje za osebno korist.",
      "Vedenje, namenjeno pomoči drugim.",
      "Sledenje skupini.",
      "Oblikovanje stereotipov.",
    ],
    answer: 1,
    explanation: "Prosocialno vedenje vključuje pomoč drugim.",
  },

  {
    id: 485,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj pomeni altruizem?",
    options: [
      "Pomoč drugim brez pričakovane koristi.",
      "Pomoč zaradi nagrade.",
      "Sledenje pravilom.",
      "Prilagajanje večini.",
    ],
    answer: 0,
    explanation: "Altruistična pomoč je nesebična.",
  },

  {
    id: 486,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni učinek opazovalca (bystander effect)?",
    options: [
      "Več ljudi pomeni več pomoči.",
      "Prisotnost drugih zmanjša verjetnost pomoči.",
      "Ljudje vedno pomagajo.",
      "Pomoč je odvisna od inteligentnosti.",
    ],
    answer: 1,
    explanation: "Odgovornost se razprši med prisotne.",
  },

  {
    id: 487,
    category: "socialna",
    difficulty: "hard",
    question: "Kaj pomeni razpršitev odgovornosti?",
    options: [
      "Prevzemanje vodstva.",
      "Prepričanje, da bo pomagal nekdo drug.",
      "Večja empatija.",
      "Večja ubogljivost.",
    ],
    answer: 1,
    explanation: "Prisotnost drugih zmanjša občutek osebne odgovornosti.",
  },

  {
    id: 488,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj je prvi korak nudenja pomoči?",
    options: [
      "Akcija.",
      "Prevzem odgovornosti.",
      "Opaziti dogodek.",
      "Načrtovanje pomoči.",
    ],
    answer: 2,
    explanation: "Najprej moramo sploh opaziti, da se nekaj dogaja.",
  },

  {
    id: 489,
    category: "socialna",
    difficulty: "medium",
    question: "Kaj vpliva na medosebno privlačnost?",
    options: [
      "Podobnost interesov.",
      "Bližina.",
      "Vzajemna naklonjenost.",
      "Vse našteto.",
    ],
    answer: 3,
    explanation: "Privlačnost oblikuje več različnih dejavnikov.",
  },

  {
    id: 490,
    category: "socialna",
    difficulty: "hard",
    question:
      "Kateri dejavnik medosebne privlačnosti podpirajo raziskave najmočneje?",
    options: [
      "Nasprotja se privlačijo.",
      "Podobnost vrednot in interesov.",
      "Naključje.",
      "Tekmovalnost.",
    ],
    answer: 1,
    explanation: "Podobnost je eden najmočnejših dejavnikov privlačnosti.",
  },

  {
    id: 491,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj proučuje psihopatologija?",
    options: [
      "Izključno zdravljenje duševnih motenj.",
      "Duševne motnje, njihove vzroke, simptome in diagnosticiranje.",
      "Le delovanje možganov.",
      "Osebnostne lastnosti zdravih ljudi.",
    ],
    answer: 1,
    explanation:
      "Psihopatologija proučuje duševne motnje in njihovo prepoznavanje.",
  },

  {
    id: 492,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj velja za normalnost v psihopatologiji?",
    options: [
      "Obstaja enotna definicija.",
      "Normalnost je vedno statistično določena.",
      "Normalnost predstavlja kontinuum med zdravjem in motnjo.",
      "Normalnost pomeni odsotnost težav.",
    ],
    answer: 2,
    explanation: "Normalnost ni vse ali nič, ampak kontinuum.",
  },

  {
    id: 493,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni statistični kriterij normalnosti?",
    options: [
      "Normalno je tisto, kar je značilno za večino ljudi.",
      "Normalno je vse, kar ni bolezen.",
      "Normalno je tisto, kar določi psiholog.",
      "Normalno je družbeno sprejemljivo vedenje.",
    ],
    answer: 0,
    explanation: "Statistični kriterij temelji na pogostosti pojava.",
  },

  {
    id: 494,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev o statističnem kriteriju je pravilna?",
    options: [
      "Redkost vedno pomeni motnjo.",
      "Vsaka posebnost je bolezen.",
      "Redkost sama po sebi ne pomeni bolezni.",
      "Zelo visoka inteligentnost je motnja.",
    ],
    answer: 2,
    explanation: "Redki pojavi niso nujno patološki.",
  },

  {
    id: 495,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni socialno delovanje kot merilo normalnosti?",
    options: [
      "Število prijateljev.",
      "Uspešno delovanje doma, v šoli, službi in odnosih.",
      "Priljubljenost.",
      "Visoko samospoštovanje.",
    ],
    answer: 1,
    explanation: "Pomembno je učinkovito delovanje v vsakdanjem življenju.",
  },

  {
    id: 496,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni samozaznavanje kot merilo normalnosti?",
    options: [
      "Posameznik zaznava lastno stisko in spremembe.",
      "Drugi opazijo njegove težave.",
      "Visoko samozaupanje.",
      "Dobra samopodoba.",
    ],
    answer: 0,
    explanation: "Pomembno je, ali oseba sama prepoznava težave.",
  },

  {
    id: 497,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni kratica ICD (MKB)?",
    options: [
      "Mednarodna klasifikacija bolezni.",
      "Mednarodni diagnostični priročnik.",
      "Klinična klasifikacija bolezni.",
      "Diagnostični priročnik psihologije.",
    ],
    answer: 0,
    explanation: "ICD je mednarodna klasifikacija bolezni.",
  },

  {
    id: 498,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera organizacija je razvila ICD?",
    options: ["APA.", "UNICEF.", "WHO.", "EU."],
    answer: 2,
    explanation: "ICD je razvila Svetovna zdravstvena organizacija.",
  },

  {
    id: 499,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni kratica DSM?",
    options: [
      "Diagnostični in statistični priročnik duševnih motenj.",
      "Diagnostični sistem medicine.",
      "Duševni statistični model.",
      "Diagnostični priročnik simptomov.",
    ],
    answer: 0,
    explanation: "DSM se uporablja predvsem v ZDA in raziskovanju.",
  },

  {
    id: 500,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj lahko psiholog uporablja pri postavljanju diagnoze?",
    options: [
      "Intervju, opazovanje in psihološke teste.",
      "Le laboratorijske preiskave.",
      "Samo opazovanje.",
      "Le vprašalnike.",
    ],
    answer: 0,
    explanation: "Diagnoza temelji na več virih informacij.",
  },

  {
    id: 501,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je agnozija?",
    options: [
      "Izguba spomina.",
      "Nezmožnost prepoznavanja predmetov kljub delujočim čutilom.",
      "Vrsta blodnje.",
      "Motnja zavesti.",
    ],
    answer: 1,
    explanation: "Oseba zaznava predmet, vendar ga ne prepozna.",
  },

  {
    id: 502,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni konfabulacija?",
    options: [
      "Namerno laganje.",
      "Zapolnjevanje vrzeli v spominu z izmišljenimi podatki.",
      "Izguba spomina.",
      "Pretirano spominjanje.",
    ],
    answer: 1,
    explanation: "Oseba svojim spominom običajno verjame.",
  },

  {
    id: 503,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni perseveracija?",
    options: [
      "Počasno mišljenje.",
      "Vztrajanje pri isti temi ali odgovoru.",
      "Pretirano hitro mišljenje.",
      "Izguba logike.",
    ],
    answer: 1,
    explanation: "Perseveracija pomeni ponavljanje iste vsebine.",
  },

  {
    id: 504,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni inkoherentnost mišljenja?",
    options: [
      "Hitro mišljenje.",
      "Nepovezano mišljenje.",
      "Ponavljanje misli.",
      "Pretirana natančnost.",
    ],
    answer: 1,
    explanation: "Misli izgubijo logično povezanost.",
  },

  {
    id: 505,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj so blodnje?",
    options: [
      "Vsiljive misli.",
      "Lažna prepričanja, ki jih oseba ne spremeni.",
      "Napačne zaznave.",
      "Nočne more.",
    ],
    answer: 1,
    explanation: "Blodnje ostajajo kljub dokazom.",
  },

  {
    id: 506,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni prevalentna misel?",
    options: [
      "Lažno prepričanje.",
      "Pretirano poudarjena ideja.",
      "Izguba misli.",
      "Vsiljiva misel.",
    ],
    answer: 1,
    explanation: "Prevalentne misli prevladujejo v posameznikovem mišljenju.",
  },

  {
    id: 507,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni sopor?",
    options: [
      "Popolna neodzivnost.",
      "Močno zmanjšana odzivnost.",
      "Rahla omotičnost.",
      "Povečana budnost.",
    ],
    answer: 1,
    explanation: "Osebo prebudimo le z močnimi dražljaji.",
  },

  {
    id: 508,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni koma?",
    options: [
      "Zaspanost.",
      "Popolna neodzivnost.",
      "Rahla motenost zavesti.",
      "Zmedenost.",
    ],
    answer: 1,
    explanation: "Pri komi oseba ne reagira na dražljaje.",
  },

  {
    id: 509,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni paratimija?",
    options: [
      "Čustvena otopelost.",
      "Neustrezno čustvo glede na situacijo.",
      "Pretirana žalost.",
      "Hitre spremembe čustev.",
    ],
    answer: 1,
    explanation: "Čustvo ni skladno s situacijo.",
  },

  {
    id: 510,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni paramimija?",
    options: [
      "Neustrezen izraz čustev.",
      "Pretirana sreča.",
      "Čustvena labilnost.",
      "Nezmožnost čustvovanja.",
    ],
    answer: 0,
    explanation: "Izraz čustev ni skladen z dejanskim doživljanjem.",
  },

  {
    id: 511,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni apatija?",
    options: [
      "Pretirana čustvenost.",
      "Pomanjkanje čustvenega odzivanja.",
      "Tesnobnost.",
      "Razdražljivost.",
    ],
    answer: 1,
    explanation: "Apatija pomeni čustveno brezbrižnost.",
  },

  {
    id: 512,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni čustvena labilnost?",
    options: [
      "Nezmožnost izražanja čustev.",
      "Hitre spremembe čustev.",
      "Stalna žalost.",
      "Evforija.",
    ],
    answer: 1,
    explanation: "Razpoloženje se hitro spreminja.",
  },

  {
    id: 513,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni delirij?",
    options: [
      "Postopno propadanje možganov.",
      "Akutno stanje zmedenosti in motene zavesti.",
      "Trajna osebnostna sprememba.",
      "Vrsta blodnje.",
    ],
    answer: 1,
    explanation: "Delirij nastopi nenadno.",
  },

  {
    id: 514,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera razlika med delirijem in demenco je pravilna?",
    options: [
      "Demenca nastopi hitreje.",
      "Delirij je običajno postopen.",
      "Delirij nastopi nenadno, demenca postopoma.",
      "Pri obeh je zavest vedno ohranjena.",
    ],
    answer: 2,
    explanation: "To je ena najpomembnejših razlik.",
  },

  {
    id: 515,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj je demenca?",
    options: [
      "Akutna zmedenost.",
      "Postopen proces propadanja možganskih funkcij.",
      "Motnja spanja.",
      "Motnja hranjenja.",
    ],
    answer: 1,
    explanation: "Demenca vpliva na spomin, presojo in orientacijo.",
  },

  {
    id: 516,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za motnje avtističnega spektra?",
    options: [
      "Halucinacije.",
      "Težave v socialni komunikaciji in omejeni interesi.",
      "Blodnje.",
      "Panični napadi.",
    ],
    answer: 1,
    explanation: "Gre za razvojno motnjo z značilnimi socialnimi težavami.",
  },

  {
    id: 517,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Katera trditev o shizofreniji je pravilna?",
    options: [
      "Gre za dvojno osebnost.",
      "Večina oseb s shizofrenijo je nasilnih.",
      "Shizofrenija ni isto kot dvojna osebnost.",
      "Vedno se popolnoma pozdravi.",
    ],
    answer: 2,
    explanation: "Gre za pogost mit o shizofreniji.",
  },

  {
    id: 518,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kateri simptom je najpogostejša halucinacija pri shizofreniji?",
    options: ["Vidna.", "Okusna.", "Slušna.", "Vonjalna."],
    answer: 2,
    explanation: "Najpogosteje osebe slišijo glasove.",
  },

  {
    id: 519,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kako pomagamo psihotični osebi?",
    options: [
      "Se prepiramo o blodnjah.",
      "Govorimo mirno in zmanjšamo stres.",
      "Pokažemo avtoriteto.",
      "Ignoriramo njene težave.",
    ],
    answer: 1,
    explanation: "Pomemben je miren in neogrožujoč pristop.",
  },

  {
    id: 520,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Koliko časa morajo trajati simptomi za diagnozo depresije?",
    options: ["3 dni.", "1 teden.", "Najmanj 2 tedna.", "1 mesec."],
    answer: 2,
    explanation: "Dva tedna sta pomembno diagnostično merilo.",
  },

  {
    id: 521,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni anhedonija?",
    options: [
      "Pretirana sreča.",
      "Nezmožnost občutenja veselja.",
      "Nespečnost.",
      "Močan strah.",
    ],
    answer: 1,
    explanation: "Anhedonija je pogost simptom depresije.",
  },

  {
    id: 522,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za manijo?",
    options: [
      "Žalost in utrujenost.",
      "Povečana energija in hitre misli.",
      "Panični napadi.",
      "Izguba zavesti.",
    ],
    answer: 1,
    explanation: "Manija vključuje pretirano aktivnost in optimizem.",
  },

  {
    id: 523,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj velja glede pogovora o samomoru?",
    options: [
      "O njem ne smemo spraševati.",
      "Neposredno vprašanje poveča tveganje.",
      "O njem lahko vprašamo neposredno.",
      "Pogovor vedno poslabša stanje.",
    ],
    answer: 2,
    explanation: "Neposreden pogovor ne poveča tveganja.",
  },

  {
    id: 524,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj je značilno za panično motnjo?",
    options: [
      "Kronična žalost.",
      "Nenadni panični napadi.",
      "Obsesije.",
      "Blodnje.",
    ],
    answer: 1,
    explanation: "Panični napadi se pojavijo nenadoma.",
  },

  {
    id: 525,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za socialno fobijo?",
    options: [
      "Strah pred višino.",
      "Strah pred negativno oceno drugih.",
      "Strah pred krvjo.",
      "Strah pred temo.",
    ],
    answer: 1,
    explanation: "Gre za strah pred družbenimi situacijami.",
  },

  {
    id: 526,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj je glavni namen kompulzij pri OKM?",
    options: [
      "Povečanje samozavesti.",
      "Zmanjšanje tesnobe.",
      "Izboljšanje spomina.",
      "Pridobivanje pozornosti.",
    ],
    answer: 1,
    explanation: "Kompulzije začasno zmanjšajo tesnobo.",
  },

  {
    id: 527,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni PTSM?",
    options: [
      "Motnjo po travmatičnem dogodku.",
      "Motnjo hranjenja.",
      "Motnjo spanja.",
      "Osebnostno motnjo.",
    ],
    answer: 0,
    explanation: "PTSM se razvije po izpostavljenosti travmi.",
  },

  {
    id: 528,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kateri simptom je značilen za PTSM?",
    options: ["Evforija.", "Podoživljanje travme.", "Halucinacije.", "Manija."],
    answer: 1,
    explanation: "Travmatični dogodki se lahko ponovno vsiljujejo.",
  },

  {
    id: 529,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj je značilno za anoreksijo nervozo?",
    options: [
      "Prenajedanje.",
      "Strah pred pridobivanjem telesne mase.",
      "Halucinacije.",
      "Obsesije.",
    ],
    answer: 1,
    explanation: "Prisoten je močan strah pred debelostjo.",
  },

  {
    id: 530,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za bulimijo nervozo?",
    options: [
      "Omejevanje hrane brez prenajedanja.",
      "Prenajedanje in kompenzacijska vedenja.",
      "Halucinacije.",
      "Izguba zavesti.",
    ],
    answer: 1,
    explanation: "Pogosto se pojavita bruhanje ali uporaba odvajal.",
  },

  {
    id: 531,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj pomeni disociativna motnja identitete?",
    options: [
      "Prisotnost dveh ali več identitetnih stanj.",
      "Shizofrenijo.",
      "Demenco.",
      "Anksioznost.",
    ],
    answer: 0,
    explanation: "Prej se je imenovala multipla osebnostna motnja.",
  },

  {
    id: 532,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni toleranca pri odvisnosti?",
    options: [
      "Prenašanje neprijetnosti.",
      "Za enak učinek potrebujemo večjo količino snovi.",
      "Prenehanje uporabe.",
      "Izguba nadzora.",
    ],
    answer: 1,
    explanation: "Toleranca pomeni zmanjšano občutljivost na snov.",
  },

  {
    id: 533,
    category: "psihopatologija",
    difficulty: "medium",
    question: "Kaj pomeni odtegnitev?",
    options: [
      "Prva uporaba snovi.",
      "Neprijetni simptomi ob prenehanju uporabe.",
      "Izguba spomina.",
      "Prenajedanje.",
    ],
    answer: 1,
    explanation: "Odtegnitveni simptomi se pojavijo po prekinitvi.",
  },

  {
    id: 534,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za antisocialno osebnostno motnjo?",
    options: [
      "Pretirana tesnoba.",
      "Kršenje pravil in pomanjkanje empatije.",
      "Močna žalost.",
      "Ponavljajoče preverjanje.",
    ],
    answer: 1,
    explanation: "Pogosto jo povezujemo s psihopatijo.",
  },

  {
    id: 535,
    category: "psihopatologija",
    difficulty: "hard",
    question: "Kaj je značilno za paranoidno osebnostno motnjo?",
    options: [
      "Evforija.",
      "Nezaupanje in sumničavost.",
      "Prenajedanje.",
      "Izguba zavesti.",
    ],
    answer: 1,
    explanation: "Posamezniki pogosto doživljajo občutek ogroženosti.",
  },

  {
    id: 536,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj najbolje opisuje inteligentnost?",
    options: [
      "Sposobnost pomnjenja podatkov.",
      "Sposobnost učinkovitega mišljenja, učenja in prilagajanja okolju.",
      "Sposobnost hitrega računanja.",
      "Prirojena nadarjenost.",
    ],
    answer: 1,
    explanation:
      "To je splošna definicija inteligentnosti, ki zajema mišljenje, učenje in prilagajanje.",
  },

  {
    id: 537,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kateri psiholog je inteligentnost povezoval z mišljenjem, presojanjem, spominom in posploševanjem?",
    options: [
      "David Wechsler.",
      "William Stern.",
      "Alfred Binet.",
      "Hans Jürgen Eysenck.",
    ],
    answer: 2,
    explanation:
      "Binet je inteligentnost opredelil kot skupek več miselnih sposobnosti.",
  },

  {
    id: 538,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kdo je inteligentnost opredelil kot sposobnost prilagajanja novim življenjskim nalogam?",
    options: [
      "William Stern.",
      "Charles Spearman.",
      "Alfred Binet.",
      "David Wechsler.",
    ],
    answer: 0,
    explanation:
      "Stern je poudarjal prilagajanje in smotrno uporabo miselnih sredstev.",
  },

  {
    id: 539,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kdo je inteligentnost opredelil kot globalno sposobnost ravnati smotrno in razumno?",
    options: [
      "Alfred Binet.",
      "David Wechsler.",
      "Hans Eysenck.",
      "John Horn.",
    ],
    answer: 1,
    explanation:
      "Wechslerjeva definicija poudarja učinkovito obravnavo okolja.",
  },

  {
    id: 540,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kdo je inteligentnost povezoval s prenosom informacij skozi možgansko skorjo?",
    options: [
      "Hans Jürgen Eysenck.",
      "William Stern.",
      "David Wechsler.",
      "Charles Spearman.",
    ],
    answer: 0,
    explanation: "Eysenck je poudarjal biološko osnovo inteligentnosti.",
  },

  {
    id: 541,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni Spearmanov g-faktor?",
    options: [
      "Posebna matematična sposobnost.",
      "Splošni faktor inteligentnosti.",
      "Pridobljeno znanje.",
      "Socialna inteligentnost.",
    ],
    answer: 1,
    explanation: "g-faktor predstavlja splošno inteligentnost.",
  },

  {
    id: 542,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Po Spearmanu vsaka naloga zahteva:",
    options: [
      "Le g-faktor.",
      "Le specifične sposobnosti.",
      "g-faktor in specifične sposobnosti.",
      "Fluidno inteligentnost.",
    ],
    answer: 2,
    explanation:
      "Pri reševanju nalog sodelujeta splošna in specifična inteligentnost.",
  },

  {
    id: 543,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni fluidna inteligentnost?",
    options: [
      "Znanje, pridobljeno s šolanjem.",
      "Sposobnost reševanja novih problemov.",
      "Besedni zaklad.",
      "Dolgoročni spomin.",
    ],
    answer: 1,
    explanation: "Fluidna inteligentnost je manj odvisna od izkušenj.",
  },

  {
    id: 544,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Katera značilnost najbolje opisuje fluidno inteligentnost?",
    options: [
      "Temelji na šolanju.",
      "Temelji na izkušnjah.",
      "Vključuje logično mišljenje in prepoznavanje vzorcev.",
      "Odvisna je od kulture.",
    ],
    answer: 2,
    explanation: "Fluidna inteligentnost omogoča reševanje novih nalog.",
  },

  {
    id: 545,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni kristalizirana inteligentnost?",
    options: [
      "Biološko pogojena sposobnost.",
      "Sposobnost reševanja novih ugank.",
      "Znanje in izkušnje, pridobljene skozi življenje.",
      "Hitrost procesiranja informacij.",
    ],
    answer: 2,
    explanation: "Kristalizirana inteligentnost temelji na učenju.",
  },

  {
    id: 546,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kateri dejavnik najbolj vpliva na kristalizirano inteligentnost?",
    options: ["Šolanje in kultura.", "Dednost.", "Hormoni.", "Spanje."],
    answer: 0,
    explanation: "Na kristalizirano inteligentnost močno vplivajo izkušnje.",
  },

  {
    id: 547,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Zakaj merimo inteligentnost?",
    options: [
      "Za šolsko svetovanje in poklicno usmerjanje.",
      "Samo za raziskovanje.",
      "Le za klinično diagnostiko.",
      "Zgolj zaradi primerjanja ljudi.",
    ],
    answer: 0,
    explanation: "Merjenje ima več praktičnih namenov.",
  },

  {
    id: 548,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj pomeni standardizacija testa?",
    options: [
      "Primerjavo z vrstniki.",
      "Enake pogoje za vse udeležence.",
      "Merjenje inteligentnosti.",
      "Stabilnost rezultatov.",
    ],
    answer: 1,
    explanation: "Vsi rešujejo test pod enakimi pogoji.",
  },

  {
    id: 549,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomenijo norme pri psiholoških testih?",
    options: [
      "Merijo veljavnost testa.",
      "Omogočajo primerjavo z vrstniki.",
      "Določajo čas reševanja.",
      "Povečujejo zanesljivost.",
    ],
    answer: 1,
    explanation: "Norme omogočajo interpretacijo rezultatov.",
  },

  {
    id: 550,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni IQ?",
    options: [
      "Indeks kakovosti.",
      "Inteligenčni količnik.",
      "Indeks kvocienta.",
      "Integrirana kvota.",
    ],
    answer: 1,
    explanation: "IQ pomeni inteligenčni količnik.",
  },

  {
    id: 551,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj pomeni, da je IQ relativna mera?",
    options: [
      "Ne spreminja se.",
      "Primerja posameznika s povprečjem enako starih oseb.",
      "Velja le za otroke.",
      "Meri le dednost.",
    ],
    answer: 1,
    explanation: "IQ nima absolutnega pomena brez primerjave.",
  },

  {
    id: 552,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kolikšen je približen povprečni IQ?",
    options: ["70", "85", "100", "130"],
    answer: 2,
    explanation: "Povprečni IQ znaša približno 100.",
  },

  {
    id: 553,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Približno kolikšen delež ljudi ima IQ med 85 in 115?",
    options: ["50 %", "68 %", "80 %", "95 %"],
    answer: 1,
    explanation: "Približno 68 % ljudi dosega rezultate v tem območju.",
  },

  {
    id: 554,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj velja za motnjo v duševnem razvoju?",
    options: [
      "Vedno nastane po 18. letu.",
      "Pomeni pomembno znižanje intelektualnega delovanja pred 18. letom.",
      "Je posledica depresije.",
      "Pomeni le učne težave.",
    ],
    answer: 1,
    explanation: "Prisotna mora biti pred odraslostjo.",
  },

  {
    id: 555,
    category: "inteligentnost",
    difficulty: "hard",
    question:
      "Kateri pogoj mora biti poleg nižjega IQ izpolnjen pri motnji v duševnem razvoju?",
    options: [
      "Prisotnost halucinacij.",
      "Omejitve prilagoditvenih sposobnosti.",
      "Prisotnost depresije.",
      "Slab učni uspeh.",
    ],
    answer: 1,
    explanation: "Pomembne so tudi težave pri vsakodnevnem prilagajanju.",
  },

  {
    id: 556,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kateri IQ ustreza blagi motnji v duševnem razvoju?",
    options: ["21–35", "36–50", "51–70", "Pod 20"],
    answer: 2,
    explanation: "Blaga motnja zajema IQ med 51 in 70.",
  },

  {
    id: 557,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kateri IQ ustreza zmerni motnji v duševnem razvoju?",
    options: ["36–50", "51–70", "21–35", "Pod 20"],
    answer: 0,
    explanation: "Zmerna stopnja zajema IQ od 36 do 50.",
  },

  {
    id: 558,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kateri IQ ustreza hudi motnji v duševnem razvoju?",
    options: ["Pod 20", "21–35", "36–50", "51–70"],
    answer: 1,
    explanation: "Huda stopnja zajema IQ med 21 in 35.",
  },

  {
    id: 559,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kateri IQ ustreza globoki motnji v duševnem razvoju?",
    options: ["21–35", "36–50", "51–70", "Pod 20"],
    answer: 3,
    explanation: "Globoka stopnja pomeni IQ pod 20.",
  },

  {
    id: 560,
    category: "inteligentnost",
    difficulty: "medium",
    question:
      "Kateri biološki dejavnik lahko povzroči motnjo v duševnem razvoju?",
    options: [
      "Downov sindrom.",
      "Stres.",
      "Pomanjkanje motivacije.",
      "Nespečnost.",
    ],
    answer: 0,
    explanation: "Downov sindrom je eden najpogostejših bioloških vzrokov.",
  },

  {
    id: 561,
    category: "inteligentnost",
    difficulty: "medium",
    question: "Kaj pomeni nadarjenost?",
    options: [
      "IQ pod 70.",
      "Izrazito nadpovprečne intelektualne sposobnosti.",
      "Uspešnost pri vseh predmetih.",
      "Dobra socialna prilagojenost.",
    ],
    answer: 1,
    explanation: "Nadarjenost pomeni visoke intelektualne sposobnosti.",
  },

  {
    id: 562,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Približno kolikšen delež populacije velja za nadarjenega?",
    options: ["1 %", "2 %", "5 %", "10 %"],
    answer: 1,
    explanation: "Približno 2 % populacije dosega kriterij nadarjenosti.",
  },

  {
    id: 563,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kateri IQ je običajno povezan z nadarjenostjo?",
    options: ["Nad 100", "Nad 115", "Nad 130", "Nad 145"],
    answer: 2,
    explanation: "Za nadarjenost se pogosto uporablja meja IQ nad 130.",
  },

  {
    id: 564,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Katera trditev o visokem IQ je pravilna?",
    options: [
      "Vedno pomeni življenjski uspeh.",
      "Vedno pomeni čustveno zrelost.",
      "Ne zagotavlja nujno uspeha ali socialne prilagojenosti.",
      "Vedno pomeni dobro samopodobo.",
    ],
    answer: 2,
    explanation: "Visok IQ sam po sebi ne zagotavlja uspeha.",
  },

  {
    id: 565,
    category: "inteligentnost",
    difficulty: "hard",
    question: "Kaj pomeni viktimizacija?",
    options: [
      "Večja verjetnost, da posameznik postane žrtev zlorab.",
      "Povečana agresivnost.",
      "Izguba spomina.",
      "Večja inteligentnost.",
    ],
    answer: 0,
    explanation:
      "Viktimizacija pomeni večjo izpostavljenost izkoriščanju in zlorabam.",
  },
];

QUESTIONS.forEach((q) => {
  q.subject = "psiho";
});
