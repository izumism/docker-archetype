FROM openjdk:11

SHELL ["bin/bash", "-c"]

RUN apt update


# Install sdkman
RUN apt install -y curl zip unzip
RUN curl -s "https://get.sdkman.io" | bash && \
    source "$HOME/.sdkman/bin/sdkman-init.sh"; sdk install gradle

WORKDIR /app
