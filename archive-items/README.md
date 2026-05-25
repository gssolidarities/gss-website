# GSS Archive — drop-and-push workflow

This folder is the living catalog behind `/archive.html`. Drop a file here,
push to GitHub, and it shows up on the public Archive page automatically.

## How it works

```
archive-items/
├── README.md             ← this file
├── manifest.json         ← auto-generated, never edit by hand
├── covers/               ← optional: cover images
│   └── my-book.jpg
├── the-poetics-of-refusal.pdf
├── the-poetics-of-refusal.pdf.json   ← optional sidecar metadata
└── another-essay.pdf
```

On every push to `main` that touches `archive-items/`, a GitHub Action runs
`scripts/build_archive_manifest.py`, scans this folder, and rewrites
`manifest.json`. The public Archive page fetches that manifest on load.

**You never edit `manifest.json` by hand.**

## Adding a new item — the 30-second version

1. Drop the file here. Use a clear filename — it becomes the URL slug and
   default title.
   - Good: `the-poetics-of-refusal.pdf`
   - Bad: `paper FINAL v3 (edited)(1).pdf`
2. Optionally drop a sidecar JSON next to it so the entry has rich
   metadata. Name it `<filename>.<ext>.json`:

   ```json
   {
     "title":    "The Poetics of Refusal",
     "subtitle": "Notes on Anti-Caste Aesthetics",
     "authors":  ["Siddhartha Anand"],
     "year":     2024,
     "type":     "essay",
     "tags":     ["aesthetics", "anti-caste", "South Asia"],
     "abstract": "A short essay on aesthetic refusal in contemporary anti-caste writing.",
     "pages":    24,
     "language": "English",
     "cover":    "covers/refusal.jpg"
   }
   ```
3. `git add . && git commit -m "archive: add Poetics of Refusal" && git push`
4. The GitHub Action regenerates `manifest.json` within ~30 seconds. The
   public Archive page picks up the new item on the next visit (or hard
   refresh).

## Sidecar fields (all optional)

| Field      | Type       | Default                              |
|------------|------------|--------------------------------------|
| `title`    | string     | filename, prettified                 |
| `subtitle` | string     | —                                    |
| `authors`  | string[]   | `[]`                                 |
| `year`     | number     | —                                    |
| `type`     | string     | inferred from file extension         |
| `tags`     | string[]   | `[]`                                 |
| `abstract` | string     | —                                    |
| `language` | string     | —                                    |
| `pages`    | number     | —                                    |
| `cover`    | string     | none (a procedural cover is drawn)   |
| `url`      | string     | external link, in addition to file   |
| `added`    | YYYY-MM-DD | file's modification date             |

## Allowed `type` values

These map to the filter chips on the Archive page:

`book` · `essay` · `research` · `zine` · `pedagogy` · `multimedia` · `document`

If you don't set `type`, it's inferred from the file extension. You can
always override it in the sidecar.

## Cover images

Put cover images in `archive-items/covers/`. Reference them in the
sidecar as `"cover": "covers/my-book.jpg"`. If you don't provide a cover,
the page draws a procedural type-coloured tile with the title on it.

## Running the build locally

Useful for previewing before pushing:

```bash
python3 scripts/build_archive_manifest.py
```

This rewrites `archive-items/manifest.json` from the current folder
contents. The Archive page reads that file directly.

## Files the scanner ignores

- `manifest.json` (the output itself)
- `README.md` (this file)
- `.gitkeep`, `.DS_Store` (housekeeping)
- Anything inside `covers/` (those are image assets, not catalog entries)
- All `*.json` sidecars (they travel with their parent file, not as their
  own catalog entry)

## Naming tips

- Lowercase, hyphen-separated filenames produce the cleanest URLs and the
  prettiest auto-generated titles.
- If a title has punctuation or special characters that don't survive in
  a filename, just put the real title in the sidecar — the filename is
  used as a fallback.
- The accession number on each card (`GSS.2026.014`) is generated from
  the `year` field and the item's position in the catalog. You don't set
  it manually.
