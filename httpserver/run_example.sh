#!/bin/bash

docker container run --name mynginx -p 80:80 -d nginx:dev
