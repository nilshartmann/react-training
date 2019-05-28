#! /bin/bash


docker stop GREETING_APP
docker rm -f GREETING_APP

docker run --name GREETING_APP -p 9010:9000 -d greeting_app
docker logs -f GREETING_APP