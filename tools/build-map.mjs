// build-map.mjs: turns controls/controls.csv into controls/controls-map.md, the readable map, with a
// coverage table that shows which SOC 2 common criteria each control answers. Run with --check to fail
// when the Markdown is out of date with the CSV (the check workflow does this).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const CSV = resolve(ROOT, "controls/controls.csv");
const OUT = resolve(ROOT, "controls/controls-map.md");

// A small CSV reader: quoted fields may hold commas; no field holds a newline
function parse(text) {
  const rows = [];
  for (const line of text.trim().split("\n")) {
    const cells = [];
    let cur = "", q = false;
    for (const ch of line) {
      if (ch === '"') q = !q;
      else if (ch === "," && !q) { cells.push(cur); cur = ""; }
      else cur += ch;
    }
    cells.push(cur);
    rows.push(cells);
  }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])));
}

// Every SOC 2 common criterion and availability/confidentiality criterion the map should answer
const CRITERIA = [
  "CC1.1", "CC1.2", "CC1.3", "CC1.4", "CC1.5", "CC2.1", "CC2.2", "CC2.3",
  "CC3.1", "CC3.2", "CC3.3", "CC3.4", "CC4.1", "CC4.2", "CC5.1", "CC5.2", "CC5.3",
  "CC6.1", "CC6.2", "CC6.3", "CC6.4", "CC6.5", "CC6.6", "CC6.7", "CC6.8",
  "CC7.1", "CC7.2", "CC7.3", "CC7.4", "CC7.5", "CC8.1", "CC9.1", "CC9.2",
  "A1.1", "A1.2", "A1.3", "C1.1", "C1.2",
];

const controls = parse(readFileSync(CSV, "utf8"));
const cell = (s) => s.replace(/\|/g, "\\|");

// Page header
let md = `---
title: The controls map
description: "${controls.length} starter controls for a small or growing company, each with an owner, how often it runs, the evidence an auditor asks for, and where it lands in SOC 2 and ISO 27001."
---

<!-- Generated from controls.csv by tools/build-map.mjs. Edit the CSV, then run: node tools/build-map.mjs -->

Each row is one thing your company does, written so an auditor can test it: who does it, how often, and what proof it leaves. Start from these, then cut, merge, and reword until every line is true for you. A control you can't keep doing is worse than none, because the auditor will find the gap.

The SOC 2 column cites Trust Services Criteria IDs, and the ISO 27001 column cites 2022 Annex A controls and clauses. Both are described in our own words. See [how to read the map](index.md).

`;

// One table per area, in the order the CSV lists them
const areas = [...new Set(controls.map((c) => c.area))];
for (const area of areas) {
  md += `## ${area}\n\n| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |\n|---|---|---|---|---|---|---|\n`;
  for (const c of controls.filter((x) => x.area === area)) {
    md += `| ${c.id} | ${cell(c.control)} | ${cell(c.owner)} | ${cell(c.frequency)} | ${cell(c.evidence)} | ${cell(c.soc2)} | ${cell(c.iso27001)} |\n`;
  }
  md += "\n";
}

// Coverage: each criterion and the controls that answer it; an empty row is a gap to close
const gaps = [];
md += `## Coverage by SOC 2 criterion\n\nEvery criterion below should have at least one control. If you remove a control, check that its criteria are still covered.\n\n| Criterion | Controls |\n|---|---|\n`;
for (const k of CRITERIA) {
  const ids = controls.filter((c) => c.soc2.split(/;\s*/).includes(k)).map((c) => c.id);
  if (!ids.length) gaps.push(k);
  md += `| ${k} | ${ids.join(", ") || "**gap**"} |\n`;
}

// Sources close the page, as on every other page
md += `
## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
- [Mapping: 2017 Trust Services Criteria to ISO 27001](https://www.aicpa-cima.com/resources/download/mapping-2017-trust-services-criteria-to-iso-27001), from the AICPA: the official crosswalk to check the ISO column against.
`;

// Write, or in --check mode compare and fail when stale or when a criterion has no control
if (process.argv.includes("--check")) {
  const current = readFileSync(OUT, "utf8");
  if (current !== md) { console.error("controls/controls-map.md is out of date: run node tools/build-map.mjs"); process.exit(1); }
  if (gaps.length) { console.error(`criteria with no control: ${gaps.join(", ")}`); process.exit(1); }
  console.log(`ok: ${controls.length} controls, every listed criterion covered`);
} else {
  writeFileSync(OUT, md);
  console.log(`wrote controls/controls-map.md (${controls.length} controls${gaps.length ? `, gaps: ${gaps.join(", ")}` : ""})`);
}
