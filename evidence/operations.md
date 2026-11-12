---
title: "Evidence: operations, vulnerabilities, and network"
description: "Proof that logs are kept, alerts reach someone, vulnerabilities are fixed on time, and networks and data are protected."
---

Controls: OPS-01 to OPS-03, VUL-01, VUL-02, NET-01, NET-02.

## What the auditor asks for

- [ ] Log settings for production and the identity provider: what's collected, retention, and who can delete.
- [ ] Alert rules for security events and outages, the on-call schedule, and a sample alert with the response.
- [ ] Monitoring dashboards and capacity thresholds.
- [ ] Vulnerability scan results across the window, and tickets showing fixes within the policy's timeframes by severity.
- [ ] The yearly penetration test report and remediation tickets.
- [ ] Firewall or security group rules, and the change tickets for edits.
- [ ] TLS settings and encryption settings for storage and databases.

## What good looks like

A vulnerability policy with timeframes by severity (for example, critical within 15 days) and a report showing how many findings met them. Penetration test findings each tied to a closed ticket or an accepted risk.

## Common exceptions

- Critical findings fixed late with no documented exception.
- Logs kept for 30 days when the window is 6 months, so the auditor can't sample early events.
- Alerts that went to an unwatched channel.

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
