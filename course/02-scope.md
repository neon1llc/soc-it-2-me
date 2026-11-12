---
title: "2. Draw the boundary"
description: "Choose the system, the criteria, the people, and the vendors your report covers, and handle the providers you rely on."
---

**Objectives.** By the end of this module you can write a scope statement, choose which Trust Services Criteria to include, list the vendors your system depends on, and decide how the report treats them.

## Scope is a product decision

Your report describes one **system**: the service your customers buy, plus the people, processes, software, infrastructure, and data that deliver it. Everything inside the boundary gets tested. Everything outside doesn't, but customers will notice what you left out.

Keep scope as small as the customer's need allows. A first report on the one product customers ask about is better than a stalled report on everything you own.

## The four parts of scope

1. **The service.** Name it the way customers do. "The Acme scheduling platform, including its web app, API, and mobile apps."
2. **The criteria.** Security (the common criteria) is always in. Add others only if customers need them:
   - **Availability** if you promise uptime in contracts.
   - **Confidentiality** if you hold customer secrets such as designs, financials, or source code.
   - **Processing integrity** if customers rely on your calculations or transactions being complete and correct, as with payroll or billing.
   - **Privacy** if you collect personal information directly from individuals. Most business-to-business companies leave this out at first.
3. **The locations and people.** Usually everyone with access to production or customer data, wherever they work.
4. **The infrastructure.** Cloud accounts, code repositories, identity provider, and the tools that touch customer data.

## Vendors you rely on

Your cloud provider runs the data center, and you can't audit it. The report handles this in one of two ways:

- **Carve-out** (most common): the report names the provider as a **subservice organization**, says which of its controls you rely on, and points to its own SOC report. You review that report each year (control [VEN-01](../controls/controls-map.md#vendors)).
- **Inclusive:** the provider's controls are tested as part of your report. This is rare and needs the provider's cooperation.

Every vendor SOC report lists **complementary user entity controls**: things the vendor expects *you* to do, such as turning on two-step sign-in for your admin accounts. Your own report has to show you do them (control [VEN-03](../controls/controls-map.md#vendors)).

Your own report will list complementary controls for *your* customers, too, such as "customers manage who in their company has access." Start that list now.

## Exercise: write the scope statement

Using the [system description outline](../templates/system-description-outline.md), fill in:

1. The service, in one sentence.
2. The criteria, with a reason for each one beyond Security.
3. Every system that stores or processes customer data. Draw a simple diagram: users, apps, databases, and the arrows between them.
4. Every vendor that touches customer data or runs part of the service, marked carve-out or not relevant.
5. Three complementary controls your customers must do.

## Check

1. What does "carve-out" mean, and what do you owe the auditor when you use it?
2. When should Availability be in scope?
3. Why keep the first scope small?

Next: [3. Find your real risks](03-risk.md).

## Sources

- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [SOC 2 overview](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2), from the AICPA: what a SOC 2 report is and who issues one.
