FROM jenkins/jenkins:lts

EXPOSE 8080

USER root

RUN apt update
RUN apt install -y \
		apt-transport-https \
		ca-certificates \
		curl \
		gnupg-agent \
		software-properties-common

RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

RUN apt-key fingerprint 0EBFCD88

RUN add-apt-repository \
	    "deb [arch=amd64] https://download.docker.com/linux/debian \
    	$(lsb_release -cs) \
    	stable"

RUN apt update

RUN apt install -y docker-ce docker-ce-cli containerd.io
USER jenkins
