#!/usr/bin/env node
const path = require('path');
const homedir = require('os').homedir();
const testFolder = path.join(homedir,'.ssh');
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  console.log(`your ssh key directory contains:`);
  files.forEach(file => {
    console.log(file);
  });
});
