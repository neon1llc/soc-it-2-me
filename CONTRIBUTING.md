# Contributing

Thanks for wanting to make this better. People use this material to prepare for a real audit, so accuracy comes first.

## What helps most

- Correcting anything an auditor would disagree with. Say which firm or report taught you, if you can.
- Evidence examples that held up, and mistakes that caused exceptions (with names removed).
- Controls that fit a company type the map doesn't serve well yet, such as a services firm with no software.
- Translations, accessibility fixes, and printable versions.

## How to write here

- **Talk to a person.** Short sentences, plain words, and the reason before the step.
- **Every control is testable.** Name who does it, how often, and the proof it leaves.
- **No fear selling and no product shilling.** Name tools when it helps, and give more than one.
- **Never copy the standards.** Describe SOC 2 criteria and ISO controls in your own words and cite them by ID.
- Use the serial comma.

## Checking your change

```
node tools/check.mjs
node tools/build-map.mjs   # after editing controls/controls.csv
```

## Branches and commits

Name branches `feat/`, `fix/`, `docs/`, or `chore/` plus a short hyphenated description. Use [Conventional Commits](https://www.conventionalcommits.org/), for example `feat(controls): add a data retention control` or `fix(evidence): correct the access review sample size`. Merge with `git merge --no-ff`, and never rewrite history on `main`.
