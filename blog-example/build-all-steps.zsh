#! /bin/zsh

HERE=$PWD

for i in `ls steps/`; do 
  P=$PWD/steps/$i

  if [ -d "$P" ]; then
    echo "=========================================="
    echo "== BUILDING $P"
    echo "=========================================="
    cd $P
    rm -rf node_modules
    npm install
    npm run build
    cd $HERE
  fi;

  
done;