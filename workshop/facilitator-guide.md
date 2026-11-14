---
title: Facilitator guide
description: "Teach the SOC 2 Readiness course as a half-day workshop or a two-day intensive, with timings, materials, and the exercises that work best in a room."
---

**Audience:** founders, operators, security owners, and engineering leads at companies preparing for a first SOC 2 report. Groups of 4 to 20 work best, ideally two or three people from each company so they can work on their own material together.

**You'll need:** a projector, printed copies of the [controls map](../controls/controls-map.md) and [evidence checklists](../evidence/index.md), laptops for each company team, and the [templates](../templates/index.md) shared ahead of time.

**Tone:** practical. Cost and paperwork are the usual concerns, so show teams how much of the work they already do.

## Half-day format (4 hours)

| Time | Segment | Material |
|---|---|---|
| 0:00 | Welcome. Each team says who asked for SOC 2 and by when | [Module 1](../course/01-decide-why.md) |
| 0:15 | Type I or Type II, and when something lighter will do | Module 1 |
| 0:35 | Scope: draw your system on one page | [Module 2](../course/02-scope.md) exercise |
| 1:05 | Risk: fifteen risks in fifteen minutes, then score the top five | [Module 3](../course/03-risk.md) exercise |
| 1:40 | Break | |
| 1:50 | What a control is, rewrite three weak controls together | [Module 4](../course/04-controls.md) |
| 2:20 | Cut the map: each team marks keep, rewrite, start, or cut for one area | Controls map |
| 2:50 | Evidence: weak and strong examples, and how sampling works | [Module 6](../course/06-evidence.md) |
| 3:20 | The year and the audit: calendar, auditor questions, the report | [Modules 7](../course/07-operate.md) and [8](../course/08-the-audit.md) |
| 3:45 | Each team names its owner, its date, and its first three tasks | [90-day plan](../plan/90-day-plan.md) |

## Two-day format

Day one covers modules 1 to 4 with the full exercises, ending with each team's own controls list. Day two covers modules 5 to 8: teams draft their access control policy, fill the evidence tracker for one area, run a 30-minute tabletop, and role-play an auditor walkthrough of one control.

## Exercises that work well in a room

- **Spot the weak control.** Show five control statements, some vague ("access is reviewed regularly"), some good. Teams fix the vague ones and name the four parts.
- **Evidence sorting.** Hand out printed examples of evidence (a cropped screenshot, a dated export, a chat message, a signed ticket). Teams sort them into would-pass and would-fail, and say why.
- **Auditor role-play.** One person plays the auditor and asks for the population and three samples for one control. The team has to say where each would come from.
- **Tabletop in miniature.** "A customer emails to say their data is on a public forum." Ten minutes: who's called, who decides on customer notice, where the logs are.

## Common questions

- *Do we need a compliance platform?* No. It can save time on evidence collection once you have controls, but it can't decide your scope or run your access reviews. Start with this course and a spreadsheet, and buy a platform later if the evidence load justifies it.
- *How much does the audit cost?* It varies widely by firm, scope, and report type. Get at least three quotes.
- *Can we do it without a security person?* Yes, with a named owner who has real time. An operations or engineering lead can run a first report.

## After the workshop

Send each team the links to the course, their marked-up controls list, and a reminder of the date they named. A short check-in at 30 days helps most teams keep going.

## Sources

- [CISA Tabletop Exercise Packages](https://www.cisa.gov/resources-tools/services/cisa-tabletop-exercise-packages), from CISA: ready-made scenarios and the tabletop format.
- [SOC 2 readiness track](https://github.com/neon1llc/ready-secure-go/tree/main/content/tracks/soc2), in Ready, Secure, Go: the plain-language introduction this course builds on.
