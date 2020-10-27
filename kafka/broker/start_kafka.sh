#!/bin/bash

/usr/local/kafka_2.13-2.6.0/bin/zookeeper-server-start.sh /usr/local/kafka_2.13-2.6.0/config/zookeeper.properties &
/usr/local/kafka_2.13-2.6.0/bin/kafka-server-start.sh /usr/local/kafka_2.13-2.6.0/config/server.properties &
tail -f /dev/null
