// check.mjs: the repository's one check. Every content page has front matter with a title and
// description, and every relative Markdown link points at a file that exists. No dependencies.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";

// Folders that hold pages a reader opens; README and repository documents are checked for links only
const CONTENT_DIRS = "course controls evidence templates plan workshop".split(" ");
const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const SKIP = new Set([".git", "node_modules", ".github"]);

// Walk the tree and collect every Markdown file
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

const problems = [];
const files = walk(ROOT);

for (const file of files) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");

  // Content pages open with front matter naming a title and a description
  if (CONTENT_DIRS.some((d) => rel.startsWith(d + "/"))) {
    const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!fm) problems.push(`${rel}: no front matter`);
    else {
      if (!/^title:\s*\S/m.test(fm[1])) problems.push(`${rel}: front matter has no title`);
      if (!/^description:\s*\S/m.test(fm[1])) problems.push(`${rel}: front matter has no description`);
    }
  }

  // Relative links must land on a real file; web links, mail links, and in-page anchors are left alone
  const body = text.replace(/```[\s\S]*?```/g, "");
  for (const m of body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    const target = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(target)) continue;
    const path = decodeURIComponent(target.split("#")[0]);
    if (!existsSync(resolve(dirname(file), path))) problems.push(`${rel}: broken link ${target}`);
  }
}

// Report and fail on any problem, so the workflow turns red
if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} problem(s) in ${files.length} files`);
  process.exit(1);
}
console.log(`ok: ${files.length} files, pages and links sound`);
