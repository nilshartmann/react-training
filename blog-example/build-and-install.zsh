#! /bin/zsh

HERE=$1

echo "INSTALL IN $HERE"

cd $HERE
rm -rf node_modules

npm install --save --save-exact react-scripts@5.0.0 @testing-library/jest-dom@5.16.1 @testing-library/react@12.1.2 @testing-library/user-event@13.5.0
npm install --save --save-exact react@17 react-dom@17 react-test-renderer@17

if [[ -f "ts.config" ]]; then
    echo "UPGRADING TYPESCRIPT"
    npm install --save --save-exact  typescript@4.5.4 @types/jest@27.4.0 @types/node@16.11.19 @types/react@17.0.38 @types/react-dom@17.0.11
fi

npm install
npm run build



