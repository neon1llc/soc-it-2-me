---
title: "5. Policies people read"
description: "Write a short, honest policy set that matches what your company does, get it approved, and get everyone to acknowledge it."
---

**Objectives.** By the end of this module you can list the policies a first SOC 2 report needs, write them short enough that staff read them, and set up approval, publication, and acknowledgment.

## What policies are for

A policy says what the company requires. Controls show it happens. Auditors read your policies first, then test whether your controls match them. The most common policy problem is a downloaded template promising things the company has never done.

## The set you need

A small company can usually cover SOC 2 with about ten documents. Some combine several into one handbook, which is fine.

| Policy | Says |
|---|---|
| Information security | Who owns security, how decisions are made, and how the other policies fit |
| Acceptable use | What staff may and may not do with company devices, accounts, and data |
| Access control | How access is requested, approved, reviewed, and removed |
| Change management | How code and infrastructure changes are reviewed, tested, and deployed |
| Incident response | Severity levels, roles, who to call, and when customers are told |
| Business continuity and backup | What gets backed up, how often, how restores are tested, and what happens if a key system or person is lost |
| Vendor management | How vendors are chosen, reviewed, and tracked by risk |
| Data classification and retention | Classes of data, how each is handled, and how long it's kept |
| Risk management | How risks are assessed, scored, treated, and reviewed |
| Human resources security | Background checks, confidentiality agreements, training, and offboarding |
| Encryption and key management | What's encrypted, with what, and who manages keys (often a section of another policy) |

The [policy set outline](../templates/policy-outline.md) gives the headings for each.

## Writing them so they get read

- **One to three pages each.** Long policies are skimmed, and skimmed policies are ignored.
- **Say "we" and "you."** "You report a lost laptop to IT within one hour" is clearer than "Personnel shall notify the IT function."
- **State the rule, not the tool.** "Production access requires two-step sign-in" survives a change of provider. Name tools in procedures, not policies.
- **Match the controls.** If the access policy says "quarterly," the control says "quarterly."
- **Put an owner, a version, an approval date, and a next review date** at the top of each.

## Approval, publishing, and acknowledgment

1. Leadership approves the set. A dated email or meeting note naming the documents and versions is evidence for [GOV-03](../controls/controls-map.md#governance).
2. Publish where staff work: the company wiki or shared drive, linked from onboarding.
3. Everyone acknowledges at hire and each year ([GOV-04](../controls/controls-map.md#governance)). An HR tool, an e-signature service, or a form that records name and date all work.
4. Review yearly, and when something big changes. Record the review even when nothing changes.

## Exercise: your policy set

Draft the access control and incident response policies first, because they shape the most controls. Use your rewritten controls list from [module 4](04-controls.md) so every promise matches. Then outline the rest and assign an owner and a due date to each.

## Check

1. What's the most common policy problem auditors find?
2. Why state rules instead of tools?
3. What four things go at the top of each policy?

Next: [6. Evidence that holds up](06-evidence.md).

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
