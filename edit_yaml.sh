#!/bin/bash

# File to edit
FILE="testfile.yml"

# updating configmap
yq -i -y '.configmap.ABC = $1' $FILE
