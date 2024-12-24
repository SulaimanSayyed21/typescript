# Bash script to setup a Teypescript Node.js environement

#!/bin/bash 
echo 'Initialising a Node.js project'
npm init -y
echo 'Installing typescript'
npm install typescript --save-dev
echo 'Installing ts-node'
npm install ts-node --save-dev
echo 'Installing nodemon'
npm install nodemon --save-dev
echo 'Creating a tsconfig.json file'
npx tsc --init
echo 'install typescript-eslint/plugin and parser'
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
echo 'Creating a src folder'
mkdir src
echo 'Creating a dist folder'
mkdir dist
echo 'Creating a main.ts file'
touch src/main.ts
echo `In src folder, create 10 directories: giving them name exercise-01 to exercise-10`
echo `In each directory , create 01.ts to 10.ts files and instructions-01.md to instructions-10.md files`
echo creatign a loop here to create 10 directories
for i in {1..10}
do
  mkdir src/exercise-0$i
    echo `In each directory, create 01.ts and instructions-01.md files`
  touch src/exercise-0$i/0$i.ts
  touch src/exercise-0$i/instructions-0$i.md
done

echo 'Creating a nodemon.json file'
touch nodemon.json
echo 'Creating a .gitignore file'
touch .gitignore
echo 'Creating a .env file'
touch .env
echo 'Creating a README.md file'
touch README.md
echo 'Creating a LICENSE file'
touch LICENSE
echo 'Creating a .editorconfig file'
touch .editorconfig
echo 'Creating a .prettierrc file'
touch .prettierrc
echo 'Creating a .eslintrc.json file'
touch .eslintrc.json
echo 'Creating a .eslintignore file'
touch .eslintignore
echo 'Creating a .vscode folder'
mkdir .vscode
echo 'Creating a launch.json file'
touch .vscode/launch.json
echo 'Creating a settings.json file'
touch .vscode/settings.json
echo 'Creating a tasks.json file'
touch .vscode/tasks.json
echo 'Creating a .github folder'
mkdir .github
echo 'Creating a workflows folder'
mkdir .github/workflows


echo 'Setup complete'

