#!/bin/bash
set -e

if [ -z "$APP" ]; then
    export APP=app.js
fi

cd /app/src

exec "$@"
