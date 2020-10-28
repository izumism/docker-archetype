FROM openjdk:11

SHELL ["/bin/bash", "-c"]

RUN apt update


# Install sdkman
RUN apt install -y curl zip unzip
RUN curl -s "https://get.sdkman.io" | bash && \
    source "$HOME/.sdkman/bin/sdkman-init.sh"; sdk install gradle

ENV PATH=$PATH:/root/.sdkman/candidates/gradle/current/bin
ARG workroot=
ARG project=
WORKDIR ${workroot}/${project}
RUN gradle init \
    --type java-application \
    --dsl groovy \
    --test-framework junit \
    --project-name ${project} \
    --package ${project}
COPY build.gradle ${workroot}/${project}/app
