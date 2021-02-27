#!/usr/bin/env bash

npx html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype index.html -o ../index.html
npx postcss stylesheet.css > ../stylesheet.css
npx uglifyjs scripts/*.js > ../application.js

