image = jdk11_protobuf:latest
container = jdk11_protobuf
project_name = grpcclient
project_dir = /app/$(project_name)
exec_cls = App

.PHONY: all build clean run bash

all:

build:
	docker image build \
		--build-arg MVN_PROJECT_NAME=$(project_name) \
		--build-arg MVN_PACKAGE_NAME=$(project_name) \
		-t $(image) .

run:
	docker container run -td \
		--name $(container) \
		-v $(shell pwd)/../protobuf/:/app/protobuf/ \
		-v $(shell pwd)/src/:$(project_dir)/src/main/java/$(project_name)/ \
		$(image) tail -f /dev/null

clean:
	docker container rm -f $(container)

bash:
	docker container exec -it $(container) bash

compile:
	docker exec -it -w $(project_dir) $(container) \
		mvn compile

exec: compile
	docker exec -it -w $(project_dir) $(container) \
		mvn exec:java -Dexec.mainClass="$(project_name).$(exec_cls)"
