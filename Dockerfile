FROM        node:alpine

LABEL       author="Santosh Burada"

ARG         PACKAGES=nano

ENV         TERM xterm
RUN         apk update && apk add $PACKAGES

WORKDIR     /var/www
COPY        package.json package-lock.json ./
RUN         npm install

COPY        . ./
EXPOSE      8080

ENTRYPOINT  ["npm", "start"]