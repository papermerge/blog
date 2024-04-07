---
date: 2024-04-07
categories:
  - papermerge3
tags:
  - papermerge3
  - announcement
---

# OIDC Support is Here

Release 3.2 is out!

It adds support for three important:

1. authorization via granular permissions
2. oidc authentication
3. remote user authentication

## Authorization via Granular Permissions

Now each user can be assigned a set of permissions (direct or via Groups).
This is a way of limiting scopes of actions user can perform. For example you
may not want any user to be able to manage groups or view all Papermerge
accounts.

## OIDC Authentication

OIDC is abbreviation for Auth2.0/OpenID Connect. In previous release we've
added support for two specific OIDC provider GitHub and Google. In this
release we've came with generalized approach - now you can use any OIDC
provider. We've tests OIDC support with Keycloak and Authentik.

## Remote User Authentication

We've added yet another way of external authenticating via so called "Remote
User" header. Remote user authentication was tested with Authelia.


Enjoy!