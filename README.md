# k6-talk

## What is the goal of this repo?

This repo contains slides and projects related to a talk on [Grafana k6](https://k6.io) @gsvolt gave
at [Canton Linux Enthusiasts](https://www.meetup.com/Canton-Linux-Enthusiasts/events/283571861/) on 2/26/2022.
The goal is to get a basic level understanding of k6 concepts and be able to write load tests.

## Abstract

From humble beginnings in 2008 to today, the k6 dev team has managed to build a tool using Go & Javascript that allows developers and devops practitioners to successfully load test their apis.

In this talk, we'll learn about k6 and how it works. Next, we'll write a simple web api and attempt to load test it.

## What can I find in this repo?

You can find the following folders in this repo:

- `slides`: Contains slides on the topic of Grafana k6 covering important details of the tool
- `api`: Contains a simple golang based web api used by the `test` project
- `test`: Contains k6 based tests that show how to load test the `api`

## Getting Started

### Assumptions

At the time of latest commit, the k6 and docker were installed on a Debian 11 system.
If you're on a different platform, please follow instructions for your platform to install k6 and docker. 

### How to run the api?

In one terminal, run the api with:

```bash
cd api
make run
```

### How to run the load test(s)?

In another terminal, run a load test with:

```bash
cd test
make NN_test.js # where NN is the test number
```

## License

Since this talk is based on k6, this repo uses GNU AGPL.
