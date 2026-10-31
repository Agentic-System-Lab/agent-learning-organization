# Building an AI Agent Learning Engineering Team

English | [繁體中文](README.zh-TW.md)

**Site: [agentic-system-lab.github.io/agent-learning-organization](https://agentic-system-lab.github.io/agent-learning-organization/?lang=en)** (English and Traditional Chinese; the switch at the top right changes the language)

**Turn "I don't know" into a shared team capability.** For a team of 3–4 engineers, you don't need heavy knowledge management. The point is a short loop: find real problems in the work, verify them with small experiments, then distill the results into reusable engineering assets.

> A learning organization ≠ endless classes. It is a team that keeps turning unknowns into verified shared knowledge.

This README covers the main points of the site. The site is a one-page playbook from [Agentic System Lab](https://github.com/Agentic-System-Lab).

## What is a "learning organization"?

It isn't "we take a lot of classes" or "we run lots of sharing sessions." It is a team that keeps finding problems, creating new knowledge, sharing it, and actually changing later decisions and ways of working.

How to tell:

- **Surface the unknown**: we know what we don't know
- **Verify quickly**: experiments and evidence replace gut-feel arguments
- **Transfer across people**: knowledge doesn't stay in one person's head
- **Produce change**: what we learn enters process, code and decisions

## How this Agent Engineering Lab relates to a learning organization

The Agent Engineering Lab is how a learning organization is practiced: learning doesn't just live in people's heads, it enters team process and the engineering system.

1. **Real work produces the questions.** Don't pick topics from a textbook. Find real unknowns in the product, agent failures, performance bottlenecks and the development process.
2. **The lab turns problems into shared learning.** Through hypothesis, baseline, experiment, traces and discussion, individual experience becomes knowledge the team can verify.
3. **Learning returns to production.** Distill conclusions into evals, tests, patterns, tools, ADRs or guardrails, so the next implementation actually changes.

## Five core capabilities

| | Capability | What it means |
|---|---|---|
| 1 | **Sense** | Actively find what we actually don't know |
| 2 | **Experiment** | Replace gut-feel arguments with small experiments |
| 3 | **Reflect** | Find causes in successful and failed traces |
| 4 | **Codify** | Turn experience into evals, patterns and decisions |
| 5 | **Transfer** | Make individual learning actually change how the team works |

## The learning cycle

Real work → find an unknown → hypothesis → mini experiment → see results → get evidence → team discussion → distill rules → back to real work

## Don't build a "topic pool", build a "question pool" instead

Less of "MCP, Memory, Multi-Agent, RAG…". Collect questions instead:

- When is a subagent actually better than a single agent?
- At what context size does performance start to drop?
- Which failures are the model, not the tool, retrieval or harness?
- Which tasks are not worth using an agent at all?

Turn "I don't know" into an asset: encourage engineers to make uncertainty public, without demanding an immediate answer. Ask:

> What's one "I don't know" from these two weeks that is most worth the team figuring out?

## Minimum system: six things a small team actually does

| Mechanism | Cadence | Purpose |
|---|---|---|
| `#agent-radar` | Anytime | Collect new information and questions worth verifying |
| Question Backlog | Ongoing | Manage Unknown → Hypothesis → Experiment → Decision |
| Agent Engineering Lab | 75 minutes every two weeks | Answer one real engineering question at a time |
| Failure → Eval | Continuously during work | Turn bugs and failures into regression cases |
| Owner + Shadow | Rotate quarterly | Keep knowledge from living on a single engineer |
| Learning Review | Once a quarter | Check which new knowledge actually changed production |

## Each Agent Lab does one thing: answer one question

- **Before the meeting**: define the question and hypothesis, prepare a baseline, bring one successful trace and one failed trace.
- **During the meeting**: dissect the failure, run a small ablation, reach an Adopt / Experiment / Reject / Revisit decision.

## Compress knowledge all the way into executable assets

**Information** (articles, papers, GitHub, AI summaries) → **Team knowledge** (insight, pattern, decision, failure taxonomy) → **Executable knowledge** (eval, test, reusable tool, CI guardrail, reference implementation)

The best sharing artifact is not a slide deck. It is something the next engineer can reuse directly, or the system can run automatically.

## The leader's role

Not becoming "the person who knows AI best", but:

- Ask good questions
- Require evidence and a baseline
- Encourage counterexamples and failure cases
- Make sure learning is distilled and spread

## Quarterly learning review

- What didn't we know three months ago that we know now?
- Which assumptions were overturned?
- Which experiments actually changed production?
- What knowledge still lives only in someone's head?

## The real success metric

When the team hits a new AI or agent engineering problem nobody knows the answer to, can they quickly turn it into a reliable, reproducible, shareable answer?

## About this repository

The site is a single static page that GitHub Pages serves from `main`, with no build step:

| File | What it is |
|---|---|
| `index.html` | The page, its styles and the language switch |
| `i18n.js` | All the page's text, in Traditional Chinese (`zh-Hant`) and English (`en`) |
| `tests/` | Checks that both languages have the same keys and every key the page uses, that the language switch works, that the mobile layout holds, and that the READMEs match and link the site |

The page opens in Traditional Chinese. `?lang=en` opens it in English and `?lang=zh` in Chinese; after that the browser remembers the last language the page showed, whether it came from the link or the switch. To run the tests (Node.js 18 or newer) and preview the page:

```bash
node --test tests/*.test.mjs
python3 -m http.server 8000   # keeps running; open http://localhost:8000/
```
