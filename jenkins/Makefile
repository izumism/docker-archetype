image = jenkins/jenkins:lts
container = jenkins

.PHONY: all run clean log

all:

run:
	docker container run -d \
		--name $(container) \
		-p 49001:8080 \
		-v $(shell pwd)/jenkins_home:/var/jenkins_home \
		--user 1003:1003 \
		$(image)

clean:
	docker container rm -f $(container)

log:
	docker logs $(container)
