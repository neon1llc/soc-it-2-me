---
title: "Evidence: continuity and backups"
description: "Proof that backups run and are kept apart, restores are tested, and a continuity plan is current."
---

Controls: BCP-01 to BCP-03.

## What the auditor asks for

- [ ] Backup configuration for each in-scope data store: frequency, retention, encryption, and where copies are kept.
- [ ] Backup job history or alerts for failures, across the window.
- [ ] The yearly restore test: what was restored, from when, how long it took, and whether it met the plan's targets.
- [ ] The business continuity plan, with recovery targets and a review date.

## What good looks like

A restore test that restored real data into a separate environment and checked it, with the time recorded against the recovery time objective in the plan.

## Common exceptions

- Backups that exist but were never restored.
- Backups stored in the same account as production, with the same administrators.
- A continuity plan that names someone who left.

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
