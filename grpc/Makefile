protobuf_image = protobuf_compiler:latest
protobuf_container = protobuf_compiler

.PHONY: all build clean run bash

all:

build:
	docker image build -t $(protobuf_image) .

run:
	docker container run -td \
		--name $(protobuf_container) \
		-v $(shell pwd)/protobuf:/home/protobuf \
		$(protobuf_image) tail -f /dev/null

clean:
	docker container rm -f $(protobuf_container)

bash:
	docker container exec -it $(protobuf_container) bash
