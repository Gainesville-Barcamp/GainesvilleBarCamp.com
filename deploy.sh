#!/bin/bash

git push origin master
git checkout gh-pages
git merge -v --no-edit master
npx yarn build
git add .
git commit -m "Automatic asset commit."
git push origin gh-pages
git checkout master
<<<<<<< HEAD
git clean -fd
yarn build
=======
npx yarn build
>>>>>>> master
