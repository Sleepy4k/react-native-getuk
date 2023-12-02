#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const defaultOptions = require('./default');

let cliOptions = {};
const args = process.argv.slice(2);

args.forEach(function (arg) {
  const splitArr = arg.split('=');

  if (splitArr.length) {
    let k = splitArr[0].split('--');
    const v = splitArr.pop();

    if (k.length) {
      k = k.pop();
      cliOptions[k] = v;
    }
  }
});

const options = Object.assign({}, defaultOptions, cliOptions);
const passedEnv = options.env || "data";

if (!fs.existsSync(path.join(process.cwd(), options.configFile))) {
  console.log("No config file exists to update the environment variables into.");
  console.log("Creating a config file for you.");
  createConfigFile();
  console.log("SUCCESS: Created config file.");
  buildConfig(passedEnv);
} else {
  buildConfig(passedEnv);
}

function buildConfig(env) {
  let config;
  const fpath = path.join(process.cwd(), options.configFile);
  const envFilePath = path.join(process.cwd(), options.configPath,  env + "." + options.template);

  if (!fs.existsSync(envFilePath)) {
    console.log("FAIL:", env + "." + options.template, "config file not found, aborting!");
    return;
  }

  const envFile = require(envFilePath) || {};

  if (fs.existsSync(fpath)) {
    config = JSON.parse(fs.readFileSync(path.join(process.cwd(), options.configFile), 'utf8')) || {};
    config.expo = config.expo || {};
    config.expo.extra = envFile;
    fs.writeFileSync(path.join(process.cwd(), options.outputFile), JSON.stringify(config, null, 2), 'utf8');
  }
}

function createConfigFile() {
  var appJson = fs.readFileSync(path.join(process.cwd(), options.outputFile), "utf8");
  fs.writeFileSync(path.join(process.cwd(), options.configFile), appJson, 'utf8');
}
