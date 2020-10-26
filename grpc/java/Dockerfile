FROM openjdk:11

SHELL ["/bin/bash", "-c"]

RUN apt update

WORKDIR /app

# java environment
RUN apt install -y maven protobuf-compiler

# pom.xml : <artifactId>
ARG MVN_PROJECT_NAME
# pom.xml : <groupId>
ARG PACKAGE_NAME

RUN mvn archetype:generate \
    -DgroupId=${MVN_PROJECT_NAME} \
    -DartifactId=${MVN_PROJECT_NAME} \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -DarchetypeVersion=1.4 \
    -DinteractiveMode=false

WORKDIR /app/${MVN_PROJECT_NAME}
COPY pom.xml /app/${MVN_PROJECT_NAME}
RUN mvn -T 8 -q clean install
