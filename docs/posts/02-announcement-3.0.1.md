---
date: 2024-01-14
categories:
  - announcement
tags:
  - announcement
---

# Papermerge 3.0.1 Release

I am happy to announce the release of [version 3.0.1](https://github.com/papermerge/papermerge-core/releases/tag/3.0.1).

Among other things, this release fixes major issue related to
[DB connections](https://github.com/ciur/papermerge/issues/575).
Let me provide short description of the problem.
The access to specific REST API endpoints was leaving DB connection open. The
problem is that open DB connection were accumulating up to the point
(which depends on specific DB configuration) when DB was refusing to accept
more DB connections, which resulted of course to the whole app going
offline.

The root course of the problem is Django ORM and the way it handles DB
connections. To mitigate the issue, we've decided start moving away from
Django ORM to SQLAlchemy. Of course full transition to new ORM will span many
releases, but the main point here is that for end users this transition is
fully opaque.
