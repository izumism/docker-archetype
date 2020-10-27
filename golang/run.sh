#!/bin/bash

docker container run -it --rm --name golang-dev -v $PWD/src/:/app/src/ golang:dev bash
