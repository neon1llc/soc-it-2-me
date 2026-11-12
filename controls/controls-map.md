---
title: The controls map
description: "44 starter controls for a small or growing company, each with an owner, how often it runs, the evidence an auditor asks for, and where it lands in SOC 2 and ISO 27001."
---

<!-- Generated from controls.csv by tools/build-map.mjs. Edit the CSV, then run: node tools/build-map.mjs -->

Each row is one thing your company does, written so an auditor can test it: who does it, how often, and what proof it leaves. Start from these, then cut, merge, and reword until every line is true for you. A control you can't keep doing is worse than none, because the auditor will find the gap.

The SOC 2 column cites Trust Services Criteria IDs, and the ISO 27001 column cites 2022 Annex A controls and clauses. Both are described in our own words. See [how to read the map](index.md).

## Governance

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| GOV-01 | Leadership approves the security program, its owner, and its budget, and reviews progress at least twice a year. | CEO | Semiannual | Meeting notes or minutes with attendees, date, and decisions | CC1.2; CC1.3; CC2.1 | 5.1; 5.2; Clause 9.3 |
| GOV-02 | A named security owner has written responsibilities and the time to carry them out. | CEO | Annual | Role description or org chart naming the owner; leadership sign-off | CC1.3; CC1.5 | 5.2; 5.4 |
| GOV-03 | Security policies are written, approved, published where staff can find them, and reviewed each year. | Security owner | Annual | Policy set with version, approver, and approval date; review record | CC5.3; CC2.2 | 5.1; 5.37 |
| GOV-04 | Everyone acknowledges the code of conduct and key policies at hire and each year. | People lead | At hire; Annual | Acknowledgment records from the HR or e-signature tool | CC1.1; CC2.2 | 6.2; 5.10 |
| GOV-05 | Customer commitments (security terms, SLAs, and the system description) are kept current and shared with customers. | Security owner | Annual | Published trust page or contract template; dated system description | CC2.3 | 5.31; 5.20 |

## Risk

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| RISK-01 | A risk assessment covering security, fraud, and major changes is done each year and when the business changes. | Security owner | Annual; On change | Risk register with likelihood, impact, owner, treatment, and review date | CC3.1; CC3.2; CC3.3; CC3.4 | Clause 6.1.2; 5.7 |
| RISK-02 | Each high risk has an owner and a treatment plan that leadership has accepted. | Security owner | Annual | Register entries with treatment, owner, and acceptance sign-off | CC3.2; CC5.1; CC9.1 | Clause 6.1.3 |
| RISK-03 | An inventory of systems, data stores, and the data each holds is kept current. | Engineering lead | Quarterly | System and data inventory with owner and data classification | CC3.2; CC6.1; C1.1 | 5.9; 5.12 |
| RISK-04 | An independent check of the controls (internal review or outside readiness assessment) happens each year. | Security owner | Annual | Review report and the tracked fixes | CC4.1; CC4.2 | 5.35; Clause 9.2 |

## People

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| PPL-01 | New hires are background checked where the law allows, before they get access to customer data. | People lead | At hire | Check completion record for each hire in the period | CC1.4 | 6.1 |
| PPL-02 | Staff and contractors sign confidentiality terms before access. | People lead | At hire | Signed agreements for each hire and contractor | CC1.1; C1.1 | 6.2; 6.6 |
| PPL-03 | Everyone completes security awareness training at hire and each year. | Security owner | At hire; Annual | Training completion report with names and dates | CC1.4; CC2.2 | 6.3 |
| PPL-04 | Performance and conduct issues, including security policy breaches, follow a written process. | People lead | On event | Disciplinary policy; anonymized case log if any occurred | CC1.5 | 6.4 |

