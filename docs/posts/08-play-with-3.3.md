---
date: 2024-11-28
tags:
  - community
---

# Let's Play With Release 3.3!

We are testing ferociously version of 3.3. It will take some until we
hunt down major bugs.

You can help! Start messing around with it right now. See how it feels like!
Open bugs, report issues with documentation. Give us feedback.


Start docker container with basic webapp using following command:

<!-- more -->

```shell
docker run -p 12000:80 \
    -e PAPERMERGE__SECURITY__SECRET_KEY=abc \
    -e PAPERMERGE__AUTH__PASSWORD=pass123 \
    papermerge/papermerge:3.3b16
```

* Username: `admin`
* Password: `pass123`
* URL: `http://localhost:12000`


![Preview of 3.3 beta](08-play-with-3.3/papermerge-3.3.gif)


As of writing this post, the latest docker image is `3.3b16`. But that may change.
Check latest image version [on github repository tags](https://github.com/papermerge/papermerge-core/tags)
or directly on [docker hub](https://hub.docker.com/r/papermerge/papermerge/tags).

Documentation has new sections:

* [Document Types](https://docs.papermerge.io/3.3/user/document-types/)
* [Custom Fields](https://docs.papermerge.io/3.3/user/custom-fields/)
* [Path Templates](https://docs.papermerge.io/3.3/user/path-templates/)

Check [docker compose](https://docs.papermerge.io/3.3/setup/docker-compose/) section for how to start
application locally.

* Found a problem? Open [a ticket on github](https://github.com/ciur/papermerge/issues).
* Feedback? Start a [discussions on github](https://github.com/ciur/papermerge/discussions).
