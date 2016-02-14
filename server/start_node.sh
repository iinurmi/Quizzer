#!/bin/bash
#mongod.exe --dbpath "./mongo" --port 3001
#Set MONGODB_URL and MONGODB_PORT environment variables that are used in node server
MONGODB_URL=mongodb://localhost MONGODB_PORT=3001 nodemon server.js