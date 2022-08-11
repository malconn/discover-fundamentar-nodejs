const getFlagValue = require('./getflag');

console.log(`Olá ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)