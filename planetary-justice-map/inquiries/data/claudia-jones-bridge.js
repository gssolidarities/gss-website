/*
 * GSS ANARCHIVE — Planetary Justice Map · Inquiry II
 * "Left of Marx, South of Empire" — scene data for the scroll-driven inquiry.
 *
 * This inquiry answers the project's second research question:
 *   How did figures like Claudia Jones, whose work bridged feminism, Black
 *   liberation, and communism, theorize the intersections of oppression to
 *   build bridges between movements in the US, Caribbean, and UK?
 *
 * INTEGRITY: factual scenes are sourced; the closing scene is flagged
 * reading:true and rendered under an explicit interpretive label.
 * Sub-landmark coordinates are flagged precision:"approx".
 */

window.GSS_INQUIRY = {

  meta: {
    code: "PJM-INQ-02",
    n: "II",
    version: "1.0.0",
    updated: "2026-07-06",
    label: "Inquiry II · Gendered Networks of Revolutionary Solidarity",
    title: "Left of Marx, South of Empire",
    standfirst: "Claudia Jones theorised the interlocking oppression of Black working women decades before the word for it existed — then turned her own deportation into diaspora infrastructure across three continents.",
    location: "Port of Spain · Harlem · London",
    period: "1915 – 1964",
    axis: { start: "1914-01-01", end: "1966-01-01", tail: "→ legacy" }
  },

  kinds: {
    focus: { color: "#9d7bd8" },
    site:  { color: "#d9b36b" },
    voice: { color: "#e0637f" },
    law:   { color: "#e8985a" },
    press: { color: "#6fbf8f" }
  },

  scenes: [

    {
      id: "question",
      chapter: "The question",
      date: "1915 – 1964",
      iso: "1915-02-21",
      title: "How does one life bridge three movements on three continents?",
      body: "Claudia Jones is buried to the left of Karl Marx in London's Highgate Cemetery — a Trinidadian woman, raised in Harlem, deported by the United States, remade in Britain. Her life connects Caribbean anti-colonialism, Black liberation and communist feminism into a single political arc. This inquiry follows that arc and asks the project's second research question: how did Jones <em>theorise the intersections of oppression</em>, and how did that theory become practical bridge-building between movements in the US, the Caribbean and the UK?",
      camera: { center: [-40, 30], zoom: 2.2, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -61.5167, lat: 10.6600, label: "Port of Spain", kind: "focus", precision: "exact" },
        { lng: -73.9465, lat: 40.8116, label: "Harlem", kind: "focus", precision: "exact" },
        { lng: -0.1145, lat: 51.4613, label: "London", kind: "focus", precision: "exact" }
      ],
      route: [[-61.5167, 10.6600], [-73.9465, 40.8116], [-30, 48], [-0.1145, 51.4613]],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx: The Political Life of Black Communist Claudia Jones (Duke University Press, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" }
      ]
    },

    {
      id: "belmont",
      chapter: "I — Belmont, 1915",
      date: "21 February 1915",
      iso: "1915-02-21",
      title: "A colonial childhood",
      body: "Claudia Vera Cumberbatch was born in Belmont, Port of Spain, in 1915, in a Trinidad governed as a British colony. Her family joined the Caribbean migration to New York in 1924, part of the movement of people that would later make her politics literal: she carried the Caribbean with her into Harlem, and Harlem's radicalism back out to the Caribbean diaspora. Empire, migration and race were not topics she studied; they were the biographical facts she would spend a life theorising.",
      camera: { center: [-61.5167, 10.6600], zoom: 10.6, pitch: 40, bearing: 0 },
      basemap: "dark",
      markers: [{ lng: -61.5167, lat: 10.6600, label: "Belmont, Port of Spain — b. 1915", kind: "focus", precision: "exact" }],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "British Library", title: "Claudia Jones — people & collections", url: "https://www.bl.uk", deepLink: false }
      ]
    },

    {
      id: "harlem",
      chapter: "II — Harlem",
      date: "1924 – 1936",
      iso: "1924-06-01",
      title: "Scottsboro makes a communist",
      body: "Harlem in the 1930s was a school of politics. Like many of her generation, Jones was radicalised by the defence campaign for the <strong>Scottsboro Nine</strong> — nine Black teenagers falsely accused in Alabama, whose case the communist movement carried worldwide. She joined the Young Communist League in 1936 and rose fast: editor, organiser, and eventually the CPUSA's leading voice on what it called “the woman question” and “the Negro question” — two questions she would insist were one.",
      camera: { center: [-73.9465, 40.8116], zoom: 11.8, pitch: 45, bearing: -10 },
      basemap: "dark",
      markers: [{ lng: -73.9465, lat: 40.8116, label: "Harlem — YCL 1936, CPUSA leadership", kind: "focus", precision: "exact" }],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "Marxists Internet Archive", title: "Claudia Jones — author archive", url: "https://www.marxists.org/archive/jones-claudia/" }
      ]
    },

    {
      id: "essay",
      chapter: "III — The theory",
      date: "June 1949",
      iso: "1949-06-01",
      title: "“An End to the Neglect of the Problems of the Negro Woman!”",
      body: "In June 1949, in the party journal <em>Political Affairs</em>, Jones published the essay this inquiry pivots on. Its argument: Black working women stand where race, class and sex <em>interlock</em> — subject to what she called the “superexploitation” of doing the lowest-paid work of an economy that is at once capitalist, racist and patriarchal — and therefore their leadership is not a courtesy but a strategic necessity for every liberation movement at once. Four decades before “intersectionality” entered the lexicon, Jones had built the analytical machine and pointed it at her own party's neglect.",
      camera: { center: [-73.99, 40.73], zoom: 10.8, pitch: 35, bearing: 8 },
      basemap: "dark",
      markers: [{ lng: -73.9465, lat: 40.8116, label: "Harlem — Political Affairs essay, 1949", kind: "voice", precision: "exact" }],
      sources: [
        { publisher: "Claudia Jones", title: "“An End to the Neglect of the Problems of the Negro Woman!” — Political Affairs, June 1949", url: "https://www.marxists.org/archive/jones-claudia/" },
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" }
      ]
    },

    {
      id: "smith-act",
      chapter: "IV — The state answers",
      date: "1948 – 1955",
      iso: "1951-06-01",
      title: "McCarthyism versus a Black communist woman",
      body: "The United States answered her theory with prosecution. Arrested repeatedly from 1948, Jones was convicted in 1953 under the Smith Act — for teaching and advocating communism, with her 1949 writing entered against her — and served her sentence at the federal women's prison in Alderson, West Virginia, in 1955. The state's logic was its own confirmation of hers: a Caribbean migrant woman theorising at the intersection of empire, race and class was treated as a threat at precisely that intersection — punished as a communist, surveilled as Black, and deportable as a colonial subject.",
      camera: { center: [-79.0, 39.4], zoom: 6.2, pitch: 30, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -73.9465, lat: 40.8116, label: "New York — Smith Act trial", kind: "law", precision: "exact" },
        { lng: -80.6404, lat: 37.7257, label: "Alderson, WV — federal prison, 1955", kind: "law", precision: "exact" }
      ],
      route: [[-73.9465, 40.8116], [-80.6404, 37.7257]],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" }
      ]
    },

    {
      id: "deportation",
      chapter: "V — Deportation",
      date: "December 1955",
      iso: "1955-12-09",
      title: "Expelled — towards a third continent",
      body: "In December 1955 the United States deported Jones. Trinidad's colonial administration did not want her back; Britain, whose subject she legally was, admitted her. The intended punishment — severance from her movement — became instead the third span of the bridge. She arrived in London in the middle of the Windrush-era Caribbean migration, a community facing the colour bar in housing and work, and she did what she had always done: found the point where oppressions interlock, and organised there.",
      camera: { center: [-35, 45], zoom: 2.8, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -73.9465, lat: 40.8116, label: "New York — deported 1955", kind: "law", precision: "exact" },
        { lng: -0.1145, lat: 51.4613, label: "London — arrival", kind: "focus", precision: "exact" }
      ],
      route: [[-73.9465, 40.8116], [-30, 48], [-0.1145, 51.4613]],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "British Library", title: "Claudia Jones — people & collections", url: "https://www.bl.uk", deepLink: false }
      ]
    },

    {
      id: "gazette",
      chapter: "VI — The press",
      date: "March 1958",
      iso: "1958-03-01",
      title: "The West Indian Gazette: a newspaper as an institution",
      body: "In March 1958, from an office above a record shop in Brixton, Jones founded the <strong>West Indian Gazette and Afro-Asian Caribbean News</strong> — Britain's first major Black newspaper. The masthead's full name is the theory in print: <em>West Indian</em> and <em>Afro-Asian</em>, a single readership assembled from everyone the empire had moved. The Gazette reported the colour bar, connected Caribbean independence movements to Black Britain, and gave a scattered community the infrastructure of a public: news, argument, and one another.",
      camera: { center: [-0.1145, 51.4613], zoom: 12.4, pitch: 45, bearing: -6 },
      basemap: "dark",
      markers: [{ lng: -0.1145, lat: 51.4613, label: "Brixton — West Indian Gazette, 1958", kind: "press", precision: "exact" }],
      sources: [
        { publisher: "British Library", title: "West Indian Gazette and Afro-Asian Caribbean News (holdings)", url: "https://www.bl.uk", deepLink: false },
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" }
      ]
    },

    {
      id: "carnival",
      chapter: "VII — The answer to the riots",
      date: "August 1958 – January 1959",
      iso: "1959-01-30",
      title: "Carnival as political defence",
      body: "In August and September 1958, white mobs attacked Caribbean residents in Notting Hill. Jones's response, organised through the Gazette, was the <strong>Caribbean Carnival</strong> of 30 January 1959 at St Pancras Town Hall — indoors, in winter, televised by the BBC — with further carnivals in the years after. (That May, the murder of Kelso Cochrane in Notting Hill would confirm what the community already knew about the stakes.) The carnival answered racist terror with organised Caribbean joy in a defended public space — an act of cultural politics in the lineage that leads to today's Notting Hill Carnival.",
      camera: { center: [-0.16, 51.52], zoom: 12.2, pitch: 50, bearing: 10 },
      basemap: "dark",
      markers: [
        { lng: -0.1237, lat: 51.5299, label: "St Pancras Town Hall — Caribbean Carnival, Jan 1959", kind: "voice", precision: "exact" },
        { lng: -0.1963, lat: 51.5090, label: "Notting Hill — 1958 riots", kind: "law", precision: "exact" }
      ],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "British Library", title: "Claudia Jones — people & collections", url: "https://www.bl.uk", deepLink: false }
      ]
    },

    {
      id: "highgate",
      chapter: "VIII — Left of Marx",
      date: "December 1964",
      iso: "1964-12-24",
      title: "The grave that names the argument",
      body: "Jones died in London in December 1964, aged forty-nine, her health broken by prisons and poverty. She was buried in Highgate Cemetery, immediately to the left of Karl Marx — the accident of a burial plot that Carole Boyce Davies turned into the precise title of her study: <em>Left of Karl Marx</em>. The placement reads as an argument. Jones's communism stood to the left of the tradition itself: it added what the tradition had neglected — the Black working woman as the test of every theory of liberation.",
      camera: { center: [-0.1483, 51.5675], zoom: 13.4, pitch: 45, bearing: 0 },
      basemap: "satellite",
      markers: [{ lng: -0.1483, lat: 51.5675, label: "Highgate Cemetery — buried left of Marx", kind: "site", precision: "approx" }],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" }
      ]
    },

    {
      id: "reading",
      chapter: "IX — Reading",
      date: "The bridge",
      iso: null,
      reading: true,
      title: "What Jones teaches about theorising intersections",
      body: "The inquiry's question has a two-part answer. <strong>The theory:</strong> Jones located the point where race, class and sex interlock — the superexploited Black working woman — and argued that whoever stands at that point must lead, because winning there wins everywhere. <strong>The bridge:</strong> every institution she built put the theory to work across borders — a party position bridging Black liberation and communism in the US; a newspaper bridging the Caribbean, Africa and Asia in Britain; a carnival bridging culture and defence in a rioted neighbourhood. For WGSS, Jones shows intersectional analysis as it was first built: not a classroom vocabulary but a <em>travelling practice</em> — theorised in Harlem, punished by Washington, and rebuilt as diaspora infrastructure in London.",
      camera: { center: [-40, 30], zoom: 2.2, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -61.5167, lat: 10.6600, label: "Port of Spain", kind: "focus", precision: "exact" },
        { lng: -73.9465, lat: 40.8116, label: "Harlem", kind: "focus", precision: "exact" },
        { lng: -0.1145, lat: 51.4613, label: "London", kind: "focus", precision: "exact" }
      ],
      route: [[-61.5167, 10.6600], [-73.9465, 40.8116], [-30, 48], [-0.1145, 51.4613]],
      sources: [
        { publisher: "Carole Boyce Davies", title: "Left of Karl Marx (Duke UP, 2007)", url: "https://www.dukeupress.edu/left-of-karl-marx" },
        { publisher: "Claudia Jones", title: "“An End to the Neglect of the Problems of the Negro Woman!” (1949)", url: "https://www.marxists.org/archive/jones-claudia/" }
      ]
    }

  ]
};
