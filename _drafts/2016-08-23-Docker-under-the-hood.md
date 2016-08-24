---
layout: post
title: Containers under the hood
date: 2016-08-23
banner_image: container.jpg
tags: [Containers, Docker]
---

# What are containes?

### Mega high level:  

- Application runtime environments
- Containers are way more ligh weight than VMs. Each container consume less CPU, less RAM, less Disk space
- Still provice secure isolated runtime environment where application can still live and breathing
- User space contruct: Application installed on top of Linux machines. This was the Linux virtualizzation. This was before invention of containers or VMs
-  What containers do is let us to create multiple isolated insatances user spaces on top of the OS. Each user space is a container that hosts one application
- Containers is not hypervisor virtualization, they are fundamentally different
- VMs expect OS on board so not cost efficient
- Every container shares the host kernel; no need of the full OS like VMs
- Containers are more portable than VMs

### How container work

Explanantion on how containers are build and operate

- Why do we nedd containers? Why don't install 5 different apps on top of the OS?
    - OSs are not great on isolation apps and managing different versions of the same package or file
    - we need to be able to create isolate instances of:
        - root file systems; so each container can have its own file root system and change it without impact on other installed container
        - process trees; means that a process in a container cannot send a kill signal to a process on another container because isolation
        - networking stacks
- How we actually perform Isolation within container?
    - Isolation is accomplished by a linux kernel feature called `Namespaces`
    - Kernel namespaces helps us to partitioning:
        - PID Namespaces assigning every partition to a container. Single process tree from the view of the host
        - NET Namespaces
        - MNT Namespaces
        - USER Namespaces allows us to have root privilege inside a container, but not outside it
        - [Namespace blog](https://www.toptal.com/linux/separation-anxiety-isolating-your-system-with-linux-namespaces)
        - [Wikipedia Namespace](https://en.wikipedia.org/wiki/Linux_namespaces)
- Control Group - CGroup - its another kernel feature that containers use
    - CGroups allows us to bind together resorces. You can map a CGroup with a container
    - Allows us to set limits on that group of resorces. this potentially more flexible than vRam and VCPU on a hypervisor
    - Cgroups helps us to ensure that not single container can run a MOC on a system and DoS every other container
        - [Kernel.org - Cgroups](https://www.kernel.org/doc/Documentation/cgroup-v1/cgroups.txt)
        - [CGroups into](https://sysadmincasts.com/episodes/14-introduction-to-linux-control-groups-cgroups)
        - [Wikipedia Cgroups](https://en.wikipedia.org/wiki/Cgroups)
        - [RedHat Introduction to CGroups](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Resource_Management_Guide/ch01.html)
        - Cgroups aren't an hard requirement for running containers
- Capabilities feature
    - it gives us fine grain control of what privilegies a user or a process can get. this is instead all of nothing approach
    - [Capabilities list](http://man7.org/linux/man-pages/man7/capabilities.7.html) 


[Kernel.org doc index](https://www.kernel.org/doc/Documentation/)


# Docker
Docker is a company formaly known as dotCloud and now as Docker Inc.  
dotCloud is used to be a platform as a service company and the Docker container technologies was an internal project lead by a guy named Solomon Hykes.  
Docker is written in Google Go lang and is an open source project under the Apache 2 licence.  


- it can be considered a growing technology platform
- it is a container runtime
- it is an actual implementation of container technology
- docker provides a standard runtime, meaning that developer can code their apps into docker containers and when done lift and shift container into AWS, Azure, On-orem datacenters, etc.  
  it doesn't matter where move your container as long as the will run on top of the docker engine or deamon

# The evolving Docker into platform

Docker is evolving from a simple container engine into platform and in it we can find:
- Docker image format
- Docker container runtime
- Docker registry at [Docker Hub](https://hub.docker.com/)
- Clustering - Docker swarm
- Orchestation - Docker compose
- Networking - libchain


# What is the difference between Docker and LXC

LXC Resorces:
- [LXC project](https://linuxcontainers.org/)
- [Wikipedia LXC](https://en.wikipedia.org/wiki/LXC)
- [LXC introduction](http://blog.scottlowe.org/2013/11/25/a-brief-introduction-to-linux-containers-with-lxc/)
- [LXC Ubuntu documentation](https://help.ubuntu.com/lts/serverguide/lxc.html)

Back in the days Docke used rely and leverage LXC as a default execution driver to the kernel features mentioned before.  
Docker LXC apprach had few annoing issues for the guys at Docker:

1. Making sure that LXC on a particular distro was up to be updated and was working properly with Docker
2. Docker team didn't control LXC development

Because those two issue Docker decided to write and open source a new execution driver named ***libcontainer***. In effect this library is a drop and replacement of LXC component.  
Advantages of libcontainer:
- complete control on developing the library as needed
- the library can be shipped with the docker deamon
- libcontainer, potentially allows docker to go cross platform meaning Unix like OS  and Windows

> if you need you can swap libcontainer back to LXC even is not the reccomended way this days

# The future of Docker

- Docker on windows - [Windows container on Windows Server](https://msdn.microsoft.com/en-us/virtualization/windowscontainers/quick_start/quick_start_windows_server?f=255&MSPPError=-2147217396)
- A windows app container can't run on Linux machine even both have the docker engine because is the kernel what will be shared between the host and the containers
- For staters, users will run docker containers on top of VMs, it makes sense in lab environments.
- Cloud providers use the same VM infrastucture to provide container as a service. In the case of AWS, it is on top of EC2 instances.
- in the future people will certantely drop the overhead of VMs to run natively containers in production, getting far great efficiency and losing all the "fat" existing in VMs.
- Potentially chip manifactures could come to market with hardware assistance for contaniers, like what happend with the VM wolrd - improving performance and security of containers
- Docker and container in general tend to work wery well with micro-service architectures where each single application has its own container that connected with each other forming the application. This design increase individial upgrade and flexibility. Definetely this app design seems the future of scaled web application design.
- Clustering
- Container management
- Service discovery













