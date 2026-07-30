/* PJM-PW-04 · Adversarial — Read the Map Against Itself */
window.GSS_PATHWAY = {
  meta: {
    id: "against-the-map", code: "PJM-PW-04", kind: "Adversarial",
    title: "Read the Map Against Itself",
    question: "Where is this instrument thin, silent or structurally biased — and what would repair even mean?",
    duration: "45–60 min",
    deliverable: "Write a 500-word critique of this map as an artifact: its strongest refusal, its worst silence, its most structural bias, and one concrete change you would make first. Critique of the instrument is the most anticolonial thing you can do with it — do it properly.",
    deliverableGrad: "The 500-word critique, plus a 300-word design proposal: an alternative ontology for one relation the node/tie form flattens (asymmetric, coerced, funded, or non-dyadic solidarity), with one concrete schema change written as a JSON sketch."
  },
  stops: [
    {
      title: "Where are you reading from?",
      framing: "An adversarial reading begins with the reader. You are about to critique an instrument built in the Global North's technical stack (MapLibre, GitHub, Vercel), in English, about the Global Souths. Note where you stand in that arrangement before you fire.",
      link: { href: "../index.html", label: "OPEN THE MAP" },
      prompt: "One sentence: what is one advantage and one blind spot your own position gives this critique?",
      promptGrad: "Two sentences: name the reviewer you are implicitly writing for, and what that choice of audience does to the critique before it starts."
    },
    {
      title: "The lines that are not there",
      framing: "Open Claudia Jones, then read the tie rule in METHOD. Jones died in 1964; the TWLF struck in 1968 breathing air she helped make — and the map draws no line between them, because no documented tie exists. Absence of a line is a finding under this rule. Attack or defend it.",
      link: { href: "../index.html#claudia-jones", label: "OPEN JONES — THEN METHOD" },
      prompt: "Two sentences for the rule, two against: what does documented-ties-only protect, and what real historical connective tissue does it render invisible?",
      promptGrad: "The rule privileges archivable, dyadic, nameable connection. One paragraph: formulate the class of solidarities this systematically deletes (atmospheric influence, shared repertoire, reading cultures) and whether any evidentiary standard could admit them without admitting everything."
    },
    {
      title: "The silences — negative space as data",
      framing: "Zoom to the world view and look at what is NOT there. No node in Southeast Asia, none in Southern Africa, none in the Pacific; whole decades thin. Some absence is the roster rule (a research-design scope, honestly declared); some is the archive; some is design choice. Learn to tell which is which.",
      link: { href: "../index.html", label: "OPEN THE WORLD VIEW" },
      prompt: "Name three specific absences — a region, a decade, a struggle — and for each, one sentence: is this a scope silence, an archive silence, or a design silence?",
      promptGrad: "Choose one absence and draft the argument for its inclusion under the roster-integrity rule: the figure/movement, two named sources, and the thread it would join. If you cannot source it, say precisely where the archive fails you — that failure is your finding."
    },
    {
      title: "The archive's centre of gravity — source geography on",
      framing: "Turn the source-geography lens on and watch the recolour: node after node snaps to the cold blue of Global North institutions — publishers, papers, universities, state records. Meena's exception (a movement that kept its own archive) proves the rule. This single toggle is the extraction lecture.",
      link: { href: "../index.html?lens=sg", label: "OPEN THE MAP — SOURCE GEOGRAPHY ON" },
      prompt: "Which nodes are coldest (most North-held)? Pick one and answer in two sentences: what would it actually take — legally, materially, politically — for that record to be held nearer its life?",
      promptGrad: "Critique the classifier itself (rule in METHOD): host-domain is a blunt proxy. Name two ways it miscounts (mirrors, diasporic publishers, NGO custody) and whether a better metric is possible without a provenance database the project cannot afford."
    },
    {
      title: "The language of the record",
      framing: "Walk any three dossiers and check the materials register: what language does each item exist in? Payam-e-Zan is Persian/Pashto — but nearly everything else this map can cite is in English, and the map itself is in English. The coloniser's language is the index's language.",
      link: { href: "../index.html#rawa", label: "OPEN RAWA — CHECK THE MATERIALS" },
      prompt: "For one node: how much of its record, as cited here, exists only in English? One sentence on what a monolingual index does to a multilingual history.",
      promptGrad: "One paragraph: is translation the repair, or does it deepen the extraction (records made legible to the metropole first)? Name one concrete multilingual practice this project could adopt within its means."
    },
    {
      title: "The verification queue — unfinished edges as backlog",
      framing: "Open METHOD's registers and count the “pending verification” flags. That count is not a bug list; it is the project's honest measure of its own incompleteness — and its standing assignment sheet. An instrument that hides its backlog is lying about its state.",
      link: { href: "../index.html", label: "OPEN THE MAP — THEN METHOD" },
      prompt: "Count the pending flags (registers in METHOD). Pick one, verify it to a precise URL if you can, and report the URL or the wall you hit.",
      promptGrad: "The queue is public but unprioritised. Propose a triage rule: which pending links matter most to verify first, and what value (pedagogical? evidentiary? reparative?) does your rule maximise?"
    },
    {
      title: "The deliverable",
      framing: "You have read the map against itself: its missing lines, its silences, its cold-blue archive, its single language, its open backlog. Now write the critique the project cannot write about itself — and mean it. A tool that invites this is asking to be improved, not admired.",
      link: { href: "../index.html?lens=sg", label: "RETURN — LENS STILL ON" },
      prompt: "Complete the deliverable above.",
      promptGrad: "Complete the graduate deliverable above, including the JSON sketch — design is critique that pays its bills."
    }
  ]
};
