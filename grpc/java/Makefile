image = grapc_clitnt:java
container = grpc_client
workroot=/app
project=grpcclient

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
		

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
