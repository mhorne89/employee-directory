#!/bin/sh

GREEN='\033[0;32m'
RED='\033[0;31m'
RESET='\033[0m'

echo "${GREEN}______________________________________________________"
echo "CONICHI: Build for deployment \n${RESET}"

ng build --env=prod

../docker-tools/build.sh -c=employee-frontend_employee -r=. -f=Dockerfile -t=latest -p

echo "\n${GREEN}______________________________________________________"
echo "CONICHI: Build complete \n${RESET}"

read -p "Deploy application? (y/n) " deploy

if [[ "$deploy" == "y" ]]; then
  ./deploy.sh
fi