## Access

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| ACC-01 | Access is granted by role, approved by the system owner, and recorded in a ticket. | System owners | On request | Access request tickets with approver and date, sampled across the period | CC6.2; CC6.3 | 5.15; 5.18 |
| ACC-02 | Departing staff lose access to every system within one business day. | People lead; IT | On departure | Departure list matched to account disable times | CC6.2; CC6.3 | 5.18; 6.5 |
| ACC-03 | System owners review who has access each quarter and fix what they find. | System owners | Quarterly | Signed review with the user list, the changes made, and dates | CC6.2; CC6.3; CC4.1 | 5.18 |
| ACC-04 | Single sign-on and phishing-resistant two-step sign-in are required for company systems. | IT | Continuous | SSO and MFA policy settings; report of users and MFA status | CC6.1 | 5.17; 8.5 |
| ACC-05 | Administrator and production access is limited to named people, uses separate accounts, and is logged. | Engineering lead | Quarterly | Admin list; access logs; review record | CC6.1; CC6.3 | 8.2; 8.3 |
| ACC-06 | Service accounts and keys have owners, are stored in a secrets manager, and are rotated. | Engineering lead | Quarterly | Secrets inventory with owners and last rotation dates | CC6.1 | 5.17; 8.24 |

## Endpoints

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| END-01 | Company laptops and phones are managed, encrypted, screen locked, and kept up to date. | IT | Continuous | Device management compliance report | CC6.1; CC6.7; CC6.8 | 8.1; 8.7 |
| PHY-01 | Office and equipment areas are locked, and visitors are signed in; data center security is inherited from the cloud provider. | Office lead | Continuous | Office access list; visitor log; cloud provider SOC report | CC6.4 | 7.1; 7.2; 7.4 |
| END-02 | Lost or stolen devices are reported and wiped, and retired devices are wiped with a record. | IT | On event | Device log with wipe confirmations | CC6.5; C1.2 | 7.10; 7.14; 8.10 |

## Network

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| NET-01 | Production networks restrict inbound traffic to what is needed, and changes go through review. | Engineering lead | Continuous | Firewall or security group rules; change tickets | CC6.6 | 8.20; 8.22 |
| NET-02 | Data is encrypted in transit and at rest with managed keys. | Engineering lead | Continuous | TLS configuration; storage and database encryption settings | CC6.1; CC6.7 | 8.24 |

## Vulnerabilities

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| VUL-01 | Systems and dependencies are scanned for vulnerabilities, and findings are fixed within set timeframes. | Engineering lead | Continuous | Scan reports; tickets showing fix dates against the policy timeframes | CC7.1 | 8.8 |
| VUL-02 | An outside penetration test runs each year and its findings are tracked to closure. | Security owner | Annual | Test report; remediation tickets | CC4.1; CC7.1 | 8.8; 8.29 |

## Change

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| CHG-01 | Code and infrastructure changes are reviewed by someone other than the author before production. | Engineering lead | On change | Pull requests with an approving reviewer, sampled across the period | CC8.1 | 8.32; 5.3 |
| CHG-02 | Changes pass automated tests and deploy through a pipeline; no one edits production by hand. | Engineering lead | On change | Pipeline configuration; branch protection settings; deploy logs | CC8.1; CC5.2 | 8.25; 8.32 |
| CHG-03 | Development, test, and production are separate, and production data is not used in testing. | Engineering lead | Continuous | Account or environment layout; data handling rule | CC8.1; C1.1 | 8.31; 8.33 |
| CHG-04 | Emergency changes are allowed, recorded, and reviewed after the fact. | Engineering lead | On event | Emergency change log with after-the-fact approvals | CC8.1 | 8.32 |

## Operations

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| OPS-01 | Logs from production and identity systems are collected, kept for a set time, and protected from change. | Engineering lead | Continuous | Log settings with retention; access restrictions | CC7.2 | 8.15 |
| OPS-02 | Alerts for security events and outages reach an on-call person, who responds. | Engineering lead | Continuous | Alert rules; on-call schedule; sample alert with response | CC7.2; CC7.3; A1.1 | 8.16 |
| OPS-03 | Capacity and performance are monitored against thresholds. | Engineering lead | Continuous | Dashboards and alert thresholds | A1.1 | 8.6 |

## Incidents

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| INC-01 | A written incident response plan names roles, severity levels, and contact steps, including customer notice. | Security owner | Annual | Approved plan with review date | CC7.3; CC7.4; CC2.3 | 5.24; 5.26 |
| INC-02 | Incidents are logged, handled per the plan, and closed with lessons learned. | Security owner | On event | Incident tickets with timeline, actions, and a review | CC7.4; CC7.5 | 5.25; 5.26; 5.27; 5.28 |
| INC-03 | The incident plan is exercised with a tabletop each year. | Security owner | Annual | Tabletop notes with attendees, scenario, and follow-ups | CC7.4; CC7.5 | 5.24; 5.27 |

