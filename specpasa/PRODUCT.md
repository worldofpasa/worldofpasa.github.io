# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and minimal JavaScript inside the existing `worldofpasa.github.io` GitHub Pages repository. The public path is `/specpasa/`.

## Users

Engineering and product teams evaluating a self-hosted workspace for collaboratively building specifications—from shared intent through review, agreement, and implementation work. The primary visitor is a technical decision-maker who wants to understand the product quickly, inspect the source, and judge whether it fits their infrastructure.

The landing page must say plainly that SpecPasa is built for cross-functional product, design, and engineering teams.

## Product Purpose

SpecPasa is a self-hosted collaborative specification builder. It connects rough ideas, PRDs, ERDs, implementation tasks, review threads, immutable versions, and AI assistance in one traceable workflow. Success means a team can move from intent to reviewable work without placing product knowledge in another silo.

## Positioning

Collaborative spec building is the core product. The specification is an active shared control path rather than a document handed between silos: people co-author, discuss, review, version, and freeze each phase before carrying it forward, with AI provider/model provenance and self-hosted deployment under the team's control.

## Operating Context

Teams create projects and intents, attach references, draft with a local or cloud AI provider, collaborate through block-anchored comments, create explicit immutable versions, freeze completed phases, and advance through IDEA → PRD → ERD → TASKS. GitHub is the primary source and evaluation destination for this landing page.

## Capabilities and Constraints

- Self-hosted Node/Docker deployment with SQLite by default and optional PostgreSQL.
- Optional standalone desktop shell and connection to an existing self-hosted server.
- AI adapters for local CLIs, Ollama, Anthropic, Google, OpenRouter, and OpenAI-compatible endpoints.
- Explicit provider/model selection and per-version AI provenance.
- Inline review threads, roles, invites, presence, references, version history, freezing, and forking.
- GitHub export is implemented; other connector surfaces may be present but must not be presented as completed without repository evidence.
- The landing page must remain a dependency-free static subsite suitable for GitHub Pages.

## Brand Commitments

Use the product name SpecPasa and the existing enterprise workbench identity: cool neutral paper/sheet surfaces, precise dense controls, mint-green interaction accents, clear sans-serif typography, and mono treatment for phases, IDs, and revisions. The page should feel durable, inviting, and self-hostable rather than hype-driven.

## Evidence on Hand

- Real application screenshots in the SpecPasa repository under `docs/assets/`.
- The landing page uses responsive code-native product illustrations instead of visible screenshot crops; they must stay persistently labeled as illustrative.
- Product workflow and installation guidance in `README.md`.
- Product requirements, domain model, architecture, and roadmap under `docs/`.
- Public source repository: `https://github.com/worldofpasa/specpasa`.
- No testimonials, customer logos, adoption metrics, pricing, hosted demo, or performance benchmarks are available; do not fabricate them.

## Product Principles

- Lead with collaborative spec building: intent, discussion, authorship, review, and agreement belong in one shared workspace.
- Make the lifecycle tangible: shared intent becomes reviewed and frozen work.
- Keep infrastructure, data, and AI-provider choice under the user's control.
- Treat version creation as an explicit decision, not an autosave side effect.
- Demonstrate real product behavior through faithful, responsive product illustrations instead of generic promises.
- Prefer durable, legible enterprise interaction over novelty that impedes understanding.

## Accessibility & Inclusion

The marketing surface must support keyboard navigation, visible focus, reduced motion, high contrast in light and dark themes, semantic landmarks, and responsive reading from mobile through desktop.
