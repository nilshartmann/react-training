#!/usr/bin/env bash

BASE=$PWD
echo BASE: $BASE

for i in `find ./code/schritte -name package.json -not -path "*/node_modules/*"`; do
    DIR=`dirname $i`

    echo =====================================================================================================
    echo ========================= BUILDING $DIR ...
    echo =====================================================================================================
    cd $DIR
    npm run clean

    # Some modules now have their own dependencies defined
    # so make sure we're installing them
    npm install
    npm run dist
    cd $BASE

done;
