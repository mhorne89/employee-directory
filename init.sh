#!/bin/sh

export PORT=5000
export APP_PORT=4200
export NODE_ENV=production
export ASSETS_DIR=./dist/assets

node ./server.js