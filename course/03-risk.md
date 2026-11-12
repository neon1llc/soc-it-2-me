---
title: "3. Find your real risks"
description: "Run a first risk assessment in an afternoon: what could go wrong, how likely it is, how bad it would be, and who owns each risk."
---

**Objectives.** By the end of this module you can run a risk assessment with your team, score each risk the same way every time, and record a treatment and an owner for the ones that matter.

## Why auditors care

SOC 2 expects your controls to answer your risks. If you can't show how you decided what could go wrong, an auditor can't tell whether your controls are the right ones. The risk assessment is also one of the few controls that has to be done before anything else, because the rest refer back to it (controls [RISK-01 and RISK-02](../controls/controls-map.md#risk)).

It doesn't need to be elaborate. A spreadsheet with honest rows beats a consultant's heat map nobody revisits.

## A simple, repeatable method

1. **List what you protect.** Customer data, the service staying up, your code, money, and your reputation. Use the inventory from [module 2](02-scope.md).
2. **List what could go wrong** to each, in plain sentences. "An engineer's laptop is stolen with production keys on it." "A vendor we use is breached." "A fake invoice gets paid." Include fraud: someone inside or outside lying to move money or data. Include change: a new product, a new office, a big hire, or a new vendor.
3. **Score likelihood and impact** from 1 to 5 each. Write down what each number means so next year's scores are comparable:

   | Score | Likelihood | Impact |
   |---|---|---|
   | 1 | Less than once in ten years | Barely noticed |
   | 3 | About once in a few years | Customers notice, and it costs a bad week |
   | 5 | Expected this year | Lose major customers or the company |

4. **Multiply** for a risk score from 1 to 25. Anything 12 or above gets a treatment plan now.
5. **Choose a treatment** for each: *reduce* (add or improve a control), *transfer* (insurance or contract), *avoid* (stop doing the risky thing), or *accept* (leadership signs off, with a reason).
6. **Name an owner** for each risk, a person, not a team.
7. **Set a review date.** At least yearly, and whenever the business changes.

## Running the session

Book ninety minutes with leadership, the engineering lead, and whoever handles money and people. Bring a starter list of fifteen risks so nobody faces a blank page. Ask each person what worries them most about the company, and add their answers. Score together. Disagreement is useful. Write down the reasoning.

> [!TIP]
> **Tie risks to controls**
>
> Add a column for the controls that reduce each risk, using IDs from the [controls map](../controls/controls-map.md). Any high risk with no control is a gap, and any control that answers no risk may not be worth keeping.

## Exercise: your first register

Copy the [risk register template](../templates/risk-register.csv). Fill in at least fifteen risks, score them, and give every risk scored 12 or higher a treatment and an owner. Get leadership to sign off on the accepted risks in writing. An email reply is enough.

## Check

1. Name the four treatments.
2. Why write down what each score means?
3. What two events should trigger a new assessment before the year is up?

Next: [4. Write controls you can keep](04-controls.md).

## Sources

- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework), from NIST: the risk and governance structure the risk method follows.
- [2017 Trust Services Criteria, with revised points of focus (2022)](https://www.aicpa-cima.com/resources/download/2017-trust-services-criteria-with-revised-points-of-focus-2022), from the AICPA: the criteria SOC 2 reports measure against, cited here by ID.
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001), from ISO: the information security management system standard and its Annex A controls, a paid standard cited here by clause and control number.
