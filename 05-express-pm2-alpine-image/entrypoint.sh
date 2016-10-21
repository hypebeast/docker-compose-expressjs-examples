#!/bin/bash
set -e

if [ -z "$APP" ]; then
    export APP=./bin/www
fi

cd /app/src

exec "$@"
