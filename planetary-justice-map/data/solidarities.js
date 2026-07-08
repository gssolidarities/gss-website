/*
 * GSS ANARCHIVE — Planetary Justice Map
 * "Gendered Networks of Revolutionary Solidarity" — canonical dataset.
 *
 * WHAT THIS IS
 *   Nodes are revolutionary FIGURES and MOVEMENTS of the Global Souths named in the
 *   project's research design; arcs are their real trajectories (birth → exile →
 *   organising base) and documented solidarity ties between nodes. Each node carries
 *   a factual annotation, a clearly-labelled interpretive LENS addressing the
 *   project's core question, and a register of PRIMARY MATERIALS — photographs,
 *   speeches, writings — that elucidate its feminist politics of resistance and
 *   solidarity.
 *
 * ROSTER INTEGRITY (read before editing)
 *   - The roster is scoped to the project's research design: Meena Keshwar Kamal,
 *     Leila Khaled, Sakine Cansız, Lorena Borjas, Claudia Jones, Nemonte Nenquimo,
 *     Helena Gualinga; RAWA, the Third World Liberation Front, the PAIGC.
 *     Do NOT add nodes without a research/review pass.
 *   - ANNOTATION vs LENS: `annotation` is factual and sourceable; `lens` is
 *     interpretive and is rendered under an explicit "reading" label. Keep them apart.
 *   - PLACES: `precision:"exact"` = gazetteer-grade city/campus coordinates.
 *     `precision:"approx"` = area-level (villages, territories, founding sites);
 *     the decimals must not be read as precision. `year` on a place is REVEAL
 *     METADATA for the timeline (when this point enters the story), not a claim
 *     that something happened on 1 January of that year; the human-readable
 *     `period` string is the citable statement.
 *   - MATERIALS: primary sources only — kind: "text" (writings), "photo",
 *     "film" (footage/speeches on video), "doc" (records, rulings, party documents),
 *     "press" (periodicals). Materials are LINKED at their holding archives and
 *     publishers, never re-hosted; rights remain with their holders. Every material
 *     is a real, documented item. `deepLink:false` marks an item whose precise URL
 *     still needs verifying — the listed url is the holder's real root domain in
 *     the meantime. No invented items, dates or URLs.
 *   - SOURCES: named institutional/scholarly citations per node, same deepLink
 *     convention. No invented figures, quotes, dates or coordinates anywhere.
 *   - TIES: inter-node connections appear ONLY where documented (e.g. founder)
 *     or where the project's research design itself pairs nodes — in which case
 *     the tie note says so explicitly.
 */

