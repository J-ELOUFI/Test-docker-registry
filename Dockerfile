# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "jamal.eloufi@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f https://192.168.0.84:5000 || exit 1

# tell docker what port to expose
EXPOSE 5000
