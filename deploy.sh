
#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

cd dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:IrbisPonyashka/VintaLife.git master:gh-pages

cd -