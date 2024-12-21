---
date: 2024-12-21
tags:
  - community
---

# Release 3.3

Release 3.3 is out 🎉 🎉 🎉!

Check latest [docker compose setup documentation](https://docs.papermerge.io/3.3/setup/docker-compose/#ocr-worker-s3),
there are new sections which include setup examples with S3 Object storage.
There is also an example with SOLR search setup.

To start very basic setup use following command:

```shell
docker run -p 2025:80 \
    -e PAPERMERGE__SECURITY__SECRET_KEY=abc \
    -e PAPERMERGE__AUTH__PASSWORD=happy2025 \
    papermerge/papermerge:3.3
```

* Username: `admin`
* Password: `happy2025`
* URL: `http://localhost:2025`


Happy new year 🎉 🎉 🎉!