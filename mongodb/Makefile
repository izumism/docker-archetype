image_id = mongo:4.4.1
container_name = mongo
network_name = monogo_net

data_dir = $(shell pwd)/data
backup_dir = $(shell pwd)/backup
backup_filename = $(backup_dir)/$(shell date +%Y%m%d-%H-%M).archive

.PHONY: build_img build_net run repl dump mongo bash clean check

all:


build_img:
	docker pull $(image_id)

build_net:
	docker network create -d bridge $(network_name)

run: build_img build_net
	docker run -d \
		--name $(container_name) \
		--network $(network_name) \
		-v $(data_dir):/data/db \
		$(image_id)

dump:
	docker exec $(container_name) \
		mongodump --archive > $(backup_filename)

mongo:
	docker exec -it $(container_name) mongo

bash:
	docker exec -it $(container_name) bash

clean:
	docker rm -f $(container_name)

check:
	@echo $(backup_filename)
