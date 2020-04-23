#!/usr/bin/env node

/*
 * Third-party modules 
 */

 const { writeFileSync } = require('fs');
 const { v4: createId } = require('uuid');

/*
 * Runs script 
 */

writeFileSync(
   `${process.cwd()}/dist/cache.js`,
   `const cache = { token: '${createId()}' }`,
  )