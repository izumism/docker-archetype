image = fastify:latest
container = fastify_tuto
.PHONY: all build run bash clean

all:

build:
	docker build -t $(image) .

run:
	docker container run \
		-d \
		--name $(container) \
		-v $(shell pwd)/app/:/app/ \
		$(image) tail -f /dev/null

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
