---
date: 2025-09-13
tags:
  - technical
---

# Database Support

Starting with version 3.6, Papermerge **will support only PostgreSQL**. Support for
all other databases — such as SQLite, MariaDB, etc. — will be dropped.

This may seem like a sudden decision, but it isn’t. It’s the result of years of
careful thought and experience.

So, why just PostgreSQL?

When an application commits to supporting multiple databases, there’s an
unavoidable limitation: it can only use the features that all supported
databases share. That “lowest common denominator” is surprisingly small.

Take SQLite, for example. By design, it’s lite. Supporting it means restricting
Papermerge to a very limited subset of SQL features. For instance, SQLite lacks
native support for fundamental types like UUID and JSON.

Even when comparing more feature-rich systems like PostgreSQL and MariaDB, the
issue persists. Each database is a different implementation. For developers,
this translates into significantly more complexity: every new feature must be
written, tested, and maintained across multiple engines—multiplying the workload
without adding real value.

With version 3.6, Papermerge is embracing PostgreSQL as its database of choice.
Development is already making use of PostgreSQL-specific functionality. For
example, the audit feature relies on triggers written in plpgsql.

To put it plainly:

**Starting with Papermerge 3.6, PostgreSQL will be the only supported database.**