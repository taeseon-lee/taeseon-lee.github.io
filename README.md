# taeseon-lee.github.io

Git global setup
git config --global user.name "taeseon_lee"
git config --global user.email "dlxotjssla@gmail.com"

Create a new repository
git clone https://gitlab.com/dlxotjssla/taeseon_test.git
git clone https://github.com/taeseon-lee/taeseon-lee.github.io/
cd taeseon_test
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin https://gitlab.com/dlxotjssla/taeseon_test.git
git remote add origin https://github.com/taeseon-lee/taeseon-lee.github.io/
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin https://gitlab.com/dlxotjssla/taeseon_test.git
git remote add origin https://github.com/taeseon-lee/taeseon-lee.github.io/
git push -u origin --all
git push -u origin --tags

git stash [save]
git stash list
git stash apply
git stash drop

git remote set-url origin https://github.com/user/repo2.git
