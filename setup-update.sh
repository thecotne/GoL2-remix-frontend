#!/usr/bin/env bash
set -e

# install nvm and up-to-date versions of node and pnpm
source ./setup-nvm.sh
nvm version-remote 16 > .nvmrc
nvm install
corepack enable
corepack use pnpm@8.x
