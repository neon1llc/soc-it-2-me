# Changelog

SOC It 2 Me releases use `v0.MINOR.PATCH` until the first complete release, v1.0.0, following neon1's [versioning standard](https://neon1.tech/knowledge/standards/versioning/). Each version below has an annotated tag on the commit it names; the release workflow adds missing tags and never moves one.

## Unreleased

### Fixed
- The AICPA SOC overview link pointed at a page the AICPA retired and now redirects. Sources link the AICPA's current SOC suite of services page instead.
- LICENSE names the same code folders as NOTICE and LICENSE-CODE: tools/ and .github/.

## v0.1.1 - 2026-11-12

### Changed
- Every course module, evidence checklist, and template that relies on an outside source ends with a Sources section linking the AICPA, ISO, NIST, and CISA pages behind it. The controls map has one too.
- Plainer wording throughout, with claims about how long readiness takes, how many controls companies keep, and how readers treat exceptions stated without numbers the sources don't support.

### Fixed
- Auditors usually test two or more of the four quarterly instances, not all of them.
- Callouts use GitHub's alert syntax, so they render on GitHub.

## v0.1.0 - 2026-11-12

### Added
- Eight course modules, from deciding why to get SOC 2 through the audit and what comes after.
- A controls map of 44 starter controls with owners, frequency, and evidence, mapped to SOC 2 criteria and ISO 27001:2022, with a coverage check.
- Evidence checklists for nine areas, templates for the recurring work, a 90-day plan, a year-round calendar, and a workshop facilitator guide.