## Continuity

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| BCP-01 | Backups run on schedule, are encrypted, and are stored apart from production. | Engineering lead | Continuous | Backup settings and job history | A1.2; CC7.5 | 8.13 |
| BCP-02 | A restore from backup is tested at least each year, with the time it took recorded. | Engineering lead | Annual | Restore test record with date, data restored, and duration | A1.3; CC7.5 | 8.13; 5.30 |
| BCP-03 | A continuity plan covers loss of a key system, provider, or person, and is reviewed each year. | Security owner | Annual | Approved plan; review record | CC9.1; A1.2; A1.3 | 5.29; 5.30 |

## Vendors

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| VEN-01 | Vendors that touch customer data are reviewed before signing and each year, by risk. | Security owner | Before signing; Annual | Vendor list with risk tier; review records; SOC reports collected | CC9.2 | 5.19; 5.21; 5.22 |
| VEN-02 | Contracts with key vendors include security and confidentiality terms. | Security owner | Before signing | Contracts or DPAs with security clauses | CC9.2 | 5.20 |
| VEN-03 | Customer responsibilities from vendor SOC reports (complementary user entity controls) are met. | Security owner | Annual | Vendor CUEC list mapped to the company's own controls | CC9.2 | 5.23 |

## Data

| ID | Control | Owner | How often | Evidence | SOC 2 | ISO 27001 |
|---|---|---|---|---|---|---|
| DATA-01 | Data is classified, and confidential data is handled per its class. | Security owner | Annual | Classification policy; inventory showing classes | C1.1 | 5.12; 5.13 |
| DATA-02 | Customer data is deleted on request or at contract end, within a set time, with a record. | Engineering lead | On request | Deletion requests with completion dates | C1.2 | 8.10 |

## Coverage by SOC 2 criterion

Every criterion below should have at least one control. If you remove a control, check that its criteria are still covered.

| Criterion | Controls |
|---|---|
| CC1.1 | GOV-04, PPL-02 |
| CC1.2 | GOV-01 |
| CC1.3 | GOV-01, GOV-02 |
| CC1.4 | PPL-01, PPL-03 |
| CC1.5 | GOV-02, PPL-04 |
| CC2.1 | GOV-01 |
| CC2.2 | GOV-03, GOV-04, PPL-03 |
| CC2.3 | GOV-05, INC-01 |
| CC3.1 | RISK-01 |
| CC3.2 | RISK-01, RISK-02, RISK-03 |
| CC3.3 | RISK-01 |
| CC3.4 | RISK-01 |
| CC4.1 | RISK-04, ACC-03, VUL-02 |
| CC4.2 | RISK-04 |
| CC5.1 | RISK-02 |
| CC5.2 | CHG-02 |
| CC5.3 | GOV-03 |
| CC6.1 | RISK-03, ACC-04, ACC-05, ACC-06, END-01, NET-02 |
| CC6.2 | ACC-01, ACC-02, ACC-03 |
| CC6.3 | ACC-01, ACC-02, ACC-03, ACC-05 |
| CC6.4 | PHY-01 |
| CC6.5 | END-02 |
| CC6.6 | NET-01 |
| CC6.7 | END-01, NET-02 |
| CC6.8 | END-01 |
| CC7.1 | VUL-01, VUL-02 |
| CC7.2 | OPS-01, OPS-02 |
| CC7.3 | OPS-02, INC-01 |
| CC7.4 | INC-01, INC-02, INC-03 |
| CC7.5 | INC-02, INC-03, BCP-01, BCP-02 |
| CC8.1 | CHG-01, CHG-02, CHG-03, CHG-04 |
| CC9.1 | RISK-02, BCP-03 |
| CC9.2 | VEN-01, VEN-02, VEN-03 |
| A1.1 | OPS-02, OPS-03 |
| A1.2 | BCP-01, BCP-03 |
| A1.3 | BCP-02, BCP-03 |
| C1.1 | RISK-03, PPL-02, CHG-03, DATA-01 |
| C1.2 | END-02, DATA-02 |

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
- [Mapping: 2017 Trust Services Criteria to ISO 27001](https://www.aicpa-cima.com/resources/download/mapping-2017-trust-services-criteria-to-iso-27001), from the AICPA: the official crosswalk to check the ISO column against.
