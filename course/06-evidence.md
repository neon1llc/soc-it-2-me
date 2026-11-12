---
title: "6. Evidence that holds up"
description: "What auditors accept as proof, how they sample, and how to collect evidence once instead of scrambling at the end."
---

**Objectives.** By the end of this module you can tell good evidence from weak, explain how an auditor samples a population, and set up an evidence tracker that fills itself as the work happens.

## What makes evidence good

An auditor needs to see that a control happened, when, on which system, and by whom. Good evidence is:

- **Dated.** The date is part of the record, not typed on later.
- **Attributable.** It shows who did or approved the thing.
- **From the system of record.** An export from the identity provider beats a hand-typed list of users.
- **Complete.** It covers the whole period and the whole population, including the instances that went badly.
- **Unedited.** A screenshot should show the URL or system name and the clock. Cropped screenshots raise questions.

> [!NOTE]
> **Weak and strong**
>
> Weak: "Quarterly access review done, see notes." Strong: an exported user list from each system, dated, with the reviewer's initials beside each kept or removed account, and the tickets for the removals.

## How auditors sample

For a Type II, the auditor doesn't check every event. They ask for the **population**, a complete list of every time the control should have run, then pick a **sample** from it.

- For a control that runs on every event, such as access requests, pull requests, or departures, they ask for the full list for the window, then test a sample. The sample size grows with the population, and a few dozen is common for frequent events.
- For quarterly controls, they usually test two or more of the instances, and in a short window, all of them.
- For yearly controls, they test the one instance.

Two consequences matter. First, you need to be able to produce a complete population, which means events have to be logged somewhere, not handled in chat. Second, one missed instance in a small population is a big share of it, and a missing quarter shows up as soon as the auditor asks for the population.

## Exceptions are survivable

An **exception** is a sample that failed. It appears in the report with your management response explaining what happened and what you changed. Readers weigh how serious each exception is and how you responded. A single isolated exception reads very differently from a pattern in one area. A **qualified opinion** happens when a control failed badly enough that a criterion wasn't met, and that's the result to avoid.

## Collect as you go

The worst readiness projects collect evidence in the last two weeks. The best set up collection once:

1. **Use tickets for every manual control.** One recurring ticket per control instance, assigned to the owner, closed with the evidence attached.
2. **Turn on the logs you'll need**, with retention longer than the observation window plus a few months.
3. **Export settings evidence once per window** for automated controls (branch protection, MFA enforcement, encryption), and again if they change.
4. **Track it in one place.** The [evidence tracker](../templates/evidence-tracker.csv) lists each control, each expected instance, where the proof lives, and its status.

The [evidence checklists](../evidence/index.md) show what auditors ask for in each area.

## Exercise: start the tracker

Copy the evidence tracker. For each control on your list, fill in the expected instances for the next three months and where the evidence will live. Then collect one real piece of evidence for three controls today, and check each against the five qualities above.

## Check

1. What's a population, and why must it be complete?
2. Why does a missed quarterly control show up so easily?
3. What turns an exception into a qualified opinion?

Next: [7. Run it all year](07-operate.md).

## Sources

- [SOC 2 overview](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2), from the AICPA: what a SOC 2 report is and who issues one.
- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
