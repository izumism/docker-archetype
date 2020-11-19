img = react_jest:latest
cnt = react_jest

.PHONY: all build run bash clean jest

all:

build:
	docker image build -t $(img) .

run:
	docker container run \
		-d --name $(cnt) \
		-p 8080:8080 \
		-v $(shell pwd)/app/:/app \
		$(img) \
		tail -f /dev/null

clean:
	docker container rm -f $(cnt)

bash:
	docker exec -it $(cnt) bash

chown:
	sudo chown sizumi:sizumi -R .
