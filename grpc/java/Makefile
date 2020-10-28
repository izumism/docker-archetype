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
		-v /main/:$(workroot)/$(project)/app/src/main/java/app
		$(image) \
		
			

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
