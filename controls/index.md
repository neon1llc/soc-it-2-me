---
title: How to read the controls map
description: "What each column in the controls map means, how the SOC 2 and ISO 27001 references work, and how to make the map your own."
---

The [controls map](controls-map.md) is generated from [controls.csv](controls.csv). Copy the CSV into a spreadsheet to work on your own version; it's the same data.

## The columns

| Column | Meaning |
|---|---|
| **ID** | A short code by area, such as ACC-03. Keep the IDs when you rewrite a control, so your evidence tracker and risk register still line up. |
| **Control** | What the company does, written so it can be tested. |
| **Owner** | The role that makes sure it happens. Replace with real names in your copy. |
| **How often** | Continuous (enforced by a system), on every event, or on a schedule. |
| **Evidence** | What an auditor will ask to see. |
| **SOC 2** | Trust Services Criteria IDs the control helps meet. CC is the common criteria (Security); A1 is Availability; C1 is Confidentiality. |
| **ISO 27001** | ISO/IEC 27001:2022 Annex A control numbers (such as 8.32) and management system clauses (such as Clause 9.3) the control relates to. |

## How the references work

A reference means the control is a reasonable way to help meet that criterion or Annex A control. It doesn't mean the control alone satisfies it, and auditors judge sufficiency for your situation. The criteria and the standard are described in our own words here; read the AICPA's Trust Services Criteria and ISO/IEC 27001 themselves before you rely on a mapping.

## Making it yours

Work through [module 4](../course/04-controls.md). Cut what you don't need, rewrite what you keep, and make sure every in-scope criterion still has at least one control. If you edit the CSV in this repository, run `node tools/build-map.mjs` to rebuild the map and its coverage table; the check workflow fails if a criterion is left uncovered.

## What's not here

Processing Integrity (PI1) and Privacy (P1 to P8) controls aren't in the starter map, because most first reports leave them out. If your customers need them, add rows and extend the criteria list in `tools/build-map.mjs`.
