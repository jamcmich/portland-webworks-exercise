#!/usr/bin/env sh

# abort on errors
set -e

cd ./vue-ts

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:jamcmich/portland-webworks-exercise.git main:gh-pages

cd -