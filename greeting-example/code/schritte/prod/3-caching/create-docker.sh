#! /bin/bash


docker stop GREETING_APP
docker rm -f GREETING_APP
docker rmi -f greeting_app

rm -rf public/dist
rm public/index-with-hashes.html

npm run dist

docker build -t greeting_app -f docker/Dockerfile .
#docker run --name GREETING_APP -p 9000:9000 -d greeting_app

#docker logs GREETING_APP
