#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username default --dbname postgres <<-EOSQL
    CREATE DATABASE node;
    GRANT ALL PRIVILEGES ON DATABASE default TO node;
EOSQL