window.GSS_SOLIDARITIES = {

  meta: {
    code: "PJM-GNRS",
    version: "0.5.1",
    updated: "2026-07-06",
    title: "Planetary Justice Map",
    theme: "Gendered Networks of Revolutionary Solidarity",
    org: "Global South Solidarities Anarchive",
    orgUrl: "https://gssolidarities.org",
    question: "How do struggles and solidarities that center women, queer folx, gender, and sexuality extend our understanding of WGSS?",
    timeline: { min: 1910, max: 2026 },
    // interactive storytelling maps — one per research question (served from story-maps/)
    inquiries: [
      { id: "rawa-under-occupation", n: "I", code: "PJM-ISM-01",
        title: "Solidarity Under Occupation",
        q: "How did RAWA's clandestine feminist organising inform its model of transnational feminist solidarity under occupation?",
        nodes: ["meena-keshwar-kamal", "rawa"] },
      { id: "claudia-jones-bridge", n: "II", code: "PJM-ISM-02",
        title: "Left of Marx, South of Empire",
        q: "How did Claudia Jones theorise the intersections of oppression to build bridges between movements in the US, the Caribbean and the UK?",
        nodes: ["claudia-jones"] },
      { id: "amazon-forest-women", n: "III", code: "PJM-ISM-03",
        title: "The Forest Speaks in Women's Voices",
        q: "How do Nemonte Nenquimo and Helena Gualinga foreground Indigenous feminisms in global climate justice, creating new models of cross-border solidarity?",
        nodes: ["nemonte-nenquimo", "helena-gualinga"] }
    ]
  },

  themes: {
    femrev:    { label: "Feminist revolutionary organising", color: "#e0637f" },
    antico:    { label: "Anti-colonial & national liberation", color: "#e8985a" },
    blackint:  { label: "Black internationalism",             color: "#9d7bd8" },
    transq:    { label: "Trans & queer community defence",    color: "#5db8e8" },
    indig:     { label: "Indigenous & climate justice",       color: "#6fbf8f" },
    coalition: { label: "Student & coalition politics",       color: "#d9b36b" }
  },

  nodes: [

    /* ------------------------------ FIGURES ------------------------------ */

    {
      id: "meena-keshwar-kamal",
      type: "figure",
      name: "Meena Keshwar Kamal",
      dates: "1956 – 1987",
      origin: 1956,
      theme: "femrev",
      role: "Founder of RAWA · Kabul & Quetta",
      inquiry: "rawa-under-occupation",
      anchor: "right",
      places: [
        { label: "Kabul", lat: 34.5553, lng: 69.2075, precision: "exact",
          year: 1956, period: "b. 1956 · founded RAWA here, 1977" },
        { label: "Quetta", lat: 30.1798, lng: 66.9750, precision: "exact",
          year: 1981, period: "refugee organising & Watan schools, early 1980s · assassinated 4 Feb 1987" }
      ],
      annotation: "Born in Kabul in 1956, Meena Keshwar Kamal founded the Revolutionary Association of the Women of Afghanistan (RAWA) in 1977, while still a student — an independent political organisation of Afghan women committed to equality and social justice. After the Soviet invasion she organised among refugees in Pakistan, launched the bilingual magazine <em>Payam-e-Zan</em> (“Women's Message”, 1981), and helped establish the Watan schools for refugee children in Quetta. In 1981 she represented the Afghan women's resistance at the French Socialist Party congress. She was assassinated in Quetta on 4 February 1987; RAWA attributes the killing to agents of the KHAD secret police and their fundamentalist allies.",
      lens: "Meena's praxis binds feminism to anti-imperialism: women's emancipation pursued not <em>after</em> national liberation but as its engine — schooling, publishing and clandestine organising as revolutionary infrastructure.",
      status: "documented",
      materials: [
        { kind: "text", title: "“I'll Never Return” — Meena's poem", date: "c. 1981",
          holder: "RAWA", url: "http://www.rawa.org/ill.htm",
          note: "Her best-known poem — return and refusal as feminist resistance; circulated by RAWA in Persian and in English translation." },
        { kind: "press", title: "Payam-e-Zan (“Women's Message”) — the magazine Meena founded", date: "1981 –",
          holder: "RAWA", url: "http://www.rawa.org/payam.html",
          note: "Bilingual organ of clandestine feminist politics, published continuously since 1981." },
        { kind: "film", title: "Footage: address to the French Socialist Party congress, Valence", date: "1981",
          holder: "RAWA (video archive)", url: "http://www.rawa.org", deepLink: false,
          note: "Meena carrying the Afghan women's resistance into a European political arena." }
      ],
      sources: [
        { publisher: "RAWA", title: "Biography of Martyred Meena, founding leader of RAWA", date: "rawa.org", url: "http://www.rawa.org/meena.html" },
        { publisher: "Melody Ermachild Chavis", title: "Meena: Heroine of Afghanistan (St. Martin's Press)", date: "2003", url: "https://us.macmillan.com", deepLink: false },
        { publisher: "TIME", title: "“60 Asian Heroes” — Meena (special issue; mirrored by RAWA)", date: "13 Nov 2006", url: "http://www.rawa.org/meena_time.htm" }
      ]
    },

    {
      id: "leila-khaled",
      type: "figure",
      name: "Leila Khaled",
      dates: "b. 1944",
      origin: 1944,
      theme: "antico",
      role: "PFLP militant · Haifa → Tyre → Amman",
      anchor: "left",
      places: [
        { label: "Haifa", lat: 32.7940, lng: 34.9896, precision: "exact",
          year: 1944, period: "b. 1944 · family expelled in the 1948 Nakba" },
        { label: "Tyre (Ṣūr)", lat: 33.2733, lng: 35.1939, precision: "exact",
          year: 1948, period: "refuge in Lebanon from 1948" },
        { label: "Amman", lat: 31.9539, lng: 35.9106, precision: "exact",
          year: 1967, period: "PFLP militancy from 1967 · long-time base" }
      ],
      annotation: "Born in Haifa in 1944 and driven into exile in Tyre, Lebanon, in the 1948 Nakba, Leila Khaled joined the Popular Front for the Liberation of Palestine and in August 1969 became the first woman to hijack an aircraft (TWA 840, diverted to Damascus; the passengers were released unharmed), directing the pilot over Haifa — the home she could not otherwise see. Detained in London after a second operation in September 1970 and released in a prisoner exchange, she remained a figure of the Palestinian national movement, serving on the Palestinian National Council. Her autobiography, <em>My People Shall Live</em>, appeared in 1973.",
      lens: "Khaled unsettled the gendered iconography of armed struggle — the 1969 photographs made a young woman the world's image of Palestinian resistance — while she insisted that women's liberation and national liberation are inseparable fronts of a single struggle.",
      status: "documented",
      materials: [
        { kind: "text", title: "My People Shall Live: The Autobiography of a Revolutionary", date: "1973",
          holder: "Hodder & Stoughton · Internet Archive", url: "https://archive.org", deepLink: false,
          note: "Exile, training and the 1969–70 operations, in her own voice." },
        { kind: "photo", title: "Eddie Adams' photograph of Leila Khaled", date: "1969",
          holder: "Associated Press (widely reproduced)", url: "https://www.theguardian.com", deepLink: false,
          note: "Kaffiyeh, rifle, and a ring made from a bullet and a grenade pin — the image that made a woman the icon of a national struggle." },
        { kind: "film", title: "Extended interviews on the operations and on women in the resistance", date: "2000s –",
          holder: "Al Jazeera", url: "https://www.aljazeera.com", deepLink: false,
          note: "Khaled reflecting on armed struggle, gender and iconhood." }
      ],
      sources: [
        { publisher: "Leila Khaled (ed. George Hajjar)", title: "My People Shall Live: The Autobiography of a Revolutionary (Hodder & Stoughton)", date: "1973", url: "https://archive.org", deepLink: false },
        { publisher: "Sarah Irving", title: "Leila Khaled: Icon of Palestinian Liberation (Pluto Press)", date: "2012", url: "https://www.plutobooks.com", deepLink: false }
      ]
    },

    {
      id: "sakine-cansiz",
      type: "figure",
      name: "Sakine Cansız",
      dates: "1958 – 2013",
      origin: 1958,
      theme: "femrev",
      role: "PKK co-founder · Dersim → Diyarbakır → Paris",
      anchor: "right",
      places: [
        { label: "Dersim (Tunceli)", lat: 39.1079, lng: 39.5401, precision: "exact",
          year: 1958, period: "b. 1958, Alevi-Kurdish Dersim" },
        { label: "Fis (Lice)", lat: 38.4589, lng: 40.6467, precision: "approx",
          year: 1978, period: "PKK founding meeting, 27 Nov 1978 — among the few women present" },
        { label: "Diyarbakır", lat: 37.9144, lng: 40.2306, precision: "exact",
          year: 1979, period: "military prison, 1979–1991 · resistance under torture" },
        { label: "Paris", lat: 48.8566, lng: 2.3522, precision: "exact",
          year: 2013, period: "assassinated with Fidan Doğan & Leyla Şaylemez, 9 Jan 2013" }
      ],
      annotation: "Born in Dersim (Tunceli) in 1958, Sakine Cansız — <em>Sara</em> — was a co-founder of the Kurdistan Workers' Party (PKK) at its 1978 founding meeting in the village of Fis, one of the few women present, and built its earliest women's organising. Arrested in 1979, she spent more than a decade in the Diyarbakır military prison, where her defiance under torture became legendary in the Kurdish movement. After her release she organised in the Kurdish diaspora in Europe. On 9 January 2013 she was assassinated with Fidan Doğan and Leyla Şaylemez at the Kurdish Information Centre in Paris — killings still not fully accounted for. Her memoir, <em>Sara: My Whole Life Was a Struggle</em>, was published posthumously.",
      lens: "Cansız's arc — party founding, prison resistance, diaspora organising — is the lineage claimed by today's Kurdish women's movement and its theory of women's autonomy (jineolojî), which holds women's liberation to be the measure of a free society.",
      status: "documented",
      materials: [
        { kind: "text", title: "Sara: My Whole Life Was a Struggle — memoir, 3 volumes", date: "Eng. trans. 2018–19",
          holder: "Pluto Press", url: "https://www.plutobooks.com", deepLink: false,
          note: "Founding the PKK, Diyarbakır prison, and building the women's movement — written clandestinely, in her own words." },
        { kind: "photo", title: "Founding-era and prison-era photographs (reproduced in the memoir)", date: "1970s – 1990s",
          holder: "Pluto Press", url: "https://www.plutobooks.com", deepLink: false,
          note: "The visual record of a woman inside a founding cadre." }
      ],
      sources: [
        { publisher: "Sakine Cansız", title: "Sara: My Whole Life Was a Struggle (Pluto Press, trans. Janet Biehl)", date: "2018", url: "https://www.plutobooks.com", deepLink: false },
        { publisher: "BBC News", title: "Three Kurdish women political activists shot dead in Paris", date: "10 Jan 2013", url: "https://www.bbc.com/news/world-europe-20968375" }
      ]
    },

    {
      id: "lorena-borjas",
      type: "figure",
      name: "Lorena Borjas",
      dates: "c. 1960 – 2020",
      origin: 1960,
      theme: "transq",
      role: "Trans Latinx community defender · Veracruz → Queens",
      anchor: "left",
      places: [
        { label: "Veracruz", lat: 19.1738, lng: -96.1342, precision: "exact",
          year: 1960, period: "b. c. 1960" },
        { label: "Jackson Heights, Queens", lat: 40.7557, lng: -73.8830, precision: "exact",
          year: 1981, period: "migrated 1981 · three decades of street-level mutual aid · d. 30 Mar 2020" }
      ],
      annotation: "Born in Veracruz, Mexico, around 1960, Lorena Borjas migrated to New York in 1981 and survived trafficking and criminalisation. From her apartment in Jackson Heights, Queens, she spent three decades building street-level infrastructure for transgender Latinas: HIV-testing nights, syringe exchange, court accompaniment, bail. In 2012 she co-founded the Lorena Borjas Community Fund to free trans women from criminal and immigration detention; in 2017 New York's governor pardoned her own trafficking-era conviction. She died of COVID-19 on 30 March 2020, mourned across the city as the mother of the trans Latinx community of Queens.",
      lens: "Borjas maps solidarity at the scale of the block: mutual aid as politics, chosen kinship as organisation — a trans, migrant, working-class praxis that widens WGSS beyond movement icons to the daily labour of keeping one another alive.",
      status: "documented",
      materials: [
        { kind: "doc", title: "Executive clemency granted to Lorena Borjas", date: "2017",
          holder: "Office of the Governor of New York", url: "https://www.governor.ny.gov", deepLink: false,
          note: "The state's own record of the pardon recognising her trafficking-era conviction as coerced." },
        { kind: "film", title: "Video profiles and interviews on the Jackson Heights work", date: "2010s",
          holder: "them · New York local press", url: "https://www.them.us", deepLink: false,
          note: "Borjas narrating the apartment-as-clinic: HIV testing, syringe exchange, accompaniment." },
        { kind: "doc", title: "“Lorena Borjas Way” — street co-naming record, Jackson Heights", date: "2021",
          holder: "New York City Council", url: "https://council.nyc.gov", deepLink: false,
          note: "The city's record of her name on the streets she organised." }
      ],
      sources: [
        { publisher: "The New York Times", title: "Lorena Borjas, Transgender Immigrant Activist, Dies at 59", date: "31 Mar 2020", url: "https://www.nytimes.com", deepLink: false },
        { publisher: "them", title: "Remembering Lorena Borjas, mother of the trans Latinx community of Queens", date: "2020", url: "https://www.them.us", deepLink: false }
      ]
    },

    {
      id: "claudia-jones",
      type: "figure",
      name: "Claudia Jones",
      dates: "1915 – 1964",
      origin: 1915,
      theme: "blackint",
      role: "Black communist feminist · Trinidad → Harlem → London",
      inquiry: "claudia-jones-bridge",
      anchor: "left",
      places: [
        { label: "Belmont, Port of Spain", lat: 10.6600, lng: -61.5167, precision: "exact",
          year: 1915, period: "b. 21 Feb 1915" },
        { label: "Harlem, New York", lat: 40.8116, lng: -73.9465, precision: "exact",
          year: 1924, period: "migrated 1924 · CPUSA leadership · Smith Act imprisonment" },
        { label: "Brixton, London", lat: 51.4613, lng: -0.1145, precision: "exact",
          year: 1955, period: "deported 1955 · West Indian Gazette (1958) · Caribbean Carnival (1959) · d. 1964" }
      ],
      annotation: "Born in Belmont, Port of Spain, in 1915, Claudia Jones migrated to Harlem as a child and rose to national leadership in the Communist Party USA. Her 1949 essay “An End to the Neglect of the Problems of the Negro Woman!” theorised the “superexploitation” of Black working women — race, class and gender as one interlocking system — decades before the vocabulary of intersectionality. Imprisoned under the McCarthy-era Smith Act and deported in 1955, she rebuilt in London: founding the <em>West Indian Gazette</em> (1958), Britain's first major Black newspaper, and the January 1959 Caribbean Carnival at St Pancras Town Hall — a defiant answer to the Notting Hill racist riots, in the lineage of today's Notting Hill Carnival. She died in December 1964 and is buried to the left of Karl Marx in Highgate Cemetery.",
      lens: "Jones is precisely the bridge this project asks about — US, Caribbean, UK: a Black feminist communism that theorised interlocking oppressions, turned deportation into diaspora infrastructure, and made a carnival an act of political defence.",
      status: "documented",
      materials: [
        { kind: "text", title: "“An End to the Neglect of the Problems of the Negro Woman!”", date: "Political Affairs, June 1949",
          holder: "Marxists Internet Archive — Claudia Jones archive", url: "https://www.marxists.org/archive/jones-claudia/",
          note: "The foundational essay: superexploitation and the triple oppression of Black working women." },
        { kind: "press", title: "West Indian Gazette and Afro-Asian Caribbean News", date: "1958 – 1965",
          holder: "British Library (holdings)", url: "https://www.bl.uk", deepLink: false,
          note: "Britain's first major Black newspaper — diaspora institution-building in print." },
        { kind: "text", title: "“The Caribbean Community in Britain”", date: "Freedomways, 1964",
          holder: "Freedomways · listed in the MIA Claudia Jones archive", url: "https://www.marxists.org/archive/jones-claudia/",
          note: "Her late statement on migration, racism and community defence." },
        { kind: "photo", title: "Photographs: the Gazette offices and the 1959 St Pancras Caribbean Carnival", date: "1958 – 1962",
          holder: "British Library · press archives", url: "https://www.bl.uk", deepLink: false,
          note: "Carnival as political defence, in images." }
      ],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx: The Political Life of Black Communist Claudia Jones (Duke University Press)", date: "2007", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "Claudia Jones", title: "“An End to the Neglect of the Problems of the Negro Woman!” — Political Affairs", date: "June 1949", url: "https://www.marxists.org/archive/jones-claudia/" },
        { publisher: "British Library", title: "Claudia Jones — people & collections", date: "bl.uk", url: "https://www.bl.uk", deepLink: false }
      ]
    },

    {
      id: "nemonte-nenquimo",
      type: "figure",
      name: "Nemonte Nenquimo",
      dates: "b. 1985",
      origin: 1985,
      theme: "indig",
      role: "Waorani leader · Ceibo Alliance · Pastaza",
      inquiry: "amazon-forest-women",
      anchor: "right",
      places: [
        { label: "Waorani territory, Pastaza", lat: -1.30, lng: -77.55, precision: "approx",
          year: 1985, period: "b. 1985, Nemonpare · territory of the Waorani of Pastaza" },
        { label: "Puyo", lat: -1.4924, lng: -77.9995, precision: "exact",
          year: 2019, period: "lead plaintiff in the April 2019 ruling protecting ~500,000 acres from oil auction" }
      ],
      annotation: "A Waorani leader born in Nemonpare, in the Ecuadorian Amazon (Pastaza), in 1985, Nemonte Nenquimo co-founded the Indigenous-led Ceibo Alliance with A'i Kofán, Siona and Siekopai partners and became the first woman to lead CONCONAWEP, the Waorani organisation of Pastaza. In 2019 she was lead plaintiff in the lawsuit that saw a Pastaza court protect roughly half a million acres of Waorani territory from oil auction — a precedent for Indigenous consent. She received the Goldman Environmental Prize and was named to the TIME 100 in 2020; her memoir <em>We Will Not Be Saved</em> appeared in 2024.",
      lens: "Nenquimo fronts an Indigenous feminism in which the defence of territory and the defence of life are one politics — argued in court, at climate summits and in print, and organised through women-led alliance across peoples.",
      status: "documented",
      materials: [
        { kind: "text", title: "“This is my message to the western world — your civilisation is killing life on Earth”", date: "The Guardian, October 2020",
          holder: "The Guardian", url: "https://www.theguardian.com", deepLink: false,
          note: "Her open letter to the Global North — an Indigenous feminist address in the first person." },
        { kind: "text", title: "We Will Not Be Saved — memoir (with Mitch Anderson)", date: "2024",
          holder: "Abrams Press", url: "https://www.abramsbooks.com", deepLink: false,
          note: "Growing up Waorani, mission schooling, and the road to the 2019 victory." },
        { kind: "doc", title: "Waorani of Pastaza v. Ecuador — 2019 ruling and campaign record", date: "2019",
          holder: "Amazon Frontlines · Ceibo Alliance", url: "https://amazonfrontlines.org", deepLink: false,
          note: "The legal filings and campaign that protected ~500,000 acres from oil auction." },
        { kind: "film", title: "Goldman Environmental Prize profile film", date: "2020",
          holder: "Goldman Environmental Prize", url: "https://www.goldmanprize.org/recipient/nemonte-nenquimo/",
          note: "Her leadership told through the prize's documentary short." }
      ],
      sources: [
        { publisher: "Goldman Environmental Prize", title: "Nemonte Nenquimo — 2020 Prize recipient, South & Central America", date: "2020", url: "https://www.goldmanprize.org/recipient/nemonte-nenquimo/" },
        { publisher: "Amazon Frontlines / Ceibo Alliance", title: "The Waorani legal victory and the Ceibo Alliance", date: "2019", url: "https://amazonfrontlines.org", deepLink: false },
        { publisher: "Abrams Press", title: "We Will Not Be Saved (Nemonte Nenquimo with Mitch Anderson)", date: "2024", url: "https://www.abramsbooks.com", deepLink: false }
      ]
    },

    {
      id: "helena-gualinga",
      type: "figure",
      name: "Helena Gualinga",
      dates: "b. 2002",
      origin: 2002,
      theme: "indig",
      role: "Kichwa Sarayaku advocate · climate justice",
      inquiry: "amazon-forest-women",
      anchor: "left",
      places: [
        { label: "Sarayaku", lat: -1.7400, lng: -77.4870, precision: "approx",
          year: 2002, period: "b. 2002 · Kichwa community on the Bobonaza river, Pastaza" }
      ],
      annotation: "Born in 2002 in Sarayaku — the Kichwa community on the Bobonaza river whose case against Ecuador, <em>Sarayaku v. Ecuador</em> (Inter-American Court, 2012), became a landmark on Indigenous consultation — Helena Gualinga grew up inside a family of women land-defenders, between the Amazon and Finland. She has carried Sarayaku's <em>Kawsak Sacha</em> (“Living Forest”) politics into international climate arenas: COP summits, youth coalitions, and the co-founding of Polluters Out in 2020, insisting that the frontline of climate justice is Indigenous territory and that its defenders are, disproportionately, women.",
      lens: "With Nenquimo, Gualinga makes Amazonia a node of transnational feminist climate politics — and shows generational transmission (a lineage of Sarayaku women defenders) working as a solidarity technology in its own right.",
      status: "documented",
      materials: [
        { kind: "doc", title: "Kawsak Sacha — the Living Forest declaration", date: "2018",
          holder: "Kichwa People of Sarayaku", url: "https://sarayaku.org", deepLink: false,
          note: "Sarayaku's juridical-cosmological proposal for the forest as a living, rights-bearing entity." },
        { kind: "doc", title: "Sarayaku v. Ecuador — judgment of the Inter-American Court", date: "27 June 2012",
          holder: "Inter-American Court of Human Rights", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf",
          note: "The landmark consultation ruling won by her community — the ground she organises from." },
        { kind: "film", title: "Speeches and interventions at UN climate summits", date: "2019 – 2022",
          holder: "UNFCCC · press coverage", url: "https://www.reuters.com", deepLink: false,
          note: "COP25–COP27: Indigenous youth addressing the carbon order." }
      ],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Kichwa Indigenous People of Sarayaku v. Ecuador — judgment of 27 June 2012", date: "2012", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" },
        { publisher: "Reuters", title: "Profile & climate-summit reporting on Helena Gualinga", date: "2019–2023", url: "https://www.reuters.com", deepLink: false }
      ]
    },

    /* ------------------------------ MOVEMENTS ------------------------------ */

    {
      id: "rawa",
      type: "movement",
      name: "RAWA",
      dates: "f. 1977",
      origin: 1977,
      theme: "femrev",
      role: "Revolutionary Association of the Women of Afghanistan",
      inquiry: "rawa-under-occupation",
      anchor: "left",
      places: [
        { label: "Kabul", lat: 34.5553, lng: 69.2075, precision: "exact",
          year: 1977, period: "founded 1977 by Meena and fellow students" },
        { label: "Quetta", lat: 30.1798, lng: 66.9750, precision: "exact",
          year: 1980, period: "exile base from the early 1980s — Watan schools, clinics, Payam-e-Zan" },
        { label: "Peshawar", lat: 34.0151, lng: 71.5249, precision: "exact",
          year: 1982, period: "organising among Afghan refugees, 1980s –" }
      ],
      annotation: "Founded in Kabul in 1977 by Meena and fellow students, the Revolutionary Association of the Women of Afghanistan is the country's oldest women's political organisation. Driven into exile after the Soviet invasion, it built clandestine literacy classes inside Afghanistan and schools, orphanages and clinics among refugees in Quetta and Peshawar, publishing <em>Payam-e-Zan</em> continuously. Under Taliban rule its members documented atrocities at great risk — including the 1999 execution of Zarmeena in Kabul's Ghazi Stadium, filmed secretly with a camera hidden under a burqa and circulated worldwide. RAWA remains active, and clandestine, today.",
      lens: "RAWA is the project's first research question made flesh: transnational feminist solidarity under occupation — witness-bearing, education and cross-border publication as a durable web, sustained by women through every regime that tried to close politics to them.",
      status: "documented",
      materials: [
        { kind: "film", title: "Clandestine footage of the execution of Zarmeena, Ghazi Stadium, Kabul", date: "November 1999",
          holder: "RAWA", url: "http://www.rawa.org/zarmeena.htm",
          note: "Filmed beneath a burqa at mortal risk — the footage that showed the world the Taliban's public executions of women. Viewer discretion." },
        { kind: "press", title: "Payam-e-Zan (“Women's Message”) — the magazine Meena founded", date: "1981 –",
          holder: "RAWA", url: "http://www.rawa.org/payam.html",
          note: "Bilingual organ of clandestine feminist politics, published continuously since 1981." },
        { kind: "doc", title: "RAWA statements & documents archive", date: "1977 –",
          holder: "RAWA", url: "http://www.rawa.org", deepLink: false,
          note: "Communiqués, reports and appeals across four decades of clandestine feminist politics." }
      ],
      sources: [
        { publisher: "RAWA", title: "About RAWA — aims, history and publications", date: "rawa.org", url: "http://www.rawa.org/rawa.html" },
        { publisher: "Anne E. Brodsky", title: "With All Our Strength: The Revolutionary Association of the Women of Afghanistan (Routledge)", date: "2003", url: "https://www.routledge.com", deepLink: false }
      ]
    },

    {
      id: "twlf",
      type: "movement",
      name: "Third World Liberation Front",
      dates: "1968 – 1969",
      origin: 1968,
      theme: "coalition",
      role: "Student coalition · SF State & UC Berkeley strikes",
      anchor: "left",
      places: [
        { label: "San Francisco State", lat: 37.7219, lng: -122.4784, precision: "exact",
          year: 1968, period: "strike, 6 Nov 1968 – 20 Mar 1969 — the longest student strike in U.S. history" },
        { label: "UC Berkeley", lat: 37.8719, lng: -122.2585, precision: "exact",
          year: 1969, period: "second TWLF strike, Jan–Mar 1969 → Department of Ethnic Studies" }
      ],
      annotation: "A coalition of the Black Student Union, the Latin American Students Organization, the Pilipino-American Collegiate Endeavor, the Asian American Political Alliance and allied groups, the Third World Liberation Front led the November 1968 – March 1969 strike at San Francisco State — the longest student strike in U.S. history — and a companion strike at UC Berkeley in 1969. It won the first College of Ethnic Studies in the United States and reshaped whose knowledge a public university must teach. The name declared its politics: Third World solidarity, practised on campus.",
      lens: "TWLF built the coalition form — distinct communities in disciplined alliance — and its institutional victory, ethnic studies, became a home where women-of-colour feminisms could later be theorised and taught: solidarity infrastructure with a curricular afterlife.",
      status: "documented",
      materials: [
        { kind: "doc", title: "The strike demands (BSU & TWLF — the fifteen demands)", date: "1968",
          holder: "SF State Strike Collection, SFSU Library", url: "https://library.sfsu.edu", deepLink: false,
          note: "Open admissions and a School of Ethnic Studies — the coalition's programme in its own words." },
        { kind: "photo", title: "Strike photographs, leaflets and movement newspapers", date: "1968 – 69",
          holder: "SF State Strike Collection, SFSU Library", url: "https://library.sfsu.edu", deepLink: false,
          note: "The visual and print record of the longest student strike in U.S. history." },
        { kind: "film", title: "Oral histories of strike participants", date: "collected 1990s – 2010s",
          holder: "SFSU Library · UC Berkeley Ethnic Studies", url: "https://library.sfsu.edu", deepLink: false,
          note: "Participants — including women organisers often sidelined in memory — narrating the coalition." }
      ],
      sources: [
        { publisher: "San Francisco State University Library", title: "San Francisco State College Strike Collection", date: "library.sfsu.edu", url: "https://library.sfsu.edu", deepLink: false },
        { publisher: "UC Berkeley Department of Ethnic Studies", title: "Department history — the 1969 Third World Liberation Front strike", date: "berkeley.edu", url: "https://ethnicstudies.berkeley.edu", deepLink: false }
      ]
    },

    {
      id: "paigc",
      type: "movement",
      name: "PAIGC",
      dates: "f. 1956",
      origin: 1956,
      theme: "antico",
      role: "African Party for the Independence of Guinea & Cabo Verde",
      anchor: "left",
      places: [
        { label: "Bissau", lat: 11.8637, lng: -15.5982, precision: "exact",
          year: 1956, period: "founded 19 Sep 1956 by Amílcar Cabral and comrades" },
        { label: "Conakry", lat: 9.6412, lng: -13.5784, precision: "exact",
          year: 1960, period: "exile headquarters from 1960 · Cabral assassinated here, 20 Jan 1973" },
        { label: "Madina do Boé", lat: 11.7500, lng: -14.2167, precision: "approx",
          year: 1973, period: "unilateral declaration of independence, 24 Sep 1973" }
      ],
      annotation: "Founded in Bissau in 1956 by Amílcar Cabral and comrades, the African Party for the Independence of Guinea and Cabo Verde waged the armed liberation struggle (1963–74) that broke Portuguese colonial rule, declaring independence at Boé in September 1973. Women's participation was written into its revolution: village councils in the liberated zones were required to include women, and militants such as Titina Silá — killed crossing the Farim river in January 1973, commemorated each 30 January as Guinea-Bissau's National Women's Day — and Carmen Pereira held command and state responsibility. Stephanie Urdang's study of the movement took its title from the party's own claim: women were fighting two colonialisms.",
      lens: "The PAIGC embeds the gender question inside anti-colonial strategy itself — quotas in liberated-zone governance, women commanders, a national day for a fallen woman fighter: solidarity as statecraft-in-formation.",
      status: "documented",
      materials: [
        { kind: "text", title: "“Tell no lies, claim no easy victories” — party directive", date: "1965",
          holder: "Marxists Internet Archive (archival text)", url: "https://www.marxists.org/subject/africa/cabral/1965/tnlcnev.htm",
          note: "Verbatim: “Tell no lies. Expose lies whenever they are told. Mask no difficulties, mistakes, failures. Claim no easy victories.” Method as ethics." },
        { kind: "doc", title: "Amílcar Cabral archive — papers, photographs, party documents", date: "1956 – 1973",
          holder: "Fundação Mário Soares · Casa Comum", url: "https://casacomum.org", deepLink: false,
          note: "Digitised PAIGC records, including images of women militants in the liberated zones." }
      ],
      sources: [
        { publisher: "Stephanie Urdang", title: "Fighting Two Colonialisms: Women in Guinea-Bissau (Monthly Review Press)", date: "1979", url: "https://monthlyreview.org", deepLink: false },
        { publisher: "Amílcar Cabral", title: "Unity and Struggle: Speeches and Writings", date: "1979 (posth.)", url: "https://www.marxists.org", deepLink: false }
      ]
    }

  ],

  /* Documented inter-node ties. `year` is reveal metadata for the timeline. */
  ties: [
    {
      a: "meena-keshwar-kamal", b: "rawa",
      kind: "Founder",
      year: 1977,
      note: "Meena founded RAWA in Kabul in 1977 and led it until her assassination in 1987."
    },
    {
      a: "nemonte-nenquimo", b: "helena-gualinga",
      kind: "Shared front",
      year: 2019,
      note: "Two generations of Amazonian Indigenous women from Pastaza carrying territorial defence into global climate politics — paired in this project's research design."
    }
  ]
};
