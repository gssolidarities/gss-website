/*
 * GSS ANARCHIVE — Planetary Justice Map · Story Map I
 * "Solidarity Under Occupation" — scene data for the interactive story map.
 *
 * This story map answers the project's first research question:
 *   How did the clandestine feminist organizing of RAWA in Afghanistan inform
 *   its model of transnational feminist solidarity under occupation?
 *
 * INTEGRITY: factual scenes are sourced; the closing scene is flagged
 * reading:true and rendered under an explicit interpretive label. Quotations
 * are verbatim from the cited primary pages (verified against rawa.org).
 * Sub-landmark coordinates are flagged precision:"approx".
 */

window.GSS_INQUIRY = {

  meta: {
    code: "PJM-ISM-01",
    n: "I",
    version: "1.1.0",
    updated: "2026-07-06",
    label: "Story Map I · Gendered Networks of Revolutionary Solidarity",
    title: "Solidarity Under Occupation",
    standfirst: "How RAWA's clandestine feminist organising became a model of transnational solidarity — schooling, publishing and witness-bearing sustained through invasion, exile and the Taliban.",
    location: "Kabul · Quetta · Peshawar · Valence",
    period: "1977 – 2001",
    axis: { start: "1976-01-01", end: "2002-01-01", tail: "→ today" }
  },

  kinds: {
    focus: { color: "#e0637f" },
    site:  { color: "#d9b36b" },
    voice: { color: "#9d7bd8" },
    camp:  { color: "#5db8e8" },
    press: { color: "#6fbf8f" }
  },

  scenes: [

    {
      id: "question",
      chapter: "The question",
      date: "1977 – 2001",
      iso: "1977-01-01",
      title: "What does feminist solidarity look like when politics is forbidden?",
      body: "Between 1977 and 2001 Afghanistan passed through coup, Soviet invasion, civil war and Taliban rule — and through all of it one organisation of women kept working: the Revolutionary Association of the Women of Afghanistan. This story map follows RAWA's method — clandestine schooling, cross-border publishing, testimony carried into foreign assemblies, atrocity filmed at mortal risk — and asks what it teaches about <em>transnational feminist solidarity under occupation</em>: the first research question of the Gendered Networks project.",
      camera: { center: [67.5, 33.6], zoom: 5.2, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [{ lng: 69.2075, lat: 34.5553, label: "Kabul", kind: "focus", precision: "exact" }],
      sources: [
        { publisher: "RAWA", title: "About RAWA — aims, history and publications", url: "http://www.rawa.org/rawa.html" },
        { publisher: "Anne E. Brodsky", title: "With All Our Strength: The Revolutionary Association of the Women of Afghanistan (Routledge)", url: "https://www.routledge.com", deepLink: false }
      ]
    },

    {
      id: "founding",
      chapter: "I — Kabul, 1977",
      date: "1977",
      iso: "1977-06-01",
      title: "Five students found an organisation",
      body: "In 1977 a Kabul university student who used the single name <strong>Meena</strong> founded RAWA with a handful of fellow students — an independent political organisation of Afghan women, distinct from every party and every foreign patron, committed to women's rights and social justice. Independence was the point: RAWA answered to no men's party and no state, which is why it survived all of them. It is the oldest Afghan women's political organisation, and it began as something almost unthinkably ordinary — a study circle that decided women were a political force.",
      camera: { center: [69.2075, 34.5553], zoom: 11.2, pitch: 40, bearing: -12 },
      basemap: "dark",
      markers: [{ lng: 69.2075, lat: 34.5553, label: "Kabul — RAWA founded, 1977", kind: "focus", precision: "exact" }],
      sources: [
        { publisher: "RAWA", title: "Biography of Martyred Meena, founding leader of RAWA", url: "http://www.rawa.org/meena.html" },
        { publisher: "Anne E. Brodsky", title: "With All Our Strength (Routledge, 2003)", url: "https://www.routledge.com", deepLink: false }
      ]
    },

    {
      id: "poem",
      chapter: "II — The voice",
      date: "1981",
      iso: "1981-03-01",
      title: "“I'm the woman who has awoken”",
      body: "Meena's best-known poem was published in the first issue of RAWA's magazine in 1981. It is a political program in verse — grief converted to capacity:<blockquote>I'm the woman who has awoken<br>I've arisen and become a tempest through the ashes of my burnt children …<br>My voice has mingled with thousands of arisen women<br>I've found my path and will never return.<cite>Meena, “I'll Never Return”, Payam-e-Zan No. 1, 1981 — RAWA's published translation</cite></blockquote>Anne Brodsky's study of RAWA takes its title from another of its lines: <em>“With all my strength I'm with you on the path of my land's liberation.”</em>",
      camera: { center: [69.19, 34.545], zoom: 12.4, pitch: 52, bearing: 8 },
      basemap: "dark",
      markers: [{ lng: 69.2075, lat: 34.5553, label: "Kabul", kind: "voice", precision: "exact" }],
      sources: [
        { publisher: "RAWA", title: "“I'll Never Return” — a poem by Meena (Payam-e-Zan No. 1, 1981)", url: "http://www.rawa.org/ill.htm" }
      ]
    },

    {
      id: "occupation",
      chapter: "III — Occupation",
      date: "December 1979 –",
      iso: "1979-12-27",
      title: "Politics goes underground",
      body: "The Soviet invasion of December 1979 made open politics lethal. RAWA's answer was not retreat but a change of state: the organisation went clandestine inside Afghanistan and followed the refugees out of it. Millions crossed into Pakistan in the early 1980s; RAWA's centre of gravity moved with them — while inside the country its members ran secret literacy classes for women under a regime, and later regimes, that criminalised exactly that. Clandestinity was not the absence of politics. It was the form politics had to take.",
      camera: { center: [68.0, 33.8], zoom: 6.4, pitch: 30, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: 69.2075, lat: 34.5553, label: "Kabul — under occupation", kind: "focus", precision: "exact" },
        { lng: 66.9750, lat: 30.1798, label: "Quetta", kind: "camp", precision: "exact" },
        { lng: 71.5249, lat: 34.0151, label: "Peshawar", kind: "camp", precision: "exact" }
      ],
      route: [[69.2075, 34.5553], [66.9750, 30.1798]],
      sources: [
        { publisher: "Anne E. Brodsky", title: "With All Our Strength (Routledge, 2003)", url: "https://www.routledge.com", deepLink: false },
        { publisher: "RAWA", title: "About RAWA — aims, history and publications", url: "http://www.rawa.org/rawa.html" }
      ]
    },

    {
      id: "payam",
      chapter: "IV — The press",
      date: "1981 –",
      iso: "1981-01-01",
      title: "Payam-e-Zan: a magazine as connective tissue",
      body: "In 1981 Meena launched <strong>Payam-e-Zan</strong> — “Women's Message” — a bilingual political magazine written, edited and distributed by Afghan women, and published continuously ever since. A clandestine press does two things at once: inward, it tells scattered and silenced women that they are many; outward, it carries documentation across borders to anyone willing to listen. Long before the vocabulary of “transnational advocacy networks,” RAWA had built one out of newsprint — reporting from inside a war the world's press could barely reach.",
      camera: { center: [66.9750, 30.1798], zoom: 11.6, pitch: 45, bearing: 0 },
      basemap: "dark",
      markers: [{ lng: 66.9750, lat: 30.1798, label: "Quetta — Payam-e-Zan production, 1980s", kind: "press", precision: "exact" }],
      sources: [
        { publisher: "RAWA", title: "RAWA publications — Payam-e-Zan", url: "http://www.rawa.org/payam.html" }
      ]
    },

    {
      id: "valence",
      chapter: "V — The stage",
      date: "1981",
      iso: "1981-10-01",
      title: "Valence: carrying the resistance into a European assembly",
      body: "In 1981 Meena travelled to France to represent the Afghan women's resistance at the congress of the French Socialist Party in Valence — by RAWA's account and contemporaneous reporting, her appearance drew a standing ovation and prompted the Soviet delegation to walk out. The scene condenses the model: a clandestine organisation with no state behind it, placing an Afghan woman's testimony physically inside a European political assembly. Solidarity, in this model, is not received from abroad — it is <em>built</em> abroad, by the movement's own voice.",
      camera: { center: [4.8924, 44.9334], zoom: 5.6, pitch: 30, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: 4.8924, lat: 44.9334, label: "Valence — French Socialist Party congress, 1981", kind: "voice", precision: "exact" },
        { lng: 69.2075, lat: 34.5553, label: "Kabul", kind: "focus", precision: "exact" }
      ],
      route: [[69.2075, 34.5553], [45.0, 38.5], [20.0, 42.0], [4.8924, 44.9334]],
      sources: [
        { publisher: "RAWA", title: "Biography of Martyred Meena", url: "http://www.rawa.org/meena.html" },
        { publisher: "RAWA (video archive)", title: "Footage: address to the French Socialist Party congress, Valence (1981)", url: "http://www.rawa.org", deepLink: false }
      ]
    },

    {
      id: "exile",
      chapter: "VI — Exile infrastructure",
      date: "early 1980s –",
      iso: "1983-01-01",
      title: "Schools, clinics, orphanages: solidarity as institution",
      body: "Among the refugee settlements of Quetta and Peshawar, RAWA built what states would not: the <strong>Watan schools</strong> for refugee children, literacy courses for women, clinics and income projects, an orphanage. Under occupation and exile, a school is not a service — it is a claim about the future, staffed and defended at real risk. This is the material core of RAWA's feminism: emancipation practised as infrastructure, run by women, for a nation temporarily without a territory.",
      camera: { center: [69.4, 32.2], zoom: 6.8, pitch: 40, bearing: -8 },
      basemap: "satellite",
      markers: [
        { lng: 66.9750, lat: 30.1798, label: "Quetta — Watan schools, clinics", kind: "camp", precision: "exact" },
        { lng: 71.5249, lat: 34.0151, label: "Peshawar — refugee organising", kind: "camp", precision: "exact" }
      ],
      sources: [
        { publisher: "Anne E. Brodsky", title: "With All Our Strength (Routledge, 2003)", url: "https://www.routledge.com", deepLink: false },
        { publisher: "RAWA", title: "About RAWA — aims, history and publications", url: "http://www.rawa.org/rawa.html" }
      ]
    },

    {
      id: "assassination",
      chapter: "VII — The cost",
      date: "4 February 1987",
      iso: "1987-02-04",
      title: "Quetta, 1987",
      body: "On 4 February 1987 Meena was assassinated in Quetta, aged thirty. RAWA attributes the killing to agents of KHAD — the Soviet-backed Afghan secret police — acting with fundamentalist allies; two men were later convicted in Pakistan of involvement. She had led the organisation for a decade, from study circle to transnational network. The killing was meant to end the work. The organisation she designed to survive precisely this — collective, clandestine, women-run — did.",
      camera: { center: [66.9750, 30.1798], zoom: 12.6, pitch: 50, bearing: 6 },
      basemap: "dark",
      markers: [{ lng: 66.9750, lat: 30.1798, label: "Quetta — Meena assassinated, 4 Feb 1987", kind: "focus", precision: "exact" }],
      sources: [
        { publisher: "RAWA", title: "Biography of Martyred Meena", url: "http://www.rawa.org/meena.html" },
        { publisher: "Melody Ermachild Chavis", title: "Meena: Heroine of Afghanistan (St. Martin's Press, 2003)", url: "https://us.macmillan.com", deepLink: false }
      ]
    },

    {
      id: "zarmeena",
      chapter: "VIII — Witness",
      date: "November 1999",
      iso: "1999-11-16",
      title: "A camera under a burqa",
      body: "On 16 November 1999 the Taliban publicly executed a woman known as Zarmeena in Kabul's Ghazi Stadium. RAWA members in the crowd filmed it with a camera hidden beneath a burqa — footage smuggled out and circulated worldwide, becoming one of the defining documents of Taliban rule over women. <em>(The film is distressing; it is linked, not shown.)</em> Witness-bearing at mortal risk completed RAWA's method: when no institution would see, the movement made the world see. Documentation, here, is a feminist act of war-time solidarity with the dead and the living alike.",
      camera: { center: [69.1893, 34.5225], zoom: 13.2, pitch: 45, bearing: -10 },
      basemap: "satellite",
      markers: [{ lng: 69.1893, lat: 34.5225, label: "Ghazi Stadium, Kabul", kind: "site", precision: "approx" }],
      sources: [
        { publisher: "RAWA", title: "Zarmeena being executed by Taliban (movie clip, 16 Nov 1999)", url: "http://www.rawa.org/zarmeena.htm" }
      ]
    },

    {
      id: "reading",
      chapter: "IX — Reading",
      date: "The model",
      iso: null,
      reading: true,
      title: "What RAWA teaches about solidarity under occupation",
      body: "Read as one arc, RAWA's history answers the question this story map asks with a model in four parts. <strong>Independence</strong>: answering to no party or patron is what lets a women's organisation outlive every regime. <strong>Infrastructure</strong>: schools, clinics and a magazine — emancipation as daily institution, not declaration. <strong>Circulation</strong>: a clandestine press and a founder physically carrying testimony into foreign assemblies — solidarity built outward, on the movement's own terms. <strong>Witness</strong>: documentation at mortal risk, so that occupation cannot also own the record. For WGSS, RAWA relocates feminist politics: not after liberation, not sheltered from war, but <em>as</em> the durable web that survives both.",
      camera: { center: [67.5, 33.6], zoom: 5.2, pitch: 0, bearing: 0 },
      basemap: "dark",
      markers: [
        { lng: 69.2075, lat: 34.5553, label: "Kabul", kind: "focus", precision: "exact" },
        { lng: 66.9750, lat: 30.1798, label: "Quetta", kind: "camp", precision: "exact" },
        { lng: 4.8924, lat: 44.9334, label: "Valence", kind: "voice", precision: "exact" }
      ],
      sources: [
        { publisher: "Anne E. Brodsky", title: "With All Our Strength (Routledge, 2003)", url: "https://www.routledge.com", deepLink: false },
        { publisher: "RAWA", title: "About RAWA — aims, history and publications", url: "http://www.rawa.org/rawa.html" }
      ]
    }

  ]
};
