---
title: "4. Write controls you can keep"
description: "Turn the starter controls map into your own list: testable statements with an owner, a frequency, and the proof each leaves behind."
---

**Objectives.** By the end of this module you can write a control an auditor can test, cut the starter map down to what your company does, and spot a control that will fail before the auditor does.

## What a control is

A control is something the company does, on a schedule or on every event, that leaves a record. It says who does what, how often, and what record it leaves. A good one reads like this:

> System owners review who has access to each production system every quarter, remove access that's no longer needed, and record the review in a signed ticket.

It has four parts:

| Part | In the example |
|---|---|
| **Owner** | System owners |
| **Activity** | Review access and remove what's not needed |
| **Frequency** | Every quarter |
| **Evidence** | A signed ticket |

A weak one reads like "Access is reviewed regularly." Who reviews? How often is regularly? What proves it happened? An auditor will ask all three, and if the answers change from quarter to quarter you'll get an exception.

## Automated and manual controls

**Automated** controls are enforced by a system, such as branch protection requiring a reviewer or a device management tool enforcing disk encryption. They're tested once for design and then by looking at settings and a sample. They rarely fail if nobody changes the setting.

**Manual** controls depend on a person remembering, such as quarterly access reviews or yearly vendor reviews. They fail far more often, usually because the owner was on vacation or left. Keep manual controls few, put them on a shared calendar, and give each one a backup owner.

## Cutting the map down

The [controls map](../controls/controls-map.md) has 44 starter controls. Expect to keep most of them, rewritten in your own words, and cut the ones that don't fit. Go through each row and ask:

1. **Do we do this today?** If yes, rewrite it to match exactly what you do, not what the template says.
2. **If not, should we?** Check your risk register. If a high risk depends on it, plan to start. If not, and no criterion goes uncovered without it, cut it.
3. **Can we keep doing it for the whole observation window?** If the honest answer is "probably not," make it simpler or automate it.
4. **Does it leave proof without extra work?** Prefer controls whose evidence is a system log or a ticket you'd create anyway.

After cutting, rebuild the coverage table (`node tools/build-map.mjs` if you're editing the CSV here) and make sure every criterion in scope still has at least one control.

> [!WARNING]
> **Don't overpromise**
>
> Every control you write becomes a test. A control that says "monthly" and runs quarterly is an exception, even if quarterly is perfectly secure. Write what you will do, then do it.

## Exercise: your controls list

Copy [controls.csv](../controls/controls.csv) into a spreadsheet. For each row, mark *keep*, *rewrite*, *start*, or *cut*. Rewrite the kept rows in your words with your real owners and frequencies. For each *start*, add a target date to your [90-day plan](../plan/90-day-plan.md).

## Check

1. Name the four parts of a control.
2. Why do manual controls fail more often, and what reduces that?
3. What's wrong with "Logs are monitored regularly"?

Next: [5. Policies people read](05-policies.md).

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
