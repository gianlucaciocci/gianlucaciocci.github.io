---
layout: posts
title: Installing Docker 1.12
date: 2016-08-25
banner_image: docker.png
tableofcontent: true
tags: [Containers, Docker]
---

Docker can be considered a growing container technology. Behind it there is what I consider one of the most innovative company of the century ( [Docker Inc](https://www.docker.com/company) ) and an amazing community improving and mantaining this interesting technology.  

As I wanted to try out the new features introduced by the latest version of docker platform, I thought to write down few notes as memorandum. My playgroung is an Ubuntu Server 16.04 machine on Azure and the docker engine.

Let's copy and paste few information from the Docker official documentation to start with and set the scene.

Docker is supported on the following Ubuntu operating system versions:
- Ubuntu Xenial 16.04 [LTS]
- Ubuntu Wily 15.10
- Ubuntu Trusty 14.04 [LTS]
- Ubuntu Precise 12.04 [LTS]

> **Note from the official documentation**: Ubuntu Utopic 14.10 and 15.04 exist in Docker's *`APT`* repository but no longer officially supported.


<!--more-->

## Prerequisites

Docker requires 64-bit OS installations and the kernel version must be at minimum 3.10. Older versions of the kernel lack of some features required to run docker engine among which Namespaces, CGroups and Capabilities.

Said that, first thing fist, we should check the kernel version using the **uname** command

```
$ uname -r 
4.4.0-34-generic
```

### Checking on older version of Docker

Before move on with the installation of the docker engine, we want to make sure that Docker is not already up and running on our system if you are not using a freshly made machine.

Running the following commands will tell you if Docker is already on the system but before that run **sudo su** in your terminal to avoid the annoying thing to put **sudo** in front of every privilege command (commands that need root) and insert your password. If you are not allowed to do it in your environment just remember that if you get "*permission denied*" when you run docker commands just slap **sudo** in front and you should be good to execute it.


```
    $ service docker-engine status
    docker-engine: unrecognized service
```

Checking for older version of the docker engine as from verson 1.8 the name of the package changed in **docker-engine**.  

```
$ service docker.io status
docker.io: unrecognized service

$ service lxc-docker status
lxc-docker: unrecognized service
```

In my machine it's all clear so I can proceed installing the latest version available of Docker, but..  
**Note**: If you previously installed Docker using **APT**, make sure you update your APT sources to the new Docker repository and purge any older repositories with the **apt-get purge** command

```
    $ apt-get purge "docker.io"

    $ apt-get purge "lxc-docker"
```

## Updating our APT sources

We need to make sure that APT package manager on our machine works with **https** method and that the latest version of CA certificates are installed properly.

```
    $ apt-get update
    $ apt-get install apt-transport-https ca-certificates
```

Next we have to add the GNU Privacy guard key ( [GPG](https://www.gnupg.org/) ) for the official Docker repository to the system:

```
$ apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```
Make sure that you don't have any other entries into your **docker.list** file at */etc/apt/source.list.d/*. If that is the case delete the file before proceed further.

Now we are ready to add the Docker repository to our APT sources:

```
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list
```

> **Note:** I am installing docker on an Ubuntu 16.04 (Xenial), but there are other possible source entries available based on your Ubuntu operating system version:
>- Ubuntu 15.01 (Wily):  
    `deb https://apt.dockerproject.org/repo ubuntu-wily main`  
>- Ubuntu 14.04 (Trusty):  
    `deb https://apt.dockerproject.org/repo ubuntu-trusty main`  
>- Ubuntu 12.04 (Precise):  
    `deb https://apt.dockerproject.org/repo ubuntu-precise main`

This is the time to verify that APT is pulling from the right repository and we can do it with the help of **apt-cache** command, but before let's make sure that we have our package list updated.

```
$ apt-get update
$ apt-cache policy docker-engine
$
$
$ docker-engine:
    Installed: (none)
    Candidate: 1.12.1-0~xenial
    Version table:
        1.12.1-0~xenial 0
            500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
        1.12.0-0~xenial 0
            500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
         1.11.2-0~xenial 0
            500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
        1.11.1-0~xenial 0
            500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages
         1.11.0-0~xenial 0
            500 https://apt.dockerproject.org/repo/ ubuntu-xenial/main amd64 Packages

```

if the result of the **apt-cache policy** command is like the one above, your ubuntu machine is configured properly to pull from the right docker repository.

## Ubuntu prerequisites

if you are installing docker engine on Ubuntu Xenial, Wily or Trusty, it's recommended to install the **linux-image-extra-** kernel packages to allow using **aufs**, the docker default storage driver on Ubuntu.

```
apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual
```

# Install Docker engine

Installing the docker engine its very easy, you run **apt-get install docker-engine** and you are done! 

We have our docker engine installed. Run **docker -v** to check the version and we should see 1.12.1.

Job done.

PS: Another way to install Docker is using the "quick & easy install" script as following. Until the team at Docker will support this way, I think I will use it.

```
$ wget -qO- https://get.docker.com/ | sh
```


