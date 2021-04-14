#!/bin/bash
echo -e 'Pull changes from GitHub\n'
git pull

echo -e 'Install dependencies in root directory\n'
yarn

echo -e 'Install dependencies in server directory\n'
cd server/
npm i

echo -e 'Install dependencies in frontend directory\n'
cd ../public_html
yarn

echo -e 'Build frontend\n'
yarn build

echo -e 'Restart server\n'
cd ../server
touch tmp/restart.txt