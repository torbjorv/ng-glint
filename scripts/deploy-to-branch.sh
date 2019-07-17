#!/bin/sh
set -e

TOKEN=$1
BRANCH=$2
BRANCH_DIR=branch-$BRANCH

# All git output below is sent to dev/null to avoid exposing anything sensitive in build logs

echo checkout $BRANCH
mkdir $BRANCH_DIR
cd $BRANCH_DIR

git config --global user.name "CircleCI" 
git init
git remote add --fetch origin https://$TOKEN@github.com/torbjorv/ng-glint.git

git checkout $BRANCH

rm -rf *
# Revert the deletion of this one, we wanna keep it
git checkout -- README.md

# Copy angular app in here
echo copy app
cp -a "../dist/." .
cp index.html 404.html

echo add files
git add -A

echo commit and push
# need 'ci skip' to ignore this branch in CircleCI
git commit --allow-empty -m "Deploy to branch '$BRANCH' [ci skip]"
git push --force --quiet origin $BRANCH

echo cleanup
cd ..
rm -rf $BRANCH_DIR