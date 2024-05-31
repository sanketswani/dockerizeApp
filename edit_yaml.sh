#!/bin/bash

# File to edit
FILE="testfile.yml"

VERSION=$1

# updating configmap
yq -i -y '.configmap.ABC = "\$VERSION\"' $FILE
