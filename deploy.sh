#!/user/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/kazuya29184545/movify3.git master:gh-pages

cd -
