---
layout: post
title: Docker - Notes
date: 2016-08-25
tags: [Docker]
---

#Container general info

- Terminology:
    - Client: docker CLI to send command to the docker daemon APIs
    - Engine: docker daemon
    - Images: stopped containers
    - Containers: running images
    - Docker Hub: centralized place where images are stored and available to everybody - https://hub.docker.com 
        - in the TAG section you can find the vulnerability status for the image version you are interested on
    - local image store:

- VMs model: Hypervisor virtualization, virtualize physical server resources and builds virtual machines
- Container model: container engine like docker are more like operation system virtualization creating virtual OSs assigned to each container in which you run applications. They are more light-weight than VMs
- Docker is a client-server architecture engine
- Docker images are made of layers
- Containers have an outstanding fit for non persistent workload
- Container by design can persist data. starting and stopping containers doesn't affect persistence, but if you remove them you remove the data as well. If you persist your data in a different volume or other persistent store you won't lose them.
- Containers are immutable
- ports on which docker operates:
    - docker engine port 2375
    - docker secure engine port 2376
    - docker swarm 2377





# Install Docker on Linux

To get the latest release / main build use:
```
wget -q0- https://get.docker.com/ | sh
```

For release candidate (RC) builds use:
```
wget -q0- https://test.docker.com/ | sh
```

For rc build with experimental features use:
```
wget -q0- https://experimental.docker.com/ | sh
```

# Docker commands

Get the docker version when you connect to a docker host. The information you are getting back are about the client and the server (daemon).
```
docker version
```

Get info on docker instance
```
docker info
```

Run a container
Parameters:
- `-d` tells the daemon to start the container in detach mode, throw it in the background and don't latch it to the terminal
- `--name` set a container name. it must be unique
- `-p` for network mapping ports: `-p 80:8080` to access the container web service from the host mapping the port 80 (host) to port 8080(container)
- `-it` runs the container in interactive mode. Keeps STDIN open even if not attached and Allocate a pseudo-TTY
```
docker run hello-world
```

List containers on a host  
Parameters:
- `-a` :: Show all containers (default shows just running)
```
docker ps
```

To list all the images on the host - stored locally

```
docker images
```

To download images on the local image store without running it
- if you don't specify anything docker pulls the *latest* image available from Docker Hub
- if you append ":version_number" after the image name docker pulls the specific version requested
```
docker pull [image name]:version_number
```

To remove images and to remove all the images in 1 command
- parameters:
    - image name : tag
    - image id
    - q quite mode
```
docker rmi [local image name]:[tag]
docker rmi $(docker images -q)
```


To start a container
```
docker start <container name>
```

To stop a container
```
docker stop <container name>
docker stop $( docker ps -aq)
```
Where `-a` gets all the container ids and `-q` is the quite mode



# Working with containers

Running a new container in interactive mode like Ubuntu and attaching the process to /bin/bash, use the following command:

```
docker run -it --name temp ubuntu:latest /bin/bash
```
We can see that the terminal prompt changes in `root@05fccda4f4b3:/#` where stands for thr root user @ the 05fccda4f4b3 container (this is the container id). Let's say that I am now root inside the container.  
The container are designed to be super light, so you won't find tools like vim, ping and so on. Only the bare minimal necessary to run Ubuntu is available.  

Typing `exit` to exit from the container will exit form the only process available, so as a conseguence running the command will exit the container itself. If you don't want that, to exit the interactive mode with the container without killing it you have to press `CTRL + P + Q` on the keyboard.

Use `ps -elf` to see a list of processes working at the container level and you will see very often that container are single process construct.  

**Note:** The ps and the top process listed to the process list are temporarily created (forked) by the bash process when we run those respective commands. Windows containers instead will more likely show more that one process as Windows kernel works in a different way. 


# Swarm mode and microservices

Native container orchestration

Vocabulary: 
- Swarm
- Services - declarative way of running and scaling tasks
- Service scale
- Service update
- Stacks
- Bundle
- Tasks - is the atomic unit of work assigned to a worker node. At the moment tasks mean all round containers, but nothing stops us to apply unikernel task and future stuff.

