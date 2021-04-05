#!/bin/bash
git pull
cd server/
npm i
cd ../public_html
npm i
npm run build