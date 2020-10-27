image_id = kafka_producer:java
container_name = kafka_producer
network_name = kafka
src_dest = /app/kafka-producer/src/main/java/kafka_producer
test_dest = /app/kafka-producer/src/test/java/kafka_producer
class = HelloKafkaConsumer

.PHONY: all build run reload bash clean

all:
	
build:
	docker image build -t $(image_id) .

run:
	docker container run -d \
		-v $(shell pwd)/src/:$(src_dest)/ \
		-v $(shell pwd)/test/:$(test_dest)/ \
		--name $(container_name) \
		--network $(network_name) \
		$(image_id) tail -f /dev/null

exec:
	docker exec -it $(container_name) \
		mvn exec:java -Dexec.mainClass="$(class)"

reload:

bash:
	docker exec -it $(container_name) bash

clean:
	docker container rm -f $(container_name)

network:
	docker network create $(network_name)
