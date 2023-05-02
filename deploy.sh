#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

#git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://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@github.com/LiyGitHub/LiyGitHub.github.io.git master:gh-pages

cd -
