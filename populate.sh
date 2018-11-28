#!/bin/bash

echo "Type mongodb port :"
read port

# Populate database
mongoimport --db ski --collection employe --drop employes.json --port $port
mongoimport --db ski --collection station --drop stations.json --port $port
mongoimport --db ski --collection hotel --drop hotels.json --port $port
mongoimport --db ski --collection commerce --drop commerces.json --port $port

# Create indexes
mongo localhost:$port/ski indexes.js
