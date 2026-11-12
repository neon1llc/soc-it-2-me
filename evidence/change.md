---
title: "Evidence: change management"
description: "Proof that changes are reviewed by someone else, tested, deployed through a pipeline, and kept apart from production data."
---

Controls: CHG-01 to CHG-04.

## What the auditor asks for

- [ ] A list of every change deployed to production in the window (the population), usually merged pull requests and infrastructure changes.
- [ ] For a sample: the pull request, an approving review by someone other than the author, passing checks, and the deploy record.
- [ ] Branch protection or repository rule settings, showing review and checks required, and who can bypass them.
- [ ] The pipeline configuration showing deploys run from the pipeline, not by hand.
- [ ] The environment layout (separate accounts or projects) and the rule against production data in testing.
- [ ] The emergency change log, with after-the-fact approvals.

## What good looks like

Repository rules that require review on the main branch, with bypass limited to a named few and every bypass logged and explained.

## Common exceptions

- Admins bypassing review, with no record of why.
- Infrastructure changed by hand in the cloud console, with no ticket or pull request.
- An approving review from the author's second account, or a review approved after the merge.

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
