#!/bin/bash
git push origin master
git checkout gh-pages
git checkout master .
git add .
git commit -m "Automatic asset commit."
git push origin gh-pages
git checkout master
