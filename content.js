/* ==========================================================================
   EDIZIO-GIDA
   Webaren testu, esteka eta irudi guztiak hemen daude.
   Testua aldatu nahi baduzu, "..." artekoa aldatu eta gorde. Ez ukitu gakoak.
   Lan berri bat gehitzeko: "projects" barruan bloke bat kopiatu eta aldatu.
   ========================================================================== */
window.CONTENT = {
  site: {
    title: "Izadi Orobengoa · Portfolioa",
    description: "Izadi Orobengoaren portfolioa: bideoa, animazioa eta diseinua. Ikus-entzunezko Komunikazioko ikaslea, Mondragon Unibertsitatea."
  },

  person: {
    name: "Izadi Orobengoa",
    first: "Izadi",
    role: "Ikus-entzunezko Komunikazioko ikaslea",
    script: "bideoa, animazioa eta diseinua",
    email: "izadiorobengoa@gmail.com",
    email2: "izadi.orobengoa@alumni.mondragon.eus",
    phone: "+34 634 418 976",
    phone2: "+56 9 5215 8815",
    city: "Arrasate, Gipuzkoa",
    car: "Kotxea dut",
    cv: "assets/CV_Izadi_Orobengoa.pdf"
  },

  nav: [
    { label: "Niri buruz", target: "niri-buruz" },
    { label: "Lanak", target: "lanak" },
    { label: "Vlogak", target: "vlogak" },
    { label: "Zergatik ni?", target: "zergatik-ni" },
    { label: "Kontaktua", target: "kontaktua" }
  ],

  hero: {
    kicker: "Ikus-entzunezko Komunikazioa · Mondragon Unibertsitatea",
    title: "Portfolioa",
    scroll: "scroll egin gehiago ezagutzeko",
    cta1: "Ikusi lanak",
    cta2: "Deskargatu CV-a"
  },

  about: {
    title: "Niri buruz",
    paragraphs: [
      "Izadi naiz, arrasatearra eta Mondragon Unibertsitateko Ikus-entzunezko Komunikazioko ikaslea. Bideoa, animazioa eta diseinua uztartzen ditut komunikazio digitalerako.",
      "Ideiak hasieratik amaierara garatzea gustatzen zait: gidoitik grabaketara, edizioraino eta aurkezpen bisualera. Bezero errealekin lan egin dut Txatxilipurdin eta Cabify Chile-rako proposamen batean.",
      "Gaur egun Txilen nago Erasmusean, sei hilabetez, eta bertako bizipenak bideo txikietan jasotzen ditut. Musika ere urte luzez ikasi dut Arrasate Musikalen: musika-teoria, gitarra eta kantua."
    ],
    facts: [
      { icon: "cap", label: "Ikasketak", value: "Ikus-entzunezko gradua, Mondragon Unibertsitatea (2024tik)" },
      { icon: "chat", label: "Hizkuntzak", value: "Euskara eta gaztelania (ama hizkuntza) · Ingelesa B2" },
      { icon: "pin", label: "Bizilekua", value: "Arrasate, Gipuzkoa" },
      { icon: "car", label: "Mugikortasuna", value: "Kotxea dut" }
    ],
    identity: {
      title: "Nortasunaren bideoa",
      text: "Nire identitatearen eta barne munduaren ikus-entzunezko erretratua. Ordenagailuko mahaigain baten metafora erabiliz, nire bizitzako oroitzapenak, pertsonak, esperientziak eta interesak bildu ditut, iraganeko eta egungo niaren arteko lotura erakusteko.",
      youtube: "e4Ka800v3-0"
    }
  },

  strengths: {
    title: "Indarguneak",
    items: [
      { title: "Bideoa hasieratik amaierara", text: "Grabaketa eta edizioa Premiere Pro-rekin; animazioak, sarrerak eta amaierak After Effects-ekin. Txatxilipurdirentzat 5 azalpen-bideo egin nituen." },
      { title: "Ideiak kanpaina bihurtzen", text: "Arazo bat ulertu eta aktibazio bat garatzen dut taldean. Cabify Chile-rako proposamena 4 lagunen taldean landu genuen." },
      { title: "Diseinua eta eskuzko lana", text: "Photoshop, Illustrator eta Figma erabiltzen ditut. Fanzineko ilustrazio guztiak eskuz eginak dira, eta kolajea argazkiz argazki osatu nuen." },
      { title: "Plangintza eta talde-lana", text: "Lantaldeak koordinatu eta zereginak planifikatu ditut kortometrajeetan, zuzeneko programan eta entretenimendu-programan." }
    ]
  },

  works: {
    title: "Lanak",
    lead: "Hiru lan, hiru mota: bideoa, estrategia eta diseinua. Ireki bakoitza xehetasun guztiak ikusteko."
  },

  projects: [
    {
      slug: "txatxilipurdi",
      title: "Txatxilipurdi: egitasmoen azalpen-bideoak",
      short: "5 azalpen-bideo YouTuberako, Txatxilipurdik bultzatutako egitasmoak ezagutarazteko.",
      type: "Bideoa",
      year: "2026",
      client: "Txatxilipurdi (Arrasate) · komunikazio saileko boluntariotza, 3 hilabete",
      role: "Grabaketa, edizioa, animazioak, sarrera eta amaiera. Bertikaleko bertsioen animazioak ere nireak dira.",
      tools: ["Premiere Pro", "After Effects"],
      goal: "Txatxilipurdik sortu eta bultzatutako egitasmo propioak ezagutaraztea: jolasa, heziketa, natura, gurasotasuna eta kontsumo arduratsua. Bideo bakoitzak egitasmo bat azaltzen du, haur, gazte, familia eta hezkuntza komunitateei zuzenduta.",
      process: "Bideo guztiak neuk grabatu eta editatu nituen horizontalean, YouTuberako, Premiere Pro-rekin. Animazio txikiak, sarrera eta amaiera After Effects-ekin sortu nituen. Lankide batek bertikalean moldatu zituen Instagramerako; bertsio horietako animazioak nik egin nituen.",
      result: "Bideoak Txatxilipurdiren YouTube kanalean eta Instagramen argitaratzen ari dira.",
      cover: { youtube: "32_L93Y6g-Y" },
      videos: [
        { title: "Guraso.eus", youtube: "32_L93Y6g-Y", text: "Gurasotasunaren inguruko informazioa, baliabideak eta hausnarketak partekatzeko webgunea." },
        { title: "Jolasparkeak.eus", youtube: "RI7EDvhlvMs", text: "Euskal Herriko jolasparkeen inguruko informazioa eta baliabideak biltzen dituen webgunea." },
        { title: "Jostailu Truke Merkatua", youtube: "2Nuw0fs-kEQ", text: "Erabiltzen ez diren jostailuei bigarren bizitza bat emateko eta haien trukea sustatzeko egitasmoa." },
        { title: "Ludoteka Ibiltaria", youtube: "xe2K6mHx7As", text: "Jolasa eta jostailuak herriz herri gerturatzeko proposamena." },
        { title: "Naturan Jolasean", youtube: "iiHBD5pN8co", text: "Naturan jolasteko eta ingurunearekin harremanetan jartzeko proposamena." }
      ],
      gallery: [],
      links: [
        { label: "Ikusi zerrenda YouTuben", url: "https://www.youtube.com/playlist?list=PLBaKeyguEBCc" },
        { label: "Txatxilipurdi Instagramen", url: "https://www.instagram.com/txatxilipurdi" },
        { label: "Txatxilipurdi YouTuben", url: "https://youtube.com/@txatxilipurdielkartea6707" }
      ]
    },
    {
      slug: "cabify-la-mochila",
      title: "Cabify Chile: “La mochila”, aktibazio proposamena",
      short: "Santiagoko aireportuko taxi-iruzurren aurka, Cabifyren delivery motxilak publizitate euskarri mugikor bihurtzen dituen kanpaina.",
      type: "Estrategia",
      year: "2026ko iraila",
      client: "Cabify Chile · bezero erreala · 4 lagunen taldea",
      role: "Ideiaren garapena taldekideekin batera. Aurkezpen bisualerako mockup guztiak eta maketazioa nik egin nituen: motxilen diseinua Photoshopen, eta beste mockup batzuk IA tresnekin.",
      tools: ["Photoshop", "IA tresnak", "Canva"],
      goal: "Santiagoko aireportura iristen diren bidaiariak, bereziki atzerriko turistak, taxi faltsuen iruzurrez ohartaraztea eta Cabifyren aireportuko garraio ofiziala ezagutaraztea.",
      process: "Aktibazioak Cabifyren delivery motxilak publizitate euskarri mugikor bihurtzen ditu: benetako bidaiariekin batera nazioarteko eta nazioko hegaldietan bidaiatzen dute. Motxilek Santiagoko aireportuko taxi faltsuen iruzurrei buruz ohartarazten dute, eta QR kode baten bidez Cabifyren aireportuko garraio ofiziala erreserbatzeko aukera ematen dute. Kanpainak 12 asteko egutegia du, hiru olatutan, eta eskaintza ireki bat: 10 bikoteri maleta ordaintzen zaie, baldin eta euren maleta Cabifyren motxila bada.",
      result: "Proposamena da, ez kanpaina gauzatua. Bezero errealarekin landu zen, eta 3 hilabeterako helburuak zehaztu genituen (adib. 5.500 QR eskaneo eta 1.650 app deskarga). Mockup batzuk IA tresnekin sortuak dira, eta irudiak ez dira benetako argazkiak.",
      cover: { image: "assets/cabify/cabify-04-mockup-motxilak.jpg", alt: "Mockupa: influencer bikoteak Cabify motxilekin aireportuko zintan" },
      videos: [],
      gallery: [
        { src: "assets/cabify/cabify-01-azala.jpg", alt: "Cabify aurkezpenaren azala", caption: "Azala" },
        { src: "assets/cabify/cabify-02-arazoa.jpg", alt: "Arazoa: delitu bat herrialdeko sarreran", caption: "Arazoa" },
        { src: "assets/cabify/cabify-03-ideia.jpg", alt: "Ideia: Cabifyk denbora arazoa du", caption: "Ideia" },
        { src: "assets/cabify/cabify-04-mockup-motxilak.jpg", alt: "Mockupa: influencer bikoteak Cabify motxilekin aireportuko zintan", caption: "Mockupa", tag: "Mockupa" },
        { src: "assets/cabify/cabify-05-mezuak.jpg", alt: "Motxilaren mezuak", caption: "Motxilaren mezuak" },
        { src: "assets/cabify/cabify-06-eskaintza.jpg", alt: "Eskaintza irekia: 10 bikote", caption: "Eskaintza irekia" },
        { src: "assets/cabify/cabify-07-mockup-streamer.jpg", alt: "Mockupa: streamer bat Cabify kaxa argitsuarekin", caption: "Mockupa", tag: "Mockupa" },
        { src: "assets/cabify/cabify-08-helburuak.jpg", alt: "Helburuak 3 hilabetetarako", caption: "Helburuak" }
      ],
      links: [
        { label: "Ikusi aurkezpen osoa (Canva)", url: "https://canva.link/bqi9oszarfchssw" }
      ]
    },
    {
      slug: "fanzinea-maitasuna-eta-artea",
      title: "Fanzinea: maitasuna eta artea",
      short: "Maitasunaren eta artearen arteko lotura, euskal artea, kultura eta euskara abiapuntu hartuta.",
      type: "Diseinua",
      year: "",
      client: "Klaseko lana",
      role: "Ilustrazio guztiak eta kolajea nik sortu nituen, teknika desberdinak erabiliz. Maketazioa ere nirea da.",
      tools: ["Photoshop", "Illustrator"],
      goal: "Maitasuna aukeratu nuen lotura eta adierazpen modu gisa, pertsonen, kulturaren, lurraren eta artearen arteko harremanak aztertzeko. Fanzine honek maitasunaren eta artearen arteko lotura aztertzen du, emozioak adierazteko, besteekin konektatzeko eta nortasuna eraikitzeko bide gisa.",
      process: "Ilustrazioak eskuz egin nituen, teknika desberdinak erabiliz, eta eskaneatu nituen; beste batzuk Photoshopen sortu nituen zerotik, eskuz geruza desberdinak eginez. Gero Illustratorren batu nituen. Kolajea ere nik egin nuen, argazkiz argazki. Estetika zatikatuak emozioen konplexutasuna eta ikuspegi anitzak irudikatzen ditu; orrialdeak alderantziz agertzeak, berriz, formatu digitalean jolas bisuala proposatzen du, fanzinea fisikoki irakurtzean beste esanahi bat hartuko duena.",
      result: "",
      cover: { image: "assets/fanzine/fanzinea.jpg", alt: "Fanzinaren orrialdeak: kolajea, bihotz hautsia eta ilustrazioak" },
      videos: [],
      gallery: [
        { src: "assets/fanzine/fanzinea.jpg", alt: "Fanzinaren orrialdeak: kolajea, bihotz hautsia eta ilustrazioak", caption: "Fanzinearen orrialdeak (inprimatzeko bertsioa)" }
      ],
      links: []
    }
  ],

  vlogs: {
    title: "Vlogak",
    lead: "Txilen bizitako Erasmus esperientzia, hitzik gabe kontatua: klipak, erritmoa eta musika.",
    items: [
      {
        title: "Abuztua recap",
        meta: "Txile · 1 minutu",
        text: "Txilen bizitako lehen hilabetearen laburpena. Abuztuan zehar ezagututako lekuak, pertsonak eta bizipenak minutu bateko bideo batean bilduta. Erasmus esperientzia berri baten lehenengo hilabetea, hitzik gabe kontatua.",
        youtube: "TWTaAAHjB0E"
      },
      {
        title: "Valparaíso",
        meta: "Txile · lehen bidaia",
        text: "Txilera iritsi eta bi astera egindako lehen bidaia. Valparaíso eta Txilen nirekin sei hilabetez egongo diren lagunak ezagutzeko egun batzuk, lagun berriekin bizitako lehen esperientziak eta hiriaren koloreak bideo batean bilduta.",
        youtube: "to6Piv3rmuI"
      },
      {
        title: "Cajón del Maipo",
        meta: "Txile · eguneko ihesaldia",
        text: "Erasmuseko lagunekin Cajón del Maipora egindako eguneko ihesaldia. Elurra, mendia eta lagunekin partekatutako uneak dira bideo labur honen protagonistak, zoriontasunarekin batera.",
        youtube: "L7zK2K9gVOQ"
      }
    ]
  },

  experience: {
    title: "Esperientzia",
    items: [
      { where: "Txatxilipurdi", role: "Komunikazio saileko boluntarioa", when: "2026 · 3 hilabete", what: "5 azalpen-bideo grabatu, editatu eta animatu YouTuberako; bertikaleko bertsioen animazioak." },
      { where: "Cabify Chile · aktibazio proposamena", role: "Bezero errealarekin, 4 lagunen taldean", when: "2026ko iraila", what: "Ideiaren garapena taldean; mockup guztiak eta motxilen diseinua." },
      { where: "Mondragon Unibertsitatea", role: "Ikus-entzunezko proiektuak", when: "2024 – orain", what: "Kortometrajeak, webguneak, zuzeneko programa eta entretenimendu-programa; lantaldeen koordinazioa eta zereginen plangintza." }
    ]
  },

  tools: {
    title: "Tresnak",
    groups: [
      { name: "Bideoa eta animazioa", items: ["Premiere Pro", "After Effects"] },
      { name: "Irudia", items: ["Photoshop", "Illustrator", "Lightroom"] },
      { name: "Diseinua eta weba", items: ["Figma", "WordPress", "Canva"] },
      { name: "Ofimatika", items: ["Word", "PowerPoint"] }
    ]
  },

  why: {
    title: "Zergatik ni?",
    items: [
      { title: "Bezero errealekin lan egin dut", text: "Txatxilipurdirentzat bideoak eta Cabify Chile-rako aktibazio proposamena." },
      { title: "Ideiatik amaierara", text: "Gidoia, grabaketa, edizioa, animazioa eta mockupak, dena landu dut." },
      { title: "Hizkuntzak eta mugikortasuna", text: "Euskaraz eta gaztelaniaz ama hizkuntza gisa, ingelesa B2 ziurtagiriarekin, eta kotxea dut mugitzeko." }
    ]
  },

  contact: {
    title: "Hitz egin dezagun",
    text: "Dualerako eta ikus-entzunezko proiektuetarako prest nago. Idatzi edo deitu, eta eskuratu nire CV-a."
  },

  footer: "Izadi Orobengoa · Mondragon Unibertsitatea · Ikus-entzunezko Komunikazioa"
};
