#!/bin/bash
echo -e '\n1. Pull changes from GitHub\n'
git pull

echo -e '\n2. Install dependencies in root directory\n'
yarn

echo -e '\n3. Install dependencies in server directory\n'
cd server/
yarn

echo -e '\n4. Install dependencies in frontend directory\n'
cd ../public_html
yarn

echo -e '\n5. Build frontend\n'
yarn build

echo -e '\n6. Restart server\n'
cd ../server
touch tmp/restart.txt