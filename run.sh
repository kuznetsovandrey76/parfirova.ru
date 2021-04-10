#!/bin/bash
git pull
yarn
cd server/
npm i
cd ../public_html
yarn
yarn build
cd ../server
touch tmp/restart.txt