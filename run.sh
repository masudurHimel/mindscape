#!/bin/bash
set -e

cd "$(dirname "$0")"

echo "Building..."
npm run build

echo "Starting dev server..."
npm run dev
