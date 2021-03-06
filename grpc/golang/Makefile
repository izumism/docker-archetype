image = golang_protobuf:latest
container = gogrpc
project_dir = /home/productinfo/service
protobuf_subdir = protobuf
proto_src = $(project_dir)/$(protobuf_subdir)
proto_dst = ecommerce
network = grpc_net

.PHONY: all build clean run bash

all:

build:
	docker image build --build-arg PROJECT_DIR=$(project_dir) -t $(image) .

run:
	docker container run -td \
		--name $(container) \
		--network $(network) \
		-v $(shell pwd)/../protobuf/:$(proto_src)/ \
		-v $(shell pwd)/service/:$(project_dir)/ \
		$(image) tail -f /dev/null

create_network:
	docker network create $(network)

protogen:
	docker exec -it -w $(project_dir) $(container) \
		bash -c " \
		protoc -I $(protobuf_subdir) $(protobuf_subdir)/*.proto --go_out=plugins=grpc:$(proto_dst)"

start_server: protogen
	docker exec -it -w $(project_dir) $(container) \
		go run main.go product_api.go

clean:
	docker container rm -f $(container)

bash:
	docker container exec -it $(container) bash

cp:
	docker cp $(cp_from) $(container):$(cp_to)
