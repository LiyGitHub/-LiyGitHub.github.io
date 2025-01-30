#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 将保存的token复制到@github前面就可以执行脚本进行部署了
git push -f https://@github.com/LiyGitHub/LiyGitHub.github.io.git main:gh-pages

cd -
