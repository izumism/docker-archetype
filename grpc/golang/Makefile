image = golang_protobuf:latest
container = go_grpc
project_dir = /home/productinfo/service
protobuf_subdir = ecommerce
proto_src = $(project_dir)/$(protobuf_subdir)
proto_dst = protogo

.PHONY: all build clean run bash

all:

build:
	docker image build --build-arg PROJECT_DIR=$(project_dir) -t $(image) .

run:
	docker container run -td \
		--name $(container) \
		-v $(shell pwd)/../protobuf/:$(proto_src)/ \
		-v $(shell pwd)/app/:$(project_dir)/app/ \
		$(image) tail -f /dev/null

protogen:
	docker exec -it -w $(project_dir) $(container) \
		bash -c " \
		protoc -I $(protobuf_subdir) $(protobuf_subdir)/*.proto --go_out=plugins=grpc:$(proto_dst)"

clean:
	docker container rm -f $(container)

bash:
	docker container exec -it $(container) bash

cp:
	docker cp $(cp_from) $(container):$(cp_to)
