# SOC It 2 Me

**Hands-on SOC 2 readiness training for small and growing companies.** A course, a controls map, evidence checklists, and templates that take a team from "a customer asked for our SOC 2 report" to a clean first audit, without buying a compliance platform first.

From [neon1](https://neon1.tech). *1 is glad to be of service.*

---

## Who it's for

- **Founders and operators** at a software or services company whose customers have started sending security questionnaires.
- **The person who just became "the security owner"** and needs to know what to do on Monday.
- **Engineers and IT leads** who already do most of the right things and need to prove it.
- **Trainers and consultants** who want an open, adaptable course to teach from.

You don't need a security background. You do need someone with real time to own the work.

## What's inside

| Folder | What it holds |
|---|---|
| [`course/`](course/index.md) | Eight modules, each with objectives, a lesson, an exercise on your own company, and a check. About an hour each. |
| [`controls/`](controls/index.md) | A [controls map](controls/controls-map.md) of 44 starter controls with owners, frequency, and evidence, mapped to SOC 2 criteria and ISO 27001:2022. Also as [CSV](controls/controls.csv) for a spreadsheet. |
| [`evidence/`](evidence/index.md) | Checklists by area: what the auditor will ask for, what good proof looks like, and the mistakes that cause exceptions. |
| [`templates/`](templates/index.md) | A risk register, an evidence tracker, access and vendor review forms, an incident report, a policy set outline, and a system description outline. |
| [`plan/`](plan/90-day-plan.md) | A 90-day readiness plan and a year-round calendar for recurring controls. |
| [`workshop/`](workshop/facilitator-guide.md) | A facilitator guide for teaching the course as a half-day or two-day workshop. |

## Start here

1. Read [module 1](course/01-decide-why.md) and answer its questions. If SOC 2 isn't the right answer for you yet, it says what is.
2. Copy the [controls CSV](controls/controls.csv) and the [evidence tracker](templates/evidence-tracker.csv) into your own spreadsheet.
3. Follow the [90-day plan](plan/90-day-plan.md), taking one module a week.

New to SOC 2 altogether? Read the [SOC 2 track in Ready, Secure, Go](https://github.com/neon1llc/ready-secure-go/tree/main/content/tracks/soc2) first. It explains what SOC 2 is in plain words. SOC It 2 Me is the hands-on part: the work, the forms, and the evidence.

## Growing past SOC 2

The controls map carries ISO 27001:2022 references next to the SOC 2 criteria, so the same controls can grow into an ISO 27001 program without starting over. ISO adds a formal management system (scope statement, risk treatment plan, statement of applicability, internal audit, and management review), which [module 8](course/08-the-audit.md#after-the-report) touches on.

## What this isn't

SOC It 2 Me is readiness training, not audit or legal advice. Only a licensed CPA firm can issue a SOC 2 report. SOC 2 and the Trust Services Criteria are from the AICPA, and ISO/IEC 27001 is published by ISO and IEC. Both are described here in our own words and cited by ID only. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md).

## Checking a change

```
node tools/check.mjs        # front matter on every page, and no broken links
node tools/build-map.mjs    # rebuild controls-map.md after editing controls.csv
```

## Licenses

| What | License | What it means |
|---|---|---|
| Written material (everything except `tools/` and `.github/`) | [CC BY-SA 4.0](LICENSE) | Share it, teach from it, adapt it, even commercially. Credit it as *"Based on SOC It 2 Me by neon1 (neon1.tech), CC BY-SA 4.0"* and share your changes under the same license. |
| Code (`tools/`, `.github/`) | [MIT](LICENSE-CODE) | Use it for anything, keeping the copyright notice. |
| The SOC It 2 Me and neon1 names and the neon1 logo | Reserved | Not covered by either license. See [TRADEMARK.md](TRADEMARK.md). |

SOC It 2 Me is © 2026 neon1 LLC. Keep the [NOTICE](NOTICE) file in copies and adaptations.

Found something wrong or outdated? See [SECURITY.md](SECURITY.md). Want to help? See [CONTRIBUTING.md](CONTRIBUTING.md).
