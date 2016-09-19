---
layout: post
title: What's Docker images?
date: 2016-09-19
banner_image: 
tags: Docker
---

- it's a made up of filesystem layered over each others
- at the base there is boot filesystem (`boofs`) - tipical Linux/Unix boot filesystem. A docker user probably will never interact with the boot filesystem.
- when a container has booted and moved in memory, the boot filesystem is unmounted to free RAM up used by `initrd` disk image.
- Docker next layer, on top of the boot filesystme is the root filesystem (`rootfs`)
- In a traditional Linux boot, the root filesystem is mounted read-only and then switched to read-write after boot and integrity check. In Docker rootfs satys read-only. Docker takes advantages of the [union mount](http://www.thegeekstuff.com/2013/05/linux-aufs) filesystem to add more read-only filesystems layers on top of the rootfs
- Docker calls each one of these filesystem layer - image - Images can be layered on top of each other. The image below is called parent image and you can traverse each layer until reaching the base image.
- Finally when a container is launched from an image, Docker mounts a read-write image on top of everything. This is where whatever processes we want our Docker container to run will execute.
- When a container starts, the read-writable layer initially is empty and every change is applied to thi layer. example: making a change to a file, it will be copied from the read-only layers below and saved with the changes into the read-writable layer. The original copy of the file still exists, but now is hidden underneath the modified copy. The pattern is called **copy-on-write**
- Each read-only image is immutable and never change, this is what makes Docker so powerfull.

### Listing Docker images

```
$ docker images
```

- local host images live in the `/var/lib/docker` directory or run docker info to discover the exact location. Each image will be inside a directory named for your storage driver used; for example `aufs` or `devicemapper`. You will also find your containers in the `/var/lib/docker/cotainers` directory.

### Signing Docker images for content trust

Docker 1.8 introcduced the support for managing the content security of images; essentially signed images. Currently is an optional feature and you can read more on their [blog](https://blog.docker.com/2015/08/content-trust-docker-1-8/)
