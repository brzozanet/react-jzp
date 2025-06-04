#!/bin/bash

cd /e/GitHub/courses/react-jzp

declare -A repos=(
  ["02-render-state"]="https://github.com/brzozanet/jzp-react-module-02-render-state.git"
  ["03-styling"]="https://github.com/brzozanet/jzp-react-module-03-styling.git"
  ["05-api-hooks"]="https://github.com/brzozanet/jzp-react-module-05-api-hooks.git"
  ["06.1-state-advanced"]="https://github.com/brzozanet/jzp-react-module-06.1-state-advanced.git"
  ["06.2-todo-reducer"]="https://github.com/brzozanet/jzp-react-module-06.2-todo-reducer.git"
  ["06.3-custom-hooks"]="https://github.com/brzozanet/jzp-react-module-06.3-custom-hooks.git"
  ["06.4-portal"]="https://github.com/brzozanet/jzp-react-module-06.4-portal.git"
  ["07-router"]="https://github.com/brzozanet/jzp-react-module-07-router.git"
)

for prefix in "${!repos[@]}"; do
  alias_name="rs${prefix//./-}"

  echo "🔄 Importuję $prefix z ${repos[$prefix]}"
  git remote add "$alias_name" "${repos[$prefix]}"
  git fetch "$alias_name"

  echo "📁 Dodaję do folderu: $prefix"
  git subtree add --prefix="$prefix" "$alias_name" main

  echo "🧹 Usuwam remote: $alias_name"
  git remote remove "$alias_name"

  echo "✅ Gotowe: $prefix"
  echo "----------------------------------------"
done

echo "🚀 Wszystkie repozytoria zostały dodane!"
