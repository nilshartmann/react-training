#! /bin/zsh

HERE=$1

echo "INSTALL IN $HERE"

cd $HERE
rm -rf node_modules
npm install
npm run build