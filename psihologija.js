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
];

QUESTIONS.forEach((q) => {
  q.subject = "psiho";
});
