---
date: 2023-12-29
categories:
  - announcement
  - papermerge3
tags:
  - papermerge3
  - announcement
  - 3.0
---

# Papermerge 3.0

I am very excited to announce the release of Papermerge DMS 3.0.

Comparatively to all previous releases, version 3.0 underwent serious
architectural changes. I won't bore reader with all technical details, I will
just briefly mention two biggest technical changes:

- frontend rewritten in TS/React
- REST API now served with FastAPI

Also, the format of storing files on the disk differs from previous versions -
alone this fact makes version 3.0 incompatible with all previous releases.

Here is the list of exciting features that version 3.0 brings:

- support for jpeg/png/tiff formats is back
- full text search is now backed up by Solr search engine
- multiple authentication backends are supported e.g. oauth2.0/OIDC (not documented yet)
- well documented REST API
- dual panel mode
- page management - delete, reorder, rotate, merge, move pages between documents
- OCR with text overlay (thanks to [OCRMyPDF](https://github.com/ocrmypdf/OCRmyPDF))


Go to [3.0 documentation](https://docs.papermerge.io/3.0/) and play
with [docker compose setup](https://docs.papermerge.io/3.0/setup/docker-compose/).
Also, for production deployment on remote server there [Ansible playbook](https://docs.papermerge.io/3.0/setup/ansible/) available as well.


Enjoy!