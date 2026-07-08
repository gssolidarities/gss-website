/*
 * GSS ANARCHIVE — Planetary Justice Map · Story Map III
 * "The Forest Speaks in Women's Voices" — scene data for the interactive story map.
 *
 * This story map answers the project's third research question:
 *   How do contemporary figures like Nemonte Nenquimo and Helena Gualinga
 *   foreground Indigenous feminisms in their global climate justice advocacy,
 *   creating new models of cross-border solidarity?
 *
 * INTEGRITY: factual scenes are sourced; the closing scene is flagged
 * reading:true and rendered under an explicit interpretive label. The Guardian
 * headline is quoted verbatim; letter content is paraphrased (not quoted) as
 * the full text is pending link verification. Village/territory coordinates
 * are flagged precision:"approx".
 */

window.GSS_INQUIRY = {

  meta: {
    code: "PJM-ISM-03",
    n: "III",
    version: "1.1.0",
    updated: "2026-07-06",
    label: "Story Map III · Gendered Networks of Revolutionary Solidarity",
    title: "The Forest Speaks in Women's Voices",
    standfirst: "From Sarayaku's courtroom victory to the Waorani ruling to the world's climate summits: two generations of Amazonian Indigenous women building new models of cross-border solidarity.",
    location: "Pastaza, Ecuadorian Amazon · San José · Madrid",
    period: "1996 – today",
    axis: { start: "1995-01-01", end: "2026-01-01", tail: "→ ongoing" }
  },

  kinds: {
    focus: { color: "#6fbf8f" },
    site:  { color: "#d9b36b" },
    voice: { color: "#e0637f" },
    law:   { color: "#9d7bd8" },
    camp:  { color: "#5db8e8" }
  },

  scenes: [

    {
      id: "question",
      chapter: "The question",
      date: "1996 – today",
      iso: "1996-06-01",
      title: "What new models of solidarity are being built from the forest?",
      body: "In the Ecuadorian Amazon's Pastaza province, two Indigenous nations a river apart have produced two generations of women who changed how the world argues about climate: the Kichwa of <strong>Sarayaku</strong> and the <strong>Waorani</strong> of Pastaza. This story map follows their instruments — a human-rights court, a cosmological declaration, a provincial lawsuit, an open letter, the world's climate summits — and asks the project's third research question: how do Nemonte Nenquimo and Helena Gualinga <em>foreground Indigenous feminisms</em> in global climate-justice advocacy, and what new models of cross-border solidarity result?",
      camera: { center: [-77.7, -1.55], zoom: 8.2, pitch: 30, bearing: 0 },
      basemap: "satellite",
      markers: [
        { lng: -77.4870, lat: -1.7400, label: "Sarayaku", kind: "focus", precision: "approx" },
        { lng: -77.55, lat: -1.30, label: "Waorani territory, Pastaza", kind: "focus", precision: "approx" }
      ],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Kichwa Indigenous People of Sarayaku v. Ecuador — judgment of 27 June 2012", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" },
        { publisher: "Goldman Environmental Prize", title: "Nemonte Nenquimo — 2020 Prize recipient", url: "https://www.goldmanprize.org/recipient/nemonte-nenquimo/" }
      ]
    },

    {
      id: "concession",
      chapter: "I — The concession",
      date: "1996 – 2003",
      iso: "1996-07-26",
      title: "Sarayaku: oil arrives without asking",
      body: "In 1996 Ecuador granted an oil concession covering much of Sarayaku's territory to the CGC consortium — without consulting the community that lived there. When seismic crews entered in 2002–03 they placed high explosives across the forest, some of which remain in the ground. Sarayaku's refusal became one of the hemisphere's defining consultation struggles, and it was carried in significant part by the community's women — a generation of leaders into which Helena Gualinga was born, in 2002, as the conflict began.",
      camera: { center: [-77.4870, -1.7400], zoom: 10.6, pitch: 45, bearing: -8 },
      basemap: "satellite",
      markers: [{ lng: -77.4870, lat: -1.7400, label: "Sarayaku — CGC concession block", kind: "site", precision: "approx" }],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Sarayaku v. Ecuador — judgment of 27 June 2012 (findings of fact)", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" }
      ]
    },

    {
      id: "iacthr",
      chapter: "II — The court",
      date: "27 June 2012",
      iso: "2012-06-27",
      title: "San José: the forest wins a hemispheric precedent",
      body: "Sixteen years after the concession, the Inter-American Court of Human Rights ruled in <em>Kichwa Indigenous People of Sarayaku v. Ecuador</em> that the state had violated the community's right to prior, free and informed consultation. The Court had travelled to Sarayaku itself — an almost unprecedented site visit — and its judgment became a continental landmark for Indigenous consent. The case taught a generation of Amazonian communities, and the children raised inside it, that international law is a terrain of struggle that can be won.",
      camera: { center: [-84.0907, 9.9281], zoom: 5.4, pitch: 30, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -84.0907, lat: 9.9281, label: "San José — Inter-American Court, 2012", kind: "law", precision: "exact" },
        { lng: -77.4870, lat: -1.7400, label: "Sarayaku", kind: "focus", precision: "approx" }
      ],
      route: [[-77.4870, -1.7400], [-81.5, 3.5], [-84.0907, 9.9281]],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Sarayaku v. Ecuador — judgment of 27 June 2012", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" }
      ]
    },

    {
      id: "kawsak",
      chapter: "III — The declaration",
      date: "2018",
      iso: "2018-07-01",
      title: "Kawsak Sacha: the Living Forest as a legal proposal",
      body: "Sarayaku did not stop at defence. In 2018 the community formally launched <strong>Kawsak Sacha</strong> — “the Living Forest” — a declaration proposing its territory be recognised as a living, conscious, rights-bearing entity: a juridical category built from Kichwa cosmology rather than borrowed from conservation law. It is a distinct mode of politics: not only resisting extraction, but exporting a concept — asking the world's law to expand until it can see what the forest's people already know.",
      camera: { center: [-77.4870, -1.7400], zoom: 11.4, pitch: 50, bearing: 6 },
      basemap: "satellite",
      markers: [{ lng: -77.4870, lat: -1.7400, label: "Sarayaku — Kawsak Sacha declaration", kind: "voice", precision: "approx" }],
      sources: [
        { publisher: "Kichwa People of Sarayaku", title: "Kawsak Sacha — the Living Forest declaration (2018)", url: "https://sarayaku.org", deepLink: false }
      ]
    },

    {
      id: "waorani",
      chapter: "IV — The lawsuit",
      date: "26 April 2019",
      iso: "2019-04-26",
      title: "Puyo: half a million acres, and a precedent for consent",
      body: "A river-system away, the Waorani of Pastaza — organised in CONCONAWEP under <strong>Nemonte Nenquimo</strong>, its first woman leader, with the multi-nation Ceibo Alliance she co-founded — sued to stop their territory being auctioned for oil. In April 2019 a Pastaza court ruled the state's “consultation” had been a sham, protecting roughly half a million acres and setting a precedent for Ecuador's other blocks. The image that travelled the world was precise: Waorani women singing in a provincial courtroom, and winning.",
      camera: { center: [-77.9995, -1.4924], zoom: 10.8, pitch: 45, bearing: -6 },
      basemap: "satellite",
      markers: [
        { lng: -77.9995, lat: -1.4924, label: "Puyo — Waorani ruling, 26 Apr 2019", kind: "law", precision: "exact" },
        { lng: -77.55, lat: -1.30, label: "Waorani territory", kind: "focus", precision: "approx" }
      ],
      route: [[-77.55, -1.30], [-77.9995, -1.4924]],
      sources: [
        { publisher: "Goldman Environmental Prize", title: "Nemonte Nenquimo — 2020 Prize recipient", url: "https://www.goldmanprize.org/recipient/nemonte-nenquimo/" },
        { publisher: "Amazon Frontlines / Ceibo Alliance", title: "The Waorani legal victory (2019)", url: "https://amazonfrontlines.org", deepLink: false }
      ]
    },

    {
      id: "letter",
      chapter: "V — The letter",
      date: "October 2020",
      iso: "2020-10-12",
      title: "“This is my message to the western world — your civilisation is killing life on Earth”",
      body: "In October 2020, as the Goldman Prize and the TIME 100 turned cameras toward her, Nenquimo published an open letter in <em>The Guardian</em> under that verbatim headline. The form matters as much as the argument: a Waorani woman addressing “the western world” directly, in the first person, as its teacher rather than its victim — inverting who explains and who listens. Her memoir <em>We Will Not Be Saved</em> (2024, with Mitch Anderson) extends the gesture to book length; its title does the same inversion in four words.",
      camera: { center: [-77.7, -1.4], zoom: 8.6, pitch: 35, bearing: 0 },
      basemap: "satellite",
      markers: [{ lng: -77.55, lat: -1.30, label: "Waorani territory — the letter's address", kind: "voice", precision: "approx" }],
      sources: [
        { publisher: "The Guardian", title: "“This is my message to the western world — your civilisation is killing life on Earth” (12 Oct 2020)", url: "https://www.theguardian.com", deepLink: false },
        { publisher: "Abrams Press", title: "We Will Not Be Saved (2024)", url: "https://www.abramsbooks.com", deepLink: false }
      ]
    },

    {
      id: "arenas",
      chapter: "VI — The arenas",
      date: "2019 – 2023",
      iso: "2019-12-02",
      title: "Madrid, Glasgow, Sharm el-Sheikh: a girlhood at the summits",
      body: "<strong>Helena Gualinga</strong> carried Sarayaku's politics into the UN climate arena — visible from COP25 in Madrid (2019), where Indigenous youth pressed their way into a process built to exclude them, through the summits that followed. In 2020 she co-founded <strong>Polluters Out</strong>, a youth coalition targeting fossil-fuel influence inside the negotiations themselves. Raised between the Amazon and Finland, fluent in the summit's languages and the forest's claims, she works as a translator in the political sense: making Kawsak Sacha legible inside institutions that have never had a category for it.",
      camera: { center: [-30, 25], zoom: 2.4, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: -3.7038, lat: 40.4168, label: "Madrid — COP25, 2019", kind: "camp", precision: "exact" },
        { lng: -77.4870, lat: -1.7400, label: "Sarayaku", kind: "focus", precision: "approx" }
      ],
      route: [[-77.4870, -1.7400], [-40, 20], [-3.7038, 40.4168]],
      sources: [
        { publisher: "Reuters", title: "Climate-summit reporting on Helena Gualinga (2019–2023)", url: "https://www.reuters.com", deepLink: false }
      ]
    },

    {
      id: "lineage",
      chapter: "VII — The lineage",
      date: "two generations",
      iso: "2022-01-01",
      title: "Solidarity transmitted: a family of women defenders",
      body: "Gualinga's advocacy did not begin with her; she grew up inside a lineage of Sarayaku women — among them Patricia Gualinga, a public face of the community through the Inter-American case years — who carried the struggle before her and beside her. Across the river system, Nenquimo leads through women's alliance across peoples: the Ceibo Alliance joins Waorani, A'i Kofán, Siona and Siekopai organising. Read together they show <em>generational and inter-nation transmission</em> — mothers, aunts, daughters, allied nations — functioning as a solidarity technology in its own right.",
      camera: { center: [-77.7, -1.55], zoom: 9.2, pitch: 40, bearing: 4 },
      basemap: "satellite",
      markers: [
        { lng: -77.4870, lat: -1.7400, label: "Sarayaku — a lineage of women defenders", kind: "focus", precision: "approx" },
        { lng: -77.55, lat: -1.30, label: "Waorani territory — alliance across peoples", kind: "focus", precision: "approx" }
      ],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Sarayaku v. Ecuador (2012) — community representation", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" },
        { publisher: "Amazon Frontlines / Ceibo Alliance", title: "The Ceibo Alliance — four peoples organising", url: "https://amazonfrontlines.org", deepLink: false }
      ]
    },

    {
      id: "reading",
      chapter: "VIII — Reading",
      date: "New models",
      iso: null,
      reading: true,
      title: "What Pastaza teaches about new models of solidarity",
      body: "The question resolves into four instruments, each a genuine innovation in cross-border solidarity. <strong>Litigation as territory-defence</strong>: San José and Puyo prove courts can be Indigenous terrain. <strong>Cosmology as legal export</strong>: Kawsak Sacha does not translate the forest into Western categories — it demands the categories grow. <strong>Direct address</strong>: the Guardian letter and the memoir reverse the direction of explanation between the forest and the West. <strong>Lineage and alliance</strong>: transmission through generations of women, and organisation across nations, replace the lone-hero model of environmentalism. For WGSS this is Indigenous feminism <em>foregrounded</em>, exactly as the project's question proposes: the defence of territory and of life practised as one politics, led by women, networked across every border that matters.",
      camera: { center: [-77.7, -1.55], zoom: 8.2, pitch: 30, bearing: 0 },
      basemap: "satellite",
      markers: [
        { lng: -77.4870, lat: -1.7400, label: "Sarayaku", kind: "focus", precision: "approx" },
        { lng: -77.55, lat: -1.30, label: "Waorani territory", kind: "focus", precision: "approx" },
        { lng: -77.9995, lat: -1.4924, label: "Puyo", kind: "law", precision: "exact" }
      ],
      sources: [
        { publisher: "Inter-American Court of Human Rights", title: "Sarayaku v. Ecuador — judgment of 27 June 2012", url: "https://www.corteidh.or.cr/docs/casos/articulos/seriec_245_ing.pdf" },
        { publisher: "Goldman Environmental Prize", title: "Nemonte Nenquimo — 2020 Prize recipient", url: "https://www.goldmanprize.org/recipient/nemonte-nenquimo/" }
      ]
    }

  ]
};