## Swarm mode theory
- available from docker 1.12 and later releases
- it's all about clustering. True native clustering.
- it's a collection of containers joined into a cluster
- the docker engines running in a swarm has to run in *swarm mode*
- swarm mode is entirely optional
- docker engines not running in swarm more are *backward compatible*, so you can use third parties tools to do clustering [See kubertenes](http://kubernetes.io/)
- the swarm itself consists in one or more *manager nodes* and one or more *worker nodes*
    - manager nodes look after the state of the cluster and dispatch taks to the workers
    - managers are higly available H/A - reccomendation on odd numbers 3 / 5
    - only one manger is *the leader*. The not leader managers are involved in mantain the status of the cluster and if they receive a command, it will proxy that command over to the leader. The leader will action it against the swarm.
    - you can spread manager accross regions, availability zones, data centers and whatever will give you H/A
- The Raft Consesus Algorithm is used behind the scene to get order to that caos and achieve distributed consensus.
- The more manager you have in your swarm, the longer it takes to get consensus.
- Worker nodes accept tasks and axecute them
- Service is a new concept introduce with swarm mode, meaning that if the engine is not in swarm mode you can't use Services

## Build a swarm

Swarm architecture:
- 3 managers
- 3 workers

To initialize a swarm on mng1

* --listen-addr >> better be specific an tell on wich ip it will operate on

```
docker swarm init --listen-addr <ip addr>:2377
```
The output of running this command is:

```
Swarm initialized: current node (aydkg79x6o5vxg6shj9kiuqrd) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-5iu43hkxeu0fl2ilj9pgx6drvmxjjlnrz9trqh5ifqwzwybcdb-dccbjhxm3kww90imnsz6q4ehk \
    10.1.0.4:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```

Running `docker info` we can see that our swar is active and the current host has joined the swarm as a manager.  
Manger nodes are also worker nodes. In reality we don't have have 2 nodes, but its just a node doing 2 jobs.

```
Swarm: active
 NodeID: aydkg79x6o5vxg6shj9kiuqrd
 Is Manager: true
 ClusterID: 56zowu83gclplln2r7oizo90y
 Managers: 1
 Nodes: 1

```

Use `docker swarm join-token manger | worker` to get the token for other managers or workers to join the swarm. 

With `docker node ps` you list all the swarm nodes. Only the leader manager can make changes to the swarm, but you can run commands from every manager as ther will redirect it to the leader.

## Services

it's one of the majour contruct in Docker 1.12.
Services support the creation of large scale clustering in a declarative Desired-Actual state configuration way, making sure that actual matching desidered.  

We are managing services with the following sub-commands

```
$ docker service <create | inspect | ls | rm | scale | update>
```

docker swarm will keep your cluster always in the shape that you configured as "desired state". If one of the machine part of the swarm is not available anymore, docker swarm will instantiate other istances accross the remaining machines.


Native container-aware load balancing called "routing mesh", that you can mix with non-container aware load balancers

To scale the docker service replica

```
$ docker service scale <name of the servie>:<n of replicas instances>
```
This command is just an alias of `docker service update --replicas`


To delete a service in our swarm

```
$ docker service rm <name of the service>
```


### Overlay networks - ???

To create an overlay network `-d overlay`

```
$ docker network create -d overlay <network name>
```

To list all the created networks
```
$ docker network ls
```

Docker example voting app [here](https://github.com/docker/example-voting-app)


## Rolling update

Docker service suppors us in rolling out update in to the cluster we have to confire two service update parameter:
- update-paralellism >> how many containers will be updated in block
- update-duration >> waiting time before update another block

This is the command to update a container to version v2

```
$ docker service update --image <new version image name> --update-paralellism 2 --update-delay 15s <name of the service>
```

## Stacks and DABs (Distributed Attributes Bundles)

Experimental build 1.12 or later

- Stack >> application comprising multiple services
- DAB file >> configuration files for deploying Stacks
- new `docker stack` command

To install docker from the experimental stream
1. binaries on *http://github.com/docker/docker/tree/master/experimental*
2. for majour distributions ` wget -qO https://experimental.docker.com/ | sh`

