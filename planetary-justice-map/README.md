# Planetary Justice Map

**Gendered Networks of Revolutionary Solidarity**

A living, open-source map of *radical solidarities across borders*: revolutionary figures and
movements of the Global Souths, the trajectories their lives cut across the world — birth, exile,
organising, return — and the documented ties between them. A project of the
[Global South Solidarities Anarchive](https://gssolidarities.org). Evidence-first, built to be
read closely, and built to be taught with.

The map's core research question:

> *How do struggles and solidarities that center women, queer folx, gender, and sexuality extend
> our understanding of WGSS?*

Research design: **Bibhushana Poudyal**. Engine and cartography: GSS.

## The constellation

| Figures | Movements |
|---|---|
| Claudia Jones (1915–1964) · Trinidad → Harlem → London | PAIGC (f. 1956) · Bissau, Conakry, Boé |
| Leila Khaled (b. 1944) · Haifa → Tyre → Amman | Third World Liberation Front (1968–69) · SF State & UC Berkeley |
| Meena Keshwar Kamal (1956–1987) · Kabul & Quetta | RAWA (f. 1977) · Kabul, Quetta, Peshawar |
| Sakine Cansız (1958–2013) · Dersim → Diyarbakır → Paris | |
| Lorena Borjas (c. 1960–2020) · Veracruz → Queens | |
| Nemonte Nenquimo (b. 1985) · Waorani territory, Pastaza | |
| Helena Gualinga (b. 2002) · Sarayaku | |

The roster is scoped to the project's research design. Nodes are added only through a
research/review pass — never casually.

## The Inquiries

Three scroll-driven investigations — one for each of the project's research questions — argued in
space and time over the real geography, with verbatim primary voices, coded evidence, and a
clearly-labelled interpretive reading at the end (served from `inquiries/?q=…`):

1. **Solidarity Under Occupation** (`PJM-INQ-01`) — RAWA's clandestine feminist model, 1977–2001.
2. **Left of Marx, South of Empire** (`PJM-INQ-02`) — Claudia Jones's three-continent bridge, 1915–1964.
3. **The Forest Speaks in Women's Voices** (`PJM-INQ-03`) — Indigenous feminisms and climate
   justice from Pastaza, 1996–today.

Quotations in the inquiries are verbatim from the cited primary pages (verified against rawa.org
and the Marxists Internet Archive); interpretive scenes are flagged `reading:true` and rendered
under an explicit label.

## Teaching

The **TEACH** panel is a course-ready kit: a first-session walkthrough, six discussion prompts,
three assignment frameworks built on the map's own evidentiary standards, and citing guidance
(stable anchors per node, inquiry, and scene).

## What the map does

- **Nodes** — figures (points) and movements (rings), coloured by thread: feminist revolutionary
  organising · anti-colonial & national liberation · Black internationalism · trans & queer
  community defence · Indigenous & climate justice · student & coalition politics.
- **Trajectories** — dashed great-circle arcs tracing each life or movement through the world.
- **Solidarity ties** — gradient arcs between nodes, drawn **only where documented** (or where the
  research design itself pairs nodes, and then the tie says so).
- **Node dossiers** — click any node for a factual annotation, an explicitly labelled interpretive
  *reading* addressing the core question, every place with coordinates and a precision class
  (`EXACT` / `APPROX`), documented ties, and named sources with stable evidence codes (`E01…`).
- **Primary materials** — a per-node register of photographs, speeches, writings, records and
  periodicals (stable codes `M01…`, kind-tagged `TEXT / PHOTO / FILM / DOC / PRESS`) that elucidate
  each node's feminist politics of resistance and solidarity. Linked at their holding archives —
  RAWA's own archive, the SF State Strike Collection, the British Library, Casa Comum, the
  Inter-American Court — never re-hosted; rights remain with their holders.
- **A century timeline** (1910 → today) — scrub or play to watch the network assemble.
- **Constellation index** — every figure and movement by name, one click from its dossier.
- **Research instrumentation** — live telemetry readout (cursor/centre coordinates, zoom, dynamic
  scale bar), an auto-generated **method & provenance panel** (coordinate gazetteer + full evidence
  registry), stable **deep links** per node (`#claudia-jones`, `#rawa`, …), keyboard navigation
  (`←`/`→` step the constellation), `prefers-reduced-motion` support, and **citation export**
  (Chicago + BibTeX).

## Run it

Static site — no build step, no API keys.

```bash
cd planetary-justice-map
python3 -m http.server 8000
# open http://localhost:8000
```

## Architecture

```
planetary-justice-map/
├── index.html               # the map (MapLibre + UI + interactions), no build step
├── data/
│   └── solidarities.js      # canonical dataset — the single source of truth
├── inquiries/
│   ├── index.html           # scroll-driven inquiry engine (?q=<id>; TOC without ?q=)
│   └── data/                # one scene file per inquiry (PJM-INQ-01…03)
└── _archive/                # earlier prototypes, kept for provenance
```

**Data model** (per node):

| field | meaning |
|-------|---------|
| `id` | stable slug — also the deep-link anchor |
| `type` | `figure` · `movement` |
| `name`, `dates`, `role` | display identity |
| `origin` | year the node enters the timeline |
| `theme` | one of the six threads (drives colour) |
| `places[]` | `{ label, lat, lng, precision, year, period }` — trajectory in order |
| `annotation` | factual, sourceable prose |
| `lens` | interpretive *reading*, rendered under an explicit label |
| `materials[]` | `{ kind, title, date, holder, url, deepLink, note }` — primary sources, link-out only |
| `sources[]` | `{ publisher, title, date, url, deepLink }` — named, linkable |

Plus `ties[]` — inter-node connections `{ a, b, kind, year, note }`, documented only.

## Standards — "no slop"

1. No node without named institutional or scholarly sources.
2. Factual annotation and interpretive reading are kept apart and labelled.
3. `precision:"approx"` flags area-level coordinates (villages, territories, founding sites);
   their decimals must not be read as precise. Shown on the map, in dossiers, and in the gazetteer.
4. Timeline years on places and ties are reveal metadata, not date claims — the citable statement
   is the human-readable period string.
5. `deepLink: false` marks a citation whose precise URL still needs verifying; the listed `url`
   is the publisher's real root domain in the meantime.
6. Primary materials are linked at their holding archives and publishers, never re-hosted;
   rights remain with their holders.
7. The dataset is a versioned file: every change is auditable.

## Roadmap

- **Verified deep links.** Replace every `deepLink:false` root-domain citation and material link
  with its confirmed precise URL, through the research/review workflow.
- **Deepened annotations** per node, developed through archival and digital-ethnographic research.
- **Classroom deployment** — course-ready by Fall 2026, with a short guide for teaching with
  the map.
- **More nodes**, added through the research/review workflow — never casually.
- **Scrollytelling dossiers** for set-piece cases (the engine from the previous prototype is
  preserved in `_archive/` and ready to be repurposed).
- **Self-hosted vector tiles** (PMTiles) for a fully independent basemap.

## Technology & credits

[MapLibre GL JS](https://maplibre.org) · basemap © [OpenStreetMap](https://www.openstreetmap.org/copyright)
contributors & [CARTO](https://carto.com/attributions) · satellite imagery © Esri, Maxar, Earthstar
Geographics. All node data attributed in-app to named sources.

Built for liberation scholarship · Global South Solidarities © 2026
