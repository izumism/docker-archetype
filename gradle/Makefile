image = gradle:dev
container = gradle

.PHONY: all build run bash

all:

build:
	docker image build -t $(image) .

run:
	docker container run -d --name $(container) $(image) tail -f /dev/null

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
