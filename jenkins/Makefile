image = jenkins/jenkins:lts
container = jenkins
image = jenkins:docker

.PHONY: all run clean log

all:

run:
	docker container run -d \
		--name $(container) \
		-p 49002:8080 \
		-v $(shell pwd)/jenkins_home:/var/jenkins_home \
		-v /var/run/docker.sock:/var/run/docker.sock \
		$(image) 

clean:
	docker container rm -f $(container)

log:
	docker logs $(container)

build:
	docker build -t $(image) .
