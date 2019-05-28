#! /bin/bash

find . -type d -depth 1 -exec ls -l {}/public/dist \;
