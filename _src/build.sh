#!/usr/bin/env bash

for file in *.html; do
  npx html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype "$file" -o "../$file"
  perl -pi -e 's/<script.*<\/script>/<script src="application.js" defer="defer"><\/script>/g' "../$file"
  perl -pi -e 's/..\/images/\/images/g' "../$file"
  perl -pi -e 's/href="..?\//href="\//g' "../$file"
  perl -pi -e 's/\.html//g' "../$file"
done

npx postcss stylesheet.css > ../stylesheet.css
npx uglifyjs scripts/*.js > ../application.js
