#!/usr/bin/env node
const testFolder = './.ssh/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
   console.log(`your ssh key directory contains:`);
  files.forEach(file => {
    console.log(file);
  });
});
