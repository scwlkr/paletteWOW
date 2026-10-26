FROM debian:bookworm-slim
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y openssh-client ca-certificates && \
    rm -rf /var/lib/apt/lists/* && \
    useradd --uid 1000 --create-home tunnel
COPY deploy/octal8/tunnel.sh /usr/local/bin/palettewow-tunnel
USER 1000:1000
ENTRYPOINT ["/bin/sh", "/usr/local/bin/palettewow-tunnel"]
