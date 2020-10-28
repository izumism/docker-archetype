image = grpc_client:java
container = javagrpcclient
workroot=/app
project=grpcclient
workdir=$(workroot)/$(project)

.PHONY: all build run bash

all:

build:
	docker image build \
		--build-arg workroot=$(workroot) \
		--build-arg project=$(project) \
		-t $(image) .

run:
	docker container run -d --name $(container) \
		-v $(shell pwd)/main/:$(workdir)/app/src/main/java/$(project)/ \
		-v $(shell pwd)/test/:$(workdir)/app/src/test/java/$(project)/ \
		-v $(shell pwd)/../protobuf/:$(workdir)/app/src/main/protobuf/ \
		$(image) tail -f /dev/null \
		
copy_build_gradle: build.gradle
	docker cp build.gradle $(container):$(workdir)/app

app_build: copy_build_gradle
	docker exec -it -w $(workdir) $(container) ./gradlew clean build

app_run: app_build
	docker exec -it -w $(workdir) $(container) ./gradlew run

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
