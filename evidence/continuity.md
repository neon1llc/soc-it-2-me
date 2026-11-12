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
