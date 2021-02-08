image = react-webpack:dev
container = react-webpack
port = 3002

.PHONY: build run bash clean

all:

build: Dockerfile app/package.json
	docker build -f ./Dockerfile -t $(image) .

run:
	docker container run -d \
		--name $(container) \
		-p $(port):3000 \
		-e REACT_APP_TEST_ENV=true \
		-v $(shell pwd)/app/:/app/ \
		$(image) \
		tail -f /dev/null

bash:
	docker exec -it $(container) bash

clean:
	docker container rm -f $(container)
