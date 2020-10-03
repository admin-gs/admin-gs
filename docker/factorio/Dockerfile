FROM ubuntu:focal

RUN apt-get update && \
        apt-get upgrade -y && \
        apt-get install -y curl xz-utils

WORKDIR /app
RUN curl -L -o factorio.tar.xz https://www.factorio.com/get-download/1.0.0/headless/linux64
RUN tar xf factorio.tar.xz
RUN mv factorio/* .
RUN rm -rf factorio
RUN ./bin/x64/factorio --version

ENTRYPOINT ["./bin/x64/factorio"]
