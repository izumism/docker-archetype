image_id = kafka/broker:2.13
container_name = kafka-broker
network_name = kafka
kafka_home = /usr/local/kafka_2.13-2.6.0/

.PHONY: all build run reload bash clean start-server stop-server

all:
	
build:
	docker image build -t $(image_id) .

run:
	docker container run -d \
		--name $(container_name) \
		--network $(network_name) \
		$(image_id)

reload: 
	docker exec -w $(kafka_home) $(container_name) ./bin/kafka-server-stop.sh
	docker exec -w $(kafka_home) $(container_name) ./bin/zookeeper-server-stop.sh
	docker cp -a config/ $(container_name):$(kafka_home)
	docker exec -w $(kafka_home) $(container_name) \
		./bin/zookeeper-server-start.sh ./config/zookeeper.properties &
	docker exec -w $(kafka_home) $(container_name) \
		./bin/kafka-server-start.sh ./config/server.properties &

stop-server:
	docker exec -w $(kafka_home) $(container_name) ./bin/kafka-server-stop.sh
	docker exec -w $(kafka_home) $(container_name) ./bin/zookeeper-server-stop.sh

start-server:
	docker exec -w $(kafka_home) $(container_name) \
		./bin/zookeeper-server-start.sh ./config/zookeeper.properties &
	docker exec -w $(kafka_home) $(container_name) \
		./bin/kafka-server-start.sh ./config/server.properties &

bash:
	docker exec -it $(container_name) bash

clean:
	docker container rm -f $(container_name)

network:
	docker network create $(network_name)
