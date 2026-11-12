---
title: "8. The audit, and after"
description: "Choose an auditor, prepare for fieldwork, read your report the way customers will, and keep it current."
---

**Objectives.** By the end of this module you can shortlist and choose an audit firm, prepare your team for fieldwork, understand each section of the report, and plan what comes after the first one.

## Choosing an auditor

Only a licensed CPA firm can issue a SOC 2 report. Firms vary a lot in price, depth, and how well they understand small cloud companies. Talk to at least three, and ask:

- How many SOC 2 reports did you issue last year for companies our size and type?
- Who does the fieldwork, and how much access will we have to them?
- Do you offer a readiness assessment, and is it separate from the audit team? (It should be: a firm can't audit controls it designed.)
- How do you collect evidence: your portal, our tracker, or a compliance platform?
- What's included in the fee, and what costs extra?
- Can we speak with two clients you audited recently?

Ask your customers which firms they've seen reports from and trust. Their security teams have opinions.

## The readiness assessment

Before the real audit, many firms offer a **readiness assessment**: a lighter review of your design that lists gaps without issuing a report. It's worth it for a first audit. Fix what it finds, then start the window.

## Fieldwork

For a Type II, fieldwork happens near the end of the window and runs from a few days to a few weeks. Expect:

1. **A request list** of populations, policies, and settings evidence. Your tracker should answer most of it on day one.
2. **Walkthroughs**, where control owners show how they do the work, on screen.
3. **Sample requests**, where the auditor picks items from your populations and asks for the evidence for each.
4. **Follow-up questions** and possible exceptions, which you can respond to before the report is final.

Brief every control owner beforehand: answer what's asked, show the real system, and say "I'll find out" rather than guess.

## Reading the report

A SOC 2 report has a few main parts:

- **The auditor's opinion.** Unqualified (clean) is the goal.
- **Management's assertion.** Your statement that the description is accurate and the controls met the criteria.
- **The system description.** What you wrote in [module 2](02-scope.md), refined.
- **Controls, tests, and results.** Each control, how the auditor tested it, and any exceptions with your management response.
- **Complementary controls** your customers and your subservice organizations are expected to do.

Read it the way a customer's security team will. Look for exceptions, scope gaps, and complementary controls a customer might miss.

## After the report

- **Share it under NDA**, usually through a trust page or on request.
- **Keep the window rolling.** Move to a twelve-month period that starts when the last one ended, so there's no gap in coverage.
- **Use bridge letters** to cover the months between the end of one period and the next report. A bridge letter is your own statement that nothing material has changed. The auditor doesn't issue it.
- **Grow on purpose.** Add criteria, such as Availability, when customers need them. If you're heading to ISO 27001, the controls map already carries Annex A references. ISO adds a management system: a scope statement, a statement of applicability listing every Annex A control and why it applies or doesn't, a risk treatment plan, internal audits, and management reviews.

## Check

1. Why should the readiness assessment be separate from the audit?
2. What are the main parts of a SOC 2 report?
3. What does a bridge letter do, and who writes it?

That's the course. Keep the [calendar](../plan/observation-calendar.md) running, and come back to [module 3](03-risk.md) each year when the risk assessment is due.

## Sources

- [SOC 2 overview](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2), from the AICPA: what a SOC 2 report is and who issues one.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
