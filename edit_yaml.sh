#!/bin/bash

# File to edit
FILE="testfile.yml"

# updating configmap
yq -i -y '.configmap.ABC = "V0.1.1"' $FILE
