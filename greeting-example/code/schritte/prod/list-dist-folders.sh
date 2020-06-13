#! /bin/bash

find . -type d -depth 1 -exec echo -n "{}: " \; -exec cat {}/scenario.txt \; -exec echo "" \; -exec ls -lh {}/public/dist \;
