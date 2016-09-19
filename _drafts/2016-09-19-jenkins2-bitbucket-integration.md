---
layout: post
title: Bitbucker WebHooks & Jenkins 2
date: 2016-09-19
banner_image: 
tags: Continuous Integration
---

## The Scope

I need to work on an project and because GitHub doesn't allow me to keep private my repos with spend money I decided to go with BitBucket. I am really a big fan of Atlassian anyway.  
The basic idea is to integrate Jenkins (version 2) and BitBacket. I'd like to put Slack in as it will be used as notification system.

## Jenkins configuration

1. install bitbucket plug-in
2. install job-dsl
3. Create a new freestyle job and check "Build when a change is pushed to BitBucket" on the `Build Triggers` section


## BitBucket configuration

1. Create a new jenkins WebHooks
    - Select `Setting` of your project and then `Webhooks`
    - Add a new webhook specifying name and you jenkins host url adding the suffix `/bitbucket-hook/` (http://jenkins_host/bitbucket-hook/)
        - IMPORTANT: don't forget the final "/"

Job done