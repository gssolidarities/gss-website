#!/usr/bin/env python3
"""
Build the GSS archive manifest.

Scans `archive-items/` for files and writes `archive-items/manifest.json`.
Each file in `archive-items/` becomes one catalog entry on the public
Archive page. To add richer metadata for an item, drop a sidecar JSON
file next to it named `<filename>.json` (e.g. `the-poetics-of-refusal.pdf`
with `the-poetics-of-refusal.pdf.json` alongside it).

Sidecar JSON fields (all optional):

  {
    "title":     "The Poetics of Refusal",
    "subtitle":  "Notes on Anti-Caste Aesthetics",
    "authors":   ["Siddhartha Anand"],
    "year":      2024,
    "type":      "essay",          # book | essay | research | zine | pedagogy | multimedia | document
    "tags":      ["aesthetics","anti-caste"],
    "abstract":  "A short essay on aesthetic refusal in contemporary anti-caste writing.",
    "language":  "English",
    "pages":     24,
    "cover":     "covers/refusal.jpg",  # optional, relative to archive-items/
    "url":       "https://...",         # optional external link
    "added":     "2026-05-24"           # optional, else file mtime is used
  }

Run locally:    python3 scripts/build_archive_manifest.py
On GitHub:      runs automatically via .github/workflows/archive-manifest.yml
"""

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ITEMS_DIR = ROOT / "archive-items"
MANIFEST_PATH = ITEMS_DIR / "manifest.json"

# Skip these — they are infrastructure, not content
SKIP_NAMES = {"manifest.json", "README.md", ".gitkeep", ".DS_Store"}
SKIP_DIRS = {"covers"}  # cover images live here, not catalog entries

TYPE_BY_EXT = {
    ".pdf":   "document",
    ".epub":  "book",
    ".mobi":  "book",
    ".doc":   "document",
    ".docx":  "document",
    ".md":    "writing",
    ".txt":   "writing",
    ".mp3":   "multimedia",
    ".wav":   "multimedia",
    ".m4a":   "multimedia",
    ".mp4":   "multimedia",
    ".mov":   "multimedia",
    ".webm":  "multimedia",
    ".jpg":   "image",
    ".jpeg":  "image",
    ".png":   "image",
    ".gif":   "image",
}


def humanize_title(stem: str) -> str:
    """Turn 'the-poetics-of-refusal' into 'The Poetics of Refusal'."""
    words = stem.replace("_", " ").replace("-", " ").split()
    small = {"a", "an", "and", "as", "at", "but", "by", "for", "from", "in",
             "of", "on", "or", "the", "to", "via", "with"}
    out = []
    for i, w in enumerate(words):
        if i != 0 and w.lower() in small:
            out.append(w.lower())
        else:
            out.append(w[:1].upper() + w[1:])
    return " ".join(out)


def slugify(s: str) -> str:
    return (
        s.lower()
        .replace(" ", "-")
        .replace("_", "-")
        .replace("/", "-")
        .strip("-")
    )


def load_sidecar(path: Path) -> dict:
    """Look for `<filename>.json` next to the asset."""
    sidecar = path.with_suffix(path.suffix + ".json")
    if sidecar.exists():
        try:
            with open(sidecar, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"  ! sidecar parse error for {sidecar.name}: {e}", file=sys.stderr)
    return {}


def gather() -> dict:
    if not ITEMS_DIR.exists():
        return {"items": [], "generated_at": now_iso(), "count": 0}

    items = []
    for p in sorted(ITEMS_DIR.rglob("*")):
        if not p.is_file():
            continue
        # Skip infrastructure files and folders
        if p.name in SKIP_NAMES:
            continue
        if any(part in SKIP_DIRS for part in p.relative_to(ITEMS_DIR).parts[:-1]):
            continue
        # A sidecar JSON travels with its asset, not on its own
        if p.suffix.lower() == ".json":
            continue

        meta = load_sidecar(p)
        relative = p.relative_to(ITEMS_DIR).as_posix()
        ext = p.suffix.lower()

        # Use file mtime as "added" date if not supplied
        added = meta.get("added")
        if not added:
            added = datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc).date().isoformat()

        title = meta.get("title") or humanize_title(p.stem)

        entry = {
            "id":       meta.get("id") or slugify(p.stem),
            "title":    title,
            "subtitle": meta.get("subtitle", ""),
            "authors":  meta.get("authors", []),
            "year":     meta.get("year"),
            "type":     meta.get("type") or TYPE_BY_EXT.get(ext, "document"),
            "tags":     meta.get("tags", []),
            "abstract": meta.get("abstract", ""),
            "language": meta.get("language", ""),
            "pages":    meta.get("pages"),
            "cover":    meta.get("cover"),
            "url":      meta.get("url"),
            "file":     relative,
            "size":     p.stat().st_size,
            "added":    added,
        }
        # Drop empty optional fields so the JSON stays tidy
        entry = {k: v for k, v in entry.items() if v not in (None, "", [], {})}
        items.append(entry)

    # Sort newest first by "added" date
    items.sort(key=lambda e: e.get("added", ""), reverse=True)

    return {
        "items": items,
        "generated_at": now_iso(),
        "count": len(items),
        "note": "Auto-generated by scripts/build_archive_manifest.py — do not edit by hand.",
    }


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def main():
    manifest = gather()
    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"Wrote {MANIFEST_PATH.relative_to(ROOT)} with {manifest['count']} items.")
    for entry in manifest["items"]:
        print(f"  · [{entry['type']}] {entry['title']}  →  {entry['file']}")


if __name__ == "__main__":
    main()
