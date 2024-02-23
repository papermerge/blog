---
date: 2024-02-23
categories:
  - papermerge3
tags:
  - papermerge3
  - announcement
---

# 3.1 Release


The most important part of [release 3.1](https://github.com/papermerge/papermerge-core/releases/tag/3.1) are the the support of OpenLDAP and OAuth2 (Google and Github providers) authetication.

### Adds

- Support of OAuth2 authentication with Google and GitHub providers
- Support for OpenLDAP (RFC 4510) authentication
- Support for node's custom IDs [Issue#325](https://github.com/papermerge/papermerge-core/issues/325)
- Exclude document from OCR [Issue#598](https://github.com/ciur/papermerge/issues/598)

### Fixes

- Getting '500 - Internal Server Error' when patching node tags [Issue#326](https://github.com/papermerge/papermerge-core/issues/326)
- papermerge-cli import option --delete without any function [Issue#592](https://github.com/ciur/papermerge/issues/592)

The documentation for authentication part is [here](https://docs.papermerge.io/3.1/setup/authentication/).
