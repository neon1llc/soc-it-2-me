---
title: "7. Run it all year"
description: "Keep controls running through the observation window and beyond: a shared calendar, backup owners, and the yearly exercises auditors expect."
---

**Objectives.** By the end of this module you can set up a calendar for every recurring control, run a quarterly access review and a yearly tabletop, and handle the people and system changes that break controls.

## The window is the test

During a Type II observation window, every control has to run every time. The work isn't hard, but it's easy to forget, and the people who set it up move on. Treat compliance as operations: scheduled, owned, and visible.

## The calendar

Put each recurring control on a shared calendar with the owner and a backup. The [year-round calendar](../plan/observation-calendar.md) gives a starting layout. A typical year:

| When | What |
|---|---|
| Every quarter | Access reviews; secrets and admin list review; system inventory refresh; security update to leadership |
| Twice a year | Leadership review of the program |
| Every year | Risk assessment; policy review and acknowledgments; security training; vendor reviews; penetration test; restore test; tabletop exercise; continuity plan review; readiness or internal review |
| Every event | Access requests and removals; code review; incident handling; device wipes; vendor onboarding |

## Running an access review

1. Export the current user list from each in-scope system, dated.
2. Send each list to the system owner with a deadline of a week.
3. The owner marks each account keep or remove, and checks that permissions match the person's role.
4. Remove what's marked, with a ticket for each removal.
5. File the lists, the marks, the tickets, and the owner's sign-off together. The [access review template](../templates/access-review.md) has the form.

The most common finding: accounts of people who left months ago, still active in a tool nobody thought of. Check that your departure checklist covers every system in the inventory.

## Running a tabletop

Once a year, gather the incident response team for an hour and talk through a scenario: "A customer emails to say their data appeared on a public forum," or "Our cloud bill tripled overnight." Walk through the plan step by step. Who's called? Who decides to tell customers? Where are the logs? Write down what was slow or unclear and fix it. The notes, the attendee list, and the follow-up tickets are the evidence for [INC-03](../controls/controls-map.md#incidents).

## Changes that break controls

- **An owner leaves.** Reassign their controls the same week, and update the calendar.
- **A new system arrives.** Add it to the inventory, the access reviews, the departure checklist, and the vendor list.
- **A new vendor touches customer data.** Review it before signing, not after.
- **A control changes** (say, a new device management tool). Record the date, keep evidence from both before and after, and tell the auditor.

## Exercise: build the calendar

Create the shared calendar with every recurring control from your list, each with an owner and a backup. Book the next quarterly access review now. Pick a tabletop scenario from your risk register and book the session.

## Check

1. What's the most common access review finding?
2. Name three pieces of tabletop evidence.
3. What do you do when a control owner leaves mid-window?

Next: [8. The audit, and after](08-the-audit.md).
