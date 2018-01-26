#! /bin/bash

find code/ -type d -name dist -exec rm -rf {} \;
find code/ -type d -name dist-dev -exec rm -rf {} \;
