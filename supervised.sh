#!/bin/bash
DEPS=$(find ./lib -name "*.js" | paste -s -d, -)
DEPS+="bundle.js,server.js"
supervisor -w $DEPS server.js
