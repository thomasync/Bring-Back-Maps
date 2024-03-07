#!/bin/sh

version=$(grep '"version":' manifest.json | sed 's/.*"\([0-9.]*\)".*/\1/')
filename="bringbackmaps-$version.zip"

zip -r build/$filename . -x "scripts/*" -x "build/*" -x ".git/*"