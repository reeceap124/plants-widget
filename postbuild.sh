#!/bin/bash

# The purpose of this script is to do things with files generated by
# 'create-react-app' after 'build' is run.
# 1. Move files to a new directory called 'user'
#    The resulting structure is 'build/user/static/<etc>'
# 2. Update reference on generated files from
#    static/<etc>
#     to
#    user/static/<etc>
#
# More details on: https://github.com/facebook/create-react-app/issues/3824
cd build/static/js
find -name "*.js" -and -name "main.*" -exec mv {} plants_manager.js \;