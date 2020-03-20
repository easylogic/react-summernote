#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build-storybook

# navigate into the build output directory
mv .out/index.html .out/storybook.html

npm run build:index:lite

cd .out/

# if you are deploying to a custom domain
echo 'react-summernote.easylogic.studio' > CNAME

git init
git add -A
git commit -m 'storybook deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/easylogic/react-summernote-site.git master:master

cd -