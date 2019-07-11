#!/bin/sh

GREEN='\033[0;32m'
RESET='\033[0m'

echo "\n${GREEN}______________________________________________________"
echo "CONICHI: Deploy application \n${RESET}"

echo "Deploying image with tag: latest"

nc -z localhost 2374 || echo 'opening tunnel to docker manager on 18.196.154.149'; ssh -i ~/.ssh/conichi-aws-default.pem -NL localhost:2374:/var/run/docker.sock docker@18.196.154.149 &

docker -H localhost:2374 pull 224111447235.dkr.ecr.eu-central-1.amazonaws.com/employee-frontend_employee:latest

docker -H localhost:2374 stack deploy --with-registry-auth --compose-file docker-compose.yml employee-frontend  

docker -H localhost:2374 service update --force --update-parallelism 1 --update-delay 10s --with-registry-auth --image 224111447235.dkr.ecr.eu-central-1.amazonaws.com/employee-frontend_employee:latest employee-frontend_employee

echo "\n${GREEN}______________________________________________________"
echo "CONICHI: Deployment complete: latest ${RESET}"
