---
title: "Focusing on Papermerge Cloud: Why I'm Sunsetting Open-Source Development"
description: "After 9 years of open-source development, I'm shifting my full focus to Papermerge Cloud. Here's why DMS complexity made this decision inevitable—and what it means for you."
pubDate: 2026-09-16
tags:
  - announcement
---

After 9 years of building Papermerge as an open-source project, I'm shifting
my focus entirely to **Papermerge Cloud**, the commercial SaaS version. The
OSS project will remain available, but I won't be actively developing it.
Here's why.

## The Real Lesson: DMS Is Deceptively Complex

Over the years, I've learned that document management software is far more
complex than it appears. At the surface, it's about scanning and organizing
documents. But underneath, it's layers of problems:

- **Authentication** — Password auth, 2FA, passkeys. Even with external tools (Keycloak, Zitadel, Authelia), integrating them correctly is meticulous work.
- **Document ingestion** — Email import, SMTP integration, parsing, routing.
- **Compliance** — GoBD rules, audit trails, deletion guards, retention policies.
- **Infrastructure** — Redis, Celery, PostgreSQL, Kubernetes orchestration.

And that's before you touch a single document feature. Modern DMS isn't a
weekend project—it's enterprise software pretending to be simple.

For an open-source solo project, this complexity creates a choice: build
features half-well across both the OSS and Cloud versions, or build
Cloud *well* and commit fully to it.

## The Honest Numbers

The OSS community is small—I'm aware of no major active users. I'm the sole
contributor (99% of commits), and the broader open-source DMS space is
thriving: **paperless-ngx** is doing excellent work with a vibrant community.
Open source doesn't lose anything.

But I do gain focus.

## What This Means For You

**If you're using Papermerge OSS:**
- It will stay available. You can keep running it.
- I won't be adding features or actively maintaining it, but critical bugs affecting deployment will be addressed.
- If you're evaluating DMS options, consider **paperless-ngx** (excellent community) or explore **Papermerge Cloud** for a managed, GoBD-compliant alternative.

**If you're interested in Cloud:**
- This is where my full attention is going. Professional support, compliance, modern auth, reliability.
- [papermerge.com](https://papermerge.com) | [docs.papermerge.com](https://docs.papermerge.com)

**If you're open-source focused:**
- Thank you for the years of support. I've learned everything I know from open-source software, and that will never change. I'm grateful.

## What's Next

Papermerge Cloud is in active development, and I'm building this as a
GoBD-compliant solution for German SMBs—a problem I know deeply.

To the open-source community: thank you. Your work inspired me. That doesn't end.

— Eugen
